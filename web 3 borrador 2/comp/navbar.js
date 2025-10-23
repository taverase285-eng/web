class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(92, 44, 14, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .logo {
                    color: #f8f1e5;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                
                .nav-links a {
                    color: #f8f1e5;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    padding: 0.5rem 0;
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #e1c3a7;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #e1c3a7;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .btn-reserva {
                    background-color: #bf7d41;
                    color: #1a0a03;
                    padding: 0.5rem 1.25rem;
                    border-radius: 2rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .btn-reserva:hover {
                    background-color: #e1c3a7;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                
                .btn-reserva::after {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="/" class="logo">
                    La Gran Pulpería
                </a>
                
                <div class="nav-links">
                    <a href="#menu">Menú</a>
                    <a href="#reservas">Reservas</a>
                    <a href="#ubicacion">Ubicación</a>
                    <a href="tel:+34123456789" class="btn-reserva">
                        <i data-feather="phone"></i> Llamar
                    </a>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);