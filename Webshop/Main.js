document.addEventListener("DOMContentLoaded", () => {
    const searchBox1 = document.querySelector(".search_box1");
    const hardwareText = document.getElementById("hardware-text");
    const searchBox2 = document.querySelector(".search_box2");
    const accessoriesText = document.getElementById("accessories-text");

    //Drop box 1
    if (searchBox1 && hardwareText) {
        // When Hovering arrow down
        searchBox1.addEventListener("mouseenter", () => {
            hardwareText.textContent = "↓ Hardware"; 
        });
        //When not hovering arrow up
        searchBox1.addEventListener("mouseleave", () => {
            hardwareText.textContent = "↑ Hardware"; 
        });
    }

    //Drop Box 2
    if (searchBox2 && accessoriesText) {
        // When Hovering arrow down
        searchBox2.addEventListener("mouseenter", () => {
            accessoriesText.textContent = "↓ Accessories"; 
        });
        //When not hovering arrow up
        searchBox2.addEventListener("mouseleave", () => {
            accessoriesText.textContent = "↑ Accessories"; 
        });
    }
});
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';

function suebmitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);