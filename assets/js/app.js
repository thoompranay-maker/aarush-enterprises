
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


