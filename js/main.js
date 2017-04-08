function comment() {
	var user = document.getElementById("user").value
	var text = document.getElementById("text").value

	var yourName = document.createTextNode(user + " " + "says: ")
	var yourText = document.createTextNode(text)

	var newComment = document.createElement("LI")
	newComment.className = "commentBox";

	$(".button").ready(function(){
   		$(".commentBox:odd").css("background-color", "#9494b8");
	});

	var date = new Date();
	var dateText = document.createTextNode(date);
	// var newDate = document.createElement("H6");
	
	newComment.appendChild(dateText);

	// document.getElementById("demo").innerHTML = Date();
	

	var newUser = document.createElement("H3")
	var newText = document.createElement("P")
	
	newUser.appendChild(yourName)
	newText.appendChild(yourText)

	newComment.appendChild(newUser)
	newComment.appendChild(newText)
	document.getElementById("comments").appendChild(newComment);

	var deleteBtn = document.createElement("BUTTON");    
	deleteBtn.className = "deleteBtn";

	var deleteText = document.createTextNode("Delete Comment"); 

	deleteBtn.appendChild(deleteText);  
	newComment.appendChild(deleteBtn);	

    $(deleteBtn).on("click", function(){
        $(newText).toggle();
        if ($(this).text() == "Delete Comment") {
			$(this).text("Undo Delete"); 
		} else {
     		$(this).text("Delete Comment"); 
  		}; 
        // deleteText.nodeValue="Undo Delete";
    });

	
}
