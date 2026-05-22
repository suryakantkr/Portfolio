import './About.css';
function About() {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Suryakant_Kumar_Resume.pdf";
        link.click();
    };
    return (
        <div className='About'>
            <div className='heading-about'>
                <div className='about-title'>
                    <h1>ABOUT</h1>
                </div>
                <div className='para1-about'>
                    <p>I'm Suryakant kumar, I'm from bihar district Aurangabad,</p>
                    <p>Recently I'm completed my undergraduate degree in Bachelor of Engineering Computer Science and Engineering
                        with Cyber Security at Sengunthar Engineering College (Autonomous) Tiruchengode, Namakkal dictrict, TamilNadu.
                        My web development journey started in 2022.
                    </p>

                    <p>I also enjoy solving complex problems.
                        I will have gained knowledge in  HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Database Theory, MySQL, Command Line, Git, and more.</p>



                </div>
                <button id="about-btm" onClick={downloadCV}>download cv</button>
            </div>
        </div>
    )
}
export default About;