import React, { useState, useEffect } from 'react';
import "../css/HomeOver.css"

const HomeOver = () => {
    const imagePaths = [];
    for (let i = 1; i < 7; i++) {
        imagePaths.push(`${process.env.PUBLIC_URL}/תמונות פרויקט/Home/H${i}.png`);
    }

    const [ImageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (imagePaths.length === 0) {
            return;
        }

        const intervalId = setInterval(() => {
            setImageIndex(prevIndex =>
                (prevIndex + 1) % imagePaths.length
            );
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [imagePaths.length]);

    return (
        <div className="ges">
            {imagePaths.length > 1 ? (
                <img
                    src={imagePaths[ImageIndex]}
                    className="images"
                />
            ) : (
                <h1>טוען תמונות...</h1>
            )}
        </div>
    );
};

export default HomeOver;