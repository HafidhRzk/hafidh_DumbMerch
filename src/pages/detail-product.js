import Nav from "./components/navbar"
import Image from "./components/mouse.jpg"
import { Link } from 'react-router-dom'

function Detail(){
    return(
        <div className="base">
            <div className="inbase">
                <Nav />
                <ContentDetail />
            </div>
        </div>
    );
}

function ContentDetail(){
    return(
        <div style={{display: 'flex', margin: 'auto', padding: '10px', maxHeigth: '100vh', width: '100%'}}>
            <div style={{flex: '40%'}}>
                <img src={Image} alt="" className="card"/>
            </div>
            <div style={{flex: '60%', padding: '10px', marginRight: '150px'}}>
                <div>
                    <h2 className="textred">Mouse</h2>
                    <p className="textred">Stock: 600</p>
                </div>
                <ul style={{textAlign: 'left'}}>
                    <li>Wireless Mouse</li>
                    <li>Konektivitas Wireless 2.4 GHz</li>
                    <li>Mouse Gaming</li>
                    <li>Radius 10m</li>
                    <li>Plug and Play</li>
                </ul>
                <p style={{textAlign: 'justify'}}>
                    Mouse adalah salah satu hardware komputer yang menerima input-an berupa gerakan, 
                    tekanan tombol (click), dan penggulungan (scroll) yang dapat digunakan untuk memilih teks, 
                    ikon, file, dan folder. Mouse dalam Bahasa Indonesia diterjemahkan sebagai tikus. 
                    Dikatakan demikian karena memang bentuk device ini menyerupai tikus 
                    yang kecil meruncing di depan dan menggembung besar di bagian belakang.
                </p>
                <h3 style={{textAlign: 'right', color: 'red'}}>Rp. 300.900</h3>
                <Link to="/payment"><button className="button" style={{backgroundColor: 'red', width: '100%'}}>BUY</button></Link>
            </div>
        </div>
    );
}

export default Detail;