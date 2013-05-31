function validateLogin() {
	var user = document.forms["login"]["user"].value;
	var pass = document.forms["login"]["pass"].value;
	if (user == null || user == "" || pass == null || pass == "") {
		alert("Username and Password Fields must be filled out!!!");
		return false;
	};
}