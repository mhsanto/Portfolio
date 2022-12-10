// follow eyeball
let eyeBall = document.getElementsByClassName("ball");

document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 1; i++) {
    eyeBall[i].style.left = x;
    eyeBall[i].style.top = y;
    eyeBall[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};
const panels = document.querySelectorAll(".panel");

/* Adding an event listener to each panel. When the panel is clicked, it will remove the active class
from all the panels and then add the active class to the panel that was clicked. */
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

/**
 * It removes the active class from all the panels.
 */
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// custom cursor
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });

}

