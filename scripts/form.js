// ✅ Update Current Year in Footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// ✅ Update Last Modified Date
document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;

// ✅ Product List for the Select Dropdown
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded:", window.location.pathname);

    // ✅ Populate the Product Dropdown
    const productSelect = document.getElementById("product");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // ✅ Update Review Count in review.html
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        document.getElementById("review-count").textContent = count;
        console.log("Review Count Updated:", count);
    }
});