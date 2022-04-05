window.onload = inicio;

function inicio(){
   
    document.getElementById('LoginBtn').onclick=iniciarSeccion;
}

function iniciarSeccion(){
   
     if (document.getElementById("correoNav").value =="usuario" && document.getElementById("Navpassword").value == "123456") {
         location = "Inicio.html"
     }
     else if(
        document.getElementById("correoNav").value == "" && 
        document.getElementById("Navpassword").value == "")
        {
         document.getElementById("correoNav").focus();
     }
     else{
        swal("Usuario o Password incorrecta.");
         document.getElementById("correoNav").value="";
         document.getElementById("Navpassword").value="";
         document.getElementById("correoNav").focus();
        }
     }

     /*Registro*/

     document.getElementById('btnS').onclick=CrearSeccion;
   
  function CrearSeccion(){
      if(
          document.getElementById("NombreRe").value == "Henry Vladimil" &&
          document.getElementById("ApellidoRe").value == "Saint Louis" &&
          document.getElementById("mailRe").value == "Shenryvladimil@gmail.com" && 
          document.getElementById("passRe").value == 123456789  
        ){
            location = "Inicio.html"
        }
        else if(
            document.getElementById("NombreRe").value == "" && 
            document.getElementById("ApellidoRe").value == ""&& 
            document.getElementById("mailRe").value == ""&& 
            document.getElementById("passRe").value == "" 
             )
            {
             document.getElementById("NombreRe").focus();
         }
         else{
            swal("Informacion Erronea"); 
            document.getElementById("NombreRe").value = "";
            document.getElementById("ApellidoRe").value = "";
            document.getElementById("mailRe").value = "";
            document.getElementById("passRe").value = "";
            document.getElementById("NombreRe").focus();
            }
  }