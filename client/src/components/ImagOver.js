import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

// import "../css/ImagOver.css";
const ImagOver = () => {
    const [images, setImages] = useState(null);
    useEffect(() => {
        setImages([
            {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i1.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i1.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            },
            {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i2.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i2.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            }, 
            {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i3.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i3.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            },
            {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i4.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i4.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            }, {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i5.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i5.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            }, {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i6.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i6.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            }, {
                itemImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i7.png`,
                thumbnailImageSrc: `${process.env.PUBLIC_URL}/תמונות פרויקט/About/i.png`,
                alt: 'תמונה 1',
                title: 'כותרת לתמונה 1'
            }
        ]);
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
export default ImagOver