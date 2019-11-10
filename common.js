function formValidate() {
	var getUserName = document.getElementsByClassName('checkPasswordForm_name')[0].value;
	var getUserPass = document.getElementsByClassName('checkPasswordForm_password')[0].value;
	var specialChars = new RegExp(/[\[\]?*+|{}\\()@.\n\r]/);
	var specialNumbers = new RegExp('[0-9]');
	var result = document.getElementsByClassName('result');

	if (getUserName && getUserPass) {
		var userName = getUserName;
		var userPass = getUserPass;

		switch(true) {
			case (getUserPass.length < 8):
				alert ('Your Password must have eight or more characters!');
				break;
			case (!getUserPass.match(specialChars)):
				console.log(getUserPass);
				alert ('Your Password must have special characters!');
				break;
			case (!getUserPass.match(specialNumbers)):
				console.log(getUserPass);
				alert ('Your Password must have numbers!');
				break;
			default:
				console.log('Form submited!!!');
				document.getElementsByClassName('result')[0].innerHTML = 'Form submited!!!';
				break;
		}

	} else {
		alert('Please, enter your "Name and Password"');
	}
}