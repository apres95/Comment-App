function comment() {
	var user = document.getElementById("user").value
	var text = document.getElementById("text").value

	var yourName = document.createTextNode(user + " " + "says: ")
	var yourText = document.createTextNode(text)

	var newComment = document.createElement("LI")
	newComment.className = "commentBox"
	var newUser = document.createElement("H3")
	newUser.appendChild(yourName)
	var newText = document.createElement("P")
	newText.appendChild(yourText)

	newComment.appendChild(newUser)
	newComment.appendChild(newText)
	document.getElementById("comments").appendChild(newComment)

	var deleteBtn = document.createElement("BUTTON");        // Create a <button> element
	var deleteText = document.createTextNode("Delete Comment");       // Create a text node
	deleteBtn.appendChild(deleteText);  
	deleteBtn.className = "deleteBtn"
	newComment.appendChild(deleteBtn);	

	$(document).ready(function(){
    $("deleteBtn").click(function(){
        $("newText").hide();
    });
    // $("").click(function(){
    //     $("p").show();
    // });
});


// function toggleLi() {
// 	comments.style.display = 'block';
// }
}
