import React from 'react';

function ListBarang({nama,gambar,harga}){
    return(
        <div className="box">
            <p>{nama}</p>
            <img src={gambar} alt={gambar}/>
            <h1>{harga}</h1>
        </div>
    );
}

export default ListBarang;