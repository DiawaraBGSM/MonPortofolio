// ============================
// 1. NAVBAR - ombre au scroll
// ============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ============================
// 2. ANIMATION FADE-IN AU SCROLL
// ============================

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Délai progressif pour un effet cascade
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach((el) => {
  observer.observe(el);
});


// ============================
// 3. LIEN ACTIF DANS LA NAVBAR
// ============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const navToggle = document.querySelector(".nav-toggle");
const navLinksList = document.querySelector(".nav-links");

if (navToggle && navLinksList) {
  navToggle.addEventListener("click", () => {
    navLinksList.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksList.classList.remove("open");
    });
  });
}

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#1d6ae5";
    }
  });
});


// ============================
// 4. FORMULAIRE DE CONTACT
// ============================

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom     = document.getElementById("nom").value.trim();
    const email   = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom && email && message) {
      // Retour visuel sur le bouton
      const btn = form.querySelector(".btn-submit");
      btn.textContent = "Message envoye ! Merci.";
      btn.style.background = "#dbeafe";
      btn.style.color = "#1a3a6e";
      btn.disabled = true;

      // Réinitialiser après 3 secondes
      setTimeout(() => {
        form.reset();
        btn.textContent = "Envoyer le message 🚀";
        btn.style.background = "";
        btn.style.color = "";
        btn.disabled = false;
      }, 3000);

    } else {
      alert("Veuillez remplir tous les champs avant d'envoyer. 😊");
    }
  });
}

const qrCodeImg = document.getElementById("qr-code-img");
if (qrCodeImg) {
  const currentUrl = window.location.href;
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;
}


// ============================
// 5. MESSAGE CONSOLE
// ============================

console.log("Portfolio d'Aminata Diawara charge avec succes !");
console.log("Design : Bleu & Blanc | HTML + CSS + JavaScript");
