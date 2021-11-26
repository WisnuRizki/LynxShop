import React from 'react';
import reactDom from 'react-dom';
import ReactModal from 'react-modal';
import './ListProduk.css'

ReactModal.setAppElement('#root');

const ListProduk = ({onShoes,Barang,onDetailBarang,detailBarang,modal,onCloseModal}) =>{

    return(
        <div className="_containerListProduk_">   
            <div className="_ListProdukText_">
                <h1>All Collection</h1>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,<br /> quis nostrud exercitation</p>
            </div>
            
            <div className="_ListProdukImage_">
                {
                    Barang.map(item => {
                        return (
                            <div className="box">
                                <h1>{item.nama}</h1>
                                <img src={`http://localhost:3001/tampilProduk/${item.gambar}`} alt={item.gambar}/>
                                <div className='_button_'>
                                    <button className='_buttonDetail_'  onClick={onDetailBarang.bind(this,item)}>Detail</button>
                                    <button className='_buttonBuy_' onClick={onShoes.bind(this,item)}>Beli</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <ReactModal isOpen={modal}>
                <h1 className='_modalDeskripsi_'>Deskripsi Produk</h1>
                <div className='_modalContainer_'>
                    <div className='_modalImage_'>
                        <img className='gambar' src={`http://localhost:3001/tampilProduk/${detailBarang.gambar}`} alt={detailBarang.gambar}/>
                    </div>
                    <div className='_modalDetail_'>
                        <ul className='detail'>
                            <li>Nama        : {detailBarang.nama}</li>
                            <li>Harga       : {detailBarang.harga}</li>
                            <li>Deskripsi   : {detailBarang.deskripsi}</li>
                            <li>Stok        : {detailBarang.stok}</li>
                        </ul>
                    </div>
                </div>
                <button className='_modalButtonClose_' onClick={onCloseModal}>Close</button>

                
            </ReactModal>
           
        </div>
    );
}

export default ListProduk;