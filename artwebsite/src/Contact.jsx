import React from "react";
import './Contact.css';

export const Contact = () => {
    return(
        <section className="contact">
            <form>
{/*                 <h2>Contact Form</h2> */}
                <div className="name-section" style={{flexDirection:'row', display: 'flex' }}>
                    <div className="input-box" style={{display:'grid', flexDirection:'column', flex: '3'}}>
                        <label>First Name</label>
                        <input type="text" className="field" placeholder='First name' style={{width: '85%'}}/>
                    </div>
                    <div className="input-box" style={{display:'grid', flexDirection:'column', flex: '3', paddingLeft: '10px'}}>
                        <label>Last Name</label>
                        <input type="text" className="field" placeholder='Last name' style={{width: '85%'}}/>
                    </div>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' required/>
                </div>
                <div className="input-box">
                    <label>Subject</label>
                    <input type="title" className="field" placeholder='Enter your subject' required/>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="" id="" className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>

        </section>
    );
};

// export default Contact