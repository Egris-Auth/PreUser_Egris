import React from 'react';
import './InfoCard.css';
import { OutfitExtraLight } from '@/app/layout';

const InfoCard = ({title,p1,p2,p3}) => {
  return (
    <div className="outer">
        <div className="card">
            <div className="text">{title}</div>
            <p className={OutfitExtraLight.className}>{p1}</p>
            <p className={OutfitExtraLight.className}>{p2}</p>
            <p className={OutfitExtraLight.className}>{p3}</p>
        </div>
        <div className="RedGlows"></div>
    </div>
  )
}

export default InfoCard