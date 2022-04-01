import Nav from "./components/navbar"
import Image from './components/man.jpg';

function Complain(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav />
                <ChatForm />
            </div>
        </div>
    );
}

function ChatForm(){
    return(
        <div>
            <div style={{display: 'flex', padding: '10px', height: '90vh'}}>
                <div style={{display: 'flex', padding: '10px', flex: '25%'}}>
                    <div>
                        <img src={Image} alt="" style={{height: '7vh', width: '7vh', borderRadius: '100%'}} />
                    </div>
                    <div style={{textAlign: 'left', padding: '5px'}}>
                        <h6>Admin</h6>
                        <p style={{fontSize: '10px'}}>Yes, Is There Anything I Can Help</p>
                    </div>
                </div>
                <div style={{display: 'flex', padding: '10px', flex: '75%'}}>
                    <div className="input-group mb-3 d-flex align-items-end">
                        <input type="text" className="form-control" placeholder="Send Message" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Complain;