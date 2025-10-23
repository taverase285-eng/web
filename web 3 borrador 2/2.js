// Back to top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form submission
    const reservationForm = document.querySelector('form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(reservationForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send this data to your server
            console.log('Reservation data:', data);
            
            // Create WhatsApp message
            const whatsappMessage = `Hola, quiero reservar en La Gran Pulpería:%0A%0A` +
                                   `*Nombre:* ${data.name}%0A` +
                                   `*Fecha:* ${data.date}%0A` +
                                   `*Hora:* ${data.time}%0A` +
                                   `*Personas:* ${data.people}%0A` +
                                   `*Comentarios:* ${data.comments || 'Ninguno'}`;
            
            // Open WhatsApp
            window.open(`https://wa.me/34123456789?text=${whatsappMessage}`, '_blank');
            
            // Show confirmation
            alert('¡Gracias por tu reserva! Se ha abierto WhatsApp para confirmar los detalles.');
        });
    }

    // Intersection Observer for animations
    const sections = document.querySelectorAll('.section-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Image lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});