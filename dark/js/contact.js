function sendemail(){
		//Custom variables
		var sendTo = "yourmail@yourdomain.com"; //send the form elements to this email
		var subject = "Message from your website"; //subject of the email
		var nameErr = "Please enter a Name"; //Error message when Name field is empty
		var emailErr = "Please enter a valid Email"; //Error message when Email field is empty or email is not valid
		var messageErr = "Please enter a Message"; //Error message when Message field is empty

		//Reset field errors/variables
		$('#name_error').html("");
		$('#email_error').html("");
		$('#message_error').html("");
		var err = 0;

    // Check fields
    var name = $('#name').val();
    var email = $('#email').val();
    var emailVer = validate_email(email);
    var message = $('#message').val();

    if (!name || name.length == 0 || name == "Name")
    {
        $('#name_error').html(nameErr);
        err = 1;
    }
    if (!email || email.length == 0 || emailVer == 0)
    {
        $('#email_error').html(emailErr);
        err = 1;
    }
    if (!message || message.length == 0 || message == "How can we help you?")
    {
        $('#message_error').html(messageErr);
        err = 1;
    }
   	
   	//If there's no error submit form
		if(err == 0)
    {
        // Request
        var data = {
            name: name,
            email: email,
            sendTo: sendTo,
            subject: subject,
            message: message
        };
			
        // Send
        $.ajax({
            url: "js/sendemail.php",
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function(data, textStatus, XMLHttpRequest)
            {
                if (data.response.error)
                {  
                    if(data.response.error == 1){
                        $('#message_success').html(data.response.message);
                    }
                    else{
                        $('#message_success').html(data.response.message);
                    }
                }
                else
                {
                    // Message
                   $('#message_success').html("An unexpected error occured, please try again.");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                // Message
                $('#message_success').html("Error while contacting server, please try again.");
            }
        });
			
        // Message
        $('#message_success').html("Sending...");
    }

}

function validate_email(email) {
   var reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
   if(reg.test(email) == false) {
      return 0;
   } else {
   		return 1;
   }
}
