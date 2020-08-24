$(document).ready(function() {


	$(".result").on("click", function() {
		var id = $(this).attr("data-linkId");
		var url = $(this).attr("href");
		console.log(id);

		// making sure that site has an id  
		if(!id){
			alert("data-linkId attribute not found")
		}
		increaseLinkClicks(id, url);


		return false;
	});


});

// Increase function when clicked that sends the post ajax request to ajax and passes linkId to page
// and redirects user
function increaseLinkClicks(linkId, url) {
	$.post("ajax/updateLinkCount.php", {linkId: linkId})
	.done(function(result){
		if(result != ""){
			alert(result);
			return;
		}

		window.location.href=  url;
	});

}