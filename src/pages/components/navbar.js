import Image from './frame.png';

function Nav(){
    return(
        <nav className="navbar">
            <div className="left-side">
                <img src={Image} alt="" />
                <ul>
                    <li><a>Home</a></li>
                    <li><a>My Project</a></li>
                </ul>
            </div>
            <div className="right-side">
                <a>Contact Me</a>
            </div>
        </nav>
    );
}
export default Nav;