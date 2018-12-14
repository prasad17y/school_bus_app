function f1(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 )
          {
             alert(this.responseText);
            document.getElementById("test").innerHTML = this.responseText;
          }
      };
      xhttp.open("GET", "http://13.232.172.203:8080/check_driver_status", true);
      xhttp.send();
}

