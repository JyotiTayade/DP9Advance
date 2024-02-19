$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
    var options = {
      placement: "left", // top, bottom, left, right, auto
      delay: { "show": 300, "hide": 200 },
    };
    $('[data-toggle="tooltip"]').tooltip(options);
  
  