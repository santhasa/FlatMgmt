function onLoadNavBarMsgs()
{
    $('#navbarmsgcontent').load('http://192.168.1.145:8888/flatmgmt/php/navbar_msgs.php');
}
function onLoadDropDownTasks()
{
	$('#dropdowntasks').load('http://192.168.1.145:8888/flatmgmt/php/dropdowntasks.php');
}
function onLoadDropDownAlerts()
{
    $('#dropdownalerts').load('http://192.168.1.145:8888/flatmgmt/php/dropdownalerts.php');
}
function onLoadSideBar()
{
    $('#sidebar').load('http://192.168.1.145:8888/flatmgmt/php/sidebar.php');
}
function onLoadQuickInfo()
{
    $('#quickinfo').load('http://192.168.1.145:8888/flatmgmt/php/quickinfosection.php');
}
$(window).load(function () {
	onLoadNavBarMsgs();
	onLoadDropDownTasks();
	onLoadDropDownAlerts()
	onLoadSideBar();
	onLoadQuickInfo();
});