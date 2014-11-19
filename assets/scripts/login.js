var server_ip;
var server_port;

$(window).load(function () {   
	jQuery.getJSON('serverip.json',function(data){
    	// data is an array of objects
	    $.each(data, function(){
	    	server_ip=this.ipaddress;
    		server_port=this.port;
	    });
	}); 
	// Now you can get the parameters you want like so:
	var session_expiry=getUrlVars()["msg"];
	var auth_token=getUrlVars()["auth_token"];
	
	//var session_expiry=location.search.split('msg=')[1] ? location.search.split('msg=')[1] : 'sessionAlive';
	//var auth_token=location.search.split('auth_token=')[2] ? location.search.split('auth_token=')[2] : 'none';
    if (session_expiry=="sessionExpired") {
    	$.ajax({
			type: "GET",
			async: false,
			url: "http://"+server_ip+":"+server_port+"/flatmgmt/php/sessionvalidation.php?page=logoff&auth_token="+auth_token,
			cache: false,
			success: function (response) {
			}
		});
    }
	//alert (session_expiry);
	//alert (auth_token);
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
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                //change the url for your project
                url: 'http://'+server_ip+':'+server_port+'/flatmgmt/php/login.php',
                success: function(data){
                	//alert(data);
                	var objJSON = eval("(function(){return " + data + ";})()");
					//alert(objJSON.role);
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
	                    window.location.href = "dashboard.html?auth_token="+objJSON.auth_token;
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
