/* Bad Example */
$("header #nav li").addClass("class");
$("header #nav li").removeClass("remove");

/* Good Example */
var $navLi = $("#nav").find("li");
$navLi.addClass("class").removeClass("remove");
