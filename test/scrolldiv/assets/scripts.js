const elementsScroll = document.querySelectorAll(".scroll-element");

document.addEventListener('scroll', () => {
    const offset = 200; 

    elementsScroll.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const clientHeight = document.documentElement.clientHeight;
     if (elementTop >= -offset && elementTop <= clientHeight - offset) {
        element.classList.add("scrolled");
    }
    });
});