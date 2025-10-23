class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #1a0a03;
                    color: #f8f1e5;
                    padding: 3rem 2rem;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    text-align: left;
                }
                
                .footer-logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                
                .footer-description {
                    font-size: 0.875rem;
                    color: #e1c3a7;
                    line-height: 1.6;
                }
                
                .footer-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #f8f1e5;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-links a {
                    color: #e1c3a7;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #f8f1e5;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    color: #f8f1e5;
                    background: rgba(255, 255, 255, 0.1);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background: #bf7d41;
                    transform: translateY(-3px);
                }
                
                .footer-bottom {
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: 0.75rem;
                    color: #e1c3a7;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .footer-links {
                        text-align: center;
                    }
                    
                    .social-links {
                        justify-content: center;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <div>
                        <div class="footer-logo">La Gran Pulpería</div>
                        <p class="footer-description">
                            Desde 1985 sirviendo los auténticos sabores de Madrid en un ambiente cálido y familiar.
                        </p>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">Enlaces rápidos</h3>
                        <ul class="footer-links">
                            <li><a href="#menu">Nuestra carta</a></li>
                            <li><a href="#reservas">Reservas</a></li>
                            <li><a href="#ubicacion">Cómo llegar</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">Contacto</h3>
                        <ul class="footer-links">
                            <li><a href="tel:+34123456789">+34 91 123 45 67</a></li>
                            <li><a href="mailto:info@granpulperia.com">info@granpulperia.com</a></li>
                            <li>Calle de la Victoria, 8</li>
                            <li>28012 Madrid</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">Síguenos</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    &copy; ${new Date().getFullYear()} La Gran Pulpería. Todos los derechos reservados.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);