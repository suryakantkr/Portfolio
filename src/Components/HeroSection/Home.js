import '../HeroSection/Home.css';
import surya3Image from './surya3.png';
function Home() {
    return (
        <div className="hero-section" id='Home'>

            <div className="left">
                <div className='para1'>
                    <p>Software Developer ,</p>
                </div>
                <div className='dev-name'>
                    <p>I'm <span>Suryakant kumar,</span></p>
                </div>
                <div className='stack'>
                    <p>Full Stack Developer</p>
                </div>
                <div className='para2'>
                    <p>I have strong fundamental in HTML, CSS, JavaScript, React js, Node js, Express js,
                        mongoDB, Database, API connection and apart from work in DSA with Java.</p><br />
                    <h2>I have completed my projects.</h2> <br />
                    <ul> 1. Tic Tac Toc Game.</ul>
                    <ul> 2. Smart shopping e-commerce website.</ul>
                    <ul> 3. Steganography and steganalysis system using deep learnig.</ul>
                </div>
            </div>


            <div className="right">
                <img src={surya3Image} className="img" alt="Surya" />
            </div>
        </div>
    )
}
export default Home;
