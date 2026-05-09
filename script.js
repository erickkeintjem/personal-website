(() => {
  const el = document.querySelector("#typing");
  if (!el) return;

  const strings = [
    "Undergraduate Student",
    "Cyber Security Enthusiast",
    "AI Explorer",
    "Blockchain Learner",
    "Gamer & Music Lover",
  ];

  let strIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 50;
  const backSpeed = 30;
  const pauseAfterTyped = 1000;

  function tick() {
    const current = strings[strIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex >= current.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterTyped);
        return;
      }

      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex <= 0) {
        isDeleting = false;
        strIndex = (strIndex + 1) % strings.length;
        setTimeout(tick, typeSpeed);
        return;
      }

      setTimeout(tick, backSpeed);
    }
  }

  tick();
})();

(() => {
  const nodes = Array.from(document.querySelectorAll("[data-aos]"));
  if (!nodes.length) return;

  nodes.forEach((node) => {
    const anim = node.getAttribute("data-aos") || "fade-up";
    const delay = parseInt(node.getAttribute("data-aos-delay") || "0", 10);

    node.style.opacity = "0";
    node.style.transformOrigin = "center";

    if (anim === "fade-left") {
      node.style.transform = "translateX(-25px)";
    } else if (anim === "fade-right") {
      node.style.transform = "translateX(25px)";
    } else {
      node.style.transform = "translateY(25px)";
    }

    node.style.transition = `opacity 700ms ease, transform 700ms ease`;
    node.style.willChange = "opacity, transform";

    if (delay > 0) {
      node.style.transitionDelay = `${delay}ms`;
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const node = entry.target;
        node.style.opacity = "1";
        node.style.transform = "translateX(0) translateY(0)";
        io.unobserve(node);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  nodes.forEach((node) => io.observe(node));
})();
