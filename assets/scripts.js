(function() {
  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {

    var pattern = Trianglify({
      height: 300,
      width: document.documentElement.clientWidth,
      cell_size: 50,
      x_colors: 'YlGnBu'
    });

    var elem = document.querySelector(".site-header canvas");
    if (elem != null) {
      elem.parentNode.removeChild(elem);
    }
    document.querySelector(".site-header").appendChild(pattern.canvas());
  }
  resizeCanvas();

})();