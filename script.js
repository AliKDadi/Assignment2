document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
                formMessage.innerHTML = '<p style="color: green;">Thank you! Your message has been sent.</p>';

                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';

                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            }
        });
    }

    const buyButtons = document.querySelectorAll('.buy-button');
    let cartItems = [];

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const storage = row.querySelector('td:nth-child(1)').textContent;
            const color = row.querySelector('td:nth-child(2)').textContent;
            const price = row.querySelector('td:nth-child(3)').textContent;

            const item = { storage, color, price };
            cartItems.push(item);

            console.log('Item added to cart:', item);
            alert(`Added ${color} ${storage} to cart.`);

            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        console.log('Current cart:', cartItems);
    }

    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('Image clicked! (Lightbox effect would go here)');
        });
    });
});