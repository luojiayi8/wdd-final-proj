
/* jquery functions used (from assignment list):
1. click()
2. hover()
3. text()
4. addclass()
5. hasClass()
6. removeClass()
7. show(), fadeIn(), or slideUp()
8. hide(), fadeOut(), or slideDown()
*/

$(document).ready(function(){

  /* brings up the correct dropdown page when the respective navigation button is clicked
    allows user to change pages without hiding the dropdown section*/
  $("li:first-child").click(function(){
      $("#dropdown").slideDown("swing");
      $("#aboutpage").fadeIn("slow");
      $("#menupage").hide();
      $("#guidepage").hide();
	});

  $("li:nth-child(2)").click(function(){
			$("#dropdown").slideDown("swing");
      $("#guidepage").fadeIn("slow");
      $("#menupage").hide();
      $("#aboutpage").hide();
	});

  $("li:nth-child(3)").click(function(){
			$("#dropdown").slideDown("swing");
      $("#menupage").fadeIn("slow");
      $("#aboutpage").hide();
      $("#guidepage").hide();
	});

  /* shows ingredients as an overlay when mouse hovers over the item */
  $('.item').hover(
		function () {
        $(this).find('.overlay').show();},
    function () {
        $(this).find('.overlay').hide();}
  );

  /* hides the dropdown pages when clicked*/
  $("#hide").click(function(){
      $("#dropdown").slideUp("swing");
    });

  /* makes FAQ questions on "about" page expandable and collapsable */
  $('.question').click(function(){
      if ( $(this).hasClass('active') ) {
        $(this).find('.answer').hide("slow");
        $(this).removeClass("active");
        $(this).find('.icon').text("+");
      }
      else{
        $(this).addClass("active");
        $(this).find('.answer').show("slow");
        $(this).find('.icon').text("--");
      }
  });
});
