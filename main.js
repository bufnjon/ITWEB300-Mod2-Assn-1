





        

  function validateInputForm(form) {
    // Regular expressions for validation checks
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const empIdRegex = /^[A-Z]\d{5}$/;
    const fnameRegex = /^[A-Z][a-zA-Z]*$/;
    const lnameRegex =  /^[A-Z][a-zA-Z]*$/;
  
    // Check if required fields are filled
    if (!form.ReqDate.value || !form.EmpID.value || !form.FName.value || !form.LName.value || !form.ProbDesc.value) {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Validate date format
    if (!dateRegex.test(form.ReqDate.value)) {
      alert("Invalid date format. Please use mm/dd/yyyy.");
      return false;
    }
  
    // Validate employee ID format
    if (!empIdRegex.test(form.EmpID.value)) {
      alert("Invalid employee ID format. Must start with a capital letter and be followed by 5 numbers.");
      return false;
    }
  
    // Validate first name format
    if (!fnameRegex.test(form.fName.value)) {
      alert("First name must start with a capital letter.");
      return false;
    }
  
    // Validate last name format
    if (!lnameRegex.test(form.lName.value)) {
      alert("Last name must start with a capital letter.");
      return false;
    }
  
    // If all validations pass, return true
    return true;
  }