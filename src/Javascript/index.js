import LocomotiveScroll from "locomotive-scroll";
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  repeat: true,
  smooth: true,
  lerp: 0.1,
  class: "is-reveal",
  getSpeed: true,

  multiplier: 0.6,
  tablet: {
    smooth: true,
    touchMultiplier: 2,
    direction: "vertical",
    gestureDirection: "vertical",
    breakpoint: 1024,
  },
  smartphone: {
    touchMultiplier: 3,
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
  },
});