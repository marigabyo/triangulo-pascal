var $height = $("table").height();
var $width = $("table").width();
$(".leftcover").css("border-top-width",$height);
$(".leftcover").css("border-right-width",$width/2);
$(".rightcover").css("border-top-width",$height);
$(".rightcover").css("border-left-width",$width/2);
$(".rightcover").css("left",$width/2);