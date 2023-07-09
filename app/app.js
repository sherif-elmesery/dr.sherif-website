//define global variables
const navIcon = document.querySelector('#nav-bar');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links a")

//nav icon
navIcon.addEventListener("click",()=>{
    navLinks.classList.add("active")
    console.log("clicked")
})
// navIcon.addEventListener("click",()=>{
//     navLinks.style.display = "none"
// })
links.forEach((a)=>{
    a.addEventListener("click",()=>{
        navLinks.classList.remove("active")
    })
})

// create to top button
const toTop = document.querySelector(".to-top")
window.onscroll = ()=>{
    if (this.scrollY >= 750) {
        toTop.classList.add('show')
    } else {
        toTop.classList.remove('show')
    }
}

toTop.addEventListener("click", event => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});

    //  testimonials section
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.display = 'block';
        } else {
          testimonial.style.display = 'none';
        }
      });
    }

    function showNextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    function showPreviousTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }

    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', showNextTestimonial);

    const prevButton = document.getElementById('prev-btn');
    prevButton.addEventListener('click', showPreviousTestimonial);

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // send data to email
    emailjs.init('cqlPXuNeNuWm-MNbtQLtb');

    function sendEmail(event) {
      event.preventDefault();
  
      // Get form data
      var form = document.getElementById('reservation-form');
      var fullName = form.elements['full-name'].value;
      var dateOfBirth = form.elements['date-of-birth'].value;
      var gender = form.elements['gender'].value;
      var contactNumber = form.elements['contact-number'].value;
      var email = form.elements['email'].value;
      var preferredDate = form.elements['preferred-date'].value;
      var preferredTime = form.elements['preferred-time'].value;
      var serviceRequested = Array.from(form.elements['service']).filter(function(checkbox) {
        return checkbox.checked;
      }).map(function(checkbox) {
        return checkbox.value;
      });
      var concerns = form.elements['concerns'].value;
  
      // Prepare email parameters
      var templateParams = {
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        gender: gender,
        contactNumber: contactNumber,
        email: email,
        preferredDate: preferredDate,
        preferredTime: preferredTime,
        serviceRequested: serviceRequested.join(', '),
        concerns: concerns
      };
  
      // Send email using EmailJS
      emailjs.send('Yservice_ev8cbcs', 'template_ii7xfaf', templateParams)
        .then(function(response) {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Email sent successfully!');
          form.reset();
        }, function(error) {
          console.error('Error sending email:', error);
          alert('Error sending email. Please try again later.');
        });
    }