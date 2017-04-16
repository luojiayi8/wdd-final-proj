$(document).ready(function(){

  $("li:first-child").click(function(){
      $("#dropdown").slideDown("swing");
      $("#aboutpage").fadeIn("slow");
      $("#historypage").hide();
      $("#guidepage").hide();
	});

  $("li:nth-child(2)").click(function(){
			$("#dropdown").slideDown("swing");
      $("#guidepage").fadeIn("slow");
      $("#historypage").hide();
      $("#aboutpage").hide();
	});

  $("li:nth-child(3)").click(function(){
			$("#dropdown").slideDown("swing");
      $("#historypage").fadeIn("slow");
      $("#aboutpage").hide();
      $("#guidepage").hide();
	});

  $("#hide").click(function(){
    $("#dropdown").slideUp("swing");
  });

  $('.item').hover(
		function () {
        $(this).find('.overlay').show();},
    function () {
        $(this).find('.overlay').hide();}
  );
});

// click, slidedown/slideup, show/hide, fadein, hover, find
