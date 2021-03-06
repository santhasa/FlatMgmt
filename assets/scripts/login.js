var server_ip;
var server_port;
var status="false";
var platform;

$(window).load(function () {   
	var str = navigator.userAgent;
	//alert(str.indexOf("Macintosh"));
	if (str.indexOf("Macintosh")!=-1) document.getElementById("platform").value="Mac";
	if (str.indexOf("Windows")!=-1) document.getElementById("platform").value="Win";
	if (str.indexOf("Android")!=-1) document.getElementById("platform").value="Android";
	platform=document.getElementById("platform").value;
	$.getJSON('serverip.json',function(data){
    	// data is an array of objects
	    $.each(data, function(){
	    	server_ip=this.ipaddress;
    		server_port=this.port;
    		var auth_token=getUrlVars()["auth_token"];
    		var session_expiry=getUrlVars()["msg"];
    		if (platform=="Mac" || platform=="Win") {
    			if (session_expiry=="sessionExpired") {
    				$.ajax({
						type: "GET",
						async: false,
						url: "http://"+server_ip+":"+server_port+"/flatmgmt/php/sessionvalidation.php?page=logoff&auth_token="+auth_token,
						cache: false,
						success: function (response) {
							document.getElementById("errorMsg").style.visibility="visible";
	                	    document.getElementById("errorMsg").innerHTML="Your session seems to have timed out. Please enter credentials and continue.";
						}
					});
    			} 
    		}
    		if (session_expiry=="logoff") {
    			$.ajax({
					type: "GET",
					async: false,
					url: "http://"+server_ip+":"+server_port+"/flatmgmt/php/sessionvalidation.php?page=logoff&auth_token="+auth_token,
					cache: false,
					success: function (response) {
						document.getElementById("errorMsg").style.visibility="visible";
	                    document.getElementById("errorMsg").innerHTML="Thank you for using Vicinity!";
					}
				});
    		}  else if (session_expiry=="clearSession") {
    			$.ajax({
					type: "GET",
					async: false,
					url: "http://"+server_ip+":"+server_port+"/flatmgmt/php/sessionvalidation.php?page=logoff&auth_token="+auth_token,
					cache: false,
					success: function (response) {
						window.localStorage.clear();
						document.getElementById("errorMsg").style.visibility="visible";
	                    document.getElementById("errorMsg").innerHTML="Thank you for using Vicinity!";
					}
				});
    		} else {
				//alert("I am here");
				//window.localStorage.clear();
				if (window.localStorage.getItem("email")!=null && status=="false"){
    				//alert(window.localStorage.getItem("email"));
    				//alert(window.localStorage.getItem("password"));
	    			status="true";
		    		document.getElementById("email").value=window.localStorage.getItem("email");
	    			document.getElementById("password").value=window.localStorage.getItem("password");
	    			//document.getElementById("form").submit();
	    			$('form').submit();
	    		}
    		}
	    });
	}); 
	
});	

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}
  
$(function(){
        $('form').submit(function(){
        	//alert("I am in submit form function");
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                url: 'http://'+server_ip+':'+server_port+'/flatmgmt/php/login.php',
                success: function(data){
                	//alert(data);
                	//test
                	window.localStorage.setItem("email",document.getElementById("email").value);
                	window.localStorage.setItem("password",document.getElementById("password").value);
                	var objJSON = eval("(function(){return " + data + ";})()");
					//alert(objJSON.role);
					//alert(objJSON.platform);
					//alert(objJSON.auth_token);
                 	if(objJSON.role=="Wrong Password") {
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="You seem to have entered a wrong password";
                    }
                    else if(objJSON.role=="E-mail does not exist") {
		                    document.getElementById("errorMsg").style.visibility="visible";
		                    document.getElementById("errorMsg").innerHTML="Your e-mail does not seem to exist";
                    }
                    else {
	                    window.location.href = "dashboard.html?auth_token="+objJSON.auth_token+"&platform="+objJSON.platform;
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
