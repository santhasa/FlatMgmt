var server_ip;
var server_port;
$(window).load(function () {
	var auth_token=location.search.split('auth_token=')[1] ? location.search.split('auth_token=')[1] : 'notAuthenticated';
	jQuery.getJSON('serverip.json',function(data){
    	// data is an array of objects
	    $.each(data, function(){
	    	server_ip=this.ipaddress;
	    	//alert (server_ip);
    		server_port=this.port;
    		//alert(server_port);
	    });
	});
	$.ajax({
			type: "GET",
			async: false,
			url: "http://" + server_ip + ":" + server_port + "/flatmgmt/php/sessionvalidation.php?page=dashboard&auth_token="+auth_token,
			cache: false,
			success: function (response) {
				var objJSON = eval("(function(){return " + response + ";})()");
					//alert ("dashboard");
					//alert (auth_token);
				if (objJSON.error=="sessionExpired") {
					//alert ("index.html?msg=sessionExpired&auth_token="+auth_token);
					window.location.href = "index.html?msg=sessionExpired&auth_token="+auth_token;
				}
				else {
					//alert ("Session Alive and Kicking!!");
				}
			}
	});
	onLoadNavBarMsgs();
	onLoadDropDownTasks();
	onLoadDropDownAlerts()
	onLoadSideBar();
	onLoadQuickInfo();

});
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
	var auth_token=location.search.split('auth_token=')[1] ? location.search.split('auth_token=')[1] : 'notAuthenticated';
	window.location.href = "index.html?msg=sessionExpired&auth_token="+auth_token;
}
