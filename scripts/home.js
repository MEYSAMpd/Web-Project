document.addEventListener("click", function (e) {
    const button = e.target.closest(".custom-button");
    if (button && button.dataset.page) {
        window.location.href = button.dataset.page;
        return;
    }
});