<<<<<<< HEAD
<<<<<<< HEAD
"use strict";var date=new Date,element=document.getElementById("time");function getTime(e){return data.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}element.innerHTML=getTime(date);
=======
=======
>>>>>>> develop
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
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
//# sourceMappingURL=maps/script.js.map
