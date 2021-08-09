import { useState } from 'react';
import './kind.css'

const Kind = ({prop}) => {

    const [ob, setOb] = useState({fname: 'ammar', lname:'car'})

    return (
    <div className="kind-container" onClick={()=>{prop.changeOption({key:'fname',value:'non'})}}>{JSON.stringify(prop.options)}</div>
    );
}
 
export default Kind;