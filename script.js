function validateForm() {
    let x = document.forms["myForm"]["text"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))
    {
        
    }
    else{
        alert("You have entered an invalid email address!")
        return false;
    }
    x = document.forms["myForm"]["subject"].value;
    if (x == "") {
      alert("Subject must be filled out");
      return false;
    }
    x = document.forms["myForm"]["message"].value;
    if (x == "") {
      alert("Message must be filled out");
      return false;
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "social") {
      x.className += " responsive";
    } else {
      x.className = "social";
    }
  }