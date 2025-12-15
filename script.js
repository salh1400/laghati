// ===============================
// التحكم بالتنقل بين أقسام المنصة
// ===============================
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = "block";
  }
}

// ===============================
// تفعيل أول قسم عند فتح الصفحة
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  showSection("home");
});

// ===============================
// أسئلة تفاعلية (نموذج بسيط)
// ===============================
function checkAnswer(questionId, correctAnswer) {
  const options = document.getElementsByName(questionId);
  let selected = null;

  options.forEach(option => {
    if (option.checked) {
      selected = option.value;
    }
  });

  if (selected === null) {
    alert("من فضلك اختر إجابة");
    return;
  }

  if (selected === correctAnswer) {
    alert("إجابة صحيحة ✅");
  } else {
    alert("إجابة خاطئة ❌ حاول مرة أخرى");
  }
}

// ===============================
// لعبة مطابقة بسيطة (قابلة للتطوير)
// ===============================
let selectedCard = null;

function selectCard(card) {
  if (!selectedCard) {
    selectedCard = card;
    card.classList.add("active");
  } else {
    if (selectedCard.dataset.value === card.dataset.value) {
      selectedCard.classList.add("matched");
      card.classList.add("matched");
    } else {
      selectedCard.classList.remove("active");
    }
    selectedCard = null;
  }
}