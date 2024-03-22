// Product data
const products = [
    { id: 1, name: "Sun 1", description: "Dangly-Style Sunglasses", price: "$99" },
    { id: 2, name: "MOO-ve", description: "Cow-Style Sunglasses", price: "$99" },
    { id: 3, name: "In Flames", description: "Flame-Style Sunglasses", price: "$99" },
]

// Function to display products
function displayProducts(productList) {
    const container = document.querySelector('.card-container');
    container.innerHTML = ''; // Clear existing content

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all accordion headings
    const headings = document.querySelectorAll('.accordion-heading');

    // Add a click event listener to each heading
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Toggle the "active" class on the content
            const content = this.nextElementSibling;
            content.classList.toggle('active');

            // Optional: Collapse other accordion items when one is expanded
            if (content.style.maxHeight) {
                // Accordion is open, close it
                content.style.maxHeight = null;
            } else {
                // Accordion is closed, open it
                content.style.maxHeight = content.scrollHeight + "px";
                // Close other open accordion content
                headings.forEach(otherHeading => {
                    if (otherHeading !== heading) {
                        otherHeading.nextElementSibling.style.maxHeight = null;
                        otherHeading.nextElementSibling.classList.remove('active');
                    }
                });
            }
        });
    });
});

// Function to search products
function searchProducts(query) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    displayProducts(filteredProducts);
}

// Function to validate contact form
function validateContactForm() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Display all products initially
    displayProducts(products);

    // Setup search functionality
    const searchInput = document.querySelector('#search');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            searchProducts(event.target.value);
        });
    }

    // Setup contact form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            if (validateContactForm()) {
                alert('Thank you for contacting us!');
                // Here you would normally submit the form or send the data via AJAX
            }
        });
    }
});