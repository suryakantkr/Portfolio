import './Cont.css';
function Contact(){
    return(
        <div className='contact' id='cont'>
            <div className='cont-title'>
                <h1>CONTACT ME</h1>
            </div>
            <div className='cont-name'>
                <input type='text' placeholder='Name'id='c-box'/>
            </div>
            <div className='cont-name'>
                <input type='text' placeholder='email' id='c-box'/>
            </div>
            <div className='writing-box'>
                <input type='text' placeholder='Ask anything' id='cont-box'/>
            </div>
            <button id='cont-btm'>Submit</button>
        </div>
    )
}
export default Contact;