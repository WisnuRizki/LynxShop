import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import './Keranjang.css'

const Keranjang = ({itemBuy,onRouteChange}) => {
    const [jumlah,setJumlah] = useState()
    const [harga,setHarga] = useState();
    const [isiKeranjang,setIsiKeranjang] = useState([]);
    
    
    function onJumlah(event){
       const idxBarang = event.target.parentNode.parentNode.id;
       isiKeranjang[idxBarang].jumlah = parseInt(event.target.value);
       //const total = isiKeranjang[idxBarang].jumlah * [idxBarang].harga
       //console.log(isiKeranjang[idxBarang])
    }

    function onTampilHarga(){
        let price = 0;
        for(let i = 0 ; i < isiKeranjang.length; i++){
            price = price + (isiKeranjang[i].jumlah * isiKeranjang[i].harga)
        }
        setHarga(price)
    }

    function gabungan(event){
        onJumlah(event);
        onTampilHarga();
    }

    function onDeleteItem(event){
        const arrayBarang = [...isiKeranjang];
        arrayBarang.splice(event.target.id,1)
       setIsiKeranjang(arrayBarang)
       onTampilHarga();
       //itemBuy.splice(event.target.id,1)   
       console.log(isiKeranjang) 
    }

    function onSend(){
      fetch('http://localhost:3001/kirimKeranjang',{
          method: 'post',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            isiKeranjang: isiKeranjang,
            harga : harga
        })
      })

    }

    useEffect(() => {
    
        for(let i = 0 ; i < itemBuy.length; i++){
            itemBuy[i].jumlah = 0;
        }
        
        setIsiKeranjang(itemBuy)
      
        
    },[]);




    return(
        <div className='container'>
            <h2>Daftar</h2>
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Id Barang</div>
                    <div className="col col-2">Nama</div>
                    <div className="col col-3">Harga</div>
                    <div className="col col-4">Jumlah</div>
                    <div className="col col-5">Action</div>
                </li>

                {
                    isiKeranjang.map((item,index) => {
                
                        return <li key={index} id={index}>
                            <div className="col col-1" data-label="Job Id">{item.id}</div>
                            <div className="col col-2" data-label="Customer Name">{item.nama}</div>
                            <div className="col col-3" data-label="Amount">{item.harga}</div>
                            <div className="col col-4" data-label="Payment Status"><input onChange={gabungan} type="number" id={index} name="quantity" min="1" max="5" /></div>
                            <div className="col col-5">
                                <button onClick={onDeleteItem}  id={index}>Hapus</button>
                                </div>
                        </li>
                    })
                }
                <li>
                    <div className="col col-1" data-label="Job Id"></div>
                    <div className="col col-2" data-label="Customer Name"></div>
                    <div className="col col-3" data-label="Amount"><strong>Total</strong></div>
                    <div className="col col-4" data-label="Amount"><strong>{harga}</strong></div>
                    <div className="col col-5"></div>

                </li><li>
                    <div className="col col-1" data-label="Job Id"></div>
                    <div className="col col-2" data-label="Customer Name"></div>
                    <div className="col col-3" data-label="Amount">
                        <button type='submit' id='_btnBack_'
                        onClick={() => onRouteChange('listproduk')}>Kembali</button>
                        </div>
                    <div className="col col-4" data-label="Amount">
                        <button type='submit' id='_btnPay_' onClick={onSend}>Pembayaran</button>
                        </div>
                        <div className="col col-5"></div>

                </li>
                
            </ul>
        
            
            
        </div>
    )
}

export default Keranjang;