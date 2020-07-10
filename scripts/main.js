console.log("hello there ")
		
function validateForm(){

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