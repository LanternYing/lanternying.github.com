$(document).ready(function() {
	$("#fullpage").fullpage({
		verticalCentered: false,
		paddingTop: 0,
		resize: false,
		anchors:['profile', 'experience', 'publication'],
		scrollingSpeed: 400,
        afterLoad: function(anchorLink, index) {
            console.log(anchorLink);
            $("ul.nav li").removeClass("active");
            switch(anchorLink) {
                case "profile":
                    $(".profilenav").addClass("active");
                    break;
                case "experience":
                    $(".expernav").addClass("active");
                    break;
                case "publication":
                    $(".pubsnav").addClass("active");
                    break;
            }
        }
	});
	// forcePosition();

	// $("#vmenu li").mouseover(function() {
	// 	$( this ).addClass("selected");
	// 	if ($( this ).attr("id") != "profilebutton")
	// 		$("#profilebutton").removeClass("selected");
	// });

	// $("#vmenu li").mouseleave(function() {
	// 	$( this ).removeClass("selected");
	// 	$("#profilebutton").addClass("selected");
	// });

	$("#profilebutton").click(function() {
		$.fn.fullpage.moveTo('profile');
	});

	$("#experbutton").click(function() {
		$.fn.fullpage.moveTo('experience');
	});

	$("#pubbutton").click(function() {
		$.fn.fullpage.moveTo('publication');
	});
});

// $(window).resize(function());

// // ensures that social links panel doesn't run into menu
// function forcePosition() {
// 	//console.log ($("#sociallinks").offset());

// 	if ( $("#sociallinks").offset().top < 200 ) {
// 		$("#sociallinks").addClass("moveup");
// 	} else {
// 		$("#sociallinks").removeClass("moveup");
// 	}
// }
