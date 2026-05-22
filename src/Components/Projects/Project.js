import './Pro.css';
import resumeImage from './resume.png';
import mcloneImage from './mclone.png';
import acloneImage from './aclone.png';
import simonImage from './simon.png';
import stego_scan_pro from './stegoscan_pro.png';
import rpsImage from './rps.png';
import tttImage from './ttt.png';
import portImage from './port.jpg';


function Projects() {
    return (
        <div className="Project">
            <div className="heading-project">
                <h1>MY PROJECTS</h1>
            </div>
            <div className="para-pro">
                <div className='box'>
                    <a
                        href="https://meeshoclonevercelapp.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={mcloneImage} alt='Meesho clone' className="img-size" />
                    </a>
                </div>
                <div className='box'>
                    <a
                        href="https://amazon-seven-theta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={acloneImage} alt='Amazon clone' className="img-size" />
                    </a>
                </div>
                <div className='box'>

                    <img src={portImage} alt='Portfolio' className="img-size" />

                </div>
                <div className='box'>
                    <a
                        href="https://finalyearprojecct2504.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={stego_scan_pro} alt='S_A_S_S_U_D_L' className="img-size" />
                    </a>
                </div>
            </div>
            <div className="para-pro">
                <div className='box'>
                    <a
                        href="https://tic-tac-toc-gamevercel.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={tttImage} alt='Tic Toc Toe' className="img-size" />
                    </a>
                </div>
                <div className='box'>
                    <a
                        href="https://simon-game-clone-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={simonImage} alt='Simon' className="img-size" />
                    </a>
                </div>
                <div className='box'>
                    <a
                        href="https://rock-paper-scissors-vercel-app.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={rpsImage} alt='RPS' className="img-size" />
                    </a>
                </div>
                <div className='box'>
                    <a
                        href="https://drive.google.com/file/d/14HPGHztnXK5u_oIWcSbHVUd_DynlsTgf/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={resumeImage} alt='resume' className="img-size" />
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Projects;