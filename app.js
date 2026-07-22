/*
 * Deutsch Review Lab — 交互逻辑
 * 渲染模块导航 + 四个标签页(语法/单词/习题/复习),习题即时反馈。
 * 扩展点:新功能优先做成独立 render 函数,挂到 TABS 即可。
 */
(function () {
  "use strict";

  const DATA = window.GERMAN_DATA;
  const AUTHORED = DATA.vocabDecks || [];   // data.js 里的词库(含暑期密集课程专区)
  const state = {
    view: "module",            // "module" | "vocab" | "review"
    moduleId: DATA.modules[0].id,
    tab: "grammar",
    deckId: AUTHORED[0] ? AUTHORED[0].id : null,
    addColl: "我的补充",   // ➕ 添加时默认合集
    vocabTab: "cards",         // "cards" | "cloze"
    // SRS 复习 stepper
    reviewQueue: [], reviewIdx: 0, reviewFlipped: false, reviewTitle: "", reviewSource: "due",
    // 搜索
    searchQuery: "", searchTag: "", searchLevel: "",
    // 闯关(不规则动词训练营)
    drillId: null, drillIdx: 0, drillMode: "hub", drillScore: { correct: 0, total: 0 },
    score: { correct: 0, total: 0 }
  };
  /* ---------- 「我的补充」词库(用户自己加的词,存 localStorage,可分合集) ---------- */
  const USER_KEY = "drl_user_vocab_v1";
  let userWords = [];
  try { userWords = JSON.parse(localStorage.getItem(USER_KEY) || "[]"); } catch (e) { userWords = []; }
  if (!Array.isArray(userWords)) userWords = [];
  function saveUserWords() { try { localStorage.setItem(USER_KEY, JSON.stringify(userWords)); } catch (e) {} }
  function addUserWord(w) { userWords.unshift(w); saveUserWords(); }
  // 用户词按「合集(coll)」分成多个 deck
  function userDeckList() {
    const by = {};
    userWords.forEach((w) => { const c = w.coll || "我的补充"; (by[c] = by[c] || []).push(w); });
    return Object.keys(by).map((c) => ({ id: "user::" + c, group: "➕ 我的补充", level: "我的", lesson: c, theme: "自己添加", source: "我添加", words: by[c] }));
  }
  const allDecks = () => AUTHORED.concat(userDeckList());
  const currentDeck = () => allDecks().find((d) => d.id === state.deckId);

  /* ---------- SRS 间隔重复引擎(localStorage 持久化) ---------- */
  const SRS = (function () {
    const KEY = "drl_srs_v1";
    const INTERVALS = [0, 1, 3, 7, 16, 35]; // 各 box 的天数;box 5 视为已掌握
    let store = {};
    try { store = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { store = {}; }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };
    const today = () => Math.floor(Date.now() / 86400000);
    // 跨课同词合并:键 = 词本身(de),不再带课号。迁移旧的「课::词」数据。
    (function migrate() {
      let changed = false;
      Object.keys(store).forEach((k) => {
        if (k.indexOf("::") < 0) return;
        const de = k.split("::").slice(1).join("::");
        const o = store[k], c = store[de];
        if (!c) store[de] = { box: o.box, due: o.due, lapses: o.lapses || 0, seen: o.seen || 0 };
        else {
          // 合并:取更靠后的 box / 更早到期,lapses 与 seen 相加
          const better = o.box > c.box || (o.box === c.box && o.due < c.due);
          store[de] = { box: Math.max(o.box, c.box), due: better ? o.due : c.due,
            lapses: (c.lapses || 0) + (o.lapses || 0), seen: (c.seen || 0) + (o.seen || 0) };
        }
        delete store[k]; changed = true;
      });
      if (changed) save();
    })();
    return {
      today,
      get: (de) => store[de],
      grade(de, known) {
        const s = store[de] || { box: 0, due: today(), lapses: 0, seen: 0 };
        s.seen++;
        if (known) s.box = Math.min(s.box + 1, 5);
        else { s.box = 0; s.lapses++; }
        s.due = today() + INTERVALS[s.box];
        store[de] = s; save();
        return s;
      },
      maxBox: 5,
      stats() {
        const vals = Object.values(store);
        return { tracked: vals.length, mastered: vals.filter((s) => s.box >= 5).length };
      },
      exportJSON: () => JSON.stringify(store),
      importJSON(str) { const obj = JSON.parse(str); if (obj && typeof obj === "object") { store = obj; save(); return true; } return false; }
    };
  })();

  /* ---------- 发音 TTS(浏览器自带语音合成) ---------- */
  function speak(text) {
    try {
      if (!window.speechSynthesis) return;
      const clean = String(text).replace(/\*\*/g, "");
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "de-DE"; u.rate = 0.95;
      const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().indexOf("de") === 0);
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  function speakBtn(text, cls) {
    return el("button", { class: "spk " + (cls || ""), title: "朗读德语", onclick: (e) => { e.stopPropagation(); speak(text); } }, "🔊");
  }

  // 把所有 deck 的词拉平成 {deck, word}
  function allWords() {
    const out = [];
    allDecks().forEach((d) => d.words.forEach((w) => out.push({ deck: d, word: w })));
    return out;
  }
  // 按词去重(同一个 de 只保留一条,跨课合并)
  function dedupeByDe(list) {
    const seen = new Set(), out = [];
    list.forEach((e) => { if (!seen.has(e.word.de)) { seen.add(e.word.de); out.push(e); } });
    return out;
  }
  function dueEntries() {
    const t = SRS.today();
    return dedupeByDe(allWords().filter(({ word }) => { const s = SRS.get(word.de); return s && s.due <= t; }));
  }
  function wordbookEntries() {
    return dedupeByDe(allWords().filter(({ word }) => { const s = SRS.get(word.de); return s && s.lapses > 0 && s.box < SRS.maxBox; }));
  }

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, props = {}, children = []) => {
    const n = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    });
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  };
  const stars = (n) => "★".repeat(n) + "☆".repeat(Math.max(0, 4 - n));
  const currentModule = () => DATA.modules.find((m) => m.id === state.moduleId);

  /* ---------- 顶栏 / 分数 ---------- */
  function initHeader() {
    $("#app-title").textContent = DATA.meta.title;
    $("#app-sub").textContent = DATA.meta.subtitle + " · " + DATA.meta.source;
  }
  function renderScore() {
    const { correct, total } = state.score;
    $("#score-correct").textContent = correct;
    $("#score-total").textContent = total;
    $("#score-fill").style.width = (total ? (correct / total) * 100 : 0) + "%";
  }
  function award(ok) {
    state.score.total++;
    if (ok) state.score.correct++;
    renderScore();
  }

  /* ---------- 左侧导航 ---------- */
  // 已抽取的模块 id(其余显示为「待处理」占位,方便逐步扩展)
  const READY = new Set(DATA.modules.map((m) => m.id));
  const ALL_MODULES = [
    [1, "名词与格 Kasus", "四格 + Genitiv + n-变化"],
    [2, "代词 Pronomen", "人称 + 物主 + 反身"],
    [3, "介词 Präpositionen", "支配格 + Wechsel + 搭配"],
    [4, "动词与宾语 Verben", "Dativ + 双宾 + 可分 + 位置"],
    [5, "情态动词 Modalverben", "Präsens + Präteritum"],
    [6, "时态 Zeitformen", "Perfekt + Präteritum"],
    [7, "形容词 Adjektive", "词尾三套 + 比较级"],
    [8, "从句与语序", "weil/wenn/dass/ob"],
    [9, "写作与表达", "邮件 + 描述人 + 看图"],
    [10, "词汇导航 Wortschatz", "按主题背词"],
    [11, "不规则动词训练营", "完成时 104 词 · 元音家族"]
  ];
  function renderNav() {
    const nav = $("#module-nav");
    nav.innerHTML = "";

    // —— 语法模块 ——
    nav.appendChild(el("div", { class: "nav-head" }, "语法模块"));
    ALL_MODULES.forEach(([id, title, sub]) => {
      const ready = READY.has(id);
      const active = state.view === "module" && id === state.moduleId;
      const item = el("button", {
        class: "nav-item" + (active ? " active" : "") + (ready ? "" : " todo"),
        onclick: ready ? () => {
          state.view = "module"; state.moduleId = id;
          const mm = DATA.modules.find((x) => x.id === id);
          state.tab = (mm && mm.drills && mm.drills.length) ? "drill" : "grammar";
          state.drillMode = "hub";
          render();
        } : null
      }, [
        el("span", {}, ready ? `${id}. ${title}` : `${id}. ${title} ⬜`),
        el("span", { class: "nav-sub" }, sub)
      ]);
      nav.appendChild(item);
    });

    // —— 词汇库 ——
    if (AUTHORED.length) {
      nav.appendChild(el("div", { class: "nav-head" }, "📚 词汇库"));

      nav.appendChild(el("button", {
        class: "nav-item srs" + (state.view === "search" ? " active" : ""),
        onclick: () => { state.view = "search"; render(); }
      }, [
        el("span", {}, "🔍 搜索词汇"),
        el("span", { class: "nav-sub" }, "全部 " + allWords().length + " 词 · 按标签筛选")
      ]));
      nav.appendChild(el("button", {
        class: "nav-item srs" + (state.view === "add" ? " active" : ""),
        onclick: () => { state.view = "add"; render(); }
      }, [
        el("span", {}, "➕ 添加词汇"),
        el("span", { class: "nav-sub" }, userWords.length ? "已加 " + userWords.length + " 个" : "上课记的新词")
      ]));

      const dueN = dueEntries().length;
      const wbN = wordbookEntries().length;
      nav.appendChild(el("button", {
        class: "nav-item srs" + (state.view === "review" && state.reviewSource === "due" ? " active" : ""),
        onclick: () => startStepper("due")
      }, [
        el("span", {}, `🔁 今日复习${dueN ? " (" + dueN + ")" : ""}`),
        el("span", { class: "nav-sub" }, dueN ? "到期待复习" : "暂无到期")
      ]));
      nav.appendChild(el("button", {
        class: "nav-item srs" + (state.view === "review" && state.reviewSource === "wordbook" ? " active" : ""),
        onclick: () => startStepper("wordbook")
      }, [
        el("span", {}, `⭐ 生词本${wbN ? " (" + wbN + ")" : ""}`),
        el("span", { class: "nav-sub" }, wbN ? "还没掌握的词" : "空")
      ]));

      // 按「分组(group)」把 deck 分成专区显示
      const groupName = (d) => d.group || (d.level === "A2" ? "A2 词库" : d.level === "A1" ? "A1 词库" : "词库");
      const groups = {}, order = [];
      allDecks().forEach((d) => {
        if (!d.words.length) return;                 // 空 deck 不显示
        const g = groupName(d);
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(d);
      });
      order.forEach((g) => {
        nav.appendChild(el("div", { class: "nav-subhead" }, g));
        groups[g].forEach((d) => {
          const active = state.view === "vocab" && d.id === state.deckId;
          nav.appendChild(el("button", {
            class: "nav-item" + (active ? " active" : ""),
            onclick: () => { state.view = "vocab"; state.deckId = d.id; state.vocabTab = "cards"; render(); }
          }, [
            el("span", {}, `${d.level} · ${d.lesson}`),
            el("span", { class: "nav-sub" }, `${d.theme} · ${d.words.length}词`)
          ]));
        });
      });

      // 备份:导出 / 导入复习进度
      nav.appendChild(el("div", { class: "nav-head" }, "⚙️ 进度备份"));
      nav.appendChild(el("div", { class: "nav-tools" }, [
        el("button", { class: "tool-btn", onclick: exportSRS }, "⤓ 导出"),
        el("button", { class: "tool-btn", onclick: importSRS }, "⤒ 导入")
      ]));
    }
  }

  /* ---------- 进度 + 我的补充词 导出 / 导入 ---------- */
  function exportSRS() {
    try {
      const bundle = { v: 1, srs: JSON.parse(SRS.exportJSON()), userVocab: userWords };
      const blob = new Blob([JSON.stringify(bundle)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = el("a", { href: url, download: "deutsch-review-backup.json" });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) { alert("导出失败:" + e.message); }
  }
  function importSRS() {
    const input = el("input", { type: "file", accept: "application/json,.json" });
    input.addEventListener("change", () => {
      const f = input.files && input.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          const obj = JSON.parse(String(r.result));
          if (obj && (obj.srs || obj.userVocab)) {
            // 新版打包格式
            if (obj.srs) SRS.importJSON(JSON.stringify(obj.srs));
            if (Array.isArray(obj.userVocab)) { userWords.length = 0; obj.userVocab.forEach((w) => userWords.push(w)); saveUserWords(); }
          } else {
            // 旧版:纯 SRS map
            SRS.importJSON(String(r.result));
          }
          render(); alert("✅ 已导入(复习进度 + 我的补充词)");
        } catch (e) { alert("导入失败:不是有效的备份文件"); }
      };
      r.readAsText(f);
    });
    input.click();
  }

  /* ---------- 标签页(动态,按视图) ---------- */
  const MODULE_TABS = [
    ["grammar", "📐 语法"], ["vocab", "🗂️ 单词"], ["exercises", "✏️ 习题"], ["quiz", "🔁 复习"]
  ];
  // 有 drills 的模块(如不规则动词训练营):闯关为主,表格降为参考
  const DRILL_TABS = [["drill", "🎯 闯关背词"], ["grammar", "📖 规律表(参考)"]];
  const tabsForModule = (m) => (m && m.drills && m.drills.length) ? DRILL_TABS : MODULE_TABS;
  const VOCAB_TABS = [
    ["cards", "🃏 词卡"], ["cloze", "✏️ 例句挖空"]
  ];
  function renderTabs() {
    const bar = $("#tabs");
    bar.innerHTML = "";
    if (state.view === "review" || state.view === "search" || state.view === "add") return;   // 复习 / 搜索 / 添加不用标签页
    const defs = state.view === "vocab" ? VOCAB_TABS : tabsForModule(currentModule());
    if (state.view === "module" && !defs.some(([id]) => id === state.tab)) state.tab = defs[0][0];
    const cur = state.view === "vocab" ? state.vocabTab : state.tab;
    defs.forEach(([id, label]) => {
      const btn = el("button", {
        class: "tab" + (id === cur ? " active" : ""),
        onclick: () => {
          if (state.view === "vocab") state.vocabTab = id; else state.tab = id;
          renderTabs();
          renderPanel();
        }
      }, label);
      bar.appendChild(btn);
    });
  }

  /* ---------- 标题区(模块 / 词汇库 / 复习 / 搜索) ---------- */
  function renderHead() {
    if (state.view === "search") {
      $("#module-head").innerHTML = "";
      $("#module-head").appendChild(el("div", { class: "module-head" }, [
        el("h2", {}, "🔍 搜索词汇"),
        el("div", {}, [el("span", { class: "badge" }, "全部 " + allWords().length + " 词"), el("span", { class: "badge" }, "德语 / 中文 / 按标签")])
      ]));
      return;
    }
    if (state.view === "add") {
      $("#module-head").innerHTML = "";
      $("#module-head").appendChild(el("div", { class: "module-head" }, [
        el("h2", {}, "➕ 添加词汇 / 词组"),
        el("div", {}, [el("span", { class: "badge" }, "存进「我的补充」"), el("span", { class: "badge" }, "可复习 · 随备份导出")])
      ]));
      return;
    }
    if (state.view === "review") {
      $("#module-head").innerHTML = "";
      $("#module-head").appendChild(el("div", { class: "module-head" }, [
        el("h2", {}, state.reviewTitle),
        el("div", {}, [el("span", { class: "badge" }, "间隔重复 SRS"), el("span", { class: "badge" }, "记忆曲线 1·3·7·16·35 天")])
      ]));
      return;
    }
    if (state.view === "vocab") return renderDeckHead();
    const m = currentModule();
    $("#module-head").innerHTML = "";
    $("#module-head").appendChild(
      el("div", { class: "module-head" }, [
        el("h2", {}, `模块${m.id} · ${m.title}`),
        el("div", {}, [
          el("span", { class: "badge" }, m.subtitle),
          el("span", { class: "badge" }, "Level " + m.level),
          el("span", { class: "badge stars" }, stars(m.difficulty)),
          ...m.tags.map((t) => el("span", { class: "badge" }, "#" + t))
        ])
      ])
    );
  }
  function renderDeckHead() {
    const d = currentDeck();
    $("#module-head").innerHTML = "";
    $("#module-head").appendChild(
      el("div", { class: "module-head" }, [
        el("h2", {}, `📚 ${d.level} · ${d.lesson} ${d.theme}`),
        el("div", {}, [
          el("span", { class: "badge" }, "Level " + d.level),
          el("span", { class: "badge" }, d.words.length + " 词"),
          el("span", { class: "badge" }, "#wortschatz")
        ])
      ])
    );
  }

  /* ---------- 格 → 颜色(贯穿表格行首 + 例句标签) ---------- */
  const CASE_CLASS = { Nom: "c-nom", Gen: "c-gen", Dat: "c-dat", Akk: "c-akk" };
  function caseClass(label) {
    const key = Object.keys(CASE_CLASS).find((k) => label.indexOf(k) === 0 || label.indexOf(k) > -1);
    return key ? CASE_CLASS[key] : "";
  }

  /* ---------- 可折叠区块 ---------- */
  function collapsible(label, contentNode, openByDefault) {
    const body = el("div", { class: "collapse-body" }, [contentNode]);
    body.style.display = openByDefault ? "block" : "none";
    const head = el("button", { class: "collapse-head" }, label);
    head.addEventListener("click", () => {
      const open = body.style.display === "none";
      body.style.display = open ? "block" : "none";
      head.classList.toggle("open", open);
    });
    if (openByDefault) head.classList.add("open");
    return el("div", { class: "collapse" }, [head, body]);
  }

  /* ---------- 表格(支持默写遮挡) ---------- */
  function buildTable(tb) {
    const table = el("table");
    table.appendChild(el("tr", {}, tb.headers.map((h) => el("th", {}, h))));
    tb.rows.forEach((row, ri) => {
      table.appendChild(el("tr", {}, row.map((cell, ci) => {
        const isHl = (tb.highlight || []).some(([r, c]) => r === ri && c === ci);
        const cls = (ci === 0 ? caseClass(cell) + " rowhead " : "") + (isHl ? "hl" : "");
        const td = el("td", { class: cls.trim() }, cell);
        // 默写:首列(行标签)和表头不遮,其余数据格可遮
        if (tb.maskable && ci > 0) { td.dataset.val = cell; td.classList.add("cell-data"); }
        return td;
      })));
    });
    if (!tb.maskable) return el("div", { class: "table-wrap" }, [table]);

    // 默写模式开关
    let masked = false;
    const toggle = el("button", { class: "btn ghost mask-btn" }, "✏️ 默写模式:关");
    const setMask = (on) => {
      masked = on;
      toggle.textContent = "✏️ 默写模式:" + (on ? "开(点格子翻开)" : "关");
      toggle.classList.toggle("active", on);
      table.querySelectorAll("td.cell-data").forEach((td) => {
        td.classList.toggle("masked", on);
        td.textContent = on ? "？" : td.dataset.val;
        td.onclick = on ? () => { td.classList.remove("masked"); td.classList.add("revealed"); td.textContent = td.dataset.val; } : null;
      });
    };
    toggle.addEventListener("click", () => setMask(!masked));
    return el("div", {}, [toggle, el("div", { class: "table-wrap" }, [table])]);
  }

  /* ---------- 决策树(yes/no 流程图) ---------- */
  function buildFlowchart(fc) {
    const box = el("div", { class: "flow" });
    const render = (id) => {
      box.innerHTML = "";
      const node = fc.nodes[id];
      if (node.result) {
        box.appendChild(el("div", { class: "flow-result " + (node.good ? "good" : "bad") }, node.result));
        box.appendChild(el("button", { class: "btn ghost", onclick: () => render(fc.start) }, "↻ 重新走一遍"));
        return;
      }
      box.appendChild(el("div", { class: "flow-q" }, node.q));
      box.appendChild(el("div", { class: "flow-btns" }, [
        el("button", { class: "btn", onclick: () => render(node.yes) }, "是 ✓"),
        el("button", { class: "btn ghost", onclick: () => render(node.no) }, "否 ✗")
      ]));
    };
    render(fc.start);
    return el("div", {}, [el("div", { class: "caption" }, "🌳 " + (fc.title || "判断流程")), box]);
  }

  /* ---------- 语法 ↔ 词库 打通 ---------- */
  // 语法点的标签 → 词库里对应的标签(只映射有意义的语法标签)
  const GRAMMAR_TO_VOCAB_TAG = {
    "n-deklination": ["n-deklination"],
    "trennbar": ["trennbar"],
    "reflexiv": ["reflexiv"],
    "modalverb": ["modal"],
    "dativ": ["dativ-verb"]
  };
  function gotoDeck(deckId) {
    state.view = "vocab"; state.deckId = deckId; state.vocabTab = "cards";
    render(); window.scrollTo(0, 0);
  }
  // 根据语法点的 tags,找词库里相关的词(去重,最多 14 个)
  function buildRelatedVocab(g) {
    const wanted = new Set();
    (g.tags || []).forEach((t) => (GRAMMAR_TO_VOCAB_TAG[t] || []).forEach((v) => wanted.add(v)));
    if (!wanted.size) return null;
    const seen = new Set(), hits = [];
    allWords().forEach(({ deck, word }) => {
      if (seen.has(word.de)) return;
      if ((word.tags || []).some((t) => wanted.has(t))) { seen.add(word.de); hits.push({ deck, word }); }
    });
    if (!hits.length) return null;
    const shown = hits.slice(0, 14);
    const chips = el("div", { class: "relchips" }, shown.map(({ deck, word }) => {
      const isNoun = word.gender === "der" || word.gender === "die" || word.gender === "das";
      return el("button", {
        class: "relchip", title: `${word.zh} · ${deck.level} ${deck.lesson}(点击去该词库)`,
        onclick: () => gotoDeck(deck.id)
      }, [
        el("span", { class: "relchip-art " + (isNoun ? "art-" + word.gender : "art-other") }, word.gender),
        el("span", {}, word.de)
      ]);
    }));
    const label = `🔗 相关词汇(词库里 ${hits.length} 个${hits.length > 14 ? ",显示前 14" : ""})`;
    return collapsible(label, chips, false);
  }

  /* ---------- 渲染:语法 ---------- */
  function renderGrammar(m) {
    const wrap = el("div");
    m.grammar.forEach((g) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h3", {}, `${g.id} · ${g.title}`));
      card.appendChild(el("div", {}, [
        el("span", { class: "badge" }, "Level " + g.level),
        el("span", { class: "badge stars" }, stars(g.difficulty)),
        ...g.tags.map((t) => el("span", { class: "badge" }, "#" + t))
      ]));
      if (g.summary) card.appendChild(el("p", { class: "summary" }, g.summary));

      // ① 分步讲解(默认折叠)
      if (g.explain && g.explain.length) {
        const ol = el("ol", { class: "steps" }, g.explain.map((s) => el("li", {}, s)));
        card.appendChild(collapsible("💡 为什么?分步讲解", ol, false));
      }
      // ③ 助记口诀
      if (g.mnemonic) card.appendChild(el("div", { class: "mnemonic" }, ["🧠 口诀:", el("span", {}, g.mnemonic)]));

      // 表格(可默写)
      (g.tables || []).forEach((tb) => {
        if (tb.caption) card.appendChild(el("div", { class: "caption" }, tb.caption));
        card.appendChild(buildTable(tb));
      });

      // ③ 决策树
      if (g.flowchart) card.appendChild(buildFlowchart(g.flowchart));

      (g.notes || []).forEach((nt) => card.appendChild(el("div", { class: "note" }, nt)));

      // ① 例句 + 拆解
      (g.examples || []).forEach((ex) => {
        const head = el("div", {}, [
          el("span", { class: "de" }, ex.de),
          speakBtn(ex.de, "inline-spk"),
          ex.case ? el("span", { class: "case-tag " + caseClass(ex.case) }, ex.case) : null
        ]);
        const body = el("div", { class: "example" }, [head, el("div", { class: "zh" }, "🇨🇳 " + ex.zh)]);
        if (ex.steps && ex.steps.length) {
          const ol = el("ol", { class: "steps small" }, ex.steps.map((s) => el("li", {}, s)));
          body.appendChild(collapsible("🔍 拆解这句", ol, false));
        }
        card.appendChild(body);
      });

      // ④ 边学边练
      if (g.miniQuiz) {
        const mini = el("div", { class: "mini" }, [el("div", { class: "mini-label" }, "✏️ 现在你试:")]);
        mini.appendChild(buildQuestionCard(g.miniQuiz, null, true));
        card.appendChild(mini);
      }

      // ⑤ 相关词汇(语法 ↔ 词库打通)
      const rel = buildRelatedVocab(g);
      if (rel) card.appendChild(rel);

      wrap.appendChild(card);
    });
    return wrap;
  }

  /* ---------- 渲染:单词卡(点击翻面) ---------- */
  function renderVocab(m) {
    const grid = el("div", { class: "vocab-grid" });
    m.vocab.forEach((v) => {
      const isNoun = v.gender === "der" || v.gender === "die" || v.gender === "das";
      const front = el("div", { class: "flash-face" }, [
        el("span", { class: "flash-art " + (isNoun ? "art-" + v.gender : "art-other") }, v.gender),
        el("span", { class: "flash-word" }, v.de),
        v.plural ? el("span", { class: "flash-plural" }, (isNoun ? "复 " : "") + v.plural) : null
      ]);
      const back = el("div", { class: "flash-face flash-back" }, [
        el("span", { class: "flash-zh" }, v.zh),
        v.form ? el("span", { class: "flash-form" }, v.form) : null,
        el("span", { class: "flash-plural" }, v.level)
      ]);
      const card = el("div", { class: "flashcard" }, [el("div", { class: "flashcard-inner" }, [front, back])]);
      card.addEventListener("click", () => card.classList.toggle("flipped"));
      grid.appendChild(card);
    });
    const tip = el("p", { class: "muted" }, "点卡片翻面看中文 · 蓝=der 红=die 绿=das");
    return el("div", {}, [tip, grid]);
  }

  /* ---------- 词汇库:把 **xxx** 渲染成加粗 ---------- */
  function richText(str, blankTarget) {
    // 按 ** 分段;偶数段普通,奇数段为目标词。blankTarget=true 时目标词替换成下划线
    const parts = String(str).split("**");
    const frag = el("span");
    parts.forEach((p, i) => {
      if (i % 2 === 1) frag.appendChild(blankTarget ? el("span", { class: "cloze-blank" }, "____") : el("b", {}, p));
      else if (p) frag.appendChild(document.createTextNode(p));
    });
    return frag;
  }
  // 取出例句里 **...** 的目标词(可能有多个)
  function clozeTargets(example) {
    const parts = String(example).split("**");
    const out = [];
    for (let i = 1; i < parts.length; i += 2) out.push(parts[i]);
    return out;
  }

  /* ---------- 词汇库:单张词卡(词库 + 搜索共用) ---------- */
  function buildVCard(deck, w) {
    const isNoun = w.gender === "der" || w.gender === "die" || w.gender === "das";
    const front = el("div", { class: "vcard-face" }, [
      speakBtn(w.de, "vcard-spk"),
      el("span", { class: "flash-art " + (isNoun ? "art-" + w.gender : "art-other") }, w.gender),
      el("span", { class: "vcard-word" }, w.de),
      w.plural ? el("span", { class: "flash-plural" }, (isNoun ? "复 " : "") + w.plural) : null,
      el("span", { class: "vcard-hint" }, "点卡片看释义 →")
    ]);
    const status = el("div", { class: "vcard-status" });
    const mkGrade = (known, label, cls) => el("button", {
      class: "gbtn " + cls,
      onclick: (e) => {
        e.stopPropagation();
        const s = SRS.grade(w.de, known);
        status.textContent = known ? `✅ 已记 · ${s.due - SRS.today()} 天后再复习` : "❌ 已加入生词本";
        renderNav();
      }
    }, label);
    const back = el("div", { class: "vcard-face vcard-back" }, [
      speakBtn(w.example, "vcard-spk"),
      el("span", { class: "vcard-zh" }, w.zh),
      el("div", { class: "vcard-ex" }, richText(w.example, false)),
      el("div", { class: "vcard-exzh" }, "🇨🇳 " + w.exampleZh),
      w.note ? el("div", { class: "vcard-note" }, "搭配:" + w.note) : null,
      el("div", { class: "vcard-grade" }, [mkGrade(false, "❌ 不会", "bad"), mkGrade(true, "✅ 会了", "good")]),
      status
    ]);
    const card = el("div", { class: "vcard" }, [el("div", { class: "vcard-inner" }, [front, back])]);
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    return card;
  }

  /* ---------- 词汇库:词卡(翻面看中文 + 例句) ---------- */
  function renderDeckCards(d) {
    const grid = el("div", { class: "deck-grid" });
    d.words.forEach((w) => grid.appendChild(buildVCard(d, w)));
    const tip = el("p", { class: "muted" }, "点卡片翻面看中文 + 例句 · 🔊 听发音 · 蓝=der 红=die 绿=das · 灰=动词/形容词/短语");
    return el("div", {}, [tip, grid]);
  }

  /* ---------- 词汇库:例句挖空自测(用例句里的目标词) ---------- */
  function renderDeckCloze(d) {
    // 只取「单个目标词」的例句,做成填空题
    const items = d.words
      .filter((w) => clozeTargets(w.example).length === 1)
      .map((w) => {
        const target = clozeTargets(w.example)[0];
        const prompt = el("span", {}, [richText(w.example, true)]);
        return { w, target, promptNode: prompt };
      });
    const wrap = el("div");
    wrap.appendChild(el("p", { class: "muted" }, "看中文 + 句子,把挖空的德语词填出来(即时反馈)。"));
    items.forEach((it, i) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("div", { class: "q" }, [
        el("strong", {}, `${i + 1}. `),
        it.promptNode,
        el("div", { class: "hint" }, "🇨🇳 " + it.w.exampleZh)   // 只给中文,不泄答案
      ]));
      const fb = el("div");
      const input = el("input", { type: "text", placeholder: "填德语词…" });
      const btn = el("button", { class: "btn" }, "检查");
      const check = () => {
        if (input.dataset.done) return;
        const ok = input.value.trim().toLowerCase() === it.target.toLowerCase();
        input.classList.add(ok ? "correct" : "wrong");
        input.dataset.done = "1";
        const extra = (ok ? "" : `正确:${it.target}。`) + (it.w.de !== it.target ? `(原形 ${it.w.de})` : "") + (it.w.note ? `  搭配:${it.w.note}` : "");
        showFeedback(fb, ok, extra);
        award(ok);
        SRS.grade(it.w.de, ok);   // 答对→推进;答错→进生词本(按词,跨课合并)
        renderNav();
      };
      btn.addEventListener("click", check);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
      card.appendChild(el("div", { class: "exrow" }, [input, btn]));
      card.appendChild(fb);
      wrap.appendChild(card);
    });
    return wrap;
  }

  function renderVocabPanel() {
    const d = currentDeck();
    const panel = $("#panel");
    panel.innerHTML = "";
    panel.appendChild(state.vocabTab === "cloze" ? renderDeckCloze(d) : renderDeckCards(d));
  }

  /* ---------- SRS 复习 stepper(今日复习 / 生词本)---------- */
  function startStepper(source) {
    state.view = "review";
    state.reviewSource = source;
    state.reviewQueue = source === "wordbook" ? wordbookEntries() : dueEntries();
    state.reviewIdx = 0;
    state.reviewFlipped = false;
    state.reviewTitle = source === "wordbook" ? "⭐ 生词本复习" : "🔁 今日复习";
    render();
  }
  function renderReviewPanel() {
    const panel = $("#panel");
    panel.innerHTML = "";
    const q = state.reviewQueue;
    const total = q.length;
    if (total === 0) {
      panel.appendChild(el("div", { class: "card" }, [
        el("h3", {}, "🎉 没有要复习的词"),
        el("p", { class: "muted" }, state.reviewSource === "wordbook"
          ? "生词本是空的——在「词卡」或「例句挖空」里标记『不会』的词会进这里。"
          : "今天没有到期的词。去「词卡」学新词,或做「例句挖空」练手。")
      ]));
      return;
    }
    if (state.reviewIdx >= total) {
      panel.appendChild(el("div", { class: "card" }, [
        el("h3", {}, "🎉 复习完成!"),
        el("p", { class: "muted" }, `本轮过了 ${total} 个词。到期的会按记忆曲线再回来。`),
        el("button", { class: "btn", onclick: () => startStepper(state.reviewSource) }, "再来一轮")
      ]));
      return;
    }
    const { deck, word } = q[state.reviewIdx];
    const isNoun = word.gender === "der" || word.gender === "die" || word.gender === "das";
    panel.appendChild(el("div", { class: "review-progress" }, `${state.reviewIdx + 1} / ${total}`));
    panel.appendChild(el("div", { class: "rev-card" }, [
      el("span", { class: "flash-art " + (isNoun ? "art-" + word.gender : "art-other") }, word.gender),
      el("div", { class: "rev-word" }, [el("span", {}, word.de), speakBtn(word.de, "inline-spk")]),
      word.plural ? el("div", { class: "flash-plural" }, (isNoun ? "复 " : "") + word.plural) : null
    ]));
    if (!state.reviewFlipped) {
      panel.appendChild(el("button", { class: "btn rev-show", onclick: () => { state.reviewFlipped = true; renderReviewPanel(); } }, "显示答案"));
      return;
    }
    panel.appendChild(el("div", { class: "rev-answer" }, [
      el("div", { class: "vcard-zh" }, word.zh),
      el("div", { class: "vcard-ex" }, [richText(word.example, false), speakBtn(word.example, "inline-spk")]),
      el("div", { class: "vcard-exzh" }, "🇨🇳 " + word.exampleZh),
      word.note ? el("div", { class: "vcard-note" }, "搭配:" + word.note) : null
    ]));
    const grade = (known) => { SRS.grade(word.de, known); state.reviewIdx++; state.reviewFlipped = false; render(); };
    panel.appendChild(el("div", { class: "rev-grade" }, [
      el("button", { class: "btn bad-btn", onclick: () => grade(false) }, "❌ 不会"),
      el("button", { class: "btn good-btn", onclick: () => grade(true) }, "✅ 会了")
    ]));
  }

  /* ---------- 搜索词汇(全库 + 标签/等级筛选) ---------- */
  const SEARCH_TAGS = [
    ["", "全部"], ["n-deklination", "n-变化"], ["trennbar", "可分动词"], ["reflexiv", "反身"],
    ["dativ-verb", "Dativ动词"], ["modal", "情态"], ["adjektiv", "形容词"]
  ];
  function renderSearchPanel() {
    const panel = $("#panel"); panel.innerHTML = "";
    const input = el("input", { class: "search-input", type: "text", placeholder: "搜德语 / 中文 / 例句…" });
    input.value = state.searchQuery || "";
    const tagBar = el("div", { class: "search-filters" });
    const lvlBar = el("div", { class: "search-filters" });
    const results = el("div");

    const mkChip = (val, label, getCur, set) => el("button", {
      class: "fchip" + (getCur() === val ? " active" : ""),
      onclick: () => { set(val); refreshChips(); paint(); }
    }, label);
    function refreshChips() {
      tagBar.innerHTML = ""; lvlBar.innerHTML = "";
      SEARCH_TAGS.forEach(([v, l]) => tagBar.appendChild(mkChip(v, l, () => state.searchTag, (x) => state.searchTag = x)));
      [["", "全部等级"], ["A1", "A1"], ["A2", "A2"]].forEach(([v, l]) => lvlBar.appendChild(mkChip(v, l, () => state.searchLevel, (x) => state.searchLevel = x)));
    }
    function paint() {
      const q = (state.searchQuery || "").trim().toLowerCase();
      const tag = state.searchTag, lvl = state.searchLevel;
      const seen = new Set(), hits = [];
      allWords().forEach(({ deck, word }) => {
        if (lvl && deck.level !== lvl) return;
        if (tag && !(word.tags || []).includes(tag)) return;
        if (q) { const hay = (word.de + " " + word.zh + " " + word.example + " " + (word.note || "")).toLowerCase(); if (hay.indexOf(q) < 0) return; }
        if (seen.has(word.de)) return; seen.add(word.de);   // 同词跨课只出一次
        hits.push({ deck, word });
      });
      results.innerHTML = "";
      results.appendChild(el("p", { class: "muted" }, `${hits.length} 个结果`));
      const grid = el("div", { class: "deck-grid" });
      hits.slice(0, 200).forEach(({ deck, word }) => grid.appendChild(buildVCard(deck, word)));
      results.appendChild(grid);
      if (hits.length > 200) results.appendChild(el("p", { class: "muted" }, "(只显示前 200 个,缩小范围看更多)"));
    }
    input.addEventListener("input", () => { state.searchQuery = input.value; paint(); });
    refreshChips();
    panel.appendChild(input);
    panel.appendChild(tagBar);
    panel.appendChild(lvlBar);
    panel.appendChild(results);
    paint();
    input.focus();
  }

  /* ---------- 添加词汇 / 词组(存进「我的补充」) ---------- */
  const GENDERS = ["der", "die", "das", "动", "形", "副", "短语", "反身", "可分", "情态", "连词", "代词", "数"];
  function renderAddPanel() {
    const panel = $("#panel"); panel.innerHTML = "";
    const f = {};
    const row = (labelText, node) => el("div", { class: "addrow" }, [el("label", {}, labelText), node]);
    f.de = el("input", { class: "addinput", type: "text", placeholder: "如 Schlüssel / sich freuen / es gibt" });
    f.gender = el("select", { class: "addinput" }, GENDERS.map((g) => el("option", { value: g }, g)));
    f.plural = el("input", { class: "addinput", type: "text", placeholder: "名词填,如 -e / ¨er(非名词留空)" });
    f.zh = el("input", { class: "addinput", type: "text", placeholder: "中文意思" });
    f.example = el("input", { class: "addinput", type: "text", placeholder: "德语例句(可留空);目标词自动挖空" });
    f.exampleZh = el("input", { class: "addinput", type: "text", placeholder: "例句中文(可留空)" });
    f.note = el("input", { class: "addinput", type: "text", placeholder: "搭配/备注,如 + Dat、不可分(可留空)" });
    f.level = el("select", { class: "addinput" }, ["A1", "A2", "B1"].map((l) => el("option", { value: l }, l)));
    f.tags = el("input", { class: "addinput", type: "text", placeholder: "标签,逗号分隔,如 unterwegs, trennbar(可留空)" });
    f.coll = el("input", { class: "addinput", type: "text", placeholder: "归入哪个合集,如 暑期密集 / 我的补充" });
    f.coll.value = state.addColl || "我的补充";

    const msg = el("div", { class: "addmsg" });
    const onSave = () => {
      const de = f.de.value.trim(), zh = f.zh.value.trim();
      if (!de || !zh) { msg.textContent = "⚠️ 至少要填「德语词」和「中文」"; msg.className = "addmsg bad"; return; }
      let example = f.example.value.trim();
      if (example && example.indexOf("**") < 0) {
        const head = de.split(" ").pop(); // 词组取最后一个词作挖空目标
        const re = new RegExp("(" + head.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "i");
        if (re.test(example)) example = example.replace(re, "**$1**");
      }
      const tags = f.tags.value.split(/[,，\s]+/).map((t) => t.trim()).filter(Boolean);
      const coll = f.coll.value.trim() || "我的补充";
      state.addColl = coll;
      addUserWord({
        de, gender: f.gender.value, plural: f.plural.value.trim(), zh,
        example, exampleZh: f.exampleZh.value.trim(), note: f.note.value.trim(),
        level: f.level.value, tags: tags.length ? tags : ["补充"], coll
      });
      const n = userWords.filter((w) => (w.coll || "我的补充") === coll).length;
      msg.textContent = `✅ 已添加「${de}」→ 合集「${coll}」共 ${n} 个`; msg.className = "addmsg ok";
      ["de", "plural", "zh", "example", "exampleZh", "note", "tags"].forEach((k) => (f[k].value = ""));
      f.de.focus();
      renderNav();
    };
    f.de.addEventListener("keydown", (e) => { if (e.key === "Enter") f.zh.focus(); });
    const save = el("button", { class: "btn", onclick: onSave }, "✅ 添加");
    const view = el("button", { class: "btn ghost", onclick: () => { const c = f.coll.value.trim() || "我的补充"; if (userWords.some((w) => (w.coll || "我的补充") === c)) gotoDeck("user::" + c); else { msg.textContent = "该合集还没词"; msg.className = "addmsg"; } } }, "查看该合集");

    const form = el("div", { class: "addform" }, [
      row("德语词 *", f.de), row("词性", f.gender), row("复数", f.plural),
      row("中文 *", f.zh), row("例句", f.example), row("例句中文", f.exampleZh),
      row("搭配/备注", f.note), row("难度", f.level), row("标签", f.tags), row("合集", f.coll),
      el("div", { class: "addrow" }, [el("label", {}, ""), el("div", {}, [save, document.createTextNode("  "), view])])
    ]);
    panel.appendChild(el("p", { class: "muted" }, "填完点「添加」。名词选 der/die/das 并填复数;动词/词组选对应词性。「合集」决定归到哪个专区(如填『暑期密集』就和密集课的词放一起,连续加会记住上次的合集)。加的词能翻卡、发音、复习,并随备份一起导出。"));
    panel.appendChild(form);
    panel.appendChild(msg);
    f.de.focus();
  }

  /* ---------- 单题卡片(习题/复习/迷你题共用) ---------- */
  // index=null & bare=true 时不加外层 card 和编号(用于语法页内嵌迷你题)
  function buildQuestionCard(q, index, bare) {
    const card = el("div", { class: bare ? "" : "card" });
    card.appendChild(el("div", { class: "q" }, [
      index != null ? el("strong", {}, `${index + 1}. `) : null,
      document.createTextNode(q.prompt),
      q.hint ? el("div", { class: "hint" }, "提示:" + q.hint) : null
    ]));
    const fb = el("div");

    if (q.type === "choice") {
      const row = el("div", { class: "exrow" });
      q.options.forEach((opt) => {
        const b = el("button", { class: "opt" }, opt);
        b.addEventListener("click", () => {
          if (b.dataset.done) return;
          const ok = opt === q.answer;
          b.classList.add(ok ? "correct" : "wrong");
          if (!ok) [...row.children].find((c) => c.textContent === q.answer)?.classList.add("correct");
          [...row.children].forEach((c) => (c.dataset.done = "1"));
          showFeedback(fb, ok, q.explanation);
          award(ok);
        });
        row.appendChild(b);
      });
      card.appendChild(row);
    } else {
      // fill
      const input = el("input", { type: "text", placeholder: "填空…" });
      const btn = el("button", { class: "btn" }, "检查");
      const check = () => {
        if (input.dataset.done) return;
        const val = input.value.trim();
        const ok = q.answer.some((a) => a.toLowerCase() === val.toLowerCase());
        input.classList.add(ok ? "correct" : "wrong");
        input.dataset.done = "1";
        showFeedback(fb, ok, (ok ? "" : `正确答案:${q.answer.join(" / ")}。`) + q.explanation);
        award(ok);
      };
      btn.addEventListener("click", check);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
      card.appendChild(el("div", { class: "exrow" }, [input, btn]));
    }
    card.appendChild(fb);
    return card;
  }

  /* ---------- 渲染:习题 / 复习(可即时反馈) ---------- */
  function renderQuestionList(items, titleText) {
    const wrap = el("div");
    if (titleText) wrap.appendChild(el("p", { class: "muted" }, titleText));
    items.forEach((q, i) => wrap.appendChild(buildQuestionCard(q, i, false)));
    return wrap;
  }
  function showFeedback(node, ok, text) {
    node.innerHTML = "";
    node.appendChild(el("div", { class: "feedback " + (ok ? "ok" : "bad") }, (ok ? "✅ 正确!" : "❌ 再想想 — ") + (text || "")));
  }

  /* ---------- 标签页注册表(扩展点) ---------- */
  const TABS = {
    grammar: (m) => renderGrammar(m),
    vocab: (m) => renderVocab(m),
    exercises: (m) => renderQuestionList(m.exercises, "课上原题 + 自测题,边做边看反馈。"),
    quiz: (m) => renderQuestionList(m.quiz, "自动生成的新复习题(区别于原题)。"),
    drill: (m) => renderDrill(m)
  };

  function renderPanel() {
    if (state.view === "add") return renderAddPanel();
    if (state.view === "search") return renderSearchPanel();
    if (state.view === "review") return renderReviewPanel();
    if (state.view === "vocab") return renderVocabPanel();
    const m = currentModule();
    const panel = $("#panel");
    panel.innerHTML = "";
    let tab = state.tab;
    if (!tabsForModule(m).some(([id]) => id === tab)) tab = tabsForModule(m)[0][0];
    panel.appendChild(TABS[tab](m));
  }

  /* ---------- 闯关背词(不规则动词训练营) ---------- */
  function renderDrill(m) {
    if (state.drillMode === "run" && state.drillId) return renderDrillRun(m);
    return renderDrillHub(m);
  }
  function renderDrillHub(m) {
    const wrap = el("div");
    wrap.appendChild(el("p", { class: "muted" }, "一关一关来,从易到难。选择题先建立反射,填空题再主动写出来——比盯着表格记得牢。想看规律/口诀,点上面「📖 规律表」。"));
    m.drills.forEach((d, i) => {
      const card = el("div", { class: "card drill-card" });
      card.appendChild(el("h3", {}, `Level ${i + 1} · ${d.name}`));
      card.appendChild(el("div", {}, [
        el("span", { class: "badge" }, d.badge || ""),
        el("span", { class: "badge" }, d.questions.length + " 题")
      ]));
      if (d.tip) card.appendChild(el("p", { class: "summary" }, d.tip));
      card.appendChild(el("button", {
        class: "btn", onclick: () => {
          state.drillId = d.id; state.drillMode = "run"; state.drillIdx = 0;
          state.drillScore = { correct: 0, total: 0 }; renderPanel();
        }
      }, "▶ 开始这一关"));
      wrap.appendChild(card);
    });
    return wrap;
  }
  function renderDrillRun(m) {
    const idx = m.drills.findIndex((d) => d.id === state.drillId);
    const lvl = m.drills[idx];
    const qs = lvl.questions;
    const i = state.drillIdx;
    const wrap = el("div");
    wrap.appendChild(el("button", { class: "btn ghost", onclick: () => { state.drillMode = "hub"; renderPanel(); } }, "← 关卡列表"));

    if (i >= qs.length) {
      const pct = Math.round(state.drillScore.correct / qs.length * 100);
      const pass = pct >= 80;
      const c = el("div", { class: "card" });
      c.appendChild(el("h3", {}, pass ? "🎉 过关!" : "再练一遍会更稳"));
      c.appendChild(el("div", { class: "drill-score-big" }, `正确率 ${pct}%　(${state.drillScore.correct} / ${qs.length})`));
      c.appendChild(el("p", { class: "muted" }, pass ? "80% 以上算过关。趁热打铁进下一关,或明天再回来巩固。" : "低于 80%,建议再来一遍;答错的重点看解析。"));
      const btns = [el("button", { class: "btn ghost", onclick: () => { state.drillIdx = 0; state.drillScore = { correct: 0, total: 0 }; renderPanel(); } }, "↻ 再来一遍")];
      if (idx < m.drills.length - 1) btns.push(el("button", { class: "btn good-btn", onclick: () => { state.drillId = m.drills[idx + 1].id; state.drillIdx = 0; state.drillScore = { correct: 0, total: 0 }; renderPanel(); } }, "下一关 →"));
      c.appendChild(el("div", { class: "rev-grade" }, btns));
      wrap.appendChild(c);
      return wrap;
    }

    const pct = Math.round(i / qs.length * 100);
    wrap.appendChild(el("div", { class: "drill-head" }, [
      el("div", { class: "drill-bar" }, [el("div", { class: "drill-bar-fill", style: `width:${pct}%` })]),
      el("div", { class: "review-progress" }, `Level ${idx + 1} · ${lvl.name}　第 ${i + 1} / ${qs.length} 题　已对 ${state.drillScore.correct}`)
    ]));
    wrap.appendChild(buildDrillCard(qs[i]));
    return wrap;
  }
  function buildDrillCard(q) {
    const card = el("div", { class: "card" });
    card.appendChild(el("div", { class: "q" }, [
      document.createTextNode(q.prompt),
      q.hint ? el("div", { class: "hint" }, "提示:" + q.hint) : null
    ]));
    const fb = el("div"), nextBox = el("div", { class: "drill-next" });
    const advance = () => { state.drillIdx++; renderPanel(); };
    const showNext = () => { nextBox.appendChild(el("button", { class: "btn", onclick: advance }, "下一题 →")); };

    if (q.type === "choice") {
      const row = el("div", { class: "exrow" });
      q.options.forEach((opt) => {
        const b = el("button", { class: "opt" }, opt);
        b.addEventListener("click", () => {
          if (row.dataset.done) return; row.dataset.done = "1";
          const ok = opt === q.answer;
          b.classList.add(ok ? "correct" : "wrong");
          if (!ok) [...row.children].find((c) => c.textContent === q.answer)?.classList.add("correct");
          state.drillScore.total++; if (ok) state.drillScore.correct++;
          showFeedback(fb, ok, q.explanation); showNext();
        });
        row.appendChild(b);
      });
      card.appendChild(row);
    } else {
      const input = el("input", { type: "text", placeholder: "填德语…" });
      const btn = el("button", { class: "btn" }, "检查");
      const check = () => {
        if (input.dataset.done) return; input.dataset.done = "1";
        const val = input.value.trim();
        const ans = Array.isArray(q.answer) ? q.answer : [q.answer];
        const ok = ans.some((a) => a.toLowerCase() === val.toLowerCase());
        input.classList.add(ok ? "correct" : "wrong");
        state.drillScore.total++; if (ok) state.drillScore.correct++;
        showFeedback(fb, ok, (ok ? "" : `正确:${ans.join(" / ")}。`) + q.explanation); showNext();
      };
      btn.addEventListener("click", check);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
      card.appendChild(el("div", { class: "exrow" }, [input, btn]));
    }
    card.appendChild(fb);
    card.appendChild(nextBox);
    return card;
  }

  function render() {
    renderNav();
    renderTabs();
    renderHead();
    renderPanel();
  }

  /* ---------- 手机抽屉菜单 ---------- */
  function initDrawer() {
    const btn = $("#menu-btn"), overlay = $("#nav-overlay"), nav = $("#module-nav");
    const close = () => document.body.classList.remove("nav-open");
    if (btn) btn.addEventListener("click", () => document.body.classList.toggle("nav-open"));
    if (overlay) overlay.addEventListener("click", close);
    if (nav) nav.addEventListener("click", (e) => { if (e.target.closest(".nav-item")) close(); });
  }

  /* ---------- 启动 ---------- */
  initHeader();
  initDrawer();
  renderScore();
  render();
})();
