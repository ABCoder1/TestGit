console.log("hello there ")
		
function validateForm(){

	var dt;

	var x = document.forms["myForm"]["fname"].value ;	

	if(x == ""){
		
		alert("Name must be filled out") ;
		return false;

	}	

	if( !( $('div.checkbox-group.required :checkbox:checked').length > 0 ) ){

		alert("Please select atleast one of the checkboxes.");
					
		return false;
	}	

	var y = document.forms["myForm"]["PhoneNo"].value ;

	
	for (var i = 0; i < y.length; i++){
		var char = y.charAt(i);

		if ( y == 69 ) {
			alert("Please enter a number");
			return false;
		}
	
	}
}

// document.getElementById("submitbutn").onclick = DisplayDate() ;

// function DisplayDate(){
// 	var dt = document.getElementById("dateinp").value ;
// 	console.log("today's date is : ", dt) ;
// }