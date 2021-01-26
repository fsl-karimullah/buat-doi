import React from 'react'
import elisa from '../assets/elisa.jpg';
import paisal from '../assets/paisal.jpg'
const LandingPage = () => {
    return (
        <div>
            <div className="container">
            <h1 className="doi-title">SELAMAT ULANG TAHUN BEB</h1>
            <img src={elisa} className="elisa-img" alt="bebeb" />
            <p className="doi-tulisan">
                Maaf gak bisa nemenin tiap hari. apalagi tanggal 28 aku udah pelatihan buat beasiswa selama 11 jam duh pasti sibuk bangattt!
                Semoga sehat selalu :) akuh sayang kamoeh. 
            </p>
            <p className="doi-tulisan2">
                Ups jangan lupa maap websitenya jeyek :() aku dah lupa style style nya terus teruss aku desainnya malem ini pas kamuh tidur :v maap yahhh 
            </p>
            <h1 className="doi-title" style={{color:"blue"}}>SPESIAL DARI SAYE BUAT BEBEB </h1>
            <img src={paisal} className="elisa-img" alt="gue" />
            </div>
        </div>
    )
}

export default LandingPage;
