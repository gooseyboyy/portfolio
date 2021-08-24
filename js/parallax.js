$(".parallax-init").mousemove(function(e) {
  parallaxIt(e, ".parallax-pos-fast", 100);
  parallaxIt(e, ".parallax-pos-fast-alt", 80);
  parallaxIt(e, ".parallax-pos-normal", 60);
  parallaxIt(e, ".parallax-pos-normal-alt", 40);
  parallaxIt(e, ".parallax-pos-slow", 20);
  parallaxIt(e, ".parallax-pos-slow-alt", 5);
  parallaxIt(e, ".parallax-neg-fast", -100);
  parallaxIt(e, ".parallax-neg-fast-alt", -80);
  parallaxIt(e, ".parallax-neg-normal", -60);
  parallaxIt(e, ".parallax-neg-normal-alt", -40);
  parallaxIt(e, ".parallax-neg-slow", -20);
  parallaxIt(e, ".parallax-neg-slow-alt", -10);
});

function parallaxIt(e, target, movement) {
  var $this = $("#header-section");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
