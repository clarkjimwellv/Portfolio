function goProjects(){ document.getElementById('projects').scrollIntoView({behavior:'smooth'}); }



const items = document.querySelectorAll('.fade, .service-card, .about-info div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

    
      if (entry.target.classList.contains('fade')) {
        entry.target.classList.add('show');
      }

      
      else {
        const index = [...items].indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 120); 
      }

    }

  });
}, {
  threshold: 0.15
});

items.forEach(el => observer.observe(el));
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

function showTab(tabId) {

  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => {
    tab.style.opacity = "0";
    tab.style.transform = "translateY(10px)";
    setTimeout(() => {
      tab.classList.remove("active");
    }, 150);
  });

  buttons.forEach(btn => btn.classList.remove("active"));

  const activeTab = document.getElementById(tabId);

  setTimeout(() => {
    activeTab.classList.add("active");
    activeTab.style.opacity = "1";
    activeTab.style.transform = "translateY(0)";
  }, 150);

  event.target.classList.add("active");
}


const particleContainer = document.querySelector(".particles");

function createParticles(count) {

  for (let i = 0; i < count; i++) {

    const span = document.createElement("span");

    const size = Math.random() * 3 + 1;
    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;

    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.left = posX + "px";
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = delay + "s";

    particleContainer.appendChild(span);
  }
}

createParticles(60); 

document.querySelectorAll(".service-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });

});
