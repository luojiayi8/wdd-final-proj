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

  $('.item').hover(
		function () {
        $(this).find('.overlay').show();},
    function () {
        $(this).find('.overlay').hide();}
  );

  $("#hide").click(function(){
      $("#dropdown").slideUp("swing");
    });

  $('.question').click(function(){
      $(this).addClass("active");
      $(this).find('.answer').show("slow");
      $(this).find('.icon').text("--");
  });

/*  $('.question.active').click(function(){
      $(this).find('.answer').hide();
      $(this).removeClass("active");
  }); */

});

// click, slidedown/slideup, show/hide, fadein, hover, text, addclass
