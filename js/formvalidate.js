
/*---------------------------------Form validation----------------------------*/


function checkitout()
  {
		if (document.getElementById("name").value == "")
		{
			  alert("Please enter your name.");
			  return false;
		}
		
		if (document.getElementById("email").value == "" ||
			document.getElementById("email").value == null ||
			document.getElementById("email").value.indexOf("@") < 0 ||
			document.getElementById("email").value.indexOf(".") < 0
		)
		{
			  alert("Please enter a valid e-mail address. e.g. example@example.com");
			  return false;
		}
		
		if (document.getElementById("message").value == "")
		{
			  alert("Please enter a message.");
			  return false;
		}
		else {
			return true;
		}
		//return true;
		
	
	
  }




// Check for email address: look for [@] and [.]

function isEmail(elm) {
	
	//alert("isEmail was called");
	
	//alert (elm.value.indexOf("@"));
	
    if (elm.value == "" ||
        elm.value == null ||
		elm.value.indexOf("@") < 0 ||
		elm.value.indexOf(".") < 0)
	{
    	//form.email.focus();
    	elm.className = "error";
    	//alert("Please enter a valid e-mail address e.g. example@example.com");
    	return false;
	}
	else {
		elm.className = "";
		return true;
	}	
}

// Check for null and for empty


function isName(elm) {
	
	//alert("isFilled was called");
	
    if (elm.value == "" ||
        elm.value == null)
    {
		//alert("Please enter a name.");
    	//elm.focus();
    	elm.className = "error";
    	return false;
	}
    else {
    elm.className = "";
    return true;
    }
}

function isMessage(elm) {
	
	//alert("isFilled was called");
	
    if (elm.value == "" ||
        elm.value == null)
    {
		//alert("Please enter a message.");
    	//elm.focus();
    	elm.className = "error";
    	return false;
	}
    else {
    elm.className = "";
    return true;
    }
}

function isDate(elm) {
	
	if (elm.value == "" ||
        elm.value == null ||
		elm.value < 1 ||
		elm.value > 31)
	{
		alert("Please enter a date between 1 and 31");
    	//form.date.focus();
    	return false;
	}
    else return true;
		
}
		
function isYear(elm) {
	
	if (elm.value == "" ||
        elm.value == null ||
		elm.value > 2010)
	{
		alert("Please enter a year below 2010");
    	//form.year.focus();
    	return false;
	}
    else return true;
		
}
		
/*this function from http://snippets.dzone.com/posts/show/5223
--------------------------------------------------------------------------------------*/
//only allows numbers be but into specified text fields	

function numbersonly(e, decimal) {
	var key;
	var keychar;
	
	if (window.event) {
	   key = window.event.keyCode;
	}
	else if (e) {
	   key = e.which;
	}
	else {
	   return true;
	}
	keychar = String.fromCharCode(key);
	
	if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
	   return true;
	}
	else if ((("0123456789").indexOf(keychar) > -1)) {
	   return true;
	}
	else if (decimal && (keychar == ".")) { 
	  return true;
	}
	else
	   return false;
}
