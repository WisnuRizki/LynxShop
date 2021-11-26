import React from 'react';
import './Contact.css';
import shopBanner from '../image/shop-banner.png'

function Contact(){
    return(
        <div className="_containerContact_">
            <h1>Contact Now</h1>
            <div className="_contactNowForm_">
                <div className="_formContact_">
                    <input type="text" placeholder="Name"/><br />
                    <input type="text" placeholder="Phone Number"/><br />
                    <input type="text" placeholder="Email"/><br />
                    <input className="_specialInput_" type="text" placeholder="Message"/><br />
                    <button type="submit">Submit</button>

                </div>
                <div className="_ourShop_">
                    <button>Our Shop</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;