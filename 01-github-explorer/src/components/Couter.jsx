import { useState } from "react";
export function Counter(){
    const [couter, setCouter] = useState(0);
    function Increment(){
        setCouter(couter + 1)
    }
    
    return(
        <div>
            <h2>{couter}</h2>
            <button type="button" onClick={Increment}>
                Increment +1</button>
        </div>
    );
}