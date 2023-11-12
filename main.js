const icons = document.querySelectorAll(".icons > i");
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        icons.forEach(icon => {
            icon.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

btn.addEventListener("click", () => {
    // Check if any icon has the "active" class
    if (document.querySelector(".icons > i.active")) {
        content.innerHTML = `
        <div>
            <i class="fa-solid fa-heart red"></i>
            <p>Thank you!</p>
        </div>`;
    } else {
        alert("Please select an icon before submitting.");
    }
});