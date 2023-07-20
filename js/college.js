const to_top = document.querySelector(".to_top");
to_top.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

//achievement


const buttons3 = document.querySelectorAll("[data-bs-target]");

buttons3.forEach(buttons3 => {
    buttons3.addEventListener('click', () => {
        const offset = buttons3.dataset.sliderbutton3 === "next" ? 1 : -1;
        const slides3 = buttons3
            .closest("[data-slider3]")
            .querySelector("[data-slides3]")

            const activeSlide31 = slides3.querySelector("[data-active31]");
            const activeSlide32 = slides3.querySelector("[data-active32]");
            const activeSlide33 = slides3.querySelector("[data-active33]");
            let newIndex31 = [...slides3.children].indexOf(activeSlide31) + offset ;
            let newIndex32 = [...slides3.children].indexOf(activeSlide32) + offset ;
            let newIndex33 = [...slides3.children].indexOf(activeSlide33) + offset ;
        if (newIndex31 < 0) newIndex31 = slides3.children.length - 1;
        if (newIndex32 < 0) newIndex32 = slides3.children.length - 1;
        if (newIndex33 < 0) newIndex33 = slides3.children.length - 1;
        if (newIndex31 >= slides3.children.length) newIndex31 = 0;
        if (newIndex32 >= slides3.children.length) newIndex32 = 0;
        if (newIndex33 >= slides3.children.length) newIndex33 = 0;

        slides3.children[newIndex31].dataset.active31 = true;
        slides3.children[newIndex32].dataset.active32 = true;
        slides3.children[newIndex33].dataset.active33 = true;
        delete activeSlide31.dataset.active31;
        delete activeSlide32.dataset.active32;
        delete activeSlide33.dataset.active33;
    })
})

setInterval(() => {
    const slides3 = document.querySelector("[data-slides3]")
    const activeSlide31 = slides3.querySelector("[data-active31]");
    const activeSlide32 = slides3.querySelector("[data-active32]");
    const activeSlide33 = slides3.querySelector("[data-active33]");
    let newIndex31 = [...slides3.children].indexOf(activeSlide31);
    let newIndex32 = [...slides3.children].indexOf(activeSlide32);
    let newIndex33 = [...slides3.children].indexOf(activeSlide33);
    
    newIndex31++;
    newIndex32++;
    newIndex33++;

    if (newIndex31 < 0) newIndex31 = slides3.children.length - 1;
    if (newIndex32 < 0) newIndex32 = slides3.children.length - 1;
    if (newIndex33 < 0) newIndex33 = slides3.children.length - 1;
    if (newIndex31 >= slides3.children.length) newIndex31 = 0;
    if (newIndex32 >= slides3.children.length) newIndex32 = 0;
    if (newIndex33 >= slides3.children.length) newIndex33 = 0;

    slides3.children[newIndex31].dataset.active31 = true;
    slides3.children[newIndex32].dataset.active32 = true;
    slides3.children[newIndex33].dataset.active33 = true;
    delete activeSlide31.dataset.active31;
    delete activeSlide32.dataset.active32;
    delete activeSlide33.dataset.active33;
}, 4000);