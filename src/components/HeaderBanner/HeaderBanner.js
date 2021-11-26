import React from 'react';
import './HeaderBanner.css';
import RunningShoes from '../image/running-shoes.png'

function HeaderBanner(){
    return (
        <div className="_headerBanner_">
            <div className="_headerBannerNews_">
                <div className="_headerBannerNewsText_">
                    <p className="_headerBannerNewsInfo_">New running Shoes </p>
                    <p className="_headerBannerNewsQuote_">Mens Like Plexs</p>
                    <p className="_headerBannerNewsDesc_">Plexipsum dolor sit amet, consectetur adipiscing elit, se
                     d do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <div className="_headerBannerNewsButton_">
                        <button className="_headerBannerNewsButtonBuy_">Buy Now</button>
                        <button className="_headerBannerNewsButtonSee_">See More</button>
                    </div>
                </div>
                
            </div>
            <div className="_headerBannerImage_">
                <img src={RunningShoes} alt={RunningShoes}/>
            </div>
        </div>
    );
}

export default HeaderBanner;