$(document).ready(function() {
	// alert("jQuery is working!");
	// alert("A new item: " + $("#css-item").text() + " || " + $("#css-html").text());
	// alert($("#goals-header").text());

})

$(document).ready(function() {
	$("#goal-button").click(function() {
		$("#goal-list").append("<li class='list-item'>" + 
			$("#new-goal").val() + "</li>");
		$("#new-goal").val("");
	})
})
