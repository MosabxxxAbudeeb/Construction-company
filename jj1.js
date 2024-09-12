<!-- ملف jQuery -->

    $(document).ready(function() {
      console.log("jQuery يعمل بشكل صحيح!");
    });
 
  

    $(document).ready(function(){
        $("button").click(function(){
            $("h1").toggle(); // التبديل بين إظهار وإخفاء العنوان عند النقر على الزر
        });
    });



<script>
  function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }
</script>