import Nav from "./components/navbar"
import Image from "./components/man.jpg"
import Image2 from "./components/frame.png"
import Image3 from "./components/mouse.jpg"

function Profile(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav />
                <ContentProfile />
            </div>
        </div>
    )
}

function ContentProfile(){
    return(
        <div style={{display: 'flex', margin: 'auto', padding: '10px'}}>
            <div style={{padding: '10px', display: 'flex', width: '100%'}}>
                <div style={{flex: '50%'}}>
                    <h2 className="textred">My Profile</h2>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img src={Image} alt="" style={{width: '18rem'}}/>
                        </div>
                        <div style={{padding: '10px', textAlign: 'left'}}>
                            <div>
                                <h4 className="textred">Nama</h4>
                                <p>Hulk Hogan</p>
                            </div>
                            <div>
                                <h4 className="textred">Email</h4>
                                <p>hulkhogan@mail.com</p>
                            </div>
                            <div>
                                <h4 className="textred">Phone</h4>
                                <p>0897654238177</p>
                            </div>
                            <div>
                                <h4 className="textred">Gender</h4>
                                <p>Male</p>
                            </div>
                            <div>
                                <h4 className="textred">Address</h4>
                                <p>Jalan Puncak Kemenangan Tunggal No 18 RT 01 RW 05 Batavia Selatan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex: '50%'}}>
                    <div>
                        <h2 className="textred">My Transaction</h2>
                        <CardTransaction />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardTransaction (){
    return(
    <div style={{display: 'flex', border: '1px solid white', borderRadius: '6px', padding: '10px', backgroundColor: 'rgb(53, 48, 48)', marginRight: '20px'}}>
        <div style={{display: 'flex', flex: '50%'}}>
            <img src={Image3} alt="" style={{width: '45%'}} />
            <div style={{padding: '10px', textAlign: 'left'}}>
                <h4 className="textred">Mouse</h4>
                <h6 className="textred">Saturday, 14 July 2021</h6>
                <p>Price: Rp. 500.000</p>
                <h4>Subtotal : 500.000</h4>
            </div>
        </div>
        <div style={{display: 'flex', flex: '50%', justifyContent: 'flex-end', alignItems: 'center'}}>
            <img src={Image2} alt="" style={{width: '10vh', height: '10vh'}} />
        </div>
    </div>
    );
}

export default Profile;