import '../HeroSection/Home.css';
import surya3Image from './surya3.png';
function Home() {
    return (
        <div className="hero-section" id='Home'>
            
            <div className="left">
                <div className='para1'>
                    <p>Web Developer ,</p>
                </div>
                <div className='dev-name'>
                    <p>I'm <span>Suryakant kumar,</span></p>
                </div>
                <div className='stack'>
                    <p>Full Stack Developer</p>
                </div>
                <div className='para2'>
                   <p>I'm learn html, css, javascript, react js and DSA.</p><br/>
                   <p>I have complete small small projects.</p>
                </div>
            </div>


            <div className="right">
                <img src={surya3Image} className="img" alt="Surya" />
            </div>
        </div>
    )
}
export default Home;
