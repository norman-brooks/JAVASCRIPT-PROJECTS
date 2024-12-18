function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Fields must be filled out");
      return false;
    }
  }
