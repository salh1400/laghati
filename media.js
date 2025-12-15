// =====================================
// ملف الوسائط: صور + فيديوهات المنصة
// =====================================

// ✅ 1) مسارات الصور (غيّري الأسماء هنا لتطابق أسماء صورك داخل مجلد images)
const IMAGES = {
  banner: "assets/images/banner.png",
  logo: "assets/images/logo.png",

  // أمثلة لصور مهارات/لوحات (عدّلي/زيدي حسب صورك)
  skill1: "assets/images/skill-01.png",
  skill2: "assets/images/skill-02.png",
  skill3: "assets/images/skill-03.png",
  skill4: "assets/images/skill-04.png"
};

// ✅ 2) مسارات الفيديوهات (ضعي الفيديوهات داخل مجلد videos)
const VIDEOS = {
  intro: "assets/videos/intro.mp4",
  lesson1: "assets/videos/lesson-01.mp4",
  lesson2: "assets/videos/lesson-02.mp4"
};

// =====================================
// دوال مساعدة لعرض الصور والفيديوهات
// =====================================

function setImageById(elementId, imagePath) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.src = imagePath;
}

function setVideoById(videoId, videoPath) {
  const el = document.getElementById(videoId);
  if (!el) return;
  el.src = videoPath;
  el.load();
}

// =====================================
// تشغيل تلقائي عند فتح الصفحة (اختياري)
// يتطلب وجود عناصر بالـ ID التالية في HTML:
//   img#bannerImg  img#logoImg
//   video#introVideo
// =====================================
document.addEventListener("DOMContentLoaded", () => {
  // صور
  setImageById("bannerImg", IMAGES.banner);
  setImageById("logoImg", IMAGES.logo);

  // فيديو
  setVideoById("introVideo", VIDEOS.intro);
});