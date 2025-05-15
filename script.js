// Form Submission Logic
 document.getElementById('joinForm').addEventListener('submit', function (e) {
   e.preventDefault();

   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();

   if (name && email) {
     alert(`Thank you, ${name}! Your registration has been received.`);
     this.reset();
   } else {
     alert('Please fill in all fields.');
   }
 });