import './where.css'
import takeaway from '../../img/icons/Takeaway.svg'
import dining from '../../img/icons/Dining.svg'

const Where = ({prop}) => {
    
    function changeWhere(where){
        prop.changeOption({key:'where', value:where})
        prop.setCurrentWindow('kind')
    }

    return ( 
        <div className="where-container">
            <button className="where" data-where='dinein' 
                onClick={
                    (e)=>{
                        changeWhere(e.target.getAttribute('data-where'))
                    }
                }
            > <span>Dine-In</span> <img src={dining} className='icon'/>  </button>
            <button className="where" data-where='takeaway' 
                onClick={
                    (e)=>{
                        changeWhere(e.target.getAttribute('data-where'))
                    }
                }
            >  <span>Take-Away</span> <img src={takeaway} className='icon'/></button>
        </div>
     );
}
 
export default Where;