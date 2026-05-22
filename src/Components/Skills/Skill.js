import './Skill.css';
import reactImage from './react.png';
import htmlImage from './html.jpg';
import javaImage from './Java.png';
function Skill() {
    return (
        <div className="Skill">
            <div className='title'>
                <h1>MY SKILLS</h1>
            </div>
            <div className="img-container">
                <div className='para1-about'>
                    <img src={reactImage} id="react-img" />
                </div>
                <div >
                    <img src={htmlImage} alt="react imge" id='html-img' />
                </div>
                <div className='para1-about'>
                    <img src={javaImage} id="java-img" />
                </div>
            </div>

        </div>

    )
}
export default Skill;