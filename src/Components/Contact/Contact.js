import './Cont.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_9c87qzs',
            'template_x2en69m',
            form.current,
            {
                publicKey: 'wiRKAKSPMmvJcb7xO',
            }
        )
            .then(() => {
                alert("Message Sent Successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to Send");
            });
    };

    return (
        <div className='contact' id='cont'>

            <div className='cont-title'>
                <h1>CONTACT ME</h1>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className='cont-name'>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        id='c-box'
                        required
                    />
                </div>
                <div className='cont-name'>
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        id='c-box'
                        required
                    />
                </div>
                <div className='writing-box'>
                    <textarea
                        name="message"
                        placeholder="Ask anything"
                        id='cont-box'
                        required
                    ></textarea>
                </div>
                <button type='submit' id='cont-btm'>
                    Submit
                </button>

            </form>

        </div>
    )
}

export default Contact;