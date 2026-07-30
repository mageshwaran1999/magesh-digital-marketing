document.addEventListener("DOMContentLoaded", () => {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;
    });

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;

            if(target === 50){
                counter.innerText = target + "+";
            }

            if(target === 100){
                counter.innerText = target + "%";
            }

            if(target === 24){
                counter.innerText = target + "/7";
            }

            if(target === 5){
                counter.innerText = target + "+";
            }
        }

    };

    updateCounter();

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", smoothScrollToTop);

function smoothScrollToTop() {
    const position = window.pageYOffset;

    if (position > 0) {
        window.scrollTo(0, position - 80);
        setTimeout(smoothScrollToTop, 10);
    }
}
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});
