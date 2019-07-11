// import rellax from 'rellax';

(function (html) {
  html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);

const el = document.querySelector('.menu-item-about'),
      html = document.documentElement,
      content = document.querySelector('.main');

el.addEventListener('click', function (event) {
  event.preventDefault();
  html.classList.toggle('modal-active');

  if ( html.classList.contains('modal-active')) {
    content.addEventListener('click', function (event) {
      html.classList.remove('modal-active');
    });
  }

});


(function(){
  var top         = html.scrollTop,
      layers      = document.querySelectorAll('.parallax'), i,
      breakpoint  = 0,
      speeds      = [];

    for (i = 0; i < layers.length; ++i) {
      // console.log(layers[i]);
      speeds[i] = layers[i].getAttribute('data-speed') || 100;
    }

    window.addEventListener("scroll", function(){
    // if(html.clientWidth > breakpoint){
        top = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

        for(var i in speeds) {
          layers[i].style.transform = "translate3d(0," + (-top * (speeds[i] / 100)) + "px,0)";
          layers[i].style.msTransform = "translate3d(0," + (-top * (speeds[i] / 100)) + "px,0)";
          layers[i].style.MozTransform = "translate3d(0," + (-top * (speeds[i] / 100)) + "px,0)";
          layers[i].style.OTransform = "translate3d(0," + (-top * (speeds[i] / 100)) + "px,0)";
          layers[i].style.webkitTransform = "translate3d(0," + (-top * (speeds[i] / 100)) + "px,0)";
        }
    // }

    });

})();