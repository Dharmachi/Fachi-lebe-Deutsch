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
    },

{
   "id": 11,
   "title": "不规则动词训练营",
   "subtitle": "完成时 104 词 · 元音家族速记",
   "difficulty": 4,
   "level": "A2",
   "tags": [
    "perfekt",
    "ablaut",
    "hilfsverb",
    "partizip"
   ],
   "drills": [
     {
      "id": "l1-hilfsverb",
      "name": "hat 还是 ist",
      "badge": "① 最简单 · 二选一",
      "tip": "只判助动词。看到过去分词或句子,秒选 hat / ist,建立条件反射。",
      "questions": [
       {
        "type": "choice",
        "prompt": "Er ___ um sechs Uhr aufgestanden.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "aufstehen 表示「从躺到站」的位置/状态变化，用 sein。注意同族的 stehen（hat gestanden）和 verstehen（hat verstanden）都用 haben——只有加了 auf- 的这个变成 ist。"
       },
       {
        "type": "choice",
        "prompt": "aufgestanden",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "aufstehen = ist aufgestanden。判断路径：没有第四格宾语 → 有状态变化 → sein。这是「同族不同助动词」的典型反直觉点。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ sofort aufgestanden.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "aufstehen 用 sein。别被 stehen（hat gestanden）带偏：stehen 是静态持续，aufstehen 是状态改变。"
       },
       {
        "type": "choice",
        "prompt": "eingeschlafen",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "einschlafen「入睡」是状态变化（醒→睡）→ sein。而 schlafen「睡着」是状态持续 → hat geschlafen。ein- 一加上去助动词就翻面。"
       },
       {
        "type": "choice",
        "prompt": "Das Kind ___ schnell eingeschlafen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "einschlafen = ist eingeschlafen，状态变化用 sein。同一逻辑：einfallen（ist eingefallen）也是变化，gefallen（hat gefallen）是持续状态。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ im Zug eingeschlafen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "einschlafen 用 sein。对照记：Er hat gut geschlafen（持续，hat） / Er ist schnell eingeschlafen（变化，ist）。"
       },
       {
        "type": "choice",
        "prompt": "ausgesehen",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "aussehen「看起来」是感官/状态描述动词，用 haben，不是 sein。虽然它以 aus- 开头，看着像 aussteigen（ist）、ausgehen（ist）那类位移词，但完全没有位移。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ müde ausgesehen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "aussehen = hat ausgesehen。sehen 家族全部用 haben：gesehen / angesehen / ferngesehen / ausgesehen。前缀不改变这一点。"
       },
       {
        "type": "choice",
        "prompt": "Das Essen ___ gut ausgesehen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "aussehen 用 haben。决策树第②步「位移/状态变化」在这里不成立——它只是描述外观，所以落到例外叶子：aussehen = haben。"
       },
       {
        "type": "choice",
        "prompt": "bekommen (Partizip II)",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "bekommen 用 haben，因为它是及物动词（bekommen + 第四格宾语）→ 决策树第①步就判 haben。别被词根 kommen（ist gekommen）骗了。顺带：be- 是不可分前缀，所以 PII 不加 ge-，与原形同形。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ einen Brief bekommen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "einen Brief 是第四格宾语，有第四格必用 haben。kommen / ankommen / mitkommen / drankommen 全是 ist，唯独 bekommen 是 hat。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ ein Geschenk bekommen.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "bekommen = hat bekommen。一个词踩三个坑：助动词 hat（不是 ist）、不可分前缀无 ge-、PII 与原形同形。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ den Computer hochgefahren.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "这里有第四格宾语 den Computer → 决策树第①步直接判 haben。hochfahren 是 fahren 家族里唯一的叛徒：fahren / abfahren / losfahren / zurückfahren 全用 ist。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ den Computer schon hochgefahren.",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "及物用法（启动电脑）→ haben。记忆钩子：能问「把什么 hochfahren？」→ 有宾语 → hat。"
       },
       {
        "type": "choice",
        "prompt": "hochgefahren",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "hat",
        "explanation": "hochfahren 用 haben。虽然含 fahren，但它的常用义是及物的「启动（电脑）」，及物压过位移，判 haben。"
       },
       {
        "type": "choice",
        "prompt": "geblieben",
        "options": [
         "hat",
         "ist"
        ],
        "answer": "ist",
        "explanation": "bleiben 用 sein——完全不位移却用 sein，任何规则都推不出来，属于纯例外叶子：bleiben / sein / werden 三个都是 sein，必须死记。"
       }
      ]
     },
     {
      "id": "l2-pii-choice",
      "name": "选对完成时形式",
      "badge": "② 简单 · 三选一",
      "tip": "给原形,从几个相似选项里认出正确的完成时——先学会「认」。",
      "questions": [
       {
        "type": "choice",
        "prompt": "Er ___ den Computer hochgefahren.（他把电脑启动了）",
        "options": [
         "hat",
         "ist",
         "wird"
        ],
        "answer": "hat",
        "explanation": "hochfahren 在「启动电脑」义上是及物动词（den Computer 是第四格宾语），及物动词一律用 haben。注意它是 fahren 家族 5 个词里唯一用 hat 的：fahren / abfahren / losfahren / zurückfahren 全部用 ist。"
       },
       {
        "type": "choice",
        "prompt": "fahren 的完成时正确形式是？",
        "options": [
         "ist gefahren",
         "hat gefahren",
         "hat gefahrt"
        ],
        "answer": "ist gefahren",
        "explanation": "fahren 是位移动词，用 sein。它属 a–a 组：原形 a、PII 回到 a（gefahren），只有现在时变音 er fährt。gefahrt 是把强变化误当弱变化。"
       },
       {
        "type": "choice",
        "prompt": "Der Bus ___ pünktlich losgefahren.（公交准时出发了）",
        "options": [
         "ist",
         "hat",
         "wird"
        ],
        "answer": "ist",
        "explanation": "losfahren 表位移，用 sein。fahren 族默认 ist，唯一例外是及物的 hochfahren（hat）。"
       },
       {
        "type": "choice",
        "prompt": "bekommen 的第二分词是？",
        "options": [
         "bekommen",
         "gebekommen",
         "bekommt"
        ],
        "answer": "bekommen",
        "explanation": "be- 是不可分前缀，带不可分前缀的动词第二分词不加 ge-；kommen 是 o–o 组，词干元音本来就是 o，所以 PII 与原形完全同形：er hat bekommen。"
       },
       {
        "type": "choice",
        "prompt": "Der Zug ___ um acht angekommen.（火车八点到了）",
        "options": [
         "ist",
         "hat",
         "wird"
        ],
        "answer": "ist",
        "explanation": "ankommen 是位移动词用 sein。整个 kommen 家族（kommen / ankommen / mitkommen / drankommen）都用 ist，唯独 bekommen 用 hat——因为它已经不表示「来」而是「得到」。"
       },
       {
        "type": "choice",
        "prompt": "drankommen（轮到）的第二分词是？",
        "options": [
         "drangekommen",
         "gedrankommen",
         "drankommen"
        ],
        "answer": "drangekommen",
        "explanation": "dran- 是可分前缀，所以 ge- 必须夹在中间：dran + ge + kommen。放到最前面（gedrankommen）是把可分误判成不可分。"
       },
       {
        "type": "choice",
        "prompt": "aufstehen 的完成时是？",
        "options": [
         "ist aufgestanden",
         "hat aufgestanden",
         "ist aufgestehen"
        ],
        "answer": "ist aufgestanden",
        "explanation": "aufstehen 表状态变化/位移，用 sein——这是反直觉点：同族的 stehen 和 verstehen 都用 hat。词干 e–a 变化：steh→stand。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ die Frage verstanden.（他听懂了这个问题）",
        "options": [
         "hat",
         "ist",
         "wird"
        ],
        "answer": "hat",
        "explanation": "verstehen 是及物动词，用 haben。ver- 不可分所以无 ge-：verstanden。别被同族 aufstehen（ist）带跑。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ zwei Stunden gesessen.（他坐了两小时）",
        "options": [
         "hat",
         "ist",
         "wird"
        ],
        "answer": "hat",
        "explanation": "sitzen 是状态动词，德国标准语用 haben。同理 liegen 也是 hat gelegen。别因为 aufstehen 用 ist 就把这一组也改成 ist。"
       },
       {
        "type": "choice",
        "prompt": "Das Kind ___ sofort eingeschlafen.（孩子马上睡着了）",
        "options": [
         "ist",
         "hat",
         "wird"
        ],
        "answer": "ist",
        "explanation": "einschlafen 表「状态变化」（从醒到睡），状态变化动词用 sein；而 schlafen 表状态持续，用 hat geschlafen。同一对立还有 einfallen（ist）对 gefallen（hat）。"
       },
       {
        "type": "choice",
        "prompt": "Mir ___ der Name eingefallen.（我想起这个名字了）",
        "options": [
         "ist",
         "hat",
         "wird"
        ],
        "answer": "ist",
        "explanation": "einfallen 表突然出现的状态变化，用 sein，并常带第三格（mir）。对照 gefallen 用 hat——ein- 与 ge- 一个可分一个不可分，助动词也相反。"
       },
       {
        "type": "choice",
        "prompt": "gefallen 的第二分词是？",
        "options": [
         "gefallen",
         "gegefallen",
         "gefallt"
        ],
        "answer": "gefallen",
        "explanation": "这里的 ge- 是不可分前缀，已经占了位置，不能再加一个 ge-，所以 PII 与原形同形：Das Buch hat mir gefallen。a–a 组元音不变；gefallt 是误用弱变化。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ heute müde ausgesehen.（他今天看起来很累）",
        "options": [
         "hat",
         "ist",
         "wird"
        ],
        "answer": "hat",
        "explanation": "aussehen 是感官/状态动词，用 haben，尽管长得像 aus- 开头的位移词（aussteigen ist / ausgehen ist）。sehen 家族 ansehen、fernsehen 同样全部用 hat。"
       },
       {
        "type": "choice",
        "prompt": "Er ___ zu Hause geblieben.（他待在家里了）",
        "options": [
         "ist",
         "hat",
         "wird"
        ],
        "answer": "ist",
        "explanation": "bleiben 完全不表示位移，却用 sein——这是纯例外，任何规则都推不出来，只能死记 ist geblieben。它属 ei–ie 组，PII 为 geblieben。"
       }
      ]
     },
     {
      "id": "l3-family",
      "name": "元音家族归类",
      "badge": "③ 中等 · 归类",
      "tip": "把动词归进正确的元音变化家族。记住 14 个家族,比死记 104 个词轻松。",
      "questions": [
       {
        "type": "choice",
        "prompt": "把卡片 aufschreiben 放进哪个家族桶?",
        "options": [
         "ei–ie",
         "ei–i",
         "ie–o"
        ],
        "answer": "ei–ie",
        "explanation": "可分动词按词根判定:auf- + schreiben,schreiben 属 ei–ie(geschrieben),所以 aufgeschrieben 也是长 ie。前缀不影响元音家族,只影响 ge- 的位置(auf-ge-schrieben)。"
       },
       {
        "type": "choice",
        "prompt": "把卡片 aussteigen 放进哪个家族桶?",
        "options": [
         "ei–ie",
         "ei–i",
         "ei–ei"
        ],
        "answer": "ei–ie",
        "explanation": "steigen 走 ei→长 ie:ausgestiegen。ei 家族有三种结局,steigen/schreiben/bleiben/scheinen/überweisen 这一支全部变长 ie。"
       },
       {
        "type": "choice",
        "prompt": "把卡片 unterstreichen 放进哪个家族桶?",
        "options": [
         "ei–i",
         "ei–ie",
         "ei–ei"
        ],
        "answer": "ei–i",
        "explanation": "PII 是 unterstrichen,元音变短 i(后面接 ch)。ei 家族中 schneiden / vergleichen / unterstreichen 这一支走短 i,不是长 ie。另外 unter- 在此不可分,所以没有 ge-。"
       },
       {
        "type": "choice",
        "prompt": "把卡片 vergleichen 放进哪个家族桶?",
        "options": [
         "ei–i",
         "ei–ie",
         "ie–o"
        ],
        "answer": "ei–i",
        "explanation": "verglichen:短 i,判断窍门是 PII 词干后面跟着 ch 或双辅音时元音变短。ver- 不可分,无 ge-。"
       },
       {
        "type": "choice",
        "prompt": "这一轮 ei 家族里混进了 heißen。它该进哪个桶?",
        "options": [
         "ei–ei",
         "ei–ie",
         "ei–i"
        ],
        "answer": "ei–ei",
        "explanation": "heißen 的 PII 是 geheißen,元音完全不变。它是 ei 家族的第三种结局(不变),所以 ei 轮绝不能一刀切成「都变 ie」。"
       },
       {
        "type": "choice",
        "prompt": "下面哪张卡不属于 ei–ie 桶?",
        "options": [
         "schneiden",
         "scheinen",
         "überweisen"
        ],
        "answer": "schneiden",
        "explanation": "scheinen→geschienen、überweisen→überwiesen 都是长 ie;schneiden→geschnitten 是短 i(且双写 tt),属 ei–i 桶。"
       },
       {
        "type": "choice",
        "prompt": "heißen 的第二分词是哪一个?",
        "options": [
         "geheißen",
         "gehießen",
         "geheißt"
        ],
        "answer": "geheißen",
        "explanation": "heißen 是强变化但元音不变,只加 ge-…-en:geheißen。写成 gehießen 是被 ei–ie 家族带偏,写成 geheißt 是误用弱变化 -t 结尾。"
       },
       {
        "type": "choice",
        "prompt": "bleiben 该进哪个桶?",
        "options": [
         "ei–ie",
         "ei–i",
         "ei–ei"
        ],
        "answer": "ei–ie",
        "explanation": "geblieben,长 ie。顺带记住例外:bleiben 完全不位移却用 sein(ist geblieben),这条推不出来只能死记。"
       },
       {
        "type": "choice",
        "prompt": "把卡片 abfahren 放进哪个家族桶?",
        "options": [
         "a–a",
         "e–a",
         "o–o"
        ],
        "answer": "a–a",
        "explanation": "按词根 fahren 判定:gefahren,PII 元音回到 a。现在时才变音(er fährt ab),PII 不变音——这是 a–a 家族的统一规律。"
       },
       {
        "type": "choice",
        "prompt": "把卡片 einladen 放进哪个家族桶?它的 er 形式是?",
        "options": [
         "a–a,er lädt ein",
         "a–a,er ladet ein",
         "e–a,er lädt ein"
        ],
        "answer": "a–a,er lädt ein",
        "explanation": "eingeladen 属 a–a。现在时 a→ä 且不加 e:er lädt ein,写成 er ladet ein 是把强变化误当弱变化。"
       },
       {
        "type": "choice",
        "prompt": "这一轮 a–a 桶里混进了 laufen。判对之后,它的例外点是什么?",
        "options": [
         "现在时是 au→äu(er läuft),不是 a→ä",
         "PII 变成 o",
         "不可分前缀,没有 ge-"
        ],
        "answer": "现在时是 au→äu(er läuft),不是 a→ä",
        "explanation": "laufen 的 PII 确实是 gelaufen(a–a),但现在时变音走 au→äu:er läuft。别按 fahren/tragen 的 a→ä 类推成 *er läft。另外它用 sein。"
       },
       {
        "type": "choice",
        "prompt": "raten 属于哪个桶?",
        "options": [
         "a–a",
         "e–a",
         "Sonderform"
        ],
        "answer": "a–a",
        "explanation": "geraten 与原形词干同形,归 a–a。现在时变音:er rät(不是 ratet)。同排要一起过的还有 er wäscht / er trägt / er lädt ein。"
       }
      ]
     },
     {
      "id": "l4-pii-fill",
      "name": "默写过去分词",
      "badge": "④ 较难 · 填空",
      "tip": "自己写出过去分词或 er-形式。光认得没用,考试口语要你产出。",
      "questions": [
       {
        "type": "fill",
        "prompt": "abfahren（出发，可分）的第二分词是 ___。",
        "hint": "可分前缀在前，ge- 夹在前缀和词干中间；元音跟 fahren 一样不变",
        "answer": [
         "abgefahren"
        ],
        "explanation": "可分动词的 ge- 永远插在前缀与词干之间：ab + ge + fahren。a–a 组元音不变，助动词随 fahren 用 ist。"
       },
       {
        "type": "fill",
        "prompt": "zurückfahren 的第三人称单数现在时是 ___。",
        "hint": "a→ä 变音只发生在现在时单数，可分前缀要后置分写",
        "answer": [
         "er fährt zurück",
         "fährt zurück",
         "er faehrt zurueck",
         "faehrt zurueck"
        ],
        "explanation": "a→ä 只在现在时第二、三人称单数发生，故 fährt；zurück- 是可分前缀，必须后置分写成 er fährt zurück，写成 fährtzurück 判错。"
       },
       {
        "type": "fill",
        "prompt": "kommen 的第二分词是 ___。",
        "hint": "o–o 组，简单动词要加 ge-",
        "answer": [
         "gekommen"
        ],
        "explanation": "kommen 属 o–o 组，元音不变，简单动词加 ge- 和 -en。它是位移动词，用 ist gekommen。"
       },
       {
        "type": "fill",
        "prompt": "mitkommen 的第二分词是 ___。",
        "hint": "可分前缀 mit- 在前，ge- 夹中间，元音保持 o",
        "answer": [
         "mitgekommen"
        ],
        "explanation": "mit + ge + kommen。o–o 组不换元音；随 kommen 用 ist mitgekommen。"
       },
       {
        "type": "fill",
        "prompt": "stehen 的第二分词是 ___。",
        "hint": "e–a 组，词干末尾还多一个 d",
        "answer": [
         "gestanden"
        ],
        "explanation": "stehen 属 e–a 组，PII 为 gestanden（词干扩展出 -d-）。德国标准语用 hat gestanden，不是 ist。"
       },
       {
        "type": "fill",
        "prompt": "liegen 的第二分词是 ___。",
        "hint": "ie–e 组，元音缩短成 e；别和规则动词 legen 混",
        "answer": [
         "gelegen"
        ],
        "explanation": "liegen 属 ie–e 组：ie 在 PII 里变成短 e，得 gelegen。助动词是 hat。规则动词 legen（放）的 PII 是 gelegt，形近但不同。"
       },
       {
        "type": "fill",
        "prompt": "schlafen 的第二分词是 ___。",
        "hint": "a–a 组，现在时才变音，PII 不变音",
        "answer": [
         "geschlafen"
        ],
        "explanation": "schlafen 属 a–a 组：现在时 er schläft 变音，但 PII 回到 a，写 geschlafen 而不是 *geschläfen。助动词 hat。"
       },
       {
        "type": "fill",
        "prompt": "ansehen 的第二分词是 ___。",
        "hint": "可分动词，ge- 夹中间；e–e 组元音不变",
        "answer": [
         "angesehen"
        ],
        "explanation": "an + ge + sehen。sehen 属 e–e 组：现在时变 ie（er sieht an），但 PII 回到 e。助动词 hat。"
       },
       {
        "type": "fill",
        "prompt": "fernsehen 的第三人称单数现在时是 ___。",
        "hint": "词根是 sehen，现在时 e→ie；可分部分要后置",
        "answer": [
         "er sieht fern",
         "sieht fern"
        ],
        "explanation": "词根 sehen 现在时 e→ie，故 sieht；fern- 可分必须后置分写：er sieht fern。PII 为 ferngesehen，助动词 hat。"
       },
       {
        "type": "fill",
        "prompt": "finden 的第二分词是 ___。",
        "hint": "i–u 组，元音换成 u",
        "answer": [
         "gefunden"
        ],
        "explanation": "finden 属 i–u 组，与 singen / klingen / trinken 同队：i 在 PII 变 u，得 gefunden。助动词 hat。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「genossen」，写出「原形 + 助动词(hat/ist)」。格式：原形, hat/ist",
        "hint": "ie–o 家族；PII 里的双 s 是因为元音变短了，原形那里元音是长的",
        "answer": [
         "genießen, hat",
         "genießen hat",
         "genießen / hat"
        ],
        "explanation": "genießen 属 ie–o 换音家族：原形长元音 ie 写 ß（genießen），PII 元音缩短为短 o，按正字法长音才用 ß、短音必须写 ss，所以是 genossen。ge- 在这里是不可分前缀，本身已在词首，所以不再另加 ge-。及物、非位移，用 hat。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「gewogen」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "「称重、重达」；现在时不变音，只有 PII 掉到 o",
        "answer": [
         "wiegen, hat",
         "wiegen hat",
         "wiegen / hat"
        ],
        "explanation": "wiegen 现在时完全不变音（er wiegt），但 PII 落进 -o- 组：gewogen。词干大改，只有反向练过才认得。非位移，用 hat。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「verstanden」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "ver- 是不可分前缀，所以 PII 里没有 ge-；词根是「站」那个词",
        "answer": [
         "verstehen, hat",
         "verstehen hat",
         "verstehen / hat"
        ],
        "explanation": "stehen 族 e–a 换音：stehen→gestanden，加不可分前缀 ver- 后不再加 ge-，得 verstanden。注意 stehen / verstehen 在标准德语里都用 hat，不是 ist。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「aufgestanden」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "同样是 stehen 词根，但这个是「早上从床上起来」，助动词跟 stehen 反着来",
        "answer": [
         "aufstehen, ist",
         "aufstehen ist",
         "aufstehen / ist"
        ],
        "explanation": "auf- 可分，ge- 夹在中间：auf+ge+standen。陷阱在助动词：stehen / verstehen 都用 hat，唯独 aufstehen 表示状态改变（躺→站），用 ist。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「ausgestiegen」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "ei→长 ie 家族；「从车上下来」",
        "answer": [
         "aussteigen, ist",
         "aussteigen ist",
         "aussteigen / ist"
        ],
        "explanation": "steigen 属 ei–ie 家族（长 ie）：gestiegen；aus- 可分，ge- 夹中间→ausgestiegen。位移动词，用 ist。同族 einsteigen（eingestiegen）、umsteigen（umgestiegen）全部 ist。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「gegangen」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "最基础的位移动词，词干由 geh 变成 gang",
        "answer": [
         "gehen, ist",
         "gehen ist",
         "gehen / ist"
        ],
        "explanation": "gehen 属 e–a 特殊组，词干整个改成 gang：gegangen。位移动词，用 ist。同族 ausgehen→ausgegangen、losgehen→losgegangen、rausgehen→rausgegangen 也都是 ist。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「bekommen」（形式与原形完全一样），写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "「收到、得到」；be- 前缀让它一个词踩三个坑",
        "answer": [
         "bekommen, hat",
         "bekommen hat",
         "bekommen / hat"
        ],
        "explanation": "be- 是不可分前缀：①不加 ge-，②kommen 属 o–o 组本来 PII 就是 -kommen，所以 PII 与原形同形；③虽然 kommen / ankommen / mitkommen / drankommen 全用 ist，bekommen 是及物动词（etwas bekommen），必须用 hat。"
       },
       {
        "type": "fill",
        "prompt": "逆向还原①：看到 PII「geblieben」，写出「原形 + 助动词」。格式：原形, hat/ist",
        "hint": "「留下、保持」；完全不移动，助动词却是纯例外",
        "answer": [
         "bleiben, ist",
         "bleiben ist",
         "bleiben / ist"
        ],
        "explanation": "bleiben 属 ei–ie 长音家族：geblieben。助动词是纯例外——它一点也不位移，却和 sein/werden 一样用 ist，没有规则可推，只能死记。"
       }
      ]
     },
     {
      "id": "l5-context",
      "name": "放进句子里",
      "badge": "⑤ 最难 · 句子填空",
      "tip": "在真实句子里填对助动词 + 过去分词 + 语序。这才是考试和说话真正考的。",
      "questions": [
       {
        "type": "fill",
        "prompt": "周末报告：Gestern ___ ich um sieben Uhr ___ (aufstehen).",
        "hint": "起床是「状态变化」，助动词填第二位，第二分词钉死句末",
        "answer": [
         "bin ... aufgestanden",
         "bin aufgestanden",
         "bin, aufgestanden",
         "bin/aufgestanden"
        ],
        "explanation": "aufstehen 用 sein（ist aufgestanden），虽然词根 stehen 用 haben——同族反直觉必须死记。语序：助动词 bin 占第二位，PII aufgestanden 钉在句末，中间放时间地点，形成动词框架。"
       },
       {
        "type": "fill",
        "prompt": "Zum Frühstück ___ ich zwei Brötchen ___ (essen).",
        "hint": "及物动词用 haben；这个 PII 比一般词多出一个音节",
        "answer": [
         "habe ... gegessen",
         "habe gegessen",
         "habe, gegessen",
         "habe/gegessen"
        ],
        "explanation": "essen 是及物动词，用 haben。PII 是 gegessen（多出一个 ge-，全表唯一例外），不要写成 *geessen。框架：habe 第二位，gegessen 句末。"
       },
       {
        "type": "fill",
        "prompt": "Dann ___ ich mit der U-Bahn zur Schule ___ (fahren).",
        "hint": "位移动词，选表示「位置改变」的那个助动词",
        "answer": [
         "bin ... gefahren",
         "bin gefahren",
         "bin, gefahren",
         "bin/gefahren"
        ],
        "explanation": "fahren 是位移动词，用 sein（ist gefahren），a–a 类元音不变。中文母语者最典型错误是 *Ich habe gefahren nach Wien：助动词错 + 语序错。正确框架：bin 第二位，gefahren 句末。"
       },
       {
        "type": "fill",
        "prompt": "Der Kurs ___ um acht Uhr ___ (anfangen).",
        "hint": "可分动词，ge- 要夹在前缀后面；助动词不是位移那个",
        "answer": [
         "hat ... angefangen",
         "hat angefangen",
         "hat, angefangen",
         "hat/angefangen"
        ],
        "explanation": "anfangen 用 haben（不同于同为 a–a 类的 abfahren 用 sein）。可分前缀 an- 在前，ge- 夹在中间：an+ge+fangen = angefangen。主语 der Kurs 是第三人称单数，助动词用 hat。"
       },
       {
        "type": "fill",
        "prompt": "Am Abend ___ ich vor dem Fernseher ___ (einschlafen).",
        "hint": "「睡着」是从醒到睡的状态变化",
        "answer": [
         "bin ... eingeschlafen",
         "bin eingeschlafen",
         "bin, eingeschlafen",
         "bin/eingeschlafen"
        ],
        "explanation": "einschlafen 表状态变化，用 sein；而 schlafen（状态持续）用 haben。这是同一词根两个助动词的经典对立。ge- 夹在 ein- 之后：ein+ge+schlafen。"
       },
       {
        "type": "fill",
        "prompt": "Danach ___ ich acht Stunden ___ (schlafen).",
        "hint": "和「睡着」不同，这里是持续状态",
        "answer": [
         "habe ... geschlafen",
         "habe geschlafen",
         "habe, geschlafen",
         "habe/geschlafen"
        ],
        "explanation": "schlafen 表持续状态，用 haben（hat geschlafen）；只有 einschlafen（状态变化）才用 sein。a–a 类：现在时 er schläft 变音，但 PII geschlafen 不变音。"
       },
       {
        "type": "fill",
        "prompt": "Im Büro ___ er zuerst den Computer ___ (hochfahren).",
        "hint": "这里有第四格宾语 den Computer，助动词跟着及物性走",
        "answer": [
         "hat ... hochgefahren",
         "hat hochgefahren",
         "hat, hochgefahren",
         "hat/hochgefahren"
        ],
        "explanation": "hochfahren（启动电脑）是及物动词，用 haben——它是 fahren 家族（fahren / abfahren / losfahren / zurückfahren 全用 sein）里唯一的叛徒。判断口诀：有第四格宾语就用 haben。"
       },
       {
        "type": "fill",
        "prompt": "Gestern ___ ich eine E-Mail von der Bank ___ (bekommen).",
        "hint": "be- 是不可分前缀；PII 长得和原形一模一样",
        "answer": [
         "habe ... bekommen",
         "habe bekommen",
         "habe, bekommen",
         "habe/bekommen"
        ],
        "explanation": "bekommen 一词三坑：①用 haben，尽管 kommen/ankommen/mitkommen 全用 sein；②be- 不可分，所以不加 ge-；③PII 与原形同形 bekommen。"
       },
       {
        "type": "choice",
        "prompt": "判断这句话对不对：Ich bin um 7 Uhr aufgestanden.",
        "options": [
         "正确",
         "错：bin 应改为 habe",
         "错：aufgestanden 应改为 geaufstanden"
        ],
        "answer": "正确",
        "explanation": "aufstehen 表示「状态变化」，完成时用 sein，所以 ich bin aufgestanden 是对的（注意同族的 stehen / verstehen 反而用 haben）。可分前缀 auf- 后面夹 ge-：auf+ge+standen，写成 geaufstanden 是把 ge- 放错了位置。"
       },
       {
        "type": "choice",
        "prompt": "判断这句话对不对：Er hat den Computer hochgefahren.",
        "options": [
         "正确",
         "错：hat 应改为 ist",
         "错：hochgefahren 应改为 gehochfahren"
        ],
        "answer": "正确",
        "explanation": "hochfahren（启动电脑）带宾语 den Computer，是及物用法，所以用 haben——它是 fahren 家族（fahren / abfahren / losfahren / zurückfahren 全用 sein）里唯一的叛徒。ge- 也正确地夹在 hoch- 之后。"
       },
       {
        "type": "choice",
        "prompt": "判断这句话对不对：Ich habe den Brief bekommen.",
        "options": [
         "正确",
         "错：habe 应改为 bin",
         "错：bekommen 应改为 begekommen"
        ],
        "answer": "正确",
        "explanation": "bekommen 一词踩三个坑而这句全躲过了：用 haben（不跟 kommen 族的 sein 走）、be- 不可分所以无 ge-、第二分词与不定式同形。"
       },
       {
        "type": "choice",
        "prompt": "判断这句话对不对：Ich bin zu Hause geblieben.",
        "options": [
         "正确",
         "错：bin 应改为 habe",
         "错：geblieben 应改为 gebleiben"
        ],
        "answer": "正确",
        "explanation": "bleiben 完全不位移却用 sein，是纯例外必须死记。元音上它属于 ei→ie 长音一队（bleiben / schreiben / steigen / scheinen），所以是 geblieben 不是 gebleiben。"
       },
       {
        "type": "fill",
        "prompt": "改错：Der Zug ist geabfahren.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
        "hint": "可分前缀和词干之间少了点什么，多出来的东西跑到最前面去了",
        "answer": [
         "abgefahren",
         "Abgefahren"
        ],
        "explanation": "可分动词的 ge- 必须夹在可分前缀和词干中间：ab + ge + fahren → abgefahren，不能整体前置写成 geabfahren。abfahren 是位移动词，助动词 ist 用得没错。"
       },
       {
        "type": "fill",
        "prompt": "改错：Er hat das Geschenk begekommen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
        "hint": "be- 这类前缀不允许再插入那个音节",
        "answer": [
         "bekommen",
         "Bekommen"
        ],
        "explanation": "be- 是不可分前缀，带不可分前缀的动词第二分词一律不加 ge-，所以是 hat bekommen（PII 与原形完全同形）。另外 bekommen 用 haben，虽然 kommen / ankommen / mitkommen 都用 sein。"
       },
       {
        "type": "fill",
        "prompt": "改错：Ich bin um sechs geaufstanden.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
        "hint": "ge- 站错了队；助动词本身没问题",
        "answer": [
         "aufgestanden",
         "Aufgestanden"
        ],
        "explanation": "aufstehen 是可分动词，ge- 要夹在中间：auf + ge + standen → aufgestanden。词干还是 stehen 的 e–a 换音（gestanden）。助动词 bin 正确，aufstehen 用 sein。"
       },
       {
        "type": "fill",
        "prompt": "改错：Er hat mir das Buch geempfohlen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
        "hint": "emp- 属于不可分前缀那一类",
        "answer": [
         "empfohlen",
         "Empfohlen"
        ],
        "explanation": "emp- 是不可分前缀，第二分词不加 ge-，正确形式是 empfohlen。注意 empfehlen 三个方向各变一次：现在时 e→ie（er empfiehlt）、PII 掉到 o（empfohlen）、无 ge-。"
       }
      ]
     }
    ],
   "grammar": [
    {
     "id": "G33",
     "title": "完成时两条铁律:ge- 放哪 + hat 还是 ist",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "partizip",
      "hilfsverb"
     ],
     "summary": "背 104 个不规则动词前,先把这两条规则装进脑子——它们决定了每个词的「外壳」,元音变化只决定「内核」。",
     "explain": [
      "① ge- 的位置:可分动词 → 前缀 + ge + 词干(an-ge-kommen、auf-ge-standen);不可分前缀(be- er- emp- ge- ver- unter- über-)→ 不加 ge-(bekommen、empfohlen、verstanden);无前缀 → 前面加 ge-。",
      "② 助动词:有第四格宾语 → haben;位移或状态变化 → sein;三例外 sein / bleiben / werden → sein。",
      "③ 全表只有 26 个词用 sein,其余 78 个一律 haben——背那 26 个清单比背规则快。"
     ],
     "mnemonic": "可分夹 ge、不可分不要 ge;动了/变了/三例外用 ist,其余全是 hat。",
     "tables": [
      {
       "caption": "用 sein 的全部 26 个词(其余一律 haben)",
       "headers": [
        "用 sein 的动词"
       ],
       "rows": [
        [
         "abfahren · ankommen · aufstehen · ausgehen"
        ],
        [
         "aussteigen · bleiben · drankommen · einfallen"
        ],
        [
         "einschlafen · einsteigen · fahren · fliegen"
        ],
        [
         "gehen · kommen · laufen · los sein"
        ],
        [
         "losfahren · losgehen · mitkommen · rausgehen"
        ],
        [
         "schwimmen · sein · umsteigen · umziehen"
        ],
        [
         "werden · zurückfahren"
        ]
       ]
      }
     ],
     "flowchart": {
      "title": "hat 还是 ist?",
      "start": "q1",
      "nodes": {
       "q1": {
        "q": "句中有第四格宾语吗?(及物)",
        "yes": "haben",
        "no": "q2"
       },
       "q2": {
        "q": "是位移(gehen/fahren/kommen…)或状态变化(aufstehen/einschlafen/werden)吗?",
        "yes": "sein",
        "no": "q3"
       },
       "q3": {
        "q": "是三例外 sein / bleiben / werden 吗?",
        "yes": "sein",
        "no": "haben"
       },
       "haben": {
        "result": "→ hat + PII",
        "good": true
       },
       "sein": {
        "result": "→ ist + PII",
        "good": true
       }
      }
     },
     "notes": [
      "⚠️ 反直觉:aufstehen 用 ist,但 stehen / verstehen 用 hat;einschlafen 用 ist,但 schlafen 用 hat。",
      "⚠️ bekommen 三重坑:用 hat(虽然 kommen 用 ist)、be- 不可分无 ge-、PII 与原形同形。",
      "⚠️ hochfahren 用 hat(及物:den Computer),但 fahren / abfahren / losfahren / zurückfahren 全用 ist。"
     ],
     "examples": [
      {
       "de": "Er ist um sechs Uhr aufgestanden.",
       "zh": "他六点起床了。",
       "trigger": "ist … aufgestanden",
       "steps": [
        "aufstehen 状态变化 → sein",
        "可分动词 auf- → ge 夹中间",
        "auf + ge + standen"
       ]
      },
      {
       "de": "Er hat den Computer hochgefahren.",
       "zh": "他启动了电脑。",
       "trigger": "hat … hochgefahren",
       "steps": [
        "有第四格宾语 den Computer → haben",
        "虽然 fahren 用 sein,及物时用 haben",
        "hoch + ge + fahren"
       ]
      }
     ],
     "miniQuiz": {
      "type": "choice",
      "prompt": "Er ___ ein Geschenk bekommen.",
      "options": [
       "hat",
       "ist"
      ],
      "answer": "hat",
      "explanation": "bekommen 及物、非位移 → haben;虽然 kommen 用 sein。"
     },
     "related": [
      "G19",
      "G20"
     ]
    },
    {
     "id": "G33b",
     "title": "用 sein 的 26 个 vs 其余全 haben",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "hilfsverb",
      "sein"
     ],
     "summary": "完成时只有这 26 个词用 sein,其余 78 个不规则动词一律 haben——把这张表背熟,助动词就不用每次推理了。",
     "mnemonic": "动了(位移)/ 变了(状态)/ 三例外(sein·bleiben·werden)→ ist;背下这 26 个,剩下闭眼选 hat。",
     "tables": [
      {
       "caption": "✅ 用 sein 的全部 26 个 — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "用 sein 的动词",
        "用 sein 的动词"
       ],
       "rows": [
        [
         "abfahren  出发,开走",
         "ankommen  到达"
        ],
        [
         "aufstehen  起床,起立",
         "ausgehen  外出,出门"
        ],
        [
         "aussteigen  下车",
         "bleiben  停留,保持"
        ],
        [
         "drankommen  轮到",
         "einfallen  想起,浮现"
        ],
        [
         "einschlafen  入睡",
         "einsteigen  上车"
        ],
        [
         "fahren  开车;乘车去",
         "fliegen  飞;坐飞机"
        ],
        [
         "gehen  走;去",
         "kommen  来"
        ],
        [
         "laufen  跑;走路",
         "los sein  发生;出事"
        ],
        [
         "losfahren  出发;启程",
         "losgehen  开始;动身"
        ],
        [
         "mitkommen  一起来",
         "rausgehen  出去"
        ],
        [
         "schwimmen  游泳",
         "umsteigen  换乘"
        ],
        [
         "umziehen  搬家",
         "zurückfahren  返回;开回"
        ],
        [
         "sein  是;存在",
         "werden  变成;成为"
        ]
       ]
      },
      {
       "caption": "⚠️ 长得像 sein、实际用 haben 的陷阱词",
       "headers": [
        "haben 动词",
        "为什么容易记错"
       ],
       "rows": [
        [
         "aussehen 看起来",
         "像 aus- 位移词,实为感官动词"
        ],
        [
         "bekommen 得到",
         "kommen 用 ist,它却用 hat"
        ],
        [
         "hochfahren 启动电脑",
         "fahren 家族唯一用 hat(及物)"
        ],
        [
         "stehen 站 / verstehen 理解",
         "但 aufstehen 用 ist"
        ],
        [
         "sitzen 坐 / liegen 躺",
         "静止动词,德标用 hat"
        ],
        [
         "zurückfinden 找回",
         "finden 家族全 hat"
        ]
       ]
      }
     ],
     "notes": [
      "口诀记 sein 三类:①位移 gehen/kommen/fahren/fliegen/laufen/schwimmen/steigen ②状态变化 aufstehen/einschlafen/werden ③三例外 sein/bleiben/passieren。",
      "可分动词继承词根的助动词:fahren=ist → abfahren/losfahren/zurückfahren 也 ist;但 hochfahren(及物)是唯一例外,用 hat。"
     ],
     "examples": [
      {
       "de": "Er ist nach Wien gefahren.",
       "zh": "他去了维也纳。",
       "trigger": "ist gefahren",
       "case": "",
       "steps": [
        "fahren 位移 → sein",
        "无第四格宾语",
        "ist + gefahren"
       ]
      },
      {
       "de": "Er hat das Auto nach Wien gefahren.",
       "zh": "他把车开去了维也纳。",
       "trigger": "hat gefahren",
       "case": "",
       "steps": [
        "有第四格宾语 das Auto → 及物",
        "及物一律 haben",
        "hat + gefahren(同一个词,助动词随宾语变)"
       ]
      }
     ],
     "miniQuiz": {
      "type": "choice",
      "prompt": "下面哪个用 sein?",
      "options": [
       "bleiben",
       "bekommen",
       "aussehen"
      ],
      "answer": "bleiben",
      "explanation": "bleiben 是三例外之一,虽不位移却用 sein;bekommen/aussehen 都用 haben。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G34",
     "title": "A. ei–ie 长音家族（schreiben / steigen / bleiben）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "ei → ie，现在时完全不变音（er schreibt / er steigt ein）；PII = ge + 词干(ie) + en。untrennbar 的 beschreiben / unterschreiben / überweisen 不加 ge-。",
     "mnemonic": "ei 一拉长就成 ie；steigen 三兄弟上车下车换车一律 ist，bleiben 不动也用 ist，其余全是 hat。",
     "tables": [
      {
       "caption": "A. ei–ie 长音家族（schreiben / steigen / bleiben） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "bleiben",
         "er bleibt",
         "ist geblieben",
         "停留,保持"
        ],
        [
         "schreiben",
         "er schreibt",
         "hat geschrieben",
         "写"
        ],
        [
         "aufschreiben",
         "er schreibt auf",
         "hat aufgeschrieben",
         "记下,写下"
        ],
        [
         "beschreiben",
         "er beschreibt",
         "hat beschrieben",
         "描述"
        ],
        [
         "unterschreiben",
         "er unterschreibt",
         "hat unterschrieben",
         "签名"
        ],
        [
         "überweisen",
         "er überweist",
         "hat überwiesen",
         "汇款；转诊"
        ],
        [
         "scheinen",
         "er scheint",
         "hat geschienen",
         "照耀；似乎"
        ],
        [
         "einsteigen",
         "er steigt ein",
         "ist eingestiegen",
         "上车"
        ],
        [
         "aussteigen",
         "er steigt aus",
         "ist ausgestiegen",
         "下车"
        ],
        [
         "umsteigen",
         "er steigt um",
         "ist umgestiegen",
         "换乘"
        ]
       ]
      }
     ],
     "notes": [
      "非位移动词却用 sein",
      "不可分前缀,无 ge-;与 schreiben 同族",
      "不可分前缀，无 ge-",
      "ist 不是 hat；um- 此处可分（ge- 夹中间）"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "把卡片 aufschreiben 放进哪个家族桶?",
      "options": [
       "ei–ie",
       "ei–i",
       "ie–o"
      ],
      "answer": "ei–ie",
      "explanation": "可分动词按词根判定:auf- + schreiben,schreiben 属 ei–ie(geschrieben),所以 aufgeschrieben 也是长 ie。前缀不影响元音家族,只影响 ge- 的位置(auf-ge-schrieben)。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G35",
     "title": "B. ei–i 短音家族 + ei–ei 例外（最小可辨差异块，必须紧跟 A 学）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "同样 ei 开头，但后接双辅音或 ch 时缩成短 i：schneiden→geschnitten、vergleichen→verglichen、unterstreichen→unterstrichen；heißen 则完全不变 → geheißen。全部 haben，现在时不变音。",
     "mnemonic": "辅音一变双（tt / ch），ei 就缩成短 i；heißen 顽固不化，ei 到底。",
     "tables": [
      {
       "caption": "B. ei–i 短音家族 + ei–ei 例外（最小可辨差异块，必须紧跟 A 学） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "schneiden",
         "er schneidet",
         "hat geschnitten",
         "切，剪"
        ],
        [
         "vergleichen",
         "er vergleicht",
         "hat verglichen",
         "比较"
        ],
        [
         "unterstreichen",
         "er unterstreicht",
         "hat unterstrichen",
         "划线;强调"
        ],
        [
         "heißen",
         "er heißt",
         "hat geheißen",
         "名叫;意为"
        ]
       ]
      }
     ],
     "notes": [
      "ei–i 类，PII 双写 tt",
      "不可分前缀,无 ge-",
      "不可分前缀,无 ge-;元音变短 ei→i"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "把卡片 unterstreichen 放进哪个家族桶?",
      "options": [
       "ei–i",
       "ei–ie",
       "ei–ei"
      ],
      "answer": "ei–i",
      "explanation": "PII 是 unterstrichen,元音变短 i(后面接 ch)。ei 家族中 schneiden / vergleichen / unterstreichen 这一支走短 i,不是长 ie。另外 unter- 在此不可分,所以没有 ge-。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G36",
     "title": "C. ie–o 家族（ziehen / fliegen / schließen）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "ie → o，现在时完全不变音；带 ß 的 PII 元音变短，ß 必须改写成 ss。genießen / erschließen 是不可分前缀，不再加 ge-。fliegen 与 umziehen 用 sein，其余 haben。",
     "mnemonic": "ie 一律塌成 o：zieh→zog、flieg→flog、wieg→wog；带 ß 的塌下来还要改成 ss。",
     "tables": [
      {
       "caption": "C. ie–o 家族（ziehen / fliegen / schließen） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "ziehen",
         "er zieht",
         "hat gezogen",
         "拉;拽"
        ],
        [
         "anziehen",
         "er zieht an",
         "hat angezogen",
         "穿上"
        ],
        [
         "ausziehen",
         "er zieht aus",
         "hat ausgezogen",
         "脱下"
        ],
        [
         "umziehen",
         "er zieht um",
         "ist umgezogen",
         "搬家"
        ],
        [
         "fliegen",
         "er fliegt",
         "ist geflogen",
         "飞;坐飞机"
        ],
        [
         "riechen",
         "er riecht",
         "hat gerochen",
         "闻；有气味"
        ],
        [
         "wiegen",
         "er wiegt",
         "hat gewogen",
         "称重;重达"
        ],
        [
         "schließen",
         "er schließt",
         "hat geschlossen",
         "关闭"
        ],
        [
         "genießen",
         "er genießt",
         "hat genossen",
         "享受;品味"
        ],
        [
         "erschließen",
         "er erschließt",
         "hat erschlossen",
         "开发,推知"
        ]
       ]
      }
     ],
     "notes": [
      "表「搬迁」时用 ist gezogen",
      "现在时不变音,但 PII 变 o",
      "表\"脱衣\"用 hat;表\"搬出\"时用 ist",
      "ist 不是 hat；反身 sich umziehen（换衣服）用 hat",
      "用 sein"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "把卡片 anziehen 放进哪个家族桶?",
      "options": [
       "ie–o",
       "ie–e",
       "e–o"
      ],
      "answer": "ie–o",
      "explanation": "词根 ziehen:angezogen。现在时完全不变音(er zieht an),但 PII 掉到 o——这类词现在时给不了任何提示,只能靠家族记。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G37",
     "title": "D. i–u 家族 + 三个 i 系叛徒（finden / singen / trinken）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "i → u，现在时不变音，全部 haben。刻意混入三个异类当陷阱：schwimmen 是 i–o 且用 sein，sitzen 是 i–e，liegen 是 ie–e，后两个都用 haben。",
     "mnemonic": "i 变 u 是正牌（sing–sung 像英语）；schwimmen 变 o 还用 ist，sitzen / liegen 变 e 却用 hat，这三个是叛徒。",
     "tables": [
      {
       "caption": "D. i–u 家族 + 三个 i 系叛徒（finden / singen / trinken） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "finden",
         "er findet",
         "hat gefunden",
         "找到;认为"
        ],
        [
         "stattfinden",
         "er findet statt",
         "hat stattgefunden",
         "举行，发生"
        ],
        [
         "zurückfinden",
         "er findet zurück",
         "hat zurückgefunden",
         "找回路"
        ],
        [
         "verbinden",
         "er verbindet",
         "hat verbunden",
         "连接;包扎"
        ],
        [
         "singen",
         "er singt",
         "hat gesungen",
         "唱歌"
        ],
        [
         "klingen",
         "er klingt",
         "hat geklungen",
         "听起来"
        ],
        [
         "trinken",
         "er trinkt",
         "hat getrunken",
         "喝"
        ],
        [
         "schwimmen",
         "er schwimmt",
         "ist geschwommen",
         "游泳"
        ],
        [
         "sitzen",
         "er sitzt",
         "hat gesessen",
         "坐着"
        ],
        [
         "liegen",
         "er liegt",
         "hat gelegen",
         "躺;位于"
        ]
       ]
      }
     ],
     "notes": [
      "finden 家族；主语只能是活动/事件",
      "虽含位移义仍用 hat(反直觉)",
      "不可分前缀,无 ge-;与 finden 同族",
      "ist 不是 hat（位移动词）",
      "hat 不是 ist（状态动词，反直觉）"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "fliegen 该进哪个桶?",
      "options": [
       "ie–o",
       "ie–e",
       "i–u"
      ],
      "answer": "ie–o",
      "explanation": "geflogen。同桶还有 riechen→gerochen、ziehen→gezogen、wiegen→gewogen。fliegen 是位移动词,用 ist。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G38",
     "title": "E. a–a 家族①：fahren 族 + fangen / fallen",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "PII 元音原地不动（a 回 a），难点全在现在时 a→ä。fahren 族 4 个继承 ist，hochfahren 及物用 hat；einfallen 用 sein，gefallen 用 haben 且 PII 与原形同形。",
     "mnemonic": "PII 一动不动，er 形头上加两点：fährt / fängt an / fällt ein / gefällt。fahren 全家坐车走人用 ist，只有 hochfahren 开电脑用 hat。",
     "tables": [
      {
       "caption": "E. a–a 家族①：fahren 族 + fangen / fallen — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "fahren",
         "er fährt",
         "ist gefahren",
         "开车;乘车去"
        ],
        [
         "abfahren",
         "er fährt ab",
         "ist abgefahren",
         "出发,开走"
        ],
        [
         "losfahren",
         "er fährt los",
         "ist losgefahren",
         "出发;启程"
        ],
        [
         "zurückfahren",
         "er fährt zurück",
         "ist zurückgefahren",
         "返回;开回"
        ],
        [
         "hochfahren",
         "er fährt hoch",
         "hat hochgefahren",
         "启动(电脑)"
        ],
        [
         "anfangen",
         "er fängt an",
         "hat angefangen",
         "开始"
        ],
        [
         "einfallen",
         "er fällt ein",
         "ist eingefallen",
         "想起,浮现"
        ],
        [
         "gefallen",
         "er gefällt",
         "hat gefallen",
         "讨人喜欢"
        ]
       ]
      }
     ],
     "notes": [
      "用 sein(位移动词)",
      "与 fahren 同族,用 sein",
      "用 sein",
      "位移动词用 ist;与 fahren 同族",
      "hat 不是 ist(与 fahren 相反,及物用法)"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "把卡片 abfahren 放进哪个家族桶?",
      "options": [
       "a–a",
       "e–a",
       "o–o"
      ],
      "answer": "a–a",
      "explanation": "按词根 fahren 判定:gefahren,PII 元音回到 a。现在时才变音(er fährt ab),PII 不变音——这是 a–a 家族的统一规律。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G39",
     "title": "F. a–a 家族②：schlafen / tragen 组 + laufen",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "同样 PII 元音回 a，现在时 a→ä；laufen 是 au→äu。全部 haben，唯独 einschlafen（状态变化）和 laufen（位移）用 sein。",
     "mnemonic": "schläft / trägt / wäscht / rät / lädt ein / läuft——六张变音脸，PII 一律回原形；schlafen 用 hat，einschlafen 用 ist。",
     "tables": [
      {
       "caption": "F. a–a 家族②：schlafen / tragen 组 + laufen — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "schlafen",
         "er schläft",
         "hat geschlafen",
         "睡觉"
        ],
        [
         "einschlafen",
         "er schläft ein",
         "ist eingeschlafen",
         "入睡"
        ],
        [
         "tragen",
         "er trägt",
         "hat getragen",
         "携带；穿着"
        ],
        [
         "waschen",
         "er wäscht",
         "hat gewaschen",
         "洗"
        ],
        [
         "raten",
         "er rät",
         "hat geraten",
         "猜；建议"
        ],
        [
         "einladen",
         "er lädt ein",
         "hat eingeladen",
         "邀请"
        ],
        [
         "laufen",
         "er läuft",
         "ist gelaufen",
         "跑;走路"
        ]
       ]
      }
     ],
     "notes": [
      "现在时变音但 PII 不变音",
      "schlafen 用 haben,einschlafen 用 sein",
      "PII 词干与原形同形（geraten），只是现在时变音",
      "er lädt ein(不是 ladet)",
      "用 sein;现在时 au→äu"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "把卡片 einladen 放进哪个家族桶?它的 er 形式是?",
      "options": [
       "a–a,er lädt ein",
       "a–a,er ladet ein",
       "e–a,er lädt ein"
      ],
      "answer": "a–a,er lädt ein",
      "explanation": "eingeladen 属 a–a。现在时 a→ä 且不加 e:er lädt ein,写成 er ladet ein 是把强变化误当弱变化。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G40",
     "title": "G. e–e 家族①：现在时 e→ie（sehen / lesen 组）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "现在时 e→ie（er sieht / er liest），PII 老老实实回 e：gesehen / gelesen。全部 haben，可分前缀夹 ge-（ferngesehen / vorgelesen）。",
     "mnemonic": "眼睛一睁大变 ie（sieht / liest），过去分词又乖乖眯回 e；aussehen 看着像位移，其实用 hat。",
     "tables": [
      {
       "caption": "G. e–e 家族①：现在时 e→ie（sehen / lesen 组） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "sehen",
         "er sieht",
         "hat gesehen",
         "看见"
        ],
        [
         "ansehen",
         "er sieht an",
         "hat angesehen",
         "观看,注视"
        ],
        [
         "aussehen",
         "er sieht aus",
         "hat ausgesehen",
         "看起来"
        ],
        [
         "fernsehen",
         "er sieht fern",
         "hat ferngesehen",
         "看电视"
        ],
        [
         "lesen",
         "er liest",
         "hat gelesen",
         "读;阅读"
        ],
        [
         "mitlesen",
         "er liest mit",
         "hat mitgelesen",
         "跟着读"
        ],
        [
         "vorlesen",
         "er liest vor",
         "hat vorgelesen",
         "朗读"
        ]
       ]
      }
     ],
     "notes": [
      "现在时变 ie，但 PII 回到 e",
      "hat 不是 ist(反直觉)",
      "词根 sehen,现在时 e→ie",
      "er liest 只有一个 s(词干已含 s)",
      "ge- 夹在 vor- 之后"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "sehen 该进哪个桶?",
      "options": [
       "e–e",
       "e–o",
       "ie–e"
      ],
      "answer": "e–e",
      "explanation": "gesehen。现在时 e→ie(er sieht),PII 却回到 e。ansehen / aussehen / fernsehen / vorlesen 之类全族同理。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G41",
     "title": "H. e–e 家族②：现在时 e→i（geben / essen 组）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "现在时 e→i（er gibt / er isst / er vergisst），PII 仍回 e。essen 的 PII 例外多一个 ge → gegessen；vergessen 不可分，PII 与原形同形。全部 haben。",
     "mnemonic": "e 缩成 i（gibt / isst / vergisst），分词又长回 e；essen 太饿，多吃一个 ge → gegessen。",
     "tables": [
      {
       "caption": "H. e–e 家族②：现在时 e→i（geben / essen 组） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "geben",
         "er gibt",
         "hat gegeben",
         "给"
        ],
        [
         "eingeben",
         "er gibt ein",
         "hat eingegeben",
         "输入,录入"
        ],
        [
         "wiedergeben",
         "er gibt wieder",
         "hat wiedergegeben",
         "归还;复述"
        ],
        [
         "essen",
         "er isst",
         "hat gegessen",
         "吃"
        ],
        [
         "vergessen",
         "er vergisst",
         "hat vergessen",
         "忘记"
        ]
       ]
      }
     ],
     "notes": [
      "wieder- 此处可分(有 ge- 夹中间)",
      "PII 例外多出一个 ge:gegessen",
      "PII 与原形同形(不可分前缀,无 ge-)"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "geben 该进哪个桶?",
      "options": [
       "e–e",
       "e–o",
       "e–a"
      ],
      "answer": "e–e",
      "explanation": "gegeben:现在时变音(er gibt),但 PII 回到 e。这就是「PII 回 e」组的标志。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G42",
     "title": "I. e–o 家族（nehmen / sprechen / helfen）——与 H 是最易互污的一对",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "现在时 e→i，PII 却掉到 o：nimmt→genommen、spricht→gesprochen、hilft→geholfen。empfehlen 是唯一现在时走 ie（empfiehlt）但 PII 仍是 o 的词，且 emp- 不可分无 ge-。全部 haben。",
     "mnemonic": "现在时 e 缩成 i，分词一路掉到 o；nehmen 掉得最狠——h 没了、m 变双（nimmt / genommen）。",
     "tables": [
      {
       "caption": "I. e–o 家族（nehmen / sprechen / helfen）——与 H 是最易互污的一对 — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "nehmen",
         "er nimmt",
         "hat genommen",
         "拿，取"
        ],
        [
         "annehmen",
         "er nimmt an",
         "hat angenommen",
         "接受,假定"
        ],
        [
         "mitnehmen",
         "er nimmt mit",
         "hat mitgenommen",
         "带走;捎上"
        ],
        [
         "sprechen",
         "er spricht",
         "hat gesprochen",
         "说话"
        ],
        [
         "mitsprechen",
         "er spricht mit",
         "hat mitgesprochen",
         "跟着说"
        ],
        [
         "nachsprechen",
         "er spricht nach",
         "hat nachgesprochen",
         "跟读"
        ],
        [
         "helfen",
         "er hilft",
         "hat geholfen",
         "帮助"
        ],
        [
         "treffen",
         "er trifft",
         "hat getroffen",
         "遇见，会面"
        ],
        [
         "empfehlen",
         "er empfiehlt",
         "hat empfohlen",
         "推荐"
        ]
       ]
      }
     ],
     "notes": [
      "现在时 er nimmt 辅音也变（h→mm），需死记",
      "er nimmt an 词干大改(nehm→nimm),双写 mm",
      "现在时双写 mm:er nimmt mit",
      "sprechen 家族，可分前缀 ge- 夹中间",
      "sprechen 家族，可分前缀 ge- 夹中间"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "sprechen 该进哪个桶?",
      "options": [
       "e–o",
       "e–e",
       "e–a"
      ],
      "answer": "e–o",
      "explanation": "gesprochen:PII 掉到 o。现在时 e→i(er spricht)。mitsprechen / nachsprechen 按词根同桶。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G43",
     "title": "J. e–a 家族：gehen / stehen（词干整体改写）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "现在时完全不变音，PII 词干整个换掉：geh→gang（gegangen）、steh→stand（gestanden）。gehen 系全部 sein；stehen 系 haben，唯独 aufstehen 用 sein。",
     "mnemonic": "geh 变 gang、steh 变 stand，推不出来只能背声音；gehen 全家出门用 ist，stehen 全家站着用 hat，aufstehen 起床叛变用 ist。",
     "tables": [
      {
       "caption": "J. e–a 家族：gehen / stehen（词干整体改写） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "gehen",
         "er geht",
         "ist gegangen",
         "走;去"
        ],
        [
         "ausgehen",
         "er geht aus",
         "ist ausgegangen",
         "外出,出门"
        ],
        [
         "losgehen",
         "er geht los",
         "ist losgegangen",
         "开始;动身"
        ],
        [
         "rausgehen",
         "er geht raus",
         "ist rausgegangen",
         "出去"
        ],
        [
         "stehen",
         "er steht",
         "hat gestanden",
         "站立"
        ],
        [
         "aufstehen",
         "er steht auf",
         "ist aufgestanden",
         "起床,起立"
        ],
        [
         "verstehen",
         "er versteht",
         "hat verstanden",
         "理解;懂"
        ]
       ]
      }
     ],
     "notes": [
      "用 sein",
      "gehen 族特殊变化 geh→gang",
      "用 sein",
      "gehen 家族，位移动词用 sein",
      "hat 不是 ist（德标准语；南德才用 ist）"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "gehen 该进哪个桶?",
      "options": [
       "e–a",
       "e–e",
       "e–o"
      ],
      "answer": "e–a",
      "explanation": "gegangen:gehen 族词干整体大改(geh→gang),归 e–a。ausgehen / losgehen / rausgehen 同族,全部用 sein。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G44",
     "title": "K. o–o 家族：kommen 一族",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "三形都是 o，现在时一点不变。全族 sein，唯独 bekommen 用 haben，且 be- 不可分、PII 与原形同形（hat bekommen）。",
     "mnemonic": "kommen 全家从头 o 到尾，来来去去用 ist；bekommen「收到」不动地方，用 hat 还不加 ge-。",
     "tables": [
      {
       "caption": "K. o–o 家族：kommen 一族 — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "kommen",
         "er kommt",
         "ist gekommen",
         "来"
        ],
        [
         "ankommen",
         "er kommt an",
         "ist angekommen",
         "到达"
        ],
        [
         "mitkommen",
         "er kommt mit",
         "ist mitgekommen",
         "一起来"
        ],
        [
         "drankommen",
         "er kommt dran",
         "ist drangekommen",
         "轮到"
        ],
        [
         "bekommen",
         "er bekommt",
         "hat bekommen",
         "得到,收到"
        ]
       ]
      }
     ],
     "notes": [
      "用 sein",
      "现在时不变音;kommen 词干本就是 o,PII 仍是 o;用 sein",
      "用 sein",
      "dran- 可分,ge- 夹在中间",
      "不可分前缀,无 ge-;PII 与原形同形;kommen 用 sein 但此词用 hat"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "kommen 该进哪个桶?",
      "options": [
       "o–o",
       "e–o",
       "ie–o"
      ],
      "answer": "o–o",
      "explanation": "gekommen:原形已经是 o,PII 还是 o。ankommen / mitkommen / drankommen / bekommen 全族同桶。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G45",
     "title": "L. Mischverben 混合动词",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "既换元音又加 -t（不是 -en）：bringen→gebracht、denken→gedacht、kennen→gekannt、nennen→genannt、wissen→gewusst。现在时基本不变音，只有 wissen 单数不规则（weiß / weißt / weiß）。全部 haben。",
     "mnemonic": "混合动词=换元音还要加 -t，五个一起背永远不拆散：bracht / dacht / kannt / nannt / wusst。",
     "tables": [
      {
       "caption": "L. Mischverben 混合动词 — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "bringen",
         "er bringt",
         "hat gebracht",
         "带来,拿来"
        ],
        [
         "mitbringen",
         "er bringt mit",
         "hat mitgebracht",
         "带来"
        ],
        [
         "denken",
         "er denkt",
         "hat gedacht",
         "想,思考"
        ],
        [
         "kennen",
         "er kennt",
         "hat gekannt",
         "认识;熟悉"
        ],
        [
         "nennen",
         "er nennt",
         "hat genannt",
         "称呼，说出"
        ],
        [
         "wissen",
         "er weiß",
         "hat gewusst",
         "知道"
        ]
       ]
      }
     ],
     "notes": [
      "混合动词:换元音又加 -t",
      "混合动词:变元音又加 -t",
      "混合动词:换元音又加 -t",
      "混合动词:变元音又加 -t",
      "混合动词：变元音 e→a 又加 -t"
     ],
     "examples": [],
     "miniQuiz": {
      "type": "choice",
      "prompt": "mitbringen 该进哪个桶?",
      "options": [
       "Mischverb(混合动词)",
       "i–u",
       "e–a"
      ],
      "answer": "Mischverb(混合动词)",
      "explanation": "词根 bringen 是混合动词:既换元音又加 -t → mitgebracht。同类还有 denken→gedacht、kennen→gekannt、nennen→genannt、wissen→gewusst。这一桶不属于任何元音家族,必须单独立一个桶。"
     },
     "related": [
      "G33"
     ]
    },
    {
     "id": "G46",
     "title": "M. Sonderformen 特殊形（haben / sein / werden / tun 四个词根）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "无规律可推，却撑起整个完成时。haben→gehabt、sein→gewesen、werden→geworden、tun→getan。sein 和 werden 用 sein，其余用 haben；可分派生词照样 ge- 夹中间（freigehabt / zugehabt / wehgetan / leidgetan）。",
     "mnemonic": "四个引擎没有规律：gehabt / gewesen / geworden / getan；sein 和 werden 用 ist，haben 和 tun 用 hat。",
     "tables": [
      {
       "caption": "M. Sonderformen 特殊形（haben / sein / werden / tun 四个词根） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "haben",
         "er hat",
         "hat gehabt",
         "有;拥有"
        ],
        [
         "freihaben",
         "er hat frei",
         "hat freigehabt",
         "有空;放假"
        ],
        [
         "zuhaben",
         "er hat zu",
         "hat zugehabt",
         "关门;未营业"
        ],
        [
         "sein",
         "er ist",
         "ist gewesen",
         "是;存在"
        ],
        [
         "los sein",
         "er ist los",
         "ist los gewesen",
         "发生;出事"
        ],
        [
         "werden",
         "er wird",
         "ist geworden",
         "变成;成为"
        ],
        [
         "tun",
         "er tut",
         "hat getan",
         "做"
        ],
        [
         "wehtun",
         "er tut weh",
         "hat wehgetan",
         "疼;弄疼"
        ],
        [
         "leidtun",
         "er tut leid",
         "hat leidgetan",
         "感到抱歉"
        ]
       ]
      }
     ],
     "notes": [
      "完全不规则:du hast / er hat",
      "词根 haben,PII 弱变化 freigehabt",
      "haben 不规则;可分,ge- 夹中间",
      "完全不规则:bin/bist/ist;完成时用 ist",
      "词根 sein,分写;常用 Was ist los?"
     ],
     "examples": [],
     "related": [
      "G33"
     ]
    },
    {
     "id": "G47",
     "title": "N. Modalverben 情态动词（只背现在时）",
     "level": "A2",
     "difficulty": 3,
     "tags": [
      "perfekt",
      "ablaut"
     ],
     "summary": "现在时单数掉变音且 er 不加 -t：er darf / kann / muss / soll / will / mag / möchte。PII 全是 ge-…-t（gedurft / gekonnt / gemusst / gesollt / gewollt / gemocht），但带动词不定式时用替代不定式（hat kommen können），A1/A2 阶段只需认得。möchten 无独立 PII，借 mögen 的 gemocht。",
     "mnemonic": "情态动词单数脱帽（ü/ö 变 a/u/i）、er 不戴 -t；分词一律 ge-…-t，但真句子里用替代不定式，先认后背。",
     "tables": [
      {
       "caption": "N. Modalverben 情态动词（只背现在时） — 可开「默写模式」",
       "maskable": true,
       "headers": [
        "原形",
        "er-形式",
        "完成时",
        "中文"
       ],
       "rows": [
        [
         "dürfen",
         "er darf",
         "hat gedurft",
         "允许;可以"
        ],
        [
         "können",
         "er kann",
         "hat gekonnt",
         "能;会"
        ],
        [
         "müssen",
         "er muss",
         "hat gemusst",
         "必须"
        ],
        [
         "sollen",
         "er soll",
         "hat gesollt",
         "应该"
        ],
        [
         "wollen",
         "er will",
         "hat gewollt",
         "想要"
        ],
        [
         "mögen",
         "er mag",
         "hat gemocht",
         "喜欢"
        ],
        [
         "möchten",
         "er möchte",
         "hat gemocht",
         "想要;愿意"
        ]
       ]
      }
     ],
     "notes": [
      "带动词不定式时用 hat dürfen(替代不定式)",
      "带动词不定式时用 hat können",
      "带动词不定式时用 hat müssen",
      "现在时单数不变音;带不定式时用 hat sollen",
      "带动词不定式时用 hat wollen"
     ],
     "examples": [],
     "related": [
      "G33"
     ]
    }
   ],
   "vocab": [],
   "exercises": [
    {
     "type": "choice",
     "prompt": "Er ___ den Computer hochgefahren.（他把电脑启动了）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "hochfahren 在「启动电脑」义上是及物动词（den Computer 是第四格宾语），及物动词一律用 haben。注意它是 fahren 家族 5 个词里唯一用 hat 的：fahren / abfahren / losfahren / zurückfahren 全部用 ist。"
    },
    {
     "type": "choice",
     "prompt": "fahren 的完成时正确形式是？",
     "options": [
      "ist gefahren",
      "hat gefahren",
      "hat gefahrt"
     ],
     "answer": "ist gefahren",
     "explanation": "fahren 是位移动词，用 sein。它属 a–a 组：原形 a、PII 回到 a（gefahren），只有现在时变音 er fährt。gefahrt 是把强变化误当弱变化。"
    },
    {
     "type": "fill",
     "prompt": "abfahren（出发，可分）的第二分词是 ___。",
     "hint": "可分前缀在前，ge- 夹在前缀和词干中间；元音跟 fahren 一样不变",
     "answer": [
      "abgefahren"
     ],
     "explanation": "可分动词的 ge- 永远插在前缀与词干之间：ab + ge + fahren。a–a 组元音不变，助动词随 fahren 用 ist。"
    },
    {
     "type": "choice",
     "prompt": "Der Bus ___ pünktlich losgefahren.（公交准时出发了）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "losfahren 表位移，用 sein。fahren 族默认 ist，唯一例外是及物的 hochfahren（hat）。"
    },
    {
     "type": "fill",
     "prompt": "zurückfahren 的第三人称单数现在时是 ___。",
     "hint": "a→ä 变音只发生在现在时单数，可分前缀要后置分写",
     "answer": [
      "er fährt zurück",
      "fährt zurück",
      "er faehrt zurueck",
      "faehrt zurueck"
     ],
     "explanation": "a→ä 只在现在时第二、三人称单数发生，故 fährt；zurück- 是可分前缀，必须后置分写成 er fährt zurück，写成 fährtzurück 判错。"
    },
    {
     "type": "choice",
     "prompt": "bekommen 的第二分词是？",
     "options": [
      "bekommen",
      "gebekommen",
      "bekommt"
     ],
     "answer": "bekommen",
     "explanation": "be- 是不可分前缀，带不可分前缀的动词第二分词不加 ge-；kommen 是 o–o 组，词干元音本来就是 o，所以 PII 与原形完全同形：er hat bekommen。"
    },
    {
     "type": "fill",
     "prompt": "kommen 的第二分词是 ___。",
     "hint": "o–o 组，简单动词要加 ge-",
     "answer": [
      "gekommen"
     ],
     "explanation": "kommen 属 o–o 组，元音不变，简单动词加 ge- 和 -en。它是位移动词，用 ist gekommen。"
    },
    {
     "type": "choice",
     "prompt": "Der Zug ___ um acht angekommen.（火车八点到了）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "ankommen 是位移动词用 sein。整个 kommen 家族（kommen / ankommen / mitkommen / drankommen）都用 ist，唯独 bekommen 用 hat——因为它已经不表示「来」而是「得到」。"
    },
    {
     "type": "fill",
     "prompt": "mitkommen 的第二分词是 ___。",
     "hint": "可分前缀 mit- 在前，ge- 夹中间，元音保持 o",
     "answer": [
      "mitgekommen"
     ],
     "explanation": "mit + ge + kommen。o–o 组不换元音；随 kommen 用 ist mitgekommen。"
    },
    {
     "type": "choice",
     "prompt": "drankommen（轮到）的第二分词是？",
     "options": [
      "drangekommen",
      "gedrankommen",
      "drankommen"
     ],
     "answer": "drangekommen",
     "explanation": "dran- 是可分前缀，所以 ge- 必须夹在中间：dran + ge + kommen。放到最前面（gedrankommen）是把可分误判成不可分。"
    },
    {
     "type": "choice",
     "prompt": "aufstehen 的完成时是？",
     "options": [
      "ist aufgestanden",
      "hat aufgestanden",
      "ist aufgestehen"
     ],
     "answer": "ist aufgestanden",
     "explanation": "aufstehen 表状态变化/位移，用 sein——这是反直觉点：同族的 stehen 和 verstehen 都用 hat。词干 e–a 变化：steh→stand。"
    },
    {
     "type": "fill",
     "prompt": "stehen 的第二分词是 ___。",
     "hint": "e–a 组，词干末尾还多一个 d",
     "answer": [
      "gestanden"
     ],
     "explanation": "stehen 属 e–a 组，PII 为 gestanden（词干扩展出 -d-）。德国标准语用 hat gestanden，不是 ist。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ die Frage verstanden.（他听懂了这个问题）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "verstehen 是及物动词，用 haben。ver- 不可分所以无 ge-：verstanden。别被同族 aufstehen（ist）带跑。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ zwei Stunden gesessen.（他坐了两小时）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "sitzen 是状态动词，德国标准语用 haben。同理 liegen 也是 hat gelegen。别因为 aufstehen 用 ist 就把这一组也改成 ist。"
    },
    {
     "type": "fill",
     "prompt": "liegen 的第二分词是 ___。",
     "hint": "ie–e 组，元音缩短成 e；别和规则动词 legen 混",
     "answer": [
      "gelegen"
     ],
     "explanation": "liegen 属 ie–e 组：ie 在 PII 里变成短 e，得 gelegen。助动词是 hat。规则动词 legen（放）的 PII 是 gelegt，形近但不同。"
    },
    {
     "type": "choice",
     "prompt": "Das Kind ___ sofort eingeschlafen.（孩子马上睡着了）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "einschlafen 表「状态变化」（从醒到睡），状态变化动词用 sein；而 schlafen 表状态持续，用 hat geschlafen。同一对立还有 einfallen（ist）对 gefallen（hat）。"
    },
    {
     "type": "fill",
     "prompt": "schlafen 的第二分词是 ___。",
     "hint": "a–a 组，现在时才变音，PII 不变音",
     "answer": [
      "geschlafen"
     ],
     "explanation": "schlafen 属 a–a 组：现在时 er schläft 变音，但 PII 回到 a，写 geschlafen 而不是 *geschläfen。助动词 hat。"
    },
    {
     "type": "choice",
     "prompt": "Mir ___ der Name eingefallen.（我想起这个名字了）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "einfallen 表突然出现的状态变化，用 sein，并常带第三格（mir）。对照 gefallen 用 hat——ein- 与 ge- 一个可分一个不可分，助动词也相反。"
    },
    {
     "type": "choice",
     "prompt": "gefallen 的第二分词是？",
     "options": [
      "gefallen",
      "gegefallen",
      "gefallt"
     ],
     "answer": "gefallen",
     "explanation": "这里的 ge- 是不可分前缀，已经占了位置，不能再加一个 ge-，所以 PII 与原形同形：Das Buch hat mir gefallen。a–a 组元音不变；gefallt 是误用弱变化。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ heute müde ausgesehen.（他今天看起来很累）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "aussehen 是感官/状态动词，用 haben，尽管长得像 aus- 开头的位移词（aussteigen ist / ausgehen ist）。sehen 家族 ansehen、fernsehen 同样全部用 hat。"
    },
    {
     "type": "fill",
     "prompt": "ansehen 的第二分词是 ___。",
     "hint": "可分动词，ge- 夹中间；e–e 组元音不变",
     "answer": [
      "angesehen"
     ],
     "explanation": "an + ge + sehen。sehen 属 e–e 组：现在时变 ie（er sieht an），但 PII 回到 e。助动词 hat。"
    },
    {
     "type": "fill",
     "prompt": "fernsehen 的第三人称单数现在时是 ___。",
     "hint": "词根是 sehen，现在时 e→ie；可分部分要后置",
     "answer": [
      "er sieht fern",
      "sieht fern"
     ],
     "explanation": "词根 sehen 现在时 e→ie，故 sieht；fern- 可分必须后置分写：er sieht fern。PII 为 ferngesehen，助动词 hat。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ zu Hause geblieben.（他待在家里了）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "bleiben 完全不表示位移，却用 sein——这是纯例外，任何规则都推不出来，只能死记 ist geblieben。它属 ei–ie 组，PII 为 geblieben。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ den Weg zurückgefunden.（他找回了路）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "尽管带 zurück- 且有位移义，zurückfinden 仍用 haben——finden 家族（finden / stattfinden / verbinden / zurückfinden）一律 hat。i–u 组：zurückgefunden。"
    },
    {
     "type": "fill",
     "prompt": "finden 的第二分词是 ___。",
     "hint": "i–u 组，元音换成 u",
     "answer": [
      "gefunden"
     ],
     "explanation": "finden 属 i–u 组，与 singen / klingen / trinken 同队：i 在 PII 变 u，得 gefunden。助动词 hat。"
    },
    {
     "type": "fill",
     "prompt": "stattfinden（举行）的第二分词是 ___。",
     "hint": "可分前缀 statt- 在前，ge- 夹中间，元音变 u",
     "answer": [
      "stattgefunden"
     ],
     "explanation": "statt + ge + funden。i–u 组元音变 u；主语只能是活动/事件，助动词 hat：Das Konzert hat stattgefunden。"
    },
    {
     "type": "choice",
     "prompt": "verbinden 的第二分词是？",
     "options": [
      "verbunden",
      "gebunden",
      "verbindet"
     ],
     "answer": "verbunden",
     "explanation": "ver- 不可分，所以不加 ge-；i–u 组元音变 u，得 verbunden。gebunden 是另一个词 binden 的 PII，属干扰项。"
    },
    {
     "type": "fill",
     "prompt": "anziehen（穿上）的第二分词是 ___。",
     "hint": "可分，ge- 夹中间；ie 在 PII 变 o",
     "answer": [
      "angezogen"
     ],
     "explanation": "an + ge + zogen。ziehen 属 ie–o 组，PII 元音变 o。anziehen 恒用 hat。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ die Jacke ausgezogen.（他脱下了外套）",
     "options": [
      "hat",
      "ist",
      "wird"
     ],
     "answer": "hat",
     "explanation": "表「脱衣」时 ausziehen 是及物的，用 haben；只有表「搬出（住处）」时才用 ist ausgezogen。ziehen 一族三种结果：anziehen 恒 hat、ausziehen 双解、umziehen（搬家）ist。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ letzte Woche nach Wien umgezogen.（他上周搬到维也纳）",
     "options": [
      "ist",
      "hat",
      "wird"
     ],
     "answer": "ist",
     "explanation": "umziehen 表「搬家」是位置变化，用 sein。但反身的 sich umziehen（换衣服）用 hat sich umgezogen——同一个词根，助动词随意义翻转。"
    },
    {
     "type": "fill",
     "prompt": "ziehen 的第二分词是 ___。",
     "hint": "ie–o 组，PII 元音落到 o",
     "answer": [
      "gezogen"
     ],
     "explanation": "ziehen 属 ie–o 组：现在时不变音（er zieht），但 PII 变 o，得 gezogen。一般用 hat；表「搬迁」时用 ist gezogen。"
    },
    {
     "type": "choice",
     "prompt": "essen 的第二分词是？",
     "options": [
      "gegessen",
      "geessen",
      "gessen"
     ],
     "answer": "gegessen",
     "explanation": "essen 的 PII 例外地多出一个 ge：gegessen（历史上词干本身带 g-）。这是全表唯一一例，写成 geessen 是最常见的错。此格不做元音容错。"
    },
    {
     "type": "fill",
     "prompt": "einladen（邀请）的第三人称单数现在时是 ___。",
     "hint": "a→ä 变音，且词干后不加 -et；可分部分后置",
     "answer": [
      "er lädt ein",
      "lädt ein",
      "er laedt ein",
      "laedt ein"
     ],
     "explanation": "laden 是强变化：er lädt，绝不是 *er ladet ein（强变化动词不插入口语 -e-）。ein- 可分必须后置：er lädt ein。PII 为 eingeladen。"
    },
    {
     "type": "choice",
     "prompt": "raten（猜/建议）的第三人称单数现在时是？",
     "options": [
      "er rät",
      "er ratet",
      "er rätet"
     ],
     "answer": "er rät",
     "explanation": "raten 是 a–a 组强变化，现在时 a→ä 且不加 -et：er rät。同排必须一起过的还有 er wäscht、er trägt、er lädt ein。PII 是 geraten，元音回到 a。"
    },
    {
     "type": "fill",
     "prompt": "waschen 的第三人称单数现在时是 ___。",
     "hint": "a→ä 变音，词干以 sch 结尾直接加 -t",
     "answer": [
      "er wäscht",
      "wäscht",
      "er waescht",
      "waescht"
     ],
     "explanation": "a→ä 只出现在现在时单数：er wäscht。PII 回到 a：gewaschen，助动词 hat。"
    },
    {
     "type": "fill",
     "prompt": "tragen 的第三人称单数现在时是 ___。",
     "hint": "a→ä 变音的 a–a 组",
     "answer": [
      "er trägt",
      "trägt",
      "er traegt",
      "traegt"
     ],
     "explanation": "a–a 组现在时变音：er trägt；PII 元音回到 a：getragen。助动词 hat。"
    },
    {
     "type": "choice",
     "prompt": "laufen 的第三人称单数现在时是？",
     "options": [
      "er läuft",
      "er läft",
      "er lauft"
     ],
     "answer": "er läuft",
     "explanation": "laufen 的现在时变音是 au→äu，不是 a→ä，所以是 er läuft。PII 回到 au：gelaufen，位移动词用 ist。"
    },
    {
     "type": "fill",
     "prompt": "empfehlen（推荐）的第三人称单数现在时是 ___。",
     "hint": "e→ie 变音，注意 f 后面还有 h",
     "answer": [
      "er empfiehlt",
      "empfiehlt"
     ],
     "explanation": "现在时 e→ie：er empfiehlt，常被误写成 *empfielt（漏 h）。empfehlen 三个方向各变一次：现在时 ie、PII 却是 o（empfohlen）、emp- 不可分故无 ge-。"
    },
    {
     "type": "choice",
     "prompt": "empfehlen 的第二分词是？",
     "options": [
      "empfohlen",
      "geempfohlen",
      "empfiehlen"
     ],
     "answer": "empfohlen",
     "explanation": "emp- 是不可分前缀，不加 ge-；虽然现在时是 e→ie，PII 却掉到 o（e–o 组）：empfohlen。三个形式三个元音，是全表最难的一个词。"
    },
    {
     "type": "fill",
     "prompt": "nehmen 的第三人称单数现在时是 ___。",
     "hint": "不仅元音 e→i，辅音也变了：h 消失、m 双写",
     "answer": [
      "er nimmt",
      "nimmt"
     ],
     "explanation": "nehmen 现在时词干被改造两次：nehm→nimm（e→i 且 h→mm），故 er nimmt。PII 同样双写：genommen。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Ich bin um 7 Uhr aufgestanden.",
     "options": [
      "正确",
      "错：bin 应改为 habe",
      "错：aufgestanden 应改为 geaufstanden"
     ],
     "answer": "正确",
     "explanation": "aufstehen 表示「状态变化」，完成时用 sein，所以 ich bin aufgestanden 是对的（注意同族的 stehen / verstehen 反而用 haben）。可分前缀 auf- 后面夹 ge-：auf+ge+standen，写成 geaufstanden 是把 ge- 放错了位置。"
    },
    {
     "type": "fill",
     "prompt": "改错：Der Zug ist geabfahren.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "可分前缀和词干之间少了点什么，多出来的东西跑到最前面去了",
     "answer": [
      "abgefahren",
      "Abgefahren"
     ],
     "explanation": "可分动词的 ge- 必须夹在可分前缀和词干中间：ab + ge + fahren → abgefahren，不能整体前置写成 geabfahren。abfahren 是位移动词，助动词 ist 用得没错。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Er hat den Computer hochgefahren.",
     "options": [
      "正确",
      "错：hat 应改为 ist",
      "错：hochgefahren 应改为 gehochfahren"
     ],
     "answer": "正确",
     "explanation": "hochfahren（启动电脑）带宾语 den Computer，是及物用法，所以用 haben——它是 fahren 家族（fahren / abfahren / losfahren / zurückfahren 全用 sein）里唯一的叛徒。ge- 也正确地夹在 hoch- 之后。"
    },
    {
     "type": "fill",
     "prompt": "改错：Er hat das Geschenk begekommen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "be- 这类前缀不允许再插入那个音节",
     "answer": [
      "bekommen",
      "Bekommen"
     ],
     "explanation": "be- 是不可分前缀，带不可分前缀的动词第二分词一律不加 ge-，所以是 hat bekommen（PII 与原形完全同形）。另外 bekommen 用 haben，虽然 kommen / ankommen / mitkommen 都用 sein。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Ich habe den Brief bekommen.",
     "options": [
      "正确",
      "错：habe 应改为 bin",
      "错：bekommen 应改为 begekommen"
     ],
     "answer": "正确",
     "explanation": "bekommen 一词踩三个坑而这句全躲过了：用 haben（不跟 kommen 族的 sein 走）、be- 不可分所以无 ge-、第二分词与不定式同形。"
    },
    {
     "type": "fill",
     "prompt": "改错：Ich bin um sechs geaufstanden.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "ge- 站错了队；助动词本身没问题",
     "answer": [
      "aufgestanden",
      "Aufgestanden"
     ],
     "explanation": "aufstehen 是可分动词，ge- 要夹在中间：auf + ge + standen → aufgestanden。词干还是 stehen 的 e–a 换音（gestanden）。助动词 bin 正确，aufstehen 用 sein。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Ich bin zu Hause geblieben.",
     "options": [
      "正确",
      "错：bin 应改为 habe",
      "错：geblieben 应改为 gebleiben"
     ],
     "answer": "正确",
     "explanation": "bleiben 完全不位移却用 sein，是纯例外必须死记。元音上它属于 ei→ie 长音一队（bleiben / schreiben / steigen / scheinen），所以是 geblieben 不是 gebleiben。"
    },
    {
     "type": "fill",
     "prompt": "改错：Er hat mir das Buch geempfohlen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "emp- 属于不可分前缀那一类",
     "answer": [
      "empfohlen",
      "Empfohlen"
     ],
     "explanation": "emp- 是不可分前缀，第二分词不加 ge-，正确形式是 empfohlen。注意 empfehlen 三个方向各变一次：现在时 e→ie（er empfiehlt）、PII 掉到 o（empfohlen）、无 ge-。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Wir haben Pizza gegessen.",
     "options": [
      "正确",
      "错：haben 应改为 sind",
      "错：gegessen 应改为 geessen"
     ],
     "answer": "正确",
     "explanation": "essen 的第二分词是全表唯一多出一个 ge 的例外：ge + gessen = gegessen，写成 geessen 是最常见的错。essen 及物，助动词用 haben。"
    },
    {
     "type": "fill",
     "prompt": "改错：Ich habe zu viel geessen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "这个词的第二分词比你想的多一个音节，是全表孤例",
     "answer": [
      "gegessen",
      "Gegessen"
     ],
     "explanation": "essen → gegessen，词干已经是 gess-，前面还要再加 ge-，形成全表唯一的「双 ge」。这条只能死记，没有规律可推。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Er ist im See geschwommen.",
     "options": [
      "正确",
      "错：ist 应改为 hat",
      "错：geschwommen 应改为 geschwummen"
     ],
     "answer": "正确",
     "explanation": "schwimmen 是 i–o 组（geschwommen），不跟 finden/singen/trinken 的 i–u 组（gefunden/gesungen/getrunken）走；而且作为位移动词用 sein。两个反直觉点这句都对。"
    },
    {
     "type": "fill",
     "prompt": "改错：Er ist im Meer geschwummen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "它不属于 gefunden / gesungen 那一队，元音落点不一样",
     "answer": [
      "geschwommen",
      "Geschwommen"
     ],
     "explanation": "schwimmen 的换音组是 i–o，第二分词 geschwommen，不是 i–u 的 *geschwummen。助动词 ist 正确（位移动词）。"
    },
    {
     "type": "fill",
     "prompt": "改错：Sie hat mir das Buch gegoben.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "这个词属于「现在时变 i、第二分词回到原元音」那一类",
     "answer": [
      "gegeben",
      "Gegeben"
     ],
     "explanation": "geben 属于 e–e 组：现在时 er gibt 变 i，但第二分词回到 e，写作 gegeben。*gegoben 是把它误当成 e–o 组（如 nehmen→genommen、helfen→geholfen）。"
    },
    {
     "type": "fill",
     "prompt": "改错：Sie hat die Tür geschliessen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "元音变短了，长音的那个字母也得跟着换写法",
     "answer": [
      "geschlossen",
      "Geschlossen"
     ],
     "explanation": "schließen 属 ie–o 组，第二分词元音变短为 o，短元音后 ß 必须改写成 ss：geschlossen。同款三连还有 genießen→genossen、erschließen→erschlossen。"
    },
    {
     "type": "fill",
     "prompt": "改错：Sie hat die Tür geschlossen.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "逐项核对：助动词对不对、ge- 位置对不对、元音和辅音写法对不对",
     "answer": [
      "richtig",
      "Richtig",
      "对",
      "正确"
     ],
     "explanation": "这句完全正确。schließen → geschlossen（ie–o，短元音故 ß→ss），及物动词用 haben。别因为看到 ss 就以为写错了。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Er lädt mich ein.",
     "options": [
      "正确",
      "错：lädt 应改为 ladet",
      "错：lädt 应改为 lädet"
     ],
     "answer": "正确",
     "explanation": "einladen 属 a→ä 变音一排，第三人称单数是 er lädt ein，既变音又不加 -e-。*er ladet ein 是最典型的错。同排还要一起过的有 er rät、er wäscht、er trägt。"
    },
    {
     "type": "fill",
     "prompt": "改错：Er ladet uns zum Essen ein.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "这是现在时 a→ä 那一排的词，第三人称单数不加多余的 e",
     "answer": [
      "lädt",
      "Lädt"
     ],
     "explanation": "einladen 现在时 a→ä：er lädt ein。词干以 d 结尾时通常要加 -et，但强变化变音动词不走这条规则，所以不是 *ladet 也不是 *lädet。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Er empfiehlt mir ein Buch.",
     "options": [
      "正确",
      "错：empfiehlt 应改为 empfielt",
      "错：empfiehlt 应改为 empfehlt"
     ],
     "answer": "正确",
     "explanation": "empfehlen 现在时是 e→ie：er empfiehlt，ie 后面还有 h，少写 h 的 *empfielt 是高频错。它的第二分词却掉到 o（empfohlen），三个方向各变一次。"
    },
    {
     "type": "fill",
     "prompt": "改错：Er empfielt mir den Film.（句中若有错，写出改正后的那一个词；若全句无误就写 richtig）___",
     "hint": "e→ie 变音后，词干里原有的那个辅音字母不能丢",
     "answer": [
      "empfiehlt",
      "Empfiehlt"
     ],
     "explanation": "empfehlen 现在时 e→ie，词干 empfehl- 的 h 保留，所以是 er empfiehlt。这是全表最难的词之一，必须单独多练。"
    },
    {
     "type": "choice",
     "prompt": "判断这句话对不对：Das Konzert hat gestern stattgefunden.",
     "options": [
      "正确",
      "错：hat 应改为 ist",
      "错：stattgefunden 应改为 stattgefanden"
     ],
     "answer": "正确",
     "explanation": "finden 家族（finden / stattfinden / verbinden / zurückfinden）全部用 haben；元音是 i–u，所以是 gefunden 系列。可分前缀 statt- 后夹 ge-，写法也对。"
    },
    {
     "type": "fill",
     "prompt": "周末报告：Gestern ___ ich um sieben Uhr ___ (aufstehen).",
     "hint": "起床是「状态变化」，助动词填第二位，第二分词钉死句末",
     "answer": [
      "bin ... aufgestanden",
      "bin aufgestanden",
      "bin, aufgestanden",
      "bin/aufgestanden"
     ],
     "explanation": "aufstehen 用 sein（ist aufgestanden），虽然词根 stehen 用 haben——同族反直觉必须死记。语序：助动词 bin 占第二位，PII aufgestanden 钉在句末，中间放时间地点，形成动词框架。"
    },
    {
     "type": "fill",
     "prompt": "Zum Frühstück ___ ich zwei Brötchen ___ (essen).",
     "hint": "及物动词用 haben；这个 PII 比一般词多出一个音节",
     "answer": [
      "habe ... gegessen",
      "habe gegessen",
      "habe, gegessen",
      "habe/gegessen"
     ],
     "explanation": "essen 是及物动词，用 haben。PII 是 gegessen（多出一个 ge-，全表唯一例外），不要写成 *geessen。框架：habe 第二位，gegessen 句末。"
    },
    {
     "type": "fill",
     "prompt": "Dann ___ ich mit der U-Bahn zur Schule ___ (fahren).",
     "hint": "位移动词，选表示「位置改变」的那个助动词",
     "answer": [
      "bin ... gefahren",
      "bin gefahren",
      "bin, gefahren",
      "bin/gefahren"
     ],
     "explanation": "fahren 是位移动词，用 sein（ist gefahren），a–a 类元音不变。中文母语者最典型错误是 *Ich habe gefahren nach Wien：助动词错 + 语序错。正确框架：bin 第二位，gefahren 句末。"
    },
    {
     "type": "fill",
     "prompt": "Der Kurs ___ um acht Uhr ___ (anfangen).",
     "hint": "可分动词，ge- 要夹在前缀后面；助动词不是位移那个",
     "answer": [
      "hat ... angefangen",
      "hat angefangen",
      "hat, angefangen",
      "hat/angefangen"
     ],
     "explanation": "anfangen 用 haben（不同于同为 a–a 类的 abfahren 用 sein）。可分前缀 an- 在前，ge- 夹在中间：an+ge+fangen = angefangen。主语 der Kurs 是第三人称单数，助动词用 hat。"
    },
    {
     "type": "fill",
     "prompt": "Am Abend ___ ich vor dem Fernseher ___ (einschlafen).",
     "hint": "「睡着」是从醒到睡的状态变化",
     "answer": [
      "bin ... eingeschlafen",
      "bin eingeschlafen",
      "bin, eingeschlafen",
      "bin/eingeschlafen"
     ],
     "explanation": "einschlafen 表状态变化，用 sein；而 schlafen（状态持续）用 haben。这是同一词根两个助动词的经典对立。ge- 夹在 ein- 之后：ein+ge+schlafen。"
    },
    {
     "type": "fill",
     "prompt": "Danach ___ ich acht Stunden ___ (schlafen).",
     "hint": "和「睡着」不同，这里是持续状态",
     "answer": [
      "habe ... geschlafen",
      "habe geschlafen",
      "habe, geschlafen",
      "habe/geschlafen"
     ],
     "explanation": "schlafen 表持续状态，用 haben（hat geschlafen）；只有 einschlafen（状态变化）才用 sein。a–a 类：现在时 er schläft 变音，但 PII geschlafen 不变音。"
    },
    {
     "type": "fill",
     "prompt": "Im Büro ___ er zuerst den Computer ___ (hochfahren).",
     "hint": "这里有第四格宾语 den Computer，助动词跟着及物性走",
     "answer": [
      "hat ... hochgefahren",
      "hat hochgefahren",
      "hat, hochgefahren",
      "hat/hochgefahren"
     ],
     "explanation": "hochfahren（启动电脑）是及物动词，用 haben——它是 fahren 家族（fahren / abfahren / losfahren / zurückfahren 全用 sein）里唯一的叛徒。判断口诀：有第四格宾语就用 haben。"
    },
    {
     "type": "fill",
     "prompt": "Gestern ___ ich eine E-Mail von der Bank ___ (bekommen).",
     "hint": "be- 是不可分前缀；PII 长得和原形一模一样",
     "answer": [
      "habe ... bekommen",
      "habe bekommen",
      "habe, bekommen",
      "habe/bekommen"
     ],
     "explanation": "bekommen 一词三坑：①用 haben，尽管 kommen/ankommen/mitkommen 全用 sein；②be- 不可分，所以不加 ge-；③PII 与原形同形 bekommen。"
    },
    {
     "type": "fill",
     "prompt": "Der Zug ___ um zehn Uhr in Wien ___ (ankommen).",
     "hint": "到达＝位移终点；ge- 夹在可分前缀之后",
     "answer": [
      "ist ... angekommen",
      "ist angekommen",
      "ist, angekommen",
      "ist/angekommen"
     ],
     "explanation": "ankommen 是位移动词，用 sein。现在时不变音（er kommt an），但 PII 元音变 o：an+ge+kommen = angekommen。注意与 bekommen（hat）对照。"
    },
    {
     "type": "fill",
     "prompt": "Am Sonntag ___ wir den ganzen Tag zu Hause ___ (bleiben).",
     "hint": "完全没有位移，但助动词偏偏反规律；主语是 wir",
     "answer": [
      "sind ... geblieben",
      "sind geblieben",
      "sind, geblieben",
      "sind/geblieben"
     ],
     "explanation": "bleiben 是纯例外：不位移却用 sein（ist geblieben），任何规则都推不出来。ei 家族此处走长 ie：bleiben→geblieben。主语 wir，助动词是 sind。"
    },
    {
     "type": "fill",
     "prompt": "Nach dem Spaziergang ___ ich allein nach Hause ___ (zurückfinden).",
     "hint": "带 zurück- 看着像位移，但 finden 家族的助动词是统一的",
     "answer": [
      "habe ... zurückgefunden",
      "habe zurückgefunden",
      "habe, zurückgefunden",
      "habe/zurückgefunden"
     ],
     "explanation": "zurückfinden 用 haben，尽管带 zurück- 且有位移义——finden 家族（finden / stattfinden / verbinden / zurückfinden）一律 haben。i–u 类：finden→gefunden，ge- 夹在 zurück- 之后。"
    },
    {
     "type": "fill",
     "prompt": "Letzten Monat ___ meine Familie nach Graz ___ (umziehen).",
     "hint": "搬家＝住址位移；ie 在 PII 里掉成 o",
     "answer": [
      "ist ... umgezogen",
      "ist umgezogen",
      "ist, umgezogen",
      "ist/umgezogen"
     ],
     "explanation": "umziehen（搬家）用 sein；但反身 sich umziehen（换衣服）用 haben。ziehen 族一根三果：anziehen 恒 haben、ausziehen 双解、umziehen 搬家用 sein。ie–o：ziehen→gezogen，ge- 夹在 um- 后。"
    },
    {
     "type": "fill",
     "prompt": "Vor dem Weggehen ___ ich eine warme Jacke ___ (anziehen).",
     "hint": "有第四格宾语 eine Jacke；PII 元音掉成 o",
     "answer": [
      "habe ... angezogen",
      "habe angezogen",
      "habe, angezogen",
      "habe/angezogen"
     ],
     "explanation": "anziehen（穿上）及物，恒用 haben，与 umziehen（搬家 sein）形成对照。现在时不变音（er zieht an），但 PII 变 o：an+ge+zogen = angezogen。"
    },
    {
     "type": "fill",
     "prompt": "Nach der Reise ___ du sehr müde ___ (aussehen).",
     "hint": "看着像 aus- 位移词，其实是感官动词；主语是 du",
     "answer": [
      "hast ... ausgesehen",
      "hast ausgesehen",
      "hast, ausgesehen",
      "hast/ausgesehen"
     ],
     "explanation": "aussehen 用 haben，不是 sein——它虽以 aus- 开头（aussteigen / ausgehen 都用 sein），但属感官动词，和 ansehen / fernsehen 一样全部 haben。e–e 类：PII 回到 e，ausgesehen。"
    },
    {
     "type": "fill",
     "prompt": "An der Haltestelle Oper ___ ich ___ (aussteigen).",
     "hint": "下车是真位移；ei 在这里拉长成 ie",
     "answer": [
      "bin ... ausgestiegen",
      "bin ausgestiegen",
      "bin, ausgestiegen",
      "bin/ausgestiegen"
     ],
     "explanation": "aussteigen 是位移动词，用 sein。ei 家族三种结局中它走长 ie：steigen→gestiegen，ge- 夹在 aus- 之后 = ausgestiegen。对照 aussehen 用 haben。"
    },
    {
     "type": "fill",
     "prompt": "Beim Arzt ___ ich zwanzig Minuten im Flur ___ (stehen).",
     "hint": "站着是状态不是位移；德标准语的助动词",
     "answer": [
      "habe ... gestanden",
      "habe gestanden",
      "habe, gestanden",
      "habe/gestanden"
     ],
     "explanation": "stehen 用 haben（hat gestanden，德标准语；只有南德口语用 ist）。注意反差：aufstehen 却用 sein。e–a 类：stehen→gestanden。"
    },
    {
     "type": "fill",
     "prompt": "Dann ___ ich noch eine Stunde im Wartezimmer ___ (sitzen).",
     "hint": "坐着是状态；元音从 i 掉到 e",
     "answer": [
      "habe ... gesessen",
      "habe gesessen",
      "habe, gesessen",
      "habe/gesessen"
     ],
     "explanation": "sitzen 用 haben（hat gesessen），别因为 aufstehen 用 sein 就把 sitzen / liegen 也改成 sein——这两个状态动词同样是 haben。i–e 类：sitzen→gesessen。"
    },
    {
     "type": "fill",
     "prompt": "Am Samstag ___ die Kinder im See ___ (schwimmen).",
     "hint": "位移动词；元音不是 i–u 那一队，落到 o",
     "answer": [
      "sind ... geschwommen",
      "sind geschwommen",
      "sind, geschwommen",
      "sind/geschwommen"
     ],
     "explanation": "schwimmen 是 i–o 类（geschwommen），不跟 finden/singen/trinken 的 i–u 队（gefunden/gesungen/getrunken）；而且是位移动词用 sein。主语 die Kinder 复数，助动词 sind。"
    },
    {
     "type": "fill",
     "prompt": "Nach dem Kurs ___ mein Deutsch viel besser ___ (werden).",
     "hint": "「变成」是状态变化，助动词反直觉",
     "answer": [
      "ist ... geworden",
      "ist geworden",
      "ist, geworden",
      "ist/geworden"
     ],
     "explanation": "werden 用 sein：ist geworden，绝不是 *hat geworden。状态变化类动词（werden / einschlafen / einfallen）一律 sein。主语 mein Deutsch 单数，用 ist。"
    },
    {
     "type": "fill",
     "prompt": "Um sechs Uhr ___ die Bank ___ (schließen).",
     "hint": "PII 元音变短，ß 必须改写",
     "answer": [
      "hat ... geschlossen",
      "hat geschlossen",
      "hat, geschlossen",
      "hat/geschlossen"
     ],
     "explanation": "schließen 用 haben。ie–o 类且 PII 元音变短，所以 ß→ss：geschlossen（同族三连 genießen→genossen、erschließen→erschlossen）。这个变化发音听不出来，只在笔试扣分。"
    }
   ],
   "quiz": [
    {
     "type": "choice",
     "prompt": "Er ___ um sechs Uhr aufgestanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "aufstehen 表示「从躺到站」的位置/状态变化，用 sein。注意同族的 stehen（hat gestanden）和 verstehen（hat verstanden）都用 haben——只有加了 auf- 的这个变成 ist。"
    },
    {
     "type": "choice",
     "prompt": "aufgestanden",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "aufstehen = ist aufgestanden。判断路径：没有第四格宾语 → 有状态变化 → sein。这是「同族不同助动词」的典型反直觉点。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ sofort aufgestanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "aufstehen 用 sein。别被 stehen（hat gestanden）带偏：stehen 是静态持续，aufstehen 是状态改变。"
    },
    {
     "type": "choice",
     "prompt": "eingeschlafen",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "einschlafen「入睡」是状态变化（醒→睡）→ sein。而 schlafen「睡着」是状态持续 → hat geschlafen。ein- 一加上去助动词就翻面。"
    },
    {
     "type": "choice",
     "prompt": "Das Kind ___ schnell eingeschlafen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "einschlafen = ist eingeschlafen，状态变化用 sein。同一逻辑：einfallen（ist eingefallen）也是变化，gefallen（hat gefallen）是持续状态。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ im Zug eingeschlafen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "einschlafen 用 sein。对照记：Er hat gut geschlafen（持续，hat） / Er ist schnell eingeschlafen（变化，ist）。"
    },
    {
     "type": "choice",
     "prompt": "ausgesehen",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "aussehen「看起来」是感官/状态描述动词，用 haben，不是 sein。虽然它以 aus- 开头，看着像 aussteigen（ist）、ausgehen（ist）那类位移词，但完全没有位移。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ müde ausgesehen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "aussehen = hat ausgesehen。sehen 家族全部用 haben：gesehen / angesehen / ferngesehen / ausgesehen。前缀不改变这一点。"
    },
    {
     "type": "choice",
     "prompt": "Das Essen ___ gut ausgesehen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "aussehen 用 haben。决策树第②步「位移/状态变化」在这里不成立——它只是描述外观，所以落到例外叶子：aussehen = haben。"
    },
    {
     "type": "choice",
     "prompt": "bekommen (Partizip II)",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "bekommen 用 haben，因为它是及物动词（bekommen + 第四格宾语）→ 决策树第①步就判 haben。别被词根 kommen（ist gekommen）骗了。顺带：be- 是不可分前缀，所以 PII 不加 ge-，与原形同形。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ einen Brief bekommen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "einen Brief 是第四格宾语，有第四格必用 haben。kommen / ankommen / mitkommen / drankommen 全是 ist，唯独 bekommen 是 hat。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ ein Geschenk bekommen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "bekommen = hat bekommen。一个词踩三个坑：助动词 hat（不是 ist）、不可分前缀无 ge-、PII 与原形同形。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ den Computer hochgefahren.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "这里有第四格宾语 den Computer → 决策树第①步直接判 haben。hochfahren 是 fahren 家族里唯一的叛徒：fahren / abfahren / losfahren / zurückfahren 全用 ist。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ den Computer schon hochgefahren.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "及物用法（启动电脑）→ haben。记忆钩子：能问「把什么 hochfahren？」→ 有宾语 → hat。"
    },
    {
     "type": "choice",
     "prompt": "hochgefahren",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "hochfahren 用 haben。虽然含 fahren，但它的常用义是及物的「启动（电脑）」，及物压过位移，判 haben。"
    },
    {
     "type": "choice",
     "prompt": "geblieben",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "bleiben 用 sein——完全不位移却用 sein，任何规则都推不出来，属于纯例外叶子：bleiben / sein / werden 三个都是 sein，必须死记。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ zu Hause geblieben.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "bleiben = ist geblieben。它是决策树的例外叶子：没有第四格、也没有位移，但照样用 sein。A1 高频词，错一次会长期错。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ lange geblieben.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "bleiben 恒用 sein。把 bleiben / sein / werden 打包成一组「静态却用 sein」的三兄弟一起背。"
    },
    {
     "type": "choice",
     "prompt": "zurückgefunden",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "zurückfinden 用 haben，尽管带 zurück- 且有明显位移含义。理由是 finden 家族整体用 haben：gefunden / stattgefunden / verbunden / zurückgefunden。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ allein zurückgefunden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "zurückfinden = hat zurückgefunden。这是决策树的例外叶子：位移感很强但仍判 haben，靠词族（finden 族）而不是靠语义。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ nach Hause zurückgefunden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "即使有 nach Hause 这样的方向补足语，zurückfinden 仍用 haben。对照 zurückfahren = ist zurückgefahren（真位移，fahren 族）。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ die Jacke ausgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "die Jacke 是第四格宾语 → haben。ausziehen 是双解词：脱衣（及物）用 hat，搬出（位移）用 ist；先看有没有第四格。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ aus der Wohnung ausgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "这里 ausziehen 意为「搬出」，是位移、无第四格 → sein。同一个词两个义两个助动词：hat die Jacke ausgezogen / ist aus der Wohnung ausgezogen。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ die Schuhe ausgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "有第四格 die Schuhe → haben。ziehen 一族三种结果：anziehen 恒 hat、ausziehen 双解、umziehen（搬家）ist。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ nach Wien umgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "umziehen「搬家」是位移、无第四格 → sein。补一句：sich umziehen「换衣服」才用 hat。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ letztes Jahr umgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "umziehen（搬家）= ist umgezogen。注意 um- 在这里可分，所以 ge- 夹在中间：um-ge-zogen。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ sich schnell umgezogen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "反身 sich umziehen「换衣服」有反身第四格 sich → haben。没有 sich 的 umziehen（搬家）才是 ist。这是同词根第三个答案。"
    },
    {
     "type": "choice",
     "prompt": "gesessen",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "sitzen 用 haben（德国标准语）。它是静态动词，既无第四格也无位移/变化，落到例外叶子：sitzen / liegen / stehen 三个姿势动词都用 haben。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ am Fenster gesessen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "sitzen = hat gesessen。别因为 aufstehen 是 ist 就把 sitzen 也改成 ist——姿势保持用 haben，姿势改变才用 sein。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ lange im Café gesessen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "sitzen 用 haben。顺带记 PII 形式：sitzen 是 i–e 类，gesessen（不是 *gesitzt）。"
    },
    {
     "type": "choice",
     "prompt": "gelegen",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "liegen 用 haben，与 sitzen / stehen 同属静态姿势动词组。位置没有改变 → 不用 sein。"
    },
    {
     "type": "choice",
     "prompt": "Das Buch ___ auf dem Tisch gelegen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "liegen = hat gelegen（ie–e 类）。注意与规则动词 legen「放」区分，legen 是 hat gelegt。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ im Bett gelegen.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "liegen 用 haben。对照记：Er hat im Bett gelegen（状态）/ Er ist eingeschlafen（变化）。"
    },
    {
     "type": "choice",
     "prompt": "gestanden",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "stehen 用 haben（德国标准语；只有南德口语才说 ist gestanden）。静态姿势动词组：sitzen / liegen / stehen 全部 haben。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ vor der Tür gestanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "stehen = hat gestanden。而 aufstehen = ist aufgestanden。同一词根，加了 auf- 就变位移/变化，助动词跟着翻面。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ lange gestanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "stehen 用 haben。stehen 族三个答案要一起过：stehen hat、verstehen hat、aufstehen ist。"
    },
    {
     "type": "choice",
     "prompt": "verstanden",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "verstehen 用 haben——它是及物动词（etwas verstehen），第①步就判 haben。ver- 不可分，所以 PII 无 ge-：verstanden。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ die Frage verstanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "die Frage 是第四格 → haben。别被词根 stehen 里 aufstehen 的 ist 干扰，verstehen 与位移毫无关系。"
    },
    {
     "type": "choice",
     "prompt": "Er ___ alles verstanden.",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "hat",
     "explanation": "verstehen = hat verstanden。注意 PII 是 e–a 变化的 verstanden，且不可分前缀无 ge-。"
    },
    {
     "type": "choice",
     "prompt": "geschwommen",
     "options": [
      "hat",
      "ist"
     ],
     "answer": "ist",
     "explanation": "schwimmen 用 sein（视为位移动词）。顺带注意元音：它是 i–o 类的 geschwommen，不跟 finden/singen/trinken 的 i–u 一队。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「genossen」，写出「原形 + 助动词(hat/ist)」。格式：原形, hat/ist",
     "hint": "ie–o 家族；PII 里的双 s 是因为元音变短了，原形那里元音是长的",
     "answer": [
      "genießen, hat",
      "genießen hat",
      "genießen / hat"
     ],
     "explanation": "genießen 属 ie–o 换音家族：原形长元音 ie 写 ß（genießen），PII 元音缩短为短 o，按正字法长音才用 ß、短音必须写 ss，所以是 genossen。ge- 在这里是不可分前缀，本身已在词首，所以不再另加 ge-。及物、非位移，用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「gewogen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「称重、重达」；现在时不变音，只有 PII 掉到 o",
     "answer": [
      "wiegen, hat",
      "wiegen hat",
      "wiegen / hat"
     ],
     "explanation": "wiegen 现在时完全不变音（er wiegt），但 PII 落进 -o- 组：gewogen。词干大改，只有反向练过才认得。非位移，用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「verstanden」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "ver- 是不可分前缀，所以 PII 里没有 ge-；词根是「站」那个词",
     "answer": [
      "verstehen, hat",
      "verstehen hat",
      "verstehen / hat"
     ],
     "explanation": "stehen 族 e–a 换音：stehen→gestanden，加不可分前缀 ver- 后不再加 ge-，得 verstanden。注意 stehen / verstehen 在标准德语里都用 hat，不是 ist。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「aufgestanden」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "同样是 stehen 词根，但这个是「早上从床上起来」，助动词跟 stehen 反着来",
     "answer": [
      "aufstehen, ist",
      "aufstehen ist",
      "aufstehen / ist"
     ],
     "explanation": "auf- 可分，ge- 夹在中间：auf+ge+standen。陷阱在助动词：stehen / verstehen 都用 hat，唯独 aufstehen 表示状态改变（躺→站），用 ist。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「ausgestiegen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "ei→长 ie 家族；「从车上下来」",
     "answer": [
      "aussteigen, ist",
      "aussteigen ist",
      "aussteigen / ist"
     ],
     "explanation": "steigen 属 ei–ie 家族（长 ie）：gestiegen；aus- 可分，ge- 夹中间→ausgestiegen。位移动词，用 ist。同族 einsteigen（eingestiegen）、umsteigen（umgestiegen）全部 ist。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「gegangen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "最基础的位移动词，词干由 geh 变成 gang",
     "answer": [
      "gehen, ist",
      "gehen ist",
      "gehen / ist"
     ],
     "explanation": "gehen 属 e–a 特殊组，词干整个改成 gang：gegangen。位移动词，用 ist。同族 ausgehen→ausgegangen、losgehen→losgegangen、rausgehen→rausgegangen 也都是 ist。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「bekommen」（形式与原形完全一样），写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「收到、得到」；be- 前缀让它一个词踩三个坑",
     "answer": [
      "bekommen, hat",
      "bekommen hat",
      "bekommen / hat"
     ],
     "explanation": "be- 是不可分前缀：①不加 ge-，②kommen 属 o–o 组本来 PII 就是 -kommen，所以 PII 与原形同形；③虽然 kommen / ankommen / mitkommen / drankommen 全用 ist，bekommen 是及物动词（etwas bekommen），必须用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「geblieben」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「留下、保持」；完全不移动，助动词却是纯例外",
     "answer": [
      "bleiben, ist",
      "bleiben ist",
      "bleiben / ist"
     ],
     "explanation": "bleiben 属 ei–ie 长音家族：geblieben。助动词是纯例外——它一点也不位移，却和 sein/werden 一样用 ist，没有规则可推，只能死记。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「geschwommen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "注意它不是 i–u 那一队；游泳是位移",
     "answer": [
      "schwimmen, ist",
      "schwimmen ist",
      "schwimmen / ist"
     ],
     "explanation": "finden/singen/klingen/trinken 是 i–u（gefunden/gesungen/geklungen/getrunken），但 schwimmen 是 i–o：geschwommen，且作为位移动词用 ist。两处都和邻居不一样。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「gegessen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "全表唯一一个多出一个 ge 的 PII",
     "answer": [
      "essen, hat",
      "essen hat",
      "essen / hat"
     ],
     "explanation": "essen 的 PII 例外地写成 gegessen（不是 *geessen），是全表唯一一例。属 e–e 组，元音回到 e。及物动词，用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「empfohlen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「推荐」；emp- 不可分所以没有 ge-，原形里的元音不是 o",
     "answer": [
      "empfehlen, hat",
      "empfehlen hat",
      "empfehlen / hat"
     ],
     "explanation": "全表最难的词：原形 empfehlen（e），现在时 e→ie（er empfiehlt），PII 却掉到 o（empfohlen），属 e–o 家族；emp- 是不可分前缀所以无 ge-。及物，用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「hochgefahren」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「把电脑启动起来」；是及物用法，助动词和 fahren 一族反着来",
     "answer": [
      "hochfahren, hat",
      "hochfahren hat",
      "hochfahren / hat"
     ],
     "explanation": "fahren / abfahren / losfahren / zurückfahren 全用 ist，唯独 hochfahren（den Computer hochfahren）是及物动词，用 hat。它是 fahren 词族折叠策略唯一的破绽。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「eingeschlafen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「睡着」是状态发生改变，不是状态持续",
     "answer": [
      "einschlafen, ist",
      "einschlafen ist",
      "einschlafen / ist"
     ],
     "explanation": "schlafen（持续状态）用 hat：hat geschlafen；einschlafen 表示状态变化（醒→睡），用 ist。同理 gefallen 用 hat 而 einfallen 用 ist。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「gesessen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「坐着」；i–e 家族，别因为 aufstehen 用 ist 就跟风",
     "answer": [
      "sitzen, hat",
      "sitzen hat",
      "sitzen / hat"
     ],
     "explanation": "sitzen 属 i–e：gesessen。它是状态动词，标准德语用 hat（南德口语才有 ist）。同理 liegen→hat gelegen、stehen→hat gestanden。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「zurückgefunden」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "finden 家族；虽然带 zurück- 有位移义，助动词仍反直觉",
     "answer": [
      "zurückfinden, hat",
      "zurückfinden hat",
      "zurückfinden / hat"
     ],
     "explanation": "finden 属 i–u：gefunden；zurück- 可分，ge- 夹中间→zurückgefunden。尽管有明显位移义，finden 全族（finden / stattfinden / verbinden / zurückfinden）都用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「geworden」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "「变成」；表示状态转变的那个助动词",
     "answer": [
      "werden, ist",
      "werden ist",
      "werden / ist"
     ],
     "explanation": "werden 是特殊形，PII 为 geworden，助动词用 ist（状态转变），不是 *hat geworden。被动态里 PII 缩成 worden。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原①：看到 PII「erschlossen」，写出「原形 + 助动词」。格式：原形, hat/ist",
     "hint": "er- 不可分所以无 ge-；原形里元音是长的，要写 ß",
     "answer": [
      "erschließen, hat",
      "erschließen hat",
      "erschließen / hat"
     ],
     "explanation": "ß→ss 三连之一：schließen→geschlossen、genießen→genossen、erschließen→erschlossen。PII 元音变短所以 ß 改 ss；er- 不可分，无 ge-。及物，用 hat。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原②：听到/看到「er lädt ein」，写出「原形 + PII」。格式：原形, PII",
     "hint": "「邀请」；别被 lädt 骗成 *ladet 那种规则形",
     "answer": [
      "einladen, eingeladen",
      "einladen eingeladen",
      "einladen / eingeladen"
     ],
     "explanation": "词根 laden 属 a→ä 变音组，第三人称单数是 er lädt（绝不是 *er ladet）。ein- 可分，ge- 夹中间；a–a 家族 PII 元音回到 a：eingeladen。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原②：看到「er nimmt an」，写出「原形 + PII」。格式：原形, PII",
     "hint": "「接受、假定」；nimmt 是被改过两次的词干，原形里没有双 m",
     "answer": [
      "annehmen, angenommen",
      "annehmen angenommen",
      "annehmen / angenommen"
     ],
     "explanation": "别被 nimmt 骗成 *nimmen！原形是 nehmen（an+nehmen）。现在时连辅音都变：h 消失、m 双写→er nimmt an；PII 属 e–o 且双写 mm：angenommen（an+ge+nommen）。"
    },
    {
     "type": "fill",
     "prompt": "逆向还原②：看到「er empfiehlt」，写出「原形 + PII」。格式：原形, PII",
     "hint": "「推荐」；现在时的 ie 是变出来的，原形和 PII 的元音各不相同",
     "answer": [
      "empfehlen, empfohlen",
      "empfehlen empfohlen",
      "empfehlen / empfohlen"
     ],
     "explanation": "三个方向各变一次：原形 e（empfehlen）→现在时 e→ie（er empfiehlt，不是 *empfielt）→PII 掉到 o（empfohlen）。emp- 不可分，所以 PII 没有 ge-。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 aufschreiben 放进哪个家族桶?",
     "options": [
      "ei–ie",
      "ei–i",
      "ie–o"
     ],
     "answer": "ei–ie",
     "explanation": "可分动词按词根判定:auf- + schreiben,schreiben 属 ei–ie(geschrieben),所以 aufgeschrieben 也是长 ie。前缀不影响元音家族,只影响 ge- 的位置(auf-ge-schrieben)。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 aussteigen 放进哪个家族桶?",
     "options": [
      "ei–ie",
      "ei–i",
      "ei–ei"
     ],
     "answer": "ei–ie",
     "explanation": "steigen 走 ei→长 ie:ausgestiegen。ei 家族有三种结局,steigen/schreiben/bleiben/scheinen/überweisen 这一支全部变长 ie。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 unterstreichen 放进哪个家族桶?",
     "options": [
      "ei–i",
      "ei–ie",
      "ei–ei"
     ],
     "answer": "ei–i",
     "explanation": "PII 是 unterstrichen,元音变短 i(后面接 ch)。ei 家族中 schneiden / vergleichen / unterstreichen 这一支走短 i,不是长 ie。另外 unter- 在此不可分,所以没有 ge-。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 vergleichen 放进哪个家族桶?",
     "options": [
      "ei–i",
      "ei–ie",
      "ie–o"
     ],
     "answer": "ei–i",
     "explanation": "verglichen:短 i,判断窍门是 PII 词干后面跟着 ch 或双辅音时元音变短。ver- 不可分,无 ge-。"
    },
    {
     "type": "choice",
     "prompt": "这一轮 ei 家族里混进了 heißen。它该进哪个桶?",
     "options": [
      "ei–ei",
      "ei–ie",
      "ei–i"
     ],
     "answer": "ei–ei",
     "explanation": "heißen 的 PII 是 geheißen,元音完全不变。它是 ei 家族的第三种结局(不变),所以 ei 轮绝不能一刀切成「都变 ie」。"
    },
    {
     "type": "choice",
     "prompt": "下面哪张卡不属于 ei–ie 桶?",
     "options": [
      "schneiden",
      "scheinen",
      "überweisen"
     ],
     "answer": "schneiden",
     "explanation": "scheinen→geschienen、überweisen→überwiesen 都是长 ie;schneiden→geschnitten 是短 i(且双写 tt),属 ei–i 桶。"
    },
    {
     "type": "choice",
     "prompt": "heißen 的第二分词是哪一个?",
     "options": [
      "geheißen",
      "gehießen",
      "geheißt"
     ],
     "answer": "geheißen",
     "explanation": "heißen 是强变化但元音不变,只加 ge-…-en:geheißen。写成 gehießen 是被 ei–ie 家族带偏,写成 geheißt 是误用弱变化 -t 结尾。"
    },
    {
     "type": "choice",
     "prompt": "bleiben 该进哪个桶?",
     "options": [
      "ei–ie",
      "ei–i",
      "ei–ei"
     ],
     "answer": "ei–ie",
     "explanation": "geblieben,长 ie。顺带记住例外:bleiben 完全不位移却用 sein(ist geblieben),这条推不出来只能死记。"
    },
    {
     "type": "fill",
     "prompt": "überweisen 的第二分词是 ___。",
     "hint": "不可分前缀的词不加 ge-;这一支 ei 变成长音的那个双元音。",
     "answer": [
      "überwiesen"
     ],
     "explanation": "über- 在此不可分,所以没有 ge-;词干走 ei→长 ie,得 überwiesen。同理 unterschreiben→unterschrieben、beschreiben→beschrieben。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 abfahren 放进哪个家族桶?",
     "options": [
      "a–a",
      "e–a",
      "o–o"
     ],
     "answer": "a–a",
     "explanation": "按词根 fahren 判定:gefahren,PII 元音回到 a。现在时才变音(er fährt ab),PII 不变音——这是 a–a 家族的统一规律。"
    },
    {
     "type": "choice",
     "prompt": "把卡片 einladen 放进哪个家族桶?它的 er 形式是?",
     "options": [
      "a–a,er lädt ein",
      "a–a,er ladet ein",
      "e–a,er lädt ein"
     ],
     "answer": "a–a,er lädt ein",
     "explanation": "eingeladen 属 a–a。现在时 a→ä 且不加 e:er lädt ein,写成 er ladet ein 是把强变化误当弱变化。"
    },
    {
     "type": "choice",
     "prompt": "这一轮 a–a 桶里混进了 laufen。判对之后,它的例外点是什么?",
     "options": [
      "现在时是 au→äu(er läuft),不是 a→ä",
      "PII 变成 o",
      "不可分前缀,没有 ge-"
     ],
     "answer": "现在时是 au→äu(er läuft),不是 a→ä",
     "explanation": "laufen 的 PII 确实是 gelaufen(a–a),但现在时变音走 au→äu:er läuft。别按 fahren/tragen 的 a→ä 类推成 *er läft。另外它用 sein。"
    },
    {
     "type": "choice",
     "prompt": "raten 属于哪个桶?",
     "options": [
      "a–a",
      "e–a",
      "Sonderform"
     ],
     "answer": "a–a",
     "explanation": "geraten 与原形词干同形,归 a–a。现在时变音:er rät(不是 ratet)。同排要一起过的还有 er wäscht / er trägt / er lädt ein。"
    },
    {
     "type": "choice",
     "prompt": "einschlafen 属于哪个桶?它和 schlafen 的差别在哪?",
     "options": [
      "同属 a–a,但 einschlafen 用 sein、schlafen 用 haben",
      "einschlafen 属 e–a,schlafen 属 a–a",
      "两个都用 haben"
     ],
     "answer": "同属 a–a,但 einschlafen 用 sein、schlafen 用 haben",
     "explanation": "元音家族相同(geschlafen / eingeschlafen),助动词不同:einschlafen 表状态变化用 ist,schlafen 表状态持续用 hat。einfallen(ist)对 gefallen(hat)是同一套逻辑。"
    },
    {
     "type": "fill",
     "prompt": "waschen 的第三人称单数是 er ___。",
     "hint": "a–a 家族现在时要变音,词干末尾已有 sch。",
     "answer": [
      "wäscht",
      "er wäscht"
     ],
     "explanation": "a→ä 变音,词尾 -t:er wäscht。PII 却不变音:gewaschen——现在时变、PII 回 a,是 a–a 桶的共同签名。"
    },
    {
     "type": "choice",
     "prompt": "tragen 该进哪个桶?",
     "options": [
      "a–a",
      "e–a",
      "i–u"
     ],
     "answer": "a–a",
     "explanation": "getragen,PII 回到 a。现在时 er trägt 变音。与 fahren / schlafen / raten / waschen 同一支。"
    },
    {
     "type": "choice",
     "prompt": "hochfahren 归入 a–a 桶没问题,但它的助动词是?",
     "options": [
      "haben(hat hochgefahren)",
      "sein(ist hochgefahren)",
      "两个都行"
     ],
     "answer": "haben(hat hochgefahren)",
     "explanation": "fahren / abfahren / losfahren / zurückfahren 全用 ist,唯独 hochfahren 用 hat,因为它是及物的(den Computer hochgefahren)。这是「词族折叠」策略唯一的破绽。"
    },
    {
     "type": "choice",
     "prompt": "kommen 该进哪个桶?",
     "options": [
      "o–o",
      "e–o",
      "ie–o"
     ],
     "answer": "o–o",
     "explanation": "gekommen:原形已经是 o,PII 还是 o。ankommen / mitkommen / drankommen / bekommen 全族同桶。"
    },
    {
     "type": "choice",
     "prompt": "bekommen 进 o–o 桶后,哪一点最容易错?",
     "options": [
      "PII 与原形完全同形,且用 hat",
      "PII 是 bekommt",
      "PII 是 bekgekommen"
     ],
     "answer": "PII 与原形完全同形,且用 hat",
     "explanation": "be- 不可分所以不加 ge-,加上 o–o 不换元音,结果 PII = bekommen,和原形一模一样;而且它用 hat,与整个 kommen 族(全用 ist)相反。一个词踩三个坑。"
    },
    {
     "type": "choice",
     "prompt": "drankommen 的第二分词是?",
     "options": [
      "drangekommen",
      "drankommen",
      "gedrankommen"
     ],
     "answer": "drangekommen",
     "explanation": "dran- 可分,所以 ge- 夹在中间:dran-ge-kommen。可分看 ge- 夹中间,不可分则完全没有 ge-(对比 bekommen)。"
    }
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
    },

    {
      id: "sommer-d1", level: "暑期", lesson: "第1天", theme: "Arbeitsalltag · 可分动词",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-07", date: "2026-07-07",
      words: [
        { de: "senkrecht", gender: "副", plural: "", zh: "竖直地", example: "Schreib deinen Namen **senkrecht**!", exampleZh: "把你的名字竖着写。", note: "Adv. · 名字游戏要求 · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "notieren", gender: "动", plural: "", zh: "记下", example: "Ich **notiere** die neuen Wörter.", exampleZh: "我记下新单词。", note: "schwach · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "telefonieren", gender: "动", plural: "", zh: "打电话", example: "Ich **telefoniere** mit meiner Chefin.", exampleZh: "我和我的女上司通电话。", note: "schwach, mit+D · + mit Dativ · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "reisen", gender: "动", plural: "", zh: "旅行", example: "Im Sommer **reise** ich nach Italien.", exampleZh: "夏天我去意大利旅行。", note: "schwach · PII: ist gereist · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "Orangensaft", gender: "der", plural: "¨-e", zh: "橙汁", example: "Ich trinke gern **Orangensaft**.", exampleZh: "我喜欢喝橙汁。", note: "Orange + Saft · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "nett", gender: "形", plural: "", zh: "亲切的", example: "Das ist **nett** von dir!", exampleZh: "你真好！", note: "Adj. · das ist nett = 你真好 · KB p.78 1a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "joggen", gender: "动", plural: "", zh: "慢跑", example: "Am Morgen **jogge** ich im Park.", exampleZh: "早上我在公园慢跑。", note: "schwach · KB p.78 1a", level: "暑期", tags: ["密集"] },
        { de: "Alles gut", gender: "短语", plural: "", zh: "一切都好", example: "Alles **gut**, danke!", exampleZh: "一切都好，谢谢！", note: "Ausdruck · 固定用语 · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "Ich habe eine Bitte", gender: "短语", plural: "", zh: "我有个请求", example: "Ich habe eine **Bitte**: Können Sie mir helfen?", exampleZh: "我有个请求：您能帮我吗？", note: "Ausdruck · 固定用语 · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "einen schönen Tag", gender: "短语", plural: "", zh: "祝你今天愉快", example: "Noch einen schönen **Tag**!", exampleZh: "祝你今天愉快！", note: "Ausdruck · 告别语 · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "kein Problem", gender: "短语", plural: "", zh: "没问题", example: "Kein **Problem**, das mache ich gern.", exampleZh: "没问题，我乐意做。", note: "Ausdruck · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "Ja, gern", gender: "短语", plural: "", zh: "好的，乐意", example: "Ja, **gern**! Ich helfe dir.", exampleZh: "好的，乐意！我帮你。", note: "Ausdruck · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "Können Sie mir helfen?", gender: "短语", plural: "", zh: "您能帮我吗", example: "Entschuldigung, können Sie mir **helfen**?", exampleZh: "打扰一下，您能帮我吗？", note: "Ausdruck · helfen + Dativ · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "möchten", gender: "情态", plural: "", zh: "想要（礼貌）", example: "Ich **möchte** einen Kaffee, bitte.", exampleZh: "我想要一杯咖啡，谢谢。", note: "Modalverb · 比 willst 客气 · KB p.78 1b Dialog A", level: "暑期", tags: ["密集", "modal"] },
        { de: "bis später / bis dann", gender: "短语", plural: "", zh: "待会见 / 回头见", example: "Bis später!", exampleZh: "待会见！", note: "Ausdruck · 告别 · KB p.78 1b Dialog A", level: "暑期", tags: ["密集"] },
        { de: "Entschuldigung?", gender: "das", plural: "", zh: "打扰一下？", example: "**Entschuldigung**, wo ist der Bahnhof?", exampleZh: "打扰一下，火车站在哪儿？", note: "搭话 · KB p.78 1b Dialog B", level: "暑期", tags: ["密集"] },
        { de: "Tagesticket", gender: "das", plural: "-s", zh: "日票", example: "Ich brauche ein **Tagesticket**.", exampleZh: "我需要一张日票。", note: "Tag + Ticket · KB p.78 1b Dialog B", level: "暑期", tags: ["密集"] },
        { de: "brauchen", gender: "动", plural: "", zh: "需要", example: "Ich **brauche** ein Tagesticket.", exampleZh: "我需要一张日票。", note: "schwach, +Akk · 🔴 重点词 · KB p.78 1b Dialog B", level: "暑期", tags: ["密集"] },
        { de: "zu Hause", gender: "短语", plural: "", zh: "在家", example: "Ich bin heute zu **Hause**.", exampleZh: "我今天在家。", note: "Ausdruck · ↔ nach Hause 回家（方向） · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "Was ist los?", gender: "短语", plural: "", zh: "怎么了？", example: "Was ist denn **los**?", exampleZh: "到底怎么了？", note: "Ausdruck · KB p.78 1b Dialog C", level: "暑期", tags: ["密集"] },
        { de: "Paket", gender: "das", plural: "-e", zh: "包裹", example: "Können Sie das **Paket** annehmen?", exampleZh: "您能代收这个包裹吗？", note: "KB p.78 1b Dialog C", level: "暑期", tags: ["密集"] },
        { de: "annehmen", gender: "可分", plural: "", zh: "代收、接受", example: "Ich nehme das Paket für dich an.", exampleZh: "我替你代收包裹。", note: "trennbar, nimmt an · ein Paket annehmen · KB p.78 1b Dialog C", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "klar", gender: "动", plural: "", zh: "当然（口语）", example: "**Klar**, das mache ich!", exampleZh: "当然，我做！", note: "Ausdruck · KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "ist super", gender: "das", plural: "Ausdruck", zh: "太好了", example: "Das ist **super**, danke!", exampleZh: "太好了，谢谢！", note: "KB p.78 1b", level: "暑期", tags: ["密集"] },
        { de: "keine Zeit", gender: "短语", plural: "", zh: "没时间", example: "Ich habe leider keine **Zeit**.", exampleZh: "可惜我没时间。", note: "Ausdruck · KB p.78 1c 第5题", level: "暑期", tags: ["密集"] },
        { de: "ins Büro", gender: "短语", plural: "", zh: "去办公室", example: "Ich gehe jetzt ins **Büro**.", exampleZh: "我现在去办公室。", note: "Ausdruck · in + Akk 方向 · KB p.78 1c 第6题", level: "暑期", tags: ["密集"] },
        { de: "gleich da", gender: "短语", plural: "", zh: "马上就到", example: "Ich bin gleich da!", exampleZh: "我马上就到！", note: "Ausdruck · 🔴 重点词 · KB p.78 1c 第6题", level: "暑期", tags: ["密集"] },
        { de: "Hilfe", gender: "die", plural: "-n", zh: "帮助", example: "Danke für deine **Hilfe**!", exampleZh: "谢谢你的帮助！", note: "KB p.78 1c 第7题", level: "暑期", tags: ["密集"] },
        { de: "allein", gender: "副", plural: "", zh: "独自", example: "Ich kann das **allein** machen.", exampleZh: "我自己能做。", note: "Adv. · KB p.78 1c 第7题", level: "暑期", tags: ["密集"] },
        { de: "endlich", gender: "副", plural: "", zh: "终于", example: "**Endlich** bin ich in Köln!", exampleZh: "我终于到科隆了！", note: "Adv. · 🔴 重点词；别跟 endlos 混 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Praktikum", gender: "das", plural: "Pl. Praktika", zh: "实习", example: "Ich mache ein **Praktikum** in Köln.", exampleZh: "我在科隆实习。", note: "⚠️ 单数 ein Praktikum / 复数 Praktika · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Köln", gender: "das", plural: "", zh: "科隆", example: "**Köln** liegt am Rhein.", exampleZh: "科隆位于莱茵河畔。", note: "莱茵河畔城市 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Leben", gender: "das", plural: "无复数", zh: "生活", example: "Das **Leben** hier ist ganz anders.", exampleZh: "这里的生活完全不同。", note: "🔴 重点词 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "ganz", gender: "副", plural: "", zh: "完全 / 整个", example: "Das ist **ganz** anders.", exampleZh: "这完全不同。", note: "Adv./Adj. · ganz anders 完全不同 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "anders (als)", gender: "副", plural: "", zh: "不同(于)", example: "Köln ist anders als Wien.", exampleZh: "科隆和维也纳不一样。", note: "Adv. · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Firma", gender: "die", plural: "Pl. Firmen", zh: "公司", example: "Die **Firma** ist groß.", exampleZh: "这家公司很大。", note: "⚠️ 复数 Firmen · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "viel los sein", gender: "短语", plural: "", zh: "很热闹、事多", example: "In der Firma ist viel los.", exampleZh: "公司里事很多。", note: "Ausdruck · es ist viel los · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "halb acht", gender: "短语", plural: "", zh: "7:30", example: "Ich muss um halb **acht** da sein.", exampleZh: "我七点半必须到。", note: "Zeit · ⚠️ = 7:30，不是 8:30 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "leicht", gender: "形", plural: "", zh: "容易的", example: "Die Arbeit ist nicht **leicht**.", exampleZh: "这工作不容易。", note: "Adj. · 🔴 重点词 · AB p.8 Laura", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Pause", gender: "die", plural: "-n", zh: "休息", example: "Ich mache eine halbe Stunde **Pause**.", exampleZh: "我休息半小时。", note: "Pause machen · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Vormittag", gender: "der", plural: "-e", zh: "上午", example: "Am **Vormittag** habe ich Besprechungen.", exampleZh: "上午我有会议。", note: "am Vormittag · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Besprechung", gender: "die", plural: "-en", zh: "会议、洽谈", example: "Wir haben oft **Besprechungen**.", exampleZh: "我们经常开会。", note: "= das Meeting · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "meistens", gender: "副", plural: "", zh: "大多数时候", example: "**Meistens** esse ich in der Kantine.", exampleZh: "我大多在食堂吃饭。", note: "Adv. · ⚠️ st 在词中 → 不卷舌 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "lustig", gender: "形", plural: "", zh: "好笑、有趣", example: "Meine Kollegen sind sehr **lustig**.", exampleZh: "我的同事们很有趣。", note: "Adj. · AB p.8 Laura", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Chefin", gender: "die", plural: "-nen", zh: "女上司", example: "Meine **Chefin** erklärt mir alles.", exampleZh: "我的女上司什么都给我解释。", note: "♂ der Chef · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "erklären", gender: "动", plural: "", zh: "解释", example: "Die Chefin **erklärt** mir die Aufgabe.", exampleZh: "女上司给我解释任务。", note: "schwach · 🔴 重点；不可分 → PII erklärt · AB p.8 Laura", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "manchmal", gender: "副", plural: "", zh: "有时", example: "**Manchmal** mache ich Fehler.", exampleZh: "有时我会犯错。", note: "Adv. · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "bedeuten", gender: "动", plural: "", zh: "意味着", example: "Was **bedeutet** das?", exampleZh: "这是什么意思？", note: "schwach · 🔴 重点词 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "leider", gender: "副", plural: "", zh: "可惜", example: "**Leider** habe ich keine Zeit.", exampleZh: "可惜我没时间。", note: "Adv. · ⚠️ ≠ Lieder（歌） · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Fehler", gender: "der", plural: "-", zh: "错误", example: "Ich mache manchmal **Fehler**.", exampleZh: "我有时会犯错。", note: "单复同形；Fehler machen · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Kunde", gender: "der", plural: "-n", zh: "顾客", example: "Ich besuche einen **Kunden**.", exampleZh: "我拜访一位顾客。", note: "⚠️ n-变化: den/dem/des Kunden · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "finden", gender: "动", plural: "", zh: "觉得", example: "Ich **finde** die Arbeit toll.", exampleZh: "我觉得这工作很棒。", note: "stark · etw. toll finden · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "toll", gender: "形", plural: "", zh: "棒的", example: "Das finde ich **toll**!", exampleZh: "我觉得这很棒！", note: "Adj. · nicht so toll = 不怎么样 · AB p.8 Laura", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "mitnehmen", gender: "可分", plural: "", zh: "带上", example: "Die Chefin nimmt mich mit.", exampleZh: "女上司带上我。", note: "trennbar, nimmt mit · PII hat mitgenommen · AB p.8 Laura", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Leute", gender: "die", plural: "(只复数)", zh: "人们", example: "Die **Leute** hier sind supernett.", exampleZh: "这儿的人超友好。", note: "⚠️ 只有复数 · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "supernett", gender: "形", plural: "", zh: "超友好", example: "Meine Kollegen sind **supernett**.", exampleZh: "我的同事们超友好。", note: "Adj. · super- 加强 · AB p.8 Laura", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Lied", gender: "das", plural: "Pl. Lieder", zh: "歌曲", example: "Wir singen deutsche **Lieder**.", exampleZh: "我们唱德语歌。", note: "⚠️ ≠ leider · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "singen", gender: "动", plural: "", zh: "唱", example: "Wir **singen** zusammen.", exampleZh: "我们一起唱歌。", note: "stark · singen–sang–gesungen · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "bleiben", gender: "动", plural: "", zh: "停留、留下", example: "Ich möchte noch lange hier **bleiben**!", exampleZh: "我还想在这儿待很久！", note: "stark · 🔴 PII ist geblieben · AB p.8 Laura", level: "暑期", tags: ["密集"] },
        { de: "Blog(beitrag)", gender: "der", plural: "-s / ¨-e", zh: "博客(文)", example: "Laura schreibt einen **Blogbeitrag**.", exampleZh: "Laura 写一篇博客。", note: "AB p.8 2b/2c", level: "暑期", tags: ["密集"] },
        { de: "Sätze verbinden", gender: "短语", plural: "", zh: "连接句子", example: "**Verbinden** Sie die Sätze mit und!", exampleZh: "请用 und 连接句子！", note: "Ausdruck · 本页语法点 · AB p.8 2c", level: "暑期", tags: ["密集"] },
        { de: "und / oder / aber", gender: "短语", plural: "", zh: "和 / 或 / 但是", example: "Die Firma ist klein, **aber** sie hat viele Kunden.", exampleZh: "公司不大，但客户很多。", note: "Konj. · 并列连词，语序不变 · AB p.8 2c", level: "暑期", tags: ["密集"] },
        { de: "früh aufstehen", gender: "可分", plural: "", zh: "早起", example: "Ich stehe jeden Tag früh auf.", exampleZh: "我每天早起。", note: "trennbar · PII ist aufgestanden · AB p.8 2c", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "besuchen", gender: "动", plural: "", zh: "拜访", example: "Wir **besuchen** die Kunden.", exampleZh: "我们拜访客户。", note: "schwach · 不可分 → PII besucht · AB p.8 2c", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Sandwich", gender: "das", plural: "-s/-es", zh: "三明治", example: "Ich esse ein **Sandwich** in der Pause.", exampleZh: "我在休息时吃三明治。", note: "AB p.8 2c", level: "暑期", tags: ["密集"] },
        { de: "Apfelschorle", gender: "die", plural: "-n", zh: "苹果气泡饮", example: "Ich trinke eine **Apfelschorle**.", exampleZh: "我喝一杯苹果气泡饮。", note: "苹果汁 + 气泡水 · AB p.8 2c", level: "暑期", tags: ["密集"] },
        { de: "treffen", gender: "动", plural: "", zh: "遇见", example: "Ich **treffe** meine Freunde.", exampleZh: "我和朋友见面。", note: "stark, trifft · e→i 换音 · AB p.8 2c", level: "暑期", tags: ["密集"] },
        { de: "anrufen", gender: "可分", plural: "", zh: "打电话 (+Akk)", example: "Ich rufe meinen Kollegen an.", exampleZh: "我给同事打电话。", note: "trennbar · ⚠️ + Akkusativ，不是 Dativ · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "einladen", gender: "可分", plural: "", zh: "邀请", example: "Wir laden die Leute zur Party ein.", exampleZh: "我们邀请大家来派对。", note: "trennbar, lädt ein · ⚠️ + Akk；a→ä: er lädt ein · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "wegwerfen", gender: "可分", plural: "", zh: "扔掉", example: "Ich werfe meinen Müll weg.", exampleZh: "我把垃圾扔掉。", note: "trennbar, wirft weg · PII hat weggeworfen · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aussehen", gender: "可分", plural: "", zh: "看起来", example: "Du siehst sehr schön aus.", exampleZh: "你看起来很漂亮。", note: "trennbar, sieht aus · 🔴 重点词 · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "zumachen", gender: "可分", plural: "", zh: "关上", example: "Ich mache die Tür zu.", exampleZh: "我把门关上。", note: "trennbar · 门窗用 auf/zu · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aufstehen", gender: "可分", plural: "", zh: "起床", example: "Ich stehe um 8 Uhr auf.", exampleZh: "我八点起床。", note: "trennbar · ⚠️ PII ist aufgestanden · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "einschalten", gender: "可分", plural: "", zh: "打开（电源）", example: "Ich schalte mein Radio ein.", exampleZh: "我打开收音机。", note: "trennbar · 🔴 电器用 ein/aus · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "ausmachen", gender: "可分", plural: "", zh: "关掉（电源）", example: "Du machst das Licht aus.", exampleZh: "你把灯关掉。", note: "trennbar · 🔴 电器一律 an/aus · KB p.78 语法", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Schere", gender: "die", plural: "-n", zh: "剪刀", example: "Ich brauche eine **Schere**.", exampleZh: "我需要一把剪刀。", note: "课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "schneiden", gender: "动", plural: "", zh: "剪、切", example: "Ich **schneide** die Zwiebel klein.", exampleZh: "我把洋葱切碎。", note: "stark · schnitt / geschnitten · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Tor", gender: "das", plural: "-e", zh: "大门", example: "Ich öffne das **Tor**.", exampleZh: "我打开大门。", note: "⚠️ 中性！（笔记订正） · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Tresor", gender: "der", plural: "-e", zh: "保险柜", example: "Ich öffne den **Tresor**.", exampleZh: "我打开保险柜。", note: "重音 Tre-SOR · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Zufall", gender: "der", plural: "¨-e", zh: "巧合", example: "So ein **Zufall**!", exampleZh: "真巧！", note: "课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "pünktlich", gender: "形", plural: "", zh: "准时的", example: "Er ist immer **pünktlich**.", exampleZh: "他总是很准时。", note: "Adj. · 课堂手写笔记", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "bestimmter Artikel", gender: "短语", plural: "", zh: "定冠词", example: "„der\" ist ein bestimmter **Artikel**.", exampleZh: "„der\" 是定冠词。", note: "Ausdruck · ↔ unbestimmter Artikel · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Rufzeichen", gender: "das", plural: "-", zh: "感叹号 (!)", example: "Am Ende steht ein **Rufzeichen**.", exampleZh: "结尾是一个感叹号。", note: "🇦🇹 奥地利说法；德国 Ausrufezeichen · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Fragezeichen", gender: "das", plural: "-", zh: "问号 (?)", example: "Vergiss das **Fragezeichen** nicht!", exampleZh: "别忘了问号！", note: "课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Punkt", gender: "der", plural: "-e", zh: "句号 (.)", example: "Schreib bitte einen **Punkt**!", exampleZh: "请写个句号！", note: "⚠️ 德语作业标点算分 · 课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Doppelpunkt", gender: "der", plural: "-e", zh: "冒号 (:)", example: "Nach dem Betreff kommt ein **Doppelpunkt**.", exampleZh: "主题后面是冒号。", note: "课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "Komma", gender: "das", plural: "Pl. Kommas/Kommata", zh: "逗号 (,)", example: "Vor „aber\" steht ein **Komma**.", exampleZh: "„aber\" 前面有逗号。", note: "课堂手写笔记", level: "暑期", tags: ["密集"] },
        { de: "seit", gender: "动", plural: "", zh: "自从…以来", example: "Ich lerne **seit** einem Jahr Deutsch.", exampleZh: "我学德语已经一年了。", note: "Präp. + Dativ · ⚠️ 后面用现在时！≠ vor · 课堂 Q3", level: "暑期", tags: ["密集"] },
        { de: "vor", gender: "动", plural: "", zh: "…之前", example: "Ich war **vor** einem Jahr in Wien.", exampleZh: "一年前我在维也纳。", note: "Präp. + Dativ · 已结束 ↔ seit 持续 · 课堂 Q3", level: "暑期", tags: ["密集"] },
        { de: "aufwachen", gender: "可分", plural: "", zh: "醒来", example: "Ich wache um 7 auf, aber ich stehe um 8 auf.", exampleZh: "我七点醒，八点起。", note: "trennbar · ≠ aufstehen 起床 · 课堂笔记 ⑥", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "kennenlernen", gender: "可分", plural: "", zh: "结识", example: "Ich lerne viele Leute **kennen**.", exampleZh: "我认识了很多人。", note: "trennbar, lernt kennen · 🔴 配情态动词合写: will kennenlernen · 课堂笔记 ⑥", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Sehr geehrte Frau …", gender: "短语", plural: "", zh: "尊敬的…女士", example: "Sehr geehrte Frau García,", exampleZh: "尊敬的 García 女士，", note: "Ausdruck · 正式；后跟逗号，正文小写 · 课堂笔记 ⑦", level: "暑期", tags: ["密集"] },
        { de: "Mit freundlichen Grüßen", gender: "短语", plural: "", zh: "此致敬礼", example: "Mit freundlichen **Grüßen**", exampleZh: "此致敬礼", note: "Ausdruck · MfG；⚠️ 后面不加逗号 · 课堂笔记 ⑦", level: "暑期", tags: ["密集"] },
        { de: "Bis bald", gender: "短语", plural: "", zh: "回头见", example: "Bis **bald**!", exampleZh: "回头见！", note: "Ausdruck · 非正式 · 课堂笔记 ⑦", level: "暑期", tags: ["密集"] },
        { de: "mögen", gender: "情态", plural: "", zh: "喜欢（+名词）", example: "Ich mag Salat.", exampleZh: "我喜欢沙拉。", note: "Modalverb, mag · mögen + Nomen · 课堂笔记 ⑨", level: "暑期", tags: ["密集", "modal"] },
        { de: "gern", gender: "副", plural: "", zh: "喜欢（+动词）", example: "Ich esse **gern** Salat.", exampleZh: "我喜欢吃沙拉。", note: "Adv. · gern 紧跟动词 · 课堂笔记 ⑨", level: "暑期", tags: ["密集"] },
        { de: "nicht so gern", gender: "短语", plural: "", zh: "不太喜欢", example: "Nein, ich koche nicht so **gern**.", exampleZh: "不，我不太喜欢做饭。", note: "Ausdruck · 💡 委婉说法，比 Ich mag das nicht 客气 · 课堂笔记 ⑨", level: "暑期", tags: ["密集"] },
        { de: "fahren", gender: "动", plural: "", zh: "开车、乘车", example: "Sie **fährt** mit dem Zug nach Salzburg.", exampleZh: "她坐火车去萨尔茨堡。", note: "stark, fährt · a→ä 换音 · 课堂笔记 ⑤", level: "暑期", tags: ["密集"] },
        { de: "lesen", gender: "动", plural: "", zh: "读", example: "Er liest ein Buch.", exampleZh: "他在读一本书。", note: "stark, liest · e→ie 换音 · 课堂笔记 ⑤", level: "暑期", tags: ["密集"] },
        { de: "essen", gender: "动", plural: "", zh: "吃", example: "Was isst du gern?", exampleZh: "你喜欢吃什么？", note: "stark, isst · e→i 换音 · 课堂笔记 ⑤", level: "暑期", tags: ["密集"] }
      ]
    },

    {
      id: "sommer-d2", level: "暑期", lesson: "第2天", theme: "Arbeitsalltag · 强弱变化",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-08", date: "2026-07-08",
      words: [
        { de: "Nuss", gender: "die", plural: "Pl. Nüsse", zh: "坚果", example: "Ich esse gern **Nüsse**.", exampleZh: "我喜欢吃坚果。", note: "⚠️ 变音复数 · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Nussschnaps", gender: "der", plural: "¨-e", zh: "坚果烈酒", example: "**Nussschnaps** ist sehr stark.", exampleZh: "坚果烈酒很烈。", note: "Nuss+Schnaps，三个 s 连写 · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Aufgabe", gender: "die", plural: "-n", zh: "任务、习题", example: "Die **Aufgabe** ist nicht leicht.", exampleZh: "这道题不容易。", note: "auf + geben · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Haupt", gender: "das", plural: "¨-er", zh: "头（文/旧）", example: "**Haupt**- steht in vielen Wörtern.", exampleZh: "Haupt- 出现在很多复合词里。", note: "= der Kopf；多用于复合词 · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Hauptbahnhof", gender: "der", plural: "¨-e", zh: "火车总站", example: "Wir treffen uns am **Hauptbahnhof**.", exampleZh: "我们在火车总站见。", note: "⚠️ St 读 /ʃt/ · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Erklärung", gender: "die", plural: "-en", zh: "解释、说明", example: "Danke für die **Erklärung**!", exampleZh: "谢谢你的解释！", note: "← erklären · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Ahnung", gender: "die", plural: "-en", zh: "概念、头绪", example: "Keine **Ahnung**!", exampleZh: "不知道！", note: "🔴 Keine Ahnung! = 完全不知道；≠ die Idee（主意） · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Meinung", gender: "die", plural: "-en", zh: "意见、看法", example: "Meiner **Meinung** nach ist das falsch.", exampleZh: "我认为这是错的。", note: "🔴 meiner Meinung nach · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Kundin", gender: "die", plural: "-nen", zh: "女顾客", example: "Die **Kundin** kommt um zehn.", exampleZh: "女顾客十点来。", note: "♂ der Kunde (n-变化) · 第一批", level: "暑期", tags: ["密集"] },
        { de: "Würfel", gender: "der", plural: "-", zh: "骰子 / 立方体", example: "Wir spielen mit einem **Würfel**.", exampleZh: "我们用骰子玩游戏。", note: "单复同形 · 第一批", level: "暑期", tags: ["密集"] },
        { de: "feiern", gender: "动", plural: "", zh: "庆祝", example: "Wir **feiern** ihren Geburtstag.", exampleZh: "我们庆祝她的生日。", note: "schwach · ← die Feier · 第二批", level: "暑期", tags: ["密集"] },
        { de: "Hauptstadt", gender: "die", plural: "Pl. Hauptstädte", zh: "首都", example: "Wien ist die **Hauptstadt** von Österreich.", exampleZh: "维也纳是奥地利首都。", note: "⚠️ St 读 /ʃt/ · 第二批", level: "暑期", tags: ["密集"] },
        { de: "Durst", gender: "der", plural: "无复数", zh: "渴", example: "Ich habe **Durst**.", exampleZh: "我渴了。", note: "🔴 st 结尾读 /st/ 不卷 · 第二批", level: "暑期", tags: ["密集"] },
        { de: "stimmen", gender: "动", plural: "", zh: "对、正确", example: "Das **stimmt**!", exampleZh: "没错！", note: "schwach · 词头 St 读 /ʃt/ · 第二批", level: "暑期", tags: ["密集"] },
        { de: "holen", gender: "动", plural: "", zh: "去拿、取来", example: "Hol bitte das Wasser!", exampleZh: "请去拿水！", note: "schwach · 第二批", level: "暑期", tags: ["密集"] },
        { de: "grüßen", gender: "动", plural: "", zh: "问候", example: "**Grüß** dich!", exampleZh: "你好！", note: "schwach · 🔴 ← der Gruß · 第二批", level: "暑期", tags: ["密集"] },
        { de: "Wortanfang", gender: "der", plural: "¨-e", zh: "词首", example: "Am **Wortanfang** wird st zu /ʃt/.", exampleZh: "词首的 st 读作 /ʃt/。", note: "Wort + Anfang · 发音术语", level: "暑期", tags: ["密集"] },
        { de: "Silbenanfang", gender: "der", plural: "¨-e", zh: "音节首", example: "Auch am **Silbenanfang** gilt die Regel.", exampleZh: "音节首也适用这条规则。", note: "Silbe + Anfang · 发音术语", level: "暑期", tags: ["密集"] },
        { de: "Wortende", gender: "das", plural: "-n", zh: "词尾", example: "Am **Wortende** bleibt st /st/.", exampleZh: "词尾的 st 不卷舌。", note: "Wort + Ende · 发音术语", level: "暑期", tags: ["密集"] },
        { de: "Wortinnere", gender: "das", plural: "", zh: "词中、词内部", example: "Im **Wortinneren** bleibt st /st/.", exampleZh: "词中的 st 不卷舌。", note: "Wort + innere · 发音术语", level: "暑期", tags: ["密集"] },
        { de: "vorgestern", gender: "副", plural: "", zh: "前天", example: "**Vorgestern** war ich im Kino.", exampleZh: "前天我去看电影了。", note: "Adv. · 往前叠 vor- · 时间副词阶梯", level: "暑期", tags: ["密集"] },
        { de: "gestern", gender: "副", plural: "", zh: "昨天", example: "**Gestern** hatte ich viel Arbeit.", exampleZh: "昨天我工作很多。", note: "Adv. · 时间副词阶梯", level: "暑期", tags: ["密集"] },
        { de: "heute", gender: "副", plural: "", zh: "今天", example: "**Heute** ist es wieder heiß.", exampleZh: "今天又热了。", note: "Adv. · 时间副词阶梯", level: "暑期", tags: ["密集"] },
        { de: "morgen", gender: "副", plural: "", zh: "明天", example: "**Morgen** habe ich frei.", exampleZh: "明天我休息。", note: "Adv. · ⚠️ ≠ der Morgen（早晨） · 时间副词阶梯", level: "暑期", tags: ["密集"] },
        { de: "übermorgen", gender: "副", plural: "", zh: "后天", example: "**Übermorgen** fahre ich nach Wien.", exampleZh: "后天我去维也纳。", note: "Adv. · 往后叠 über- · 时间副词阶梯", level: "暑期", tags: ["密集"] },
        { de: "Gespräch", gender: "das", plural: "-e", zh: "谈话", example: "**Gespräche** am Arbeitsplatz sind wichtig.", exampleZh: "职场谈话很重要。", note: "🔴 不可分 → 无 -ge- · AB p.80", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Arbeitsplatz", gender: "der", plural: "¨-e", zh: "工位", example: "Mein **Arbeitsplatz** ist im Büro.", exampleZh: "我的工位在办公室。", note: "Arbeit + Platz · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "beantworten", gender: "动", plural: "", zh: "回答", example: "Ich **beantworte** die Frage.", exampleZh: "我回答这个问题。", note: "schwach, +Akk · 🔴 +Akk（答事）；antworten +Dat（答人） · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "mit wem?", gender: "短语", plural: "", zh: "和谁？", example: "Mit **wem** muss ich sprechen?", exampleZh: "我该和谁谈？", note: "Frage · wem = wer 的 Dativ · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Thema", gender: "das", plural: "Pl. Themen", zh: "主题", example: "Über welches **Thema** sprechen wir?", exampleZh: "我们谈哪个主题？", note: "⚠️ 不规则复数 · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Arbeitszeit", gender: "die", plural: "-en", zh: "工作时间", example: "Meine **Arbeitszeit** ist von 8 bis 17 Uhr.", exampleZh: "我的工作时间是8点到17点。", note: "AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Urlaub", gender: "der", plural: "-e", zh: "休假", example: "Ich habe im August **Urlaub**.", exampleZh: "我八月休假。", note: "Urlaub haben · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Nachbar", gender: "der", plural: "-n", zh: "邻居", example: "Ich spreche mit den **Nachbarn**.", exampleZh: "我和邻居们说话。", note: "⚠️ n-变化 · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Form", gender: "die", plural: "-en", zh: "形式", example: "Schreiben Sie die richtige **Form**!", exampleZh: "请写出正确形式！", note: "AB p.80", level: "暑期", tags: ["密集"] },
        { de: "danach", gender: "副", plural: "", zh: "之后", example: "**Danach** gehe ich nach Hause.", exampleZh: "之后我回家。", note: "Adv. · 🔴 句首 → 倒装 · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "später", gender: "副", plural: "", zh: "稍后", example: "Ich rufe dich **später** an.", exampleZh: "我稍后给你打电话。", note: "Adv. · spät 的比较级 · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Freizeit", gender: "die", plural: "无复数", zh: "空闲时间", example: "In meiner **Freizeit** lese ich gern.", exampleZh: "空闲时间我喜欢读书。", note: "frei + Zeit · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Ausflug", gender: "der", plural: "¨-e", zh: "短途出游", example: "Wir machen einen **Ausflug**.", exampleZh: "我们去短途出游。", note: "🔴 einen Ausflug machen · AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Tour", gender: "die", plural: "-en", zh: "旅程", example: "Sie macht eine **Tour** in Salzburg.", exampleZh: "她在萨尔茨堡参加一个游览。", note: "AB p.80", level: "暑期", tags: ["密集"] },
        { de: "Gruppe", gender: "die", plural: "-n", zh: "团、组", example: "Mit einer **Gruppe** macht sie eine Tour.", exampleZh: "她跟一个团一起游览。", note: "AB p.80", level: "暑期", tags: ["密集"] },
        { de: "zurückfahren", gender: "可分", plural: "", zh: "返程", example: "Am Abend fährt sie mit dem Bus **zurück**.", exampleZh: "晚上她坐公交返程。", note: "trennbar, fährt zurück · 🔴 可分 + a→ä 换音 · AB p.80 3e", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "achten auf", gender: "短语", plural: "", zh: "注意", example: "Achten Sie **auf** die Artikel!", exampleZh: "请注意冠词！", note: "schwach, +Akk · + Akkusativ · AB p.81 3f", level: "暑期", tags: ["密集"] },
        { de: "besprechen", gender: "动", plural: "", zh: "讨论", example: "Wir **besprechen** eine Idee.", exampleZh: "我们讨论一个想法。", note: "stark, bespricht · 🔴 不可分 → PII besprochen · AB p.81 3f", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Dokument", gender: "das", plural: "-e", zh: "文件（纸质）", example: "Ich bringe den Kunden die **Dokumente**.", exampleZh: "我给客户送文件。", note: "≠ die Datei（电子） · AB p.81 3f", level: "暑期", tags: ["密集"] },
        { de: "Konto", gender: "das", plural: "Pl. Konten", zh: "账户", example: "Ich habe ein **Konto** bei der Bank.", exampleZh: "我在银行有个账户。", note: "⚠️ 不规则复数 · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "Kreditkarte", gender: "die", plural: "-n", zh: "信用卡", example: "Kann ich mit **Kreditkarte** zahlen?", exampleZh: "我能用信用卡付款吗？", note: "AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "überweisen", gender: "可分", plural: "", zh: "转账", example: "Ich **überweise** das Geld heute.", exampleZh: "我今天转账。", note: "untrennbar, überweist · 🔴 PII überwiesen（无 ge!） · AB 5a Bank", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "bar", gender: "副", plural: "", zh: "现金地", example: "Ich zahle **bar**.", exampleZh: "我付现金。", note: "Adv. · bar zahlen · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "zahlen", gender: "动", plural: "", zh: "付款", example: "Ich **zahle** 500 € pro Monat.", exampleZh: "我每月付500欧。", note: "schwach · ≈ bezahlen · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "genug", gender: "副", plural: "", zh: "足够", example: "Ich habe nicht **genug** Geld.", exampleZh: "我钱不够。", note: "Adv. · 🔴 重点词 · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "Automat", gender: "der", plural: "-en", zh: "自动机器/售货机", example: "Wo ist der nächste **Automat**?", exampleZh: "最近的取款机在哪儿？", note: "取款机 = der Geldautomat；🇦🇹 奥地利说 Bankomat · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "Kontonummer", gender: "die", plural: "-n", zh: "账号", example: "Wie ist Ihre **Kontonummer**?", exampleZh: "您的账号是多少？", note: "🇦🇹 IBAN 以 AT 开头 · AB 5a Bank", level: "暑期", tags: ["密集"] },
        { de: "Stift", gender: "der", plural: "-e", zh: "笔", example: "Hast du einen **Stift**?", exampleZh: "你有笔吗？", note: "🔴 词首 St → /ʃt/ · AB 4b", level: "暑期", tags: ["密集"] },
        { de: "Gast", gender: "der", plural: "¨-e", zh: "客人", example: "Wir haben heute **Gäste**.", exampleZh: "我们今天有客人。", note: "🔴 st 在词尾 → /st/ · AB 4b", level: "暑期", tags: ["密集"] },
        { de: "Bestellung", gender: "die", plural: "-en", zh: "订单", example: "Die **Bestellung** ist fertig.", exampleZh: "订单完成了。", note: "🔴 be+Stellung → 音节首 /ʃt/ · AB 4b", level: "暑期", tags: ["密集"] },
        { de: "Fest", gender: "das", plural: "-e", zh: "庆典", example: "Wir feiern ein **Fest**.", exampleZh: "我们办一场庆典。", note: "🔴 重点词 · AB 4c", level: "暑期", tags: ["密集"] },
        { de: "Sohn", gender: "der", plural: "Pl. Söhne", zh: "儿子", example: "Mein **Sohn** steht um 11 Uhr auf.", exampleZh: "我儿子十一点起床。", note: "变音复数 · AB 4c", level: "暑期", tags: ["密集"] },
        { de: "Ortsangabe", gender: "die", plural: "-n", zh: "地点说明", example: "Ergänzen Sie die **Ortsangaben**!", exampleZh: "请补全地点说明！", note: "Ort + Angabe · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "korrigieren", gender: "动", plural: "", zh: "改正", example: "Sie können mich **korrigieren**.", exampleZh: "您可以纠正我。", note: "schwach · 🔴 重点词 · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "Stress", gender: "der", plural: "无复数", zh: "压力", example: "So ein **Stress**!", exampleZh: "压力真大！", note: "KB p.10", level: "暑期", tags: ["密集"] },
        { de: "dauern", gender: "动", plural: "", zh: "持续", example: "Die Besprechung **dauert** zwei Stunden.", exampleZh: "会议持续两小时。", note: "schwach · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "Post", gender: "die", plural: "无复数", zh: "邮局", example: "Ich gehe zur **Post**.", exampleZh: "我去邮局。", note: "zur Post gehen · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "Bericht", gender: "der", plural: "-e", zh: "报告", example: "Ich schreibe einen **Bericht**.", exampleZh: "我写一份报告。", note: "🔴 einen Bericht schreiben · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "Bank", gender: "die", plural: "-en", zh: "银行", example: "Ich gehe zur **Bank**.", exampleZh: "我去银行。", note: "⚠️ die Bank/Bänke = 长椅 · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "nach Hause", gender: "短语", plural: "", zh: "回家", example: "Ich gehe nach **Hause**.", exampleZh: "我回家。", note: "Ausdruck · 方向 ↔ zu Hause 静止 · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "sprechen über", gender: "短语", plural: "", zh: "谈论", example: "Sie sprechen **über** ihren Arbeitstag.", exampleZh: "他们谈论工作日。", note: "stark, +Akk · 🔴 über → 永远 Akk · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "warst", gender: "动", plural: "", zh: "曾在", example: "Wo **warst** du?", exampleZh: "你刚才在哪儿？", note: "(sein Prät.) · S-H-M-W 规则 · KB p.10", level: "暑期", tags: ["密集"] },
        { de: "zuerst", gender: "副", plural: "", zh: "首先", example: "**Zuerst** fährt er den Computer hoch.", exampleZh: "他先启动电脑。", note: "Adv. · 🔴 句首 → 动词第二位 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "dann", gender: "副", plural: "", zh: "然后", example: "**Dann** öffnet er die Datei.", exampleZh: "然后他打开文件。", note: "Adv. · 🔴 句首 → 倒装 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "hochfahren", gender: "可分", plural: "", zh: "启动电脑", example: "Er fährt den Computer **hoch**.", exampleZh: "他启动电脑。", note: "trennbar, fährt hoch · a→ä 换音 · KB p.11", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "eingeben", gender: "可分", plural: "", zh: "输入", example: "Er gibt das Passwort ein.", exampleZh: "他输入密码。", note: "trennbar, gibt ein · e→i 换音 · KB p.11", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "anmachen", gender: "可分", plural: "", zh: "打开（电器）", example: "Mach den Fernseher an!", exampleZh: "把电视打开！", note: "trennbar · ↔ ausmachen · KB p.11", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "öffnen", gender: "动", plural: "", zh: "打开", example: "**Öffnen** Sie das Fenster!", exampleZh: "请打开窗户！", note: "schwach · 不可分；书面正式 · KB p.11", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "speichern", gender: "动", plural: "", zh: "保存", example: "Ich **speichere** die Datei.", exampleZh: "我保存文件。", note: "schwach · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "drucken", gender: "动", plural: "", zh: "打印", example: "Ich **drucke** den Bericht.", exampleZh: "我打印报告。", note: "schwach · ⚠️ ≠ drücken（按压） · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Ablauf", gender: "der", plural: "¨-e", zh: "流程", example: "Beschreiben Sie den **Ablauf**!", exampleZh: "请描述流程！", note: "Abläufe beschreiben · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Zahnarzt", gender: "der", plural: "¨-e", zh: "牙医", example: "Ich gehe zum **Zahnarzt**.", exampleZh: "我去看牙医。", note: "Zahn + Arzt · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Bäckerei", gender: "die", plural: "-en", zh: "面包店", example: "Ich kaufe Brot in der **Bäckerei**.", exampleZh: "我在面包店买面包。", note: "💡 -ei 结尾 → die · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Hausmeister", gender: "der", plural: "-", zh: "管理员", example: "Der **Hausmeister** macht die Tür auf.", exampleZh: "管理员把门打开。", note: "单复同形 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Geschäft", gender: "das", plural: "-e", zh: "商店", example: "Das **Geschäft** ist heute zu.", exampleZh: "商店今天关门。", note: "KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Datei", gender: "die", plural: "-en", zh: "文件（电子）", example: "Ich öffne die **Datei**.", exampleZh: "我打开文件。", note: "💡 -ei → die；≠ das Dokument · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Passwort", gender: "das", plural: "¨-er", zh: "密码", example: "Ich gebe mein **Passwort** ein.", exampleZh: "我输入密码。", note: "das Wort → 中性 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Drucker", gender: "der", plural: "-", zh: "打印机", example: "Der **Drucker** ist kaputt.", exampleZh: "打印机坏了。", note: "单复同形 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "Akku", gender: "der", plural: "-s", zh: "电池", example: "Mein **Akku** ist leer.", exampleZh: "我的电池没电了。", note: "KB p.11", level: "暑期", tags: ["密集"] },
        { de: "WLAN", gender: "das", plural: "-s", zh: "无线网", example: "Ich habe kein **WLAN**.", exampleZh: "我没有无线网。", note: "das Netz = 信号 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "offline", gender: "形", plural: "", zh: "离线", example: "Ich bin seit Tagen **offline**.", exampleZh: "我好几天没上网了。", note: "Adj. · KB p.11", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Mist!", gender: "das", plural: "", zh: "糟糕！", example: "**Mist**, der Akku ist leer!", exampleZh: "糟糕，电池没电了！", note: "轻度抱怨，可用 · KB p.11", level: "暑期", tags: ["密集"] },
        { de: "leer", gender: "形", plural: "", zh: "空的", example: "Der Akku ist **leer**.", exampleZh: "电池没电了。", note: "Adj. · ↔ voll · KB p.11", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Mitglied", gender: "das", plural: "-er", zh: "成员", example: "Ich bin **Mitglied** im Club.", exampleZh: "我是俱乐部成员。", note: "🔴 重点词 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Treffen", gender: "das", plural: "-", zh: "聚会", example: "Das **Treffen** ist am Samstag.", exampleZh: "聚会在周六。", note: "treffen 名词化；单复同形 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Einladung", gender: "die", plural: "-en", zh: "邀请函", example: "Vielen Dank für die **Einladung**!", exampleZh: "非常感谢您的邀请！", note: "🔴 ← einladen · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "diskutieren über", gender: "短语", plural: "", zh: "讨论", example: "Wir diskutieren **über** aktuelle Themen.", exampleZh: "我们讨论时事话题。", note: "schwach, +Akk · 🔴 über → Akk · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "aktuell", gender: "形", plural: "", zh: "当前的", example: "Wir sprechen über **aktuelle** Themen.", exampleZh: "我们谈论当前话题。", note: "Adj. · KB p.12", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "samstags", gender: "副", plural: "", zh: "每周六", example: "**Samstags** treffen wir uns.", exampleZh: "我们每周六见面。", note: "Adv. · -s = 每逢… · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Spezialität", gender: "die", plural: "-en", zh: "特色菜", example: "Wir essen spanische **Spezialitäten**.", exampleZh: "我们吃西班牙特色菜。", note: "🔴 重点词 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Erwachsene", gender: "der", plural: "-n", zh: "成年人", example: "Für **Erwachsene** kostet es 10 Euro.", exampleZh: "成人票十欧。", note: "🔴 形容词变名词 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "ab", gender: "动", plural: "", zh: "从…起", example: "Das Treffen ist ab 21 Uhr.", exampleZh: "聚会从21点开始。", note: "Präp. + Dativ · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "recherchieren", gender: "动", plural: "", zh: "查资料", example: "Ich **recherchiere** in der Bibliothek.", exampleZh: "我在图书馆查资料。", note: "schwach · 🔴 重音在 -ie- · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Bibliothek", gender: "die", plural: "-en", zh: "图书馆", example: "Die **Bibliothek** ist bis 20 Uhr offen.", exampleZh: "图书馆开到20点。", note: "⚠️ 重音 biblio-THEK · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "auswendig lernen", gender: "短语", plural: "", zh: "背下来", example: "Ich **lerne** die Wörter auswendig.", exampleZh: "我把单词背下来。", note: "Ausdruck · 🔴 重点短语 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "klingt", gender: "das", plural: "Ausdruck", zh: "听起来…", example: "Das **klingt** interessant!", exampleZh: "听起来很有意思！", note: "🔴 重点短语 · KB p.12", level: "暑期", tags: ["密集"] },
        { de: "Mittagspause", gender: "die", plural: "-n", zh: "午休", example: "In der **Mittagspause** esse ich.", exampleZh: "午休时我吃饭。", note: "KB p.13", level: "暑期", tags: ["密集"] },
        { de: "vergleichen", gender: "动", plural: "", zh: "比较", example: "**Vergleichen** Sie die Sätze!", exampleZh: "请比较这些句子！", note: "stark · 不可分 → PII verglichen · KB p.13", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Krankheit", gender: "die", plural: "-en", zh: "疾病", example: "Über **Krankheiten** spricht man nicht.", exampleZh: "人们不谈论疾病。", note: "🔴 krank + -heit · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "Aufzug", gender: "der", plural: "¨-e", zh: "电梯", example: "Der **Aufzug** ist kaputt.", exampleZh: "电梯坏了。", note: "🇦🇹 奥地利也说 der Lift · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "beliebt", gender: "形", plural: "", zh: "受欢迎的", example: "Small Talk über das Wetter ist **beliebt**.", exampleZh: "聊天气很受欢迎。", note: "Adj. · 🔴 重点词 · KB p.13", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "langweilig", gender: "形", plural: "", zh: "无聊的", example: "Die Besprechung ist **langweilig**.", exampleZh: "会议很无聊。", note: "Adj. · ↔ interessant · KB p.13", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "reden über", gender: "短语", plural: "", zh: "谈论", example: "Wir reden **über** das Wetter.", exampleZh: "我们聊天气。", note: "schwach, +Akk · 同 sprechen über · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "Plan", gender: "der", plural: "¨-e", zh: "计划", example: "Was sind deine **Pläne** für das Wochenende?", exampleZh: "你周末有什么计划？", note: "KB p.13", level: "暑期", tags: ["密集"] },
        { de: "neutral", gender: "形", plural: "", zh: "中立的", example: "Das Wetter ist ein **neutrales** Thema.", exampleZh: "天气是个中立话题。", note: "Adj. · KB p.13", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "formulieren", gender: "动", plural: "", zh: "措辞", example: "**Formulieren** Sie die Frage neutral!", exampleZh: "请中立地表述这个问题！", note: "schwach · 🔴 重点词 · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "persönlich", gender: "形", plural: "", zh: "私人的", example: "Die Frage ist zu **persönlich**.", exampleZh: "这问题太私人了。", note: "Adj. · nicht zu persönlich · KB p.13", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "meisten", gender: "die", plural: "Det.", zh: "大多数（人）", example: "Die **meisten** reden über das Wetter.", exampleZh: "大多数人聊天气。", note: "🔴 重点词 · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "eigentlich", gender: "副", plural: "", zh: "其实", example: "Mögen Sie **eigentlich** Sport?", exampleZh: "您其实喜欢运动吗？", note: "Adv. · 🔴 软化语气，Small Talk 必备 · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "schrecklich", gender: "形", plural: "", zh: "糟糕的", example: "Das Wetter ist **schrecklich**!", exampleZh: "天气糟透了！", note: "Adj. · 🔴 重点词 · KB p.13", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "denn", gender: "动", plural: "", zh: "（语气词）", example: "Was machen Sie **denn** am Wochenende?", exampleZh: "您周末做什么呢？", note: "Partikel · 软化问句语气 · KB p.13", level: "暑期", tags: ["密集"] },
        { de: "verbinden", gender: "动", plural: "", zh: "连接", example: "**Verbinden** Sie die Sätze!", exampleZh: "请连接这些句子！", note: "stark · 🔴 PII verbunden · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "beginnen", gender: "动", plural: "", zh: "开始", example: "Meine Arbeit **beginnt** um acht.", exampleZh: "我八点开始工作。", note: "stark · begann / hat begonnen · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "Fahrrad", gender: "das", plural: "¨-er", zh: "自行车", example: "Ich fahre mit dem **Fahrrad**.", exampleZh: "我骑自行车。", note: "mit + Dativ · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "beraten", gender: "动", plural: "", zh: "提供建议", example: "Ich **berate** die Kunden.", exampleZh: "我给客户提供建议。", note: "stark, berät · 🔴 a→ä 换音 · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "Kasse", gender: "die", plural: "-n", zh: "收银台", example: "Ich arbeite an der **Kasse**.", exampleZh: "我在收银台工作。", note: "an der Kasse · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "Spaß machen", gender: "短语", plural: "", zh: "有乐趣", example: "Die Arbeit **macht** mir Spaß.", exampleZh: "这工作让我开心。", note: "Ausdruck · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "Paketdienst", gender: "der", plural: "-e", zh: "包裹快递", example: "Ich arbeite beim **Paketdienst**.", exampleZh: "我在快递公司工作。", note: "🔴 重点词 · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "durch", gender: "动", plural: "", zh: "穿过", example: "Ich fahre **durch** die Stadt.", exampleZh: "我穿过城市。", note: "Präp. + Akk · 🔴 永远 + Akk · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "pro Tag", gender: "短语", plural: "", zh: "每天", example: "Ich fahre 100 km pro **Tag**.", exampleZh: "我每天开100公里。", note: "Ausdruck · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "müde", gender: "形", plural: "", zh: "累的", example: "Am Abend bin ich **müde**.", exampleZh: "晚上我很累。", note: "Adj. · AB Arbeitstag", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "frei haben", gender: "短语", plural: "", zh: "休假、有空", example: "Am Samstag **habe** ich frei.", exampleZh: "周六我休息。", note: "Ausdruck · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "planen", gender: "动", plural: "", zh: "计划", example: "Wir **planen** die Einrichtung.", exampleZh: "我们规划家居布置。", note: "schwach · ← der Plan · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "stressig", gender: "形", plural: "", zh: "压力大的", example: "Der Tag war sehr **stressig**.", exampleZh: "这一天压力很大。", note: "Adj. · Stress + -ig · AB Arbeitstag", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "den ganzen Tag", gender: "短语", plural: "", zh: "一整天", example: "Ich sitze den ganzen **Tag** im Büro.", exampleZh: "我一整天坐在办公室。", note: "Ausdruck · 🔴 Akk 时间状语 · AB Arbeitstag", level: "暑期", tags: ["密集"] },
        { de: "zu Fuß", gender: "短语", plural: "", zh: "步行", example: "Ich gehe zu **Fuß** zur Arbeit.", exampleZh: "我步行去上班。", note: "Ausdruck · ⚠️ 例外，不用 mit · AB Arbeitstag", level: "暑期", tags: ["密集"] }
      ]
    },

    {
      id: "sommer-d5", level: "暑期", lesson: "第5天", theme: "Imperativ · 健康偏方",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-13", date: "2026-07-13",
      words: [
        { de: "Hausmittel", gender: "das", plural: "-", zh: "家庭偏方/土方", example: "Was ist dein bestes **Hausmittel**?", exampleZh: "你最好的偏方是什么？", note: "本课主题词 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Zahnschmerzen", gender: "die", plural: "(只复数)", zh: "牙痛", example: "Ich habe **Zahnschmerzen**.", exampleZh: "我牙疼。", note: "⚠️ 恒复数 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Schnupfen", gender: "der", plural: "-", zh: "鼻塞/伤风", example: "Ich habe **Schnupfen**.", exampleZh: "我感冒流鼻涕。", note: "Schnupfen haben · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Kopfschmerzen", gender: "die", plural: "(只复数)", zh: "头痛", example: "Ich habe **Kopfschmerzen**.", exampleZh: "我头疼。", note: "⚠️ 恒复数 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "erkältet", gender: "动", plural: "", zh: "感冒的", example: "Ich bin **erkältet**.", exampleZh: "我感冒了。", note: "Part.II/Adj. · erkältet sein · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "einschlafen", gender: "可分", plural: "", zh: "入睡（睡着瞬间）", example: "Ich kann nicht **einschlafen**.", exampleZh: "我睡不着。", note: "trennbar, schläft ein · ≠ schlafen（睡着状态） · Kap.8 健康", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Tablette", gender: "die", plural: "-n", zh: "药片", example: "Nimm eine **Tablette**!", exampleZh: "吃一片药！", note: "die Schlaftablette 安眠药 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "inhalieren", gender: "动", plural: "", zh: "吸入蒸汽", example: "**Inhalier** mit heißem Wasser!", exampleZh: "用热水吸蒸汽！", note: "schwach · 治感冒 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "baden", gender: "动", plural: "", zh: "泡澡", example: "**Baden** ist verboten.", exampleZh: "禁止泡澡。", note: "schwach · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Hühnersuppe", gender: "die", plural: "-n", zh: "鸡汤", example: "Koch eine **Hühnersuppe**!", exampleZh: "煮一锅鸡汤！", note: "das Suppenhuhn = 炖汤老母鸡 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Nelke", gender: "die", plural: "-n", zh: "丁香（香料）", example: "Nimm eine **Nelke** gegen Zahnschmerzen!", exampleZh: "含一颗丁香治牙痛！", note: "⚠️ 也指康乃馨 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Zwiebel", gender: "die", plural: "-n", zh: "洋葱", example: "Schneide die **Zwiebel** klein!", exampleZh: "把洋葱切碎！", note: "鸡汤配料 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Salz", gender: "das", plural: "-e", zh: "盐", example: "Gib bitte **Salz** dazu!", exampleZh: "请加点盐！", note: "调味 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Pfeffer", gender: "der", plural: "无复数", zh: "胡椒", example: "Salz und **Pfeffer**, bitte!", exampleZh: "请给盐和胡椒！", note: "调味 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Honig", gender: "der", plural: "-e", zh: "蜂蜜", example: "Trink Milch mit **Honig**!", exampleZh: "喝点蜂蜜牛奶！", note: "Milch mit Honig · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Nase ist frei", gender: "die", plural: "Ausdruck", zh: "鼻子通了", example: "Danach ist die Nase wieder **frei**.", exampleZh: "之后鼻子就通了。", note: "Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "Rezept", gender: "das", plural: "-e", zh: "食谱 / 处方", example: "Der Arzt schreibt ein **Rezept**.", exampleZh: "医生开处方。", note: "⚠️ 一词两义，看语境 · Kap.8 健康", level: "暑期", tags: ["密集"] },
        { de: "ausziehen", gender: "可分", plural: "", zh: "脱（鞋/衣）", example: "Zieh die Schuhe aus!", exampleZh: "把鞋脱了！", note: "trennbar · Roger Cicero 歌名 · 命令式（歌）", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "rausbringen", gender: "可分", plural: "", zh: "倒（垃圾）", example: "Bring den Müll **raus**!", exampleZh: "把垃圾倒了！", note: "trennbar · 命令式（歌）", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aufpassen (auf+A)", gender: "可分", plural: "", zh: "照看 / 当心", example: "Pass auf die Kinder auf!", exampleZh: "看好孩子们！", note: "trennbar · + auf + Akk · 命令式（歌）", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aufräumen", gender: "可分", plural: "", zh: "收拾", example: "Räum dein Zimmer auf!", exampleZh: "把你房间收拾了！", note: "trennbar · 命令式（歌）", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "ausgehen", gender: "可分", plural: "", zh: "外出", example: "Geh heute Abend aus!", exampleZh: "今晚出去玩吧！", note: "trennbar · 命令式（歌）", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "verstehen", gender: "动", plural: "", zh: "听懂（字面）", example: "Ich **verstehe** dich nicht.", exampleZh: "我听不懂你说的。", note: "stark · ≠ meinen（意指） · 易混词", level: "暑期", tags: ["密集"] },
        { de: "meinen", gender: "动", plural: "", zh: "意指、认为", example: "Was **meinst** du damit?", exampleZh: "你这话什么意思？", note: "schwach · 话背后真正的意思 · 易混词", level: "暑期", tags: ["密集"] },
        { de: "sein (Imperativ)", gender: "短语", plural: "", zh: "是（命令式）", example: "Sei aktiv! / Seid aktiv! / Seien Sie aktiv!", exampleZh: "积极点！", note: "unregelmäßig · 🔴 sei! / seid! / seien Sie! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "nehmen (Imperativ)", gender: "短语", plural: "", zh: "拿（命令式）", example: "Nimm eine Tablette!", exampleZh: "吃一片药！", note: "stark · 🔴 e→i 保留: nimm! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "essen (Imperativ)", gender: "短语", plural: "", zh: "吃（命令式）", example: "Iss mehr Obst!", exampleZh: "多吃点水果！", note: "stark · 🔴 e→i 保留: iss! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "lesen (Imperativ)", gender: "短语", plural: "", zh: "读（命令式）", example: "Lies viele Bücher!", exampleZh: "多读书！", note: "stark · 🔴 e→ie 保留: lies! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "vergessen", gender: "动", plural: "", zh: "忘记", example: "**Vergiss** das nicht!", exampleZh: "别忘了！", note: "stark, du vergisst · 🔴 e→i: vergiss! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "fahren (Imperativ)", gender: "短语", plural: "", zh: "开车（命令式）", example: "Fahr nicht so schnell!", exampleZh: "别开这么快！", note: "stark · 🔴 a→ä 卸妆: fahr!（不是 fähr） · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "schlafen (Imperativ)", gender: "短语", plural: "", zh: "睡（命令式）", example: "Schlaf gut!", exampleZh: "好好睡！", note: "stark · 🔴 a→ä 卸妆: schlaf! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "laufen (Imperativ)", gender: "短语", plural: "", zh: "跑（命令式）", example: "Lauf schneller!", exampleZh: "跑快点！", note: "stark · 🔴 au→äu 卸妆: lauf! · Imperativ 语法", level: "暑期", tags: ["密集"] },
        { de: "Experiment", gender: "das", plural: "-e", zh: "实验", example: "Wir machen ein **Experiment**.", exampleZh: "我们做个实验。", note: "Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "glauben", gender: "动", plural: "", zh: "觉得、相信", example: "Ich **glaube**, das ist richtig.", exampleZh: "我觉得这是对的。", note: "schwach · Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "Party", gender: "die", plural: "-s", zh: "派对", example: "Die **Party** ist heute Abend.", exampleZh: "派对在今晚。", note: "Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "interessant", gender: "形", plural: "", zh: "有趣", example: "Das klingt **interessant**!", exampleZh: "听起来很有意思！", note: "Adj. · ↔ langweilig · Kap.8 p.91 2a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "mitkommen", gender: "可分", plural: "", zh: "一起来", example: "Komm doch mit!", exampleZh: "一起来吧！", note: "trennbar · 人一起来 · Kap.8 p.91 2a", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "vermissen", gender: "动", plural: "", zh: "想念", example: "Ich **vermisse** dich.", exampleZh: "我想你。", note: "schwach · Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "gefährlich", gender: "形", plural: "", zh: "危险的", example: "Das ist zu **gefährlich**!", exampleZh: "这太危险了！", note: "Adj. · Kap.8 p.91 2a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "es geht dir gut", gender: "短语", plural: "", zh: "你好吗", example: "Wie geht es dir?", exampleZh: "你好吗？", note: "Ausdruck · 🔴 es geht + Dativ · Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "hoffentlich", gender: "副", plural: "", zh: "但愿", example: "**Hoffentlich** geht es dir bald besser!", exampleZh: "但愿你快点好起来！", note: "Adv. · ← hoffen · Kap.8 p.91 2a", level: "暑期", tags: ["密集"] },
        { de: "Obst", gender: "das", plural: "无复数", zh: "水果", example: "Iss viel **Obst**!", exampleZh: "多吃水果！", note: "⚠️ 集合名词，无复数 · Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "Gemüse", gender: "das", plural: "无复数", zh: "蔬菜", example: "Iss jeden Tag **Gemüse**!", exampleZh: "每天吃蔬菜！", note: "⚠️ 集合名词，无复数 · Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "regelmäßig", gender: "形", plural: "", zh: "规律地", example: "Mach **regelmäßig** Sport!", exampleZh: "规律地运动！", note: "Adj./Adv. · ← die Regel · Kap.8 p.91 2b", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "dreimal täglich", gender: "短语", plural: "", zh: "每天三次", example: "Nimm die Tabletten dreimal **täglich**!", exampleZh: "每天吃三次药！", note: "Ausdruck · Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "mindestens", gender: "副", plural: "", zh: "至少", example: "Trink **mindestens** zwei Liter Wasser!", exampleZh: "至少喝两升水！", note: "Adv. · Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "Liter", gender: "der", plural: "-", zh: "升", example: "Zwei **Liter** pro Tag, bitte!", exampleZh: "请每天两升！", note: "单复同形 · Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "Stunde", gender: "die", plural: "-n", zh: "小时", example: "Schlaf acht **Stunden**!", exampleZh: "睡八小时！", note: "Kap.8 p.91 2b", level: "暑期", tags: ["密集"] },
        { de: "Fitness-Studio", gender: "das", plural: "-s", zh: "健身房", example: "Geh ins **Fitness**-Studio!", exampleZh: "去健身房吧！", note: "Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "markieren", gender: "动", plural: "", zh: "标出", example: "**Markieren** Sie die Verben!", exampleZh: "请标出动词！", note: "schwach · 高频指令动词 · Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "Verb", gender: "das", plural: "-en", zh: "动词", example: "Markiere das **Verb**!", exampleZh: "标出动词！", note: "Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "mitmachen", gender: "可分", plural: "", zh: "一起参加", example: "Macht alle mit!", exampleZh: "大家一起参加！", note: "trennbar · Kap.8 p.92 3a", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aktiv", gender: "形", plural: "", zh: "积极", example: "Sei **aktiv**!", exampleZh: "积极点！", note: "Adj. · Kap.8 p.92 3a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "laufen", gender: "动", plural: "", zh: "跑", example: "**Lauf** jeden Tag!", exampleZh: "每天跑步！", note: "stark, du läufst · 🔴 au→äu · Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "Ball", gender: "der", plural: "¨-e", zh: "球", example: "Hol den **Ball**!", exampleZh: "去把球拿来！", note: "Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "langsam", gender: "形", plural: "", zh: "慢", example: "Sprich bitte **langsam**!", exampleZh: "请说慢一点！", note: "Adj./Adv. · ↔ schnell · Kap.8 p.92 3a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "alle", gender: "动", plural: "", zh: "所有人", example: "Macht **alle** mit!", exampleZh: "大家都参加！", note: "Pron. · Kap.8 p.92 3a", level: "暑期", tags: ["密集"] },
        { de: "Tipp", gender: "der", plural: "-s", zh: "建议", example: "Hast du einen **Tipp** für mich?", exampleZh: "你有什么建议吗？", note: "Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Fernseher", gender: "der", plural: "-", zh: "电视", example: "Mach den **Fernseher** aus!", exampleZh: "把电视关了！", note: "🔴 电器用 an/aus · Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Prüfung", gender: "die", plural: "-en", zh: "考试", example: "Ich habe morgen eine **Prüfung**.", exampleZh: "我明天有考试。", note: "← prüfen · Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "gemeinsam", gender: "形", plural: "", zh: "一起", example: "Wir machen das **gemeinsam**.", exampleZh: "我们一起做。", note: "Adj./Adv. · Kap.8 p.92 4/5", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "faul", gender: "形", plural: "", zh: "懒", example: "Sei nicht so **faul**!", exampleZh: "别这么懒！", note: "Adj. · ↔ fleißig · Kap.8 p.92 4/5", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Sofa", gender: "das", plural: "-s", zh: "沙发", example: "Sitz nicht den ganzen Tag auf dem **Sofa**!", exampleZh: "别整天坐沙发上！", note: "Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Alter", gender: "das", plural: "-", zh: "年龄", example: "Wie ist Ihr **Alter**?", exampleZh: "您多大年纪？", note: "Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Größe", gender: "die", plural: "-n", zh: "身高 / 大小", example: "Meine **Größe** ist 1,75 m.", exampleZh: "我身高一米七五。", note: "← groß · Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Gewicht", gender: "das", plural: "-e", zh: "体重", example: "Wie ist dein **Gewicht**?", exampleZh: "你体重多少？", note: "← wiegen · Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "Maß", gender: "das", plural: "-e", zh: "尺寸", example: "Nimm die **Maße**!", exampleZh: "量一下尺寸！", note: "Kap.8 p.92 4/5", level: "暑期", tags: ["密集"] },
        { de: "schlafen gehen", gender: "短语", plural: "", zh: "去睡觉", example: "Geh jetzt schlafen!", exampleZh: "现在去睡觉！", note: "Ausdruck · 🔴 gehen 变命令式，另一动词原形留句尾 · …gehen 结构", level: "暑期", tags: ["密集"] },
        { de: "einkaufen gehen", gender: "短语", plural: "", zh: "去购物", example: "Geh einkaufen!", exampleZh: "去买东西！", note: "Ausdruck · 🔴 同上 · …gehen 结构", level: "暑期", tags: ["密集"] },
        { de: "spazieren gehen", gender: "短语", plural: "", zh: "去散步", example: "Geh spazieren!", exampleZh: "去散步吧！", note: "Ausdruck · 🔴 同上 · …gehen 结构", level: "暑期", tags: ["密集"] },
        { de: "aufmachen", gender: "可分", plural: "", zh: "打开（门窗）", example: "Mach das Fenster auf!", exampleZh: "把窗户打开！", note: "trennbar · 万能口语：门/窗/瓶 · 开关动词组", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "schließen", gender: "动", plural: "", zh: "关闭（正式）", example: "**Schließen** Sie bitte die Tür!", exampleZh: "请关上门！", note: "stark · 书面正式；↔ öffnen · 开关动词组", level: "暑期", tags: ["密集"] },
        { de: "ausschalten", gender: "可分", plural: "", zh: "关（电器，正式）", example: "Schalt den Computer aus!", exampleZh: "把电脑关掉！", note: "trennbar · ↔ einschalten · 开关动词组", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "aufdrehen", gender: "可分", plural: "", zh: "开（水龙头）", example: "Dreh das Wasser auf!", exampleZh: "把水打开！", note: "trennbar · 🇦🇹 奥地利用法 · 开关动词组", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "abdrehen", gender: "可分", plural: "", zh: "关（水龙头/煤气）", example: "Dreh das Wasser ab!", exampleZh: "把水关了！", note: "trennbar · 🇦🇹 奥地利用法 · 开关动词组", level: "暑期", tags: ["密集", "trennbar"] }
      ]
    },

    {
      id: "sommer-d6", level: "暑期", lesson: "第6天", theme: "情态动词 · 看病",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-14", date: "2026-07-14",
      words: [
        { de: "dürfen", gender: "情态", plural: "", zh: "可以、被允许", example: "Sie **dürfen** duschen, aber nicht baden.", exampleZh: "您可以淋浴，但不能泡澡。", note: "Modalverb, darf · 🔴 许可 ↔ 禁止 · 语法核心 A/B", level: "暑期", tags: ["密集", "modal"] },
        { de: "müssen", gender: "情态", plural: "", zh: "必须", example: "Sie **müssen** im Bett bleiben.", exampleZh: "您必须卧床。", note: "Modalverb, muss · 🔴 义务/必要 · 语法核心 A/B", level: "暑期", tags: ["密集", "modal"] },
        { de: "sollen", gender: "情态", plural: "", zh: "应该（转述）", example: "Ich **soll** den Verband wechseln.", exampleZh: "（医生说）我该换绷带。", note: "Modalverb, soll · 🔴 转述别人的指令 · 语法核心 A/B", level: "暑期", tags: ["密集", "modal"] },
        { de: "verboten", gender: "形", plural: "", zh: "被禁止的", example: "Baden ist **verboten**.", exampleZh: "禁止泡澡。", note: "Adj. · ↔ erlaubt · 图1 情境", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "erlaubt", gender: "形", plural: "", zh: "被允许的", example: "Duschen ist **erlaubt**.", exampleZh: "可以淋浴。", note: "Adj. · ↔ verboten · 图1 情境", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "notwendig", gender: "形", plural: "", zh: "必要的", example: "Das ist wirklich **notwendig**.", exampleZh: "这确实有必要。", note: "Adj. · müssen 的语义 · 图1 情境", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "dringend", gender: "形", plural: "", zh: "紧急的", example: "Das ist **dringend**!", exampleZh: "这很紧急！", note: "Adj. · müssen 的语义 · 图1 情境", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "grillen", gender: "动", plural: "", zh: "烧烤", example: "Hier darf man nicht **grillen**.", exampleZh: "这里不能烧烤。", note: "schwach · der Grill 烤架 · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "rauchen", gender: "动", plural: "", zh: "抽烟", example: "**Rauchen** ist hier verboten.", exampleZh: "这里禁止吸烟。", note: "schwach · die Zigarette 香烟 · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "Zigarette", gender: "die", plural: "-n", zh: "香烟", example: "Mach die **Zigarette** aus!", exampleZh: "把烟灭了！", note: "图1 情境", level: "暑期", tags: ["密集"] },
        { de: "zelten", gender: "动", plural: "", zh: "露营", example: "Hier darf man nicht **zelten**.", exampleZh: "这里不能露营。", note: "schwach · das Zelt 帐篷 · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "Zelt", gender: "das", plural: "-e", zh: "帐篷", example: "Bauen Sie das **Zelt** ab!", exampleZh: "请把帐篷拆了！", note: "图1 情境", level: "暑期", tags: ["密集"] },
        { de: "abbauen", gender: "可分", plural: "", zh: "拆除", example: "Sie müssen das Zelt **abbauen**.", exampleZh: "您必须把帐篷拆掉。", note: "trennbar · das Zelt abbauen · 图1 情境", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Toilette", gender: "die", plural: "-n", zh: "厕所", example: "Wo ist die **Toilette**?", exampleZh: "厕所在哪儿？", note: "🇦🇹 口语 das WC / das Klo · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "Schade!", gender: "das", plural: "", zh: "可惜！", example: "**Schade**, dass du nicht kommst!", exampleZh: "可惜你不来！", note: "情境反应语 · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "Na gut", gender: "短语", plural: "", zh: "好吧", example: "Na **gut**, dann bleibe ich zu Hause.", exampleZh: "好吧，那我待在家。", note: "Ausdruck · 情境反应语 · 图1 情境", level: "暑期", tags: ["密集"] },
        { de: "Anweisung", gender: "die", plural: "-en", zh: "指示 / 医嘱", example: "Ich folge den **Anweisungen** des Arztes.", exampleZh: "我遵医嘱。", note: "← anweisen · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "verbessern", gender: "动", plural: "", zh: "提高 / 改善", example: "Ich will mein Deutsch **verbessern**.", exampleZh: "我想提高我的德语。", note: "schwach · sein Deutsch verbessern · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Kollege", gender: "der", plural: "-n", zh: "男同事", example: "Ich spreche mit meinem **Kollegen**.", exampleZh: "我和同事说话。", note: "⚠️ n-变化名词 · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Podcast", gender: "der", plural: "-s", zh: "播客", example: "Hör deutsche **Podcasts**!", exampleZh: "听德语播客！", note: "图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Reel", gender: "das", plural: "-s", zh: "短视频", example: "Schau deutsche **Reels** an!", exampleZh: "看德语短视频！", note: "图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Sprachenzentrum", gender: "das", plural: "Pl. -zentren", zh: "语言中心", example: "Geh zum **Sprachenzentrum**!", exampleZh: "去语言中心！", note: "⚠️ 复数 Zentren · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Gedanke", gender: "der", plural: "-n", zh: "想法", example: "Schreib deine **Gedanken** auf Deutsch auf!", exampleZh: "用德语写下你的想法！", note: "⚠️ n-变化名词 · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "aufschreiben", gender: "可分", plural: "", zh: "写下来", example: "Schreib alles auf!", exampleZh: "把所有都记下来！", note: "trennbar · 图2 学德语", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "ansehen / anschauen", gender: "可分", plural: "", zh: "观看", example: "Schau die Filme auf Deutsch an!", exampleZh: "看德语电影！", note: "trennbar · Filme / Reels … an · 图2 学德语", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "reden", gender: "动", plural: "", zh: "交谈", example: "Red immer mit deutschen Leuten!", exampleZh: "常和德国人交谈！", note: "schwach · = sprechen，更口语 · 图2 学德语", level: "暑期", tags: ["密集"] },
        { de: "Unfall", gender: "der", plural: "¨-e", zh: "事故", example: "Ich hatte einen **Unfall**.", exampleZh: "我出了事故。", note: "einen Unfall haben · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Knie", gender: "das", plural: "-", zh: "膝盖", example: "Das **Knie** ist verletzt.", exampleZh: "膝盖受伤了。", note: "⚠️ K 要发音 [kniː] · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "verletzt", gender: "形", plural: "", zh: "受伤的", example: "Mein Knie ist **verletzt**.", exampleZh: "我的膝盖受伤了。", note: "Adj. · ← verletzen · KB p.20", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Wunde", gender: "die", plural: "-n", zh: "伤口", example: "Ich mache die **Wunde** sauber.", exampleZh: "我把伤口清理干净。", note: "die Wunde sauber machen · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Verband", gender: "der", plural: "¨-e", zh: "绷带", example: "Wechseln Sie den **Verband**!", exampleZh: "请更换绷带！", note: "einen Verband machen/wechseln · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "wechseln", gender: "动", plural: "", zh: "更换", example: "Ich soll den Verband **wechseln**.", exampleZh: "我该换绷带。", note: "schwach · den Verband wechseln · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Salbe", gender: "die", plural: "-n", zh: "药膏", example: "Hier ist ein Rezept für eine **Salbe**.", exampleZh: "这是药膏的处方。", note: "← salben · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Apotheke", gender: "die", plural: "-n", zh: "药房", example: "Ich hole die Salbe in der **Apotheke**.", exampleZh: "我去药房拿药膏。", note: "≠ Drogerie 日化店 · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Kontrolle", gender: "die", plural: "-n", zh: "复查", example: "Kommen Sie in einer Woche zur **Kontrolle**!", exampleZh: "一周后来复查！", note: "zur Kontrolle kommen · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "sich hinlegen", gender: "反身", plural: "", zh: "躺下", example: "Legen Sie sich bitte hin!", exampleZh: "请躺下！", note: "trennbar, reflexiv · 🔴 可分 + 反身 · KB p.20", level: "暑期", tags: ["密集", "trennbar", "reflexiv"] },
        { de: "bewegen", gender: "动", plural: "", zh: "活动 / 移动", example: "**Bewegen** Sie das Bein möglichst wenig!", exampleZh: "少活动腿！", note: "schwach · das Bein bewegen · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "wehtun", gender: "可分", plural: "", zh: "疼", example: "Tut das weh? — Ja, das tut weh!", exampleZh: "疼吗？——疼！", note: "trennbar, +Dativ · 🔴 Mein Arm tut weh / Meine Finger tun weh · KB p.20", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Gute Besserung!", gender: "短语", plural: "", zh: "早日康复！", example: "Gute **Besserung**!", exampleZh: "早日康复！", note: "Ausdruck · ← besser · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "abholen", gender: "可分", plural: "", zh: "接（人）", example: "Ich hole die Kinder ab.", exampleZh: "我去接孩子们。", note: "trennbar · die Kinder abholen · KB p.20", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Aua! / Autsch!", gender: "短语", plural: "", zh: "哎哟！", example: "Aua, das tut weh!", exampleZh: "哎哟，好疼！", note: "Interj. · 疼痛感叹 · KB p.20", level: "暑期", tags: ["密集"] },
        { de: "Arm", gender: "der", plural: "-e", zh: "手臂", example: "Ich darf den **Arm** nicht bewegen.", exampleZh: "我不能动手臂。", note: "KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Mir ist schlecht.", gender: "短语", plural: "", zh: "我难受 / 想吐", example: "Mir ist **schlecht**.", exampleZh: "我想吐。", note: "Ausdruck · 🔴 Dativ mir，不是 ich · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "husten", gender: "动", plural: "", zh: "咳嗽", example: "Ich **huste** seit drei Tagen.", exampleZh: "我咳嗽三天了。", note: "schwach · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Fieber", gender: "das", plural: "无复数", zh: "发烧", example: "Ich habe **Fieber**.", exampleZh: "我发烧了。", note: "Fieber haben · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Hustensaft", gender: "der", plural: "¨-e", zh: "止咳糖浆", example: "Nehmen Sie abends **Hustensaft**!", exampleZh: "晚上喝止咳糖浆！", note: "einen Löffel nehmen · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Krankenhaus", gender: "das", plural: "¨-er", zh: "医院", example: "Er muss ins **Krankenhaus**.", exampleZh: "他得去医院。", note: "ins Krankenhaus gehen · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "duschen", gender: "动", plural: "", zh: "淋浴", example: "Sie dürfen **duschen**.", exampleZh: "您可以淋浴。", note: "schwach · ↔ baden · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Haare waschen", gender: "die", plural: "Ausdruck", zh: "洗头", example: "Darf ich die Haare **waschen**?", exampleZh: "我可以洗头吗？", note: "KB p.21", level: "暑期", tags: ["密集"] },
        { de: "zweimal täglich", gender: "短语", plural: "", zh: "每天两次", example: "Nehmen Sie die Tablette zweimal **täglich**!", exampleZh: "每天吃两次药！", note: "Ausdruck · gegen die Schmerzen · KB p.21", level: "暑期", tags: ["密集"] },
        { de: "Hals", gender: "der", plural: "¨-e", zh: "脖子、喉咙", example: "Ich habe **Halsschmerzen**.", exampleZh: "我喉咙痛。", note: "X痛公式", level: "暑期", tags: ["密集"] },
        { de: "Rücken", gender: "der", plural: "-", zh: "背", example: "Mein **Rücken** tut weh.", exampleZh: "我背疼。", note: "单复同形 · X痛公式", level: "暑期", tags: ["密集"] },
        { de: "Bauch", gender: "der", plural: "¨-e", zh: "肚子", example: "Ich habe **Bauchschmerzen**.", exampleZh: "我肚子疼。", note: "X痛公式", level: "暑期", tags: ["密集"] },
        { de: "Termin", gender: "der", plural: "-e", zh: "预约", example: "Sagen Sie bitte den **Termin** ab!", exampleZh: "请取消预约！", note: "einen Termin absagen · AB p.94 8b", level: "暑期", tags: ["密集"] },
        { de: "absagen", gender: "可分", plural: "", zh: "取消", example: "Ich soll den Termin **absagen**.", exampleZh: "我该取消预约。", note: "trennbar · 🔴 ↔ zusagen 答应 · AB p.94 8b", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Rechnung", gender: "die", plural: "-en", zh: "账单", example: "Die **Rechnung**, bitte!", exampleZh: "请结账！", note: "← rechnen · AB p.94 8b", level: "暑期", tags: ["密集"] },
        { de: "Motorrad", gender: "das", plural: "¨-er", zh: "摩托车", example: "Er soll das **Motorrad** verkaufen.", exampleZh: "他该把摩托车卖了。", note: "AB p.94 8b", level: "暑期", tags: ["密集"] },
        { de: "Nachricht", gender: "die", plural: "-en", zh: "消息", example: "In der **Nachricht** steht alles.", exampleZh: "消息里都写了。", note: "AB p.94 8b", level: "暑期", tags: ["密集"] },
        { de: "Nachbarin", gender: "die", plural: "-nen", zh: "女邻居", example: "Meine **Nachbarin** ist sehr nett.", exampleZh: "我的女邻居很友好。", note: "♂ der Nachbar · AB p.94 8b", level: "暑期", tags: ["密集"] },
        { de: "laut", gender: "形", plural: "", zh: "大声的", example: "Nicht so **laut**, bitte!", exampleZh: "请别这么大声！", note: "Adj. · ↔ leise / ruhig · AB p.94 8b", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "verkaufen", gender: "动", plural: "", zh: "卖", example: "Er soll das Motorrad **verkaufen**.", exampleZh: "他该把摩托车卖了。", note: "schwach · ↔ kaufen 买 · AB p.95", level: "暑期", tags: ["密集"] },
        { de: "Schmerzen", gender: "die", plural: "(只复数)", zh: "疼痛", example: "Haben Sie **Schmerzen**?", exampleZh: "您疼吗？", note: "⚠️ 几乎只用复数 · AB p.95 10a", level: "暑期", tags: ["密集"] },
        { de: "Erkältung", gender: "die", plural: "-en", zh: "感冒", example: "Sie haben eine **Erkältung**.", exampleZh: "您感冒了。", note: "eine Erkältung haben · AB p.95 10a", level: "暑期", tags: ["密集"] },
        { de: "Grad", gender: "der", plural: "-e", zh: "…度（体温）", example: "Ich habe 38 **Grad**.", exampleZh: "我38度。", note: "AB p.95 10a", level: "暑期", tags: ["密集"] },
        { de: "Saft", gender: "der", plural: "¨-e", zh: "糖浆 / 汁", example: "Nehmen Sie einen Löffel **Saft**!", exampleZh: "喝一勺糖浆！", note: "Hustensaft 止咳糖浆 · AB p.96 11a", level: "暑期", tags: ["密集"] },
        { de: "Pflaster", gender: "das", plural: "-", zh: "创可贴", example: "Ich brauche ein **Pflaster**.", exampleZh: "我需要创可贴。", note: "单复同形 · AB p.96 11a", level: "暑期", tags: ["密集"] },
        { de: "Tropfen", gender: "die", plural: "(只复数)", zh: "滴剂", example: "Nehmen Sie die **Tropfen** dreimal täglich!", exampleZh: "每天三次滴剂！", note: "Tropfen geben und trinken · AB p.96 11a", level: "暑期", tags: ["密集"] },
        { de: "Spritze", gender: "die", plural: "-n", zh: "针剂 / 打针", example: "Ich bekomme eine **Spritze**.", exampleZh: "我要打针。", note: "🔴 eine Spritze bekommen · AB p.96 11a", level: "暑期", tags: ["密集"] },
        { de: "Löffel", gender: "der", plural: "-", zh: "勺子", example: "Nimm einen **Löffel** Hustensaft!", exampleZh: "喝一勺止咳糖浆！", note: "单复同形 · AB p.96 11a", level: "暑期", tags: ["密集"] },
        { de: "sitzen", gender: "动", plural: "", zh: "坐", example: "**Sitz** nicht so lange!", exampleZh: "别坐这么久！", note: "stark · saß / hat gesessen · AB p.97", level: "暑期", tags: ["密集"] },
        { de: "erst", gender: "副", plural: "", zh: "直到…才", example: "Ich komme **erst** am Samstag.", exampleZh: "我周六才来。", note: "Adv. · 🔴 重点词 · AB p.97", level: "暑期", tags: ["密集"] },
        { de: "bekommen", gender: "动", plural: "", zh: "得到", example: "Ich **bekomme** eine Spritze.", exampleZh: "我要打一针。", note: "stark · 🔴 不可分 → PII bekommen（无 ge） · AB p.97", level: "暑期", tags: ["密集", "trennbar"] }
      ]
    },

    {
      id: "sommer-d8", level: "暑期", lesson: "第8天", theme: "住房 · 双格介词",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-16", date: "2026-07-16",
      words: [
        { de: "Problem", gender: "das", plural: "-e", zh: "问题", example: "Was ist das **Problem**?", exampleZh: "问题是什么？", note: "线上练习 8a", level: "暑期", tags: ["密集"] },
        { de: "Helm", gender: "der", plural: "-e", zh: "头盔", example: "Er hat einen **Helm** in der Hand.", exampleZh: "他手里拿着头盔。", note: "线上练习 8a", level: "暑期", tags: ["密集"] },
        { de: "Dank", gender: "der", plural: "无复数", zh: "感谢", example: "Vielen **Dank**!", exampleZh: "非常感谢！", note: "别跟动词 danken 混 · 线上练习 8a", level: "暑期", tags: ["密集"] },
        { de: "Wiedersehen", gender: "das", plural: "-", zh: "再见", example: "Auf **Wiedersehen**!", exampleZh: "再见！", note: "🇦🇹 也说 Auf Wiederschauen · 线上练习 8a", level: "暑期", tags: ["密集"] },
        { de: "fertig", gender: "形", plural: "", zh: "完成的；累垮了", example: "Ich bin **fertig**!", exampleZh: "我做完了！/ 我累垮了！", note: "Adj. · ⚠️ 两义靠语境分 · 线上练习 8b", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "herzlich", gender: "形", plural: "", zh: "衷心地", example: "**Herzlich** willkommen!", exampleZh: "热烈欢迎！", note: "Adj./Adv. · ← das Herz · 线上练习 8b", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "wieder", gender: "副", plural: "", zh: "再、又", example: "Kommen Sie bald **wieder**!", exampleZh: "早日再来！", note: "Adv. · ⚠️ ≠ wider（反对） · 线上练习 8b", level: "暑期", tags: ["密集"] },
        { de: "zuordnen", gender: "可分", plural: "", zh: "归类、配对", example: "Ordnen Sie zu!", exampleZh: "请配对！", note: "trennbar · 题目本身是 Sie-命令式 · Wörter", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Begrüßung", gender: "die", plural: "-en", zh: "打招呼、问候语", example: "„Grüß Gott\" ist eine **Begrüßung**.", exampleZh: "„Grüß Gott\" 是问候语。", note: "← begrüßen · Wörter", level: "暑期", tags: ["密集"] },
        { de: "Abschied", gender: "der", plural: "-e", zh: "告别", example: "Zum **Abschied** sagt man „Tschüss\".", exampleZh: "告别时说 „Tschüss\"。", note: "← sich verabschieden · Wörter", level: "暑期", tags: ["密集", "reflexiv"] },
        { de: "Lösung", gender: "die", plural: "-en", zh: "答案；溶液", example: "Die **Lösung** steht hinten im Buch.", exampleZh: "答案在书后面。", note: "← lösen · Wörter", level: "暑期", tags: ["密集"] },
        { de: "überprüfen", gender: "可分", plural: "", zh: "检查、核对", example: "**Überprüfen** Sie Ihre Lösung!", exampleZh: "请核对您的答案！", note: "untrennbar · ← prüfen · Wörter", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "vermuten", gender: "动", plural: "", zh: "猜测、推测", example: "Ich **vermute**, er ist krank.", exampleZh: "我猜他病了。", note: "schwach · ← die Vermutung · p.24 14a", level: "暑期", tags: ["密集"] },
        { de: "zu zweit", gender: "短语", plural: "", zh: "两人一组", example: "Arbeiten Sie zu **zweit**!", exampleZh: "请两人一组做！", note: "Ausdruck · zu zweit / dritt / viert · p.24 14a", level: "暑期", tags: ["密集"] },
        { de: "Was ist denn mit dir los?", gender: "短语", plural: "", zh: "你怎么了？", example: "Was ist denn mit dir **los**?", exampleZh: "你到底怎么了？", note: "Ausdruck · denn 只表关心 · p.24 14b", level: "暑期", tags: ["密集"] },
        { de: "Alles klar?", gender: "短语", plural: "", zh: "还好吗？", example: "Alles **klar** bei dir?", exampleZh: "你还好吗？", note: "Ausdruck · 日常招呼 · p.24 14b", level: "暑期", tags: ["密集"] },
        { de: "da unten", gender: "副", plural: "", zh: "在下面那儿", example: "Das Buch liegt da **unten**.", exampleZh: "书在下面那儿。", note: "Adv. · ↔ da oben · p.24 14b", level: "暑期", tags: ["密集"] },
        { de: "Kissen", gender: "das", plural: "-", zh: "枕头、靠垫", example: "Hol bitte ein **Kissen**!", exampleZh: "请拿个枕头来！", note: "⚠️ 🇦🇹 奥地利说 der Polster · p.24 15a", level: "暑期", tags: ["密集"] },
        { de: "Decke", gender: "die", plural: "-n", zh: "毯子；天花板", example: "Bring mir bitte die **Decke**!", exampleZh: "请把毯子拿给我！", note: "⚠️ 一词两义 · p.24 15a", level: "暑期", tags: ["密集"] },
        { de: "Zeitschrift", gender: "die", plural: "-en", zh: "杂志", example: "Ich lese eine **Zeitschrift**.", exampleZh: "我在看杂志。", note: "↔ die Zeitung 报纸 · p.24 15a", level: "暑期", tags: ["密集"] },
        { de: "Aufforderung", gender: "die", plural: "-en", zh: "要求、命令", example: "Notieren Sie die **Aufforderungen**!", exampleZh: "请记下这些命令！", note: "← auffordern · p.24 15b", level: "暑期", tags: ["密集"] },
        { de: "arm", gender: "形", plural: "", zh: "可怜的；穷的", example: "Der **arme** Luca!", exampleZh: "可怜的 Luca！", note: "Adj. · p.24 16a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "ankreuzen", gender: "可分", plural: "", zh: "打勾、勾选", example: "Kreuzen Sie an!", exampleZh: "请打勾！", note: "trennbar · ← das Kreuz · p.24 16a", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "nicht mehr", gender: "副", plural: "", zh: "不再", example: "Ich kann nicht **mehr**.", exampleZh: "我不行了。", note: "Adv. · ↔ noch 还 · p.24 16a", level: "暑期", tags: ["密集"] },
        { de: "Spaß", gender: "der", plural: "¨-e", zh: "玩笑、乐趣", example: "Er versteht den **Spaß** nicht.", exampleZh: "他开不起玩笑。", note: "den Spaß verstehen · p.24 16a", level: "暑期", tags: ["密集"] },
        { de: "verteilen", gender: "动", plural: "", zh: "分配", example: "**Verteilen** Sie die Rollen!", exampleZh: "请分配角色！", note: "schwach · p.24 16b", level: "暑期", tags: ["密集"] },
        { de: "Rolle", gender: "die", plural: "-n", zh: "角色", example: "Wir verteilen die **Rollen**.", exampleZh: "我们分配角色。", note: "p.24 16b", level: "暑期", tags: ["密集"] },
        { de: "zu viert", gender: "短语", plural: "", zh: "四人一组", example: "Spielen Sie die Szene zu **viert**!", exampleZh: "四人一组演这场戏！", note: "Ausdruck · p.24 16b", level: "暑期", tags: ["密集"] },
        { de: "wiegen", gender: "动", plural: "", zh: "称重", example: "Wie viel wiegst du? — Ich **wiege** 73 Kilo.", exampleZh: "你多重？——我73公斤。", note: "stark · wog / hat gewogen · p.25 ①", level: "暑期", tags: ["密集"] },
        { de: "circa (ca.)", gender: "副", plural: "", zh: "大约", example: "Die Wohnung hat ca. 60 m².", exampleZh: "房子大约60平米。", note: "Adv. · = ungefähr · p.25 ①", level: "暑期", tags: ["密集"] },
        { de: "Schmerz", gender: "der", plural: "-en", zh: "疼痛", example: "Ich habe Kopfschmerzen.", exampleZh: "我头疼。", note: "几乎只用复数 · p.25 ②", level: "暑期", tags: ["密集"] },
        { de: "Auge", gender: "das", plural: "-n", zh: "眼睛", example: "Meine **Augen** tun weh.", exampleZh: "我眼睛疼。", note: "🔴 复数 → tun 不是 tut · p.25 ②", level: "暑期", tags: ["密集"] },
        { de: "wiedergeben", gender: "可分", plural: "", zh: "复述", example: "Geben Sie die Anweisungen **wieder**!", exampleZh: "请复述这些医嘱！", note: "trennbar · p.25 ③", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Bein", gender: "das", plural: "-e", zh: "腿", example: "Ich soll das **Bein** möglichst wenig bewegen.", exampleZh: "我该少活动腿。", note: "p.25 ③", level: "暑期", tags: ["密集"] },
        { de: "Bad", gender: "das", plural: "¨-er", zh: "浴室", example: "Die Waschmaschine kommt ins **Bad**.", exampleZh: "洗衣机放进浴室。", note: "也指「洗澡」 · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Flur", gender: "der", plural: "-e", zh: "走廊、玄关", example: "Ich stelle den Schrank in den **Flur**.", exampleZh: "我把柜子放进走廊。", note: "⚠️ 🇦🇹 奥地利说 das Vorzimmer · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Küche", gender: "die", plural: "-n", zh: "厨房", example: "Der Herd steht in der **Küche**.", exampleZh: "炉灶在厨房。", note: "⚠️ 唯一阴性房间 → in die Küche · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Arbeitszimmer", gender: "das", plural: "-", zh: "书房", example: "Mein **Arbeitszimmer** ist klein.", exampleZh: "我的书房很小。", note: "arbeiten + Zimmer · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Schlafzimmer", gender: "das", plural: "-", zh: "卧室", example: "Das Bett kommt ins **Schlafzimmer**.", exampleZh: "床放进卧室。", note: "schlafen + Zimmer · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Wohnzimmer", gender: "das", plural: "-", zh: "客厅", example: "Der Teppich liegt im **Wohnzimmer**.", exampleZh: "地毯在客厅。", note: "wohnen + Zimmer · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Kinderzimmer", gender: "das", plural: "-", zh: "儿童房", example: "Das **Kinderzimmer** ist hell.", exampleZh: "儿童房很明亮。", note: "p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Balkon", gender: "der", plural: "-e/-s", zh: "阳台", example: "Wir sitzen gern auf dem **Balkon**.", exampleZh: "我们喜欢坐在阳台上。", note: "法语借词 · p.26-27 房间", level: "暑期", tags: ["密集"] },
        { de: "Möbel", gender: "die", plural: "(只复数)", zh: "家具", example: "Wir kaufen neue **Möbel**.", exampleZh: "我们买新家具。", note: "⚠️ 恒复数！单件 das Möbelstück · p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Bett", gender: "das", plural: "-en", zh: "床", example: "Die **Betten** kommen in die Schlafzimmer.", exampleZh: "床放进卧室。", note: "⚠️ 复数 Betten · p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Schrank", gender: "der", plural: "¨-e", zh: "柜子、衣柜", example: "Der **Schrank** steht im Flur.", exampleZh: "柜子在走廊。", note: "⚠️ 🇦🇹 奥地利说 der Kasten · p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Regal", gender: "das", plural: "-e", zh: "架子", example: "Der Herd steht neben dem **Regal**.", exampleZh: "炉灶在架子旁边。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Tisch", gender: "der", plural: "-e", zh: "桌子", example: "Die Lampe steht auf dem **Tisch**.", exampleZh: "灯在桌子上。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Schreibtisch", gender: "der", plural: "-e", zh: "书桌", example: "Der **Schreibtisch** kommt ins Arbeitszimmer.", exampleZh: "书桌放进书房。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Stuhl", gender: "der", plural: "¨-e", zh: "椅子", example: "Der **Stuhl** steht in der Küche.", exampleZh: "椅子在厨房。", note: "复数 Stühle · p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Sessel", gender: "der", plural: "-", zh: "扶手椅", example: "Der **Sessel** ist gemütlich.", exampleZh: "这扶手椅很舒服。", note: "⚠️⚠️ 🇦🇹 奥地利 = 普通椅子！ · p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Teppich", gender: "der", plural: "-e", zh: "地毯", example: "Der **Teppich** liegt unter dem Sofa.", exampleZh: "地毯在沙发下面。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Lampe", gender: "die", plural: "-n", zh: "灯", example: "Die **Lampe** hängt über dem Tisch.", exampleZh: "灯挂在桌子上方。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Bild", gender: "das", plural: "-er", zh: "画", example: "Das **Bild** hängt an der Wand.", exampleZh: "画挂在墙上。", note: "p.26-27 家具", level: "暑期", tags: ["密集"] },
        { de: "Gerät", gender: "das", plural: "-e", zh: "设备、电器", example: "Welche **Geräte** brauchen Sie?", exampleZh: "您需要哪些电器？", note: "p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Spülmaschine", gender: "die", plural: "-n", zh: "洗碗机", example: "Die **Spülmaschine** ist in der Küche.", exampleZh: "洗碗机在厨房。", note: "← spülen 冲洗 · p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Waschmaschine", gender: "die", plural: "-n", zh: "洗衣机", example: "Die **Waschmaschine** kommt ins Bad.", exampleZh: "洗衣机放进浴室。", note: "← waschen 洗 · p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Kaffeemaschine", gender: "die", plural: "-n", zh: "咖啡机", example: "Die **Kaffeemaschine** steht in der Küche.", exampleZh: "咖啡机在厨房。", note: "p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Kühlschrank", gender: "der", plural: "¨-e", zh: "冰箱", example: "Der **Kühlschrank** ist leer.", exampleZh: "冰箱空了。", note: "← kühl 凉的 · p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Herd", gender: "der", plural: "-e", zh: "炉灶", example: "Der **Herd** steht neben dem Regal.", exampleZh: "炉灶在架子旁边。", note: "p.26-27 电器", level: "暑期", tags: ["密集"] },
        { de: "Möglichkeit", gender: "die", plural: "-en", zh: "可能性", example: "Es gibt mehrere **Möglichkeiten**.", exampleZh: "有好几种可能。", note: "← möglich · p.27 1a", level: "暑期", tags: ["密集"] },
        { de: "mehrere", gender: "动", plural: "", zh: "好几个", example: "Es gibt **mehrere** Lösungen.", exampleZh: "有好几个答案。", note: "Pron. · p.27 1a", level: "暑期", tags: ["密集"] },
        { de: "einziehen", gender: "可分", plural: "", zh: "搬进", example: "Wir ziehen morgen ein.", exampleZh: "我们明天搬进去。", note: "trennbar · 🔴 ↔ ausziehen 搬出 · p.27 1b", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Wörterbuch", gender: "das", plural: "¨-er", zh: "字典", example: "Das **Wörterbuch** steht im Regal.", exampleZh: "字典在书架上。", note: "Wörter + Buch · p.27 1b", level: "暑期", tags: ["密集"] },
        { de: "Pflanze", gender: "die", plural: "-n", zh: "植物", example: "Die **Pflanze** steht auf dem Balkon.", exampleZh: "植物在阳台上。", note: "p.27 1b", level: "暑期", tags: ["密集"] },
        { de: "Lieblingsort", gender: "der", plural: "-e", zh: "最爱的地方", example: "Mein **Lieblingsort** ist der Balkon.", exampleZh: "我最爱的地方是阳台。", note: "Lieblings- + Ort · p.27 2a", level: "暑期", tags: ["密集"] },
        { de: "besonders", gender: "副", plural: "", zh: "特别", example: "Das gefällt mir **besonders** gut.", exampleZh: "我特别喜欢这个。", note: "Adv. · p.27 2a", level: "暑期", tags: ["密集"] },
        { de: "Journalist", gender: "der", plural: "-en", zh: "记者", example: "Der **Journalist** wohnt im Loft.", exampleZh: "这位记者住在 Loft 里。", note: "⚠️ n-Deklination · p.27 2a", level: "暑期", tags: ["密集"] },
        { de: "Student", gender: "der", plural: "-en", zh: "大学生", example: "Der **Student** wohnt in einem Apartment.", exampleZh: "这位大学生住在小公寓里。", note: "⚠️ n-Deklination · p.27 2a", level: "暑期", tags: ["密集"] },
        { de: "Informatiker", gender: "der", plural: "-", zh: "程序员", example: "Der **Informatiker** arbeitet zu Hause.", exampleZh: "这位程序员在家工作。", note: "单复同形 · p.27 2a", level: "暑期", tags: ["密集"] },
        { de: "wichtig", gender: "形", plural: "", zh: "重要的", example: "Das ist mir sehr **wichtig**.", exampleZh: "这对我很重要。", note: "Adj. · p.28 3a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Information", gender: "die", plural: "-en", zh: "信息", example: "Markieren Sie die wichtigen **Informationen**!", exampleZh: "请标出重要信息！", note: "常用复数 · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "zusammen", gender: "副", plural: "", zh: "一起", example: "Wir wohnen **zusammen**.", exampleZh: "我们住在一起。", note: "Adv. · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "ungefähr", gender: "副", plural: "", zh: "大约", example: "Die Wohnung hat **ungefähr** 60 m².", exampleZh: "房子大约60平米。", note: "Adv. · = circa · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "Quadratmeter (m²)", gender: "der", plural: "-", zh: "平方米", example: "Die Wohnung hat 60 Quadratmeter.", exampleZh: "这房子有60平米。", note: "也写 qm / m² · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "maximal", gender: "副", plural: "", zh: "最多", example: "Die Miete ist **maximal** 1.100 €.", exampleZh: "房租最多1100欧。", note: "Adv. · ↔ minimal · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "Zentrum", gender: "das", plural: "Pl. Zentren", zh: "市中心", example: "Die Wohnung liegt im **Zentrum**.", exampleZh: "房子在市中心。", note: "⚠️ 复数超不规则 · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "Terrasse", gender: "die", plural: "-n", zh: "露台", example: "Wir haben eine **Terrasse**.", exampleZh: "我们有个露台。", note: "≠ Balkon（露台落地） · p.28 3a", level: "暑期", tags: ["密集"] },
        { de: "ruhig", gender: "形", plural: "", zh: "安静的", example: "Die Wohnung ist zentral, aber **ruhig**.", exampleZh: "房子在市中心，但很安静。", note: "Adj. · ↔ laut · p.28 3a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "hell", gender: "形", plural: "", zh: "明亮的", example: "Die Zimmer sind groß und **hell**.", exampleZh: "房间又大又亮。", note: "Adj. · ↔ dunkel · p.28 3a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "aufhängen", gender: "可分", plural: "", zh: "张贴、挂起", example: "Ich hänge den Zettel auf.", exampleZh: "我把纸条贴上去。", note: "trennbar · p.28 3b", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Zettel", gender: "der", plural: "-", zh: "纸条", example: "Ich schreibe einen **Zettel**.", exampleZh: "我写张纸条。", note: "单复同形 · p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "Miete", gender: "die", plural: "-n", zh: "房租", example: "Die **Miete** ist zu hoch.", exampleZh: "房租太高了。", note: "🔴 ← mieten ↔ vermieten · p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "Ort", gender: "der", plural: "-e", zh: "地点", example: "Wo ist der **Ort**?", exampleZh: "地点在哪儿？", note: "p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "Wunsch", gender: "der", plural: "¨-e", zh: "愿望", example: "Haben Sie noch **Wünsche**?", exampleZh: "您还有什么要求吗？", note: "← wünschen · p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "Angebot", gender: "das", plural: "-e", zh: "报价、供应", example: "Wir freuen uns auf **Angebote**.", exampleZh: "我们期待您的报价。", note: "← anbieten · p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "Supermarkt", gender: "der", plural: "¨-e", zh: "超市", example: "Der **Supermarkt** ist in der Nähe.", exampleZh: "超市就在附近。", note: "p.28 3b", level: "暑期", tags: ["密集"] },
        { de: "sich freuen auf", gender: "反身", plural: "", zh: "期待", example: "Wir freuen uns **auf** Angebote.", exampleZh: "我们期待报价。", note: "reflexiv, +Akk · 🔴 auf + Akk · p.28 3b", level: "暑期", tags: ["密集", "reflexiv"] },
        { de: "Wohnungsanzeige", gender: "die", plural: "-n", zh: "租房广告", example: "Ich lese die **Wohnungsanzeigen**.", exampleZh: "我看租房广告。", note: "房东写 · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "passend", gender: "形", plural: "", zh: "合适的", example: "Das ist eine **passende** Wohnung.", exampleZh: "这是套合适的房子。", note: "Adj. · ← passen zu + Dativ · p.28 3c", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Dusche", gender: "die", plural: "-n", zh: "淋浴", example: "Das Bad hat eine **Dusche**.", exampleZh: "浴室有淋浴。", note: "p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Nähe", gender: "die", plural: "无复数", zh: "附近", example: "Die Wohnung ist in der **Nähe** vom Bahnhof.", exampleZh: "房子在火车站附近。", note: "in der Nähe von · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Universität", gender: "die", plural: "-en", zh: "大学", example: "Es ist nicht weit zur **Universität**.", exampleZh: "离大学不远。", note: "口语缩写 die Uni · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Wohnfläche", gender: "die", plural: "-n", zh: "居住面积", example: "Die **Wohnfläche** ist 60 m².", exampleZh: "居住面积60平米。", note: "wohnen + die Fläche · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "S-Bahn", gender: "die", plural: "-en", zh: "城铁", example: "Die S-Bahn ist gleich um die Ecke.", exampleZh: "城铁就在拐角。", note: "🇦🇹 维也纳是 U-Bahn · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Stock", gender: "der", plural: "Pl. Stock", zh: "楼层", example: "Die Wohnung ist im 4. **Stock**.", exampleZh: "房子在第四层（中文五楼）。", note: "⚠️⚠️ 1. Stock = 中文二楼！复数不变: drei Stock；das Stockwerk, -e 才加 -e · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "direkt", gender: "形", plural: "", zh: "直接地、正好", example: "Die Wohnung ist **direkt** an der Hauptstraße.", exampleZh: "房子正好在主干道旁。", note: "Adj./Adv. · 💡 广告在夸，其实暗示吵 · p.28 3c", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Hauptstraße", gender: "die", plural: "-n", zh: "主干道", example: "Wir wohnen an der **Hauptstraße**.", exampleZh: "我们住在主干道旁。", note: "Haupt- = 主要的 · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Bahnhof", gender: "der", plural: "¨-e", zh: "火车站", example: "Die Wohnung ist in der Nähe vom **Bahnhof**.", exampleZh: "房子在火车站附近。", note: "p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "vermieten", gender: "动", plural: "", zh: "出租（房东）", example: "Wir **vermieten** die Wohnung.", exampleZh: "我们出租这套房子。", note: "schwach · 🔴 ↔ mieten 租（租客） · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "renoviert", gender: "动", plural: "", zh: "翻新过的", example: "Die Wohnung ist neu **renoviert**.", exampleZh: "房子刚翻新过。", note: "Part.II/Adj. · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "zentral", gender: "形", plural: "", zh: "位于市中心的", example: "Die Lage ist sehr **zentral**.", exampleZh: "位置很靠市中心。", note: "Adj. · ← Zentrum · p.28 3c", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Süden", gender: "der", plural: "无复数", zh: "南方", example: "Wir haben einen Süd-Balkon.", exampleZh: "我们有个朝南阳台。", note: "德语方位序 Nord-Ost-Süd-West · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "Apartment", gender: "das", plural: "-s", zh: "小公寓", example: "Er wohnt in einem **Apartment**.", exampleZh: "他住在一套小公寓里。", note: "英语借词 · p.28 3c", level: "暑期", tags: ["密集"] },
        { de: "dunkel", gender: "形", plural: "", zh: "暗的", example: "Das Zimmer ist ein bisschen **dunkel**.", exampleZh: "房间有点暗。", note: "Adj. · ⚠️ 加词尾脱 e: dunkles · p.28 3d", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "teuer", gender: "形", plural: "", zh: "贵的", example: "Die Wohnung ist zu **teuer**.", exampleZh: "这房子太贵了。", note: "Adj. · ⚠️ 加词尾脱 e: teures · p.28 3d", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "günstig / billig", gender: "形", plural: "", zh: "便宜的", example: "Die Wohnung ist günstig.", exampleZh: "这房子价格实惠。", note: "Adj. · ↔ teuer · p.28 3d", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Wohnungseinrichtung", gender: "die", plural: "-en", zh: "房屋布置", example: "Wir planen die **Wohnungseinrichtung**.", exampleZh: "我们规划房屋布置。", note: "← einrichten · p.29", level: "暑期", tags: ["密集"] },
        { de: "Tabelle", gender: "die", plural: "-n", zh: "表格", example: "Ergänzen Sie die **Tabelle**!", exampleZh: "请补全表格！", note: "p.29", level: "暑期", tags: ["密集"] },
        { de: "berichten", gender: "动", plural: "", zh: "报告、讲述", example: "**Berichten** Sie im Kurs!", exampleZh: "请在班上讲述！", note: "schwach · 不可分 → PII berichtet · p.29", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "stellen", gender: "动", plural: "", zh: "放置（直立）", example: "Ich **stelle** den Stuhl in die Küche.", exampleZh: "我把椅子放进厨房。", note: "schwach · 🔴 stellen/legen/hängen 三兄弟 · p.29", level: "暑期", tags: ["密集"] },
        { de: "Buch", gender: "das", plural: "¨-er", zh: "书", example: "Die **Bücher** kommen ins Regal.", exampleZh: "书放进书架。", note: "复数 Bücher · p.29", level: "暑期", tags: ["密集"] },
        { de: "Ding", gender: "das", plural: "-e", zh: "东西、物品", example: "In welche Zimmer stellen Sie die **Dinge**?", exampleZh: "您把这些东西放进哪些房间？", note: "p.29", level: "暑期", tags: ["密集"] },
        { de: "fehlen", gender: "动", plural: "", zh: "缺少", example: "Was **fehlt** dir?", exampleZh: "你缺什么？", note: "schwach, +Dativ · 🔴 Dativ 动词 · p.29 5a", level: "暑期", tags: ["密集"] },
        { de: "Wochenende", gender: "das", plural: "-n", zh: "周末", example: "Am **Wochenende** feiern wir.", exampleZh: "周末我们庆祝。", note: "p.29 5a", level: "暑期", tags: ["密集"] },
        { de: "Sonne", gender: "die", plural: "-n", zh: "太阳", example: "Die **Sonne** scheint.", exampleZh: "阳光灿烂。", note: "p.29 5a", level: "暑期", tags: ["密集"] },
        { de: "scheinen", gender: "动", plural: "", zh: "照耀；看起来", example: "Die Sonne **scheint** heute.", exampleZh: "今天出太阳。", note: "stark · ⚠️ 一词两义 · p.29 5a", level: "暑期", tags: ["密集"] },
        { de: "Glückwunsch", gender: "der", plural: "¨-e", zh: "祝贺", example: "Herzlichen **Glückwunsch**!", exampleZh: "衷心祝贺！", note: "用于：接受邀请 · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "Feier", gender: "die", plural: "-n", zh: "庆祝会", example: "Ich komme gern zur **Feier**.", exampleZh: "我很乐意来参加庆祝会。", note: "← feiern · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "mitbringen", gender: "可分", plural: "", zh: "带来（东西）", example: "Kann ich etwas **mitbringen**?", exampleZh: "我能带点什么吗？", note: "trennbar · 东西 ↔ mitkommen 人 · p.29 5c", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Es tut mir leid", gender: "短语", plural: "", zh: "我很抱歉", example: "Es tut mir **leid**, ich kann nicht kommen.", exampleZh: "很抱歉，我来不了。", note: "Ausdruck · 用于：婉拒 · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "Verabredung", gender: "die", plural: "-en", zh: "约会、约好的事", example: "Ich habe schon eine **Verabredung**.", exampleZh: "我已经有约了。", note: "用于：婉拒 · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "Viel Spaß!", gender: "短语", plural: "", zh: "玩得开心！", example: "Viel **Spaß** bei der Feier!", exampleZh: "庆祝会玩得开心！", note: "Ausdruck · 用于：婉拒 · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "bald", gender: "副", plural: "", zh: "很快", example: "Bis **bald**!", exampleZh: "回头见！", note: "Adv. · p.29 5c", level: "暑期", tags: ["密集"] },
        { de: "Einweihungsfeier", gender: "die", plural: "-n", zh: "乔迁派对", example: "Wir machen eine **Einweihungsfeier**.", exampleZh: "我们办个乔迁派对。", note: "← einweihen · p.30 6a", level: "暑期", tags: ["密集"] },
        { de: "genau", gender: "形", plural: "", zh: "精确地", example: "Wo **genau** wohnst du?", exampleZh: "你具体住哪儿？", note: "Adj./Adv. · p.30 6a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "erzählen", gender: "动", plural: "", zh: "讲述", example: "**Erzählen** Sie von Ihrer Wohnung!", exampleZh: "请讲讲您的房子！", note: "schwach · 不可分 → PII erzählt · p.30 6a", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Kursraum", gender: "der", plural: "¨-e", zh: "教室", example: "Wo ist der **Kursraum**?", exampleZh: "教室在哪儿？", note: "der Kurs + der Raum · p.30 6a", level: "暑期", tags: ["密集"] },
        { de: "zu dritt", gender: "短语", plural: "", zh: "三人一组", example: "Arbeiten Sie zu **dritt**!", exampleZh: "三人一组做！", note: "Ausdruck · zu zweit/dritt/viert · p.30 6a", level: "暑期", tags: ["密集"] },
        { de: "an", gender: "动", plural: "", zh: "贴着、在…边", example: "Das Bild hängt an der Wand.", exampleZh: "画挂在墙上。", note: "Wechselpräp. · 🔴 接触（侧面/垂直面） · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "auf", gender: "动", plural: "", zh: "在…上", example: "Die Lampe steht **auf** dem Tisch.", exampleZh: "灯在桌上。", note: "Wechselpräp. · 🔴 接触（上表面） · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "über", gender: "动", plural: "", zh: "在…上方", example: "Das Bild hängt **über** dem Fernseher.", exampleZh: "画挂在电视上方。", note: "Wechselpräp. · 🔴 不接触（悬空） · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "unter", gender: "动", plural: "", zh: "在…下", example: "Der Teppich liegt **unter** dem Sofa.", exampleZh: "地毯在沙发下面。", note: "Wechselpräp. · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "hinter", gender: "动", plural: "", zh: "在…后", example: "Der Garten ist **hinter** dem Haus.", exampleZh: "花园在房子后面。", note: "Wechselpräp. · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "neben", gender: "动", plural: "", zh: "在…旁", example: "Der Herd steht **neben** dem Regal.", exampleZh: "炉灶在架子旁边。", note: "Wechselpräp. · 🔴 不接触 · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "zwischen", gender: "动", plural: "", zh: "在…之间", example: "Der Tisch steht **zwischen** dem Sofa und dem Regal.", exampleZh: "桌子在沙发和架子之间。", note: "Wechselpräp. · 🔴 后接两个东西 · p.30 6b", level: "暑期", tags: ["密集"] },
        { de: "gefallen + Dativ", gender: "短语", plural: "", zh: "（某物）让…喜欢", example: "Die Wohnung gefällt mir.", exampleZh: "我喜欢这房子。", note: "stark, gefällt · 🔴 主语是「物」！⚠️ der Gefallen = 人情，das Gefallen = 喜好 · p.31", level: "暑期", tags: ["密集"] },
        { de: "Missfallen", gender: "das", plural: "无复数", zh: "不喜欢", example: "Er drückt sein **Missfallen** aus.", exampleZh: "他表达了不满。", note: "miss- = 否定前缀 · p.31", level: "暑期", tags: ["密集"] },
        { de: "ausdrücken", gender: "可分", plural: "", zh: "表达", example: "Wie drückt man das aus?", exampleZh: "这怎么表达？", note: "trennbar · aus + drücken · p.31", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "nennen", gender: "动", plural: "", zh: "说出、称呼", example: "**Nennen** Sie drei Beispiele!", exampleZh: "请说出三个例子！", note: "gemischt · 🔴 nennen–nannte–genannt · p.31", level: "暑期", tags: ["密集"] },
        { de: "gemütlich", gender: "形", plural: "", zh: "舒适惬意的", example: "Der Sessel ist **gemütlich**.", exampleZh: "这椅子很舒服。", note: "Adj. · ⭐ 奥德文化关键词，翻不出来 · p.31 7a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "hässlich", gender: "形", plural: "", zh: "丑的", example: "Die Lampe ist **hässlich**.", exampleZh: "这灯很丑。", note: "Adj. · ↔ schön · p.31 7a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "super", gender: "形", plural: "", zh: "超棒", example: "Das Wohnzimmer ist ja **super**!", exampleZh: "客厅太棒了！", note: "Adj. · 外来词，不变词尾 · p.31 7a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "wirklich", gender: "副", plural: "", zh: "真的", example: "Das finde ich **wirklich** schön.", exampleZh: "我真觉得这很漂亮。", note: "Adv. · ← die Wirklichkeit · p.31 7a", level: "暑期", tags: ["密集"] },
        { de: "echt", gender: "形", plural: "", zh: "真的、真正的", example: "Ich finde das **echt** super.", exampleZh: "我觉得这真棒。", note: "Adj./Adv. · 口语强调词 · p.31 7a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Äußerung", gender: "die", plural: "-en", zh: "表达、言论", example: "Ist die **Äußerung** positiv oder negativ?", exampleZh: "这句话是正面还是负面？", note: "← äußern ← außen · p.31 7a", level: "暑期", tags: ["密集"] },
        { de: "positiv / negativ", gender: "形", plural: "", zh: "正面的 / 负面的", example: "Das ist eine positive Äußerung.", exampleZh: "这是句正面的话。", note: "Adj. · p.31 7b", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Begeisterung", gender: "die", plural: "无复数", zh: "热情、兴奋", example: "Er spricht mit **Begeisterung**.", exampleZh: "他说得很兴奋。", note: "← begeistern ← der Geist · p.31 7a", level: "暑期", tags: ["密集"] },
        { de: "total", gender: "副", plural: "", zh: "完全、超级", example: "Das sieht **total** gut aus.", exampleZh: "这看起来超好。", note: "Adv. · 口语强调词 · p.31 7a", level: "暑期", tags: ["密集"] },
        { de: "Idee", gender: "die", plural: "-n", zh: "主意、想法", example: "Das ist eine gute **Idee**!", exampleZh: "这主意不错！", note: "⚠️ 双写 ee = 长音 · p.31 8a", level: "暑期", tags: ["密集"] },
        { de: "Regel", gender: "die", plural: "-n", zh: "规则", example: "Was ist die **Regel**?", exampleZh: "规则是什么？", note: "⚠️ 一个辅音 → e 念长 · p.31 8a", level: "暑期", tags: ["密集"] },
        { de: "nachsprechen", gender: "可分", plural: "", zh: "跟读", example: "Sprechen Sie **nach**!", exampleZh: "请跟读！", note: "trennbar, spricht nach · nach + sprechen · p.31 8a", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Fenster", gender: "das", plural: "-", zh: "窗户", example: "Mach das **Fenster** zu!", exampleZh: "把窗户关上！", note: "单复同形 · p.31 8c", level: "暑期", tags: ["密集"] },
        { de: "Farbe", gender: "die", plural: "-n", zh: "颜色", example: "Welche **Farbe** hat das Sofa?", exampleZh: "沙发是什么颜色？", note: "p.31 9a", level: "暑期", tags: ["密集"] },
        { de: "schwarz / weiß", gender: "形", plural: "", zh: "黑 / 白", example: "Das Sofa ist schwarz.", exampleZh: "沙发是黑色的。", note: "Adj. · ⚠️ ß 不是 B · p.31 9a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "grau / braun", gender: "形", plural: "", zh: "灰 / 棕", example: "Der Teppich ist grau.", exampleZh: "地毯是灰色的。", note: "Adj. · p.31 9a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "rot / gelb / grün / blau", gender: "形", plural: "", zh: "红/黄/绿/蓝", example: "Der Sessel ist rot.", exampleZh: "扶手椅是红色的。", note: "Adj. · p.31 9a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "orange", gender: "形", plural: "", zh: "橙", example: "Die Lampe ist **orange**.", exampleZh: "灯是橙色的。", note: "Adj. · 法语借词；词尾常不变 · p.31 9a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "lila", gender: "形", plural: "", zh: "紫", example: "Das Sofa ist **lila**.", exampleZh: "沙发是紫色的。", note: "Adj. · ⚠️⚠️ 永不变词尾 · p.31 9a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Sprache", gender: "die", plural: "-n", zh: "语言", example: "Welche **Sprachen** sprechen Sie?", exampleZh: "您说哪些语言？", note: "← sprechen · p.31 9b", level: "暑期", tags: ["密集"] },
        { de: "heißen", gender: "动", plural: "", zh: "叫做", example: "Wie **heißt** das auf Deutsch?", exampleZh: "这个德语怎么说？", note: "stark · 🔴 X heißt auf Y Z. · p.31 9b", level: "暑期", tags: ["密集"] },
        { de: "Foto", gender: "das", plural: "-s", zh: "照片", example: "Schauen Sie sich das **Foto** an!", exampleZh: "请看这张照片！", note: "p.31 9b", level: "暑期", tags: ["密集"] },
        { de: "Kommentar", gender: "der", plural: "-e", zh: "评论", example: "Lesen Sie die **Kommentare**!", exampleZh: "请读这些评论！", note: "AB p.103 Ü2", level: "暑期", tags: ["密集"] },
        { de: "Buchstabe", gender: "der", plural: "-n", zh: "字母", example: "Ergänzen Sie die **Buchstaben**!", exampleZh: "请补全字母！", note: "⚠️ n-Deklination · AB p.103 Ü2", level: "暑期", tags: ["密集"] },
        { de: "draußen", gender: "副", plural: "", zh: "外面", example: "Ich bin gern **draußen**.", exampleZh: "我喜欢待在外面。", note: "Adv. · ↔ drinnen · AB p.103 Ü2", level: "暑期", tags: ["密集"] },
        { de: "Situation", gender: "die", plural: "-en", zh: "情况", example: "Die **Situation** ist schwierig.", exampleZh: "情况很难。", note: "AB p.103 Ü2", level: "暑期", tags: ["密集"] },
        { de: "Garten", gender: "der", plural: "¨", zh: "花园", example: "Ich gehe in den **Garten**.", exampleZh: "我去花园。", note: "🔴 Wohin → in den Garten (Akk) · AB p.103 Ü2", level: "暑期", tags: ["密集"] },
        { de: "Nichtraucher", gender: "der", plural: "-", zh: "非吸烟者", example: "Nur an **Nichtraucher**!", exampleZh: "只租给不吸烟者！", note: "广告用语 · AB p.103 Ü3b", level: "暑期", tags: ["密集"] },
        { de: "inklusive (inkl.)", gender: "短语", plural: "", zh: "包含", example: "Miete inklusive Nebenkosten", exampleZh: "房租含附加费", note: "Präp. · 广告缩写 inkl. · AB p.103 Ü3b", level: "暑期", tags: ["密集"] },
        { de: "Nebenkosten", gender: "die", plural: "(只复数)", zh: "附加费（水电暖）", example: "Die **Nebenkosten** sind inklusive.", exampleZh: "附加费已包含。", note: "⚠️ 恒复数；NK；Warmmiete · AB p.103 Ü3b", level: "暑期", tags: ["密集"] },
        { de: "Hausverwaltung", gender: "die", plural: "-en", zh: "物业管理", example: "Fragen Sie die **Hausverwaltung**!", exampleZh: "请问物业！", note: "Haus + verwalten · AB p.103 Ü3b", level: "暑期", tags: ["密集"] },
        { de: "Paar", gender: "das", plural: "-e", zh: "一对 / 夫妇", example: "Das **Paar** sucht eine Wohnung.", exampleZh: "这对夫妇在找房。", note: "⚠️ ≠ ein paar（几个） · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "Ingenieur", gender: "der", plural: "-e", zh: "工程师", example: "Der **Ingenieur** zieht nach Deutschland.", exampleZh: "这位工程师搬去德国。", note: "法语借词 · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "Architektin", gender: "die", plural: "-nen", zh: "女建筑师", example: "Die **Architektin** sucht ein Loft.", exampleZh: "这位女建筑师在找 Loft。", note: "♂ der Architekt (n-Dekl.) · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "ab sofort", gender: "短语", plural: "", zh: "即刻起", example: "Die Wohnung ist ab **sofort** frei.", exampleZh: "房子即刻可入住。", note: "Ausdruck · = sofort frei · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "Haustier", gender: "das", plural: "-e", zh: "宠物", example: "Keine **Haustiere**!", exampleZh: "不许养宠物！", note: "广告常见 · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "WG (Wohngemeinschaft)", gender: "die", plural: "WG: f., -s / Wohngemeinschaft: f., -en", zh: "合租房", example: "Ich wohne in einer WG.", exampleZh: "我住在合租房里。", note: "读 /veːˈɡeː/ · AB p.104 Ü3c", level: "暑期", tags: ["密集"] },
        { de: "Suchanzeige", gender: "die", plural: "-n", zh: "求租广告", example: "Ich schreibe eine **Suchanzeige**.", exampleZh: "我写一则求租广告。", note: "租客写 · AB p.104 Ü3d", level: "暑期", tags: ["密集"] },
        { de: "Einrichtung", gender: "die", plural: "-en", zh: "家居布置", example: "Wir planen die **Einrichtung**.", exampleZh: "我们规划家居布置。", note: "← einrichten · AB p.104 Ü4a", level: "暑期", tags: ["密集"] },
        { de: "Wohin kommt was?", gender: "短语", plural: "", zh: "什么放哪儿", example: "Wohin kommt der Schrank?", exampleZh: "柜子放哪儿？", note: "Ausdruck · 🔴 kommen = 被放置 · AB p.104 Ü4b", level: "暑期", tags: ["密集"] },
        { de: "Umzug", gender: "der", plural: "¨-e", zh: "搬家", example: "Der **Umzug** ist am Samstag.", exampleZh: "搬家在周六。", note: "← umziehen · AB p.105 Ü4f", level: "暑期", tags: ["密集"] },
        { de: "besichtigen", gender: "可分", plural: "", zh: "看房 / 参观", example: "Wir **besichtigen** die Wohnung.", exampleZh: "我们去看房。", note: "untrennbar · 🔴 PII besichtigt（无 ge-） · AB p.105 Ü4f", level: "暑期", tags: ["密集", "trennbar", "reflexiv"] },
        { de: "Formular ausfüllen", gender: "das", plural: "trennbar", zh: "填表格", example: "Ich fülle das Formular aus.", exampleZh: "我填表格。", note: "füllt … aus · AB p.105 Ü4f", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Vermieter", gender: "der", plural: "-", zh: "房东", example: "Wir treffen den **Vermieter**.", exampleZh: "我们见房东。", note: "🔴 ↔ der Mieter 房客 · AB p.105 Ü4f", level: "暑期", tags: ["密集"] },
        { de: "Vertrag", gender: "der", plural: "¨-e", zh: "合同", example: "Wir unterschreiben den **Vertrag**.", exampleZh: "我们签合同。", note: "AB p.105 Ü4f", level: "暑期", tags: ["密集"] },
        { de: "unterschreiben", gender: "可分", plural: "", zh: "签字", example: "Ich **unterschreibe** den Vertrag.", exampleZh: "我签合同。", note: "untrennbar · 🔴 PII unterschrieben（无 ge-） · AB p.105 Ü4f", level: "暑期", tags: ["密集", "trennbar"] },
        { de: "Kiste", gender: "die", plural: "-n", zh: "箱子", example: "Wir packen die **Kisten**.", exampleZh: "我们打包箱子。", note: "AB p.105 Ü4f", level: "暑期", tags: ["密集"] },
        { de: "packen", gender: "动", plural: "", zh: "打包", example: "Ich **packe** die Kisten.", exampleZh: "我打包箱子。", note: "schwach · ↔ auspacken 拆包 · AB p.105 Ü4f", level: "暑期", tags: ["密集"] },
        { de: "umziehen", gender: "可分", plural: "", zh: "搬家", example: "Wir ziehen nach Wien um.", exampleZh: "我们搬到维也纳。", note: "trennbar · 🔴 ist umgezogen；≠ sich umziehen 换衣服 · AB p.105 Ü4f", level: "暑期", tags: ["密集", "trennbar", "reflexiv"] },
        { de: "würfeln", gender: "动", plural: "", zh: "掷骰子", example: "**Würfeln** Sie und machen Sie einen Satz!", exampleZh: "掷骰子并造句！", note: "schwach · ← der Würfel · AB p.105 Ü4e", level: "暑期", tags: ["密集"] }
      ]
    },

    {
      id: "sommer-d9", level: "暑期", lesson: "第9天", theme: "居住形式 · 作文",
      group: "🌴 暑期密集课程", source: "暑期密集课 07-17", date: "2026-07-17",
      words: [
        { de: "Hochhaus", gender: "das", plural: "¨-er", zh: "高层大楼", example: "Ich wohne in einem **Hochhaus**.", exampleZh: "我住在高层大楼里。", note: "🇦🇹 维也纳多叫 Wohnhausanlage · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Loft", gender: "das", plural: "-s", zh: "开放式挑高公寓", example: "Alles ist in einem Raum: ein **Loft**.", exampleZh: "一切都在一个空间里：Loft。", note: "英语借词 · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Reihenhaus", gender: "das", plural: "¨-er", zh: "联排屋", example: "Wir wohnen in einem **Reihenhaus**.", exampleZh: "我们住联排屋。", note: "die Reihe + Haus · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Altbauwohnung", gender: "die", plural: "-en", zh: "老楼公寓", example: "**Altbauwohnungen** haben hohe Decken.", exampleZh: "老楼公寓天花板很高。", note: "🇦🇹 维也纳经典房型（1918 前） · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Fachwerkhaus", gender: "das", plural: "¨-er", zh: "木筋屋 / 半木结构屋", example: "Kim wohnt in einem **Fachwerkhaus**.", exampleZh: "Kim 住在木筋屋里。", note: "德国典型，奥地利几乎没有 · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Raum", gender: "der", plural: "¨-e", zh: "空间", example: "Alles ist in einem **Raum**.", exampleZh: "一切都在一个空间里。", note: "p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Treppe", gender: "die", plural: "-n", zh: "楼梯", example: "Die **Treppen** sind aus Holz.", exampleZh: "楼梯是木头做的。", note: "p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Holz", gender: "das", plural: "¨-er", zh: "木头", example: "Die Treppen sind aus **Holz**.", exampleZh: "楼梯是木制的。", note: "🔴 aus Holz = 木头做的 · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "hoch", gender: "形", plural: "", zh: "高的", example: "Das Zimmer hat hohe Decken.", exampleZh: "房间天花板很高。", note: "Adj. · ⚠️ 加词尾脱 c: hohe · p.32 Ü10a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "Überschrift", gender: "die", plural: "-en", zh: "标题", example: "Ordnen Sie die **Überschriften** zu!", exampleZh: "请配对标题！", note: "über + Schrift · p.32 Ü10a", level: "暑期", tags: ["密集"] },
        { de: "Bewohner", gender: "der", plural: "-", zh: "住户", example: "Die **Bewohner** sind sehr nett.", exampleZh: "住户们都很友好。", note: "be + wohnen · p.33 Ü10b", level: "暑期", tags: ["密集"] },
        { de: "Notiz", gender: "die", plural: "-en", zh: "笔记", example: "Machen Sie **Notizen**!", exampleZh: "请做笔记！", note: "🔴 Notizen machen · p.33 Ü10b", level: "暑期", tags: ["密集"] },
        { de: "Vorteil", gender: "der", plural: "-e", zh: "优点", example: "Was sind die **Vorteile**?", exampleZh: "有哪些优点？", note: "↔ der Nachteil · p.33 Ü10b", level: "暑期", tags: ["密集"] },
        { de: "Nachteil", gender: "der", plural: "-e", zh: "缺点", example: "Der **Nachteil** ist die Lage.", exampleZh: "缺点是位置。", note: "↔ der Vorteil · p.33 Ü10b", level: "暑期", tags: ["密集"] },
        { de: "Wohnform", gender: "die", plural: "-en", zh: "居住形式", example: "Welche **Wohnform** finden Sie gut?", exampleZh: "您觉得哪种居住形式好？", note: "本课主题词 · p.33 Ü10b", level: "暑期", tags: ["密集"] },
        { de: "Blick", gender: "der", plural: "-e", zh: "视野 / 景观", example: "Ich habe einen **Blick** auf die Bäume.", exampleZh: "我能看到树。", note: "⚠️⚠️ Blick auf + Akk! · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "zufrieden", gender: "形", plural: "", zh: "满意的", example: "Ich bin **zufrieden** mit der Wohnung.", exampleZh: "我对房子满意。", note: "Adj. · zufrieden mit + Dativ · p.33 Ü11a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "zurzeit", gender: "副", plural: "", zh: "目前", example: "**Zurzeit** wohne ich in einer WG.", exampleZh: "我目前住合租房。", note: "Adv. · ⚠️ 一个词，别拆成 zur Zeit · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "Lage", gender: "die", plural: "-n", zh: "位置、地段", example: "Die **Lage** ist nicht so gut.", exampleZh: "位置不太好。", note: "房产广告高频词 · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "Erdgeschoss", gender: "das", plural: "-e", zh: "底层", example: "Ich wohne im **Erdgeschoss**.", exampleZh: "我住底层。", note: "🇦🇹 也说 Parterre；1. Stock = 二楼 · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "weit", gender: "形", plural: "", zh: "远的", example: "Es ist nicht **weit** zur Uni.", exampleZh: "离大学不远。", note: "Adj. · nicht weit zu + Dativ · p.33 Ü11a", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "vielleicht", gender: "副", plural: "", zh: "也许", example: "**Vielleicht** ziehe ich bald um.", exampleZh: "也许我很快就搬家。", note: "Adv. · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "in ein paar Jahren", gender: "短语", plural: "", zh: "几年后", example: "In ein paar **Jahren** kaufe ich ein Haus.", exampleZh: "几年后我买套房子。", note: "Ausdruck · ⚠️ ein paar（几个）≠ das Paar（一对） · p.33 Ü11a", level: "暑期", tags: ["密集"] },
        { de: "Textbaustein", gender: "der", plural: "-e", zh: "句型砖块", example: "Notieren Sie die **Textbausteine**!", exampleZh: "请记下这些句型砖！", note: "Text + Baustein · p.33 Ü11b", level: "暑期", tags: ["密集"] },
        { de: "Ausdruck", gender: "der", plural: "¨-e", zh: "表达法", example: "Verwenden Sie diese **Ausdrücke**!", exampleZh: "请使用这些表达法！", note: "p.33 Ü11b", level: "暑期", tags: ["密集"] },
        { de: "verwenden", gender: "动", plural: "", zh: "使用", example: "**Verwenden** Sie die Textbausteine!", exampleZh: "请使用这些句型砖！", note: "schwach · = benutzen · p.33 Ü11b", level: "暑期", tags: ["密集"] },
        { de: "sammeln", gender: "动", plural: "", zh: "收集", example: "Ich **sammle** typische Ausdrücke.", exampleZh: "我收集常用表达。", note: "schwach · ⚠️ ich sammle（脱 e） · p.33 Ü11b", level: "暑期", tags: ["密集"] },
        { de: "typisch", gender: "形", plural: "", zh: "典型的", example: "Das ist **typisch** für Wien.", exampleZh: "这是维也纳的典型。", note: "Adj. · p.33 Ü12", level: "暑期", tags: ["密集", "adjektiv"] },
        { de: "nicht so + Adj.", gender: "短语", plural: "", zh: "不太…（客气）", example: "Die Lage ist nicht so gut.", exampleZh: "位置不太好。", note: "Ausdruck · 🔴 德语式客气，≠ schlecht · 语法核心 4", level: "暑期", tags: ["密集"] },
        { de: "aber", gender: "动", plural: "", zh: "但是", example: "Meine Wohnung ist schön, **aber** klein.", exampleZh: "我的房子漂亮，但小。", note: "Konj. (Pos. 0) · 🔴 零号位，不倒装 · 语法核心 3", level: "暑期", tags: ["密集"] },
        { de: "Leider …", gender: "副", plural: "", zh: "可惜", example: "Leider ist das Haus nicht in der Stadt.", exampleZh: "可惜房子不在城里。", note: "Adv. · 🔴 句首 → 动词第二位 · 语法核心 5", level: "暑期", tags: ["密集"] }
      ]
    },

{
   "id": "verb-unregel",
   "level": "动词",
   "lesson": "不规则动词",
   "theme": "Unregelmäßige Verben 104 词",
   "group": "⚡ 不规则动词",
   "source": "Netzwerk neu 动词表",
   "date": "2026-07-21",
   "words": [
    {
     "de": "abfahren",
     "gender": "可分",
     "plural": "fährt ab · ist abgefahren",
     "zh": "出发,开走",
     "example": "er fährt ab. — ist **abgefahren**",
     "exampleZh": "出发,开走(ist = sein)",
     "note": "a–a · 现在时 a→ä · trennbar · 与 fahren 同族,用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "anfangen",
     "gender": "可分",
     "plural": "fängt an · hat angefangen",
     "zh": "开始",
     "example": "er fängt an. — hat **angefangen**",
     "exampleZh": "开始(hat = haben)",
     "note": "a–a · 现在时 a→ä · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "ankommen",
     "gender": "可分",
     "plural": "kommt an · ist angekommen",
     "zh": "到达",
     "example": "er kommt an. — ist **angekommen**",
     "exampleZh": "到达(ist = sein)",
     "note": "o–o · 现在时 无 · trennbar · 现在时不变音;kommen 词干本就是 o,PII 仍是 o;用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "o–o",
      "trennbar"
     ]
    },
    {
     "de": "annehmen",
     "gender": "可分",
     "plural": "nimmt an · hat angenommen",
     "zh": "接受,假定",
     "example": "er nimmt an. — hat **angenommen**",
     "exampleZh": "接受,假定(hat = haben)",
     "note": "e–o · 现在时 e→i · trennbar · er nimmt an 词干大改(nehm→nimm),双写 mm",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o",
      "trennbar"
     ]
    },
    {
     "de": "ansehen",
     "gender": "可分",
     "plural": "sieht an · hat angesehen",
     "zh": "观看,注视",
     "example": "er sieht an. — hat **angesehen**",
     "exampleZh": "观看,注视(hat = haben)",
     "note": "e–e · 现在时 e→ie · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "anziehen",
     "gender": "可分",
     "plural": "zieht an · hat angezogen",
     "zh": "穿上",
     "example": "er zieht an. — hat **angezogen**",
     "exampleZh": "穿上(hat = haben)",
     "note": "ie–o · 现在时 无 · trennbar · 现在时不变音,但 PII 变 o",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o",
      "trennbar"
     ]
    },
    {
     "de": "aufschreiben",
     "gender": "可分",
     "plural": "schreibt auf · hat aufgeschrieben",
     "zh": "记下,写下",
     "example": "er schreibt auf. — hat **aufgeschrieben**",
     "exampleZh": "记下,写下(hat = haben)",
     "note": "ei–ie · 现在时 无 · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie",
      "trennbar"
     ]
    },
    {
     "de": "aufstehen",
     "gender": "可分",
     "plural": "steht auf · ist aufgestanden",
     "zh": "起床,起立",
     "example": "er steht auf. — ist **aufgestanden**",
     "exampleZh": "起床,起立(ist = sein)",
     "note": "e–a · 现在时 无 · trennbar · stehen 用 haben,但 aufstehen 用 sein(反直觉)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a",
      "trennbar"
     ]
    },
    {
     "de": "ausgehen",
     "gender": "可分",
     "plural": "geht aus · ist ausgegangen",
     "zh": "外出,出门",
     "example": "er geht aus. — ist **ausgegangen**",
     "exampleZh": "外出,出门(ist = sein)",
     "note": "e–a · 现在时 无 · trennbar · gehen 族特殊变化 geh→gang",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a",
      "trennbar"
     ]
    },
    {
     "de": "aussehen",
     "gender": "可分",
     "plural": "sieht aus · hat ausgesehen",
     "zh": "看起来",
     "example": "er sieht aus. — hat **ausgesehen**",
     "exampleZh": "看起来(hat = haben)",
     "note": "e–e · 现在时 e→ie · trennbar · hat 不是 ist(反直觉)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "aussteigen",
     "gender": "可分",
     "plural": "steigt aus · ist ausgestiegen",
     "zh": "下车",
     "example": "er steigt aus. — ist **ausgestiegen**",
     "exampleZh": "下车(ist = sein)",
     "note": "ei–ie · 现在时 无 · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie",
      "trennbar"
     ]
    },
    {
     "de": "ausziehen",
     "gender": "可分",
     "plural": "zieht aus · hat ausgezogen",
     "zh": "脱下",
     "example": "er zieht aus. — hat **ausgezogen**",
     "exampleZh": "脱下(hat = haben)",
     "note": "ie–o · 现在时 无 · trennbar · 表\"脱衣\"用 hat;表\"搬出\"时用 ist",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o",
      "trennbar"
     ]
    },
    {
     "de": "bekommen",
     "gender": "动",
     "plural": "bekommt · hat bekommen",
     "zh": "得到,收到",
     "example": "er bekommt. — hat **bekommen**",
     "exampleZh": "得到,收到(hat = haben)",
     "note": "o–o · 现在时 无 · untrennbar · 不可分前缀,无 ge-;PII 与原形同形;kommen 用 sein 但此词用 hat",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "o–o"
     ]
    },
    {
     "de": "beschreiben",
     "gender": "动",
     "plural": "beschreibt · hat beschrieben",
     "zh": "描述",
     "example": "er beschreibt. — hat **beschrieben**",
     "exampleZh": "描述(hat = haben)",
     "note": "ei–ie · 现在时 无 · untrennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "bleiben",
     "gender": "动",
     "plural": "bleibt · ist geblieben",
     "zh": "停留,保持",
     "example": "er bleibt. — ist **geblieben**",
     "exampleZh": "停留,保持(ist = sein)",
     "note": "ei–ie · 现在时 无 · einfach · 非位移动词却用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "bringen",
     "gender": "动",
     "plural": "bringt · hat gebracht",
     "zh": "带来,拿来",
     "example": "er bringt. — hat **gebracht**",
     "exampleZh": "带来,拿来(hat = haben)",
     "note": "Mischverb · 现在时 无 · einfach · 混合动词:换元音又加 -t",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb"
     ]
    },
    {
     "de": "denken",
     "gender": "动",
     "plural": "denkt · hat gedacht",
     "zh": "想,思考",
     "example": "er denkt. — hat **gedacht**",
     "exampleZh": "想,思考(hat = haben)",
     "note": "Mischverb · 现在时 无 · einfach · 混合动词:换元音又加 -t",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb"
     ]
    },
    {
     "de": "drankommen",
     "gender": "可分",
     "plural": "kommt dran · ist drangekommen",
     "zh": "轮到",
     "example": "er kommt dran. — ist **drangekommen**",
     "exampleZh": "轮到(ist = sein)",
     "note": "o–o · 现在时 无 · trennbar · dran- 可分,ge- 夹在中间",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "o–o",
      "trennbar"
     ]
    },
    {
     "de": "einfallen",
     "gender": "可分",
     "plural": "fällt ein · ist eingefallen",
     "zh": "想起,浮现",
     "example": "er fällt ein. — ist **eingefallen**",
     "exampleZh": "想起,浮现(ist = sein)",
     "note": "a–a · 现在时 a→ä · trennbar · 用 sein,常搭三格:Mir fällt ein …",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "eingeben",
     "gender": "可分",
     "plural": "gibt ein · hat eingegeben",
     "zh": "输入,录入",
     "example": "er gibt ein. — hat **eingegeben**",
     "exampleZh": "输入,录入(hat = haben)",
     "note": "e–e · 现在时 e→i · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "einladen",
     "gender": "可分",
     "plural": "lädt ein · hat eingeladen",
     "zh": "邀请",
     "example": "er lädt ein. — hat **eingeladen**",
     "exampleZh": "邀请(hat = haben)",
     "note": "a–a · 现在时 a→ä · trennbar · er lädt ein(不是 ladet)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "einschlafen",
     "gender": "可分",
     "plural": "schläft ein · ist eingeschlafen",
     "zh": "入睡",
     "example": "er schläft ein. — ist **eingeschlafen**",
     "exampleZh": "入睡(ist = sein)",
     "note": "a–a · 现在时 a→ä · trennbar · schlafen 用 haben,einschlafen 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "einsteigen",
     "gender": "可分",
     "plural": "steigt ein · ist eingestiegen",
     "zh": "上车",
     "example": "er steigt ein. — ist **eingestiegen**",
     "exampleZh": "上车(ist = sein)",
     "note": "ei–ie · 现在时 无 · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie",
      "trennbar"
     ]
    },
    {
     "de": "empfehlen",
     "gender": "动",
     "plural": "empfiehlt · hat empfohlen",
     "zh": "推荐",
     "example": "er empfiehlt. — hat **empfohlen**",
     "exampleZh": "推荐(hat = haben)",
     "note": "e–o · 现在时 e→ie · untrennbar · emp- 不可分,无 ge-;现在时 e→ie,PII 却是 o",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o"
     ]
    },
    {
     "de": "erschließen",
     "gender": "动",
     "plural": "erschließt · hat erschlossen",
     "zh": "开发,推知",
     "example": "er erschließt. — hat **erschlossen**",
     "exampleZh": "开发,推知(hat = haben)",
     "note": "ie–o · 现在时 无 · untrennbar · er- 不可分,无 ge-;ß→ss(短元音)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o"
     ]
    },
    {
     "de": "essen",
     "gender": "动",
     "plural": "isst · hat gegessen",
     "zh": "吃",
     "example": "er isst. — hat **gegessen**",
     "exampleZh": "吃(hat = haben)",
     "note": "e–e · 现在时 e→i · einfach · PII 例外多出一个 ge:gegessen",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e"
     ]
    },
    {
     "de": "fahren",
     "gender": "动",
     "plural": "fährt · ist gefahren",
     "zh": "开车;乘车去",
     "example": "er fährt. — ist **gefahren**",
     "exampleZh": "开车;乘车去(ist = sein)",
     "note": "a–a · 现在时 a→ä · einfach · 用 sein(位移动词)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "fernsehen",
     "gender": "可分",
     "plural": "sieht fern · hat ferngesehen",
     "zh": "看电视",
     "example": "er sieht fern. — hat **ferngesehen**",
     "exampleZh": "看电视(hat = haben)",
     "note": "e–e · 现在时 e→ie · trennbar · 词根 sehen,现在时 e→ie",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "finden",
     "gender": "动",
     "plural": "findet · hat gefunden",
     "zh": "找到;认为",
     "example": "er findet. — hat **gefunden**",
     "exampleZh": "找到;认为(hat = haben)",
     "note": "i–u · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u"
     ]
    },
    {
     "de": "fliegen",
     "gender": "动",
     "plural": "fliegt · ist geflogen",
     "zh": "飞;坐飞机",
     "example": "er fliegt. — ist **geflogen**",
     "exampleZh": "飞;坐飞机(ist = sein)",
     "note": "ie–o · 现在时 无 · einfach · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o"
     ]
    },
    {
     "de": "freihaben",
     "gender": "可分",
     "plural": "hat frei · hat freigehabt",
     "zh": "有空;放假",
     "example": "er hat frei. — hat **freigehabt**",
     "exampleZh": "有空;放假(hat = haben)",
     "note": "Sonderform · 现在时 无 · trennbar · 词根 haben,PII 弱变化 freigehabt",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform",
      "trennbar"
     ]
    },
    {
     "de": "geben",
     "gender": "动",
     "plural": "gibt · hat gegeben",
     "zh": "给",
     "example": "er gibt. — hat **gegeben**",
     "exampleZh": "给(hat = haben)",
     "note": "e–e · 现在时 e→i · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e"
     ]
    },
    {
     "de": "gefallen",
     "gender": "动",
     "plural": "gefällt · hat gefallen",
     "zh": "讨人喜欢",
     "example": "er gefällt. — hat **gefallen**",
     "exampleZh": "讨人喜欢(hat = haben)",
     "note": "a–a · 现在时 a→ä · untrennbar · ge- 是不可分前缀,PII 与原形同形;主语是被喜欢的事物,人用第三格",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "gehen",
     "gender": "动",
     "plural": "geht · ist gegangen",
     "zh": "走;去",
     "example": "er geht. — ist **gegangen**",
     "exampleZh": "走;去(ist = sein)",
     "note": "e–a · 现在时 无 · einfach · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a"
     ]
    },
    {
     "de": "genießen",
     "gender": "动",
     "plural": "genießt · hat genossen",
     "zh": "享受;品味",
     "example": "er genießt. — hat **genossen**",
     "exampleZh": "享受;品味(hat = haben)",
     "note": "ie–o · 现在时 无 · untrennbar · 不可分前缀 ge-,无额外 ge-;ß→ss",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o"
     ]
    },
    {
     "de": "heißen",
     "gender": "动",
     "plural": "heißt · hat geheißen",
     "zh": "名叫;意为",
     "example": "er heißt. — hat **geheißen**",
     "exampleZh": "名叫;意为(hat = haben)",
     "note": "ei–ei · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ei"
     ]
    },
    {
     "de": "helfen",
     "gender": "动",
     "plural": "hilft · hat geholfen",
     "zh": "帮助",
     "example": "er hilft. — hat **geholfen**",
     "exampleZh": "帮助(hat = haben)",
     "note": "e–o · 现在时 e→i · einfach · 支配第三格",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o"
     ]
    },
    {
     "de": "hochfahren",
     "gender": "可分",
     "plural": "fährt hoch · hat hochgefahren",
     "zh": "启动(电脑)",
     "example": "er fährt hoch. — hat **hochgefahren**",
     "exampleZh": "启动(电脑)(hat = haben)",
     "note": "a–a · 现在时 a→ä · trennbar · hat 不是 ist(与 fahren 相反,及物用法)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "kennen",
     "gender": "动",
     "plural": "kennt · hat gekannt",
     "zh": "认识;熟悉",
     "example": "er kennt. — hat **gekannt**",
     "exampleZh": "认识;熟悉(hat = haben)",
     "note": "Mischverb · 现在时 无 · einfach · 混合动词:变元音又加 -t",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb"
     ]
    },
    {
     "de": "klingen",
     "gender": "动",
     "plural": "klingt · hat geklungen",
     "zh": "听起来",
     "example": "er klingt. — hat **geklungen**",
     "exampleZh": "听起来(hat = haben)",
     "note": "i–u · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u"
     ]
    },
    {
     "de": "kommen",
     "gender": "动",
     "plural": "kommt · ist gekommen",
     "zh": "来",
     "example": "er kommt. — ist **gekommen**",
     "exampleZh": "来(ist = sein)",
     "note": "o–o · 现在时 无 · einfach · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "o–o"
     ]
    },
    {
     "de": "laufen",
     "gender": "动",
     "plural": "läuft · ist gelaufen",
     "zh": "跑;走路",
     "example": "er läuft. — ist **gelaufen**",
     "exampleZh": "跑;走路(ist = sein)",
     "note": "au–au · 现在时 au→äu · einfach · 用 sein;现在时 au→äu",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "au–au"
     ]
    },
    {
     "de": "leidtun",
     "gender": "可分",
     "plural": "tut leid · hat leidgetan",
     "zh": "感到抱歉",
     "example": "er tut leid. — hat **leidgetan**",
     "exampleZh": "感到抱歉(hat = haben)",
     "note": "Sonderform · 现在时 无 · trennbar · 词根 tun,完全不规则;常用 Es tut mir leid,人用第三格",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform",
      "trennbar"
     ]
    },
    {
     "de": "lesen",
     "gender": "动",
     "plural": "liest · hat gelesen",
     "zh": "读;阅读",
     "example": "er liest. — hat **gelesen**",
     "exampleZh": "读;阅读(hat = haben)",
     "note": "e–e · 现在时 e→ie · einfach · er liest 只有一个 s(词干已含 s)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e"
     ]
    },
    {
     "de": "liegen",
     "gender": "动",
     "plural": "liegt · hat gelegen",
     "zh": "躺;位于",
     "example": "er liegt. — hat **gelegen**",
     "exampleZh": "躺;位于(hat = haben)",
     "note": "ie–e · 现在时 无 · einfach · 与规则动词 legen(放)区分",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–e"
     ]
    },
    {
     "de": "los sein",
     "gender": "可分",
     "plural": "ist los · ist los gewesen",
     "zh": "发生;出事",
     "example": "er ist los. — ist **los gewesen**",
     "exampleZh": "发生;出事(ist = sein)",
     "note": "Sonderform · 现在时 无 · trennbar · 词根 sein,分写;常用 Was ist los?",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform",
      "trennbar"
     ]
    },
    {
     "de": "losfahren",
     "gender": "可分",
     "plural": "fährt los · ist losgefahren",
     "zh": "出发;启程",
     "example": "er fährt los. — ist **losgefahren**",
     "exampleZh": "出发;启程(ist = sein)",
     "note": "a–a · 现在时 a→ä · trennbar · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "losgehen",
     "gender": "可分",
     "plural": "geht los · ist losgegangen",
     "zh": "开始;动身",
     "example": "er geht los. — ist **losgegangen**",
     "exampleZh": "开始;动身(ist = sein)",
     "note": "e–a · 现在时 无 · trennbar · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a",
      "trennbar"
     ]
    },
    {
     "de": "mitbringen",
     "gender": "可分",
     "plural": "bringt mit · hat mitgebracht",
     "zh": "带来",
     "example": "er bringt mit. — hat **mitgebracht**",
     "exampleZh": "带来(hat = haben)",
     "note": "Mischverb · 现在时 无 · trennbar · 混合动词:变元音又加 -t",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb",
      "trennbar"
     ]
    },
    {
     "de": "mitkommen",
     "gender": "可分",
     "plural": "kommt mit · ist mitgekommen",
     "zh": "一起来",
     "example": "er kommt mit. — ist **mitgekommen**",
     "exampleZh": "一起来(ist = sein)",
     "note": "o–o · 现在时 无 · trennbar · 用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "o–o",
      "trennbar"
     ]
    },
    {
     "de": "mitlesen",
     "gender": "可分",
     "plural": "liest mit · hat mitgelesen",
     "zh": "跟着读",
     "example": "er liest mit. — hat **mitgelesen**",
     "exampleZh": "跟着读(hat = haben)",
     "note": "e–e · 现在时 e→ie · trennbar",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "mitnehmen",
     "gender": "可分",
     "plural": "nimmt mit · hat mitgenommen",
     "zh": "带走;捎上",
     "example": "er nimmt mit. — hat **mitgenommen**",
     "exampleZh": "带走;捎上(hat = haben)",
     "note": "e–o · 现在时 e→i · trennbar · 现在时双写 mm:er nimmt mit",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o",
      "trennbar"
     ]
    },
    {
     "de": "mitsprechen",
     "gender": "可分",
     "plural": "spricht mit · hat mitgesprochen",
     "zh": "跟着说",
     "example": "er spricht mit. — hat **mitgesprochen**",
     "exampleZh": "跟着说(hat = haben)",
     "note": "e–o · 现在时 e→i · trennbar · sprechen 家族，可分前缀 ge- 夹中间",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o",
      "trennbar"
     ]
    },
    {
     "de": "nachsprechen",
     "gender": "可分",
     "plural": "spricht nach · hat nachgesprochen",
     "zh": "跟读",
     "example": "er spricht nach. — hat **nachgesprochen**",
     "exampleZh": "跟读(hat = haben)",
     "note": "e–o · 现在时 e→i · trennbar · sprechen 家族，可分前缀 ge- 夹中间",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o",
      "trennbar"
     ]
    },
    {
     "de": "nehmen",
     "gender": "动",
     "plural": "nimmt · hat genommen",
     "zh": "拿，取",
     "example": "er nimmt. — hat **genommen**",
     "exampleZh": "拿，取(hat = haben)",
     "note": "e–o · 现在时 e→i · einfach · 现在时 er nimmt 辅音也变（h→mm），需死记",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o"
     ]
    },
    {
     "de": "nennen",
     "gender": "动",
     "plural": "nennt · hat genannt",
     "zh": "称呼，说出",
     "example": "er nennt. — hat **genannt**",
     "exampleZh": "称呼，说出(hat = haben)",
     "note": "Mischverb · 现在时 无 · einfach · 混合动词：变元音 e→a 又加 -t",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb"
     ]
    },
    {
     "de": "raten",
     "gender": "动",
     "plural": "rät · hat geraten",
     "zh": "猜；建议",
     "example": "er rät. — hat **geraten**",
     "exampleZh": "猜；建议(hat = haben)",
     "note": "a–a · 现在时 a→ä · einfach · PII 词干与原形同形（geraten），只是现在时变音",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "rausgehen",
     "gender": "可分",
     "plural": "geht raus · ist rausgegangen",
     "zh": "出去",
     "example": "er geht raus. — ist **rausgegangen**",
     "exampleZh": "出去(ist = sein)",
     "note": "e–a · 现在时 无 · trennbar · gehen 家族，位移动词用 sein",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a",
      "trennbar"
     ]
    },
    {
     "de": "riechen",
     "gender": "动",
     "plural": "riecht · hat gerochen",
     "zh": "闻；有气味",
     "example": "er riecht. — hat **gerochen**",
     "exampleZh": "闻；有气味(hat = haben)",
     "note": "ie–o · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o"
     ]
    },
    {
     "de": "scheinen",
     "gender": "动",
     "plural": "scheint · hat geschienen",
     "zh": "照耀；似乎",
     "example": "er scheint. — hat **geschienen**",
     "exampleZh": "照耀；似乎(hat = haben)",
     "note": "ei–ie · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "schlafen",
     "gender": "动",
     "plural": "schläft · hat geschlafen",
     "zh": "睡觉",
     "example": "er schläft. — hat **geschlafen**",
     "exampleZh": "睡觉(hat = haben)",
     "note": "a–a · 现在时 a→ä · einfach · 现在时变音但 PII 不变音",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "schließen",
     "gender": "动",
     "plural": "schließt · hat geschlossen",
     "zh": "关闭",
     "example": "er schließt. — hat **geschlossen**",
     "exampleZh": "关闭(hat = haben)",
     "note": "ie–o · 现在时 无 · einfach · PII 短元音故 ß→ss",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o"
     ]
    },
    {
     "de": "schneiden",
     "gender": "动",
     "plural": "schneidet · hat geschnitten",
     "zh": "切，剪",
     "example": "er schneidet. — hat **geschnitten**",
     "exampleZh": "切，剪(hat = haben)",
     "note": "ei–i · 现在时 无 · einfach · ei–i 类，PII 双写 tt",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–i"
     ]
    },
    {
     "de": "schreiben",
     "gender": "动",
     "plural": "schreibt · hat geschrieben",
     "zh": "写",
     "example": "er schreibt. — hat **geschrieben**",
     "exampleZh": "写(hat = haben)",
     "note": "ei–ie · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "schwimmen",
     "gender": "动",
     "plural": "schwimmt · ist geschwommen",
     "zh": "游泳",
     "example": "er schwimmt. — ist **geschwommen**",
     "exampleZh": "游泳(ist = sein)",
     "note": "i–o · 现在时 无 · einfach · ist 不是 hat（位移动词）",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–o"
     ]
    },
    {
     "de": "sehen",
     "gender": "动",
     "plural": "sieht · hat gesehen",
     "zh": "看见",
     "example": "er sieht. — hat **gesehen**",
     "exampleZh": "看见(hat = haben)",
     "note": "e–e · 现在时 e→ie · einfach · 现在时变 ie，但 PII 回到 e",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e"
     ]
    },
    {
     "de": "singen",
     "gender": "动",
     "plural": "singt · hat gesungen",
     "zh": "唱歌",
     "example": "er singt. — hat **gesungen**",
     "exampleZh": "唱歌(hat = haben)",
     "note": "i–u · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u"
     ]
    },
    {
     "de": "sitzen",
     "gender": "动",
     "plural": "sitzt · hat gesessen",
     "zh": "坐着",
     "example": "er sitzt. — hat **gesessen**",
     "exampleZh": "坐着(hat = haben)",
     "note": "i–e · 现在时 无 · einfach · hat 不是 ist（状态动词，反直觉）",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–e"
     ]
    },
    {
     "de": "sprechen",
     "gender": "动",
     "plural": "spricht · hat gesprochen",
     "zh": "说话",
     "example": "er spricht. — hat **gesprochen**",
     "exampleZh": "说话(hat = haben)",
     "note": "e–o · 现在时 e→i · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o"
     ]
    },
    {
     "de": "stattfinden",
     "gender": "可分",
     "plural": "findet statt · hat stattgefunden",
     "zh": "举行，发生",
     "example": "er findet statt. — hat **stattgefunden**",
     "exampleZh": "举行，发生(hat = haben)",
     "note": "i–u · 现在时 无 · trennbar · finden 家族；主语只能是活动/事件",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u",
      "trennbar"
     ]
    },
    {
     "de": "stehen",
     "gender": "动",
     "plural": "steht · hat gestanden",
     "zh": "站立",
     "example": "er steht. — hat **gestanden**",
     "exampleZh": "站立(hat = haben)",
     "note": "e–a · 现在时 无 · einfach · hat 不是 ist（德标准语；南德才用 ist）",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a"
     ]
    },
    {
     "de": "tragen",
     "gender": "动",
     "plural": "trägt · hat getragen",
     "zh": "携带；穿着",
     "example": "er trägt. — hat **getragen**",
     "exampleZh": "携带；穿着(hat = haben)",
     "note": "a–a · 现在时 a→ä · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "treffen",
     "gender": "动",
     "plural": "trifft · hat getroffen",
     "zh": "遇见，会面",
     "example": "er trifft. — hat **getroffen**",
     "exampleZh": "遇见，会面(hat = haben)",
     "note": "e–o · 现在时 e→i · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–o"
     ]
    },
    {
     "de": "trinken",
     "gender": "动",
     "plural": "trinkt · hat getrunken",
     "zh": "喝",
     "example": "er trinkt. — hat **getrunken**",
     "exampleZh": "喝(hat = haben)",
     "note": "i–u · 现在时 无 · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u"
     ]
    },
    {
     "de": "tun",
     "gender": "动",
     "plural": "tut · hat getan",
     "zh": "做",
     "example": "er tut. — hat **getan**",
     "exampleZh": "做(hat = haben)",
     "note": "Sonderform · 现在时 无 · einfach · 完全不规则，PII 为 getan（无 -en 前的长音变化规律）",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform"
     ]
    },
    {
     "de": "überweisen",
     "gender": "动",
     "plural": "überweist · hat überwiesen",
     "zh": "汇款；转诊",
     "example": "er überweist. — hat **überwiesen**",
     "exampleZh": "汇款；转诊(hat = haben)",
     "note": "ei–ie · 现在时 无 · untrennbar · 不可分前缀，无 ge-",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "umsteigen",
     "gender": "可分",
     "plural": "steigt um · ist umgestiegen",
     "zh": "换乘",
     "example": "er steigt um. — ist **umgestiegen**",
     "exampleZh": "换乘(ist = sein)",
     "note": "ei–ie · 现在时 无 · trennbar · ist 不是 hat；um- 此处可分（ge- 夹中间）",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie",
      "trennbar"
     ]
    },
    {
     "de": "umziehen",
     "gender": "可分",
     "plural": "zieht um · ist umgezogen",
     "zh": "搬家",
     "example": "er zieht um. — ist **umgezogen**",
     "exampleZh": "搬家(ist = sein)",
     "note": "ie–o · 现在时 无 · trennbar · ist 不是 hat；反身 sich umziehen（换衣服）用 hat",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie–o",
      "trennbar"
     ]
    },
    {
     "de": "unterschreiben",
     "gender": "动",
     "plural": "unterschreibt · hat unterschrieben",
     "zh": "签名",
     "example": "er unterschreibt. — hat **unterschrieben**",
     "exampleZh": "签名(hat = haben)",
     "note": "ei–ie · 现在时 无 · untrennbar · 不可分前缀,无 ge-;与 schreiben 同族",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–ie"
     ]
    },
    {
     "de": "unterstreichen",
     "gender": "动",
     "plural": "unterstreicht · hat unterstrichen",
     "zh": "划线;强调",
     "example": "er unterstreicht. — hat **unterstrichen**",
     "exampleZh": "划线;强调(hat = haben)",
     "note": "ei–i · 现在时 无 · untrennbar · 不可分前缀,无 ge-;元音变短 ei→i",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–i"
     ]
    },
    {
     "de": "verbinden",
     "gender": "动",
     "plural": "verbindet · hat verbunden",
     "zh": "连接;包扎",
     "example": "er verbindet. — hat **verbunden**",
     "exampleZh": "连接;包扎(hat = haben)",
     "note": "i–u · 现在时 无 · untrennbar · 不可分前缀,无 ge-;与 finden 同族",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u"
     ]
    },
    {
     "de": "vergessen",
     "gender": "动",
     "plural": "vergisst · hat vergessen",
     "zh": "忘记",
     "example": "er vergisst. — hat **vergessen**",
     "exampleZh": "忘记(hat = haben)",
     "note": "e–e · 现在时 e→i · untrennbar · PII 与原形同形(不可分前缀,无 ge-)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e"
     ]
    },
    {
     "de": "vergleichen",
     "gender": "动",
     "plural": "vergleicht · hat verglichen",
     "zh": "比较",
     "example": "er vergleicht. — hat **verglichen**",
     "exampleZh": "比较(hat = haben)",
     "note": "ei–i · 现在时 无 · untrennbar · 不可分前缀,无 ge-",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ei–i"
     ]
    },
    {
     "de": "verstehen",
     "gender": "动",
     "plural": "versteht · hat verstanden",
     "zh": "理解;懂",
     "example": "er versteht. — hat **verstanden**",
     "exampleZh": "理解;懂(hat = haben)",
     "note": "e–a · 现在时 无 · untrennbar · 不可分前缀,无 ge-;stehen 用 hat,不是 ist",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–a"
     ]
    },
    {
     "de": "vorlesen",
     "gender": "可分",
     "plural": "liest vor · hat vorgelesen",
     "zh": "朗读",
     "example": "er liest vor. — hat **vorgelesen**",
     "exampleZh": "朗读(hat = haben)",
     "note": "e–e · 现在时 e→ie · trennbar · ge- 夹在 vor- 之后",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "waschen",
     "gender": "动",
     "plural": "wäscht · hat gewaschen",
     "zh": "洗",
     "example": "er wäscht. — hat **gewaschen**",
     "exampleZh": "洗(hat = haben)",
     "note": "a–a · 现在时 a→ä · einfach",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a"
     ]
    },
    {
     "de": "wehtun",
     "gender": "可分",
     "plural": "tut weh · hat wehgetan",
     "zh": "疼;弄疼",
     "example": "er tut weh. — hat **wehgetan**",
     "exampleZh": "疼;弄疼(hat = haben)",
     "note": "Sonderform · 现在时 无 · trennbar · tun 完全不规则;可分,ge- 夹中间",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform",
      "trennbar"
     ]
    },
    {
     "de": "wiedergeben",
     "gender": "可分",
     "plural": "gibt wieder · hat wiedergegeben",
     "zh": "归还;复述",
     "example": "er gibt wieder. — hat **wiedergegeben**",
     "exampleZh": "归还;复述(hat = haben)",
     "note": "e–e · 现在时 e→i · trennbar · wieder- 此处可分(有 ge- 夹中间)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "e–e",
      "trennbar"
     ]
    },
    {
     "de": "wiegen",
     "gender": "动",
     "plural": "wiegt · hat gewogen",
     "zh": "称重;重达",
     "example": "er wiegt. — hat **gewogen**",
     "exampleZh": "称重;重达(hat = haben)",
     "note": "ie/ie-类–o · 现在时 无 · einfach · 现在时不变音,但 PII 变 o",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie/ie-类–o"
     ]
    },
    {
     "de": "wissen",
     "gender": "动",
     "plural": "weiß · hat gewusst",
     "zh": "知道",
     "example": "er weiß. — hat **gewusst**",
     "exampleZh": "知道(hat = haben)",
     "note": "Mischverb · 现在时 i→ei(单数不规则) · einfach · 混合动词:变元音又加 -t;单数 weiß/weißt/weiß",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Mischverb"
     ]
    },
    {
     "de": "ziehen",
     "gender": "动",
     "plural": "zieht · hat gezogen",
     "zh": "拉;拽",
     "example": "er zieht. — hat **gezogen**",
     "exampleZh": "拉;拽(hat = haben)",
     "note": "ie/ie-类–o · 现在时 无 · einfach · 表「搬迁」时用 ist gezogen",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "ie/ie-类–o"
     ]
    },
    {
     "de": "zuhaben",
     "gender": "可分",
     "plural": "hat zu · hat zugehabt",
     "zh": "关门;未营业",
     "example": "er hat zu. — hat **zugehabt**",
     "exampleZh": "关门;未营业(hat = haben)",
     "note": "Sonderform · 现在时 无 · trennbar · haben 不规则;可分,ge- 夹中间",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform",
      "trennbar"
     ]
    },
    {
     "de": "zurückfahren",
     "gender": "可分",
     "plural": "fährt zurück · ist zurückgefahren",
     "zh": "返回;开回",
     "example": "er fährt zurück. — ist **zurückgefahren**",
     "exampleZh": "返回;开回(ist = sein)",
     "note": "a–a · 现在时 a→ä · trennbar · 位移动词用 ist;与 fahren 同族",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "a–a",
      "trennbar"
     ]
    },
    {
     "de": "zurückfinden",
     "gender": "可分",
     "plural": "findet zurück · hat zurückgefunden",
     "zh": "找回路",
     "example": "er findet zurück. — hat **zurückgefunden**",
     "exampleZh": "找回路(hat = haben)",
     "note": "i–u · 现在时 无 · trennbar · 虽含位移义仍用 hat(反直觉)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "i–u",
      "trennbar"
     ]
    },
    {
     "de": "haben",
     "gender": "动",
     "plural": "hat · hat gehabt",
     "zh": "有;拥有",
     "example": "er hat. — hat **gehabt**",
     "exampleZh": "有;拥有(hat = haben)",
     "note": "Sonderform · 现在时 无 · einfach · 完全不规则:du hast / er hat",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform"
     ]
    },
    {
     "de": "sein",
     "gender": "动",
     "plural": "ist · ist gewesen",
     "zh": "是;存在",
     "example": "er ist. — ist **gewesen**",
     "exampleZh": "是;存在(ist = sein)",
     "note": "Sonderform · 现在时 无 · einfach · 完全不规则:bin/bist/ist;完成时用 ist",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform"
     ]
    },
    {
     "de": "werden",
     "gender": "动",
     "plural": "wird · ist geworden",
     "zh": "变成;成为",
     "example": "er wird. — ist **geworden**",
     "exampleZh": "变成;成为(ist = sein)",
     "note": "Sonderform · 现在时 e→i · einfach · 用 ist,不是 hat;被动态中 PII 作 worden",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Sonderform"
     ]
    },
    {
     "de": "dürfen",
     "gender": "情态",
     "plural": "darf · hat gedurft",
     "zh": "允许;可以",
     "example": "er darf. — hat **gedurft**",
     "exampleZh": "允许;可以(hat = haben)",
     "note": "Modalverb · 现在时 ü→a · einfach · 带动词不定式时用 hat dürfen(替代不定式)",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "können",
     "gender": "情态",
     "plural": "kann · hat gekonnt",
     "zh": "能;会",
     "example": "er kann. — hat **gekonnt**",
     "exampleZh": "能;会(hat = haben)",
     "note": "Modalverb · 现在时 ö→a · einfach · 带动词不定式时用 hat können",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "müssen",
     "gender": "情态",
     "plural": "muss · hat gemusst",
     "zh": "必须",
     "example": "er muss. — hat **gemusst**",
     "exampleZh": "必须(hat = haben)",
     "note": "Modalverb · 现在时 ü→u · einfach · 带动词不定式时用 hat müssen",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "sollen",
     "gender": "情态",
     "plural": "soll · hat gesollt",
     "zh": "应该",
     "example": "er soll. — hat **gesollt**",
     "exampleZh": "应该(hat = haben)",
     "note": "Modalverb · 现在时 无 · einfach · 现在时单数不变音;带不定式时用 hat sollen",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "wollen",
     "gender": "情态",
     "plural": "will · hat gewollt",
     "zh": "想要",
     "example": "er will. — hat **gewollt**",
     "exampleZh": "想要(hat = haben)",
     "note": "Modalverb · 现在时 o→i · einfach · 带动词不定式时用 hat wollen",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "möchten",
     "gender": "情态",
     "plural": "möchte · hat gemocht",
     "zh": "想要;愿意",
     "example": "er möchte. — hat **gemocht**",
     "exampleZh": "想要;愿意(hat = haben)",
     "note": "Modalverb · 现在时 无 · einfach · möchten 无独立完成时,借用 mögen 的 gemocht",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    },
    {
     "de": "mögen",
     "gender": "情态",
     "plural": "mag · hat gemocht",
     "zh": "喜欢",
     "example": "er mag. — hat **gemocht**",
     "exampleZh": "喜欢(hat = haben)",
     "note": "Modalverb · 现在时 ö→a · einfach · 与 möchten 共用 PII gemocht",
     "level": "A2",
     "tags": [
      "unregelmäßig",
      "Modalverb"
     ]
    }
   ]
  }
  ]
};
