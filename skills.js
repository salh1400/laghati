<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>مهارات لغتي الممتعة</title>

  <style>
    :root{
      --bg1:#f7fbff;
      --bg2:#fff3fb;
      --ink:#1f2430;
      --muted:#5b657a;

      --card:#ffffffcc;
      --stroke: rgba(0,0,0,.08);

      --brand1:#5b6cff;
      --brand2:#7c4dff;
      --pink:#ff6fb1;
      --gold:#ffb84a;
      --green:#19b36b;

      --shadow: 0 18px 45px rgba(0,0,0,.12);
      --shadow2: 0 12px 26px rgba(0,0,0,.10);

      --radius: 22px;
    }

    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: "Cairo","Tajawal", system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
      color:var(--ink);
      background:
        radial-gradient(1200px 700px at 20% 0%, var(--bg2), transparent 60%),
        radial-gradient(1100px 650px at 90% 10%, #e6fbff, transparent 55%),
        linear-gradient(180deg, #f7fbff, #f4f6ff);
      min-height:100vh;
    }

    .wrap{
      max-width: 1200px;
      margin: 0 auto;
      padding: 14px 12px 34px;
    }

    .topbar{
      position: sticky;
      top: 10px;
      z-index: 50;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      padding: 12px 12px;
      border-radius: 18px;
      background: linear-gradient(135deg, #2e5aac, var(--brand1));
      box-shadow: var(--shadow2);
      color:#fff;
    }
    .brand{
      display:flex;
      align-items:center;
      gap:10px;
      min-width:0;
    }
    .logo{
      width:44px;height:44px;
      border-radius: 14px;
      background: linear-gradient(135deg, #ffd36b, #ff7bd4);
      display:grid;
      place-items:center;
      box-shadow: 0 10px 18px rgba(0,0,0,.18);
      flex:0 0 auto;
    }
    .logo span{
      font-weight:1000;
      color:#1b1f2a;
      font-size:18px;
    }
    .brandTitle{
      min-width:0;
    }
    .brandTitle h1{
      margin:0;
      font-size:18px;
      font-weight:1000;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .brandTitle p{
      margin:2px 0 0;
      font-size:12px;
      opacity:.92;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .homeBtn{
      border:0;
      cursor:pointer;
      padding: 10px 12px;
      border-radius: 14px;
      color:#fff;
      font-weight:1000;
      background: rgba(255,255,255,.18);
      box-shadow: 0 10px 18px rgba(0,0,0,.10);
      display:flex;
      align-items:center;
      gap:8px;
    }
    .homeBtn:active{ transform: scale(.99); }

    .hero{
      margin-top: 12px;
      padding: 16px 14px;
      border-radius: var(--radius);
      background: var(--card);
      border: 1px solid rgba(255,255,255,.6);
      backdrop-filter: blur(10px);
      box-shadow: var(--shadow);
      text-align:center;
    }
    .hero h2{
      margin:0 0 6px;
      font-size:22px;
      font-weight:1000;
    }
    .hero .sub{
      margin:0;
      color:var(--muted);
      font-weight:900;
      line-height:1.7;
      font-size:14px;
    }

    .selector{
      margin-top: 12px;
      padding: 12px;
      border-radius: var(--radius);
      background: var(--card);
      border: 1px solid rgba(255,255,255,.6);
      backdrop-filter: blur(10px);
      box-shadow: var(--shadow2);
    }
    .pills{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      justify-content:center;
    }
    .pill{
      border:1px solid rgba(0,0,0,.10);
      background:#fff;
      color:#242a38;
      padding: 12px 16px;
      border-radius: 999px;
      cursor:pointer;
      font-weight:1000;
      box-shadow: 0 10px 16px rgba(0,0,0,.08);
      transition: transform .12s ease;
      max-width: 100%;
    }
    .pill:active{ transform: scale(.98); }
    .pill.active{
      border:0;
      color:#fff;
      background: linear-gradient(135deg, var(--brand1), var(--brand2));
      box-shadow: 0 14px 22px rgba(92,104,255,.28);
    }

    .grid{
      margin-top: 12px;
      display:grid;
      grid-template-columns: repeat(4, minmax(0,1fr));
      gap: 14px;
    }
    @media (max-width:1100px){ .grid{ grid-template-columns: repeat(3, 1fr); } }
    @media (max-width:820px){ .grid{ grid-template-columns: repeat(2, 1fr); } }
    @media (max-width:520px){ .grid{ grid-template-columns: 1fr; } }

    .card{
      border-radius: 22px;
      background: rgba(255,255,255,.90);
      border: 1px solid var(--stroke);
      box-shadow: var(--shadow2);
      overflow:hidden;
      display:flex;
      flex-direction:column;
      min-height: 330px;
    }
    .cardHead{
      padding: 12px 12px 8px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:8px;
    }
    .cardHead h3{
      margin:0;
      font-size:15px;
      font-weight:1000;
      line-height:1.6;
    }
    .hint{
      font-size:12px;
      color:#6a7284;
      white-space:nowrap;
      font-weight:900;
    }
    .imgWrap{
      padding: 0 12px 10px;
    }
    .imgWrap img{
      width:100%;
      height:auto;
      border-radius: 16px;
      border:1px solid rgba(0,0,0,.10);
      background:#f6f7ff;
      cursor: zoom-in;
    }

    .actions{
      margin-top:auto;
      padding: 10px 12px 14px;
      display:flex;
      gap:10px;
    }
    .btn{
      flex:1;
      border:0;
      cursor:pointer;
      padding: 12px 10px;
      border-radius: 16px;
      font-weight:1000;
      color:#fff;
      box-shadow: 0 12px 20px rgba(0,0,0,.12);
      display:flex;
      justify-content:center;
      align-items:center;
      gap:8px;
    }
    .btnVideo{ background: linear-gradient(135deg, var(--pink), var(--gold)); }
    .btnQuiz{ background: linear-gradient(135deg, var(--green), #3aa9ff); }
    .btn:active{ transform: scale(.99); }

    .footer{
      text-align:center;
      color:#6a7284;
      font-weight:900;
      margin-top: 14px;
      font-size:13px;
    }

    .overlay{
      position:fixed;
      inset:0;
      background: rgba(10,10,20,.62);
      display:none;
      align-items:center;
      justify-content:center;
      padding: 14px;
      z-index: 200;
    }
    .overlay.show{ display:flex; }

    .modal{
      width: min(980px, 100%);
      max-height: 92vh;
      overflow:auto;
      background:#fff;
      border-radius: 22px;
      box-shadow: 0 30px 70px rgba(0,0,0,.35);
      border: 1px solid rgba(255,255,255,.35);
    }
    .modalHead{
      padding: 12px 12px;
      color:#fff;
      background: linear-gradient(135deg, #2e5aac, #7c4dff);
      border-radius: 22px 22px 0 0;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
    }
    .modalHead h4{
      margin:0;
      font-size:16px;
      font-weight:1000;
    }
    .close{
      border:0;
      width:42px;height:42px;
      border-radius: 14px;
      cursor:pointer;
      background: rgba(255,255,255,.18);
      color:#fff;
      font-size:20px;
      font-weight:1000;
    }
    .modalBody{ padding: 12px; }

    .videoBox{
      border-radius: 18px;
      overflow:hidden;
      border:1px solid rgba(0,0,0,.10);
      background:#000;
    }
    .videoBox iframe{
      width:100%;
      aspect-ratio: 16/9;
      border:0;
      display:block;
    }

    .quizTop{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:10px;
    }
    .badge{
      background: rgba(90,100,255,.10);
      border:1px solid rgba(90,100,255,.18);
      color:#2e3aa8;
      padding: 8px 12px;
      border-radius: 999px;
      font-weight:1000;
      font-size:13px;
    }
    .progress{
      background: rgba(25,179,107,.10);
      border:1px solid rgba(25,179,107,.18);
      color:#0b5a2f;
      padding: 8px 12px;
      border-radius: 999px;
      font-weight:1000;
      font-size:13px;
    }
    .qCard{
      border-radius: 18px;
      border:1px solid rgba(0,0,0,.10);
      background:#fafbff;
      padding: 12px;
      box-shadow: 0 10px 18px rgba(0,0,0,.06);
    }
    .qText{
      margin:0 0 10px;
      font-weight:1000;
      font-size:16px;
      line-height:1.7;
      text-align:center;
      color:#1e2435;
      white-space:pre-line;
    }
    .opts{
      display:grid;
      grid-template-columns: 1fr;
      gap:10px;
      margin-top: 8px;
    }
    .opt{
      border:0;
      cursor:pointer;
      padding: 12px 12px;
      border-radius: 16px;
      font-weight:1000;
      color:#fff;
      background: linear-gradient(135deg, #2b86ff, #1e74e6);
      box-shadow: 0 10px 18px rgba(30,116,230,.18);
    }
    .opt:active{ transform: scale(.99); }
    .opt.disabled{ pointer-events:none; opacity:.95; }
    .opt.good{
      background: linear-gradient(135deg, #7cffb2, #55f09d);
      color:#0b5a2f;
      box-shadow: 0 12px 20px rgba(124,255,178,.22);
    }
    .opt.bad{
      background: linear-gradient(135deg, #ff7c9a, #ff5f86);
      color:#7a0f25;
      box-shadow: 0 12px 20px rgba(255,124,154,.20);
    }
    .msg{
      margin:10px 0 0;
      text-align:center;
      font-weight:1000;
      color:#556;
    }

    .pickVideos{
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap:10px;
    }
    .pickVideos button{
      border:0;
      cursor:pointer;
      padding: 12px 12px;
      border-radius: 16px;
      font-weight:1000;
      color:#fff;
      background: linear-gradient(135deg, var(--pink), var(--gold));
      box-shadow: 0 12px 20px rgba(0,0,0,.12);
    }
    .pickVideos button:active{ transform: scale(.99); }

    .disabledCard{
      opacity:.65;
      filter: grayscale(.15);
    }
    .disabledCard .btn{ pointer-events:none; opacity:.85; }
  </style>
</head>

<body>
  <div class="wrap">

    <div class="topbar">
      <div class="brand">
        <div class="logo"><span>ل</span></div>
        <div class="brandTitle">
          <h1>مهارات لغتي الممتعة</h1>
          <p>اختر مهارة ثم شاهد الفيديو أو ابدأ الاختبار</p>
        </div>
      </div>

      <button class="homeBtn" onclick="location.href='index.html'">🏠 العودة للرئيسية</button>
    </div>

    <div class="hero">
      <h2>اختر مهارة</h2>
      <p class="sub">اضغط زر المهارة من الشريط، ثم افتح الفيديو أو الاختبار. (الصورة تكبر عند الضغط)</p>
    </div>

    <div class="selector">
      <div id="pills" class="pills"></div>
    </div>

    <div id="grid" class="grid"></div>

    <div class="footer">تصميم: صالحة علي الغامدي ©</div>
  </div>

  <div id="overlay" class="overlay" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true">
      <div class="modalHead">
        <h4 id="modalTitle">—</h4>
        <button class="close" id="closeBtn" title="إغلاق">×</button>
      </div>
      <div class="modalBody" id="modalBody"></div>
    </div>
  </div>

<script>
  /***********************
   * المهارات (كما أرسلتِ)
   * ملاحظة: مسار الصور: image/اسم_الصورة.png
   ***********************/
  const SKILLS = [
    { id:"word_types", title:"أنواع الكلمة", img:"image/skill_word_types.png", videos:["https://youtu.be/CvTvx1TRYw4?feature=shared"] },
    { id:"verb_types", title:"أنواع الفعل", img:"image/skill_verb-types.png", videos:["https://youtu.be/-fNt_5kOvIs?feature=shared"] },

    // عنوان النص له رابطان — يظهر اختيار فيديو 1 أو 2
    { id:"title", title:"عنوان النص", img:"image/skill_title.png", videos:[
      "https://youtu.be/KWRbbfoP20c?feature=shared",
      "https://youtu.be/ZA0fn1a7VUg?feature=shared"
    ]},

    { id:"tanween", title:"التنوين", img:"image/skill_tanween.png", videos:["https://youtu.be/U3D7_jGq5NA?feature=shared"] },
    { id:"tafdeel", title:"اسم التفضيل", img:"image/skill_tafdeel.png", videos:["https://youtu.be/pl5BGnN-Cdc?feature=shared"] },
    { id:"taa", title:"التاء (المربوطة/المفتوحة) والهاء", img:"image/skill_taa-skills.png", videos:["https://youtu.be/R8fLZZjPZ6I?feature=shared"] },
    { id:"synonyms", title:"المرادفات", img:"image/skill_synonyms.png", videos:["https://youtu.be/Ue9sNE6oF98?feature=shared"] },
    { id:"sunmoon", title:"اللام الشمسية واللام القمرية", img:"image/skill_sun-moon-lam.png", videos:["https://youtu.be/3-B4xd83GXw?feature=shared"] },
    { id:"sentence", title:"الجملة", img:"image/skill_sentence.png", videos:["https://youtu.be/4NxjcMu9kV4?si=4qQ3a3gJmn24yYzo"] },
    { id:"punctuation", title:"أدوات الترقيم", img:"image/skill_punctuation.png", videos:["https://youtu.be/BpVqfG4LbCc?feature=shared"] },
    { id:"number", title:"العدد (مفرد/مثنى/جمع)", img:"image/skill_number.png", videos:["https://youtu.be/fAdCP1qmLR0?feature=shared"] },
    { id:"main_idea", title:"الفكرة الرئيسة", img:"image/skill_main_idea.png", videos:["https://youtu.be/jhuaaQjiZIs?feature=shared"] },
    { id:"mad", title:"حروف المد", img:"image/skill_mad-letters.png", videos:["https://youtu.be/MbTOjRgayT0?feature=shared"] },
    { id:"gender", title:"المذكر والمؤنث", img:"image/skill_gender.png", videos:["https://youtu.be/ufdUobvMz-E?feature=shared"] },

    // ملاحظة: عندك سطرين للاسمين (fael-mafool و active_passive)
    // هنا وضعتهما كمهارتين منفصلتين (كما فهمت من قائمتك)
    { id:"fael_mafool", title:"اسم الفاعل واسم المفعول", img:"image/skill_fael-mafool.png", videos:["https://youtu.be/BgrU8E4PhGE?si=IELDSzT6zulwipKf"] },

    { id:"active_passive", title:"المبني للمعلوم والمبني للمجهول", img:"image/skill_active_passive.png", videos:["https://youtu.be/BgrU8E4PhGE?si=IELDSzT6zulwipKf"] },

    { id:"exception", title:"أسلوب الاستثناء", img:"image/skill_exception.png", videos:["https://youtu.be/_l3t_vDpIJE?feature=shared"] },
    { id:"compare", title:"أوجه الشبه والاختلاف", img:"image/skill_compare.png", videos:["https://youtu.be/ySR-1AgoQPY?feature=shared"] },
    { id:"antonyms", title:"الأضداد", img:"image/skill_antonyms.png", videos:["https://youtu.be/kqTJtHz8U-Y?feature=shared"] },

    /* ======= بطاقة 20 جاهزة (مقفلة) =======
       لأنك ذكرتِ العدد 20، وهذه البطاقة لن تعمل إلا إذا كتبتي:
       - اسم الصورة الصحيح داخل img
       - رابط الفيديو داخل videos
       إذا لا تحتاجينها، فقط احذفي هذا الكائن كله.
    */
    {
      id:"skill20_placeholder",
      title:"مهارة إضافية (اكتبي اسمها هنا)",
      img:"image/PUT_SKILL_IMAGE_HERE.png",
      videos:["PUT_YOUTUBE_LINK_HERE"],
      disabled:true
    }
  ];

  /***********************
   * اختبار عام (5 أسئلة) — يعمل لكل مهارة
   ***********************/
  const GENERAL_QUIZ = [
    {
      q:"أيُّ الجُمَلِ تَدلُّ على فِعلٍ؟",
      options:["الطَّالِبُ مُجتَهِدٌ","يَكتُبُ الطَّالِبُ الدَّرسَ","الكِتابُ جَميلٌ","القَلَمُ أزرَقُ"],
      correct:1
    },
    {
      q:"ما أداةُ الاستثناءِ في الجملة:\n«حَضَرَ الجَميعُ إلَّا طَالِبًا»؟",
      options:["الجميع","إلّا","حضر","طالبًا"],
      correct:1
    },
    {
      q:"أَيُّ الكَلِماتِ تَحوي حَرفَ مَدٍّ؟",
      options:["بِنْتٌ","كِتابٌ","يَدٌ","قَلَمٌ"],
      correct:1
    },
    {
      q:"أيُّ علامةِ الترقيمِ تُستعملُ في نهايةِ السؤال؟",
      options:["،","؟","؛","."],
      correct:1
    },
    {
      q:"ما العنوانُ الأنسبُ لِنصٍّ يتحدّثُ عن النظافة؟",
      options:["رحلة إلى البحر","مدرستي نظيفة","لعبة الكرة","السماء الزرقاء"],
      correct:1
    },
  ];

  /***********************
   * أصوات وتشجيع (WebAudio)
   ***********************/
  let audioCtx = null;
  let audioUnlocked = false;
  function ensureAudio(){
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === "suspended") audioCtx.resume();
    audioUnlocked = true;
  }
  function tone({type="sine", f1=440, f2=null, dur=0.14, gain=0.10}){
    if(!audioUnlocked || !audioCtx) return;
    const ctx = audioCtx;
    const t0 = ctx.currentTime;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f1, t0);
    if(f2!==null) osc.frequency.linearRampToValueAtTime(f2, t0+dur);

    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0+dur);

    osc.connect(g); g.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0+dur+0.03);
  }
  function soundCorrect(){
    tone({type:"triangle", f1:760, f2:1120, dur:0.16, gain:0.11});
    setTimeout(()=>tone({type:"sine", f1:1100, f2:1380, dur:0.12, gain:0.09}), 90);
  }
  function soundWrong(){
    tone({type:"sawtooth", f1:320, f2:170, dur:0.24, gain:0.14});
    setTimeout(()=>tone({type:"sawtooth", f1:240, f2:140, dur:0.22, gain:0.13}), 120);
  }
  window.addEventListener("pointerdown", ()=>ensureAudio(), {once:true});

  /***********************
   * YouTube embed
   ***********************/
  function youtubeToEmbed(url){
    try{
      const u = new URL(url);
      if(u.hostname.includes("youtu.be")){
        const id = u.pathname.replace("/","");
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }
      if(u.hostname.includes("youtube.com")){
        const id = u.searchParams.get("v");
        if(id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }
    }catch(e){}
    return url;
  }

  /***********************
   * UI
   ***********************/
  const pillsEl = document.getElementById("pills");
  const gridEl  = document.getElementById("grid");

  const overlay   = document.getElementById("overlay");
  const modalBody = document.getElementById("modalBody");
  const modalTitle= document.getElementById("modalTitle");
  const closeBtn  = document.getElementById("closeBtn");

  let activeSkillId = SKILLS[0]?.id || null;

  function renderPills(){
    pillsEl.innerHTML = "";
    SKILLS.forEach(s=>{
      const b = document.createElement("button");
      b.className = "pill" + (s.id===activeSkillId ? " active":"");
      b.type = "button";
      b.textContent = s.title;
      b.addEventListener("click", ()=>{
        ensureAudio();
        activeSkillId = s.id;
        renderPills();
        renderCards();
        const card = document.querySelector(`[data-skill="${s.id}"]`);
        if(card) card.scrollIntoView({behavior:"smooth", block:"start"});
      });
      pillsEl.appendChild(b);
    });
  }

  function renderCards(){
    gridEl.innerHTML = "";
    SKILLS.forEach(skill=>{
      const card = document.createElement("div");
      card.className = "card" + (skill.disabled ? " disabledCard":"");
      card.setAttribute("data-skill", skill.id);

      const head = document.createElement("div");
      head.className = "cardHead";
      head.innerHTML = `<h3>${skill.title}</h3><div class="hint">🔍 اضغط للتكبير</div>`;
      card.appendChild(head);

      const imgWrap = document.createElement("div");
      imgWrap.className = "imgWrap";
      const img = document.createElement("img");
      img.src = skill.img;
      img.alt = `صورة مهارة: ${skill.title}`;
      img.loading="lazy";

      img.addEventListener("click", ()=>{
        if(skill.disabled) return;
        openImage(skill);
      });

      img.onerror = ()=>{
        img.title = "الصورة غير موجودة. تأكدي من مجلد image واسم الملف.";
      };

      imgWrap.appendChild(img);
      card.appendChild(imgWrap);

      const actions = document.createElement("div");
      actions.className = "actions";

      const vBtn = document.createElement("button");
      vBtn.className = "btn btnVideo";
      vBtn.type = "button";
      vBtn.textContent = "🎬 فيديو";
      vBtn.addEventListener("click", ()=>{
        if(skill.disabled) return;
        openVideo(skill);
      });

      const qBtn = document.createElement("button");
      qBtn.className = "btn btnQuiz";
      qBtn.type = "button";
      qBtn.textContent = "📝 اختبار";
      qBtn.addEventListener("click", ()=>{
        if(skill.disabled) return;
        openQuiz(skill);
      });

      actions.appendChild(vBtn);
      actions.appendChild(qBtn);
      card.appendChild(actions);

      gridEl.appendChild(card);
    });
  }

  function showModal(title, bodyHtml){
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  }
  function hideModal(){
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden","true");
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", (e)=>{ if(e.target===overlay) hideModal(); });
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape" && overlay.classList.contains("show")) hideModal(); });

  function openImage(skill){
    showModal(skill.title, `
      <div style="border-radius:18px; overflow:hidden; border:1px solid rgba(0,0,0,.10); background:#f6f7ff;">
        <img src="${skill.img}" alt="صورة المهارة" style="width:100%; height:auto; display:block;">
      </div>
      <div class="msg">اضغط × للإغلاق</div>
    `);
  }

  function openVideo(skill){
    const vids = (skill.videos || []).filter(v => v && v.includes("http"));

    if(vids.length > 1){
      showModal(`🎬 اختر فيديو: ${skill.title}`, `
        <div class="qCard">
          <p class="qText">اختر الفيديو الذي تريد مشاهدته</p>
          <div class="pickVideos">
            ${vids.map((v,i)=>`<button type="button" onclick="__openOneVideo('${encodeURIComponent(v)}','${skill.title.replace(/'/g,"")}')">🎬 فيديو ${i+1}</button>`).join("")}
          </div>
          <div class="msg">سيتم فتح الفيديو داخل نفس النافذة</div>
        </div>
      `);
      return;
    }

    const url = vids[0];
    const embed = youtubeToEmbed(url);
    showModal(`🎬 فيديو: ${skill.title}`, `
      <div class="videoBox">
        <iframe src="${embed}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="msg">إذا لم يعمل الفيديو، افتحه من يوتيوب: <a href="${url}" target="_blank">فتح الرابط</a></div>
    `);
  }

  window.__openOneVideo = function(encUrl, title){
    const url = decodeURIComponent(encUrl);
    const embed = youtubeToEmbed(url);
    showModal(`🎬 فيديو: ${title}`, `
      <div class="videoBox">
        <iframe src="${embed}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="msg">إذا لم يعمل الفيديو، افتحه من يوتيوب: <a href="${url}" target="_blank">فتح الرابط</a></div>
    `);
  }

  function openQuiz(skill){
    ensureAudio();
    const questions = JSON.parse(JSON.stringify(GENERAL_QUIZ));

    let idx = 0;
    let score = 0;
    let locked = false;

    const render = () => {
      const q = questions[idx];
      const html = `
        <div class="quizTop">
          <div class="badge">المهارة: ${skill.title}</div>
          <div class="progress">السؤال ${idx+1} / ${questions.length} — درجتك: ${score}</div>
        </div>

        <div class="qCard">
          <p class="qText">${q.q}</p>
          <div class="opts">
            ${q.options.map((t,i)=>`<button class="opt" data-i="${i}" type="button">${t}</button>`).join("")}
          </div>
          <div class="msg" id="msg">اختر الإجابة</div>
        </div>
      `;
      showModal(`📝 اختبار: ${skill.title}`, html);

      const btns = [...modalBody.querySelectorAll(".opt")];
      const msg = modalBody.querySelector("#msg");
      btns.forEach(b=>{
        b.addEventListener("click", ()=>{
          if(locked) return;
          locked = true;

          const chosen = Number(b.getAttribute("data-i"));
          btns.forEach(x=>x.classList.add("disabled"));

          btns.forEach(x=>{
            const i = Number(x.getAttribute("data-i"));
            if(i === q.correct) x.classList.add("good");
          });

          if(chosen === q.correct){
            score++;
            msg.textContent = "✅ أحسنت! إجابة صحيحة";
            soundCorrect();
          }else{
            b.classList.add("bad");
            msg.textContent = "❌ حاول مرة أخرى في السؤال القادم";
            soundWrong();
          }

          setTimeout(()=>{
            idx++;
            locked = false;
            if(idx < questions.length){
              render();
            }else{
              const encouragement =
                score === 5 ? "🏆 ممتاز جدًا! أنت بطل!" :
                score >= 3 ? "🌟 رائع! أكمل التدريب لتصبح الأفضل." :
                             "💪 لا بأس! أعد المحاولة وستتحسن.";
              showModal(`✅ نتيجة اختبار: ${skill.title}`, `
                <div class="qCard">
                  <p class="qText">درجتك: <b>${score} / ${questions.length}</b></p>
                  <p class="msg">${encouragement}</p>
                  <div style="display:flex; gap:10px; margin-top:12px;">
                    <button class="btn btnQuiz" type="button" id="retry">🔁 إعادة الاختبار</button>
                    <button class="btn btnVideo" type="button" id="closeIt">إغلاق</button>
                  </div>
                </div>
              `);
              modalBody.querySelector("#retry").addEventListener("click", ()=> openQuiz(skill));
              modalBody.querySelector("#closeIt").addEventListener("click", hideModal);
            }
          }, 750);
        });
      });
    };

    render();
  }

  renderPills();
  renderCards();
</script>
</body>
</html>
