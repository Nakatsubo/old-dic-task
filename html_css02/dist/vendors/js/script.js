"use strict";

$(function () {
  $('.side_menu nav ul li a').each(function () {
    var $href = $(this).attr('href');

    if (location.href.match($href)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});
//# sourceMappingURL=maps/script.js.map
