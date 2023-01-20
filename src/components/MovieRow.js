import React from "react";
import { useState, useEffect } from "react";
import './MovieRow.css';


export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 240;
        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 30
        }
        setScrollX(x);
    }   

    return(
        <div className="movierow">
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={handleLeftArrow}>
                <img src="./images/arrow-left.svg"/>
            </div>
            <div className="movieRow-right" onClick={handleRightArrow}>
                <img src="./images/arrow-right.svg"/>
            </div>

            <div className="movierow-listarea">
                <div className="movierow-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movierow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}