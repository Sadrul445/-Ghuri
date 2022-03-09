function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["nid"].value;
    let z = document.forms["myForm"]["spot"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(y == ""){
        alert("Nid must be filled out");
      return false;
    }
  }