// Initialize Firebase
var config = {
	apiKey: "AIzaSyAaYGrZd7ztBASL0XFhGvB4IcWvhTmjVhE",
	authDomain: "booldook-sample.firebaseapp.com",
	databaseURL: "https://booldook-sample.firebaseio.com",
	projectId: "booldook-sample",
	storageBucket: "booldook-sample.appspot.com",
	messagingSenderId: "875542616064"
};
firebase.initializeApp(config);
var db = firebase.database();
var ref;

ref = db.ref("root/gbook/");
ref.on("child_added", function(data){
	var html = '';
	html += '<li id="'+data.key+'" class="clear">';
	html += '<div>'+data.val().title+'</div>';
	html += '<div>'+data.val().wdate+'</div>';
	html += '</li>';
	$(".lists").append(html);
});

$("#bt_add").click(function(){
	ref = db.ref("root/gbook/");
	var title = $("#title").val();
	if(title == "") {
		alert("내용을 입력하세요.");
		$("#title").focus();
		return false;
	}
	else {
		ref.push({
			title: title,
			wdate: new Date().getTime() 
		}).key;
	}
});





