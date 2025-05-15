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

 let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 4 seconds
    }

    document.addEventListener('DOMContentLoaded', function () {
    const learnMoreLink = document.getElementById('learnMoreLink');
    const mofuSection = document.getElementById('mofu');

    learnMoreLink.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default jump
      mofuSection.classList.add('show');
      mofuSection.scrollIntoView({ behavior: 'smooth' });
    });
  });