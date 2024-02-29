document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('nav');
    var menuItems = document.querySelectorAll('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#555';
            this.style.color = '#fff';
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#333';
            this.style.color = '#fff';
        });
    });
});
