import { useState } from "react";

function CookieTrey() {
    const [cookies, setCookies] = useState(0);

    function addCookie() {
        setCookies((prevState) => prevState + 1);
    }

    return (
        <div className="cookie-trey">
            <div>Cookies: {cookies}</div>
            <button onClick={addCookie}>🍪</button>
        </div>
    );
}

export default CookieTrey