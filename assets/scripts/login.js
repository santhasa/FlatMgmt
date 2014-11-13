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
		                    //document.getElementById("wrongPwd").style.visibility="visible";
                    		//document.getElementById("wrongEmail").style.visibility="hidden";
                    		//document.getElementById("techError").style.visibility="hidden";
                    }
                    else if(eval(data)=="E-mail does not exist") {
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="Your e-mail does not seem to exist";
		                    //document.getElementById("wrongPwd").style.visibility="hidden";
                    		//document.getElementById("wrongEmail").style.visibility="visible";
                    		//document.getElementById("techError").style.visibility="hidden";

                    }
                    else {
	                    window.location.href = "dashboard.html";
	                }
                },
                error: function(){
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="There seems to be a technical error. Please try again later.";
		                    //document.getElementById("wrongPwd").style.visibility="hidden";
                    		//document.getElementById("wrongEmail").style.visibility="hidden";
                    		//document.getElementById("techError").style.visibility="visible";

                }
            });
            return false;
        });
    });