export function initSuperMaxas() {
  if (typeof document === 'undefined') return;
  // Debug badge to confirm script execution in the browser
  try {
    let badge = document.getElementById('super-maxas-status');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'super-maxas-status';
      badge.style.position = 'fixed';
      badge.style.right = '12px';
      badge.style.bottom = '12px';
      badge.style.padding = '6px 10px';
      badge.style.background = 'rgba(0,0,0,0.7)';
      badge.style.color = 'white';
      badge.style.borderRadius = '6px';
      badge.style.zIndex = 9999;
      badge.style.fontSize = '12px';
      badge.style.fontFamily = 'monospace';
      badge.textContent = 'super-maxas: initializing...';
      document.body.appendChild(badge);
    }
  } catch (e) {
    // ignore DOM errors when not mounted
  }
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.getElementById("menuBtn");
  const scrollbar = document.querySelector(".scrollbar");
  const sections = [...document.querySelectorAll("main section[id]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  console.log('initSuperMaxas: reducedMotion=', reducedMotion);

  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!navLinks || !menuBtn) return;
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  }

  function updateScrollBar() {
    if (!scrollbar) return;
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollMax > 0 ? (window.scrollY / scrollMax) * 100 : 0;
    scrollbar.style.width = `${progress}%`;
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", toggleMenu);
    navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => { if (window.innerWidth > 860) closeMenu(); });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

  // mark initialized
  try {
    const badge = document.getElementById('super-maxas-status');
    if (badge) badge.textContent = reducedMotion ? 'super-maxas: reduced-motion' : 'super-maxas: active';
  } catch (e) {}

  const prefersCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const isTouch =
    prefersCoarsePointer ||
    ("ontouchstart" in window && navigator.maxTouchPoints > 0);

  document.querySelectorAll(".interactive, .tilt").forEach((node) => {
    // Keep CSS-driven/tap effects responsive, but avoid mousemove tilt on touch/coarse devices.
    if (!isTouch) {
      node.addEventListener("mousemove", (event) => {
        const rect = node.getBoundingClientRect();
        const pointerX = ((event.clientX - rect.left) / rect.width) * 100;
        const pointerY = ((event.clientY - rect.top) / rect.height) * 100;
        node.style.setProperty("--pointer-x", `${pointerX}%`);
        node.style.setProperty("--pointer-y", `${pointerY}%`);

        if (reducedMotion) return;
        const rotateY = (pointerX - 50) / 10;
        const rotateX = (50 - pointerY) / 10;
        node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });
      node.addEventListener("mouseleave", () => {
        node.style.transform = "";
      });
    }
  });


  window.addEventListener("scroll", () => { updateScrollBar(); });
  updateScrollBar();
}
