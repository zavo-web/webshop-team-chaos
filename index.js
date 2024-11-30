document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.querySelector(".Box1");
    const categorieënText = document.getElementById("Categorieën-text");
    const box1List = box1.querySelector("ul"); 

    if (box1 && categorieënText && box1List) {
        box1.addEventListener("mouseenter", () => {
            categorieënText.textContent = "↓ Categorieën";
            box1List.classList.add("show"); 
        });
        box1.addEventListener("mouseleave", () => {
            categorieënText.textContent = "↑ Categorieën";
            box1List.classList.remove("show"); 
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {
    const box2 = document.querySelector(".Box2");
    const cadeausText = document.getElementById("Cadeaus-text");
    const box2List = box2.querySelector("ul"); 

    if (box2 && cadeausText && box2List) {
        box2.addEventListener("mouseenter", () => {
            cadeausText.textContent = "↓ Cadeaus & Inspiratie";
            box2List.classList.add("show"); 
        });

        box2.addEventListener("mouseleave", () => {
            cadeausText.textContent = "↑ Cadeaus & Inspiratie";
            box2List.classList.remove("show"); 
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const box3 = document.querySelector(".Box3");
    const aanbiedingenText = document.getElementById("Aanbiedingen-text");
    const box3List = box3.querySelector("ul"); 

    if (box3 && aanbiedingenText && box3List) {
        box3.addEventListener("mouseenter", () => {
            aanbiedingenText.textContent = "↓ Aanbiedingen";
            box3List.classList.add("show"); 
        });

        box3.addEventListener("mouseleave", () => {
            aanbiedingenText.textContent = "↑ Aanbiedingen";
            box3List.classList.remove("show"); 
        });
    }
});