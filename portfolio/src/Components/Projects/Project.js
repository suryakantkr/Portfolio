import './Pro.css';
import resumeImage from './resume.png';
import mcloneImage from './mclone.png';
import acloneImage from './aclone.png';
import simonImage from './simon.png';
import googleformImage from './googleform.png';
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
                    <img src={mcloneImage} alt='Meesho clone' className="img-size" />                 
                </div>
                <div className='box'>                 
                    <img src={acloneImage} alt='Amazon clone' className="img-size" />                
                </div>
                <div className='box'>
                    <img src={portImage} alt='Portfolio' className="img-size" />               
                </div>
                <div className='box'>
                    <img src={googleformImage} alt='Google form' className="img-size" />
                </div>
            </div>
            <div className="para-pro">
                <div className='box'>      
                    <img src={tttImage} alt='Tic Toc Toe' className="img-size" />                  
                </div>
                <div className='box'>                  
                    <img src={simonImage} alt='Simon' className="img-size" />                 
                </div>
                <div className='box'>
                    <img src={rpsImage} alt='RPS' className="img-size" />        
                </div>
                <div className='box'>
                    <img src={resumeImage} alt='resume' className="img-size" />
                </div>
            </div>

        </div>
    )
}
export default Projects;