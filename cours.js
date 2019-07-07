$(document).ready(function(){
	var target=	$("#SkillBox")
	var targetY=target.offset().top - 500;
	$( document ).scroll(function() {
		var scrollY=$(document).scrollTop()
		if (scrollY>=targetY){
			$("#Skill-HTML").addClass("on")
			$("#Skill-CSS").addClass("on")
			$("#Skill-BOOTSTRAP").addClass("on")
			$("#Skill-jQuery").addClass("on")
			$("#Skill-JS").addClass("on")
			$("#Skill-PYTHON").addClass("on")
		}
	});
})
