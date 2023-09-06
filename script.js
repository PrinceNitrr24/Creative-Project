Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./cover.mp4", "./1.mp4", "./2.mp4"],
});
Shery.makeMagnet("#magnet");

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "Power1.easeInOut", // Specify an appropriate easing function here
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 2,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

// Shery.hoverWithMediaCircle(".hvr1", {
//   images:["./creative..jpg"]
// });











// Automatic show popup after 2seconds of page load
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";

    //add some timedelay to show popup
  }, 2000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});
