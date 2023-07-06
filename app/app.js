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