const vk_token = ""


$( document ).ready(function() {
$("#btn_gallery").click(function(){
	parsePictures()
})
})

/*
function load_photos() {
	$.ajax({
		url: "https://api.vk.com/method/photos.get?user_id=30005745&album_id=profile&v=5.81&access_token="+vk_token,
		dataType: "jsonp",
		type: "get",
		crossDomain : true,
		jsonpCallback: "parsePictures"
	})
}*/

function parsePictures() {
	let K = 4
	let s = ""
	for (let i=1; i<=K; i++) {
		s += "<input id='a"+i+"' type='radio' name='a' "+ ( i==1 ? "checked" : "" ) +">"
	}
	s += "<div class='sheet-content sheet-fade'>"
	for (let i=1; i<=K; i++) {
		s += "<div class='sheet-item'><img class='sheet-image' src='photo/"+i+".jpg' /></div>"
	}
	s += "</div>"
	s += "<div class='sheet-arrows'>"
	for (let i=1; i<=K; i++) {
		s += "<label for='a"+i+"'></label>"
	}
	s += "</div>"
	s += "<div class='sheet-dots'>"
	for (let i=1; i<=K; i++) {
		s += "<label for='a"+i+"'></label>"
	}
	s += "</div>"
	$(".gallery").html(s).fadeIn()
}