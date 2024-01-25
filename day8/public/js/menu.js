const categories = document.querySelectorAll('.list-group-item');

categories.forEach(category => {
    category.addEventListener("click", () => {
        categories.forEach(item => item.classList.remove("active"));
        category.classList.add("active");
    });
});
