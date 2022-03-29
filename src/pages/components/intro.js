import Button from 'react-bootstrap/Button';
import Image from './frame.png';

function Intro() {
    return(
        <div style={{textAlign: 'left'}}>
            <img src={Image} alt="" />
            <h1>Easy, Fast and Reliable</h1>
            <p>Go shopping for mrchandise, just go to dumb merch shopping, the biggest merchandise in Indonesia</p>
            <div className="d-rows gap-2">
                <Button variant="danger" size="lg">
                    Login
                </Button>
                <Button variant="secondary" size="lg">
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Intro;