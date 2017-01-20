(function() {
  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {

    var pattern = Trianglify({
      height: 300,
      width: window.innerWidth,
      cell_size: 50,
      x_colors: 'YlGnBu'
    });

    document.querySelector(".site-header").appendChild(pattern.canvas());
  }
  resizeCanvas();

})();