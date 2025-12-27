

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true, 
          
          },
        }
      );
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    if (!items.length) return; 

    const observer = new IntersectionObserver((entries) =>
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = [...items].indexOf(entry.target);
            entry.target.style.transitionDelay = `${ 0.15}s`;
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        })
    , { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});







document.addEventListener("DOMContentLoaded", () => {
  const Rlabels = document.querySelectorAll(".t-select-textarea-label");

  if (!Rlabels.length) return;

  Rlabels.forEach((label) => {
    const textarea = label.querySelector("textarea");
    const startCount = label.querySelector(".t-start-count");
    const countWrap = label.querySelector(".t-input-count");
    const MAX_CHARS = 200;

    if (!textarea || !startCount || !countWrap) return;

    textarea.addEventListener("focus", () => {
      label.classList.add("active");
    });

    textarea.addEventListener("blur", () => {
      label.classList.remove("active");
    });

    textarea.addEventListener("input", () => {
      const chars = textarea.value.length;

      startCount.textContent = chars;

      if (chars > MAX_CHARS) {
        countWrap.classList.add("limit");
      } else {
        countWrap.classList.remove("limit");
      }
    });
  });
});


  const Ttrack = document.querySelector(".t-partners-track");
  const Titems = gsap.utils.toArray(".t-partners-track > *");

  Titems.forEach((item) => {
    const clone = item.cloneNode(true);
    Ttrack.appendChild(clone);
  });

  const totalWidth = Ttrack.scrollWidth / 2;

  gsap.to(Ttrack, {
    x: -totalWidth,
    duration: 50,   
    ease: "none",
    repeat: -1,     
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth)
    }
  });




  $(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);
  
let secondLink = $("#accordion .link").eq(1);
let secondSub = secondLink.next(".submenu");

secondLink.addClass("open");
secondSub.show();
});

