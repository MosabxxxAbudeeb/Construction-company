// تأكد من أن jQuery يعمل بشكل صحيح
$(document).ready(function() {
    console.log("jQuery يعمل بشكل صحيح!");
  });
  
  // التبديل بين إظهار وإخفاء العنوان عند النقر على الزر
  $(document).ready(function(){
      $("button").click(function(){
          $("h1").toggle();
      });
  });
  
  // وظيفة لتبديل حالة القائمة
  function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }
  
  // اجعل وظيفة toggleMenu() متاحة عند تحميل الصفحة
  $(document).ready(function() {
    // تسجيل الوظيفة في الزر المناسب (تأكد من وجود الزر مع onclick)
    $(".icon").click(function() {
      toggleMenu();
    });
  });

  




//قسبسقبببببببببببببببببببببببببببببببببببببببببب
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  // إضافة وظائف للتبديل بين الشرائح عند الضغط على الروابط
  document.querySelectorAll('.list a').forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          let slideIndex = parseInt(this.getAttribute('data-slide')) - 1;
          swiper.slideTo(slideIndex);
      });
  });
});
