document.addEventListener("DOMContentLoaded", () => {
    const html = document.getElementById("htmlPage");
    const checkbox = document.getElementById("flexSwitchCheckDefault");

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-bs-theme", savedTheme);
    checkbox.checked = savedTheme === "dark";

    // Handle theme toggle
    checkbox.addEventListener("change", () => {
        const theme = checkbox.checked ? "dark" : "light";
        html.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    });
});
