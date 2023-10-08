// Get elements
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("myModal");

const option1Button = document.getElementById("option1");
const option2Button = document.getElementById("option2");

const closeModalButton = document.getElementById("cl"); 

// Event listeners
openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});

option1Button.addEventListener("click", function () {
    window.location.href = "./assets/DST.pdf";
});

option2Button.addEventListener("click", function () {
    window.location.href = "./assets/ST.pdf";
});

closeModalButton.addEventListener("click", function (Event) {
    if(Event)
    {
    window.close();
    }
});



