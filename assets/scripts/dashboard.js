var server_ip;
var server_port;
var auth_token;
var platform;
$(window).load(function () {
	auth_token=getUrlVars()["auth_token"];
	platform=getUrlVars()["platform"];
	alert(platform);
	$.getJSON('serverip.json',function(data){
	    $.each(data, function(){
				server_ip=this.ipaddress;
				//alert(server_ip);
   				server_port=this.port;
	    });
	    $.ajax({
			type: "GET",
			async: false,
			url: "http://" + server_ip + ":" + server_port + "/flatmgmt/php/sessionvalidation.php?page=dashboard&auth_token="+auth_token+"&platform="+platform,
			cache: false,
			success: function (response) {
				//alert ("inside 2");
				var objJSON = eval("(function(){return " + response + ";})()");
				//alert ("dashboard");
				//alert (auth_token);
				// alert(objJSON.error);
				if (objJSON.error=="sessionExpired") {
					//alert ("index.html?msg=sessionExpired&auth_token="+auth_token);
					window.location.href = "index.html?msg=sessionExpired&auth_token="+auth_token;
				}
				else {
					//alert(server_ip);
					onLoadNavBarMsgs();
					onLoadDropDownTasks();
					onLoadDropDownAlerts()
					onLoadSideBar();
					onLoadQuickInfo();
					//alert ("Session Alive and Kicking!!");
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

function onLoadNavBarMsgs()
{
	var url='http://'+server_ip+':'+server_port+'/flatmgmt/php/navbar_msgs.php';
    $('#navbarmsgcontent').load(url);
}
function onLoadDropDownTasks()
{
	
	$('#dropdowntasks').load('http://'+server_ip+':'+server_port+'/flatmgmt/php/dropdowntasks.php');
}
function onLoadDropDownAlerts()
{
    $('#dropdownalerts').load('http://'+server_ip+':'+server_port+'/flatmgmt/php/dropdownalerts.php');
}
function onLoadSideBar()
{
    $('#side-menu').load('http://'+server_ip+':'+server_port+'/flatmgmt/php/sidebar.php');
}
function onLoadQuickInfo()
{
    $('#quickinfo').load('http://'+server_ip+':'+server_port+'/flatmgmt/php/quickinfosection.php');
}
function killSession()
{
	auth_token=getUrlVars()["auth_token"];
	window.location.href = "index.html?msg=logoff&auth_token="+auth_token;
}
function clearSession()
{
	auth_token=getUrlVars()["auth_token"];
	window.location.href = "index.html?msg=clearSession&auth_token="+auth_token;
}
