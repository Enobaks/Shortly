import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <section className="foot-wrap">
            <div className='footer'>
                <div className="brand-logo">
                    <h2><a href="#home">Shortly</a></h2>   
                </div>
                <div className="links">
                    <p className='title'>Features</p>
                    <p><a href="#home">Link Shortening</a></p>
                    <p><a href="#home">Branded Links</a></p>
                    <p><a href="#home">Analytics</a></p>
                </div>
                <div className="links">
                    <p className='title'>Resources</p>
                    <p><a href="#home">Blog</a></p>
                    <p><a href="#home">Developers</a></p>
                    <p><a href="#home">Support</a></p>
                </div>
                <div className="links">
                    <p className='title'>Company</p>
                    <p><a href="#home">About</a></p>
                    <p><a href="#home">Our Team</a></p>
                    <p><a href="#home">Careers</a></p>
                    <p><a href="#home">Contact</a></p>
                </div>
                <div className="media-links">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
            
        </section>
        
    )
}

export default footer
