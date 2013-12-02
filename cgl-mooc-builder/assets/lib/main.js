$(document).ready(function() {
	/*check user inputs before submitting on registration page*/
	$("#register_button").live("click", function(event) {
		//highlight the empty input box if it is required
		$(".required[value = '']").addClass('red-border');
		$(".required[value != '']").removeClass('red-border');
		//check if Age input is an integer
		if(validate('', 'age', $("#age").val()) && $(".red-border").length == 0)
			return true;
		else {
			event.preventDefault();
		}
	});

	/* tabs in lesson page(unit.html) */
	$(".course-materials").hide();                  //Initially hide all content
	$("#course-tabs li:first").attr("id","current");//Activate first tab
	$("#course-content div:first").fadeIn();        //Show first tab content
	$('#course-tabs a').click(function(e) {
		e.preventDefault();
		if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
			return       
		}
		else {
			$(".course-materials").hide();
			$("#course-tabs li").attr("id","");     //Reset id
			$(this).parent().attr("id","current");  //Activate this
			$('#' + $(this).attr('name')).fadeIn(); //Show content for current tab
		}
	});

	/* hide or show lesson/unit overview on lesson page */
	$("#unit-button-4, #unit-button-5").click(function(e) {
		if($(this).children("div").hasClass("click-and-show")) {
			$(this).children("div").removeClass("click-and-show");
			$(this).children(".expand-hide").text("+");
		}
		else {
			if($(".description").hasClass("click-and-show")) {
				$(".description").removeClass("click-and-show");
				$(".expand-hide").text("+");
			}
			$(this).children("div").addClass("click-and-show");
			$(this).children(".expand-hide").text("-");
		}
	});
});
/* validate user inputs on registration page */
function validate(tag, name, value) {
	var check = false;
	switch(name) {
		case "age":
			if(value.match(/^[1-9][0-9]{0,1}$|^$/) != null) {
				$("#age").removeClass('red-border');
				check = true;
			}
			else {
				$("#age").addClass('red-border');
				check = false;
			}
			break;
		default:
			check = false;
			break;
	}
	return check;
}
/* show the lesson description on home page */
function show_description(tag, index) {
	$(tag).addClass("selected");
	$(tag).siblings().removeClass("selected");
	$(tag).parent().parent().next().find("li").hide();
	$(tag).parent().parent().next().find("li:eq("+index+")").show();
}