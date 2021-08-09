import { useRef, useState } from 'react';
import './kind.css'

const Kind = ({prop}) => {



    // defining the container to give every child an onclick event 
    const kindContainer = useRef();
    console.log(kindContainer.current);
    // i'll shortcut the the name via creating another variable like this from kindContainer.current to kindCon and get all of the children in this vaiable
    const kindKids = kindContainer.current.querySelectorAll('.kind');
    console.log(kindKids);
    // then here we give a func to every child
    kindKids.forEach(element => {
        element.onClick = ()=>{
            // this varaible contains the data-kind attribute 
            let kindAttr = element.getAttribute('data-kind');

            prop.changeOption({key:'kind', value:kindAttr})
            prop.setCurrentWindow(kindAttr)
        }
    });



    return (
    <div className="kind-container" ref={kindContainer} >
        <div className="kind" data-kind='drink'>Drink</div>
        <div className="kind" data-kind='sweet'>Sweet</div>
        <div className="kind" data-kind='lorem'>lorem</div>
        <div className="kind" data-kind='ipsum'>ipsum</div>
        <div className="kind" data-kind='ipsum'>food</div>
    </div>
    );
}
 
export default Kind;