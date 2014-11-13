$(function(){
        $('form').submit(function(){
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                //change the url for your project
                url: 'http://192.168.1.145:8888/flatmgmt/php/login.php',
                success: function(data){
                	//alert(eval(data));
                    if(eval(data)=="Wrong Password") {
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="You seem to have entered a wrong password";
                    }
                    else if(eval(data)=="E-mail does not exist") {
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="Your e-mail does not seem to exist";
                    }
                    else {
	                    window.location.href = "simpletest.html";
	                }
                },
                error: function(){
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="There seems to be a technical error. Please try again later.";
                }
            });
            return false;
        });
    });