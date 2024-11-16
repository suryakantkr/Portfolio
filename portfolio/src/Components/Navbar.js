import { Link } from 'react-scroll';
function Navbar() {
    return (
        <div className='nav'>
            <div className='heading'>
                <h1>S<span>uryakant kumar</span></h1>
            </div>
            <div className='listItem'>
                <Link activeClass='active' to='Home' spy={true}
                    smooth={true} offset={-100} duration={500} className='list'>Home</Link>
                <Link activeClass='active' to='About' spy={true}
                    smooth={true} offset={-100} duration={500} className='list'>About</Link>
                <Link activeClass='active' to='Skill ' spy={true}
                    smooth={true} offset={-100} duration={500} className='list'>Skills</Link>
                <Link activeClass='active' to='Project ' spy={true}
                    smooth={true} offset={-100} duration={500} className='list'>Projects</Link>
            </div>
            <div className='btm'>  
                <button
                   id='cont'
                    onClick={() => {
                        const contactSection = document.getElementsByClassName("contact")[0];
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                > Contact Me</button>





            </div>

        </div>
    )
}
export default Navbar;