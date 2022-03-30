import Nav from "./components/navbar"
import Image from "./components/frame.png"

function Profile(){
    return(
        <div>
            <Nav />
            <div style={{display: 'flex'}}>
                {/* <div>
                    <h3>My Profile</h3>
                    <img src={Image} alt="" />
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div> */}
            </div>
        </div>
    )
}

export default Profile;