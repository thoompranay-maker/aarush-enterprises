
// Aarush Enterprises JavaScript

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*==============================
    Scroll Reveal Start
==============================*/
/* VOID
const reveals = document.querySelectorAll(
'.reveal,.reveal-left,.reveal-right'
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.15

}

);

reveals.forEach(el=>observer.observe(el));

 */

/*==============================
    Scroll Reveal End
==============================*/

// --- AOS  --- //

/* ------- 
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

-------- */

/*=========================================
        WHATSAPP CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const service = document.getElementById("service").value.trim();

        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "919490434649"; // Replace if needed

        const text =

`🏢 *AARUSH ENTERPRISES*

📩 *New Customer Enquiry*

👤 *Name:* ${name}

📞 *Phone:* ${phone}

🛠 *Service:* ${service}

💬 *Message:*
${message}`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}
