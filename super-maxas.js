const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const scrollbar = document.querySelector(".scrollbar");
const sections = [...document.querySelectorAll("main section[id]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeMenu() {
  if (!navLinks || !menuBtn) {
    return;
  }

  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!navLinks || !menuBtn) {
    return;
  }

  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
}

function updateScrollBar() {
  if (!scrollbar) {
    return;
  }

  const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollMax > 0 ? (window.scrollY / scrollMax) * 100 : 0;
  scrollbar.style.width = `${progress}%`;
}

function syncActiveLink() {
  const links = [...document.querySelectorAll(".nav-links a")];

  if (!links.length) {
    return;
  }

  const path = window.location.pathname.replace(/\/+$/, "");
  const activeRoute = document.body.dataset.page || (path ? path.split("/").pop() : "home");

  links.forEach((link) => {
    const route = link.dataset.route || "home";
    const isActive = route === activeRoute;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function syncSectionActiveLink() {
  if (!sections.length) {
    return;
  }

  const links = [...document.querySelectorAll(".nav-links a")];
  const fromTop = window.scrollY + 160;
  let current = sections[0].id;

  for (const section of sections) {
    if (fromTop >= section.offsetTop) {
      current = section.id;
    }
  }

  links.forEach((link) => {
    if (!link.getAttribute("href")?.startsWith("#")) {
      return;
    }

    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", toggleMenu);
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

document.querySelectorAll(".interactive, .tilt").forEach((node) => {
  node.addEventListener("mousemove", (event) => {
    const rect = node.getBoundingClientRect();
    const pointerX = ((event.clientX - rect.left) / rect.width) * 100;
    const pointerY = ((event.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--pointer-x", `${pointerX}%`);
    node.style.setProperty("--pointer-y", `${pointerY}%`);

    if (reducedMotion) {
      return;
    }

    const rotateY = (pointerX - 50) / 10;
    const rotateX = (50 - pointerY) / 10;
    node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  node.addEventListener("mouseleave", () => {
    node.style.transform = "";
  });
});

window.addEventListener("scroll", () => {
  updateScrollBar();
  syncSectionActiveLink();
});

if (!sections.length) {
  syncActiveLink();
}

updateScrollBar();
syncActiveLink();
syncSectionActiveLink();

if (!reducedMotion) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    document.body.style.setProperty("--pointer-x", `${x}%`);
    document.body.style.setProperty("--pointer-y", `${y}%`);
  });
}
