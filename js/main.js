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
	
	document.getElementById("demo").innerHTML = Date();
	

	var newUser = document.createElement("H3")
	newUser.appendChild(yourName)
	var newText = document.createElement("P")
	newText.appendChild(yourText)

	newComment.appendChild(newUser)
	newComment.appendChild(newText)
	document.getElementById("comments").appendChild(newComment);

	var deleteBtn = document.createElement("BUTTON");        
	var deleteText = document.createTextNode("Delete Comment");    
	deleteBtn.appendChild(deleteText);  
	deleteBtn.className = "deleteBtn";
	newComment.appendChild(deleteBtn);	

    $(deleteBtn).on("click", function(){
        $(newText).toggle();
        deleteText.nodeValue="Undo Delete";
    });

	
}
