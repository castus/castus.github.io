(function() {
  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {

    var pattern = Trianglify({
      height: 300,
      width: window.innerWidth,
      cell_size: 40,
      // x_colors: ['YlGnBu', 'PuOr', 'Purples', 'Blues', 'PuRd', 'Spectral']
      x_colors: 'YlGnBu',
      y_colors: 'GnBu'
    });

    document.querySelector(".site-header").appendChild(pattern.canvas());
  }
  resizeCanvas();

})();