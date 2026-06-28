/*
 * Deutsch Review Lab — 内容数据
 * 这是 app 的唯一内容来源。新增模块 = 往 modules 数组里追加一项。
 * 以后可由 markdown 自动生成。结构保持稳定,app.js 依赖这些字段名。
 */
window.GERMAN_DATA = {
  meta: {
    title: "Fachi 學德語",
    subtitle: "暑假系统复习 · 德语 A1 语法手册",
    source: "德语课 / Notion旧笔记",
    date: "2026-06-28"
  },
  // gender → 颜色键(app.js 里映射成 CSS class)
  modules: [
    {
      id: 1,
      title: "名词与格 Kasus",
      subtitle: "四格变化 + Genitiv + n-变化",
      difficulty: 2,
      level: "A1",
      tags: ["kasus", "genitiv", "n-deklination"],

      grammar: [
        {
          id: "G1",
          title: "四格变化 Die vier Fälle",
          level: "A1", difficulty: 2,
          tags: ["kasus", "artikel"],
          summary: "德语用「格」标记名词在句中的角色,靠提问词判断。搞定四格 + 冠词变化,后面代词/介词/形容词词尾才站得稳。",
          // ① 分步讲解:选格三步法
          explain: [
            "看动词或介词:它支配哪个格?(helfen→Dat、sehen→Akk、mit→Dat)",
            "看名词的性别:阳 / 阴 / 中 / 复?",
            "查表找交叉点 = 冠词形式。例:helfen(Dat) + 阳性 = dem。"
          ],
          // ③ 助记口诀
          mnemonic: "阳性单数四连:der → des → dem → den。只有阳性 Akk 会从 der 变成 den;阴/中/复的 Akk 都和 Nom 一样不变。",
          tables: [
            {
              caption: "四个格(提问词帮你判断)",
              headers: ["格", "提问词", "作用"],
              rows: [
                ["Nominativ 主格", "wer? / was?", "主语"],
                ["Genitiv 所有格", "wessen?", "…的"],
                ["Dativ 与格", "wem?", "间接宾语(给谁)"],
                ["Akkusativ 宾格", "wen? / was?", "直接宾语"]
              ]
            },
            {
              caption: "定冠词 / 不定冠词变格 — 可开「默写模式」",
              maskable: true,
              headers: ["格", "阳 der", "阴 die", "中 das", "复 die"],
              rows: [
                ["Nom", "der / ein", "die / eine", "das / ein", "die / —"],
                ["Gen", "des / eines", "der / einer", "des / eines", "der / —"],
                ["Dat", "dem / einem", "der / einer", "dem / einem", "den +名词-n"],
                ["Akk", "den / einen", "die / eine", "das / ein", "die / —"]
              ],
              highlight: [[3, 1]] // 行,列(从0数)— 阳性 Akk = den
            }
          ],
          notes: [
            "⚠️ 阳性 Akk = den(Ich sehe den Freund);阳性 Dat = dem(Ich helfe dem Freund)。den vs dem 一个字母定生死。",
            "⚠️ Dativ 复数:名词要加 -n(die Leute → den Leuten;die Kinder → den Kindern)。"
          ],
          // ① 例句拆解:trigger 触发词、case 格、steps 步骤
          examples: [
            { de: "Ich esse gern den Fisch.", zh: "我爱吃那条鱼", trigger: "esse", case: "Akkusativ", steps: ["essen 支配 Akkusativ", "der Fisch 是阳性", "阳性 Akk → den"] },
            { de: "Mit dem Fisch sind die Gäste zufrieden.", zh: "客人们对这条鱼很满意", trigger: "Mit", case: "Dativ", steps: ["介词 mit 支配 Dativ", "der Fisch 是阳性", "阳性 Dat → dem"] }
          ],
          // ④ 边学边练
          miniQuiz: { type: "choice", prompt: "Ich sehe ___ Mann.", options: ["der", "den", "dem"], answer: "den", explanation: "sehen 支配 Akk,阳性 → den。" },
          related: ["G2", "G3", "G4"]
        },
        {
          id: "G2",
          title: "物主代词 mein- 变格",
          level: "A1", difficulty: 2,
          tags: ["kasus", "possessiv"],
          summary: "物主代词 = mein-/dein-/sein-… 加上「定冠词的词尾」。先判格和性别,再套词尾。",
          explain: [
            "物主代词词尾 = 定冠词词尾,只是词根换成 mein-/dein-/sein-。",
            "先判断这个名词在句中的格 + 性别。",
            "套词尾:der→(无尾)、den→-en、dem→-em、die→-e、der(阴/复Gen)→-er、den(复Dat)→-en。"
          ],
          mnemonic: "der→mein、den→meinen、dem→meinem、die→meine、der→meiner。词尾跟着定冠词走。",
          tables: [
            {
              caption: "mein- 变格 — 可开「默写模式」",
              maskable: true,
              headers: ["格", "阳", "阴", "中", "复"],
              rows: [
                ["Nom", "mein", "meine", "mein", "meine"],
                ["Akk", "meinen", "meine", "mein", "meine"],
                ["Dat", "meinem", "meiner", "meinem", "meinen"]
              ]
            }
          ],
          notes: ["物主代词全表(dein/sein/ihr…)将在模块二合并,不重复创建。"],
          examples: [
            { de: "Ich sehe meinen Freund.", zh: "我看见我的朋友", trigger: "sehe", case: "Akkusativ", steps: ["sehen 支配 Akk", "Freund 阳性", "阳性 Akk 定冠词 den → 词尾 -en → meinen"] },
            { de: "Ich helfe meinem Freund.", zh: "我帮我的朋友", trigger: "helfe", case: "Dativ", steps: ["helfen 支配 Dativ", "Freund 阳性", "阳性 Dat 定冠词 dem → 词尾 -em → meinem"] }
          ],
          miniQuiz: { type: "fill", prompt: "Ich danke ___ Lehrer.(mein-,danken+Dat,阳性)", hint: "danken 支配 Dativ", answer: ["meinem"], explanation: "danken+Dat,阳性 Dat → meinem。" },
          related: ["G1"]
        },
        {
          id: "G3",
          title: "Genitiv 第二格「…的…」",
          level: "A1", difficulty: 2,
          tags: ["kasus", "genitiv"],
          summary: "句型:Der/Die/Das 【A】 + des/der 【B】。中文「B 的 A」,德文倒过来:A(主格) + B(第二格)。",
          explain: [
            "Genitiv 表示『……的』,语序和中文相反:A(主格) 在前,B(第二格) 在后。",
            "看 B 的性别:阳 / 中 → des,名词加 -(e)s;阴 / 复 → der,名词不变。",
            "拼起来:Der Geruch + des Käses(气味 + 奶酪的)。"
          ],
          mnemonic: "阳中加 des(名词 +s),阴复用 der(名词不变)。",
          tables: [
            {
              caption: "Genitiv 冠词与词尾 — 可开「默写模式」",
              maskable: true,
              headers: ["性别", "冠词", "名词词尾"],
              rows: [
                ["阳性 der", "des", "加 -es(单音节)/ -s(多音节)"],
                ["中性 das", "des", "加 -es / -s"],
                ["阴性 die", "der", "不变"]
              ]
            }
          ],
          notes: [],
          examples: [
            { de: "Der Geruch des Käses ist intensiv.", zh: "那奶酪的气味很浓", trigger: "des Käses", case: "Genitiv", steps: ["『奶酪的气味』→ A 气味 + B 奶酪(Gen)", "der Käse 阳性 → des,名词加 -s → Käses"] },
            { de: "Das Kleid der Frau ist fesch.", zh: "那位女士的裙子很好看", trigger: "der Frau", case: "Genitiv", steps: ["『女士的裙子』→ A 裙子 + B 女士(Gen)", "die Frau 阴性 → der,名词不变"] }
          ],
          miniQuiz: { type: "choice", prompt: "『这个男人的孩子』:Das Kind ___ Mannes.", options: ["der", "des", "dem"], answer: "des", explanation: "Genitiv 阳性 → des,名词加 -es → Mannes。" },
          related: ["G1"]
        },
        {
          id: "G4",
          title: "n-Deklination 弱变化名词",
          level: "A1–A2", difficulty: 3,
          tags: ["kasus", "n-deklination"],
          summary: "一小撮阳性名词,除了 Nom. Sg.,其他格(Gen/Dat/Akk)和复数都要加 -(e)n。",
          explain: [
            "只有一小撮『阳性』名词属于 n-变化。",
            "判断顺序:是阳性吗? → 结尾是 -e / -ist / -ent / -ant / -and 或希腊语源吗? → 是 8 个硬核特例吗?(用右边流程图走一遍)",
            "若是:Gen / Dat / Akk 和复数都加 -(e)n,只有 Nom. Sg. 不加。"
          ],
          mnemonic: "三绿灯加 -en,两红灯不加;8 个特例死记。",
          // ③ 可视化决策树
          flowchart: {
            title: "n-变化判断流程",
            start: "q1",
            nodes: {
              q1: { q: "这个名词是阳性吗?", yes: "q2", no: "no" },
              q2: { q: "结尾是 -e / -ist / -ent / -ant / -and,或希腊语源(Automat 等)吗?", yes: "yes", no: "q3" },
              q3: { q: "是 8 个硬核特例吗?(Herr / Mensch / Nachbar / Bauer / Held / Narr / Prinz / Soldat)", yes: "yes", no: "no" },
              yes: { result: "✅ 是 n-变化 → Gen/Dat/Akk + 复数都加 -(e)n", good: true },
              no: { result: "❌ 不是 n-变化 → 按普通名词变化", good: false }
            }
          },
          tables: [
            {
              caption: "强变化 vs 弱变化 — 可开「默写模式」",
              maskable: true,
              headers: ["", "强 der Mann", "弱 der Kollege"],
              rows: [
                ["Nom", "der Mann", "der Kollege"],
                ["Akk", "den Mann", "den Kollegen"],
                ["Dat", "dem Mann", "dem Kollegen"]
              ]
            }
          ],
          notes: [
            "🟢 三绿灯(加 -en):① 阳性 -e 结尾(Kollege, Kunde)② -ist/-ent/-ant/-and(Student, Polizist)③ 希腊语源(Philosoph, Automat)。",
            "🔴 两红灯(不加):阳性 -er 结尾(Lehrer, Arzt)、阴/中性。",
            "🔥 8 个硬核特例:Herr(den Herrn)· Mensch · Nachbar · Bauer(唯一 -er 例外)· Held · Narr · Prinz · Soldat。",
            "中性特例 das Herz:Gen des Herzens / Dat dem Herzen / Akk das Herz。"
          ],
          examples: [
            { de: "Der Verkäufer bedient den Kunden.", zh: "售货员服务那位顾客", trigger: "Kunden", case: "Akkusativ", steps: ["bedienen 支配 Akk", "der Kunde 是 n-变化(阳性 -e 结尾)", "Akk → den Kunden(加 -n)"] },
            { de: "Der Arzt operiert den Patienten.", zh: "医生给那位病人做手术", trigger: "Patienten", case: "Akkusativ", steps: ["operieren 支配 Akk", "der Patient 是 n-变化(-ent 结尾)", "Akk → den Patienten"] }
          ],
          miniQuiz: { type: "fill", prompt: "Ich helfe ___ Studenten.(der Student,helfen+Dat)", hint: "helfen 支配 Dativ", answer: ["dem"], explanation: "helfen+Dat,阳性 → dem;Student 是 n-变化 → Studenten。" },
          related: ["G1"]
        }
      ],

      vocab: [
        // n-变化高频名词
        { de: "Kollege", gender: "der", plural: "-n", form: "den Kollegen", zh: "同事", level: "A1", tags: ["n-deklination"] },
        { de: "Kunde", gender: "der", plural: "-n", form: "den Kunden", zh: "顾客", level: "A1", tags: ["n-deklination"] },
        { de: "Student", gender: "der", plural: "-en", form: "den Studenten", zh: "学生", level: "A1", tags: ["n-deklination"] },
        { de: "Doktorand", gender: "der", plural: "-en", form: "den Doktoranden", zh: "博士生 📚", level: "A2", tags: ["n-deklination"] },
        { de: "Polizist", gender: "der", plural: "-en", form: "den Polizisten", zh: "警察", level: "A1", tags: ["n-deklination"] },
        { de: "Nachbar", gender: "der", plural: "-n", form: "den Nachbarn", zh: "邻居", level: "A1", tags: ["n-deklination"] },
        { de: "Herr", gender: "der", plural: "-en", form: "den Herrn", zh: "先生", level: "A1", tags: ["n-deklination"] },
        { de: "Mensch", gender: "der", plural: "-en", form: "den Menschen", zh: "人", level: "A1", tags: ["n-deklination"] },
        { de: "Bauer", gender: "der", plural: "-n", form: "den Bauern", zh: "农民(唯一 -er 例外)", level: "A2", tags: ["n-deklination"] },
        { de: "Held", gender: "der", plural: "-en", form: "den Helden", zh: "英雄", level: "A2", tags: ["n-deklination"] },
        { de: "Prinz", gender: "der", plural: "-en", form: "den Prinzen", zh: "王子", level: "A2", tags: ["n-deklination"] },
        { de: "Soldat", gender: "der", plural: "-en", form: "den Soldaten", zh: "士兵", level: "A2", tags: ["n-deklination"] },
        // 格练习常用名词
        { de: "Fisch", gender: "der", plural: "-e", form: "", zh: "鱼", level: "A1", tags: ["kasus"] },
        { de: "Käse", gender: "der", plural: "-", form: "Gen: des Käses", zh: "奶酪", level: "A1", tags: ["kasus"] },
        { de: "Brot", gender: "das", plural: "-e", form: "", zh: "面包", level: "A1", tags: ["kasus"] },
        { de: "Suppe", gender: "die", plural: "-n", form: "", zh: "汤", level: "A1", tags: ["kasus"] },
        { de: "Apfel", gender: "der", plural: "¨ (Äpfel)", form: "", zh: "苹果", level: "A1", tags: ["kasus"] },
        { de: "Tochter", gender: "die", plural: "¨ (Töchter)", form: "", zh: "女儿", level: "A1", tags: ["kasus"] },
        { de: "Kind", gender: "das", plural: "-er", form: "Dat Pl. den Kindern", zh: "孩子", level: "A1", tags: ["kasus"] },
        { de: "Herz", gender: "das", plural: "-en", form: "Gen: des Herzens", zh: "心", level: "A2", tags: ["kasus"] },
        { de: "Blume", gender: "die", plural: "-n", form: "", zh: "花", level: "A1", tags: ["kasus"] },
        { de: "Auto", gender: "das", plural: "-s", form: "", zh: "汽车", level: "A1", tags: ["kasus"] }
      ],

      // 习题:课上原题 + 自测题。type: fill(填空,answer 为可接受答案数组)
      exercises: [
        { type: "fill", prompt: "Ich kaufe ___ Apfel.", hint: "der Apfel,买", answer: ["den"], explanation: "kaufen + Akk,阳性 → den。" },
        { type: "fill", prompt: "___ Auto meines Bruders ist neu.", hint: "das Auto,主语", answer: ["Das"], explanation: "主语 Nom,中性 → das。" },
        { type: "fill", prompt: "Wir helfen ___ Frau.", hint: "die Frau,helfen+?", answer: ["der"], explanation: "helfen + Dat,阴性 Dat → der。" },
        { type: "fill", prompt: "Das ist das Buch ___ Studenten.", hint: "一个学生的书,Genitiv", answer: ["eines"], explanation: "Genitiv 阳性 → eines;Student 是 n-变化 → Studenten。" },
        { type: "fill", prompt: "Ich fahre mit ___ Kindern in den Park.", hint: "复数 Dativ", answer: ["den"], explanation: "mit + Dat,复数 Dat = den + 名词加 -n。" },
        { type: "fill", prompt: "Siehst du ___ Mann dort?", hint: "der Mann,看", answer: ["den"], explanation: "sehen + Akk,阳性 → den。" },
        { type: "fill", prompt: "Ich gebe ___ Nachbarn das Paket.", hint: "der Nachbar,给", answer: ["dem"], explanation: "双宾语人用 Dat,阳性 → dem;Nachbar 是 n-变化 → Nachbarn。" },
        { type: "fill", prompt: "Die Farbe ___ Blume ist schön.", hint: "die Blume,Genitiv", answer: ["der"], explanation: "Genitiv 阴性 → der(名词不变)。" },
        { type: "fill", prompt: "Er dankt ___ Polizisten.", hint: "der Polizist,danken+?", answer: ["dem"], explanation: "danken + Dat,阳性 → dem;Polizist 是 n-变化 → Polizisten。" },
        { type: "fill", prompt: "Ich suche ___ Herr Bauer.", hint: "der Herr,找", answer: ["den"], explanation: "suchen + Akk,阳性 → den;Herr 特例,只加 -n → Herrn。" }
      ],

      // 复习题:自动生成的新题(区别于原题)。type: fill / choice
      quiz: [
        { type: "fill", prompt: "Der Lehrer dankt ___ Studenten für die Hilfe.", hint: "der Student,danken+?", answer: ["dem"], explanation: "danken + Dat,阳性 Dat → dem;Student 是 n-变化 → Studenten。" },
        { type: "choice", prompt: "Ich gebe ___ Mann das Buch.", options: ["den", "dem", "des"], answer: "dem", explanation: "双宾语中「人」用 Dat,阳性 → dem。" },
        { type: "choice", prompt: "「这个女人的女儿」用 Genitiv 怎么说?", options: ["die Tochter der Frau", "die Tochter die Frau", "die Tochter dem Frau"], answer: "die Tochter der Frau", explanation: "Genitiv 阴性 → der,名词不变。" },
        { type: "choice", prompt: "Wir helfen den Kindern. 这句对吗?", options: ["对", "错,应为 die Kinder", "错,应为 dem Kind"], answer: "对", explanation: "helfen + Dat,复数 Dat = den + 名词加 -n(Kinder → Kindern)。正确。" },
        { type: "fill", prompt: "Mit ___ Kollegen gehe ich essen.", hint: "die Kollegen,复数 Dativ", answer: ["den"], explanation: "mit + Dat,复数 Dat = den + -n。" }
      ]
    },

    {
      id: 2,
      title: "代词 Pronomen",
      subtitle: "人称 + 物主 + 反身",
      difficulty: 2,
      level: "A1",
      tags: ["pronomen", "reflexiv", "possessiv"],

      grammar: [
        {
          id: "G5",
          title: "人称代词 Personalpronomen",
          level: "A1", difficulty: 2,
          tags: ["pronomen"],
          summary: "名词的格怎么变,代词就怎么变——人称代词是名词的替身,分 Nom / Akk / Dat 三格。",
          explain: [
            "先看动词支配哪个格(多数 Akk;helfen / danken / gehören / gefallen / antworten + Dat)。",
            "找到要替换的人称(我 / 你 / 他…)。",
            "查三格表取对应形式。"
          ],
          mnemonic: "mich/dich = Akk,mir/dir = Dat(带 r 的是 Dativ)。最难:er → ihn → ihm;sie → sie → ihr。",
          tables: [
            {
              caption: "人称代词三格表 — 可开「默写模式」",
              maskable: true,
              headers: ["人称", "Nom", "Akk", "Dat"],
              rows: [
                ["我", "ich", "mich", "mir"],
                ["你", "du", "dich", "dir"],
                ["他", "er", "ihn", "ihm"],
                ["她", "sie", "sie", "ihr"],
                ["它", "es", "es", "ihm"],
                ["我们", "wir", "uns", "uns"],
                ["你们", "ihr", "euch", "euch"],
                ["他们/您", "sie/Sie", "sie/Sie", "ihnen/Ihnen"]
              ],
              highlight: [[2, 2], [2, 3]]
            }
          ],
          notes: ["⚠️ 动词决定格:多数 + Akk;但 helfen / danken / gehören / gefallen / antworten + Dat。"],
          examples: [
            { de: "Ich kenne ihn gut.", zh: "我很熟悉他", trigger: "kenne", case: "Akkusativ", steps: ["kennen 支配 Akk", "『他』= er 的 Akk", "er → ihn"] },
            { de: "Das Buch gehört mir.", zh: "这本书是我的", trigger: "gehört", case: "Dativ", steps: ["gehören 支配 Dativ", "『我』= ich 的 Dat", "ich → mir"] }
          ],
          miniQuiz: { type: "choice", prompt: "Er hilft ___ .(我)", options: ["mich", "mir", "ich"], answer: "mir", explanation: "helfen + Dat,『我』Dat → mir。" },
          related: ["G6", "G7"]
        },
        {
          id: "G6",
          title: "物主代词 Possessivartikel(词根 + 词尾)",
          level: "A1", difficulty: 2,
          tags: ["pronomen", "possessiv"],
          summary: "物主代词 = 词根(看『谁的』)+ 词尾(跟定冠词,= ein/kein 系列)。",
          explain: [
            "第一步选词根,看『谁的』:ich→mein- du→dein- er/es→sein- sie(单)→ihr- wir→unser- ihr(你们)→euer- sie(复)→ihr- Sie→Ihr-。",
            "第二步加词尾,跟定冠词走(与模块一 G2 的词尾表完全一样)。",
            "拼起来:『他们的狗(Akk 阳性)』→ ihr- + -en → ihren Hund。"
          ],
          mnemonic: "词根看主语,词尾跟定冠词。阴性/复数 Nom·Akk 加 -e;中性 Nom·Akk 不加;『他们的』用 ihr-,只有『你们的』才 euer-。",
          tables: [
            {
              caption: "第一步:选词根(看主语)",
              maskable: true,
              headers: ["主语", "词根"],
              rows: [
                ["ich 我", "mein-"],
                ["du 你", "dein-"],
                ["er/es 他/它", "sein-"],
                ["sie 她(单)", "ihr-"],
                ["wir 我们", "unser-"],
                ["ihr 你们", "euer-"],
                ["sie 他们(复)", "ihr-"],
                ["Sie 您", "Ihr-"]
              ]
            },
            {
              caption: "第二步:加词尾(与 G2 共用)— 可开「默写模式」",
              maskable: true,
              headers: ["格", "阳", "阴", "中", "复"],
              rows: [
                ["Nom", "mein", "meine", "mein", "meine"],
                ["Akk", "meinen", "meine", "mein", "meine"],
                ["Dat", "meinem", "meiner", "meinem", "meinen"]
              ]
            }
          ],
          notes: [
            "⚠️ ihr-(他们的) vs euer-(你们的):『Thomas und Irene…』是第三人称复数 → 用 ihr-。",
            "⚠️ euer- 加词尾时去掉中间 e:euer + -en → euren。",
            "⚠️ für 永远 + Akk。"
          ],
          examples: [
            { de: "Das ist Herr Müller mit seiner Frau.", zh: "这是米勒先生和他的妻子", trigger: "mit", case: "Dativ", steps: ["mit 支配 Dativ", "『他的』→ sein-;Frau 阴性", "阴性 Dat 词尾 -er → seiner"] },
            { de: "Maria liebt ihren Garten.", zh: "玛丽亚爱她的花园", trigger: "ihren", case: "Akkusativ", steps: ["『玛丽亚的』→ ihr-(她的)", "lieben 支配 Akk;Garten 阳性", "阳性 Akk 词尾 -en → ihren"] }
          ],
          miniQuiz: { type: "fill", prompt: "Die Kinder spielen mit ___ Hund.(他们的,der Hund)", hint: "mit + Dat,阳性", answer: ["ihrem"], explanation: "词根 ihr-(他们的);mit+Dat 阳性词尾 -em → ihrem。" },
          related: ["G2", "G5"]
        },
        {
          id: "G7",
          title: "反身代词 Reflexivpronomen",
          level: "A1–A2", difficulty: 3,
          tags: ["pronomen", "reflexiv"],
          summary: "反身代词指回主语自己。ich/du 用 mich/mir、dich/dir;第三人称和 Sie 一律 sich。难点是 Akk 还是 Dat。",
          explain: [
            "反身代词必须和主语一致(Er → sich,不能用 mir)。",
            "若句中另有一个直接 Akk 宾语 → 反身降为 Dativ。",
            "若反身代词是唯一宾语 → 用 Akkusativ;介词短语不算直接宾语。"
          ],
          mnemonic: "有别的 Akk 宾语 → 反身用 Dat;没有 → 反身用 Akk。第三人称永远 sich。",
          tables: [
            {
              caption: "反身代词 — 可开「默写模式」",
              maskable: true,
              headers: ["人称", "Akk", "Dat"],
              rows: [
                ["ich", "mich", "mir"],
                ["du", "dich", "dir"],
                ["er/sie/es", "sich", "sich"],
                ["wir", "uns", "uns"],
                ["ihr", "euch", "euch"],
                ["sie/Sie", "sich", "sich"]
              ]
            }
          ],
          notes: ["介词短语不算直接宾语:Sie freut sich auf den Urlaub.(→ Akk)"],
          examples: [
            { de: "Ich wasche mich.", zh: "我洗(自己)", trigger: "mich", case: "Akkusativ", steps: ["反身代词是唯一宾语", "→ Akkusativ", "ich → mich"] },
            { de: "Ich wasche mir die Hände.", zh: "我洗手", trigger: "die Hände", case: "Dativ", steps: ["die Hände 是直接 Akk 宾语", "反身降为 Dativ", "ich → mir"] }
          ],
          miniQuiz: { type: "choice", prompt: "Er putzt ___ die Zähne.(刷牙)", options: ["sich", "ihn", "ihm"], answer: "sich", explanation: "die Zähne 是 Akk 宾语 → 反身降 Dat;第三人称反身 = sich。" },
          related: ["G5"]
        }
      ],

      vocab: [
        { de: "Nichte", gender: "die", plural: "-n", form: "", zh: "侄女 / 外甥女", level: "A1", tags: ["pronomen"] },
        { de: "Pass", gender: "der", plural: "¨e (Pässe)", form: "", zh: "护照", level: "A1", tags: ["pronomen"] },
        { de: "helfen", gender: "动", plural: "+ Dat", form: "helfen + Dativ", zh: "帮助", level: "A1", tags: ["dativ-verb"] },
        { de: "danken", gender: "动", plural: "+ Dat", form: "danken + Dativ", zh: "感谢", level: "A1", tags: ["dativ-verb"] },
        { de: "gehören", gender: "动", plural: "+ Dat", form: "gehören + Dativ", zh: "属于", level: "A1", tags: ["dativ-verb"] },
        { de: "kennen", gender: "动", plural: "+ Akk", form: "kennen + Akkusativ", zh: "认识", level: "A1", tags: ["akk-verb"] },
        { de: "sich anziehen", gender: "反身", plural: "", form: "反身可分动词", zh: "穿衣服", level: "A1", tags: ["reflexiv"] },
        { de: "sich freuen auf/über", gender: "反身", plural: "", form: "auf = 期待将来 / über = 高兴已发生", zh: "期待 / 高兴", level: "A2", tags: ["reflexiv"] },
        { de: "sich die Zähne putzen", gender: "反身", plural: "", form: "有 Akk 宾语 → 反身用 Dat", zh: "刷牙", level: "A1", tags: ["reflexiv"] },
        { de: "Spaß machen", gender: "短语", plural: "+ Dat", form: "接 Dativ 人称代词", zh: "使…开心", level: "A1", tags: ["phrase"] }
      ],

      exercises: [
        { type: "choice", prompt: "改错:Er hilft mich. → Er hilft ___ .", options: ["mich", "mir"], answer: "mir", explanation: "helfen + Dat → mir。" },
        { type: "choice", prompt: "改错:Ich kenne ihm. → Ich kenne ___ .", options: ["ihn", "ihm"], answer: "ihn", explanation: "kennen + Akk,阳性 → ihn。" },
        { type: "fill", prompt: "Kennst du Herrn Bauer? – Ja, ich kenne ___ gut.", hint: "kennen + Akk,他", answer: ["ihn"], explanation: "kennen + Akk,阳性 → ihn。" },
        { type: "fill", prompt: "Das Buch gehört ___ .(我)", hint: "gehören + Dat", answer: ["mir"], explanation: "gehören + Dat,我 → mir。" },
        { type: "fill", prompt: "Ich möchte mit ___ sprechen.(她)", hint: "mit + Dat,她", answer: ["ihr"], explanation: "mit + Dat,她 Dat → ihr。" },
        { type: "fill", prompt: "Das ist ___ Auto. Es ist neu.(我的,das Auto)", hint: "中性 Nom", answer: ["mein"], explanation: "das Auto 中性 Nom → mein(无词尾)。" },
        { type: "fill", prompt: "Die Kinder spielen mit ___ Hund.(他们的,der Hund)", hint: "mit + Dat,阳性", answer: ["ihrem"], explanation: "mit + Dat,阳性 → ihrem;词根 ihr-(他们的)。" },
        { type: "fill", prompt: "Ich ziehe ___ schnell an.(反身,我穿衣服)", hint: "反身唯一宾语", answer: ["mich"], explanation: "反身代词是唯一宾语 → Akk → mich。" },
        { type: "fill", prompt: "Er putzt ___ die Zähne.(反身,他刷牙)", hint: "有 Akk 宾语", answer: ["sich"], explanation: "die Zähne 是 Akk 宾语 → 反身降 Dat;er → sich。" },
        { type: "fill", prompt: "Habt ihr ___ Pass dabei?(你们的,der Pass)", hint: "euer- + 阳性 Akk", answer: ["euren"], explanation: "der Pass 阳性 Akk → euren(euer- 去中间 e)。" },
        { type: "fill", prompt: "Ich danke ___ für Ihre Hilfe.(您)", hint: "danken + Dat,您", answer: ["Ihnen"], explanation: "danken + Dat,您 → Ihnen。" },
        { type: "fill", prompt: "Sie freut ___ über das Geschenk.(反身)", hint: "介词短语不算直接宾语", answer: ["sich"], explanation: "über 短语不算直接宾语 → Akk → sich。" }
      ],

      quiz: [
        { type: "choice", prompt: "Siehst du Maria? – Ja, ich sehe ___ .", options: ["sie", "ihr", "ihn"], answer: "sie", explanation: "sehen + Akk,她 Akk = sie。" },
        { type: "fill", prompt: "Das Auto gehört ___ .(我们)", hint: "gehören + Dat", answer: ["uns"], explanation: "gehören + Dat,我们 → uns。" },
        { type: "choice", prompt: "Das ist ___ Buch.(你的,das Buch 中性)", options: ["dein", "deinen", "deinem"], answer: "dein", explanation: "中性 Nom 不加词尾 → dein。" },
        { type: "fill", prompt: "Wir freuen ___ auf die Ferien.(反身)", hint: "介词短语不算直接宾语", answer: ["uns"], explanation: "auf 短语不算直接宾语 → Akk;wir 反身 = uns。" },
        { type: "choice", prompt: "Ich wasche ___ die Haare.(洗头发)", options: ["mich", "mir", "mein"], answer: "mir", explanation: "die Haare 是 Akk 宾语 → 反身降 Dat → mir。" }
      ]
    },

    {
      id: 3,
      title: "介词 Präpositionen",
      subtitle: "支配格 + Wechsel + 动词搭配",
      difficulty: 3,
      level: "A1–A2",
      tags: ["praeposition", "kasus", "wechsel"],

      grammar: [
        {
          id: "G8",
          title: "永远 Dativ 的介词",
          level: "A1", difficulty: 2,
          tags: ["praeposition", "dativ"],
          summary: "这些介词后面永远跟 Dativ,看到就用 Dat。",
          explain: [
            "背下 Dativ 介词清单(用口诀)。",
            "看到它,后面名词直接用 Dativ。",
            "注意 gegenüber 可后置(dem Rathaus gegenüber)。"
          ],
          mnemonic: "Dativ 口诀:ab · aus · bei · mit · nach · seit · von · zu · außer(+ entgegen · gegenüber)。",
          tables: [
            {
              caption: "永远 + Dativ",
              headers: ["介词", "中文", "介词", "中文"],
              rows: [
                ["ab", "从…起", "seit", "自从…以来"],
                ["aus", "从…里 / 出自", "von", "从… / 关于"],
                ["bei", "在…那里", "zu", "去… / 对于"],
                ["mit", "和… / 用…", "außer", "除了"],
                ["nach", "去… / 之后", "gegenüber", "对面(后置)"]
              ]
            }
          ],
          notes: [
            "⚠️ ab vs seit:ab = 从某(未来)时间点起;seit = 从过去持续到现在。",
            "⚠️ außer(除了,Dat) vs ohne(没有,Akk)。",
            "缩写:im=in dem · am=an dem · zum=zu dem · zur=zu der · beim=bei dem · vom=von dem。"
          ],
          examples: [
            { de: "Ich fahre mit dem Bus.", zh: "我坐公交车", trigger: "mit", case: "Dativ", steps: ["mit 永远 + Dativ", "der Bus 阳性", "阳性 Dat → dem"] },
            { de: "Seit einem Jahr lerne ich Deutsch.", zh: "我学德语一年了", trigger: "Seit", case: "Dativ", steps: ["seit 永远 + Dativ(持续到现在)", "ein Jahr 中性", "中性 Dat → einem"] }
          ],
          miniQuiz: { type: "choice", prompt: "Ich komme ___ Österreich.(来自奥地利)", options: ["aus", "für", "durch"], answer: "aus", explanation: "aus + Dat,表来源。" },
          related: ["G9", "G10"]
        },
        {
          id: "G9",
          title: "永远 Akkusativ 的介词",
          level: "A1", difficulty: 2,
          tags: ["praeposition", "akkusativ"],
          summary: "这些介词后面永远跟 Akkusativ。",
          explain: [
            "背下 Akkusativ 介词清单(用口诀)。",
            "看到它,后面名词直接用 Akkusativ。",
            "entlang 可后置(die Straße entlang)。"
          ],
          mnemonic: "Akkusativ 口诀:bis · durch · für · gegen · ohne · um · wider · entlang。",
          tables: [
            {
              caption: "永远 + Akkusativ",
              headers: ["介词", "中文", "介词", "中文"],
              rows: [
                ["bis", "直到", "um", "围绕"],
                ["durch", "穿过", "ohne", "没有"],
                ["für", "为了", "wider", "违背"],
                ["gegen", "反对 / 朝向", "entlang", "沿着(后置)"]
              ]
            }
          ],
          notes: ["⚠️ entlang(沿着)和 gegenüber(对面)都可放名词后面:die Kärntner Straße entlang / dem Rathaus gegenüber。"],
          examples: [
            { de: "Das Geschenk ist für meine Mutter.", zh: "这礼物是给我妈妈的", trigger: "für", case: "Akkusativ", steps: ["für 永远 + Akkusativ", "die Mutter 阴性", "阴性 Akk → meine(不变)"] },
            { de: "Wir gehen durch den Park.", zh: "我们穿过公园", trigger: "durch", case: "Akkusativ", steps: ["durch 永远 + Akkusativ", "der Park 阳性", "阳性 Akk → den"] }
          ],
          miniQuiz: { type: "fill", prompt: "Ich mache das ___ dich.(为了你)", hint: "für + Akk", answer: ["für"], explanation: "für + Akk → für dich。" },
          related: ["G8", "G10"]
        },
        {
          id: "G10",
          title: "Wechselpräpositionen 双格介词",
          level: "A2", difficulty: 3,
          tags: ["praeposition", "wechsel"],
          summary: "9 个双格介词,看 Wo(静止→Dat)还是 Wohin(移动→Akk)。",
          explain: [
            "这 9 个介词:in · an · auf · über · unter · vor · hinter · neben · zwischen。",
            "问 Wo?(在哪里,位置没变)→ Dativ;问 Wohin?(去哪里,位置改变)→ Akkusativ。",
            "判断关键是『有没有位置的改变』,不是有没有动作。"
          ],
          mnemonic: "Wo? 静止 → Dativ(liegen/stehen/sitzen/hängen);Wohin? 移动 → Akkusativ(legen/stellen/setzen/gehen)。",
          flowchart: {
            title: "双格介词:Wo 还是 Wohin?",
            start: "q1",
            nodes: {
              q1: { q: "名词有没有发生『位置的改变』?", yes: "akk", no: "dat" },
              akk: { result: "🏃 位置改变 = Wohin?(移动)→ Akkusativ", good: true },
              dat: { result: "📍 位置没变 = Wo?(静止)→ Dativ", good: true }
            }
          },
          tables: [
            {
              caption: "Wo vs Wohin",
              headers: ["问题", "含义", "格", "配的动词"],
              rows: [
                ["Wo?", "在哪里(静止)", "Dativ", "liegen, stehen, sitzen, hängen, sein"],
                ["Wohin?", "去哪里(移动)", "Akkusativ", "legen, stellen, setzen, gehen"]
              ]
            }
          ],
          notes: [
            "🔑 Sie schwimmt in dem Wasser(已在水里游 = 静止 Dat) vs Sie springt in das Wasser(从岸上跳进去 = 移动 Akk)。",
            "⚠️ neben(旁边)几乎总是 Wo?(静止)→ 99% 接 Dativ。"
          ],
          examples: [
            { de: "Michael kommt in das Lokal.", zh: "米夏埃尔走进餐馆", trigger: "in das", case: "Akkusativ", steps: ["kommen = 进来,位置改变", "Wohin? → Akkusativ", "das Lokal → in das"] },
            { de: "Magdalena sitzt in dem Lokal.", zh: "玛格达莱娜坐在餐馆里", trigger: "in dem", case: "Dativ", steps: ["sitzen = 静止,位置没变", "Wo? → Dativ", "das Lokal → in dem"] }
          ],
          miniQuiz: { type: "choice", prompt: "Die Katze schläft ___ Sofa.(在沙发上睡,das Sofa)", options: ["auf das", "auf dem", "auf der"], answer: "auf dem", explanation: "schlafen 静止 Wo? → Dat;das Sofa → dem。" },
          related: ["G8", "G9"]
        },
        {
          id: "G11",
          title: "动词 + 固定介词搭配",
          level: "A2", difficulty: 3,
          tags: ["praeposition", "verb"],
          summary: "一批动词带固定介词,介词又决定格,要整组背。",
          explain: [
            "这些搭配是固定的,介词不能换。",
            "记住搭配 = 记住介词 + 它支配的格。",
            "必考:sich freuen auf(期待将来) vs über(为已发生高兴)。"
          ],
          mnemonic: "denken an+A,warten auf+A,sich interessieren für+A,sich fürchten vor+D,gratulieren zu+D。",
          tables: [
            {
              caption: "高频动词 + 介词(必背)",
              headers: ["动词", "介词+格", "中文"],
              rows: [
                ["denken", "an + A", "想到"],
                ["warten", "auf + A", "等待"],
                ["sich freuen", "auf + A", "期待(未来)"],
                ["sich freuen", "über + A", "高兴(已发生)"],
                ["sich ärgern", "über + A", "生气"],
                ["sich interessieren", "für + A", "对…感兴趣"],
                ["sich kümmern", "um + A", "照顾"],
                ["sich fürchten", "vor + D", "害怕"],
                ["gratulieren", "zu + D", "祝贺"],
                ["telefonieren", "mit + D", "给…打电话"]
              ]
            }
          ],
          notes: ["🔑 sich freuen auf(期待将来) vs sich freuen über(为已发生的事高兴)是必考。"],
          examples: [
            { de: "Ich warte auf den Bus.", zh: "我在等公交车", trigger: "auf", case: "Akkusativ", steps: ["warten auf + Akk(固定搭配)", "der Bus 阳性", "阳性 Akk → den"] },
            { de: "Ich interessiere mich für Geschichte.", zh: "我对历史感兴趣", trigger: "für", case: "Akkusativ", steps: ["sich interessieren für + Akk", "Geschichte 无冠词", "für + Akk"] }
          ],
          miniQuiz: { type: "fill", prompt: "Ich freue mich ___ die Ferien.(期待假期,未来)", hint: "auf 还是 über?", answer: ["auf"], explanation: "期待将来 → auf + Akk。" },
          related: ["G10"]
        },
        {
          id: "G12",
          title: "wo(r)- / da(r)- 构词",
          level: "A2", difficulty: 3,
          tags: ["praeposition", "wortbildung"],
          summary: "问 / 指『事物』用 wo(r)-/da(r)- 合成词;问 / 指『人』用 介词+wen/wem 或 介词+人称代词。",
          explain: [
            "先看是问人还是问事物。",
            "问事物:wo(r)+介词(提问)、da(r)+介词(回答)。",
            "问人:介词+wen/wem(提问)、介词+ihn/ihr(回答)。构词:元音开头介词加 r(woran, darauf),辅音开头不加(womit, dafür)。"
          ],
          mnemonic: "事物用 wo(r)-/da(r)-,人用 介词+wen/wem。元音开头介词加 r。",
          tables: [
            {
              caption: "问人 vs 问事物",
              headers: ["", "问人", "问事物"],
              rows: [
                ["提问", "介词 + wen/wem?", "wo(r) + 介词?"],
                ["回答", "介词 + ihn/ihr…", "da(r) + 介词"]
              ]
            }
          ],
          notes: [
            "例:Woran denkst du?(问事) ↔ An wen denkst du?(问人);Ich denke daran.(答事)。",
            "vor 等 Dat 搭配问人用 wem:Wovor fürchten Sie sich? – Vor wem?"
          ],
          examples: [
            { de: "Woran denkst du?", zh: "你在想什么?(问事物)", trigger: "Woran", steps: ["denken an + 事物", "an 元音开头 → 加 r", "wo + r + an = woran"] },
            { de: "Ich denke daran.", zh: "我在想这件事", trigger: "daran", steps: ["回答事物 → da(r)+介词", "an 元音开头 → dar", "da + r + an = daran"] }
          ],
          miniQuiz: { type: "choice", prompt: "___ interessierst du dich?(你对什么感兴趣?问事物,für)", options: ["Wofür", "Für was", "Für wen"], answer: "Wofür", explanation: "问事物 + für(辅音开头)→ wofür。" },
          related: ["G11"]
        }
      ],

      vocab: [
        { de: "Lokal", gender: "das", plural: "-e", form: "", zh: "餐馆 / 酒馆(奥地利常用)", level: "A1", tags: ["praeposition"] },
        { de: "Baustelle", gender: "die", plural: "-n", form: "auf der Baustelle", zh: "工地", level: "A2", tags: ["praeposition"] },
        { de: "Rathaus", gender: "das", plural: "¨er (Rathäuser)", form: "", zh: "市政厅", level: "A1", tags: ["praeposition"] },
        { de: "Messer", gender: "das", plural: "-", form: "", zh: "刀", level: "A1", tags: ["praeposition"] },
        { de: "Semmel", gender: "die", plural: "-n", form: "奥 = Brötchen", zh: "小圆面包", level: "A2", tags: ["praeposition"] },
        { de: "Gewitter", gender: "das", plural: "-", form: "sich fürchten vor + D", zh: "雷雨", level: "A2", tags: ["praeposition"] },
        { de: "Mittagessen", gender: "das", plural: "-", form: "", zh: "午餐", level: "A1", tags: ["praeposition"] },
        { de: "spazieren", gender: "动", plural: "", form: "散步", zh: "散步", level: "A1", tags: ["verb"] },
        { de: "sich fürchten vor", gender: "反身", plural: "+ Dat", form: "问人用 wem", zh: "害怕", level: "A2", tags: ["reflexiv"] }
      ],

      exercises: [
        { type: "fill", prompt: "Mit ___ Messer schneide ich die Karotten.(das Messer,mit+Dat)", hint: "mit + Dat,中性", answer: ["dem"], explanation: "mit + Dat,中性 → dem。" },
        { type: "fill", prompt: "Ich wohne ___ Rathaus gegenüber.(das Rathaus,gegenüber 后置)", hint: "gegenüber + Dat", answer: ["dem"], explanation: "gegenüber + Dat,中性 → dem。" },
        { type: "fill", prompt: "Ich fahre ___ dem Bus zur Uni.(用公交)", hint: "交通工具", answer: ["mit"], explanation: "mit + Dat(交通工具)。" },
        { type: "fill", prompt: "Das Geschenk ist ___ meine Mutter.(为了)", hint: "+ Akk", answer: ["für"], explanation: "für + Akk。" },
        { type: "fill", prompt: "Wir gehen ___ Park.(走进公园 Wohin,der Park)", hint: "移动 → Akk", answer: ["in den"], explanation: "Wohin? 移动 → Akk,der Park → in den。" },
        { type: "fill", prompt: "Die Katze schläft ___ Sofa.(在沙发上 Wo,das Sofa)", hint: "静止 → Dat", answer: ["auf dem"], explanation: "Wo? 静止 → Dat,das Sofa → auf dem。" },
        { type: "fill", prompt: "___ einem Jahr lerne ich Deutsch.(学了一年了,持续)", hint: "持续到现在", answer: ["Seit"], explanation: "持续到现在 → seit + Dat。" },
        { type: "fill", prompt: "Ich warte ___ den Bus.(等)", hint: "warten ___ + Akk", answer: ["auf"], explanation: "warten auf + Akk。" },
        { type: "fill", prompt: "___ denkst du?(你在想什么?问事)", hint: "denken an + 事物", answer: ["Woran"], explanation: "问事物 + denken an → woran。" },
        { type: "fill", prompt: "Ich interessiere mich ___ Geschichte.(对历史感兴趣)", hint: "sich interessieren ___", answer: ["für"], explanation: "sich interessieren für + Akk。" },
        { type: "fill", prompt: "Sie geht ___ Arzt.(去看医生)", hint: "zu + Dat 缩写", answer: ["zum"], explanation: "zu + Dat(去某人处),zu dem = zum。" },
        { type: "fill", prompt: "Ich freue mich ___ die Ferien.(期待假期,未来)", hint: "auf 还是 über?", answer: ["auf"], explanation: "sich freuen auf + Akk(期待将来)。" }
      ],

      quiz: [
        { type: "choice", prompt: "Er legt das Buch ___ Tisch.(放到桌上 Wohin,der Tisch)", options: ["auf den", "auf dem", "auf das"], answer: "auf den", explanation: "legen 移动 Wohin → Akk;der Tisch → auf den。" },
        { type: "choice", prompt: "Das Buch liegt ___ Tisch.(在桌上 Wo,der Tisch)", options: ["auf den", "auf dem"], answer: "auf dem", explanation: "liegen 静止 Wo → Dat;der Tisch → auf dem。" },
        { type: "fill", prompt: "Ich komme ___ der Schweiz.(来自瑞士)", hint: "来源 + Dat", answer: ["aus"], explanation: "aus + Dat,表来源。" },
        { type: "fill", prompt: "Wir gratulieren dir ___ Geburtstag.(祝贺生日)", hint: "gratulieren ___ + Dat 缩写", answer: ["zum"], explanation: "gratulieren zu + Dat;zu dem = zum。" },
        { type: "choice", prompt: "___ wartest du? – Auf den Bus.(问事物)", options: ["Worauf", "Auf wen", "Wofür"], answer: "Worauf", explanation: "warten auf + 事物 → worauf(auf 元音开头加 r)。" }
      ]
    },

    {
      id: 4,
      title: "动词与宾语 Verben",
      subtitle: "Dativ动词 + 双宾语 + 可分 + 位置",
      difficulty: 3,
      level: "A2",
      tags: ["verb", "dativ", "trennbar", "wechsel"],

      grammar: [
        {
          id: "G13",
          title: "Dativ 动词 & 双宾语语序",
          level: "A2", difficulty: 3,
          tags: ["verb", "dativ"],
          summary: "哪些动词只要 Dativ,哪些同时要人(Dat)+ 物(Akk),以及双宾语怎么排序。",
          explain: [
            "纯 Dativ 动词:对象永远用 Dat(helfen, danken, gehören…)。",
            "双宾语动词:人用 Dat,物用 Akk(geben, schenken, zeigen…)。",
            "排序看是名词还是代词(见口诀)。"
          ],
          mnemonic: "双宾语排序:两名词『人前物后』;两代词『物前人后』;一名一代『代词永远在前』。",
          tables: [
            {
              caption: "两类动词",
              headers: ["类别", "动词"],
              rows: [
                ["纯 Dativ", "ähneln · antworten · danken · fehlen · folgen · gehören · gratulieren · helfen · zuhören · begegnen"],
                ["双宾语(人Dat+物Akk)", "geben · schenken · zeigen · bringen · schicken · schreiben · leihen · erzählen · empfehlen · sagen"]
              ]
            },
            {
              caption: "双宾语语序",
              headers: ["情况", "语序", "例"],
              rows: [
                ["两个名词", "人(Dat)前,物(Akk)后", "Ich gebe dem Mann das Buch."],
                ["两个代词", "物(Akk)前,人(Dat)后", "Ich gebe es ihm."],
                ["一名词一代词", "代词永远在前", "Ich gebe ihm das Buch."]
              ]
            }
          ],
          notes: [
            "⚠️ antworten(回答某人,Dat) vs beantworten(回答某事,Akk)。",
            "schmecken / gefallen 主语是事物,人用 Dat。"
          ],
          examples: [
            { de: "Ich gebe dem Mann das Buch.", zh: "我把书给那个男人", trigger: "dem Mann", case: "Dativ", steps: ["geben 双宾语:人 Dat + 物 Akk", "两个名词 → 人前物后", "dem Mann(Dat) + das Buch(Akk)"] },
            { de: "Ich gebe es ihm.", zh: "我把它给他", trigger: "es ihm", steps: ["两个代词", "物前人后", "es(Akk) + ihm(Dat)"] }
          ],
          miniQuiz: { type: "choice", prompt: "Mutter schenkt ___ eine Puppe.(给女儿,die Tochter)", options: ["der Tochter", "die Tochter", "den Tochter"], answer: "der Tochter", explanation: "schenken 双宾语,人用 Dat;die Tochter 阴性 Dat → der Tochter。" },
          related: ["G14", "G15"]
        },
        {
          id: "G14",
          title: "可分动词 Trennbare Verben",
          level: "A2", difficulty: 3,
          tags: ["verb", "trennbar"],
          summary: "可分动词在主句里前缀跑句尾;有情态动词时不拆。",
          explain: [
            "主句中:动词留第二位,前缀跑到句尾(Claudia geht … aus)。",
            "有情态动词时不拆,前缀连着写(Ich möchte ausgehen)。",
            "听重音:重音在前缀 = 可分(AUSgehen);重音在词根 = 不可分(entGEHen)。"
          ],
          mnemonic: "可分前缀:ab/an/auf/aus/ein/mit/vor/zu/weg/zurück;不可分:be/ge/er/ent/ver/zer/emp/miss。",
          tables: [
            {
              caption: "前缀可分 vs 不可分",
              headers: ["永远可分前缀", "含义", "永远不可分前缀"],
              rows: [
                ["ab-, an-, auf-, aus-", "离开 / 向上 / 向外", "be-, ge-, er-"],
                ["ein-, mit-, vor-", "进入 / 一起 / 在前", "ent-, ver-, zer-"],
                ["zu-, weg-, zurück-", "关闭 / 离去 / 回", "emp-, miss-"]
              ]
            }
          ],
          notes: ["重音在前缀 = 可分(AUSgehen);重音在词根 = 不可分(entGEHen)。"],
          examples: [
            { de: "Claudia geht gern mit Freunden aus.", zh: "克劳迪娅喜欢和朋友出去玩", trigger: "geht … aus", steps: ["ausgehen 可分,主句", "动词 geht 留第二位", "前缀 aus 跑句尾"] },
            { de: "Ich möchte heute ausgehen.", zh: "我今天想出去玩", trigger: "ausgehen", steps: ["有情态动词 möchte", "不拆", "前缀连着:ausgehen 放句尾"] }
          ],
          miniQuiz: { type: "choice", prompt: "aufstehen 主句怎么写?", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr."], answer: "Ich stehe um 7 Uhr auf.", explanation: "主句:动词第二位,前缀 auf 跑句尾。" },
          related: ["G13"]
        },
        {
          id: "G15",
          title: "位置动词 vs 放置动词",
          level: "A2", difficulty: 3,
          tags: ["verb", "wechsel"],
          summary: "静止动词(Wo? + Dat)和放置动词(Wohin? + Akk)成对出现。",
          explain: [
            "静止(Wo? + Dativ):liegen / stehen / sitzen / hängen。",
            "移动放置(Wohin? + Akkusativ):legen / stellen / setzen / hängen。",
            "东西形状决定:平放 → legen;竖放 → stellen。"
          ],
          mnemonic: "liegen↔legen(平)、stehen↔stellen(竖)、sitzen↔setzen、hängen↔hängen。静止 Dat,放置 Akk。",
          tables: [
            {
              caption: "成对动词",
              headers: ["静止(Wo? + Dativ)", "移动(Wohin? + Akkusativ)"],
              rows: [
                ["liegen 躺着", "legen 放平"],
                ["stehen 站立", "stellen 竖放"],
                ["sitzen 坐着", "setzen 使坐"],
                ["hängen 挂着(不规则)", "hängen 挂上(规则)"]
              ]
            }
          ],
          notes: [
            "🔑 Man gießt das Öl in den Topf(移动 Akk) vs Man salzt die Suppe im Topf(已在锅里 Dat)。",
            "⚠️ die Pfanne 阴性,静止用 in der Pfanne(不能用 im)。das Gemüse / Fleisch 不可数,用 viel。"
          ],
          examples: [
            { de: "Ich lege das Buch in das Regal.", zh: "我把书放进书架", trigger: "in das", case: "Akkusativ", steps: ["legen = 放置,移动", "Wohin? → Akk", "das Regal → in das"] },
            { de: "Das Buch liegt unter dem Bett.", zh: "书在床底下", trigger: "unter dem", case: "Dativ", steps: ["liegen = 静止", "Wo? → Dat", "das Bett → unter dem"] }
          ],
          miniQuiz: { type: "choice", prompt: "Ich stelle das Glas ___ Tisch.(放到桌上,der Tisch)", options: ["auf den", "auf dem"], answer: "auf den", explanation: "stellen 放置 Wohin? → Akk;der Tisch → auf den。" },
          related: ["G13"]
        }
      ],

      vocab: [
        { de: "schenken", gender: "动", plural: "双宾", form: "人 Dat + 物 Akk", zh: "赠送", level: "A1", tags: ["verb"] },
        { de: "empfehlen", gender: "动", plural: "双宾", form: "empfiehlt", zh: "推荐", level: "A2", tags: ["verb"] },
        { de: "aufstehen", gender: "可分", plural: "", form: "ist aufgestanden", zh: "起床", level: "A1", tags: ["trennbar"] },
        { de: "einladen", gender: "可分", plural: "", form: "lädt ein", zh: "邀请", level: "A1", tags: ["trennbar"] },
        { de: "ausgehen", gender: "可分", plural: "", form: "ist ausgegangen", zh: "出去玩", level: "A1", tags: ["trennbar"] },
        { de: "anrufen", gender: "可分", plural: "+ Akk", form: "打电话给某人(Akk)", zh: "打电话", level: "A1", tags: ["trennbar"] },
        { de: "Topf", gender: "der", plural: "¨e (Töpfe)", form: "im Topf", zh: "锅", level: "A2", tags: ["kueche"] },
        { de: "Pfanne", gender: "die", plural: "-n", form: "阴性! in der Pfanne", zh: "平底锅", level: "A2", tags: ["kueche"] },
        { de: "Schüssel", gender: "die", plural: "-n", form: "", zh: "碗", level: "A2", tags: ["kueche"] },
        { de: "Gemüse", gender: "das", plural: "-", form: "不可数,用 viel", zh: "蔬菜", level: "A1", tags: ["kueche"] },
        { de: "braten", gender: "动", plural: "(brät)", form: "不规则动词", zh: "煎 / 炒", level: "A2", tags: ["kueche"] }
      ],

      exercises: [
        { type: "choice", prompt: "双宾语造句:Mutter schenkt ___ eine Puppe.(给女儿 die Tochter)", options: ["der Tochter", "die Tochter"], answer: "der Tochter", explanation: "人 Dat 在前:der Tochter;eine Puppe 是物 Akk。" },
        { type: "fill", prompt: "Das Buch liegt unter dem Bett. → Ich lege das Buch ___ Regal.(放进书架 das Regal)", hint: "Wohin? → Akk", answer: ["in das", "ins"], explanation: "legen 移动 Wohin → Akk;das Regal → in das(ins)。" },
        { type: "fill", prompt: "Ich helfe ___ Mann.(der Mann)", hint: "helfen + Dat", answer: ["dem"], explanation: "helfen + Dat,阳性 → dem。" },
        { type: "fill", prompt: "Er schenkt ___ Frau Blumen.(die Frau,双宾语人)", hint: "人用 Dat", answer: ["der"], explanation: "schenken 双宾语,人用 Dat;die Frau 阴性 → der。" },
        { type: "fill", prompt: "Gib ___ mir bitte!(das Buch → 用代词)", hint: "两代词:物在前", answer: ["es"], explanation: "两代词时物在前:Gib es mir。" },
        { type: "choice", prompt: "aufstehen 主句:正确的是?", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr."], answer: "Ich stehe um 7 Uhr auf.", explanation: "主句前缀跑句尾。" },
        { type: "fill", prompt: "Ich möchte dich ___ .(einladen,有情态动词)", hint: "不拆", answer: ["einladen"], explanation: "möchte 后用不定式,不拆:dich einladen。" },
        { type: "fill", prompt: "Das Glas steht ___ Tisch.(在桌上 Wo,der Tisch)", hint: "静止 → Dat", answer: ["auf dem"], explanation: "Wo? 静止 → Dat,der Tisch → auf dem。" },
        { type: "fill", prompt: "Ich stelle das Glas ___ Tisch.(放到桌上 Wohin,der Tisch)", hint: "移动 → Akk", answer: ["auf den"], explanation: "Wohin? 移动 → Akk,der Tisch → auf den。" },
        { type: "fill", prompt: "Die Lampe hängt ___ Decke.(挂在天花板上 Wo,die Decke)", hint: "静止 → Dat,阴性", answer: ["an der"], explanation: "Wo? 静止 → Dat,die Decke 阴性 → an der。" }
      ],

      quiz: [
        { type: "choice", prompt: "Ich gebe ___ .(把它给他,两代词)", options: ["es ihm", "ihm es", "ihn ihm"], answer: "es ihm", explanation: "两代词:物前人后 → es ihm。" },
        { type: "fill", prompt: "Kannst du mir das Buch ___ ?(借给,leihen,有情态动词)", hint: "不拆,用不定式", answer: ["leihen"], explanation: "kannst(情态动词)后用不定式 leihen。" },
        { type: "choice", prompt: "Er ruft seine Mutter ___ .(打电话 anrufen 主句)", options: ["an", "auf", "aus"], answer: "an", explanation: "anrufen 可分,前缀 an 跑句尾。" },
        { type: "choice", prompt: "Ich setze mich ___ Stuhl.(坐到椅子上 Wohin,der Stuhl)", options: ["auf den", "auf dem"], answer: "auf den", explanation: "setzen 放置 Wohin → Akk;der Stuhl → auf den。" },
        { type: "fill", prompt: "Die Suppe schmeckt ___ gut.(我觉得汤好喝,我)", hint: "schmecken 主语是事物,人用 Dat", answer: ["mir"], explanation: "schmecken 主语是事物,人用 Dat → mir。" }
      ]
    },

    {
      id: 5,
      title: "情态动词 Modalverben",
      subtitle: "Präsens + Präteritum",
      difficulty: 2,
      level: "A1–A2",
      tags: ["modalverb", "konjugation", "wortstellung"],

      grammar: [
        {
          id: "G16",
          title: "情态动词现在时 Präsens",
          level: "A1", difficulty: 2,
          tags: ["modalverb", "konjugation"],
          summary: "6 个情态动词 + 礼貌的 möchten 的现在时变位。",
          explain: [
            "ich 和 er/sie/es 永远同形,且都无词尾。",
            "单数有元音变化(muss/kann/darf/will/mag;sollen 例外不变),复数恢复原元音。",
            "du = ich 形 + st;wir = sie/Sie。"
          ],
          mnemonic: "ich = er/sie/es(无词尾);单数变元音,复数还原;du 加 -st。",
          tables: [
            {
              caption: "Präsens 变位表 — 可开「默写模式」",
              maskable: true,
              headers: ["人称", "müssen", "können", "dürfen", "sollen", "wollen", "mögen", "möchten"],
              rows: [
                ["ich", "muss", "kann", "darf", "soll", "will", "mag", "möchte"],
                ["du", "musst", "kannst", "darfst", "sollst", "willst", "magst", "möchtest"],
                ["er/sie/es", "muss", "kann", "darf", "soll", "will", "mag", "möchte"],
                ["wir", "müssen", "können", "dürfen", "sollen", "wollen", "mögen", "möchten"],
                ["ihr", "müsst", "könnt", "dürft", "sollt", "wollt", "mögt", "möchtet"],
                ["sie/Sie", "müssen", "können", "dürfen", "sollen", "wollen", "mögen", "möchten"]
              ]
            }
          ],
          notes: ["5 条铁律:① ich=er/sie/es 无词尾 ② 单数变元音(sollen 除外)③ 复数恢复原元音 ④ du=ich形+st ⑤ wir=sie/Sie。"],
          examples: [
            { de: "Kannst du mir helfen?", zh: "你能帮我吗?", trigger: "Kannst", steps: ["können,du → kannst", "问句:情态动词置首", "原形 helfen 句尾"] },
            { de: "Ich möchte einen Kaffee.", zh: "我想要一杯咖啡", trigger: "möchte", case: "Akkusativ", steps: ["möchte = 礼貌想要", "点菜买东西用 möchte", "einen Kaffee 阳性 Akk"] }
          ],
          miniQuiz: { type: "choice", prompt: "___ du mir helfen?(能不能)", options: ["Kannst", "Kann", "Könnt"], answer: "Kannst", explanation: "können,du → kannst。" },
          related: ["G17", "G18"]
        },
        {
          id: "G17",
          title: "情态动词过去时 Präteritum",
          level: "A2", difficulty: 2,
          tags: ["modalverb", "konjugation"],
          summary: "情态动词过去时:Umlaut 全部消失 + 统一加 -te。",
          explain: [
            "所有 Umlaut 消失(müssen → musste)。",
            "mögen 最特殊:ö→o、g→ch(mochte)。",
            "统一加 -te;ich = er/sie/es。"
          ],
          mnemonic: "去掉变音 + 加 -te。mögen → mochte(g 变 ch)。möchten 没有过去时,用 wollte。",
          tables: [
            {
              caption: "Präteritum 变位表 — 可开「默写模式」",
              maskable: true,
              headers: ["人称", "müssen", "können", "dürfen", "sollen", "wollen", "mögen"],
              rows: [
                ["ich", "musste", "konnte", "durfte", "sollte", "wollte", "mochte"],
                ["du", "musstest", "konntest", "durftest", "solltest", "wolltest", "mochtest"],
                ["er/sie/es", "musste", "konnte", "durfte", "sollte", "wollte", "mochte"],
                ["wir", "mussten", "konnten", "durften", "sollten", "wollten", "mochten"],
                ["ihr", "musstet", "konntet", "durftet", "solltet", "wolltet", "mochtet"],
                ["sie/Sie", "mussten", "konnten", "durften", "sollten", "wollten", "mochten"]
              ]
            }
          ],
          notes: [
            "⚠️ möchten 没有过去时!『过去想要』用 wollte。",
            "🔑 叙述过去,情态动词首选 Präteritum,不用 Perfekt:Gestern konnte ich nicht kommen。"
          ],
          examples: [
            { de: "Gestern konnte ich nicht kommen.", zh: "昨天我没能来", trigger: "konnte", steps: ["können 过去 → konnte(去变音 + te)", "ich = er/sie/es", "原形 kommen 句尾"] },
            { de: "Ich musste arbeiten.", zh: "我得工作", trigger: "musste", steps: ["müssen → musste", "Umlaut 消失", "加 -te"] }
          ],
          miniQuiz: { type: "fill", prompt: "Ich muss arbeiten. → Gestern ___ ich arbeiten.(过去时)", hint: "müssen 过去", answer: ["musste"], explanation: "müssen → musste(去变音 + te)。" },
          related: ["G16"]
        },
        {
          id: "G18",
          title: "情态动词词序铁律",
          level: "A1", difficulty: 2,
          tags: ["modalverb", "wortstellung"],
          summary: "情态动词在第二位(变位),原形动词在句尾(不变、不拆)。",
          explain: [
            "位置 2:变位的情态动词。",
            "句尾:原形动词,不变、不拆(可分动词也整体放句尾)。",
            "问句:情态动词置首,原形仍在句尾。"
          ],
          mnemonic: "情态动词第二位,原形动词句尾。可分动词也不拆(aufräumen 整体放句尾)。",
          tables: [
            {
              caption: "词序示例",
              headers: ["例句", "说明"],
              rows: [
                ["Ich muss heute viel arbeiten.", "情态第二位 + 原形句尾"],
                ["Kannst du mir helfen?", "问句:情态置首"],
                ["Hier darf man nicht rauchen.", "否定 + 原形句尾"]
              ]
            }
          ],
          notes: ["mag vs möchte:mag = 喜欢(情感,多 + 名词:Ich mag Schokolade);möchte = 想要(礼貌愿望:Ich möchte einen Kaffee)。点菜买东西用 möchte。"],
          examples: [
            { de: "Ich muss heute das Zimmer aufräumen.", zh: "我今天得收拾房间", trigger: "muss … aufräumen", steps: ["muss 第二位", "可分动词不拆", "aufräumen 整体放句尾"] },
            { de: "Hier darf man nicht rauchen.", zh: "这里不许抽烟", trigger: "darf … rauchen", steps: ["darf 第二位", "nicht 否定", "原形 rauchen 句尾"] }
          ],
          miniQuiz: { type: "choice", prompt: "排句:ich / müssen / heute / aufräumen", options: ["Ich muss heute aufräumen.", "Ich heute muss aufräumen.", "Ich muss heute auf räume."], answer: "Ich muss heute aufräumen.", explanation: "情态第二位,原形 aufräumen 句尾不拆。" },
          related: ["G16"]
        }
      ],

      vocab: [
        { de: "müssen", gender: "情态", plural: "", form: "muss / musste", zh: "必须", level: "A1", tags: ["modal"] },
        { de: "können", gender: "情态", plural: "", form: "kann / konnte", zh: "能 / 会", level: "A1", tags: ["modal"] },
        { de: "dürfen", gender: "情态", plural: "", form: "darf / durfte", zh: "被允许", level: "A1", tags: ["modal"] },
        { de: "sollen", gender: "情态", plural: "", form: "soll / sollte", zh: "应该", level: "A1", tags: ["modal"] },
        { de: "wollen", gender: "情态", plural: "", form: "will / wollte", zh: "想要(意愿)", level: "A1", tags: ["modal"] },
        { de: "mögen", gender: "情态", plural: "", form: "mag / mochte", zh: "喜欢", level: "A1", tags: ["modal"] },
        { de: "möchten", gender: "情态", plural: "", form: "möchte / (无)→ wollte", zh: "想要(礼貌)", level: "A1", tags: ["modal"] }
      ],

      exercises: [
        { type: "fill", prompt: "Ich kann gut Deutsch sprechen. → Ich ___ gut Deutsch sprechen.(Präteritum)", hint: "können 过去", answer: ["konnte"], explanation: "können → konnte。" },
        { type: "choice", prompt: "『别人要求我在家学习』:Ich ___ zu Hause bleiben.", options: ["sollte", "durfte", "wollte"], answer: "sollte", explanation: "sollte = 别人要求 / 应该。" },
        { type: "fill", prompt: "___ du mir bitte helfen?(能不能)", hint: "können,du", answer: ["Kannst"], explanation: "können,du → kannst。" },
        { type: "fill", prompt: "Man ___ hier nicht rauchen.(不被允许)", hint: "dürfen + nicht = 禁止", answer: ["darf"], explanation: "dürfen,man → darf。" },
        { type: "fill", prompt: "Ich ___ einen Kaffee, bitte.(礼貌想要)", hint: "点单用?", answer: ["möchte"], explanation: "礼貌愿望用 möchte。" },
        { type: "fill", prompt: "Ich muss heute arbeiten. → Gestern ___ ich arbeiten.(过去)", hint: "müssen 过去", answer: ["musste"], explanation: "müssen → musste。" },
        { type: "fill", prompt: "Wir dürfen ins Kino. → Früher ___ wir ins Kino.(过去)", hint: "dürfen 过去复数", answer: ["durften"], explanation: "dürfen → durften。" },
        { type: "fill", prompt: "Sie will nicht kommen. → Sie ___ nicht kommen.(过去)", hint: "wollen 过去", answer: ["wollte"], explanation: "wollen → wollte。" },
        { type: "choice", prompt: "排句:du / können / am Wochenende / kommen / ?", options: ["Kannst du am Wochenende kommen?", "Du kannst am Wochenende kommen?", "Kannst du kommen am Wochenende?"], answer: "Kannst du am Wochenende kommen?", explanation: "问句:情态置首,原形 kommen 句尾。" }
      ],

      quiz: [
        { type: "fill", prompt: "___ ich hier parken?(我可以在这停车吗?被允许)", hint: "dürfen,ich", answer: ["Darf"], explanation: "dürfen,ich → darf。" },
        { type: "choice", prompt: "Ich ___ Schokolade.(我喜欢巧克力)", options: ["mag", "möchte", "muss"], answer: "mag", explanation: "mag = 喜欢 + 名词。" },
        { type: "fill", prompt: "Er kann nicht kommen. → Gestern ___ er nicht kommen.(过去)", hint: "können 过去", answer: ["konnte"], explanation: "können → konnte。" },
        { type: "choice", prompt: "正确语序:ich / wollen / einen Film / sehen", options: ["Ich will einen Film sehen.", "Ich will sehen einen Film.", "Ich einen Film will sehen."], answer: "Ich will einen Film sehen.", explanation: "情态第二位,原形 sehen 句尾。" },
        { type: "fill", prompt: "möchten 没有过去时,『我过去想去』:Ich ___ gehen.", hint: "用 wollen 的过去", answer: ["wollte"], explanation: "möchte 无过去时,用 wollte。" }
      ]
    },

    {
      id: 6,
      title: "时态 Zeitformen",
      subtitle: "Perfekt + Präteritum",
      difficulty: 3,
      level: "A2",
      tags: ["perfekt", "praeteritum", "partizip"],

      grammar: [
        {
          id: "G19",
          title: "Perfekt 构成(过去分词)",
          level: "A2", difficulty: 3,
          tags: ["perfekt", "partizip"],
          summary: "Perfekt = haben / sein(变位)+ Partizip II(过去分词,放句尾)。",
          explain: [
            "结构:haben / sein 变位 + … + Partizip II 句尾。",
            "分词怎么变看动词类型(见表)。",
            "可分动词 ge 夹中间(eingekauft);不可分 / -ieren 不加 ge。"
          ],
          mnemonic: "规则:ge+词干+t;不规则:ge+变词干+en;可分 ge 夹中间;不可分 / -ieren 无 ge。",
          tables: [
            {
              caption: "Partizip II 四种类型",
              headers: ["类型", "规则", "例子"],
              rows: [
                ["规则动词", "ge + 词干 + t", "machen → gemacht"],
                ["不规则", "ge + 变词干 + en", "gehen → gegangen"],
                ["可分动词", "前缀 + ge + 词根", "einkaufen → eingekauft"],
                ["不可分 / -ieren", "不加 ge", "besuchen → besucht;studieren → studiert"]
              ]
            }
          ],
          notes: ["不规则元音变化:ei→ie(schreiben→geschrieben)、e→o(nehmen→genommen)、e→a+n(gehen→gegangen)、a→a(fahren→gefahren)、essen→gegessen。"],
          examples: [
            { de: "Susi hat eingekauft.", zh: "苏西买了东西", trigger: "eingekauft", steps: ["einkaufen 可分 + haben", "ge 夹中间", "ein + ge + kauft"] },
            { de: "Ich habe den Termin vergessen.", zh: "我忘了这个约会", trigger: "vergessen", steps: ["vergessen 不可分前缀", "不加 ge", "PII = vergessen"] }
          ],
          miniQuiz: { type: "choice", prompt: "besuchen 的 Partizip II 是?", options: ["besucht", "gebesucht", "besuchen"], answer: "besucht", explanation: "不可分前缀 be-,不加 ge → besucht。" },
          related: ["G20", "G21"]
        },
        {
          id: "G20",
          title: "Perfekt 用 haben 还是 sein",
          level: "A2", difficulty: 3,
          tags: ["perfekt", "hilfsverb"],
          summary: "动了 / 变了 / 三个例外 → sein,其他都 haben。",
          explain: [
            "是不是位置移动(A→B)?gehen / kommen / fahren → sein。",
            "是不是状态变化?aufstehen / einschlafen / sterben / werden → sein。",
            "三个例外 sein / bleiben / passieren → sein;其余(及物、反身、情态)→ haben。"
          ],
          mnemonic: "动了 / 变了 / 三个例外(sein/bleiben/passieren)→ sein;其他都 haben。",
          flowchart: {
            title: "haben 还是 sein?",
            start: "q1",
            nodes: {
              q1: { q: "是『位置移动 A→B』(gehen/fahren…)吗?", yes: "sein", no: "q2" },
              q2: { q: "是『状态变化』(aufstehen/einschlafen/sterben/werden)吗?", yes: "sein", no: "q3" },
              q3: { q: "是三个例外 sein / bleiben / passieren 吗?", yes: "sein", no: "haben" },
              sein: { result: "→ 用 sein", good: true },
              haben: { result: "→ 用 haben(及物 / 反身 / 情态)", good: true }
            }
          },
          tables: [
            {
              caption: "sein vs haben",
              headers: ["用 sein", "用 haben"],
              rows: [
                ["移动(A→B):gehen, kommen, fahren, fliegen", "绝大多数其他动词"],
                ["状态变化:aufstehen, einschlafen, sterben, werden", "所有及物动词(带 Akk)"],
                ["三个例外:sein / bleiben / passieren", "反身动词 / 情态动词"]
              ]
            }
          ],
          notes: [
            "⚠️ bekommen = 得到(不是 become!become = werden → ist geworden)。",
            "leben / wohnen 不是移动 → haben gewohnt。"
          ],
          examples: [
            { de: "Ich bin in den Park gegangen.", zh: "我去了公园", trigger: "bin … gegangen", steps: ["gehen = 移动 A→B", "→ sein", "PII gegangen(e→a+n)"] },
            { de: "Ich habe eine Pizza mitgebracht.", zh: "我带了个披萨", trigger: "habe … mitgebracht", steps: ["有 Akk 宾语(eine Pizza)= 及物", "→ haben", "可分 mitgebracht"] }
          ],
          miniQuiz: { type: "choice", prompt: "Er ___ nach Berlin gefahren.(haben/sein?)", options: ["ist", "hat"], answer: "ist", explanation: "fahren = 移动 A→B → sein。" },
          related: ["G19"]
        },
        {
          id: "G21",
          title: "Präteritum 过去时(S-H-M-W)",
          level: "A2", difficulty: 3,
          tags: ["praeteritum"],
          summary: "过去时主要用于 sein / haben / 情态动词 和书面语;其余口语用 Perfekt。",
          explain: [
            "S-H-M-W:Sein / Haben / Modalverben / 书面 schriftlich 用 Präteritum。",
            "其他动词口语里用 Perfekt。",
            "背熟 haben / sein 过去时 + 常见强变化。"
          ],
          mnemonic: "S-H-M-W:sein / haben / 情态 / 书面 用 Präteritum;其余口语用 Perfekt。",
          tables: [
            {
              caption: "haben / sein 过去时(必背)— 可开「默写模式」",
              maskable: true,
              headers: ["人称", "haben", "sein"],
              rows: [
                ["ich", "hatte", "war"],
                ["du", "hattest", "warst"],
                ["er/sie/es", "hatte", "war"],
                ["wir", "hatten", "waren"],
                ["ihr", "hattet", "wart"],
                ["sie/Sie", "hatten", "waren"]
              ]
            },
            {
              caption: "常见强 / 混合变化(ich/er 无词尾)",
              headers: ["原形", "过去 ich/er"],
              rows: [
                ["gehen", "ging"],
                ["finden", "fand"],
                ["nehmen", "nahm"],
                ["bleiben", "blieb"],
                ["wissen", "wusste"],
                ["kennen", "kannte"],
                ["denken", "dachte"]
              ]
            }
          ],
          notes: ["⚠️ kennen(认识人 / 熟悉东西) vs wissen(知道事实 / 答案)。"],
          examples: [
            { de: "Gestern war ich krank.", zh: "昨天我病了", trigger: "war", steps: ["sein 用 Präteritum(S-H-M-W)", "ich = er/sie/es", "sein → war"] },
            { de: "Als Kind hatte ich ein Fahrrad.", zh: "小时候我有辆自行车", trigger: "hatte", steps: ["haben 用 Präteritum", "ich → hatte"] }
          ],
          miniQuiz: { type: "fill", prompt: "Gestern ___ ich krank.(sein 过去)", hint: "sein,ich", answer: ["war"], explanation: "sein 过去,ich → war。" },
          related: ["G20"]
        }
      ],

      vocab: [
        { de: "gehen", gender: "动", plural: "", form: "ist gegangen", zh: "去 / 走", level: "A1", tags: ["perfekt"] },
        { de: "kommen", gender: "动", plural: "", form: "ist gekommen", zh: "来", level: "A1", tags: ["perfekt"] },
        { de: "fahren", gender: "动", plural: "", form: "ist gefahren", zh: "乘车走", level: "A1", tags: ["perfekt"] },
        { de: "bleiben", gender: "动", plural: "", form: "ist geblieben", zh: "停留", level: "A1", tags: ["perfekt"] },
        { de: "essen", gender: "动", plural: "", form: "hat gegessen", zh: "吃", level: "A1", tags: ["perfekt"] },
        { de: "nehmen", gender: "动", plural: "", form: "hat genommen", zh: "拿", level: "A1", tags: ["perfekt"] },
        { de: "treffen", gender: "动", plural: "", form: "hat getroffen", zh: "遇见", level: "A2", tags: ["perfekt"] },
        { de: "lesen", gender: "动", plural: "", form: "hat gelesen", zh: "读", level: "A1", tags: ["perfekt"] },
        { de: "sehen", gender: "动", plural: "", form: "hat gesehen", zh: "看见", level: "A1", tags: ["perfekt"] },
        { de: "bekommen", gender: "动", plural: "", form: "hat bekommen(无 ge)", zh: "得到", level: "A2", tags: ["perfekt"] },
        { de: "vergessen", gender: "动", plural: "", form: "hat vergessen(无 ge)", zh: "忘记", level: "A2", tags: ["perfekt"] }
      ],

      exercises: [
        { type: "choice", prompt: "Wir ___ ferngesehen.(haben/sein?)", options: ["haben", "sind"], answer: "haben", explanation: "fernsehen 非移动 / 非状态变化 → haben。" },
        { type: "fill", prompt: "Ich ___ meine Hausaufgaben gemacht.(助动词)", hint: "及物动词", answer: ["habe"], explanation: "machen 及物 → haben。" },
        { type: "fill", prompt: "Er ___ nach Berlin gefahren.(助动词)", hint: "移动 A→B", answer: ["ist"], explanation: "fahren 移动 → sein。" },
        { type: "fill", prompt: "Sie hat ihre Mutter ___ .(anrufen 的 Partizip II)", hint: "可分,ge 夹中间", answer: ["angerufen"], explanation: "anrufen → angerufen。" },
        { type: "fill", prompt: "Ich habe den Termin ___ .(vergessen 的 Partizip II)", hint: "不可分,无 ge", answer: ["vergessen"], explanation: "vergessen → vergessen(无 ge)。" },
        { type: "fill", prompt: "Das Kind ___ eingeschlafen.(助动词)", hint: "状态变化", answer: ["ist"], explanation: "einschlafen 状态变化 → sein。" },
        { type: "fill", prompt: "Wir haben im Supermarkt ___ .(einkaufen 的 Partizip II)", hint: "可分", answer: ["eingekauft"], explanation: "einkaufen → eingekauft。" },
        { type: "fill", prompt: "Ich ___ zu Hause geblieben.(助动词)", hint: "三个例外之一", answer: ["bin"], explanation: "bleiben 例外 → sein。" },
        { type: "fill", prompt: "Gestern ___ ich krank.(sein 过去)", hint: "sein,ich", answer: ["war"], explanation: "sein 过去,ich → war。" },
        { type: "fill", prompt: "Als Kind ___ ich ein Fahrrad.(haben 过去)", hint: "haben,ich", answer: ["hatte"], explanation: "haben 过去,ich → hatte。" }
      ],

      quiz: [
        { type: "choice", prompt: "Ich ___ gestern ins Kino gegangen.(haben/sein?)", options: ["bin", "habe"], answer: "bin", explanation: "gehen 移动 → sein。" },
        { type: "fill", prompt: "machen 的 Partizip II 是 ___ .", hint: "规则动词", answer: ["gemacht"], explanation: "ge + 词干 + t → gemacht。" },
        { type: "choice", prompt: "studieren 的 Partizip II?", options: ["studiert", "gestudiert"], answer: "studiert", explanation: "-ieren 动词不加 ge → studiert。" },
        { type: "fill", prompt: "haben 过去:Gestern ___ ich keine Zeit.(ich)", hint: "haben,ich", answer: ["hatte"], explanation: "haben → hatte。" },
        { type: "choice", prompt: "Er ___ mich gestern getroffen.(haben/sein?)", options: ["hat", "ist"], answer: "hat", explanation: "treffen 及物(有 Akk mich)→ haben。" }
      ]
    },

    {
      id: 7,
      title: "形容词 Adjektive",
      subtitle: "词尾三套系统 + 比较级",
      difficulty: 4,
      level: "A2–B1",
      tags: ["adjektiv", "deklination", "komparativ"],

      grammar: [
        {
          id: "G22",
          title: "信号理论:形容词词尾三规则",
          level: "A2–B1", difficulty: 4,
          tags: ["adjektiv", "deklination"],
          summary: "形容词加什么词尾,取决于前面的冠词有没有『信号』。",
          explain: [
            "规则1 表语不变:形容词在名词右边做表语 → 不加词尾(Der Tisch ist groß)。",
            "规则2 冠词有信号(= 定冠词最后那个字母)→ 形容词用表2,只有 -e / -en。",
            "规则3 冠词没信号 / 没冠词 → 形容词『夺信号』,用表1的信号词尾(-er/-es…)。"
          ],
          mnemonic: "表2 超简记:单数 Nom + 单数 Akk(阴/中)= -e;其余全 -en。ein 没信号的三格:阳Nom、中Nom、中Akk → 夺信号 -er/-es。",
          tables: [
            {
              caption: "表1 — 信号词尾(定冠词最后字母)",
              headers: ["", "阳 m", "阴 f", "中 n", "复 pl"],
              rows: [
                ["Nom", "der", "die", "das", "die"],
                ["Akk", "den", "die", "das", "die"],
                ["Dat", "dem", "der", "dem", "den"]
              ]
            },
            {
              caption: "表2 — 形容词词尾(冠词有信号时,只有 -e/-en)— 可开「默写模式」",
              maskable: true,
              headers: ["", "阳 m", "阴 f", "中 n", "复 pl"],
              rows: [
                ["Nom", "e", "e", "e", "en"],
                ["Akk", "en", "e", "e", "en"],
                ["Dat", "en", "en", "en", "en"]
              ]
            }
          ],
          notes: ["⚠️ ein 没信号的三个位置:阳性 Nom、中性 Nom、中性 Akk。这三格形容词要夺信号(-er / -es)。"],
          examples: [
            { de: "der alte Mann", zh: "那位年长的男人", trigger: "alte", steps: ["der 有信号(r)", "→ 用表2,阳 Nom", "形容词 → -e:alte"] },
            { de: "ein alter Mann", zh: "一位年长的男人", trigger: "alter", steps: ["ein 没信号(阳 Nom)", "形容词夺信号", "→ -er:alter"] }
          ],
          miniQuiz: { type: "choice", prompt: "___ Mann(那位年长的,der + alt,阳Nom)", options: ["der alte", "der alter", "der alten"], answer: "der alte", explanation: "der 有信号 → 表2 阳Nom → alte。" },
          related: ["G23", "G24", "G25"]
        },
        {
          id: "G23",
          title: "强 / 弱 / 混合 三套系统",
          level: "B1", difficulty: 4,
          tags: ["adjektiv", "deklination"],
          summary: "三套词尾系统,看形容词前面是什么。",
          explain: [
            "没冠词 → 强变化(形容词夺信号)。",
            "der / die / das / dies- / jed- → 弱变化(只有 -e/-en)。",
            "ein- / mein- / kein- → 混合变化。"
          ],
          mnemonic: "混合 = ein/mein 在『阳Nom、中Nom、中Akk』三格无词尾 → 走强变化;其余同弱变化。",
          tables: [
            {
              caption: "三套系统对照",
              headers: ["前面是什么", "类型", "阳Nom", "阳Akk", "阴Nom/Akk", "中Nom/Akk"],
              rows: [
                ["没冠词", "强变化", "-er", "-en", "-e", "-es"],
                ["der/die/das/dies-/jed-", "弱变化", "-e", "-en", "-e", "-e"],
                ["ein-/mein-/kein-", "混合", "-er", "-en", "-e", "-es"]
              ]
            }
          ],
          notes: [],
          examples: [
            { de: "guter Wein", zh: "好酒(无冠词)", trigger: "guter", steps: ["无冠词 → 强变化", "阳 Nom", "夺信号 → -er:guter"] },
            { de: "ein gutes Buch", zh: "一本好书", trigger: "gutes", steps: ["ein- → 混合", "中 Nom(ein 无信号)", "走强变化 → -es:gutes"] }
          ],
          miniQuiz: { type: "choice", prompt: "___ Wein(好酒,无冠词,阳Nom,gut)", options: ["guter", "gute", "guten"], answer: "guter", explanation: "无冠词 → 强变化,阳Nom → guter。" },
          related: ["G22"]
        },
        {
          id: "G24",
          title: "形容词七大陷阱",
          level: "B1", difficulty: 4,
          tags: ["adjektiv", "fehler"],
          summary: "形容词词尾的 7 个易错点。",
          explain: [
            "谓语形容词不变;并列形容词词尾相同。",
            "数字后 = 无冠词(强变化);dies- 走弱变化。",
            "dunkel → dunkl-(加词尾 e 脱落);in + 月份 / 区域 = Dativ。"
          ],
          mnemonic: "谓语不变、并列同尾、数字后强变化、dies- 弱变化、dunkel 脱 e、in 月份用 Dat。",
          tables: [
            {
              caption: "七大陷阱",
              headers: ["陷阱", "例"],
              rows: [
                ["谓语形容词不变", "Sein Auge ist blau(不是 blaues)"],
                ["并列形容词词尾相同", "ein fröhlicher und zufriedener Mensch"],
                ["数字后 = 无冠词(强)", "33 hilflose Automaten"],
                ["dies- 走弱变化", "dieser nette Mann"],
                ["形容词变名词", "der Kriminelle / dem Kriminellen"],
                ["dunkel → dunkl-", "ein dunkles Zimmer(teuer/sauer 同理)"],
                ["in + 月份 / 区域 = Dativ", "im ersten Bezirk"]
              ]
            }
          ],
          notes: [],
          examples: [
            { de: "ein fröhlicher und zufriedener Mensch", zh: "一个快乐又满足的人", trigger: "fröhlicher und zufriedener", steps: ["并列形容词", "词尾相同", "都 -er(阳Nom 夺信号)"] },
            { de: "im ersten Bezirk", zh: "在第一区", trigger: "im ersten", case: "Dativ", steps: ["in + 区域 = Dativ", "der 信号(m)→ 表2", "-en:ersten"] }
          ],
          miniQuiz: { type: "choice", prompt: "Sein Auge ist ___ .(蓝色,谓语)", options: ["blau", "blaues", "blaue"], answer: "blau", explanation: "谓语形容词不变 → blau。" },
          related: ["G22"]
        },
        {
          id: "G25",
          title: "比较级与最高级 Komparation",
          level: "A2–B1", difficulty: 3,
          tags: ["adjektiv", "komparativ"],
          summary: "比较级 +er,最高级 am -sten / der-die-das -ste;难点是比较级再叠形容词词尾。",
          explain: [
            "比较级:一般 +er;单音节多变音(alt→älter);不规则 gut→besser。",
            "最高级:表语 / 副词 am +-sten(am nettesten);名词前 der/die/das +-ste(-n)。",
            "难点叠加:词根 + 比较级-er + 形容词词尾(ein wärmerer Winter)。"
          ],
          mnemonic: "比较级 +er(单音节变音);最高级 am -sten / der -ste。叠加:词根 + er + 形容词词尾。",
          tables: [
            {
              caption: "比较级规则",
              headers: ["规则", "例子"],
              rows: [
                ["一般 + -er", "schlank → schlanker"],
                ["-e 结尾 + -r", "müde → müder"],
                ["-er / -el 省 e", "teuer → teurer"],
                ["单音节变音 + -er", "alt→älter, groß→größer, kurz→kürzer"],
                ["不规则", "gut→besser, viel→mehr, gern→lieber, hoch→höher"]
              ]
            }
          ],
          notes: [
            "最高级:表语 / 副词 → am + -sten(am nettesten);名词前 → der/die/das + -ste(-n)(der netteste Mann)。",
            "🔥 比较级 + 词尾叠加:ein wärmerer Winter(wärm-+er+er)、ein weicheres Brot(weich-+er+es)。"
          ],
          examples: [
            { de: "Jetzt ist sie schlanker als früher.", zh: "她现在比以前苗条", trigger: "schlanker", steps: ["比较级 + er", "schlank → schlanker", "als 引出比较对象"] },
            { de: "Ein weicheres Brot ist mir lieber.", zh: "我更喜欢软一点的面包", trigger: "weicheres", steps: ["weich + er(比较级)", "+ es(中Nom,ein 无信号)", "weicheres"] }
          ],
          miniQuiz: { type: "fill", prompt: "Mein Bruder ist ___ als ich.(groß 的比较级)", hint: "单音节变音", answer: ["größer"], explanation: "groß → größer(o→ö)。" },
          related: ["G22"]
        }
      ],

      vocab: [
        { de: "schlank", gender: "形", plural: "", form: "schlanker", zh: "苗条", level: "A2", tags: ["adjektiv"] },
        { de: "teuer", gender: "形", plural: "", form: "teurer(省 e)", zh: "贵", level: "A1", tags: ["adjektiv"] },
        { de: "groß", gender: "形", plural: "", form: "größer(变音)", zh: "大 / 高", level: "A1", tags: ["adjektiv"] },
        { de: "alt", gender: "形", plural: "", form: "älter(变音)", zh: "老 / 旧", level: "A1", tags: ["adjektiv"] },
        { de: "kalt", gender: "形", plural: "", form: "kälter(变音)", zh: "冷", level: "A1", tags: ["adjektiv"] },
        { de: "gut", gender: "形", plural: "", form: "besser(不规则)", zh: "好", level: "A1", tags: ["adjektiv"] },
        { de: "hoch", gender: "形", plural: "", form: "höher(不规则)", zh: "高", level: "A1", tags: ["adjektiv"] },
        { de: "viel", gender: "形", plural: "", form: "mehr(不规则)", zh: "多", level: "A1", tags: ["adjektiv"] },
        { de: "gern", gender: "副", plural: "", form: "lieber(不规则)", zh: "乐意", level: "A1", tags: ["adverb"] },
        { de: "fesch", gender: "形", plural: "", form: "fescher", zh: "帅 / 漂亮(奥)", level: "A2", tags: ["adjektiv"] }
      ],

      exercises: [
        { type: "fill", prompt: "der ___ Hund(groß,阳Nom)", hint: "der 有信号 → 表2", answer: ["große"], explanation: "der 有信号 → 表2 阳Nom → große。" },
        { type: "fill", prompt: "ein ___ Hund(groß,阳Nom)", hint: "ein 没信号 → 夺信号", answer: ["großer"], explanation: "ein 没信号(阳Nom)→ 夺 -er → großer。" },
        { type: "fill", prompt: "ein ___ Kind(klein,中Akk)", hint: "ein 没信号(中Akk)", answer: ["kleines"], explanation: "ein 没信号(中Akk)→ 夺 -es → kleines。" },
        { type: "fill", prompt: "mit der ___ Frau(schön,阴Dat)", hint: "der 有信号", answer: ["schönen"], explanation: "der 有信号(阴Dat)→ 表2 → schönen。" },
        { type: "fill", prompt: "Ich kaufe einen ___ Apfel.(rot,阳Akk)", hint: "einen 有信号", answer: ["roten"], explanation: "einen 有信号(阳Akk)→ 表2 → roten。" },
        { type: "fill", prompt: "___ Wein(gut,无冠词,阳Nom)", hint: "无冠词 → 强变化", answer: ["guter"], explanation: "无冠词(阳Nom)→ 强变化 → guter。" },
        { type: "fill", prompt: "Mein Bruder ist ___ als ich.(groß 比较级)", hint: "单音节变音", answer: ["größer"], explanation: "groß → größer。" },
        { type: "fill", prompt: "Dieser Kuchen ist ___ als der andere.(gut 比较级)", hint: "不规则", answer: ["besser"], explanation: "gut → besser。" },
        { type: "fill", prompt: "Im Winter ist es am ___ .(kalt 最高级)", hint: "am + -sten,变音", answer: ["kältesten"], explanation: "am kältesten(a→ä)。" },
        { type: "fill", prompt: "Ein ___ Auto ist mir lieber.(schnell 比较级+词尾,中Nom,ein)", hint: "词根+er+es", answer: ["schnelleres"], explanation: "schnell- + er(比较级)+ es(中Nom,ein 无信号)→ schnelleres。" }
      ],

      quiz: [
        { type: "choice", prompt: "das ___ Auto(neu,中Nom,定冠词)", options: ["neue", "neues", "neuen"], answer: "neue", explanation: "das 有信号 → 表2 中Nom → neue。" },
        { type: "choice", prompt: "ein ___ Haus(schön,中Nom,ein)", options: ["schönes", "schöne", "schöner"], answer: "schönes", explanation: "ein 中Nom 无信号 → 夺 -es → schönes。" },
        { type: "fill", prompt: "Heute ist es ___ als gestern.(warm 比较级)", hint: "变音", answer: ["wärmer"], explanation: "warm → wärmer(a→ä)。" },
        { type: "fill", prompt: "Berlin ist ___ als München.(groß 比较级)", hint: "变音", answer: ["größer"], explanation: "groß → größer。" },
        { type: "choice", prompt: "Er ist der ___ Schüler.(gut 最高级,名词前阳Nom)", options: ["beste", "besten", "am besten"], answer: "beste", explanation: "名词前最高级 der + -ste → der beste。" }
      ]
    },

    {
      id: 8,
      title: "从句与语序",
      subtitle: "weil/wenn/dass/ob + hin/her",
      difficulty: 3,
      level: "A2",
      tags: ["nebensatz", "wortstellung", "richtung"],

      grammar: [
        {
          id: "G26",
          title: "从句黄金规则:动词句尾 + 倒装",
          level: "A2", difficulty: 3,
          tags: ["nebensatz", "wortstellung"],
          summary: "从句动词放句尾,主从句之间用逗号;从句在前时主句倒装。",
          explain: [
            "从句:引导词(weil/wenn/dass/ob…)开头,变位动词放句尾,前面加逗号。",
            "从句在前 → 主句倒装(动词提到主语前):Weil ich krank bin, bleibe ich…。",
            "从句里:可分动词不拆整体到句尾;情态动词→主动词原形+情态动词最后;Perfekt→助动词到最后。"
          ],
          mnemonic: "从句动词跑句尾,逗号别忘;从句在前,主句动词和主语换位。",
          tables: [
            {
              caption: "主句 vs 从句",
              headers: ["", "主句 Hauptsatz", "从句 Nebensatz"],
              rows: [
                ["动词位置", "第二位", "句尾"],
                ["引导词", "无", "weil/wenn/dass/ob/als/obwohl"]
              ]
            },
            {
              caption: "常用连词",
              headers: ["连词", "意思", "提问"],
              rows: [
                ["weil", "因为", "Warum?"],
                ["wenn", "当… / 如果(反复/现在/将来)", "Wann?"],
                ["als", "当…时(过去一次性)", "—"],
                ["dass", "那个 (that)", "—"],
                ["ob", "是否 (whether)", "—"]
              ]
            }
          ],
          notes: [
            "⚠️ wann(疑问词,问时间点)≠ wenn(连词);dass(连词,双 s)≠ das(冠词/代词)。",
            "从句特殊:可分动词不拆(…, weil ich aufstehe);情态动词排最后(…, weil ich lernen muss);Perfekt 助动词最后(…, ob er gelesen hat)。"
          ],
          examples: [
            { de: "Ich bleibe zu Hause, weil ich krank bin.", zh: "我待在家,因为我病了", trigger: "weil … bin", steps: ["weil 引导从句", "动词 bin 放句尾", "主句 + 逗号 + 从句"] },
            { de: "Wenn ich müde bin, ruhe ich mich aus.", zh: "当我累了,我就休息", trigger: "ruhe ich", steps: ["wenn 从句在前", "主句倒装", "动词 ruhe 提到主语 ich 前"] }
          ],
          miniQuiz: { type: "choice", prompt: "连成从句:Ich bleibe zu Hause + weil + Es regnet.", options: ["…, weil es regnet.", "…, weil regnet es.", "…, weil es regnen."], answer: "…, weil es regnet.", explanation: "weil 从句动词 regnet 放句尾。" },
          related: ["G27", "G28"]
        },
        {
          id: "G27",
          title: "dass vs ob 判断",
          level: "A2", difficulty: 3,
          tags: ["nebensatz"],
          summary: "确定信息用 dass;不确定 / 能用『是否』替换用 ob;有疑问词直接用 W-Wort。",
          explain: [
            "确定的信息 → dass(常搭 glauben / denken / hoffen / finden)。",
            "不确定、能用『是否』替换 → ob(常搭 weiß nicht / frage mich)。",
            "有疑问词 → 直接用那个 W-Wort(wo/wann/wie…),动词仍句尾。"
          ],
          mnemonic: "确定 dass,是否 ob,有疑问词用 W-Wort。三者从句动词都句尾。",
          flowchart: {
            title: "dass / ob / W-Wort 怎么选?",
            start: "q1",
            nodes: {
              q1: { q: "句子里有疑问词(wo/wann/wie…)吗?", yes: "w", no: "q2" },
              q2: { q: "能用『是否』替换吗?(不确定)", yes: "ob", no: "dass" },
              w: { result: "→ 直接用那个 W-Wort", good: true },
              ob: { result: "→ 用 ob(是否)", good: true },
              dass: { result: "→ 用 dass(确定)", good: true }
            }
          },
          tables: [
            {
              caption: "对比",
              headers: ["句子", "选", "原因"],
              rows: [
                ["Ich weiß, ___ er arbeitet.", "dass", "确定"],
                ["Ich weiß nicht, ___ er arbeitet.", "ob", "不知是否"],
                ["Ich hoffe, ___ du kommst.", "dass", "愿望"]
              ]
            }
          ],
          notes: [],
          examples: [
            { de: "Ich glaube, dass er keine Zeit hat.", zh: "我觉得他没时间", trigger: "dass", steps: ["glauben = 表观点(确定)", "→ dass", "动词 hat 句尾"] },
            { de: "Weißt du, ob sie zu Hause ist?", zh: "你知道她在不在家吗", trigger: "ob", steps: ["不确定,能换『是否』", "→ ob", "动词 ist 句尾"] }
          ],
          miniQuiz: { type: "choice", prompt: "Kannst du mir sagen, ___ der Zug schon abgefahren ist?", options: ["ob", "dass", "wann"], answer: "ob", explanation: "不确定,能换『是否』→ ob。" },
          related: ["G26"]
        },
        {
          id: "G28",
          title: "hin / her 方向副词",
          level: "A2", difficulty: 3,
          tags: ["richtung", "adverb"],
          summary: "以说话者位置为中心:her = 朝我这边来;hin = 往那边去。",
          explain: [
            "找动作主体(句子主语;引号里 = 说话人)。",
            "离开主体 → hin-;朝向主体 → her-。",
            "维度:上下 auf/unter、内外 ein/aus、跨越 über。"
          ],
          mnemonic: "her = 来(朝向我),hin = 去(远离我)。引号 = 视角开关。",
          flowchart: {
            title: "hin 还是 her?",
            start: "q1",
            nodes: {
              q1: { q: "动作是『朝向说话者(我)』来吗?", yes: "her", no: "hin" },
              her: { result: "→ her-(herunter, herein…)", good: true },
              hin: { result: "→ hin-(hinauf, hinein…)", good: true }
            }
          },
          tables: [
            {
              caption: "hin vs her",
              headers: ["方向", "含义", "例"],
              rows: [
                ["her-", "朝我这边来", "Komm herunter! / herein"],
                ["hin-", "往那边去", "Geh hinauf! / hinein"]
              ]
            }
          ],
          notes: [
            "⚠️ 引号 = 视角开关!同一个 Thomas:叙述者视角 → hin-(hinauf);引号内本人视角 → her-(herunter)。",
            "口语:rauf / runter / rein / raus / rüber(hin-/her- 合并)。"
          ],
          examples: [
            { de: "Thomas ruft hinauf.", zh: "托马斯朝楼上喊(叙述视角)", trigger: "hinauf", steps: ["叙述者视角:Thomas 在楼下", "朝楼上 = 远离焦点", "→ hin- → hinauf"] },
            { de: "„Komm herunter!“", zh: "“下来吧!”(引号内本人视角)", trigger: "herunter", steps: ["引号 = 说话人视角", "让对方朝自己下来", "→ her- → herunter"] }
          ],
          miniQuiz: { type: "choice", prompt: "Komm bitte ___ !(说话人让对方过来,朝向我)", options: ["her", "hin", "hinein"], answer: "her", explanation: "朝向说话者 → her(Komm her!)。" },
          related: ["G26"]
        }
      ],

      vocab: [
        { de: "weil", gender: "连词", plural: "", form: "动词句尾", zh: "因为", level: "A2", tags: ["nebensatz"] },
        { de: "wenn", gender: "连词", plural: "", form: "从前主倒", zh: "当 / 如果", level: "A2", tags: ["nebensatz"] },
        { de: "dass", gender: "连词", plural: "", form: "双 s", zh: "那个(that)", level: "A2", tags: ["nebensatz"] },
        { de: "ob", gender: "连词", plural: "", form: "= whether", zh: "是否", level: "A2", tags: ["nebensatz"] },
        { de: "obwohl", gender: "连词", plural: "", form: "动词句尾", zh: "虽然", level: "A2", tags: ["nebensatz"] },
        { de: "hin", gender: "副", plural: "", form: "远离我", zh: "去(远离我)", level: "A2", tags: ["richtung"] },
        { de: "her", gender: "副", plural: "", form: "朝向我", zh: "来(朝向我)", level: "A2", tags: ["richtung"] },
        { de: "sich ausruhen", gender: "反身", plural: "", form: "ich → mich", zh: "休息", level: "A2", tags: ["reflexiv"] },
        { de: "jemand", gender: "代词", plural: "", form: "Dat: jemandem", zh: "某人", level: "A2", tags: ["pronomen"] }
      ],

      exercises: [
        { type: "choice", prompt: "Ich bleibe zu Hause, weil ___ .(Es regnet)", options: ["es regnet", "regnet es", "es regnen"], answer: "es regnet", explanation: "weil 从句动词 regnet 放句尾。" },
        { type: "choice", prompt: "wenn 从句在前:___ , besuche ich dich.(Ich habe Zeit)", options: ["Wenn ich Zeit habe", "Wenn ich habe Zeit", "Wenn habe ich Zeit"], answer: "Wenn ich Zeit habe", explanation: "从句动词 habe 句尾;主句倒装 besuche ich。" },
        { type: "fill", prompt: "Ich weiß nicht, ___ er heute kommt.(是否)", hint: "能换『是否』", answer: ["ob"], explanation: "是非问 → ob,动词句尾。" },
        { type: "fill", prompt: "Ich glaube, ___ das Wetter morgen schön wird.", hint: "glauben → 确定", answer: ["dass"], explanation: "glauben = 观点 → dass。" },
        { type: "fill", prompt: "Kannst du mir sagen, ___ der Zug schon abgefahren ist?", hint: "能换『是否』", answer: ["ob"], explanation: "不确定 → ob。" },
        { type: "fill", prompt: "Weißt du, ___ das Hotel liegt?(问位置)", hint: "问位置用?", answer: ["wo"], explanation: "问位置 → wo,动词 liegt 句尾。" },
        { type: "fill", prompt: "Komm bitte ___ !(朝向我)", hint: "朝向说话者", answer: ["her"], explanation: "朝向说话者 → her。" },
        { type: "fill", prompt: "Geh schnell ___ , es ist kalt draußen.(进屋里,离开我)", hint: "离开说话者进屋", answer: ["hinein", "rein"], explanation: "离开说话者进屋 → hin-(hinein / 口语 rein)。" }
      ],

      quiz: [
        { type: "choice", prompt: "weil 从句:Ich lerne Deutsch, weil ich in Wien ___ .(leben)", options: ["lebe", "lebe ich", "leben"], answer: "lebe", explanation: "从句动词句尾 → lebe。" },
        { type: "choice", prompt: "情态动词从句:…, weil ich morgen arbeiten ___ .(müssen)", options: ["muss", "musse", "mussen"], answer: "muss", explanation: "从句:原形 arbeiten + 情态动词 muss 排最后。" },
        { type: "fill", prompt: "间接问句:Wo wohnst du? → Ich möchte wissen, wo du ___ .(wohnen)", hint: "动词句尾", answer: ["wohnst"], explanation: "间接问句动词句尾 → wohnst。" },
        { type: "choice", prompt: "Ich hoffe, ___ du bald gesund wirst.", options: ["dass", "ob", "wenn"], answer: "dass", explanation: "愿望 / 确定 → dass。" },
        { type: "choice", prompt: "„Komm schnell ___!“ rief sie.(引号,让对方过来)", options: ["her", "hin", "hinauf"], answer: "her", explanation: "引号说话人视角,朝向她 → her。" }
      ]
    },

    {
      id: 9,
      title: "写作与表达",
      subtitle: "正式邮件 + 描述人 + 看图作文",
      difficulty: 2,
      level: "A2–B1",
      tags: ["schreiben", "beschreibung", "satzbau"],

      grammar: [
        {
          id: "G29",
          title: "正式邮件格式",
          level: "A2", difficulty: 2,
          tags: ["schreiben"],
          summary: "给老师写正式邮件的固定格式 + 三个不能错的地方。",
          explain: [
            "称呼后用逗号,下一行小写开头。",
            "Sie / Ihnen / Ihr 永远大写(对老师用『您』)。",
            "结尾 Freundliche Grüße 不加逗号,直接换行写名字。"
          ],
          mnemonic: "称呼逗号 + 小写续写;Sie 全大写;结尾问候不加逗号。",
          tables: [
            {
              caption: "称呼 Anrede 怎么写",
              headers: ["情境", "Anrede 称呼"],
              rows: [
                ["知道姓(男)", "Sehr geehrter Herr Bauer,"],
                ["知道姓(女)", "Sehr geehrte Frau Bauer,"],
                ["有博士学位", "Sehr geehrter Herr Dr. Bauer,"],
                ["不知姓名", "Sehr geehrte Damen und Herren,"],
                ["半正式(已认识)", "Lieber Herr Bauer, / Liebe Frau Bauer,"]
              ]
            }
          ],
          notes: [
            "模板:Betreff → 称呼, → 正文(小写起) → Freundliche Grüße → 名字。",
            "万能句:Im Anhang finden Sie … / Ich habe eine Frage zu … / Leider kann ich am Samstag nicht kommen. / Ich freue mich auf Ihre Antwort."
          ],
          examples: [
            { de: "Sehr geehrter Herr Bauer, im Anhang finden Sie meine Hausaufgabe.", zh: "尊敬的鲍尔先生,附件中是我的作业。", trigger: "Sehr geehrter … ,", steps: ["称呼后逗号", "下一行小写 im", "结尾用 Freundliche Grüße"] },
            { de: "Ich freue mich auf Ihre Antwort.", zh: "期待您的回复。", trigger: "Ihre", steps: ["对老师用『您』", "Ihre 大写", "freuen auf + Akk"] }
          ],
          miniQuiz: { type: "choice", prompt: "正式邮件称呼后用什么标点?", options: ["逗号,下一行小写", "句号,下一行大写", "感叹号"], answer: "逗号,下一行小写", explanation: "称呼后逗号,正文小写开头。" },
          related: ["G30", "G31"]
        },
        {
          id: "G30",
          title: "描述人 Personenbeschreibung 句型",
          level: "A2–B1", difficulty: 3,
          tags: ["beschreibung", "adjektiv"],
          summary: "描述一个人的可复用句型 —— 也是形容词词尾(模块七)的实战。",
          explain: [
            "开头:X ist eine junge Frau / ein junger Mann, … Jahre alt。",
            "外貌:X hat [发色][发型] Haare, ein [形状] Gesicht und [颜色] Augen。",
            "评价:Ich denke, dass X ein … und … Mensch ist。"
          ],
          mnemonic: "年龄身高 → 头发脸眼 → 穿着 → 性格(dass 从句)。每个名词前形容词都要按模块七变词尾。",
          tables: [
            {
              caption: "可复用句型",
              headers: ["功能", "句型"],
              rows: [
                ["介绍", "X ist eine junge Frau, … Jahre alt."],
                ["身高体重", "X ist … Meter groß und wiegt … kg."],
                ["外貌", "X hat … Haare, ein … Gesicht und … Augen."],
                ["穿着", "X trägt … / passt gut zu dem …"],
                ["性格", "Ich denke, dass X ein … Mensch ist."]
              ]
            }
          ],
          notes: ["🔑 形容词词尾实战(模块七):ein ovales Gesicht(中Akk 夺 -es)、ein fröhlicher und zufriedener Mensch(阳Nom 夺 -er,两个并列都加)。"],
          examples: [
            { de: "Maria hat schwarze lockige Haare und ein ovales Gesicht.", zh: "玛丽亚有一头黑色卷发和一张鹅蛋脸。", trigger: "schwarze … ovales", steps: ["Haare 复数无冠词 → schwarze / lockige(-e)", "Gesicht 中Akk,ein 无信号 → ovales(-es)"] },
            { de: "Ich denke, dass Maria ein fröhlicher Mensch ist.", zh: "我觉得玛丽亚是个开朗的人。", trigger: "ein fröhlicher", steps: ["dass 从句,动词 ist 句尾", "Mensch 阳Nom,ein 无信号 → fröhlicher(-er)"] }
          ],
          miniQuiz: { type: "choice", prompt: "Sie hat ein ___ Gesicht.(rund,中Akk,ein)", options: ["rundes", "runde", "runder"], answer: "rundes", explanation: "ein 中Akk 无信号 → 夺 -es → rundes。" },
          related: ["G29"]
        },
        {
          id: "G31",
          title: "看图作文讲故事时态",
          level: "A2", difficulty: 3,
          tags: ["schreiben", "zeitform"],
          summary: "讲故事主体用 Perfekt,sein / haben / 情态用 Präteritum;连接词丰富语序。",
          explain: [
            "主体动作用 Perfekt;sein / haben / 情态动词用 Präteritum。",
            "移动 / 状态变化用 sein(aufwachen / flüchten / steigen → ist…)。",
            "连接词:plötzlich/dann/danach(句首 → 倒装);als/während(从句,动词句尾);deshalb(句首 → 倒装)。"
          ],
          mnemonic: "故事主体 Perfekt,S-H-M 用 Präteritum。句首连接词 → 主句倒装。",
          tables: [
            {
              caption: "连接词工具箱",
              headers: ["连接词", "用法"],
              rows: [
                ["plötzlich / dann / danach", "句首 → 主句倒装"],
                ["als / während", "从句 → 动词句尾"],
                ["deshalb", "句首 → 主句倒装"],
                ["stattdessen / obwohl", "转折 / 让步"]
              ]
            }
          ],
          notes: ["看图开头句:Auf dem Bild sieht man … / Das Bild zeigt … / im Vordergrund / im Hintergrund。"],
          examples: [
            { de: "Plötzlich hat der Einbrecher einen Schreck bekommen.", zh: "突然,窃贼吓了一跳。", trigger: "Plötzlich hat", steps: ["plötzlich 句首 → 倒装(hat 在主语前)", "bekommen 不可分无 ge → haben", "einen Schreck bekommen = 吓一跳"] },
            { de: "Er ist aus dem Fenster gestiegen.", zh: "他从窗户爬了出去。", trigger: "ist … gestiegen", steps: ["steigen 移动 → sein", "Perfekt:ist + gestiegen", "ei→ie"] }
          ],
          miniQuiz: { type: "choice", prompt: "Er ___ aus dem Fenster gestiegen.(steigen,Perfekt)", options: ["ist", "hat"], answer: "ist", explanation: "steigen 移动 → sein → ist gestiegen。" },
          related: ["G29"]
        }
      ],

      vocab: [
        { de: "Betreff", gender: "der", plural: "-e", form: "邮件主题", zh: "(邮件)主题", level: "A2", tags: ["schreiben"] },
        { de: "Anrede", gender: "die", plural: "-n", form: "", zh: "称呼", level: "A2", tags: ["schreiben"] },
        { de: "Anhang", gender: "der", plural: "¨e (Anhänge)", form: "im Anhang", zh: "附件", level: "A2", tags: ["schreiben"] },
        { de: "Gesicht", gender: "das", plural: "-er", form: "oval / rund", zh: "脸", level: "A1", tags: ["beschreibung"] },
        { de: "Brille", gender: "die", plural: "-n", form: "单数! eine Brille", zh: "眼镜", level: "A1", tags: ["beschreibung"] },
        { de: "Einbrecher", gender: "der", plural: "-", form: "", zh: "入室盗贼", level: "B1", tags: ["beschreibung"] },
        { de: "tragen", gender: "动", plural: "(trägt)", form: "不规则动词", zh: "穿戴", level: "A1", tags: ["verb"] },
        { de: "Freundliche Grüße", gender: "短语", plural: "", form: "信尾不加逗号", zh: "此致问候", level: "A2", tags: ["schreiben"] },
        { de: "einen Schreck bekommen", gender: "短语", plural: "", form: "be- 不可分", zh: "吓一跳", level: "B1", tags: ["phrase"] },
        { de: "sympathisch", gender: "形", plural: "", form: "sympathischer", zh: "讨人喜欢的", level: "A2", tags: ["adjektiv"] }
      ],

      exercises: [
        { type: "fill", prompt: "Liebesbrief:Ich denke jeden Tag an ___ .(你,an + Akk)", hint: "an + Akk", answer: ["dich"], explanation: "an + Akk,你 → dich。" },
        { type: "fill", prompt: "Isabella trägt ein ___ Dirndl.(schön,中Akk,ein)", hint: "ein 中Akk 无信号", answer: ["schönes"], explanation: "ein 中Akk 无信号 → 夺 -es → schönes。" },
        { type: "choice", prompt: "正式邮件称呼正确写法?", options: ["Sehr geehrter Herr Bauer,", "Sehr geehrter Herr Bauer."], answer: "Sehr geehrter Herr Bauer,", explanation: "称呼后用逗号,下一行小写。" },
        { type: "choice", prompt: "信尾正确写法?", options: ["Freundliche Grüße ↵ Fachi", "Freundliche Grüße, Fachi"], answer: "Freundliche Grüße ↵ Fachi", explanation: "Freundliche Grüße 不加逗号,换行写名字。" },
        { type: "fill", prompt: "Er hat ___ Haare.(kurz,复Akk 无冠词)", hint: "复数无冠词 → 强变化", answer: ["kurze"], explanation: "复数无冠词 → 夺 -e → kurze。" },
        { type: "fill", prompt: "Sie hat ein ___ Gesicht.(rund,中Akk,ein)", hint: "ein 中Akk 无信号", answer: ["rundes"], explanation: "ein 中Akk 无信号 → 夺 -es → rundes。" },
        { type: "fill", prompt: "Sie trägt eine ___ Brille.(rot,阴Akk,eine)", hint: "eine 有信号", answer: ["rote"], explanation: "eine 有信号(阴Akk)→ 表2 → rote。" },
        { type: "choice", prompt: "Plötzlich ___ der Einbrecher einen Schreck bekommen.(bekommen,Perfekt)", options: ["hat", "ist"], answer: "hat", explanation: "bekommen 不可分无 ge;及物 → haben。" },
        { type: "choice", prompt: "Er ___ aus dem Fenster gestiegen.(steigen,Perfekt)", options: ["ist", "hat"], answer: "ist", explanation: "steigen 移动 → sein。" }
      ],

      quiz: [
        { type: "choice", prompt: "对老师写信,『您』用哪个?", options: ["Sie(大写)", "sie(小写)", "du"], answer: "Sie(大写)", explanation: "正式信 Sie / Ihnen / Ihr 大写。" },
        { type: "fill", prompt: "Ich ___ mich auf Ihre Antwort.(期待您的回复,sich freuen)", hint: "ich → ?", answer: ["freue"], explanation: "sich freuen auf;ich → freue mich。" },
        { type: "choice", prompt: "ein ___ Mann(年轻 jung,阳Nom,ein)", options: ["junger", "junge", "junges"], answer: "junger", explanation: "ein 阳Nom 无信号 → 夺 -er → junger。" },
        { type: "choice", prompt: "看图作文:主体动作用什么时态?", options: ["Perfekt", "Präteritum", "Futur"], answer: "Perfekt", explanation: "主体用 Perfekt(sein/haben/情态除外)。" },
        { type: "fill", prompt: "Im ___ finden Sie meine Hausaufgabe.(附件 der Anhang)", hint: "im ___", answer: ["Anhang"], explanation: "im Anhang = 附件中。" }
      ]
    },

    {
      id: 10,
      title: "词汇导航 Wortschatz",
      subtitle: "按主题背词 + 语法暗线",
      difficulty: 2,
      level: "A1–A2",
      tags: ["wortschatz", "thema"],

      grammar: [
        {
          id: "G32",
          title: "词汇里的语法暗线",
          level: "A1–A2", difficulty: 2,
          tags: ["wortschatz"],
          summary: "词汇按主题语义簇分组,边背词边巩固对应语法模块。",
          explain: [
            "名词一定连『冠词 + 复数』一起记(der/die/das + 复数),否则格和词尾都会错。",
            "背词时留意几条语法暗线(见下表)。",
            "用法三步:手抄精读(带冠词 + 圈搭配)→ 盖中文 / 盖德文双向回想 → 次日 / 三日 / 一周间隔重复。"
          ],
          mnemonic: "名词连冠词复数一起背;语义簇配语法模块;三步精背 + 间隔重复。",
          tables: [
            {
              caption: "语义簇 → 配合语法模块",
              headers: ["语义簇", "代表词", "配合模块"],
              rows: [
                ["家庭 · 亲属", "die Geschwister, der Neffe, die Nichte", "模块一 / 二"],
                ["饮食 · 厨房", "das Ei, das Fleisch, die Gabel, der Topf", "模块四"],
                ["居住 · 家具", "die Wohnung, der Schrank, der Herd", "模块四"],
                ["交通 · 出行", "das Verkehrsmittel, der Fahrplan, das Gleis", "模块三"],
                ["身体 · 健康", "das Bein, husten, das Fieber, das Rezept", "模块二"],
                ["服装 · 天气", "tragen, der Mantel, bunt, der Nebel", "模块七 / 九"],
                ["职业 · 人物", "der Ingenieur, der Journalist", "模块一(n-变化)"]
              ]
            },
            {
              caption: "语法暗线(边背词边巩固)",
              headers: ["暗线", "例", "配合模块"],
              rows: [
                ["sein 完成时移动动词", "gehen / kommen / fahren", "模块六"],
                ["+Dativ『反着来』动词", "gefallen / schmecken / helfen", "模块四"],
                ["n-变化名词", "der Neffe / Journalist / Patient", "模块一"],
                ["动词 + 固定介词", "sich freuen auf, warten auf", "模块三"],
                ["A2 阴性后缀", "-ung / -tion / -heit / -keit / -schaft", "A2"]
              ]
            }
          ],
          notes: [
            "外部词表(Notion):A1 摸底清单(599词)、19天突击计划、A1 / A2 例句背词总索引。每天从『例句背词总索引』进。",
            "复习四步:摸底勾盲区 → 盲区进例句索引精背 → A1 稳了起 A2 → 名词连冠词 + 复数记。"
          ],
          examples: [
            { de: "Die Suppe schmeckt mir.", zh: "这汤我觉得好喝", trigger: "schmeckt", case: "Dativ", steps: ["schmecken 主语是事物", "人用 Dat(反着来)", "→ mir"] },
            { de: "Ich kenne den Journalisten.", zh: "我认识那位记者", trigger: "Journalisten", case: "Akkusativ", steps: ["Journalist 是 n-变化", "Akk 加 -en", "den Journalisten"] }
          ],
          miniQuiz: { type: "choice", prompt: "背名词时应该连什么一起记?", options: ["冠词 + 复数", "只记单词", "只记中文"], answer: "冠词 + 复数", explanation: "der/die/das + 复数一起记,否则格和词尾会错。" },
          related: ["G1", "G4"]
        }
      ],

      vocab: [
        { de: "Geschwister", gender: "die", plural: "(只复数)", form: "Pl.", zh: "兄弟姐妹", level: "A1", tags: ["familie"] },
        { de: "Neffe", gender: "der", plural: "-n", form: "den Neffen(n-变化)", zh: "侄子 / 外甥", level: "A2", tags: ["familie", "n-deklination"] },
        { de: "Ei", gender: "das", plural: "-er", form: "", zh: "蛋", level: "A1", tags: ["essen"] },
        { de: "Fleisch", gender: "das", plural: "-", form: "不可数", zh: "肉", level: "A1", tags: ["essen"] },
        { de: "Gabel", gender: "die", plural: "-n", form: "", zh: "叉子", level: "A1", tags: ["essen"] },
        { de: "Wohnung", gender: "die", plural: "-en", form: "-ung 后缀 → 阴性", zh: "住房", level: "A1", tags: ["wohnen"] },
        { de: "Schrank", gender: "der", plural: "¨e (Schränke)", form: "", zh: "柜子", level: "A1", tags: ["wohnen"] },
        { de: "Herd", gender: "der", plural: "-e", form: "", zh: "炉灶", level: "A2", tags: ["wohnen"] },
        { de: "Verkehrsmittel", gender: "das", plural: "-", form: "", zh: "交通工具", level: "A2", tags: ["verkehr"] },
        { de: "Fahrplan", gender: "der", plural: "¨e (Fahrpläne)", form: "", zh: "时刻表", level: "A2", tags: ["verkehr"] },
        { de: "Gleis", gender: "das", plural: "-e", form: "", zh: "站台 / 轨道", level: "A2", tags: ["verkehr"] },
        { de: "Bein", gender: "das", plural: "-e", form: "", zh: "腿", level: "A1", tags: ["koerper"] },
        { de: "Fieber", gender: "das", plural: "-", form: "Fieber haben", zh: "发烧", level: "A1", tags: ["gesundheit"] },
        { de: "Rezept", gender: "das", plural: "-e", form: "", zh: "处方 / 食谱", level: "A2", tags: ["gesundheit"] },
        { de: "Mantel", gender: "der", plural: "¨ (Mäntel)", form: "", zh: "大衣", level: "A1", tags: ["kleidung"] },
        { de: "Nebel", gender: "der", plural: "-", form: "", zh: "雾", level: "A2", tags: ["wetter"] },
        { de: "Ingenieur", gender: "der", plural: "-e", form: "", zh: "工程师", level: "A2", tags: ["beruf"] },
        { de: "Journalist", gender: "der", plural: "-en", form: "den Journalisten(n-变化)", zh: "记者", level: "A2", tags: ["beruf", "n-deklination"] },
        { de: "husten", gender: "动", plural: "", form: "咳嗽", zh: "咳嗽", level: "A2", tags: ["gesundheit"] },
        { de: "sich erinnern an", gender: "反身", plural: "+ Akk", form: "记得", zh: "记得", level: "A2", tags: ["reflexiv"] },
        { de: "bunt", gender: "形", plural: "", form: "bunter", zh: "彩色的", level: "A2", tags: ["adjektiv"] }
      ],

      exercises: [
        { type: "choice", prompt: "die Wohnung 的词性?(-ung 后缀)", options: ["die(阴)", "der(阳)", "das(中)"], answer: "die(阴)", explanation: "-ung 结尾的名词是阴性。" },
        { type: "fill", prompt: "记者(n-变化)的 Akk:Ich kenne den ___ .(Journalist)", hint: "n-变化 Akk", answer: ["Journalisten"], explanation: "n-变化 Akk 加 -en → den Journalisten。" },
        { type: "choice", prompt: "das Ei 的复数?", options: ["Eier", "Eis", "Eien"], answer: "Eier", explanation: "das Ei → die Eier。" },
        { type: "choice", prompt: "schmecken / gefallen 这类动词,人用什么格?", options: ["Dativ", "Akkusativ", "Nominativ"], answer: "Dativ", explanation: "主语是事物,人用 Dat(反着来)。" },
        { type: "fill", prompt: "der Mantel 的复数(变音):die ___", hint: "a → ä", answer: ["Mäntel"], explanation: "der Mantel → die Mäntel。" },
        { type: "choice", prompt: "-tion / -heit / -keit 结尾的词是?", options: ["阴性 die", "阳性 der", "中性 das"], answer: "阴性 die", explanation: "这些后缀都是阴性(A2 暗线)。" }
      ],

      quiz: [
        { type: "choice", prompt: "der Neffe 的 Akk(n-变化)?", options: ["den Neffen", "den Neffe", "dem Neffen"], answer: "den Neffen", explanation: "n-变化 Akk 加 -n → den Neffen。" },
        { type: "choice", prompt: "die Geschwister 是?", options: ["只用复数", "只用单数", "可数单数"], answer: "只用复数", explanation: "Geschwister(兄弟姐妹)通常只用复数。" },
        { type: "fill", prompt: "背名词要连 ___ 和复数一起记。", hint: "der/die/das", answer: ["冠词"], explanation: "名词连冠词 + 复数记,格和词尾才不出错。" },
        { type: "choice", prompt: "gehen 在完成时用哪个助动词?", options: ["sein", "haben"], answer: "sein", explanation: "移动动词 → sein(暗线,配模块六)。" },
        { type: "choice", prompt: "der Schrank 的复数?", options: ["Schränke", "Schranks", "Schranken"], answer: "Schränke", explanation: "der Schrank → die Schränke(变音)。" }
      ]
    }
  ],

  // ===== 词汇库(按 Level + Lektion 分组,来自 A1/A2 例句背词词库)=====
  vocabDecks: [
    {
      id: "a1-l10",
      level: "A1",
      lesson: "L10",
      theme: "Essen und trinken 吃喝",
      source: "A1 例句背词 · 盲区词",
      date: "2026-06-28",
      words: [
        { de: "Rezept", gender: "das", plural: "-e", zh: "菜谱 / 药方", example: "Ich brauche das **Rezept**.", exampleZh: "我需要这菜谱。", note: "das Rezept, -e", level: "A1", tags: ["essen"] },
        { de: "früher", gender: "副", plural: "", zh: "以前", example: "**Früher** war alles anders.", exampleZh: "以前一切都不一样。", note: "früher 以前", level: "A1", tags: ["essen"] },
        { de: "Butter", gender: "die", plural: "(不可数)", zh: "黄油", example: "Ich kaufe **Butter**.", exampleZh: "我买黄油。", note: "die Butter(不可数)", level: "A1", tags: ["essen"] },
        { de: "Luft", gender: "die", plural: "¨e (Lüfte)", zh: "空气", example: "Die **Luft** ist frisch.", exampleZh: "空气很新鲜。", note: "die Luft", level: "A1", tags: ["essen"] },
        { de: "diskutieren", gender: "动", plural: "", zh: "讨论", example: "Wir **diskutieren** viel.", exampleZh: "我们讨论很多。", note: "diskutieren über + Akk", level: "A1", tags: ["essen"] },
        { de: "schmecken", gender: "动", plural: "", zh: "(合口味)好吃", example: "Das **schmeckt** gut!", exampleZh: "这很好吃!", note: "schmecken + Dat(合谁口味)", level: "A1", tags: ["essen", "dativ-verb"] },
        { de: "Ei", gender: "das", plural: "-er", zh: "鸡蛋", example: "Ich esse ein **Ei**.", exampleZh: "我吃一个鸡蛋。", note: "das Ei, -er", level: "A1", tags: ["essen"] },
        { de: "besser", gender: "形", plural: "", zh: "更好", example: "Das ist **besser** als Tee.", exampleZh: "这比茶好。", note: "gut 的比较级(不规则)", level: "A1", tags: ["essen"] },
        { de: "Lebensmittel", gender: "das", plural: "-", zh: "食品", example: "Ich kaufe **Lebensmittel**.", exampleZh: "我买食品。", note: "das Lebensmittel, -", level: "A1", tags: ["essen"] },
        { de: "gar nicht", gender: "短语", plural: "", zh: "根本不", example: "Das mag ich **gar nicht**.", exampleZh: "我根本不喜欢。", note: "gar nicht 根本不", level: "A1", tags: ["essen"] },
        { de: "wünschen", gender: "动", plural: "", zh: "祝愿", example: "Ich **wünsche** dir alles Gute.", exampleZh: "祝你一切顺利。", note: "wünschen + Dat + Akk", level: "A1", tags: ["essen", "dativ-verb"] },
        { de: "Schweinefleisch", gender: "das", plural: "", zh: "猪肉", example: "Ich esse kein **Schweinefleisch**.", exampleZh: "我不吃猪肉。", note: "das Schweinefleisch(不可数)", level: "A1", tags: ["essen"] },
        { de: "süß", gender: "形", plural: "", zh: "甜", example: "Der Kuchen ist **süß**.", exampleZh: "这蛋糕很甜。", note: "süß ↔ sauer / salzig", level: "A1", tags: ["essen"] },
        { de: "verrühren", gender: "动", plural: "", zh: "搅拌", example: "**Verrühre** die Eier!", exampleZh: "把鸡蛋搅匀!", note: "verrühren 搅拌", level: "A1", tags: ["essen"] },
        { de: "Wagen", gender: "der", plural: "-", zh: "车", example: "Der **Wagen** ist neu.", exampleZh: "这车是新的。", note: "der Wagen, -", level: "A1", tags: ["essen"] },
        { de: "dürfen", gender: "情态", plural: "", zh: "可以 / 允许", example: "**Darf** ich rauchen?", exampleZh: "我可以抽烟吗?", note: "dürfen → ich darf", level: "A1", tags: ["essen", "modal"] },
        { de: "Hauptmahlzeit", gender: "die", plural: "-en", zh: "主餐", example: "Das Mittagessen ist die **Hauptmahlzeit**.", exampleZh: "午餐是主餐。", note: "die Hauptmahlzeit, -en", level: "A1", tags: ["essen"] },
        { de: "es geht um", gender: "短语", plural: "", zh: "关于", example: "Es **geht um** das Essen.", exampleZh: "这跟吃有关。", note: "es geht um + Akk", level: "A1", tags: ["essen"] },
        { de: "Schweizer", gender: "der", plural: "-", zh: "瑞士人", example: "Der **Schweizer** kommt aus Bern.", exampleZh: "这瑞士人来自伯尔尼。", note: "der Schweizer, -", level: "A1", tags: ["essen"] },
        { de: "Gericht", gender: "das", plural: "-e", zh: "菜肴 / 法院", example: "Das **Gericht** ist lecker.", exampleZh: "这道菜很好吃。", note: "das Gericht, -e", level: "A1", tags: ["essen"] },
        { de: "empfehlen", gender: "动", plural: "", zh: "推荐", example: "Ich **empfehle** die Suppe.", exampleZh: "我推荐这汤。", note: "empfehlen → er empfiehlt (+Dat+Akk)", level: "A1", tags: ["essen", "dativ-verb"] },
        { de: "Rennen", gender: "das", plural: "-", zh: "比赛 / 赛跑", example: "Das **Rennen** beginnt.", exampleZh: "比赛开始了。", note: "das Rennen, -", level: "A1", tags: ["essen"] },
        { de: "aufschreiben", gender: "可分", plural: "", zh: "写下来", example: "Ich **schreibe** es **auf**.", exampleZh: "我把它写下来。", note: "aufschreiben(可分动词)", level: "A1", tags: ["essen", "trennbar"] },
        { de: "Ergebnis", gender: "das", plural: "-se", zh: "结果", example: "Was ist das **Ergebnis**?", exampleZh: "结果是什么?", note: "das Ergebnis, -se", level: "A1", tags: ["essen"] },
        { de: "Bestellung", gender: "die", plural: "-en", zh: "点的菜 / 订单", example: "Die **Bestellung** kommt gleich.", exampleZh: "点的菜马上来。", note: "die Bestellung, -en", level: "A1", tags: ["essen"] },
        { de: "überraschen", gender: "动", plural: "", zh: "使惊喜", example: "Ich will dich **überraschen**.", exampleZh: "我想给你个惊喜。", note: "überraschen(不可分)", level: "A1", tags: ["essen"] },
        { de: "Gewicht", gender: "das", plural: "-e", zh: "重量", example: "Das **Gewicht** ist hoch.", exampleZh: "重量很大。", note: "das Gewicht, -e", level: "A1", tags: ["essen"] },
        { de: "landen", gender: "动", plural: "", zh: "着陆", example: "Das Flugzeug **landet**.", exampleZh: "飞机着陆。", note: "landen → ist gelandet(用 sein)", level: "A1", tags: ["essen"] },
        { de: "Zwiebel", gender: "die", plural: "-n", zh: "洋葱", example: "Ich schneide die **Zwiebel**.", exampleZh: "我切洋葱。", note: "die Zwiebel, -n", level: "A1", tags: ["essen"] },
        { de: "folgen", gender: "动", plural: "", zh: "跟随", example: "**Folgen** Sie mir!", exampleZh: "请跟我来!", note: "folgen + Dat(用 sein)", level: "A1", tags: ["essen", "dativ-verb"] },
        { de: "beraten", gender: "动", plural: "", zh: "咨询 / 出主意", example: "Ich **berate** dich gern.", exampleZh: "我乐意给你出主意。", note: "beraten 咨询 / 出主意", level: "A1", tags: ["essen"] }
      ]
    },

    {
      id: "a1-l1", level: "A1", lesson: "L1", theme: "Start auf Deutsch 开始学德语",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "machen", gender: "动", plural: "", zh: "做", example: "Was **machst** du heute?", exampleZh: "你今天做什么?", note: "machen(万能动词)", level: "A1", tags: ["start"] },
        { de: "verstehen", gender: "动", plural: "", zh: "听懂 / 理解", example: "Ich **verstehe** dich nicht.", exampleZh: "我听不懂你。", note: "verstehen + Akk", level: "A1", tags: ["start"] },
        { de: "buchstabieren", gender: "动", plural: "", zh: "拼读", example: "Können Sie das bitte **buchstabieren**?", exampleZh: "您能拼读一下吗?", note: "拼字母用", level: "A1", tags: ["start"] },
        { de: "Entschuldigung", gender: "die", plural: "-en", zh: "对不起 / 借光", example: "**Entschuldigung**, wo ist der Bahnhof?", exampleZh: "不好意思,火车站在哪?", note: "die Entschuldigung;搭话开头", level: "A1", tags: ["start"] },
        { de: "Getränk", gender: "das", plural: "-e", zh: "饮料", example: "Ich möchte ein kaltes **Getränk**.", exampleZh: "我想要一杯冷饮。", note: "das Getränk, -e", level: "A1", tags: ["start"] },
        { de: "lesen", gender: "动", plural: "", zh: "读", example: "Ich **lese** gern Bücher.", exampleZh: "我喜欢读书。", note: "lesen → er liest(变音)", level: "A1", tags: ["start"] },
        { de: "wenig", gender: "形", plural: "", zh: "少", example: "Ich trinke Kaffee mit **wenig** Zucker.", exampleZh: "我喝咖啡放很少的糖。", note: "wenig ↔ viel", level: "A1", tags: ["start"] },
        { de: "Fehler", gender: "der", plural: "-", zh: "错误", example: "Das ist mein **Fehler**.", exampleZh: "这是我的错。", note: "der Fehler, -(单复同形)", level: "A1", tags: ["start"] },
        { de: "wichtig", gender: "形", plural: "", zh: "重要", example: "Deutsch lernen ist **wichtig**.", exampleZh: "学德语很重要。", note: "wichtig für + Akk", level: "A1", tags: ["start"] },
        { de: "mögen", gender: "情态", plural: "", zh: "喜欢", example: "Ich **mag** keinen Kaffee.", exampleZh: "我不喜欢咖啡。", note: "mögen → ich mag", level: "A1", tags: ["start"] },
        { de: "finden", gender: "动", plural: "", zh: "认为 / 找到", example: "Ich **finde** das gut.", exampleZh: "我觉得这不错。", note: "finden = 认为(不只是找到)", level: "A1", tags: ["start"] }
      ]
    },

    {
      id: "a1-l2", level: "A1", lesson: "L2", theme: "Sprache im Kurs 课堂语言",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Fragen stellen", gender: "短语", plural: "", zh: "提问", example: "Im Kurs **stellen** wir viele **Fragen**.", exampleZh: "课上我们提很多问题。", note: "Fragen stellen(固定搭配)", level: "A1", tags: ["kurs"] },
        { de: "Wiederholung", gender: "die", plural: "-en", zh: "复习", example: "Heute machen wir eine **Wiederholung**.", exampleZh: "今天我们复习。", note: "die Wiederholung, -en", level: "A1", tags: ["kurs"] },
        { de: "mehr", gender: "副", plural: "", zh: "更多", example: "Ich brauche **mehr** Zeit.", exampleZh: "我需要更多时间。", note: "mehr = viel 的比较级", level: "A1", tags: ["kurs"] },
        { de: "Brille", gender: "die", plural: "-n", zh: "眼镜", example: "Meine **Brille** ist neu.", exampleZh: "我的眼镜是新的。", note: "die Brille, -n(单数表一副)", level: "A1", tags: ["kurs"] },
        { de: "ziehen", gender: "动", plural: "", zh: "抽 / 拉", example: "Kannst du eine Karte **ziehen**?", exampleZh: "你能抽一张牌吗?", note: "ziehen 抽 / 拉", level: "A1", tags: ["kurs"] },
        { de: "Tafel", gender: "die", plural: "-n", zh: "黑板", example: "An der **Tafel** steht ein Wort.", exampleZh: "黑板上写着一个词。", note: "die Tafel, -n", level: "A1", tags: ["kurs"] },
        { de: "allein", gender: "副", plural: "", zh: "独自", example: "Ich wohne **allein**.", exampleZh: "我独自住。", note: "allein", level: "A1", tags: ["kurs"] },
        { de: "gehen", gender: "动", plural: "", zh: "走 / 去", example: "Ich **gehe** jetzt nach Hause.", exampleZh: "我现在回家。", note: "gehen → ist gegangen", level: "A1", tags: ["kurs"] },
        { de: "sagen", gender: "动", plural: "", zh: "说", example: "Was **sagst** du?", exampleZh: "你说什么?", note: "sagen", level: "A1", tags: ["kurs"] },
        { de: "Spaß", gender: "der", plural: "¨e (Späße)", zh: "乐趣", example: "Lernen macht **Spaß**.", exampleZh: "学习很有乐趣。", note: "der Spaß;Spaß machen", level: "A1", tags: ["kurs"] },
        { de: "Becher", gender: "der", plural: "-", zh: "杯子", example: "Der **Becher** ist voll.", exampleZh: "杯子满了。", note: "der Becher, -(塑料 / 纸杯)", level: "A1", tags: ["kurs"] },
        { de: "verheiratet", gender: "形", plural: "", zh: "已婚的", example: "Sie ist **verheiratet**.", exampleZh: "她结婚了。", note: "verheiratet sein", level: "A1", tags: ["kurs"] },
        { de: "erkennen", gender: "动", plural: "", zh: "认出", example: "Ich **erkenne** dich!", exampleZh: "我认出你了!", note: "erkennen 辨认出", level: "A1", tags: ["kurs"] },
        { de: "Heimat", gender: "die", plural: "-en", zh: "家乡", example: "Wo ist deine **Heimat**?", exampleZh: "你的家乡在哪?", note: "die Heimat, -en", level: "A1", tags: ["kurs"] },
        { de: "Seite", gender: "die", plural: "-n", zh: "页 / 边", example: "Lies bitte **Seite** zehn.", exampleZh: "请读第十页。", note: "die Seite, -n", level: "A1", tags: ["kurs"] },
        { de: "Geschichte", gender: "die", plural: "-n", zh: "故事 / 历史", example: "Das ist eine schöne **Geschichte**.", exampleZh: "这是个美丽的故事。", note: "die Geschichte, -n", level: "A1", tags: ["kurs"] },
        { de: "immer", gender: "副", plural: "", zh: "总是", example: "Ich denke **immer** an dich.", exampleZh: "我总是想你。", note: "immer ↔ nie", level: "A1", tags: ["kurs"] },
        { de: "es gibt", gender: "短语", plural: "", zh: "有", example: "**Es gibt** hier ein Café.", exampleZh: "这里有一家咖啡馆。", note: "es gibt + Akk(固定)", level: "A1", tags: ["kurs"] },
        { de: "beide", gender: "代词", plural: "", zh: "两者都", example: "**Beide** Kinder lernen Deutsch.", exampleZh: "两个孩子都学德语。", note: "beide 两者都", level: "A1", tags: ["kurs"] }
      ]
    },

    {
      id: "a1-l3", level: "A1", lesson: "L3", theme: "Städte-Länder-Sprachen 城市·国家·语言",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Lage", gender: "die", plural: "-n", zh: "位置", example: "Wie ist die **Lage** der Wohnung?", exampleZh: "这公寓位置怎么样?", note: "die Lage, -n", level: "A1", tags: ["laender"] },
        { de: "worum", gender: "副", plural: "", zh: "关于什么", example: "**Worum** geht es?", exampleZh: "这是关于什么的?", note: "worum 问『关于什么』", level: "A1", tags: ["laender"] },
        { de: "Kultur", gender: "die", plural: "-en", zh: "文化", example: "Wien hat eine reiche **Kultur**.", exampleZh: "维也纳有丰富的文化。", note: "die Kultur, -en", level: "A1", tags: ["laender"] },
        { de: "prüfen", gender: "动", plural: "", zh: "检查 / 考查", example: "Der Lehrer **prüft** die Hausaufgabe.", exampleZh: "老师检查作业。", note: "prüfen 检查 / 考查", level: "A1", tags: ["laender"] },
        { de: "Paar", gender: "das", plural: "-e", zh: "一对", example: "Sie sind ein schönes **Paar**.", exampleZh: "他们是一对佳偶。", note: "das Paar, -e", level: "A1", tags: ["laender"] },
        { de: "Dorf", gender: "das", plural: "¨er (Dörfer)", zh: "村庄", example: "Mein **Dorf** ist sehr klein.", exampleZh: "我的村子很小。", note: "das Dorf, ¨er", level: "A1", tags: ["laender"] },
        { de: "schief", gender: "形", plural: "", zh: "斜的", example: "Der Turm ist **schief**.", exampleZh: "这座塔是斜的。", note: "schief 斜的", level: "A1", tags: ["laender"] },
        { de: "kurz", gender: "形", plural: "", zh: "短", example: "Der Film ist **kurz**.", exampleZh: "这部电影很短。", note: "kurz ↔ lang", level: "A1", tags: ["laender"] },
        { de: "Turm", gender: "der", plural: "¨e (Türme)", zh: "塔", example: "Der **Turm** ist sehr hoch.", exampleZh: "这座塔很高。", note: "der Turm, ¨e", level: "A1", tags: ["laender"] },
        { de: "Studium", gender: "das", plural: "(Studien)", zh: "大学学业", example: "Mein **Studium** dauert vier Jahre.", exampleZh: "我的大学学业要四年。", note: "das Studium(学业)", level: "A1", tags: ["laender"] },
        { de: "Tor", gender: "das", plural: "-e", zh: "大门", example: "Das **Tor** ist groß.", exampleZh: "这扇大门很大。", note: "das Tor, -e", level: "A1", tags: ["laender"] },
        { de: "Grafik", gender: "die", plural: "-en", zh: "图表", example: "Hier ist eine **Grafik**.", exampleZh: "这里有一张图表。", note: "die Grafik, -en", level: "A1", tags: ["laender"] },
        { de: "Prozent", gender: "das", plural: "-e", zh: "百分比", example: "Zehn **Prozent** sind genug.", exampleZh: "百分之十就够了。", note: "das Prozent, -e", level: "A1", tags: ["laender"] },
        { de: "wechseln", gender: "动", plural: "", zh: "更换 / 交换", example: "Ich **wechsle** das Zimmer.", exampleZh: "我换房间。", note: "wechseln 更换", level: "A1", tags: ["laender"] },
        { de: "zeigen", gender: "动", plural: "", zh: "出示 / 指给", example: "**Zeig** mir das Foto!", exampleZh: "给我看看照片!", note: "zeigen + Dat + Akk", level: "A1", tags: ["laender"] },
        { de: "denn", gender: "连词", plural: "", zh: "因为", example: "Ich bleibe zu Hause, **denn** ich bin krank.", exampleZh: "我呆在家,因为我病了。", note: "denn 因为(不倒装!)", level: "A1", tags: ["laender"] },
        { de: "wissen", gender: "动", plural: "", zh: "知道", example: "**Weißt** du das?", exampleZh: "你知道这个吗?", note: "wissen → ich weiß", level: "A1", tags: ["laender"] },
        { de: "gestern", gender: "副", plural: "", zh: "昨天", example: "**Gestern** war ich im Kino.", exampleZh: "昨天我去了电影院。", note: "gestern ↔ morgen", level: "A1", tags: ["laender"] },
        { de: "doch", gender: "副", plural: "", zh: "偏偏 / 就(语气词)", example: "Sag es **doch**!", exampleZh: "你就说吧!", note: "doch 语气词", level: "A1", tags: ["laender"] },
        { de: "ein paar", gender: "短语", plural: "", zh: "几个", example: "**Ein paar** Freunde kommen.", exampleZh: "几个朋友要来。", note: "ein paar = 几个", level: "A1", tags: ["laender"] },
        { de: "mal", gender: "副", plural: "", zh: "一次 / 语气词", example: "Komm noch ein **mal**!", exampleZh: "再来一次!", note: "mal 一次 / 语气词", level: "A1", tags: ["laender"] },
        { de: "Unterschied", gender: "der", plural: "-e", zh: "区别", example: "Was ist der **Unterschied**?", exampleZh: "区别是什么?", note: "der Unterschied, -e", level: "A1", tags: ["laender"] },
        { de: "liegen", gender: "动", plural: "", zh: "位于 / 躺", example: "Wien **liegt** in Österreich.", exampleZh: "维也纳位于奥地利。", note: "liegen 位于", level: "A1", tags: ["laender"] },
        { de: "wieder", gender: "副", plural: "", zh: "又 / 再", example: "Ich komme **wieder**.", exampleZh: "我还会再来。", note: "wieder 又 / 再", level: "A1", tags: ["laender"] },
        { de: "Norden", gender: "der", plural: "", zh: "北方", example: "Im **Norden** ist es kalt.", exampleZh: "北方很冷。", note: "der Norden ↔ der Süden", level: "A1", tags: ["laender"] },
        { de: "Süden", gender: "der", plural: "", zh: "南方", example: "Im **Süden** ist es warm.", exampleZh: "南方很暖和。", note: "der Süden", level: "A1", tags: ["laender"] },
        { de: "östlich", gender: "形", plural: "", zh: "东部的", example: "Wien liegt im **östlichen** Teil.", exampleZh: "维也纳在东部。", note: "östlich 东部的", level: "A1", tags: ["laender"] },
        { de: "Nähe", gender: "die", plural: "", zh: "附近", example: "In der **Nähe** ist ein Park.", exampleZh: "附近有个公园。", note: "in der Nähe = 附近", level: "A1", tags: ["laender"] },
        { de: "Welt", gender: "die", plural: "-en", zh: "世界", example: "Die **Welt** ist groß.", exampleZh: "世界很大。", note: "die Welt", level: "A1", tags: ["laender"] },
        { de: "Nachbar", gender: "der", plural: "-n", zh: "邻居", example: "Mein **Nachbar** ist nett.", exampleZh: "我的邻居很友好。", note: "der Nachbar, -n(n-变化!)", level: "A1", tags: ["laender", "n-deklination"] }
      ]
    },

    {
      id: "a1-l4", level: "A1", lesson: "L4", theme: "Menschen und Häuser 人与住房",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "wem", gender: "代词", plural: "", zh: "谁(Dativ)", example: "**Wem** gehört das Buch?", exampleZh: "这本书是谁的?", note: "wem = wer 的 Dativ", level: "A1", tags: ["haus"] },
        { de: "auf dem Land", gender: "短语", plural: "", zh: "在乡下", example: "Ich wohne **auf dem Land**.", exampleZh: "我住在乡下。", note: "auf dem Land = 在乡下", level: "A1", tags: ["haus"] },
        { de: "teuer", gender: "形", plural: "", zh: "贵", example: "Die Wohnung ist sehr **teuer**.", exampleZh: "这公寓很贵。", note: "teuer ↔ billig", level: "A1", tags: ["haus"] },
        { de: "Traum", gender: "der", plural: "¨e (Träume)", zh: "梦想", example: "Das ist mein **Traum**.", exampleZh: "这是我的梦想。", note: "der Traum, ¨e", level: "A1", tags: ["haus"] },
        { de: "ziemlich", gender: "副", plural: "", zh: "相当地", example: "Die Wohnung ist **ziemlich** groß.", exampleZh: "这公寓相当大。", note: "ziemlich 相当地", level: "A1", tags: ["haus"] },
        { de: "daneben", gender: "副", plural: "", zh: "在旁边", example: "Das Sofa steht **daneben**.", exampleZh: "沙发就在旁边。", note: "daneben 在旁边", level: "A1", tags: ["haus"] },
        { de: "baden", gender: "动", plural: "", zh: "洗澡 / 泡澡", example: "Ich **bade** gern.", exampleZh: "我喜欢泡澡。", note: "baden 洗澡", level: "A1", tags: ["haus"] },
        { de: "dunkel", gender: "形", plural: "", zh: "暗", example: "Das Zimmer ist **dunkel**.", exampleZh: "这房间很暗。", note: "dunkel ↔ hell", level: "A1", tags: ["haus"] },
        { de: "bestimmen", gender: "动", plural: "", zh: "决定", example: "Wir **bestimmen** das Datum.", exampleZh: "我们定下日期。", note: "bestimmen 决定", level: "A1", tags: ["haus"] },
        { de: "zum Beispiel", gender: "短语", plural: "", zh: "比如", example: "**Zum Beispiel** Wien.", exampleZh: "比如维也纳。", note: "z.B. = zum Beispiel", level: "A1", tags: ["haus"] },
        { de: "sonst", gender: "副", plural: "", zh: "此外 / 否则", example: "Was machen wir **sonst**?", exampleZh: "我们还要做什么?", note: "sonst 此外 / 否则", level: "A1", tags: ["haus"] },
        { de: "wirklich", gender: "副", plural: "", zh: "真的", example: "Ich bin **wirklich** müde.", exampleZh: "我真的很累。", note: "wirklich 真正地", level: "A1", tags: ["haus"] },
        { de: "Umzug", gender: "der", plural: "¨e (Umzüge)", zh: "搬家", example: "Der **Umzug** ist morgen.", exampleZh: "明天搬家。", note: "der Umzug, ¨e", level: "A1", tags: ["haus"] },
        { de: "Glück", gender: "das", plural: "", zh: "幸运 / 幸福", example: "Ich habe viel **Glück**.", exampleZh: "我很幸运。", note: "das Glück(不可数)", level: "A1", tags: ["haus"] },
        { de: "kosten", gender: "动", plural: "", zh: "价值 / 花费", example: "Was **kostet** das?", exampleZh: "这多少钱?", note: "kosten + Akk(价格)", level: "A1", tags: ["haus"] },
        { de: "funktionieren", gender: "动", plural: "", zh: "运转", example: "Der Fernseher **funktioniert** nicht.", exampleZh: "电视坏了。", note: "funktionieren 运转", level: "A1", tags: ["haus"] },
        { de: "billig", gender: "形", plural: "", zh: "便宜", example: "Das Buch ist **billig**.", exampleZh: "这本书很便宜。", note: "billig ↔ teuer", level: "A1", tags: ["haus"] },
        { de: "Raum", gender: "der", plural: "¨e (Räume)", zh: "空间 / 屋", example: "Der **Raum** ist groß.", exampleZh: "这间屋很大。", note: "der Raum, ¨e", level: "A1", tags: ["haus"] },
        { de: "stehen", gender: "动", plural: "", zh: "站立 / 立着", example: "Das Regal **steht** links.", exampleZh: "书架立在左边。", note: "stehen 站立(静止)", level: "A1", tags: ["haus"] },
        { de: "Hilfe", gender: "die", plural: "-n", zh: "帮助", example: "Danke für deine **Hilfe**!", exampleZh: "谢谢你的帮助!", note: "die Hilfe, -n", level: "A1", tags: ["haus"] }
      ]
    },

    {
      id: "a1-l5", level: "A1", lesson: "L5", theme: "Termine 约会·时间",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Verspätung", gender: "die", plural: "-en", zh: "晚点 / 延误", example: "Der Zug hat **Verspätung**.", exampleZh: "火车晚点了。", note: "die Verspätung, -en", level: "A1", tags: ["termine"] },
        { de: "anfangen", gender: "可分", plural: "", zh: "开始", example: "Der Film **fängt** um acht **an**.", exampleZh: "电影八点开始。", note: "anfangen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "Fahrt", gender: "die", plural: "-en", zh: "车程", example: "Die **Fahrt** dauert eine Stunde.", exampleZh: "车程持续一小时。", note: "die Fahrt, -en", level: "A1", tags: ["termine"] },
        { de: "Wecker", gender: "der", plural: "-", zh: "闹钟", example: "Der **Wecker** klingelt um sechs.", exampleZh: "闹钟六点响。", note: "der Wecker, -", level: "A1", tags: ["termine"] },
        { de: "Zahnarzt", gender: "der", plural: "¨e (Zahnärzte)", zh: "牙医", example: "Ich gehe zum **Zahnarzt**.", exampleZh: "我去看牙医。", note: "der Zahnarzt, ¨e", level: "A1", tags: ["termine"] },
        { de: "absagen", gender: "可分", plural: "", zh: "取消", example: "Ich muss den Termin **absagen**.", exampleZh: "我得取消预约。", note: "absagen ↔ zusagen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "mitkommen", gender: "可分", plural: "", zh: "一起来", example: "**Kommst** du **mit**?", exampleZh: "你一起来吗?", note: "mitkommen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "aufstehen", gender: "可分", plural: "", zh: "起床", example: "Ich **stehe** um sieben **auf**.", exampleZh: "我七点起床。", note: "aufstehen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "ablehnen", gender: "可分", plural: "", zh: "拒绝", example: "Ich **lehne** die Einladung **ab**.", exampleZh: "我拒绝邀请。", note: "ablehnen ↔ zustimmen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "zustimmen", gender: "可分", plural: "", zh: "赞同", example: "Ich **stimme** dir **zu**.", exampleZh: "我赞同你。", note: "zustimmen + Dat(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "pünktlich", gender: "形", plural: "", zh: "准时的", example: "Sei bitte **pünktlich**!", exampleZh: "请准时!", note: "pünktlich 准时的", level: "A1", tags: ["termine"] },
        { de: "vorschlagen", gender: "可分", plural: "", zh: "提议", example: "Ich **schlage** einen Termin **vor**.", exampleZh: "我提议一个时间。", note: "vorschlagen(可分)", level: "A1", tags: ["termine", "trennbar"] },
        { de: "Friseur", gender: "der", plural: "-e", zh: "理发师", example: "Ich gehe zum **Friseur**.", exampleZh: "我去理发。", note: "der Friseur, -e", level: "A1", tags: ["termine"] },
        { de: "sich treffen", gender: "反身", plural: "", zh: "见面", example: "Wir **treffen** uns um drei.", exampleZh: "我们三点见面。", note: "sich treffen 见面", level: "A1", tags: ["termine", "reflexiv"] },
        { de: "Geschäft", gender: "das", plural: "-e", zh: "商店 / 生意", example: "Das **Geschäft** ist offen.", exampleZh: "这家店开着。", note: "das Geschäft, -e", level: "A1", tags: ["termine"] },
        { de: "Tankstelle", gender: "die", plural: "-n", zh: "加油站", example: "An der **Tankstelle** kaufe ich Wasser.", exampleZh: "我在加油站买水。", note: "die Tankstelle, -n", level: "A1", tags: ["termine"] },
        { de: "schließen", gender: "动", plural: "", zh: "关闭", example: "Das Geschäft **schließt** um acht.", exampleZh: "商店八点关门。", note: "schließen ↔ öffnen", level: "A1", tags: ["termine"] },
        { de: "formell", gender: "形", plural: "", zh: "正式的", example: "Das ist eine **formelle** E-Mail.", exampleZh: "这是封正式邮件。", note: "formell ↔ informell", level: "A1", tags: ["termine"] },
        { de: "zu zweit", gender: "短语", plural: "", zh: "两人一起", example: "Wir arbeiten **zu zweit**.", exampleZh: "我们两人一组。", note: "zu zweit = 两人一起", level: "A1", tags: ["termine"] },
        { de: "Wochentag", gender: "der", plural: "-e", zh: "工作日", example: "Montag ist ein **Wochentag**.", exampleZh: "周一是工作日。", note: "der Wochentag, -e", level: "A1", tags: ["termine"] },
        { de: "Verabredung", gender: "die", plural: "-en", zh: "约会", example: "Wir haben eine **Verabredung**.", exampleZh: "我们有个约会。", note: "die Verabredung, -en", level: "A1", tags: ["termine"] },
        { de: "Stadion", gender: "das", plural: "(Stadien)", zh: "体育场", example: "Im **Stadion** ist ein Spiel.", exampleZh: "体育场里有比赛。", note: "das Stadion, Stadien", level: "A1", tags: ["termine"] },
        { de: "Öffnungszeit", gender: "die", plural: "-en", zh: "营业时间", example: "Wann ist die **Öffnungszeit**?", exampleZh: "营业时间是几点?", note: "die Öffnungszeit, -en", level: "A1", tags: ["termine"] },
        { de: "Praxis", gender: "die", plural: "(Praxen)", zh: "诊所", example: "Die **Praxis** ist heute zu.", exampleZh: "诊所今天关门。", note: "die Praxis, Praxen", level: "A1", tags: ["termine"] },
        { de: "Stau", gender: "der", plural: "-s", zh: "堵车", example: "Es gibt einen **Stau**.", exampleZh: "堵车了。", note: "der Stau, -s", level: "A1", tags: ["termine"] },
        { de: "Tagesablauf", gender: "der", plural: "¨e", zh: "日程 / 作息", example: "Mein **Tagesablauf** ist voll.", exampleZh: "我的日程很满。", note: "der Tagesablauf", level: "A1", tags: ["termine"] },
        { de: "Anruf", gender: "der", plural: "-e", zh: "来电", example: "Ich bekomme einen **Anruf**.", exampleZh: "我接到一个电话。", note: "der Anruf, -e", level: "A1", tags: ["termine"] },
        { de: "Autobahn", gender: "die", plural: "-en", zh: "高速公路", example: "Auf der **Autobahn** fährt man schnell.", exampleZh: "高速公路上开得快。", note: "die Autobahn, -en", level: "A1", tags: ["termine"] }
      ]
    },

    {
      id: "a1-l6", level: "A1", lesson: "L6", theme: "Orientierung 方位·城市",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Straßenbahn", gender: "die", plural: "-en", zh: "有轨电车", example: "Die **Straßenbahn** kommt gleich.", exampleZh: "有轨电车马上来。", note: "die Straßenbahn(维也纳常用!)", level: "A1", tags: ["orientierung"] },
        { de: "Fähre", gender: "die", plural: "-n", zh: "渡轮", example: "Die **Fähre** fährt über den Fluss.", exampleZh: "渡轮渡过河。", note: "die Fähre, -n", level: "A1", tags: ["orientierung"] },
        { de: "Fuß", gender: "der", plural: "¨e (Füße)", zh: "脚", example: "Mein **Fuß** tut weh.", exampleZh: "我的脚疼。", note: "der Fuß, ¨e", level: "A1", tags: ["orientierung"] },
        { de: "Hauptbahnhof", gender: "der", plural: "¨e", zh: "中央火车站", example: "Der **Hauptbahnhof** ist groß.", exampleZh: "中央火车站很大。", note: "der Hauptbahnhof(=Hbf)", level: "A1", tags: ["orientierung"] },
        { de: "Etage", gender: "die", plural: "-n", zh: "楼层", example: "Ich wohne in der dritten **Etage**.", exampleZh: "我住在四楼。", note: "die Etage, -n(= Stock)", level: "A1", tags: ["orientierung"] },
        { de: "Stadtplan", gender: "der", plural: "¨e (Stadtpläne)", zh: "城市地图", example: "Hier ist der **Stadtplan**.", exampleZh: "这是城市地图。", note: "der Stadtplan, -pläne", level: "A1", tags: ["orientierung"] },
        { de: "Beratung", gender: "die", plural: "-en", zh: "咨询", example: "Ich brauche eine **Beratung**.", exampleZh: "我需要咨询。", note: "die Beratung, -en", level: "A1", tags: ["orientierung"] },
        { de: "Besprechung", gender: "die", plural: "-en", zh: "会议 / 商讨", example: "Wir haben eine **Besprechung**.", exampleZh: "我们有个会议。", note: "die Besprechung, -en", level: "A1", tags: ["orientierung"] },
        { de: "Lesesaal", gender: "der", plural: "(Lesesäle)", zh: "阅览室", example: "Im **Lesesaal** ist es ruhig.", exampleZh: "阅览室里很安静。", note: "der Lesesaal, -säle", level: "A1", tags: ["orientierung"] },
        { de: "Dienstreise", gender: "die", plural: "-n", zh: "出差", example: "Ich mache eine **Dienstreise**.", exampleZh: "我出差。", note: "die Dienstreise, -n", level: "A1", tags: ["orientierung"] },
        { de: "Geburtstag", gender: "der", plural: "-e", zh: "生日", example: "Heute ist mein **Geburtstag**.", exampleZh: "今天是我生日。", note: "der Geburtstag, -e", level: "A1", tags: ["orientierung"] },
        { de: "Erdgeschoss", gender: "das", plural: "-e", zh: "一楼 / 底楼", example: "Im **Erdgeschoss** ist ein Café.", exampleZh: "一楼有家咖啡馆。", note: "das Erdgeschoss(= 底楼)", level: "A1", tags: ["orientierung"] },
        { de: "Wirtschaft", gender: "die", plural: "", zh: "经济", example: "Die **Wirtschaft** ist stark.", exampleZh: "经济很强。", note: "die Wirtschaft", level: "A1", tags: ["orientierung"] },
        { de: "Garderobe", gender: "die", plural: "-n", zh: "衣帽间", example: "An der **Garderobe** lasse ich die Jacke.", exampleZh: "我把外套放在衣帽间。", note: "die Garderobe, -n", level: "A1", tags: ["orientierung"] },
        { de: "Messe", gender: "die", plural: "-n", zh: "展会 / 弥撒", example: "Die **Messe** findet in Wien statt.", exampleZh: "展会在维也纳举行。", note: "die Messe, -n", level: "A1", tags: ["orientierung"] },
        { de: "finden", gender: "动", plural: "", zh: "找到", example: "Ich **finde** den Weg nicht.", exampleZh: "我找不到路。", note: "finden 找到", level: "A1", tags: ["orientierung"] },
        { de: "berühmt", gender: "形", plural: "", zh: "著名的", example: "Wien ist eine **berühmte** Stadt.", exampleZh: "维也纳是座名城。", note: "berühmt 著名的", level: "A1", tags: ["orientierung"] },
        { de: "Verwaltung", gender: "die", plural: "-en", zh: "行政部门", example: "Ich arbeite in der **Verwaltung**.", exampleZh: "我在行政部门工作。", note: "die Verwaltung, -en", level: "A1", tags: ["orientierung"] },
        { de: "Komponist", gender: "der", plural: "-en", zh: "作曲家", example: "Mozart war ein **Komponist**.", exampleZh: "莫札特是作曲家。", note: "der Komponist, -en(n-变化)", level: "A1", tags: ["orientierung", "n-deklination"] },
        { de: "Werbung", gender: "die", plural: "", zh: "广告", example: "Die **Werbung** ist laut.", exampleZh: "这广告很吵。", note: "die Werbung", level: "A1", tags: ["orientierung"] },
        { de: "Leiter", gender: "der", plural: "-", zh: "领导", example: "Der **Leiter** ist nett.", exampleZh: "领导很友好。", note: "der Leiter, -", level: "A1", tags: ["orientierung"] },
        { de: "Chor", gender: "der", plural: "¨e (Chöre)", zh: "合唱团", example: "Ich singe im **Chor**.", exampleZh: "我在合唱团唱歌。", note: "der Chor, ¨e", level: "A1", tags: ["orientierung"] },
        { de: "Sekretariat", gender: "das", plural: "-e", zh: "秘书处", example: "Im **Sekretariat** bekomme ich Hilfe.", exampleZh: "秘书处能帮我。", note: "das Sekretariat, -e", level: "A1", tags: ["orientierung"] },
        { de: "existieren", gender: "动", plural: "", zh: "存在", example: "Wien **existiert** seit langem.", exampleZh: "维也纳存在很久了。", note: "existieren 存在", level: "A1", tags: ["orientierung"] },
        { de: "Tastatur", gender: "die", plural: "-en", zh: "键盘", example: "Die **Tastatur** ist neu.", exampleZh: "键盘是新的。", note: "die Tastatur, -en", level: "A1", tags: ["orientierung"] },
        { de: "produzieren", gender: "动", plural: "", zh: "生产", example: "Die Firma **produziert** Autos.", exampleZh: "这家公司生产汽车。", note: "produzieren 生产", level: "A1", tags: ["orientierung"] },
        { de: "Drucker", gender: "der", plural: "-", zh: "打印机", example: "Der **Drucker** ist kaputt.", exampleZh: "打印机坏了。", note: "der Drucker, -", level: "A1", tags: ["orientierung"] },
        { de: "attraktiv", gender: "形", plural: "", zh: "有吸引力的", example: "Wien ist sehr **attraktiv**.", exampleZh: "维也纳很有吸引力。", note: "attraktiv 吸引人的", level: "A1", tags: ["orientierung"] }
      ]
    },

    {
      id: "a1-l7", level: "A1", lesson: "L7", theme: "Berufe 职业",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Statistik", gender: "die", plural: "-en", zh: "统计", example: "Hier ist eine **Statistik**.", exampleZh: "这里有一份统计。", note: "die Statistik, -en", level: "A1", tags: ["beruf"] },
        { de: "trainieren", gender: "动", plural: "", zh: "训练", example: "Ich **trainiere** jeden Tag.", exampleZh: "我每天训练。", note: "trainieren", level: "A1", tags: ["beruf"] },
        { de: "Friseursalon", gender: "der", plural: "-s", zh: "理发店", example: "Im **Friseursalon** schneidet man Haare.", exampleZh: "理发店里剪头发。", note: "der Friseursalon, -s", level: "A1", tags: ["beruf"] },
        { de: "leiten", gender: "动", plural: "", zh: "领导", example: "Sie **leitet** die Firma.", exampleZh: "她领导这家公司。", note: "leiten 领导", level: "A1", tags: ["beruf"] },
        { de: "planen", gender: "动", plural: "", zh: "计划", example: "Wir **planen** eine Reise.", exampleZh: "我们计划一次旅行。", note: "planen 计划", level: "A1", tags: ["beruf"] },
        { de: "reservieren", gender: "动", plural: "", zh: "预订", example: "Ich **reserviere** einen Tisch.", exampleZh: "我订一张桌子。", note: "reservieren 预订", level: "A1", tags: ["beruf"] },
        { de: "beruflich", gender: "形", plural: "", zh: "职业上的", example: "**Beruflich** geht es mir gut.", exampleZh: "事业上我很顺。", note: "beruflich 职业上的", level: "A1", tags: ["beruf"] },
        { de: "freundlich", gender: "形", plural: "", zh: "友好的", example: "Der Ingenieur ist sehr **freundlich**.", exampleZh: "这工程师很友好。", note: "freundlich ↔ unfreundlich", level: "A1", tags: ["beruf"] },
        { de: "leicht", gender: "形", plural: "", zh: "容易 / 轻", example: "Die Aufgabe ist **leicht**.", exampleZh: "这任务很容易。", note: "leicht ↔ schwer", level: "A1", tags: ["beruf"] },
        { de: "flexibel", gender: "形", plural: "", zh: "灵活的", example: "Meine Arbeit ist **flexibel**.", exampleZh: "我的工作很灵活。", note: "flexibel 灵活的", level: "A1", tags: ["beruf"] },
        { de: "Mitglied", gender: "das", plural: "-er", zh: "成员", example: "Ich bin **Mitglied** im Klub.", exampleZh: "我是俱乐部成员。", note: "das Mitglied, -er", level: "A1", tags: ["beruf"] },
        { de: "Koch", gender: "der", plural: "¨e (Köche)", zh: "厨师", example: "Der **Koch** kocht gut.", exampleZh: "这厨师做菜好吃。", note: "der Koch, ¨e", level: "A1", tags: ["beruf"] },
        { de: "Florist", gender: "der", plural: "-en", zh: "花店员", example: "Der **Florist** verkauft Blumen.", exampleZh: "花店员卖花。", note: "der Florist, -en(n-变化)", level: "A1", tags: ["beruf", "n-deklination"] },
        { de: "Ausland", gender: "das", plural: "", zh: "国外", example: "Ich arbeite im **Ausland**.", exampleZh: "我在国外工作。", note: "das Ausland ↔ Inland", level: "A1", tags: ["beruf"] },
        { de: "unterrichten", gender: "动", plural: "", zh: "授课", example: "Sie **unterrichtet** Deutsch.", exampleZh: "她教德语。", note: "unterrichten 授课", level: "A1", tags: ["beruf"] },
        { de: "vorlesen", gender: "可分", plural: "", zh: "朗读", example: "Der Lehrer **liest** uns eine Geschichte **vor**.", exampleZh: "老师给我们朗读故事。", note: "vorlesen(可分)", level: "A1", tags: ["beruf", "trennbar"] },
        { de: "schneiden", gender: "动", plural: "", zh: "切", example: "Ich **schneide** das Brot.", exampleZh: "我切面包。", note: "schneiden 切", level: "A1", tags: ["beruf"] },
        { de: "Fabrik", gender: "die", plural: "-en", zh: "工厂", example: "Die **Fabrik** ist groß.", exampleZh: "这工厂很大。", note: "die Fabrik, -en", level: "A1", tags: ["beruf"] },
        { de: "Tier", gender: "das", plural: "-e", zh: "动物", example: "Das **Tier** ist klein.", exampleZh: "这动物很小。", note: "das Tier, -e", level: "A1", tags: ["beruf"] },
        { de: "untersuchen", gender: "动", plural: "", zh: "检查", example: "Der Arzt **untersucht** mich.", exampleZh: "医生检查我。", note: "untersuchen 检查", level: "A1", tags: ["beruf"] },
        { de: "früh", gender: "形", plural: "", zh: "早", example: "Ich stehe **früh** auf.", exampleZh: "我起得早。", note: "früh ↔ spät", level: "A1", tags: ["beruf"] },
        { de: "Patient", gender: "der", plural: "-en", zh: "病人", example: "Der **Patient** wartet.", exampleZh: "病人在等。", note: "der Patient, -en(n-变化)", level: "A1", tags: ["beruf", "n-deklination"] },
        { de: "verdienen", gender: "动", plural: "", zh: "赚(钱)", example: "Ich **verdiene** genug Geld.", exampleZh: "我赚足够的钱。", note: "verdienen 赚钱", level: "A1", tags: ["beruf"] },
        { de: "Verkäufer", gender: "der", plural: "-", zh: "售货员", example: "Der **Verkäufer** ist nett.", exampleZh: "售货员很友好。", note: "der Verkäufer, -", level: "A1", tags: ["beruf"] },
        { de: "weltweit", gender: "形", plural: "", zh: "全球的", example: "Die Firma arbeitet **weltweit**.", exampleZh: "这公司在全球运作。", note: "weltweit 全球的", level: "A1", tags: ["beruf"] },
        { de: "Ausbildung", gender: "die", plural: "-en", zh: "职业培训", example: "Ich mache eine **Ausbildung**.", exampleZh: "我在受职业培训。", note: "die Ausbildung, -en", level: "A1", tags: ["beruf"] },
        { de: "Heizung", gender: "die", plural: "-en", zh: "暖气", example: "Die **Heizung** ist warm.", exampleZh: "暖气很暖。", note: "die Heizung, -en", level: "A1", tags: ["beruf"] },
        { de: "Ferien", gender: "die", plural: "(只复数)", zh: "假期", example: "Im Sommer haben wir **Ferien**.", exampleZh: "夏天我们放假。", note: "die Ferien(只有复数!)", level: "A1", tags: ["beruf"] },
        { de: "Krankenkasse", gender: "die", plural: "-n", zh: "医保(公司)", example: "Die **Krankenkasse** zahlt.", exampleZh: "医保公司付钱。", note: "die Krankenkasse, -n", level: "A1", tags: ["beruf"] },
        { de: "zufrieden", gender: "形", plural: "", zh: "满意的", example: "Ich bin sehr **zufrieden**.", exampleZh: "我很满意。", note: "zufrieden mit + Dat", level: "A1", tags: ["beruf"] },
        { de: "hassen", gender: "动", plural: "", zh: "讨厌", example: "Ich **hasse** Montage.", exampleZh: "我讨厌周一。", note: "hassen ↔ lieben", level: "A1", tags: ["beruf"] },
        { de: "Redakteur", gender: "der", plural: "-e", zh: "编辑", example: "Der **Redakteur** schreibt Artikel.", exampleZh: "编辑写文章。", note: "der Redakteur, -e", level: "A1", tags: ["beruf"] },
        { de: "Koffer", gender: "der", plural: "-", zh: "行李箱", example: "Mein **Koffer** ist schwer.", exampleZh: "我的行李箱很重。", note: "der Koffer, -", level: "A1", tags: ["beruf"] },
        { de: "privat", gender: "形", plural: "", zh: "私人的", example: "Das ist eine **private** Sache.", exampleZh: "这是私事。", note: "privat ↔ öffentlich", level: "A1", tags: ["beruf"] },
        { de: "einpacken", gender: "可分", plural: "", zh: "打包", example: "Ich **packe** den Koffer **ein**.", exampleZh: "我打包行李。", note: "einpacken(可分)", level: "A1", tags: ["beruf", "trennbar"] },
        { de: "übergeben", gender: "动", plural: "", zh: "递交", example: "Ich **übergebe** das Geschenk.", exampleZh: "我递交礼物。", note: "übergeben 递交(不可分)", level: "A1", tags: ["beruf"] }
      ]
    },

    {
      id: "a1-l8", level: "A1", lesson: "L8", theme: "Berlin besuchen 游柏林",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Reise", gender: "die", plural: "-n", zh: "旅行", example: "Die **Reise** nach Berlin war schön.", exampleZh: "去柏林的旅行很美。", note: "die Reise, -n", level: "A1", tags: ["reise"] },
        { de: "Brücke", gender: "die", plural: "-n", zh: "桥", example: "Über die **Brücke** geht man zum Park.", exampleZh: "过桥就到公园。", note: "die Brücke, -n", level: "A1", tags: ["reise"] },
        { de: "Ampel", gender: "die", plural: "-n", zh: "红绿灯", example: "An der **Ampel** musst du warten.", exampleZh: "红绿灯前你得等。", note: "die Ampel, -n", level: "A1", tags: ["reise"] },
        { de: "Botschaft", gender: "die", plural: "-en", zh: "大使馆 / 消息", example: "Die **Botschaft** ist im Zentrum.", exampleZh: "大使馆在市中心。", note: "die Botschaft, -en", level: "A1", tags: ["reise"] },
        { de: "Kirche", gender: "die", plural: "-n", zh: "教堂", example: "Die **Kirche** ist sehr alt.", exampleZh: "这教堂很古老。", note: "die Kirche, -n", level: "A1", tags: ["reise"] },
        { de: "Richtung", gender: "die", plural: "-en", zh: "方向", example: "In welche **Richtung** muss ich gehen?", exampleZh: "我该往哪个方向走?", note: "die Richtung, -en", level: "A1", tags: ["reise"] },
        { de: "manche", gender: "代词", plural: "", zh: "有些", example: "**Manche** Leute mögen Berlin.", exampleZh: "有些人喜欢柏林。", note: "mancher/manche(随定冠词词尾)", level: "A1", tags: ["reise"] },
        { de: "Teilnehmer", gender: "der", plural: "-", zh: "参加者", example: "Der Kurs hat zwanzig **Teilnehmer**.", exampleZh: "这门课有二十个参加者。", note: "der Teilnehmer, -", level: "A1", tags: ["reise"] },
        { de: "wechseln", gender: "动", plural: "", zh: "换 / 兑换", example: "Ich **wechsle** das Geld.", exampleZh: "我换钱。", note: "wechseln 兑换", level: "A1", tags: ["reise"] },
        { de: "Irrtum", gender: "der", plural: "(Irrtümer)", zh: "错误", example: "Das war ein **Irrtum**.", exampleZh: "那是个错误。", note: "der Irrtum, die Irrtümer", level: "A1", tags: ["reise"] },
        { de: "Abfahrt", gender: "die", plural: "-en", zh: "启程", example: "Die **Abfahrt** ist um acht.", exampleZh: "八点出发。", note: "die Abfahrt ↔ die Ankunft", level: "A1", tags: ["reise"] },
        { de: "Geschenk", gender: "das", plural: "-e", zh: "礼物", example: "Ich kaufe ein **Geschenk**.", exampleZh: "我买个礼物。", note: "das Geschenk, -e", level: "A1", tags: ["reise"] },
        { de: "Ankunft", gender: "die", plural: "¨e", zh: "到达", example: "Die **Ankunft** ist um zehn.", exampleZh: "十点到达。", note: "die Ankunft, ¨e", level: "A1", tags: ["reise"] },
        { de: "spazieren gehen", gender: "短语", plural: "", zh: "散步", example: "Wir **gehen** im Park **spazieren**.", exampleZh: "我们在公园散步。", note: "spazieren gehen(两动词连用)", level: "A1", tags: ["reise"] },
        { de: "Rathaus", gender: "das", plural: "¨er", zh: "市政厅", example: "Das **Rathaus** ist groß.", exampleZh: "市政厅很大。", note: "das Rathaus", level: "A1", tags: ["reise"] },
        { de: "besichtigen", gender: "动", plural: "", zh: "参观", example: "Wir **besichtigen** das Museum.", exampleZh: "我们参观博物馆。", note: "besichtigen + Akk", level: "A1", tags: ["reise"] },
        { de: "Flohmarkt", gender: "der", plural: "¨e", zh: "跳蚤市场", example: "Am Sonntag ist ein **Flohmarkt**.", exampleZh: "周日有跳蚤市场。", note: "der Flohmarkt", level: "A1", tags: ["reise"] },
        { de: "laufen", gender: "动", plural: "", zh: "跑 / 走", example: "Ich **laufe** schnell.", exampleZh: "我跑得快。", note: "laufen → er läuft(强变化)", level: "A1", tags: ["reise"] },
        { de: "bummeln", gender: "动", plural: "", zh: "闲逛", example: "Wir **bummeln** durch die Stadt.", exampleZh: "我们逛街。", note: "bummeln 闲逛", level: "A1", tags: ["reise"] },
        { de: "Ziel", gender: "das", plural: "-e", zh: "目的地 / 目标", example: "Was ist das **Ziel**?", exampleZh: "目的地是哪?", note: "das Ziel, -e", level: "A1", tags: ["reise"] },
        { de: "bekannt", gender: "形", plural: "", zh: "有名的", example: "Berlin ist sehr **bekannt**.", exampleZh: "柏林很有名。", note: "bekannt 有名的", level: "A1", tags: ["reise"] },
        { de: "gefallen", gender: "动", plural: "", zh: "讨人喜欢", example: "Berlin **gefällt** mir.", exampleZh: "我喜欢柏林。", note: "gefallen + Dat(主语是被喜欢的物)", level: "A1", tags: ["reise", "dativ-verb"] },
        { de: "bald", gender: "副", plural: "", zh: "不久", example: "Ich komme **bald**.", exampleZh: "我很快就来。", note: "bald 不久", level: "A1", tags: ["reise"] },
        { de: "besonders", gender: "副", plural: "", zh: "特别", example: "Das Essen ist **besonders** gut.", exampleZh: "这吃的特别好。", note: "besonders 特别", level: "A1", tags: ["reise"] },
        { de: "sich interessieren", gender: "反身", plural: "", zh: "感兴趣", example: "Ich **interessiere** mich für Kunst.", exampleZh: "我对艺术感兴趣。", note: "sich interessieren für + Akk", level: "A1", tags: ["reise", "reflexiv"] },
        { de: "beliebt", gender: "形", plural: "", zh: "受欢迎的", example: "Der Park ist sehr **beliebt**.", exampleZh: "这公园很受欢迎。", note: "beliebt 受喜爱的", level: "A1", tags: ["reise"] },
        { de: "klassisch", gender: "形", plural: "", zh: "古典的", example: "Ich höre **klassische** Musik.", exampleZh: "我听古典音乐。", note: "klassisch 古典的", level: "A1", tags: ["reise"] },
        { de: "Reihe", gender: "die", plural: "-n", zh: "排 / 行", example: "Wir sitzen in der ersten **Reihe**.", exampleZh: "我们坐第一排。", note: "die Reihe, -n", level: "A1", tags: ["reise"] },
        { de: "mieten", gender: "动", plural: "", zh: "租用", example: "Ich **miete** ein Zimmer.", exampleZh: "我租一个房间。", note: "mieten 租用", level: "A1", tags: ["reise"] },
        { de: "unterwegs", gender: "副", plural: "", zh: "在路上", example: "Ich bin gerade **unterwegs**.", exampleZh: "我正在路上。", note: "unterwegs 在路上", level: "A1", tags: ["reise"] },
        { de: "erleben", gender: "动", plural: "", zh: "经历", example: "Wir **erleben** viel in Berlin.", exampleZh: "我们在柏林经历很多。", note: "erleben 经历", level: "A1", tags: ["reise"] },
        { de: "sportlich", gender: "形", plural: "", zh: "爱运动的", example: "Sie ist sehr **sportlich**.", exampleZh: "她很爱运动。", note: "sportlich 运动的", level: "A1", tags: ["reise"] },
        { de: "Wo geht es zum", gender: "短语", plural: "", zh: "……怎么走", example: "**Wo geht es zum** Bahnhof?", exampleZh: "火车站怎么走?", note: "Wo geht es zum/zur…?(问路)", level: "A1", tags: ["reise"] },
        { de: "zum Schluss", gender: "短语", plural: "", zh: "最后", example: "**Zum Schluss** gehen wir essen.", exampleZh: "最后我们去吃饭。", note: "zum Schluss 最后", level: "A1", tags: ["reise"] },
        { de: "weit", gender: "形", plural: "", zh: "远", example: "Der Weg ist **weit**.", exampleZh: "路很远。", note: "weit ↔ nah", level: "A1", tags: ["reise"] },
        { de: "feiern", gender: "动", plural: "", zh: "庆祝", example: "Wir **feiern** heute.", exampleZh: "我们今天庆祝。", note: "feiern 庆祝", level: "A1", tags: ["reise"] },
        { de: "überarbeiten", gender: "动", plural: "", zh: "修改 / 加工", example: "Ich **überarbeite** den Text.", exampleZh: "我修改文章。", note: "überarbeiten(不可分)", level: "A1", tags: ["reise"] },
        { de: "Kreuzung", gender: "die", plural: "-en", zh: "十字路口", example: "An der **Kreuzung** links.", exampleZh: "十字路口左拐。", note: "die Kreuzung, -en", level: "A1", tags: ["reise"] },
        { de: "vorbei", gender: "副", plural: "", zh: "经过 / 过去", example: "Ich gehe am Park **vorbei**.", exampleZh: "我从公园旁经过。", note: "vorbei an + Dat", level: "A1", tags: ["reise"] },
        { de: "Sache", gender: "die", plural: "-n", zh: "事情 / 东西", example: "Das ist meine **Sache**.", exampleZh: "那是我的事。", note: "die Sache, -n", level: "A1", tags: ["reise"] }
      ]
    },

    {
      id: "a1-l11", level: "A1", lesson: "L11", theme: "Kleidung und Wetter 服装·天气",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Größe", gender: "die", plural: "-n", zh: "尺码 / 大小", example: "Welche **Größe** hast du?", exampleZh: "你穿多大尺码?", note: "die Größe, -n", level: "A1", tags: ["kleidung"] },
        { de: "Kälte", gender: "die", plural: "", zh: "寒冷", example: "Die **Kälte** ist schlimm.", exampleZh: "这冷很难受。", note: "die Kälte ↔ die Hitze", level: "A1", tags: ["kleidung"] },
        { de: "hellblau", gender: "形", plural: "", zh: "浅蓝色", example: "Das Hemd ist **hellblau**.", exampleZh: "这衬衫是浅蓝色。", note: "hell- + 颜色", level: "A1", tags: ["kleidung"] },
        { de: "Bedeutung", gender: "die", plural: "-en", zh: "含义", example: "Was ist die **Bedeutung**?", exampleZh: "含义是什么?", note: "die Bedeutung, -en", level: "A1", tags: ["kleidung"] },
        { de: "dunkelgrün", gender: "形", plural: "", zh: "深绿色", example: "Der Mantel ist **dunkelgrün**.", exampleZh: "这外套是深绿色。", note: "dunkel- + 颜色", level: "A1", tags: ["kleidung"] },
        { de: "Baum", gender: "der", plural: "¨e (Bäume)", zh: "树", example: "Der **Baum** ist hoch.", exampleZh: "这树很高。", note: "der Baum, ¨e", level: "A1", tags: ["kleidung"] },
        { de: "Trend", gender: "der", plural: "-s", zh: "潮流", example: "Das ist ein neuer **Trend**.", exampleZh: "这是新潮流。", note: "der Trend, -s", level: "A1", tags: ["kleidung"] },
        { de: "Gras", gender: "das", plural: "¨er (Gräser)", zh: "草", example: "Das **Gras** ist grün.", exampleZh: "草是绿的。", note: "das Gras, ¨er", level: "A1", tags: ["kleidung"] },
        { de: "tragen", gender: "动", plural: "", zh: "穿 / 带", example: "Ich **trage** einen Mantel.", exampleZh: "我穿一件外套。", note: "tragen → er trägt(强变化)", level: "A1", tags: ["kleidung"] },
        { de: "Himmel", gender: "der", plural: "-", zh: "天空", example: "Der **Himmel** ist blau.", exampleZh: "天空是蓝的。", note: "der Himmel", level: "A1", tags: ["kleidung"] },
        { de: "hoffen", gender: "动", plural: "", zh: "希望", example: "Ich **hoffe** es.", exampleZh: "我希望如此。", note: "hoffen 希望", level: "A1", tags: ["kleidung"] },
        { de: "hässlich", gender: "形", plural: "", zh: "丑的", example: "Die Farbe ist **hässlich**.", exampleZh: "这颜色很丑。", note: "hässlich ↔ schön", level: "A1", tags: ["kleidung"] },
        { de: "gefallen", gender: "动", plural: "", zh: "讨人喜欢", example: "Das Kleid **gefällt** mir.", exampleZh: "我喜欢这裙子。", note: "gefallen + Dat", level: "A1", tags: ["kleidung", "dativ-verb"] },
        { de: "überhaupt", gender: "副", plural: "", zh: "压根 / 究竟", example: "Das mag ich **überhaupt** nicht.", exampleZh: "我压根不喜欢。", note: "überhaupt nicht 压根不", level: "A1", tags: ["kleidung"] },
        { de: "bequem", gender: "形", plural: "", zh: "舒服的", example: "Die Schuhe sind **bequem**.", exampleZh: "这鞋很舒服。", note: "bequem ↔ unbequem", level: "A1", tags: ["kleidung"] },
        { de: "Bummel", gender: "der", plural: "-", zh: "逛街", example: "Wir machen einen **Bummel**.", exampleZh: "我们去逛街。", note: "der Bummel, -", level: "A1", tags: ["kleidung"] },
        { de: "anprobieren", gender: "可分", plural: "", zh: "试穿", example: "Ich **probiere** das Hemd **an**.", exampleZh: "我试穿这衬衫。", note: "anprobieren(可分)", level: "A1", tags: ["kleidung", "trennbar"] },
        { de: "Angebot", gender: "das", plural: "-e", zh: "优惠 / 供应", example: "Das ist ein gutes **Angebot**.", exampleZh: "这是个好优惠。", note: "das Angebot, -e", level: "A1", tags: ["kleidung"] },
        { de: "lieber", gender: "副", plural: "", zh: "更喜欢", example: "Ich trinke **lieber** Tee.", exampleZh: "我更喜欢喝茶。", note: "lieber = gern 的比较级", level: "A1", tags: ["kleidung"] },
        { de: "stehen", gender: "动", plural: "", zh: "(衣服)适合", example: "Das Kleid **steht** dir.", exampleZh: "这裙子适合你。", note: "stehen + Dat(适合)", level: "A1", tags: ["kleidung"] },
        { de: "Regen", gender: "der", plural: "-", zh: "雨", example: "Der **Regen** ist stark.", exampleZh: "雨很大。", note: "der Regen", level: "A1", tags: ["kleidung"] },
        { de: "Frühling", gender: "der", plural: "-e", zh: "春天", example: "Im **Frühling** ist es warm.", exampleZh: "春天很暖。", note: "der Frühling", level: "A1", tags: ["kleidung"] },
        { de: "Schnee", gender: "der", plural: "", zh: "雪", example: "Der **Schnee** ist weiß.", exampleZh: "雪是白的。", note: "der Schnee", level: "A1", tags: ["kleidung"] },
        { de: "Nebel", gender: "der", plural: "-", zh: "雾", example: "Der **Nebel** ist dicht.", exampleZh: "雾很浓。", note: "der Nebel", level: "A1", tags: ["kleidung"] },
        { de: "Herbst", gender: "der", plural: "-e", zh: "秋天", example: "Im **Herbst** ist es kühl.", exampleZh: "秋天很凉。", note: "der Herbst", level: "A1", tags: ["kleidung"] },
        { de: "heiter", gender: "形", plural: "", zh: "晴朗的", example: "Heute ist es **heiter**.", exampleZh: "今天是晴天。", note: "heiter 晴朗的", level: "A1", tags: ["kleidung"] },
        { de: "Stiefel", gender: "der", plural: "-", zh: "靴子", example: "Die **Stiefel** sind warm.", exampleZh: "这靴子很暖。", note: "der Stiefel, -", level: "A1", tags: ["kleidung"] },
        { de: "bewölkt", gender: "形", plural: "", zh: "多云的", example: "Der Himmel ist **bewölkt**.", exampleZh: "天多云。", note: "bewölkt 多云的", level: "A1", tags: ["kleidung"] },
        { de: "kombinieren", gender: "动", plural: "", zh: "搭配 / 组合", example: "Ich **kombiniere** Rot und Blau.", exampleZh: "我把红和蓝搭在一起。", note: "kombinieren 搭配", level: "A1", tags: ["kleidung"] },
        { de: "Trockenzeit", gender: "die", plural: "-en", zh: "旱季", example: "Die **Trockenzeit** ist lang.", exampleZh: "旱季很长。", note: "die Trockenzeit, -en", level: "A1", tags: ["kleidung"] },
        { de: "bunt", gender: "形", plural: "", zh: "多彩的", example: "Das Kleid ist **bunt**.", exampleZh: "这裙子很彩。", note: "bunt 多彩的", level: "A1", tags: ["kleidung"] },
        { de: "gleich", gender: "形", plural: "", zh: "相同的 / 马上", example: "Wir haben das **gleiche** Hemd.", exampleZh: "我们有同款衬衫。", note: "gleich 相同的(也 = 马上)", level: "A1", tags: ["kleidung"] },
        { de: "schick", gender: "形", plural: "", zh: "时髦的", example: "Du siehst **schick** aus.", exampleZh: "你看起来很时髦。", note: "schick 时髦的", level: "A1", tags: ["kleidung"] },
        { de: "Hitze", gender: "die", plural: "", zh: "炎热", example: "Die **Hitze** im Sommer ist stark.", exampleZh: "夏天的炎热很强。", note: "die Hitze ↔ die Kälte", level: "A1", tags: ["kleidung"] },
        { de: "am liebsten", gender: "短语", plural: "", zh: "最喜欢", example: "**Am liebsten** trage ich Schwarz.", exampleZh: "我最喜欢穿黑色。", note: "am liebsten = gern 最高级", level: "A1", tags: ["kleidung"] }
      ]
    },

    {
      id: "a1-l12", level: "A1", lesson: "L12", theme: "Körper und Gesundheit 身体·健康",
      source: "A1 例句背词 · 盲区词", date: "2026-06-28",
      words: [
        { de: "Gesundheit", gender: "die", plural: "", zh: "健康", example: "**Gesundheit** ist wichtig.", exampleZh: "健康很重要。", note: "die Gesundheit", level: "A1", tags: ["gesundheit"] },
        { de: "Medikament", gender: "das", plural: "-e", zh: "药", example: "Ich nehme ein **Medikament**.", exampleZh: "我吃一种药。", note: "das Medikament, -e", level: "A1", tags: ["gesundheit"] },
        { de: "wehtun", gender: "可分", plural: "", zh: "疼", example: "Mein Kopf **tut weh**.", exampleZh: "我头疼。", note: "wehtun + Dat(可分)", level: "A1", tags: ["gesundheit", "trennbar"] },
        { de: "Körperteil", gender: "der", plural: "-e", zh: "身体部位", example: "Die Hand ist ein **Körperteil**.", exampleZh: "手是一个身体部位。", note: "der Körperteil, -e", level: "A1", tags: ["gesundheit"] },
        { de: "Entzündung", gender: "die", plural: "-en", zh: "炎症", example: "Ich habe eine **Entzündung**.", exampleZh: "我发炎了。", note: "die Entzündung, -en", level: "A1", tags: ["gesundheit"] },
        { de: "Erkältung", gender: "die", plural: "-en", zh: "感冒", example: "Ich habe eine **Erkältung**.", exampleZh: "我感冒了。", note: "die Erkältung, -en", level: "A1", tags: ["gesundheit"] },
        { de: "Rezept", gender: "das", plural: "-e", zh: "药方 / 菜谱", example: "Der Arzt schreibt ein **Rezept**.", exampleZh: "医生开药方。", note: "das Rezept, -e", level: "A1", tags: ["gesundheit"] },
        { de: "Auge", gender: "das", plural: "-n", zh: "眼睛", example: "Mein **Auge** tut weh.", exampleZh: "我眼睛疼。", note: "das Auge, -n", level: "A1", tags: ["gesundheit"] },
        { de: "Bein", gender: "das", plural: "-e", zh: "腿", example: "Mein **Bein** ist müde.", exampleZh: "我腿累。", note: "das Bein, -e", level: "A1", tags: ["gesundheit"] },
        { de: "husten", gender: "动", plural: "", zh: "咳嗽", example: "Ich **huste** viel.", exampleZh: "我咳得厉害。", note: "husten 咳嗽", level: "A1", tags: ["gesundheit"] },
        { de: "Herz", gender: "das", plural: "-en", zh: "心", example: "Mein **Herz** schlägt schnell.", exampleZh: "我心跳得快。", note: "das Herz(特殊变格:des Herzens)", level: "A1", tags: ["gesundheit"] },
        { de: "Lust", gender: "die", plural: "", zh: "兴致 / 欲望", example: "Ich habe **Lust** auf Kaffee.", exampleZh: "我想喝咖啡。", note: "Lust auf + Akk", level: "A1", tags: ["gesundheit"] },
        { de: "rauchen", gender: "动", plural: "", zh: "抽烟", example: "Ich **rauche** nicht.", exampleZh: "我不抽烟。", note: "rauchen 抽烟", level: "A1", tags: ["gesundheit"] },
        { de: "auf keinen Fall", gender: "短语", plural: "", zh: "绝对不", example: "**Auf keinen Fall**!", exampleZh: "绝对不行!", note: "auf keinen Fall 决不", level: "A1", tags: ["gesundheit"] },
        { de: "Gute Besserung", gender: "短语", plural: "", zh: "早日康复", example: "**Gute Besserung**!", exampleZh: "早日康复!", note: "固定祝福语", level: "A1", tags: ["gesundheit"] },
        { de: "Lunge", gender: "die", plural: "-n", zh: "肺", example: "Die **Lunge** ist krank.", exampleZh: "肺生病了。", note: "die Lunge, -n", level: "A1", tags: ["gesundheit"] },
        { de: "nützlich", gender: "形", plural: "", zh: "有用的", example: "Das ist sehr **nützlich**.", exampleZh: "这很有用。", note: "nützlich ↔ nutzlos", level: "A1", tags: ["gesundheit"] },
        { de: "Bauch", gender: "der", plural: "¨e (Bäuche)", zh: "肚子", example: "Mein **Bauch** tut weh.", exampleZh: "我肚子疼。", note: "der Bauch, ¨e", level: "A1", tags: ["gesundheit"] },
        { de: "Schulter", gender: "die", plural: "-n", zh: "肩膀", example: "Meine **Schulter** tut weh.", exampleZh: "我肩膀疼。", note: "die Schulter, -n", level: "A1", tags: ["gesundheit"] },
        { de: "Krankmeldung", gender: "die", plural: "-en", zh: "病假条", example: "Ich brauche eine **Krankmeldung**.", exampleZh: "我需要一张病假条。", note: "die Krankmeldung, -en", level: "A1", tags: ["gesundheit"] },
        { de: "verbrauchen", gender: "动", plural: "", zh: "消耗", example: "Ich **verbrauche** viel Energie.", exampleZh: "我消耗很多能量。", note: "verbrauchen 消耗", level: "A1", tags: ["gesundheit"] },
        { de: "stärken", gender: "动", plural: "", zh: "增强", example: "Sport **stärkt** den Körper.", exampleZh: "运动增强身体。", note: "stärken 增强", level: "A1", tags: ["gesundheit"] },
        { de: "vergessen", gender: "动", plural: "", zh: "忘记", example: "Ich **vergesse** das Medikament.", exampleZh: "我忘了吃药。", note: "vergessen → er vergisst(强变化)", level: "A1", tags: ["gesundheit"] },
        { de: "gefährlich", gender: "形", plural: "", zh: "危险的", example: "Rauchen ist **gefährlich**.", exampleZh: "抽烟很危险。", note: "gefährlich ↔ sicher", level: "A1", tags: ["gesundheit"] },
        { de: "glücklich", gender: "形", plural: "", zh: "幸福的", example: "Ich bin **glücklich**.", exampleZh: "我很幸福。", note: "glücklich ↔ traurig", level: "A1", tags: ["gesundheit"] },
        { de: "Ruhe", gender: "die", plural: "", zh: "安静 / 平静", example: "Ich brauche **Ruhe**.", exampleZh: "我需要安静。", note: "die Ruhe(冥想常用)", level: "A1", tags: ["gesundheit"] },
        { de: "überall", gender: "副", plural: "", zh: "到处", example: "Es tut **überall** weh.", exampleZh: "浑身都疼。", note: "überall 到处", level: "A1", tags: ["gesundheit"] },
        { de: "lachen", gender: "动", plural: "", zh: "笑", example: "Kinder **lachen** gern.", exampleZh: "孩子爱笑。", note: "lachen ↔ weinen", level: "A1", tags: ["gesundheit"] },
        { de: "Versichertenkarte", gender: "die", plural: "-n", zh: "医保卡", example: "Hier ist meine **Versichertenkarte**.", exampleZh: "这是我的医保卡。", note: "die Versichertenkarte, -n", level: "A1", tags: ["gesundheit"] },
        { de: "sich langweilen", gender: "反身", plural: "", zh: "觉得无聊", example: "Ich **langweile** mich.", exampleZh: "我觉得无聊。", note: "sich langweilen(反身)", level: "A1", tags: ["gesundheit", "reflexiv"] },
        { de: "Entspannung", gender: "die", plural: "", zh: "放松", example: "Meditation bringt **Entspannung**.", exampleZh: "冥想带来放松。", note: "die Entspannung", level: "A1", tags: ["gesundheit"] },
        { de: "nerven", gender: "动", plural: "", zh: "使烦", example: "Das **nervt** mich!", exampleZh: "这让我烦!", note: "nerven + Akk(使烦)", level: "A1", tags: ["gesundheit"] },
        { de: "Fieber", gender: "das", plural: "-", zh: "发烧", example: "Ich habe **Fieber**.", exampleZh: "我发烧了。", note: "das Fieber", level: "A1", tags: ["gesundheit"] },
        { de: "regelmäßig", gender: "形", plural: "", zh: "规律的", example: "Ich meditiere **regelmäßig**.", exampleZh: "我规律地冥想。", note: "regelmäßig ↔ unregelmäßig", level: "A1", tags: ["gesundheit"] },
        { de: "Schmerz", gender: "der", plural: "-en", zh: "疼痛", example: "Der **Schmerz** ist stark.", exampleZh: "疼痛很强烈。", note: "der Schmerz, -en", level: "A1", tags: ["gesundheit"] },
        { de: "verrückt", gender: "形", plural: "", zh: "疯狂的", example: "Das ist **verrückt**!", exampleZh: "这太疯狂了!", note: "verrückt 疯狂的", level: "A1", tags: ["gesundheit"] },
        { de: "Praxis", gender: "die", plural: "(Praxen)", zh: "诊所", example: "Die **Praxis** ist heute zu.", exampleZh: "诊所今天关门。", note: "die Praxis, Praxen", level: "A1", tags: ["gesundheit"] },
        { de: "spannend", gender: "形", plural: "", zh: "引人入胜的", example: "Das Buch ist **spannend**.", exampleZh: "这书很引人入胜。", note: "spannend ↔ langweilig", level: "A1", tags: ["gesundheit"] },
        { de: "Sportart", gender: "die", plural: "-en", zh: "运动种类", example: "Welche **Sportart** magst du?", exampleZh: "你喜欢哪种运动?", note: "die Sportart, -en", level: "A1", tags: ["gesundheit"] },
        { de: "furchtbar", gender: "形", plural: "", zh: "可怕的", example: "Das Wetter ist **furchtbar**.", exampleZh: "天气糟透了。", note: "furchtbar 可怕的", level: "A1", tags: ["gesundheit"] }
      ]
    },

    {
      id: "a2-l0-1", level: "A2", lesson: "L0&1", theme: "Leben und lernen in Europa 在欧洲生活与学习",
      source: "A2 例句背词", date: "2026-06-28",
      words: [
        { de: "Kontinent", gender: "der", plural: "-e", zh: "大陆 / 洲", example: "Asien ist ein großer **Kontinent**.", exampleZh: "亚洲是一块大陆。", note: "der Kontinent, -e", level: "A2", tags: ["europa"] },
        { de: "aussehen", gender: "可分", plural: "", zh: "看起来", example: "Du **siehst** heute müde **aus**.", exampleZh: "你今天看起来很累。", note: "可分 sehen…aus;er sieht aus", level: "A2", tags: ["europa", "trennbar"] },
        { de: "orientalisch", gender: "形", plural: "", zh: "东方的", example: "Ich mag **orientalisches** Essen.", exampleZh: "我喜欢东方菜。", note: "形容词,加词尾", level: "A2", tags: ["europa"] },
        { de: "europäisch", gender: "形", plural: "", zh: "欧洲的", example: "Wien ist eine **europäische** Stadt.", exampleZh: "维也纳是一座欧洲城市。", note: "europäisch", level: "A2", tags: ["europa"] },
        { de: "bauen", gender: "动", plural: "", zh: "建造", example: "Sie **bauen** ein neues Haus.", exampleZh: "他们在盖一栋新房子。", note: "规则动词", level: "A2", tags: ["europa"] },
        { de: "Mittelalter", gender: "das", plural: "", zh: "中世纪", example: "Diese Kirche ist aus dem **Mittelalter**.", exampleZh: "这座教堂源自中世纪。", note: "das Mittelalter(无复数)", level: "A2", tags: ["europa"] },
        { de: "Metall", gender: "das", plural: "-e", zh: "金属", example: "Gold ist ein **Metall**.", exampleZh: "黄金是一种金属。", note: "das Metall, -e", level: "A2", tags: ["europa"] },
        { de: "verpassen", gender: "动", plural: "", zh: "错过", example: "Ich **verpasse** oft den Bus.", exampleZh: "我常错过公交车。", note: "verpassen + A;不可分(无 ge-)", level: "A2", tags: ["europa"] },
        { de: "absagen", gender: "可分", plural: "", zh: "取消", example: "Ich muss den Termin **absagen**.", exampleZh: "我得取消这个约会。", note: "可分 sagt…ab ↔ zusagen", level: "A2", tags: ["europa", "trennbar"] },
        { de: "Stau", gender: "der", plural: "-s", zh: "堵车", example: "Auf der Autobahn ist ein langer **Stau**.", exampleZh: "高速公路上堵车很长。", note: "der Stau, -s", level: "A2", tags: ["europa"] },
        { de: "verschlafen", gender: "动", plural: "", zh: "睡过头", example: "Heute habe ich **verschlafen**.", exampleZh: "今天我睡过头了。", note: "不可分;hat verschlafen", level: "A2", tags: ["europa"] },
        { de: "Miete", gender: "die", plural: "-n", zh: "房租", example: "Die **Miete** ist sehr hoch.", exampleZh: "房租很高。", note: "die Miete, -n", level: "A2", tags: ["europa"] },
        { de: "begrüßen", gender: "动", plural: "", zh: "迎接 / 问候", example: "Der Chef **begrüßt** die Gäste.", exampleZh: "老板迎接客人。", note: "begrüßen + A;不可分", level: "A2", tags: ["europa"] },
        { de: "geboren sein", gender: "短语", plural: "", zh: "出生", example: "Ich **bin** in China **geboren**.", exampleZh: "我在中国出生。", note: "geboren + sein", level: "A2", tags: ["europa"] },
        { de: "Weltmeister", gender: "der", plural: "-", zh: "世界冠军", example: "Argentinien ist **Weltmeister**.", exampleZh: "阿根廷是世界冠军。", note: "der Weltmeister, -", level: "A2", tags: ["europa"] },
        { de: "Bundeskanzler", gender: "der", plural: "-", zh: "联邦总理", example: "Der **Bundeskanzler** wohnt in Berlin.", exampleZh: "联邦总理住在柏林。", note: "der Bundeskanzler, -", level: "A2", tags: ["europa"] },
        { de: "Migration", gender: "die", plural: "-en", zh: "移民", example: "Die **Migration** ist ein großes Thema.", exampleZh: "移民是个大话题。", note: "die Migration(-tion → 阴性)", level: "A2", tags: ["europa"] },
        { de: "Arbeitserlaubnis", gender: "die", plural: "-se", zh: "工作许可", example: "Ohne **Arbeitserlaubnis** darf man nicht arbeiten.", exampleZh: "没有工作许可就不能工作。", note: "die Arbeitserlaubnis", level: "A2", tags: ["europa"] },
        { de: "Krise", gender: "die", plural: "-n", zh: "危机", example: "Das Land ist in einer **Krise**.", exampleZh: "这个国家陷入危机。", note: "die Krise, -n", level: "A2", tags: ["europa"] },
        { de: "mobil", gender: "形", plural: "", zh: "机动的 / 灵活的", example: "Mit dem Auto bin ich sehr **mobil**.", exampleZh: "有车我很机动灵活。", note: "mobil", level: "A2", tags: ["europa"] },
        { de: "verlassen", gender: "动", plural: "", zh: "离开", example: "Ich **verlasse** das Haus um acht.", exampleZh: "我八点离开家。", note: "verlassen + A;er verlässt;不可分", level: "A2", tags: ["europa"] },
        { de: "berichten", gender: "动", plural: "", zh: "报道", example: "Die Zeitung **berichtet** über Wien.", exampleZh: "报纸报道维也纳。", note: "berichten über + A", level: "A2", tags: ["europa"] },
        { de: "Titel", gender: "der", plural: "-", zh: "标题", example: "Wie heißt der **Titel** von dem Buch?", exampleZh: "这本书的标题叫什么?", note: "der Titel, -", level: "A2", tags: ["europa"] },
        { de: "Anfang", gender: "der", plural: "¨e (Anfänge)", zh: "开始", example: "Am **Anfang** war alles neu.", exampleZh: "一开始一切都是新的。", note: "der Anfang, ¨e;am Anfang", level: "A2", tags: ["europa"] },
        { de: "staatlich", gender: "形", plural: "", zh: "国家的 / 公立的", example: "Das ist eine **staatliche** Schule.", exampleZh: "这是一所公立学校。", note: "staatlich", level: "A2", tags: ["europa"] },
        { de: "Praktikum", gender: "das", plural: "(Praktika)", zh: "实习", example: "Ich mache ein **Praktikum** in Wien.", exampleZh: "我在维也纳实习。", note: "das Praktikum, pl. Praktika", level: "A2", tags: ["europa"] },
        { de: "Gericht", gender: "das", plural: "-e", zh: "菜肴 / 法院", example: "Schnitzel ist mein Lieblings**gericht**.", exampleZh: "炸肉排是我最爱的菜。", note: "das Gericht, -e", level: "A2", tags: ["europa"] },
        { de: "Herausforderung", gender: "die", plural: "-en", zh: "挑战", example: "Deutsch lernen ist eine **Herausforderung**.", exampleZh: "学德语是个挑战。", note: "-ung → 阴性", level: "A2", tags: ["europa"] },
        { de: "Erfolg", gender: "der", plural: "-e", zh: "成功", example: "Die Prüfung war ein **Erfolg**.", exampleZh: "这场考试很成功。", note: "der Erfolg, -e", level: "A2", tags: ["europa"] },
        { de: "faszinieren", gender: "动", plural: "", zh: "使着迷", example: "Diese Stadt **fasziniert** mich.", exampleZh: "这座城市让我着迷。", note: "faszinieren + A", level: "A2", tags: ["europa"] },
        { de: "Kontakt", gender: "der", plural: "-e", zh: "联系", example: "Wir haben oft **Kontakt**.", exampleZh: "我们经常联系。", note: "der Kontakt, -e;mit / zu", level: "A2", tags: ["europa"] },
        { de: "gratis", gender: "形", plural: "", zh: "免费的", example: "Das Wasser hier ist **gratis**.", exampleZh: "这里的水是免费的。", note: "= kostenlos", level: "A2", tags: ["europa"] },
        { de: "Zitat", gender: "das", plural: "-e", zh: "引文", example: "Das ist ein berühmtes **Zitat**.", exampleZh: "这是一句著名的引文。", note: "das Zitat, -e", level: "A2", tags: ["europa"] },
        { de: "Vorteil", gender: "der", plural: "-e", zh: "好处", example: "Das hat einen großen **Vorteil**.", exampleZh: "这有个很大的好处。", note: "der Vorteil ↔ der Nachteil", level: "A2", tags: ["europa"] },
        { de: "nützlich", gender: "形", plural: "", zh: "有用的", example: "Dieses Buch ist sehr **nützlich**.", exampleZh: "这本书很有用。", note: "nützlich für + A", level: "A2", tags: ["europa"] },
        { de: "wiegen", gender: "动", plural: "", zh: "称重 / 重达", example: "Wie viel **wiegst** du?", exampleZh: "你多重?", note: "wiegen 称重", level: "A2", tags: ["europa"] },
        { de: "nämlich", gender: "副", plural: "", zh: "因为(补充原因)", example: "Ich komme nicht, ich bin **nämlich** krank.", exampleZh: "我不来,因为我病了。", note: "放动词后补充原因(不引导从句)", level: "A2", tags: ["europa"] },
        { de: "geheimnisvoll", gender: "形", plural: "", zh: "神秘的", example: "Der alte Mann ist sehr **geheimnisvoll**.", exampleZh: "那位老人很神秘。", note: "geheimnisvoll", level: "A2", tags: ["europa"] },
        { de: "Wunsch", gender: "der", plural: "¨e (Wünsche)", zh: "愿望", example: "Hast du einen **Wunsch**?", exampleZh: "你有什么愿望吗?", note: "der Wunsch, ¨e", level: "A2", tags: ["europa"] },
        { de: "verrückt", gender: "形", plural: "", zh: "疯狂的", example: "Diese Idee ist total **verrückt**.", exampleZh: "这个主意太疯狂了。", note: "verrückt", level: "A2", tags: ["europa"] },
        { de: "träumen", gender: "动", plural: "", zh: "做梦 / 梦想", example: "Ich **träume** von einem Haus.", exampleZh: "我梦想有栋房子。", note: "träumen von + D", level: "A2", tags: ["europa"] },
        { de: "Fachmann", gender: "der", plural: "(Fachleute)", zh: "专家", example: "Er ist ein **Fachmann** für Computer.", exampleZh: "他是电脑专家。", note: "der Fachmann, pl. Fachleute", level: "A2", tags: ["europa"] },
        { de: "Schriftsteller", gender: "der", plural: "-", zh: "作家", example: "Goethe war ein großer **Schriftsteller**.", exampleZh: "歌德是位伟大的作家。", note: "女 die Schriftstellerin", level: "A2", tags: ["europa"] },
        { de: "Politiker", gender: "der", plural: "-", zh: "政治家", example: "Der **Politiker** spricht im Fernsehen.", exampleZh: "那位政治家在电视上讲话。", note: "女 die Politikerin", level: "A2", tags: ["europa"] },
        { de: "Mandarin", gender: "das", plural: "", zh: "普通话", example: "Ich lerne **Mandarin**.", exampleZh: "我在学普通话。", note: "= Hochchinesisch", level: "A2", tags: ["europa"] },
        { de: "sich erinnern", gender: "反身", plural: "", zh: "记得", example: "Ich **erinnere** mich an Wien.", exampleZh: "我记得维也纳。", note: "sich erinnern an + A(反身)", level: "A2", tags: ["europa", "reflexiv"] },
        { de: "zugleich", gender: "副", plural: "", zh: "同时", example: "Er ist Lehrer und **zugleich** Vater.", exampleZh: "他既是老师,同时也是父亲。", note: "zugleich = gleichzeitig", level: "A2", tags: ["europa"] },
        { de: "Wettbewerb", gender: "der", plural: "-e", zh: "比赛 / 竞争", example: "Sie gewinnt den **Wettbewerb**.", exampleZh: "她赢得了比赛。", note: "der Wettbewerb, -e", level: "A2", tags: ["europa"] },
        { de: "Lateinisch", gender: "das", plural: "", zh: "拉丁语", example: "**Lateinisch** ist eine alte Sprache.", exampleZh: "拉丁语是一门古老的语言。", note: "常用 das Latein", level: "A2", tags: ["europa"] },
        { de: "Platz", gender: "der", plural: "¨e (Plätze)", zh: "广场 / 位置", example: "Auf dem **Platz** spielen Kinder.", exampleZh: "孩子们在广场上玩。", note: "der Platz, ¨e(广场 / 位置 / 座位)", level: "A2", tags: ["europa"] }
      ]
    },

    {
      id: "a2-l2", level: "A2", lesson: "L2", theme: "Familiengeschichten 家庭故事",
      source: "A2 例句背词", date: "2026-06-28",
      words: [
        { de: "Familiengeschichte", gender: "die", plural: "-n", zh: "家族故事", example: "Meine Oma erzählt eine alte **Familiengeschichte**.", exampleZh: "我奶奶讲一个古老的家族故事。", note: "die Familiengeschichte, -n", level: "A2", tags: ["familie"] },
        { de: "beglückwünschen", gender: "动", plural: "", zh: "祝贺", example: "Wir **beglückwünschen** dich zum Erfolg.", exampleZh: "我们祝贺你成功。", note: "jdn. zu + D;不可分", level: "A2", tags: ["familie"] },
        { de: "Geschwister", gender: "die", plural: "(只复数)", zh: "兄弟姐妹", example: "Hast du **Geschwister**?", exampleZh: "你有兄弟姐妹吗?", note: "die Geschwister(只用复数)", level: "A2", tags: ["familie"] },
        { de: "Hochzeit", gender: "die", plural: "-en", zh: "婚礼", example: "Ihre **Hochzeit** ist im Mai.", exampleZh: "他们的婚礼在五月。", note: "die Hochzeit, -en", level: "A2", tags: ["familie"] },
        { de: "Geburtsjahr", gender: "das", plural: "-e", zh: "出生年份", example: "Mein **Geburtsjahr** ist 1990.", exampleZh: "我的出生年份是 1990。", note: "das Geburtsjahr, -e", level: "A2", tags: ["familie"] },
        { de: "stolz", gender: "形", plural: "", zh: "骄傲的", example: "Die Mutter ist **stolz** auf ihr Kind.", exampleZh: "母亲为她的孩子骄傲。", note: "stolz auf + A", level: "A2", tags: ["familie"] },
        { de: "Enkelkind", gender: "das", plural: "-er", zh: "孙辈", example: "Die Oma spielt mit ihrem **Enkelkind**.", exampleZh: "奶奶和孙辈玩。", note: "das Enkelkind, -er", level: "A2", tags: ["familie"] },
        { de: "ledig", gender: "形", plural: "", zh: "单身的 / 未婚", example: "Er ist noch **ledig**.", exampleZh: "他还单身。", note: "ledig(未婚)", level: "A2", tags: ["familie"] },
        { de: "geschieden", gender: "形", plural: "", zh: "离婚的", example: "Meine Eltern sind **geschieden**.", exampleZh: "我父母离婚了。", note: "geschieden", level: "A2", tags: ["familie"] },
        { de: "verwitwet", gender: "形", plural: "", zh: "丧偶的", example: "Meine Tante ist **verwitwet**.", exampleZh: "我姑妈丧偶了。", note: "verwitwet", level: "A2", tags: ["familie"] },
        { de: "Verwandte", gender: "der", plural: "-n", zh: "亲戚", example: "Wir besuchen einen **Verwandten**.", exampleZh: "我们去看一位亲戚。", note: "形→名;ein Verwandter / den Verwandten", level: "A2", tags: ["familie"] },
        { de: "Nichte", gender: "die", plural: "-n", zh: "侄女 / 外甥女", example: "Meine **Nichte** ist fünf Jahre alt.", exampleZh: "我侄女五岁。", note: "die Nichte, -n", level: "A2", tags: ["familie"] },
        { de: "Neffe", gender: "der", plural: "-n", zh: "侄子 / 外甥", example: "Mein **Neffe** wohnt in Berlin.", exampleZh: "我侄子住柏林。", note: "der Neffe, -n(n-变化:den/dem Neffen)", level: "A2", tags: ["familie", "n-deklination"] },
        { de: "Schwiegertochter", gender: "die", plural: "¨ (-töchter)", zh: "儿媳", example: "Seine **Schwiegertochter** kocht gut.", exampleZh: "他儿媳做饭很好。", note: "die Schwiegertochter, pl. -töchter", level: "A2", tags: ["familie"] },
        { de: "schenken", gender: "动", plural: "", zh: "赠送", example: "Ich **schenke** dir ein Buch.", exampleZh: "我送你一本书。", note: "schenken + D + A", level: "A2", tags: ["familie"] },
        { de: "fremd", gender: "形", plural: "", zh: "陌生的", example: "Diese Stadt ist mir **fremd**.", exampleZh: "这座城市对我很陌生。", note: "fremd (+ D)", level: "A2", tags: ["familie"] },
        { de: "aufräumen", gender: "可分", plural: "", zh: "收拾 / 整理", example: "Ich muss mein Zimmer **aufräumen**.", exampleZh: "我得收拾房间。", note: "可分 räumt…auf", level: "A2", tags: ["familie", "trennbar"] },
        { de: "bügeln", gender: "动", plural: "", zh: "熨烫", example: "Ich **bügele** mein Hemd.", exampleZh: "我熨衬衫。", note: "规则动词", level: "A2", tags: ["familie"] },
        { de: "Hausarbeit", gender: "die", plural: "-en", zh: "家务", example: "Die **Hausarbeit** macht keinen Spaß.", exampleZh: "家务一点不好玩。", note: "die Hausarbeit, -en", level: "A2", tags: ["familie"] },
        { de: "anderthalb", gender: "数", plural: "", zh: "一个半", example: "Ich warte schon **anderthalb** Stunden.", exampleZh: "我已经等了一个半小时。", note: "anderthalb = 1,5", level: "A2", tags: ["familie"] },
        { de: "Unterkunft", gender: "die", plural: "¨e (Unterkünfte)", zh: "住所", example: "Wir suchen eine **Unterkunft** für die Nacht.", exampleZh: "我们找一处过夜的住所。", note: "die Unterkunft, ¨e", level: "A2", tags: ["familie"] },
        { de: "Verpflegung", gender: "die", plural: "", zh: "餐饮供应", example: "Im Hotel ist die **Verpflegung** inklusive.", exampleZh: "酒店包餐。", note: "-ung → 阴性", level: "A2", tags: ["familie"] },
        { de: "zusammenpassen", gender: "可分", plural: "", zh: "合得来 / 相配", example: "Die zwei **passen** gut **zusammen**.", exampleZh: "这两人很合得来。", note: "可分 passt…zusammen", level: "A2", tags: ["familie", "trennbar"] },
        { de: "Kindererziehung", gender: "die", plural: "", zh: "育儿 / 子女教育", example: "Die **Kindererziehung** ist nicht leicht.", exampleZh: "育儿不容易。", note: "die(无复数)", level: "A2", tags: ["familie"] },
        { de: "Arbeitskraft", gender: "die", plural: "¨e (-kräfte)", zh: "劳动力", example: "Wir brauchen mehr **Arbeitskraft**.", exampleZh: "我们需要更多劳动力。", note: "die Arbeitskraft(pl. -kräfte)", level: "A2", tags: ["familie"] },
        { de: "mysteriös", gender: "形", plural: "", zh: "神秘的", example: "Der Film ist sehr **mysteriös**.", exampleZh: "这部电影很神秘。", note: "mysteriös", level: "A2", tags: ["familie"] },
        { de: "vermissen", gender: "动", plural: "", zh: "想念", example: "Ich **vermisse** meine Familie.", exampleZh: "我想念我的家人。", note: "vermissen + A;不可分", level: "A2", tags: ["familie"] },
        { de: "Sorge", gender: "die", plural: "-n", zh: "担忧", example: "Mach dir keine **Sorgen**!", exampleZh: "别担心!", note: "die Sorge, -n;sich Sorgen machen um + A", level: "A2", tags: ["familie"] },
        { de: "befragen", gender: "动", plural: "", zh: "问询", example: "Die Polizei **befragt** den Mann.", exampleZh: "警察问询那个男人。", note: "befragen + A;不可分", level: "A2", tags: ["familie"] },
        { de: "reagieren", gender: "动", plural: "", zh: "作出反应", example: "Wie **reagierst** du darauf?", exampleZh: "你对此作何反应?", note: "reagieren auf + A", level: "A2", tags: ["familie"] },
        { de: "auftauchen", gender: "可分", plural: "", zh: "出现 / 冒出", example: "Plötzlich **taucht** er **auf**.", exampleZh: "他突然出现了。", note: "可分;ist aufgetaucht", level: "A2", tags: ["familie", "trennbar"] },
        { de: "alleinerziehend", gender: "形", plural: "", zh: "单亲的", example: "Sie ist eine **alleinerziehende** Mutter.", exampleZh: "她是单亲妈妈。", note: "alleinerziehend", level: "A2", tags: ["familie"] },
        { de: "Feier", gender: "die", plural: "-n", zh: "庆祝活动", example: "Die **Feier** beginnt um acht.", exampleZh: "庆祝活动八点开始。", note: "die Feier, -n", level: "A2", tags: ["familie"] },
        { de: "Studentenzeit", gender: "die", plural: "", zh: "大学时光", example: "In meiner **Studentenzeit** war ich oft müde.", exampleZh: "大学时我常很累。", note: "die(无复数)", level: "A2", tags: ["familie"] },
        { de: "Taufe", gender: "die", plural: "-n", zh: "洗礼", example: "Wir gehen zur **Taufe** des Babys.", exampleZh: "我们去参加婴儿的洗礼。", note: "die Taufe, -n", level: "A2", tags: ["familie"] },
        { de: "Einzug", gender: "der", plural: "¨e (Einzüge)", zh: "搬入", example: "Der **Einzug** ins neue Haus war schön.", exampleZh: "搬进新家很愉快。", note: "der Einzug ↔ der Auszug", level: "A2", tags: ["familie"] },
        { de: "Lebensform", gender: "die", plural: "-en", zh: "生活方式", example: "Die Familie ist eine **Lebensform**.", exampleZh: "家庭是一种生活方式。", note: "-form → 阴性", level: "A2", tags: ["familie"] },
        { de: "einsam", gender: "形", plural: "", zh: "孤独的", example: "Im Winter fühle ich mich oft **einsam**.", exampleZh: "冬天我常感到孤独。", note: "einsam", level: "A2", tags: ["familie"] },
        { de: "Fell", gender: "das", plural: "-e", zh: "毛皮", example: "Die Katze hat weiches **Fell**.", exampleZh: "这只猫毛很软。", note: "das Fell, -e", level: "A2", tags: ["familie"] },
        { de: "Standesamt", gender: "das", plural: "¨er", zh: "户籍登记处", example: "Sie heiraten auf dem **Standesamt**.", exampleZh: "他们在户籍登记处结婚。", note: "das Standesamt, ¨er", level: "A2", tags: ["familie"] },
        { de: "Informatik", gender: "die", plural: "", zh: "计算机科学", example: "Er studiert **Informatik**.", exampleZh: "他学计算机科学。", note: "die(无复数)", level: "A2", tags: ["familie"] },
        { de: "sich fühlen", gender: "反身", plural: "", zh: "感觉", example: "Ich **fühle mich** heute gut.", exampleZh: "我今天感觉很好。", note: "反身 sich fühlen + 形容词", level: "A2", tags: ["familie", "reflexiv"] },
        { de: "Ordnung", gender: "die", plural: "-en", zh: "秩序 / 整齐", example: "In meinem Zimmer herrscht **Ordnung**.", exampleZh: "我房间井井有条。", note: "die Ordnung;in Ordnung", level: "A2", tags: ["familie"] },
        { de: "Aufenthalt", gender: "der", plural: "-e", zh: "停留 / 逗留", example: "Mein **Aufenthalt** in Wien war kurz.", exampleZh: "我在维也纳停留很短。", note: "der Aufenthalt, -e", level: "A2", tags: ["familie"] },
        { de: "Hälfte", gender: "die", plural: "-n", zh: "一半", example: "Die **Hälfte** der Klasse fehlt.", exampleZh: "班上一半人没来。", note: "die Hälfte, -n", level: "A2", tags: ["familie"] },
        { de: "kostenlos", gender: "形", plural: "", zh: "免费的", example: "Der Eintritt ist **kostenlos**.", exampleZh: "入场免费。", note: "= gratis", level: "A2", tags: ["familie"] },
        { de: "etwa", gender: "副", plural: "", zh: "大约", example: "Es kostet **etwa** zehn Euro.", exampleZh: "大约十欧元。", note: "etwa = ungefähr", level: "A2", tags: ["familie"] },
        { de: "Cousin", gender: "der", plural: "-s", zh: "表 / 堂兄弟", example: "Mein **Cousin** kommt aus Paris.", exampleZh: "我表哥来自巴黎。", note: "der Cousin, -s(法语借词)", level: "A2", tags: ["familie"] },
        { de: "Abschnitt", gender: "der", plural: "-e", zh: "段落 / 段", example: "Lies den ersten **Abschnitt**!", exampleZh: "读第一段!", note: "der Abschnitt, -e", level: "A2", tags: ["familie"] },
        { de: "Pfote", gender: "die", plural: "-n", zh: "爪子", example: "Der Hund gibt mir seine **Pfote**.", exampleZh: "狗把爪子递给我。", note: "die Pfote, -n", level: "A2", tags: ["familie"] }
      ]
    },

    {
      id: "a2-l3", level: "A2", lesson: "L3", theme: "Unterwegs 在路上·出行",
      source: "A2 例句背词", date: "2026-06-28",
      words: [
        { de: "äußern", gender: "动", plural: "", zh: "表达", example: "Darf ich meine Meinung **äußern**?", exampleZh: "我可以表达我的意见吗?", note: "sich äußern zu + D;äußern + A", level: "A2", tags: ["unterwegs"] },
        { de: "Zugfahrt", gender: "die", plural: "-en", zh: "火车旅程", example: "Die **Zugfahrt** dauert drei Stunden.", exampleZh: "这趟火车要三小时。", note: "die Zugfahrt, -en", level: "A2", tags: ["unterwegs"] },
        { de: "Reisepass", gender: "der", plural: "¨e (-pässe)", zh: "护照", example: "Ich habe meinen **Reisepass** vergessen.", exampleZh: "我忘带护照了。", note: "der Reisepass, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Zahnbürste", gender: "die", plural: "-n", zh: "牙刷", example: "Meine **Zahnbürste** ist blau.", exampleZh: "我的牙刷是蓝色的。", note: "die Zahnbürste, -n", level: "A2", tags: ["unterwegs"] },
        { de: "Schlüssel", gender: "der", plural: "-", zh: "钥匙", example: "Wo ist mein **Schlüssel**?", exampleZh: "我的钥匙在哪?", note: "der Schlüssel, -", level: "A2", tags: ["unterwegs"] },
        { de: "Regenschirm", gender: "der", plural: "-e", zh: "雨伞", example: "Nimm den **Regenschirm** mit!", exampleZh: "带上雨伞!", note: "der Regenschirm, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Sonnenbrille", gender: "die", plural: "-n", zh: "太阳镜", example: "Im Sommer trage ich eine **Sonnenbrille**.", exampleZh: "夏天我戴太阳镜。", note: "die Sonnenbrille, -n", level: "A2", tags: ["unterwegs"] },
        { de: "Postkarte", gender: "die", plural: "-n", zh: "明信片", example: "Ich schreibe dir eine **Postkarte**.", exampleZh: "我给你写张明信片。", note: "die Postkarte, -n", level: "A2", tags: ["unterwegs"] },
        { de: "beruflich", gender: "形", plural: "", zh: "因公 / 职业上", example: "Ich bin **beruflich** in Wien.", exampleZh: "我因公在维也纳。", note: "beruflich", level: "A2", tags: ["unterwegs"] },
        { de: "Verkehrsmittel", gender: "das", plural: "-", zh: "交通工具", example: "Der Bus ist ein **Verkehrsmittel**.", exampleZh: "公交是一种交通工具。", note: "das Verkehrsmittel, -", level: "A2", tags: ["unterwegs"] },
        { de: "wahrscheinlich", gender: "副", plural: "", zh: "很可能", example: "Morgen regnet es **wahrscheinlich**.", exampleZh: "明天很可能下雨。", note: "wahrscheinlich", level: "A2", tags: ["unterwegs"] },
        { de: "selten", gender: "副", plural: "", zh: "很少", example: "Ich trinke **selten** Kaffee.", exampleZh: "我很少喝咖啡。", note: "selten ↔ oft", level: "A2", tags: ["unterwegs"] },
        { de: "Verbindung", gender: "die", plural: "-en", zh: "班次 / 连接", example: "Es gibt eine gute **Verbindung** nach Graz.", exampleZh: "去格拉茨有便捷班次。", note: "-ung → 阴性", level: "A2", tags: ["unterwegs"] },
        { de: "planmäßig", gender: "形", plural: "", zh: "准点的", example: "Der Zug kommt **planmäßig** an.", exampleZh: "火车准点到。", note: "planmäßig = pünktlich", level: "A2", tags: ["unterwegs"] },
        { de: "Umsteigezeit", gender: "die", plural: "-en", zh: "换乘时间", example: "Die **Umsteigezeit** ist sehr kurz.", exampleZh: "换乘时间很短。", note: "die Umsteigezeit, -en", level: "A2", tags: ["unterwegs"] },
        { de: "ankommen", gender: "可分", plural: "", zh: "到达", example: "Wir **kommen** um sechs **an**.", exampleZh: "我们六点到。", note: "可分;ist angekommen", level: "A2", tags: ["unterwegs", "trennbar"] },
        { de: "ausdrucken", gender: "可分", plural: "", zh: "打印出来", example: "Ich muss das Ticket **ausdrucken**.", exampleZh: "我得把票打印出来。", note: "可分 druckt…aus", level: "A2", tags: ["unterwegs", "trennbar"] },
        { de: "Hinfahrt", gender: "die", plural: "-en", zh: "去程", example: "Die **Hinfahrt** war angenehm.", exampleZh: "去程很舒适。", note: "die Hinfahrt ↔ die Rückfahrt", level: "A2", tags: ["unterwegs"] },
        { de: "Rückflug", gender: "der", plural: "¨e (-flüge)", zh: "返程航班", example: "Mein **Rückflug** ist am Sonntag.", exampleZh: "我的返程航班在周日。", note: "der Rückflug, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Fahrplan", gender: "der", plural: "¨e (-pläne)", zh: "时刻表", example: "Schau auf den **Fahrplan**!", exampleZh: "看一下时刻表!", note: "der Fahrplan, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Gleis", gender: "das", plural: "-e", zh: "站台 / 轨道", example: "Der Zug fährt von **Gleis** drei.", exampleZh: "火车从三号站台开。", note: "das Gleis, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Fußweg", gender: "der", plural: "-e", zh: "步行路", example: "Der **Fußweg** dauert zehn Minuten.", exampleZh: "步行要十分钟。", note: "der Fußweg, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Nachricht", gender: "die", plural: "-en", zh: "消息", example: "Ich habe eine gute **Nachricht**.", exampleZh: "我有个好消息。", note: "die Nachricht, -en", level: "A2", tags: ["unterwegs"] },
        { de: "sofort", gender: "副", plural: "", zh: "马上", example: "Komm **sofort** her!", exampleZh: "马上过来!", note: "sofort = gleich", level: "A2", tags: ["unterwegs"] },
        { de: "Stillstand", gender: "der", plural: "", zh: "停滞", example: "Der Verkehr ist im **Stillstand**.", exampleZh: "交通陷入停滞。", note: "der Stillstand(无复数)", level: "A2", tags: ["unterwegs"] },
        { de: "schwierig", gender: "形", plural: "", zh: "难的", example: "Diese Frage ist sehr **schwierig**.", exampleZh: "这个问题很难。", note: "schwierig = schwer", level: "A2", tags: ["unterwegs"] },
        { de: "Entscheidung", gender: "die", plural: "-en", zh: "决定", example: "Das ist eine wichtige **Entscheidung**.", exampleZh: "这是个重要决定。", note: "eine Entscheidung treffen", level: "A2", tags: ["unterwegs"] },
        { de: "beschließen", gender: "动", plural: "", zh: "决定", example: "Wir **beschließen** zu bleiben.", exampleZh: "我们决定留下。", note: "不可分;hat beschlossen", level: "A2", tags: ["unterwegs"] },
        { de: "verzichten", gender: "动", plural: "", zh: "放弃", example: "Ich **verzichte** auf Zucker.", exampleZh: "我不吃糖了。", note: "verzichten auf + A", level: "A2", tags: ["unterwegs"] },
        { de: "vorhaben", gender: "可分", plural: "", zh: "打算", example: "Was **hast** du heute **vor**?", exampleZh: "你今天打算做什么?", note: "可分 hat…vor", level: "A2", tags: ["unterwegs", "trennbar"] },
        { de: "Vermutung", gender: "die", plural: "-en", zh: "猜测", example: "Das ist nur eine **Vermutung**.", exampleZh: "这只是个猜测。", note: "-ung → 阴性", level: "A2", tags: ["unterwegs"] },
        { de: "Gesundheitswesen", gender: "das", plural: "", zh: "医疗体系", example: "Das **Gesundheitswesen** ist hier gut.", exampleZh: "这里的医疗体系很好。", note: "das(无复数)", level: "A2", tags: ["unterwegs"] },
        { de: "Halt", gender: "der", plural: "-s", zh: "停靠站", example: "Der nächste **Halt** ist der Bahnhof.", exampleZh: "下一站是火车站。", note: "der Halt, -s", level: "A2", tags: ["unterwegs"] },
        { de: "Rundreise", gender: "die", plural: "-n", zh: "环游", example: "Wir machen eine **Rundreise** durch Italien.", exampleZh: "我们环游意大利。", note: "die Rundreise, -n", level: "A2", tags: ["unterwegs"] },
        { de: "Kuss", gender: "der", plural: "¨e (Küsse)", zh: "吻", example: "Sie gibt ihm einen **Kuss**.", exampleZh: "她吻了他一下。", note: "der Kuss, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Spaziergänger", gender: "der", plural: "-", zh: "散步者", example: "Im Park sieht man viele **Spaziergänger**.", exampleZh: "公园里有很多散步的人。", note: "女 -in", level: "A2", tags: ["unterwegs"] },
        { de: "Zelt", gender: "das", plural: "-e", zh: "帐篷", example: "Wir schlafen im **Zelt**.", exampleZh: "我们睡在帐篷里。", note: "das Zelt, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Abenteuerurlaub", gender: "der", plural: "-e", zh: "探险假期", example: "Ein **Abenteuerurlaub** ist nichts für mich.", exampleZh: "探险假期不适合我。", note: "der Abenteuerurlaub, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Gegenstand", gender: "der", plural: "¨e (-stände)", zh: "物品 / 物体", example: "Was ist das für ein **Gegenstand**?", exampleZh: "这是个什么东西?", note: "der Gegenstand, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Gegensatz", gender: "der", plural: "¨e (-sätze)", zh: "相反 / 对立", example: "Im **Gegensatz** zu dir mag ich Tee.", exampleZh: "和你相反,我喜欢茶。", note: "im Gegensatz zu + D", level: "A2", tags: ["unterwegs"] },
        { de: "zurückfahren", gender: "可分", plural: "", zh: "返回", example: "Wann **fährst** du **zurück**?", exampleZh: "你什么时候回去?", note: "可分;ist zurückgefahren", level: "A2", tags: ["unterwegs", "trennbar"] },
        { de: "Radfahrer", gender: "der", plural: "-", zh: "骑车人", example: "Der **Radfahrer** fährt schnell.", exampleZh: "那个骑车人骑得很快。", note: "女 -in", level: "A2", tags: ["unterwegs"] },
        { de: "Pool", gender: "der", plural: "-s", zh: "泳池", example: "Das Hotel hat einen **Pool**.", exampleZh: "酒店有个泳池。", note: "der Pool, -s", level: "A2", tags: ["unterwegs"] },
        { de: "Reiseverbindung", gender: "die", plural: "-en", zh: "行程班次", example: "Ich suche eine **Reiseverbindung** nach Rom.", exampleZh: "我找去罗马的行程班次。", note: "die Reiseverbindung, -en", level: "A2", tags: ["unterwegs"] },
        { de: "Konferenz", gender: "die", plural: "-en", zh: "会议", example: "Die **Konferenz** ist am Montag.", exampleZh: "会议在周一。", note: "-enz → 阴性", level: "A2", tags: ["unterwegs"] },
        { de: "Notiz", gender: "die", plural: "-en", zh: "笔记", example: "Ich mache eine **Notiz**.", exampleZh: "我记个笔记。", note: "die Notiz, -en", level: "A2", tags: ["unterwegs"] },
        { de: "Katalog", gender: "der", plural: "-e", zh: "目录", example: "Schick mir den **Katalog**!", exampleZh: "把目录寄给我!", note: "der Katalog, -e", level: "A2", tags: ["unterwegs"] },
        { de: "Klasse", gender: "die", plural: "-n", zh: "舱 / 班级 / 等级", example: "Ich fahre erster **Klasse**.", exampleZh: "我坐头等舱。", note: "die Klasse, -n", level: "A2", tags: ["unterwegs"] },
        { de: "Sitzplatz", gender: "der", plural: "¨e (-plätze)", zh: "座位", example: "Ist dieser **Sitzplatz** frei?", exampleZh: "这个座位空着吗?", note: "der Sitzplatz, ¨e", level: "A2", tags: ["unterwegs"] },
        { de: "Busfahrt", gender: "die", plural: "-en", zh: "公交车程", example: "Die **Busfahrt** war lang.", exampleZh: "这趟公交车程很长。", note: "die Busfahrt, -en", level: "A2", tags: ["unterwegs"] }
      ]
    },

    {
      id: "a2-l4", level: "A2", lesson: "L4", theme: "Freizeit und Hobby 休闲与爱好",
      source: "A2 例句背词", date: "2026-06-28",
      words: [
        { de: "positiv", gender: "形", plural: "", zh: "积极的", example: "Sei **positiv**!", exampleZh: "积极点!", note: "positiv ↔ negativ", level: "A2", tags: ["freizeit"] },
        { de: "negativ", gender: "形", plural: "", zh: "否定 / 消极的", example: "Seine Antwort war **negativ**.", exampleZh: "他的回答是否定的。", note: "negativ", level: "A2", tags: ["freizeit"] },
        { de: "ausdrücken", gender: "可分", plural: "", zh: "表达", example: "Ich kann das schwer **ausdrücken**.", exampleZh: "我很难表达这个。", note: "可分 drückt…aus;sich ausdrücken", level: "A2", tags: ["freizeit", "trennbar"] },
        { de: "Marathon", gender: "der", plural: "-s", zh: "马拉松", example: "Er läuft einen **Marathon**.", exampleZh: "他跑马拉松。", note: "der Marathon, -s", level: "A2", tags: ["freizeit"] },
        { de: "wandern", gender: "动", plural: "", zh: "徒步", example: "Am Sonntag **wandern** wir.", exampleZh: "周日我们去徒步。", note: "ist gewandert(位移用 sein)", level: "A2", tags: ["freizeit"] },
        { de: "Fitness", gender: "die", plural: "", zh: "体能", example: "Ich mache viel für meine **Fitness**.", exampleZh: "我为体能下了很多功夫。", note: "die Fitness(无复数)", level: "A2", tags: ["freizeit"] },
        { de: "verbessern", gender: "动", plural: "", zh: "提高 / 改善", example: "Ich will mein Deutsch **verbessern**.", exampleZh: "我想提高我的德语。", note: "不可分;hat verbessert", level: "A2", tags: ["freizeit"] },
        { de: "Strecke", gender: "die", plural: "-n", zh: "路程 / 路段", example: "Die **Strecke** ist zehn Kilometer lang.", exampleZh: "这段路程十公里长。", note: "die Strecke, -n", level: "A2", tags: ["freizeit"] },
        { de: "insgesamt", gender: "副", plural: "", zh: "一共", example: "Wir sind **insgesamt** zehn Leute.", exampleZh: "我们一共十人。", note: "insgesamt", level: "A2", tags: ["freizeit"] },
        { de: "Briefmarke", gender: "die", plural: "-n", zh: "邮票", example: "Ich brauche eine **Briefmarke**.", exampleZh: "我需要一张邮票。", note: "die Briefmarke, -n", level: "A2", tags: ["freizeit"] },
        { de: "Forschung", gender: "die", plural: "-en", zh: "研究", example: "Die **Forschung** dauert Jahre.", exampleZh: "这项研究要好几年。", note: "-ung → 阴性", level: "A2", tags: ["freizeit"] },
        { de: "aktuell", gender: "形", plural: "", zh: "时新的 / 当前的", example: "Das Thema ist sehr **aktuell**.", exampleZh: "这个话题很时新。", note: "aktuell", level: "A2", tags: ["freizeit"] },
        { de: "Nummer", gender: "die", plural: "-n", zh: "号码", example: "Wie ist deine **Nummer**?", exampleZh: "你的号码是多少?", note: "die Nummer, -n", level: "A2", tags: ["freizeit"] },
        { de: "vorstellen", gender: "可分", plural: "", zh: "介绍", example: "Darf ich mich **vorstellen**?", exampleZh: "我可以自我介绍吗?", note: "可分 stellt…vor;sich vorstellen", level: "A2", tags: ["freizeit", "trennbar"] },
        { de: "teilnehmen", gender: "可分", plural: "", zh: "参加", example: "Ich **nehme** am Kurs **teil**.", exampleZh: "我参加这门课。", note: "可分;teilnehmen an + D", level: "A2", tags: ["freizeit", "trennbar"] },
        { de: "Studie", gender: "die", plural: "-n", zh: "研究 / 调研", example: "Eine neue **Studie** zeigt das.", exampleZh: "一项新研究表明这点。", note: "die Studie, -n", level: "A2", tags: ["freizeit"] },
        { de: "Freizeitaktivität", gender: "die", plural: "-en", zh: "休闲活动", example: "Lesen ist meine liebste **Freizeitaktivität**.", exampleZh: "阅读是我最爱的休闲活动。", note: "-tät → 阴性", level: "A2", tags: ["freizeit"] },
        { de: "regelmäßig", gender: "形", plural: "", zh: "定期的", example: "Ich gehe **regelmäßig** schwimmen.", exampleZh: "我定期去游泳。", note: "regelmäßig ↔ unregelmäßig", level: "A2", tags: ["freizeit"] },
        { de: "sich unterhalten", gender: "反身", plural: "", zh: "聊天", example: "Wir **unterhalten uns** gern.", exampleZh: "我们喜欢聊天。", note: "sich unterhalten über + A;unterhält", level: "A2", tags: ["freizeit", "reflexiv"] },
        { de: "Freizeitmedium", gender: "das", plural: "(-medien)", zh: "休闲媒体", example: "Das Handy ist ein **Freizeitmedium**.", exampleZh: "手机是一种休闲媒体。", note: "pl. -medien", level: "A2", tags: ["freizeit"] },
        { de: "Internet", gender: "das", plural: "", zh: "网络", example: "Ich suche es im **Internet**.", exampleZh: "我在网上找它。", note: "das Internet", level: "A2", tags: ["freizeit"] },
        { de: "Alltag", gender: "der", plural: "", zh: "日常", example: "Der **Alltag** ist oft stressig.", exampleZh: "日常常常很有压力。", note: "der Alltag(无复数)", level: "A2", tags: ["freizeit"] },
        { de: "stressig", gender: "形", plural: "", zh: "有压力的", example: "Mein Job ist sehr **stressig**.", exampleZh: "我的工作压力很大。", note: "stressig", level: "A2", tags: ["freizeit"] },
        { de: "ausschlafen", gender: "可分", plural: "", zh: "睡够", example: "Am Wochenende will ich **ausschlafen**.", exampleZh: "周末我想睡个够。", note: "可分 schläft…aus", level: "A2", tags: ["freizeit", "trennbar"] },
        { de: "Erholung", gender: "die", plural: "", zh: "放松 / 休养", example: "Urlaub dient der **Erholung**.", exampleZh: "假期是为了放松。", note: "die Erholung(无复数)", level: "A2", tags: ["freizeit"] },
        { de: "sozial", gender: "形", plural: "", zh: "社会的", example: "Er hat ein **soziales** Engagement.", exampleZh: "他有社会担当。", note: "sozial", level: "A2", tags: ["freizeit"] },
        { de: "fortsetzen", gender: "可分", plural: "", zh: "继续", example: "Wir **setzen** die Arbeit **fort**.", exampleZh: "我们继续工作。", note: "可分 setzt…fort", level: "A2", tags: ["freizeit", "trennbar"] },
        { de: "sparen", gender: "动", plural: "", zh: "存(钱) / 节省", example: "Ich **spare** für ein Auto.", exampleZh: "我为买车存钱。", note: "sparen für / auf + A", level: "A2", tags: ["freizeit"] },
        { de: "Schwimmbad", gender: "das", plural: "¨er (-bäder)", zh: "游泳馆", example: "Das **Schwimmbad** ist heute zu.", exampleZh: "游泳馆今天关门。", note: "das Schwimmbad, pl. -bäder", level: "A2", tags: ["freizeit"] },
        { de: "Interesse", gender: "das", plural: "-n", zh: "兴趣", example: "Ich habe **Interesse** an Musik.", exampleZh: "我对音乐有兴趣。", note: "Interesse an + D", level: "A2", tags: ["freizeit"] },
        { de: "Politik", gender: "die", plural: "", zh: "政治", example: "Sie spricht oft über **Politik**.", exampleZh: "她常谈政治。", note: "die Politik(无复数)", level: "A2", tags: ["freizeit"] },
        { de: "ungesund", gender: "形", plural: "", zh: "不健康的", example: "Rauchen ist **ungesund**.", exampleZh: "抽烟不健康。", note: "un- ↔ gesund", level: "A2", tags: ["freizeit"] },
        { de: "Verein", gender: "der", plural: "-e", zh: "社团 / 协会", example: "Ich bin in einem **Verein**.", exampleZh: "我在一个社团里。", note: "der Verein, -e", level: "A2", tags: ["freizeit"] },
        { de: "Fest", gender: "das", plural: "-e", zh: "节庆", example: "Heute ist ein großes **Fest**.", exampleZh: "今天有个大节庆。", note: "das Fest, -e", level: "A2", tags: ["freizeit"] },
        { de: "renovieren", gender: "动", plural: "", zh: "翻修", example: "Wir **renovieren** die Küche.", exampleZh: "我们翻修厨房。", note: "hat renoviert", level: "A2", tags: ["freizeit"] },
        { de: "politisch", gender: "形", plural: "", zh: "政治的", example: "Das ist eine **politische** Frage.", exampleZh: "这是个政治问题。", note: "politisch", level: "A2", tags: ["freizeit"] },
        { de: "verbieten", gender: "动", plural: "", zh: "禁止", example: "Eltern **verbieten** das oft.", exampleZh: "父母常禁止这个。", note: "不可分;hat verboten", level: "A2", tags: ["freizeit"] },
        { de: "Einwohner", gender: "der", plural: "-", zh: "居民", example: "Wien hat viele **Einwohner**.", exampleZh: "维也纳有很多居民。", note: "-er 阳;女 -in", level: "A2", tags: ["freizeit"] },
        { de: "mindestens", gender: "副", plural: "", zh: "至少", example: "Es dauert **mindestens** eine Stunde.", exampleZh: "至少要一小时。", note: "mindestens ↔ höchstens", level: "A2", tags: ["freizeit"] },
        { de: "Tischtennis", gender: "das", plural: "", zh: "乒乓球", example: "Wir spielen **Tischtennis**.", exampleZh: "我们打乒乓球。", note: "das Tischtennis", level: "A2", tags: ["freizeit"] },
        { de: "verbringen", gender: "动", plural: "", zh: "度过", example: "Ich **verbringe** den Sommer hier.", exampleZh: "我在这里度过夏天。", note: "不可分;hat verbracht", level: "A2", tags: ["freizeit"] },
        { de: "niemand", gender: "代词", plural: "", zh: "没人", example: "**Niemand** ist zu Hause.", exampleZh: "没人在家。", note: "niemand ↔ jemand", level: "A2", tags: ["freizeit"] },
        { de: "Ende", gender: "das", plural: "-n", zh: "结束 / 末尾", example: "Am **Ende** war alles gut.", exampleZh: "最后一切都好。", note: "das Ende;am Ende", level: "A2", tags: ["freizeit"] },
        { de: "Spiel", gender: "das", plural: "-e", zh: "比赛 / 游戏", example: "Das **Spiel** beginnt gleich.", exampleZh: "比赛马上开始。", note: "das Spiel, -e", level: "A2", tags: ["freizeit"] },
        { de: "wütend", gender: "形", plural: "", zh: "生气的", example: "Warum bist du so **wütend**?", exampleZh: "你为什么这么生气?", note: "wütend auf + A", level: "A2", tags: ["freizeit"] },
        { de: "putzen", gender: "动", plural: "", zh: "擦 / 打扫", example: "Ich **putze** die Fenster.", exampleZh: "我擦窗户。", note: "putzen + A", level: "A2", tags: ["freizeit"] },
        { de: "Reaktion", gender: "die", plural: "-en", zh: "反应", example: "Seine **Reaktion** war schnell.", exampleZh: "他的反应很快。", note: "-tion → 阴性", level: "A2", tags: ["freizeit"] },
        { de: "Katastrophe", gender: "die", plural: "-n", zh: "灾难", example: "Das war eine **Katastrophe**.", exampleZh: "那是场灾难。", note: "die Katastrophe, -n", level: "A2", tags: ["freizeit"] },
        { de: "erzählen", gender: "动", plural: "", zh: "讲述", example: "**Erzähl** mir davon!", exampleZh: "给我讲讲这件事!", note: "不可分;erzählen von + D", level: "A2", tags: ["freizeit"] },
        { de: "traurig", gender: "形", plural: "", zh: "难过的", example: "Der Film macht mich **traurig**.", exampleZh: "这部电影让我难过。", note: "traurig über + A", level: "A2", tags: ["freizeit"] }
      ]
    },

    {
      id: "a2-l5", level: "A2", lesson: "L5", theme: "Medien im Alltag 日常媒体",
      source: "A2 例句背词", date: "2026-06-28",
      words: [
        { de: "Zeitung", gender: "die", plural: "-en", zh: "报纸", example: "Ich lese jeden Tag die **Zeitung**.", exampleZh: "我每天读报。", note: "die Zeitung, -en", level: "A2", tags: ["medien"] },
        { de: "Digitalkamera", gender: "die", plural: "-s", zh: "数码相机", example: "Meine **Digitalkamera** ist neu.", exampleZh: "我的数码相机是新的。", note: "die Digitalkamera, -s", level: "A2", tags: ["medien"] },
        { de: "bearbeiten", gender: "动", plural: "", zh: "处理 / 加工", example: "Ich **bearbeite** das Foto.", exampleZh: "我处理这张照片。", note: "不可分;hat bearbeitet", level: "A2", tags: ["medien"] },
        { de: "downloaden", gender: "动", plural: "", zh: "下载", example: "Ich **downloade** die App.", exampleZh: "我下载这个应用。", note: "规则;英语借词", level: "A2", tags: ["medien"] },
        { de: "Umschlag", gender: "der", plural: "¨e (-schläge)", zh: "信封", example: "Der Brief ist im **Umschlag**.", exampleZh: "信在信封里。", note: "der Umschlag, ¨e", level: "A2", tags: ["medien"] },
        { de: "Adresse", gender: "die", plural: "-n", zh: "地址", example: "Wie ist deine **Adresse**?", exampleZh: "你的地址是?", note: "die Adresse, -n", level: "A2", tags: ["medien"] },
        { de: "Briefkasten", gender: "der", plural: "¨ (-kästen)", zh: "信箱", example: "Der **Briefkasten** ist leer.", exampleZh: "信箱是空的。", note: "der Briefkasten, pl. -kästen", level: "A2", tags: ["medien"] },
        { de: "Absender", gender: "der", plural: "-", zh: "寄件人", example: "Wer ist der **Absender**?", exampleZh: "寄件人是谁?", note: "↔ der Empfänger", level: "A2", tags: ["medien"] },
        { de: "stecken", gender: "动", plural: "", zh: "插着 / 处于", example: "Der Schlüssel **steckt** in der Tür.", exampleZh: "钥匙插在门上。", note: "stecken(处于 / 插着)", level: "A2", tags: ["medien"] },
        { de: "Post", gender: "die", plural: "", zh: "邮局 / 邮件", example: "Ich gehe zur **Post**.", exampleZh: "我去邮局。", note: "die Post(无复数)", level: "A2", tags: ["medien"] },
        { de: "Antwort", gender: "die", plural: "-en", zh: "回答", example: "Ich warte auf deine **Antwort**.", exampleZh: "我等你的回答。", note: "Antwort auf + A", level: "A2", tags: ["medien"] },
        { de: "Vergessen", gender: "das", plural: "", zh: "遗忘", example: "Das **Vergessen** ist menschlich.", exampleZh: "遗忘是人之常情。", note: "动词变名词,中性 das", level: "A2", tags: ["medien"] },
        { de: "vorbeilaufen", gender: "可分", plural: "", zh: "走过 / 路过", example: "Ich **laufe** schnell **vorbei**.", exampleZh: "我快步走过。", note: "可分;ist vorbeigelaufen", level: "A2", tags: ["medien", "trennbar"] },
        { de: "ausziehen", gender: "可分", plural: "", zh: "脱 / 搬出", example: "Ich **ziehe** die Schuhe **aus**.", exampleZh: "我脱掉鞋。", note: "可分 zieht…aus", level: "A2", tags: ["medien", "trennbar"] },
        { de: "Telefonnummer", gender: "die", plural: "-n", zh: "电话号码", example: "Gib mir deine **Telefonnummer**!", exampleZh: "把电话号码给我!", note: "die Telefonnummer, -n", level: "A2", tags: ["medien"] },
        { de: "Passwort", gender: "das", plural: "¨er (-wörter)", zh: "密码", example: "Ich habe mein **Passwort** vergessen.", exampleZh: "我忘了密码。", note: "das Passwort, pl. -wörter", level: "A2", tags: ["medien"] },
        { de: "Funktion", gender: "die", plural: "-en", zh: "功能", example: "Diese **Funktion** ist neu.", exampleZh: "这个功能是新的。", note: "-tion → 阴性", level: "A2", tags: ["medien"] },
        { de: "nutzen", gender: "动", plural: "", zh: "使用 / 利用", example: "Ich **nutze** den Bus oft.", exampleZh: "我常坐公交。", note: "nutzen + A", level: "A2", tags: ["medien"] },
        { de: "mehrmals", gender: "副", plural: "", zh: "好几次", example: "Ich habe **mehrmals** angerufen.", exampleZh: "我打了好几次电话。", note: "mehrmals", level: "A2", tags: ["medien"] },
        { de: "schicken", gender: "动", plural: "", zh: "寄 / 发送", example: "Ich **schicke** dir das Foto.", exampleZh: "我把照片发给你。", note: "schicken + D + A", level: "A2", tags: ["medien"] },
        { de: "Verkehr", gender: "der", plural: "", zh: "交通", example: "Der **Verkehr** ist heute schlecht.", exampleZh: "今天交通很糟。", note: "der Verkehr(无复数)", level: "A2", tags: ["medien"] },
        { de: "Video", gender: "das", plural: "-s", zh: "视频", example: "Schau dir das **Video** an!", exampleZh: "看看这个视频!", note: "das Video, -s", level: "A2", tags: ["medien"] },
        { de: "verschicken", gender: "动", plural: "", zh: "寄出", example: "Ich **verschicke** die Briefe.", exampleZh: "我把信寄出去。", note: "不可分;hat verschickt", level: "A2", tags: ["medien"] },
        { de: "besprechen", gender: "动", plural: "", zh: "讨论", example: "Wir **besprechen** das Problem.", exampleZh: "我们讨论这个问题。", note: "不可分;bespricht;hat besprochen", level: "A2", tags: ["medien"] },
        { de: "Vorschlag", gender: "der", plural: "¨e (-schläge)", zh: "建议", example: "Ich habe einen **Vorschlag**.", exampleZh: "我有个建议。", note: "einen Vorschlag machen", level: "A2", tags: ["medien"] },
        { de: "Erinnerung", gender: "die", plural: "-en", zh: "回忆", example: "Das ist eine schöne **Erinnerung**.", exampleZh: "这是个美好的回忆。", note: "Erinnerung an + A", level: "A2", tags: ["medien"] },
        { de: "Abschied", gender: "der", plural: "-e", zh: "告别", example: "Der **Abschied** war schwer.", exampleZh: "告别很艰难。", note: "Abschied nehmen von + D", level: "A2", tags: ["medien"] },
        { de: "häufig", gender: "副", plural: "", zh: "经常", example: "Das passiert **häufig**.", exampleZh: "这经常发生。", note: "häufig = oft", level: "A2", tags: ["medien"] },
        { de: "hauptsächlich", gender: "副", plural: "", zh: "主要", example: "Ich esse **hauptsächlich** Gemüse.", exampleZh: "我主要吃蔬菜。", note: "hauptsächlich", level: "A2", tags: ["medien"] },
        { de: "Lebensmittel", gender: "das", plural: "-", zh: "食品", example: "Brot ist ein **Lebensmittel**.", exampleZh: "面包是一种食品。", note: "das Lebensmittel, -", level: "A2", tags: ["medien"] },
        { de: "Interview", gender: "das", plural: "-s", zh: "采访", example: "Er gibt ein **Interview**.", exampleZh: "他接受一个采访。", note: "das Interview, -s", level: "A2", tags: ["medien"] },
        { de: "praktisch", gender: "形", plural: "", zh: "实用的", example: "Diese Tasche ist sehr **praktisch**.", exampleZh: "这个包很实用。", note: "praktisch", level: "A2", tags: ["medien"] },
        { de: "Buchung", gender: "die", plural: "-en", zh: "预订", example: "Die **Buchung** ist bestätigt.", exampleZh: "预订已确认。", note: "-ung → 阴性", level: "A2", tags: ["medien"] },
        { de: "Definition", gender: "die", plural: "-en", zh: "定义", example: "Was ist die **Definition** davon?", exampleZh: "这个的定义是什么?", note: "-tion → 阴性", level: "A2", tags: ["medien"] },
        { de: "mailen", gender: "动", plural: "", zh: "发邮件", example: "**Mail** mir die Datei!", exampleZh: "把文件邮件发我!", note: "规则;英语借词", level: "A2", tags: ["medien"] },
        { de: "googeln", gender: "动", plural: "", zh: "搜索 / 谷歌", example: "Ich **google** das schnell.", exampleZh: "我快速搜一下。", note: "ich google, du googelst", level: "A2", tags: ["medien"] },
        { de: "liken", gender: "动", plural: "", zh: "点赞", example: "Ich **like** dein Foto.", exampleZh: "我给你的照片点赞。", note: "规则;英语借词", level: "A2", tags: ["medien"] },
        { de: "herunterladen", gender: "可分", plural: "", zh: "下载", example: "Ich **lade** die Musik **herunter**.", exampleZh: "我下载这首音乐。", note: "可分 lädt…herunter", level: "A2", tags: ["medien", "trennbar"] },
        { de: "Datei", gender: "die", plural: "-en", zh: "文件", example: "Öffne die **Datei**!", exampleZh: "打开这个文件!", note: "die Datei, -en", level: "A2", tags: ["medien"] },
        { de: "löschen", gender: "动", plural: "", zh: "删除", example: "Ich **lösche** die alten Fotos.", exampleZh: "我删掉旧照片。", note: "löschen + A", level: "A2", tags: ["medien"] },
        { de: "speichern", gender: "动", plural: "", zh: "保存", example: "Ich **speichere** das Dokument.", exampleZh: "我保存这个文档。", note: "speichern + A", level: "A2", tags: ["medien"] },
        { de: "weiterleiten", gender: "可分", plural: "", zh: "转发", example: "Ich **leite** die Mail **weiter**.", exampleZh: "我转发这封邮件。", note: "可分 leitet…weiter", level: "A2", tags: ["medien", "trennbar"] },
        { de: "drucken", gender: "动", plural: "", zh: "打印", example: "Ich **drucke** den Brief.", exampleZh: "我打印这封信。", note: "drucken + A", level: "A2", tags: ["medien"] },
        { de: "Kunst", gender: "die", plural: "¨e (Künste)", zh: "艺术", example: "Ich interessiere mich für **Kunst**.", exampleZh: "我对艺术感兴趣。", note: "die Kunst, pl. Künste", level: "A2", tags: ["medien"] },
        { de: "modisch", gender: "形", plural: "", zh: "时髦的", example: "Sie trägt **modische** Kleidung.", exampleZh: "她穿时髦的衣服。", note: "modisch", level: "A2", tags: ["medien"] },
        { de: "reklamieren", gender: "动", plural: "", zh: "投诉 / 索赔", example: "Ich will die Ware **reklamieren**.", exampleZh: "我要投诉这件商品。", note: "reklamieren + A", level: "A2", tags: ["medien"] },
        { de: "Kassenzettel", gender: "der", plural: "-", zh: "购物小票", example: "Heb den **Kassenzettel** auf!", exampleZh: "留好购物小票!", note: "der Kassenzettel, -", level: "A2", tags: ["medien"] },
        { de: "Garantie", gender: "die", plural: "-n", zh: "保修 / 担保", example: "Das Handy hat zwei Jahre **Garantie**.", exampleZh: "这手机保修两年。", note: "die Garantie, -n", level: "A2", tags: ["medien"] },
        { de: "Tierarzt", gender: "der", plural: "¨e (-ärzte)", zh: "兽医", example: "Ich bringe die Katze zum **Tierarzt**.", exampleZh: "我带猫去看兽医。", note: "女 -ärztin", level: "A2", tags: ["medien"] },
        { de: "wertvoll", gender: "形", plural: "", zh: "贵重的", example: "Dieser Ring ist sehr **wertvoll**.", exampleZh: "这枚戒指很贵重。", note: "wertvoll", level: "A2", tags: ["medien"] }
      ]
    }
  ]
};
