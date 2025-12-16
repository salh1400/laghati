// skills.js  (مجلد الصور: image/)
window.SKILLS = {
  synonyms: {
    title: "مرادفات",
    image: "skill_synonyms.png",
    video: "https://www.youtube.com/results?search_query=مرادفات+للأطفال+كرتون",
    quiz: [
      { q:"مرادف (سعيد) هو:", opts:["فرِح","حزين","متعب"], ans:0 },
      { q:"مرادف (كبير) هو:", opts:["ضخم","صغير","خفيف"], ans:0 },
      { q:"مرادف (جميل) هو:", opts:["فاتن","قبيح","ضعيف"], ans:0 },
    ],
  },

  text_parts: {
    title: "عناصر النص الأساسية",
    image: "skill_text_parts.png",
    video: "https://www.youtube.com/results?search_query=عناصر+القصة+للأطفال+كرتون",
    quiz: [
      { q:"من عناصر النص/القصة:", opts:["الشخصيات","التنوين","حروف المد"], ans:0 },
      { q:"(الزمان) يعني:", opts:["متى حدثت القصة","أين حدثت القصة","من الكاتب"], ans:0 },
      { q:"(المكان) يعني:", opts:["أين حدثت القصة","كم كلمة بالنص","نوع الفعل"], ans:0 },
    ],
  },

  active_passive: {
    title: "اسم الفاعل واسم المفعول",
    image: "skill_active_passive.png",
    video: "https://www.youtube.com/results?search_query=اسم+الفاعل+واسم+المفعول+للأطفال",
    quiz: [
      { q:"اسم الفاعل من (كتب):", opts:["كاتب","مكتوب","كتاب"], ans:0 },
      { q:"اسم المفعول من (أكل):", opts:["آكل","مأكول","أكل"], ans:1 },
      { q:"اسم الفاعل يدل على:", opts:["من قام بالفعل","ما وقع عليه الفعل","حرف"], ans:0 },
    ],
  },

  word_types: {
    title: "أقسام الكلمة (اسم/فعل/حرف)",
    image: "skill_word_types.png",
    video: "https://www.youtube.com/results?search_query=أقسام+الكلمة+اسم+فعل+حرف+للأطفال+كرتون",
    quiz: [
      { q:"(ذهبَ) نوعها:", opts:["اسم","فعل","حرف"], ans:1 },
      { q:"(في) نوعها:", opts:["اسم","فعل","حرف"], ans:2 },
      { q:"(مدرسة) نوعها:", opts:["اسم","فعل","حرف"], ans:0 },
    ],
  },

  gender: {
    title: "المذكر والمؤنث",
    image: "skill_gender.png",
    video: "https://www.youtube.com/results?search_query=المذكر+والمؤنث+للأطفال+كرتون",
    quiz: [
      { q:"(طالبة) كلمة:", opts:["مذكر","مؤنث","فعل"], ans:1 },
      { q:"(ولد) كلمة:", opts:["مذكر","مؤنث","حرف"], ans:0 },
      { q:"علامة التأنيث في (معلمة) هي:", opts:["ة","ا","و"], ans:0 },
    ],
  },

  compare: {
    title: "أوجه الشبه والاختلاف",
    image: "skill_compare.png",
    video: "https://www.youtube.com/results?search_query=أوجه+الشبه+والاختلاف+للأطفال",
    quiz: [
      { q:"وجه الشبه يعني:", opts:["شيء مشترك","شيء مختلف","علامة ترقيم"], ans:0 },
      { q:"الاختلاف يعني:", opts:["فرق","تشابه","ترادف"], ans:0 },
      { q:"القطة والكلب يشتركان في أنهما:", opts:["حيوانان","جمادان","حرفان"], ans:0 },
    ],
  },

  sentence: {
    title: "الجملة المفيدة",
    image: "skill_sentence.png",
    video: "https://www.youtube.com/results?search_query=الجملة+المفيدة+للأطفال+كرتون",
    quiz: [
      { q:"الجملة المفيدة هي التي:", opts:["تفيد معنى","لا معنى لها","حرف واحد"], ans:0 },
      { q:"اختر جملة مفيدة:", opts:["في المدرسة","ذهبَ خالدٌ","إلى"], ans:1 },
      { q:"(الولدُ يلعبُ) جملة:", opts:["مفيدة","غير مفيدة","علامة ترقيم"], ans:0 },
    ],
  },

  title: {
    title: "عنوان النص",
    image: "skill_title.png",
    video: "https://www.youtube.com/results?search_query=عنوان+النص+للأطفال",
    quiz: [
      { q:"العنوان المناسب للنص يكون:", opts:["معبّرًا عن الفكرة","طويلًا جدًا","لا علاقة له"], ans:0 },
      { q:"نص عن النظافة عنوان مناسب:", opts:["رحلة للبحر","النظافة سر الصحة","الحديقة"], ans:1 },
      { q:"أفضل عنوان هو الذي:", opts:["يلخص الفكرة","يكرر كل الجمل","يذكر أسماء الجميع"], ans:0 },
    ],
  },

  punctuation: {
    title: "أدوات الترقيم",
    image: "skill_punctuation.png",
    video: "https://www.youtube.com/results?search_query=علامات+الترقيم+للأطفال+كرتون",
    quiz: [
      { q:"علامة الاستفهام هي:", opts:["؟","!","."], ans:0 },
      { q:"نضع (.) في نهاية:", opts:["جملة خبرية","سؤال","تعجب"], ans:0 },
      { q:"علامة التعجب هي:", opts:["!","؟","،"], ans:0 },
    ],
  },

  verb_types: {
    title: "أنواع الفعل (ماضٍ/مضارع/أمر)",
    image: "skill_verb-types.png",
    video: "https://www.youtube.com/results?search_query=أنواع+الفعل+للأطفال+كرتون",
    quiz: [
      { q:"(كتبَ) فعل:", opts:["ماضٍ","مضارع","أمر"], ans:0 },
      { q:"(يكتبُ) فعل:", opts:["ماضٍ","مضارع","أمر"], ans:1 },
      { q:"(اكتبْ) فعل:", opts:["ماضٍ","مضارع","أمر"], ans:2 },
    ],
  },

  madd: {
    title: "حروف المد",
    image: "skill_madd-letters.png",
    video: "https://www.youtube.com/results?search_query=حروف+المد+للأطفال+كرتون",
    quiz: [
      { q:"حروف المد هي:", opts:["ا و ي","ب ت ث","ل م ن"], ans:0 },
      { q:"المد بالألف يكون بعد:", opts:["فتحة","ضمة","كسرة"], ans:0 },
      { q:"المد بالياء يكون بعد:", opts:["كسرة","فتحة","ضمة"], ans:0 },
    ],
  },

  taa_skills: {
    title: "التاء المربوطة والتاء المفتوحة والهاء",
    image: "skill_taa-skills.png",
    video: "https://www.youtube.com/results?search_query=التاء+المربوطة+والتاء+المفتوحة+والهاء+للأطفال",
    quiz: [
      { q:"(مدرسة) تنتهي بـ:", opts:["تاء مربوطة","تاء مفتوحة","هاء"], ans:0 },
      { q:"(بيت) تنتهي بـ:", opts:["تاء مربوطة","تاء مفتوحة","هاء"], ans:1 },
      { q:"(وجه) تنتهي بـ:", opts:["تاء مربوطة","تاء مفتوحة","هاء"], ans:2 },
    ],
  },

  tanween: {
    title: "التنوين",
    image: "skill_tanween.png",
    video: "https://www.youtube.com/results?search_query=التنوين+للأطفال+كرتون",
    quiz: [
      { q:"التنوين يأتي غالبًا في آخر:", opts:["الأسماء","الأفعال","الحروف"], ans:0 },
      { q:"اختر كلمة فيها تنوين:", opts:["كتابٌ","يكتبُ","في"], ans:0 },
      { q:"(قلمًا) فيه:", opts:["تنوين فتح","تنوين ضم","تنوين كسر"], ans:0 },
    ],
  },

  sun_moon_lam: {
    title: "اللام الشمسية واللام القمرية",
    image: "skill_sun-moon-lam.png",
    video: "https://www.youtube.com/results?search_query=اللام+الشمسية+واللام+القمرية+للأطفال+كرتون",
    quiz: [
      { q:"في (الشمس) اللام:", opts:["شمسية","قمرية","لا توجد"], ans:0 },
      { q:"في (القمر) اللام:", opts:["قمرية","شمسية","لا توجد"], ans:0 },
      { q:"نُدغم اللام مع:", opts:["الحروف الشمسية","حروف المد","علامات الترقيم"], ans:0 },
    ],
  },

  exception: {
    title: "أسلوب الاستثناء",
    image: "skill_exception.png",
    video: "https://www.youtube.com/results?search_query=أسلوب+الاستثناء+للأطفال",
    quiz: [
      { q:"أداة الاستثناء المشهورة:", opts:["إلا","ثم","لن"], ans:0 },
      { q:"اختر جملة فيها استثناء:", opts:["نجح الجميع إلا طالبًا","ذهب أحمد للمدرسة","الولد مجتهد"], ans:0 },
      { q:"ما قبل (إلا) يسمى:", opts:["المستثنى منه","المستثنى","خبر"], ans:0 },
    ],
  },

  number: {
    title: "المفرد والجمع",
    image: "skill_number.png",
    video: "https://www.youtube.com/results?search_query=المفرد+والجمع+للأطفال+كرتون",
    quiz: [
      { q:"جمع (كتاب) هو:", opts:["كتب","كاتِب","مكتوب"], ans:0 },
      { q:"مفرد (أقلام) هو:", opts:["قلم","قلام","قليمة"], ans:0 },
      { q:"جمع (طالب) هو:", opts:["طلاب","طالبة","طلب"], ans:0 },
    ],
  },

  main_idea: {
    title: "الفكرة الرئيسية",
    image: "skill_main_idea.png",
    video: "https://www.youtube.com/results?search_query=الفكرة+الرئيسية+للأطفال",
    quiz: [
      { q:"الفكرة الرئيسية تعني:", opts:["أهم ما يدور حوله النص","عدد الكلمات","عنوان الدرس فقط"], ans:0 },
      { q:"نص عن النظافة.. الفكرة الرئيسية:", opts:["أهمية النظافة","لعبة كرة","السفر"], ans:0 },
      { q:"نختار الفكرة الرئيسية من:", opts:["تكرار المعنى والأفكار","شكل الخط","لون الصفحة"], ans:0 },
    ],
  },

  nakira_ma3rifa: {
    title: "النكرة والمعرفة",
    image: "skill_nakira-ma3rifa.png",
    video: "https://www.youtube.com/results?search_query=النكرة+والمعرفة+للأطفال",
    quiz: [
      { q:"(كتابٌ) كلمة:", opts:["نكرة","معرفة","فعل"], ans:0 },
      { q:"(الكتابُ) كلمة:", opts:["معرفة","نكرة","حرف"], ans:0 },
      { q:"علامة المعرفة الأشهر:", opts:["الـ","تنوين","ياء"], ans:0 },
    ],
  },

  antonyms: {
    title: "أضداد",
    image: "skill_antonyms.png",
    video: "https://www.youtube.com/results?search_query=الأضداد+للأطفال+كرتون",
    quiz: [
      { q:"ضد (طويل) هو:", opts:["قصير","كبير","سريع"], ans:0 },
      { q:"ضد (حار) هو:", opts:["بارد","جميل","صغير"], ans:0 },
      { q:"ضد (مضيء) هو:", opts:["مظلم","قوي","سهل"], ans:0 },
    ],
  },
};
