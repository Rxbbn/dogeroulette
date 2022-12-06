import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Home</Link>
            </li>
            
            <li><a href="https://t.me/">Telegram</a></li>
            <li className="with-megamenu"><a href="https://poocoin.app/">Chart</a>
            </li>
        </ul>
    )
}
export default Nav;
