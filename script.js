function lenisScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
lenisScroll();

function mouseFlwr() {
  let cursor = document.querySelector("#mousefollower");
  let onVidCon = document.querySelector(".showreel-con");
  let vidSelf = document.querySelector("#reel--show");
  const cursorExpand = document.querySelectorAll(".c--expand");
  document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.x,
      top: dets.y,
    });
  });

  onVidCon.addEventListener("mouseenter", () => {
    cursor.innerHTML = "sound off";
    cursor.style.width = "90px";
    cursor.style.height = "25px";
    cursor.style.borderRadius = "100px";
  });

  onVidCon.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    cursor.style.width = "17px";
    cursor.style.height = "17px";
    cursor.style.borderRadius = "100%";
  });

  onVidCon.addEventListener("click", () => {
    cursor.innerHTML = vidSelf.muted ? "sound on" : "sound off";
    vidSelf.muted = !vidSelf.muted;
  });

  cursorExpand.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.height = "28px";
      cursor.style.width = "28px";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.height = "17px";
      cursor.style.width = "17px";
    });
  });
}
mouseFlwr();

function heroAnim() {
  let heroAnimELEM1 = document.querySelector(
    ".window1_t-content .large-hero--elem1"
  );
  let heroAnimELEM2 = document.querySelector(
    ".window1_t-content .large-hero--elem2"
  );
  let showReel = document.querySelector(".showreel-con");
  let scrollerOf = document.querySelector("#screen-main");
  gsap.to(heroAnimELEM1, {
    x: -110,
    scrollTrigger: {
      trigger: heroAnimELEM1,
      start: "top 30%",
      end: "top -50%",
      scrub: 1.8,
    },
  });
  gsap.to(heroAnimELEM2, {
    x: 110,
    scrollTrigger: {
      trigger: heroAnimELEM1,
      start: "top 30%",
      end: "top -50%",
      scrub: 1.8,
    },
  });
  gsap.to(showReel, {
    width: "87vw",
    scrollTrigger: {
      trigger: heroAnimELEM1,
      start: "top 30%",
      end: "top -50%",
      scrub: 1.8,
    },
  });
}
heroAnim();

function duoTrayAnimation_imageChanger() {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".facets");
    const images = document.querySelectorAll(".brand_service-img");

    elements.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        images.forEach((img) =>
          gsap.to(img, {
            opacity: 0,
            duration: 0.2,
          })
        );
        gsap.to(images[index], {
          opacity: 1,
          duration: 0.2,
          ease: "linear",
          // ease: 'easeInOut'
        });
      });
    });
  });
}
duoTrayAnimation_imageChanger();

function changeBackground_duoTray() {
  // change bgcolor duo tray
  let changeOn = document.querySelector("#screen-main");
  let triggerElem = document.querySelector(".duo-headings-container");
  gsap.to(changeOn, {
    backgroundColor: "#fefcff",
    color: "#000",
    scrollTrigger: {
      trigger: triggerElem,
      scroller: "body",
      start: "bottom 100%",
      end: "top 0%",
      scrub: true,
    },
  });
}
changeBackground_duoTray();

function trayImageParallax() {
  // duo tray images
  gsap.utils.toArray(".flex-con-rght").forEach((container) => {
    const img = container.querySelectorAll(".brand_service-img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });
    tl.fromTo(
      img,
      {
        yPercent: -10,
        ease: "none",
      },
      {
        yPercent: 10,
        ease: "none",
      }
    );
  });
}
trayImageParallax();

function cardParallax() {
  gsap.utils.toArray(".media-con").forEach((container) => {
    const img = container.querySelectorAll(".card-media");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });
    tl.fromTo(
      img,
      {
        yPercent: -15,
        ease: "none",
      },
      {
        yPercent: 15,
        ease: "none",
      }
    );
  });
}
cardParallax();

function changeBackground_bottom() {
  let changeOn = document.querySelectorAll("#main-after");
  let triggerElem = document.querySelector(".advr-tray--title");
  gsap.to(changeOn, {
    backgroundColor: "#0f0d0d",
    color: "#fff",
    scrollTrigger: {
      trigger: triggerElem,
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      // markers: true,
    },
  });
}
changeBackground_bottom();

function hover_request() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;
    elem.addEventListener("mousemove", function (details) {
      let diff = details.clientY - elem.getBoundingClientRect().top;
      diffrot = details.clientX - rotate;
      rotate = details.clientX;
      gsap.to(elem.querySelector(".elem img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0),
      });
    });

    // mouse leave --------------------------
    elem.addEventListener("mouseleave", function (details) {
      gsap.to(elem.querySelector(".elem img"), {
        opacity: 0,
        ease: Power3,
      });
    });
  });
}
hover_request();