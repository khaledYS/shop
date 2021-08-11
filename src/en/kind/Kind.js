import { useRef, useEffect} from 'react';
import './kind.css'

const Kind = ({prop}) => {

    // defining the ref
    const kindRef = useRef('')

    useEffect(()=>{

        kindRef.current.querySelectorAll('.kind').forEach(element => {

            element.onclick = (e)=>{
                const kind = e.target.getAttribute('data-kind');
                prop.changeOption({key:'kind', value:kind});
                prop.setCurrentWindow(kind)
            }

        });

    })


    return (
    <div ref={kindRef} className="kind-container" >
        <div className="kind" data-kind='drink'>Drink</div>
        <div className="kind" data-kind='sweet'>Sweet</div>
        <div className="kind" data-kind='lorem'>lorem</div>
        <div className="kind" data-kind='ipsum'>ipsum</div>
        <div className="kind" data-kind='food' >food</div>
    </div>
    );
}

export default Kind;