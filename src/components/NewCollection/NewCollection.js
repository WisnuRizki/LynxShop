import React from 'react';
import shoes1 from '../image/shoes-img1.png'
import shoes2 from '../image/shoes-img2.png'
import starIcon from '../image/star-icon.png'

import './NewCollection.css';

function NewCollection(){
    
    return(
        <div>
            <div className="_newCollectionText_">
                <h1>New Collection</h1>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
                 <div className="_containerImageNewCollection_">
                     <div className="_imageNewCollectionLeft_">
                         <div className="_imageNewCollectionDesc_">
                            <img src={shoes1} alt={shoes1}/>
                            <h1>Mens Sport</h1>
                            <h1>$90</h1>
                            <ul>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>

                            </ul>
                         </div>
                            
                     </div>
                     <div className="_imageNewCollectionRight_">
                         <div  className="_imageNewCollectionDesc_">
                            <img src={shoes2} alt={shoes2}/>
                            <h1>Mens Sport</h1>
                            <h1>$90</h1>
                            <ul>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>
                                <li className="try"><img src={starIcon} alt={starIcon}/></li>

                            </ul>
                         </div>
                        

                     </div>

                 </div>
                 
        </div>
    );
}

export default NewCollection;