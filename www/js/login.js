$( document ).ready(function(){
 
        alert("ready");
 
        $("#login-button").click(function(){

          alert("click");

                var email=$("#email-field").val();
                var password=$("#password-field").val();
                var dataString="user_name="+email+"&password="+password+"&deviceid=";
                if($.trim(email).length>0 & $.trim(password).length>0)
                {
                  $.ajax({
                  type: "POST",
                  url: "http://adpdev.com/adp/mx/api/login_register_id.php",
                  data: dataString,
                  crossDomain: true,
                  cache: false,
                  beforeSend: function(){ $("#login-button").html('Connecting...');},
                  success: function(data){
                      if(data=="success")
                        {
                          localStorage.login="true";
                          localStorage.email=email;
                          window.location.href = "index.html";
                        }
                      else if(data="error")
                        {
                          alert("Login error");
                          $("#login").html('Login');
                        }
                    } // Function Data
                  }); // Ajax
                }return false; //If E-Mail Correct
      }); // On CLick

  });
