function validateItems() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
	var phone = document.forms["contact"]["phone"].value;
    if (name == "") {
        alert("Please provide your name.");
        return false;
    }
   if (email == "") {
       alert("Please provide your email address.");
       document.forms["contact"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["email"].focus();
       return false;
   }
   if (phone == "" || isNaN(phone)) {
       alert("Please provide your phone number in ###-###-#### format.");
       document.forms["contact"]["phone"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["phone"].focus();
       return false;
   }
   return alert("Thank you for contacting us. A representative from Dale's Slop Emporium will get in touch with you soon!");
}