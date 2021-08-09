import { useState } from 'react';
import './kindEn.css'

const Kind = () => {

    const [ob, setOb] = useState({fname: 'ammar', lname:'car'})

    return (
        <div className="kind-container" onClick={()=>{setOb({...ob, fname:'nre'})}}>{JSON.stringify(ob)}</div>
    );
}
 
export default Kind;