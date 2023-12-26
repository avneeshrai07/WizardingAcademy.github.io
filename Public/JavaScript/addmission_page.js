
        function submitForm() {
          // Gather form data
          const name = document.getElementById("yourname").value;
          const email = document.getElementById("emailaddress").value;
          const phone = document.getElementById("phone").value;
          const gender = document.querySelector('input[name="gender"]:checked').value;
          const dob = document.getElementById("dob").value;
          const house = document.getElementById("House").value;
          const marksheet = document.getElementById("file").value;
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirmpassword").value;
      
          // Log form data to console (for demonstration purposes)
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Phone:", phone);
          console.log("Gender:", gender);
          console.log("Date of Birth:", dob);
          console.log("House:", house);
          console.log("Marksheet:", marksheet);
          console.log("Password:", password);
          console.log("Confirm Password:", confirmPassword);
      
          // Show the Form data  
          alert("Form submitted:\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nGender: " + gender + "\nDate of Birth: " + dob + "\nHouse: " + house + "\nPassword: " + password + "\nConfirm Password: " + confirmPassword);

          // Reset the form
          document.getElementById("admissionForm").reset();
        }
      



	var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
