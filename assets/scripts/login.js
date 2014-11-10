$(function(){
        $('form').submit(function(){
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                //change the url for your project
                url: 'php/login.php',
                success: function(data){
                	//alert(eval(data));
                    if(eval(data)=="Wrong Password") {
		                    document.getElementById("wrongPwd").style.visibility="visible";
                    		document.getElementById("wrongEmail").style.visibility="hidden";
                    		document.getElementById("techError").style.visibility="hidden";
                    }
                    else if(eval(data)=="E-mail does not exist") {
		                    document.getElementById("wrongPwd").style.visibility="hidden";
                    		document.getElementById("wrongEmail").style.visibility="visible";
                    		document.getElementById("techError").style.visibility="hidden";

                    }
                    else {
	                    window.location.href = "dashboard.html";
	                }
                },
                error: function(){
		                    document.getElementById("wrongPwd").style.visibility="hidden";
                    		document.getElementById("wrongEmail").style.visibility="hidden";
                    		document.getElementById("techError").style.visibility="visible";

                }
            });
            return false;
        });
    });