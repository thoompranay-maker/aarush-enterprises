
// Aarush Enterprises JavaScript

document.addEventListener("DOMContentLoaded", () => {

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});

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

        const service = document.getElementById("service").value;

        const message = document.getElementById("message").value.trim();

            // <-- ADD VALIDATION HERE

        if(name === ""){

    alert("Please enter your name.");

    return;
}

if(phone.length !== 10){

    alert("Please enter a valid 10-digit mobile number.");

    return;
}

if(service === ""){

    alert("Please select a service.");

    return;
}

if(message === ""){

    alert("Please enter your message.");

    return;
}

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

/*=========================================
        PREMIUM HERO ORBIT START
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    function createOrbit(selector, radiusX, radiusY, direction = 1) {

        const orbit = document.querySelector(selector);

        if (!orbit) return;

        const items = orbit.querySelectorAll(".orbit-item");

        const icons = [];

        items.forEach((item, index) => {

            icons.push({

                element: item,

                angle: (Math.PI * 2 / items.length) * index,

                speed: parseFloat(item.dataset.speed) * direction

            });

        });

        function animate() {

            const mobile = window.innerWidth <= 768;

            let rx = radiusX;
let ry = radiusY;

if (mobile) {

    if (selector === ".outer-orbit") {

        rx = 200;
        ry = 125;

    } else {

        rx = 130;
        ry = 85;

    }

            }

            icons.forEach(icon => {

                icon.angle += icon.speed * 0.002;

                const x = Math.cos(icon.angle) * rx;
                const y = Math.sin(icon.angle) * ry;

                icon.element.style.transform =
                    `translate(${x}px, ${y}px)`;

            });

            requestAnimationFrame(animate);

        }

        animate();

    }

    createOrbit(".outer-orbit", 430, 240, 1);

    createOrbit(".inner-orbit", 300, 150, -1);

});

/*=========================================
        PREMIUM HERO ORBIT END
=========================================*/

/*=========================================
        NAVBAR SCROLL EFFECT START
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    function updateNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

});

/*=========================================
        NAVBAR SCROLL EFFECT END
=========================================*/

/*=========================================
        ACTIVE NAVIGATION START
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${current}`) {
                link.classList.add("active");
            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

});

/*=========================================
        ACTIVE NAVIGATION END
=========================================*/

/*=========================================
        PREMIUM HAMBURGER START
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const toggler = document.querySelector(".navbar-toggler");

    const menu = document.querySelector("#mainMenu");

    if (!toggler || !menu) return;

    menu.addEventListener("shown.bs.collapse", () => {

        toggler.classList.add("active");

    });

    menu.addEventListener("hidden.bs.collapse", () => {

        toggler.classList.remove("active");

    });

});

/*=========================================
        PREMIUM HAMBURGER END
=========================================*/

/*=========================================
        PREMIUM MOBILE MENU START
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector("#mainMenu");
    const toggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelectorAll("#mainMenu .nav-link");

    if (!navbar || !toggler) return;

    const mobileMenu = new bootstrap.Collapse(navbar, {
        toggle: false
    });

    /*--------------------------
        Auto Close
    ---------------------------*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992 && navbar.classList.contains("show")) {

                mobileMenu.hide();

            }

        });

    });

    /*--------------------------
        Lock Background Scroll
    ---------------------------*/

    navbar.addEventListener("shown.bs.collapse", () => {

        document.body.style.overflow = "hidden";

    });

    navbar.addEventListener("hidden.bs.collapse", () => {

        document.body.style.overflow = "";

    });

});

/*=========================================
        PREMIUM MOBILE MENU END
=========================================*/

/*=========================================
        STORE STATUS START
=========================================*/

function updateStoreStatus() {

    const status = document.getElementById("storeStatus");
    const message = document.getElementById("storeMessage");
    const indicator = document.querySelector(".status-indicator");

    const now = new Date();

    const day = now.getDay();      // 0 = Sunday
    const hour = now.getHours();
    const minute = now.getMinutes();

    const currentTime = hour * 60 + minute;

    let openTime;
    let closeTime;

    if (day === 0) {

        // Sunday
        openTime = 9 * 60;
        closeTime = 20 * 60;

    } else {

        // Monday to Saturday
        openTime = 8 * 60;
        closeTime = 21 * 60;

    }

    const isOpen =
        currentTime >= openTime &&
        currentTime < closeTime;

    if (isOpen) {

        status.textContent = "🟢 Open Now";

        message.textContent =
            "Closes today at " +
            (day === 0 ? "8:00 PM" : "9:00 PM");

        indicator.style.background = "#22c55e";

    } else {

        status.textContent = "🔴 Currently Closed";

        indicator.style.background = "#ef4444";

        if (currentTime < openTime) {

            message.textContent =
                "Opens today at " +
                (day === 0 ? "9:00 AM" : "8:00 AM");

        } else {

            if (day === 6) {

                message.textContent =
                    "Opens Sunday at 9:00 AM";

            }

            else if (day === 0) {

                message.textContent =
                    "Opens Monday at 8:00 AM";

            }

            else {

                message.textContent =
                    "Opens tomorrow at 8:00 AM";

            }

        }

    }

}

updateStoreStatus();

setInterval(updateStoreStatus, 60000);
