$(function(){
        $('form').submit(function(){
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                //change the url for your project
                url: 'http://192.168.1.127:8888/FlatMgmt/php/login.php',
                success: function(data){
                    alert eval(data);
                    window.location.href = "dashboard.html";
                },
                error: function(){
                    window.location.href = "index.html";
                }
            });
            return false;
        });
    });