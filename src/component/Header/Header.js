import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className = "Header_Container">
            <Link to = "/" className="Icon_Container">
                <img src="https://www.iconsdb.com/icons/preview/white/house-xl.png" alt="" className = "homeIcon" height="42" width="42" />
            </Link>
            <div className = "Title-Container">
                <h1>Houser</h1>
            </div>
            
        </div>
    );
}