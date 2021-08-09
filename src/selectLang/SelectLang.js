import './selectLang.css'


const SelectLang = ({prop}) => {

    function changeLang(lang){
        prop.changeOption({key:"lang", value:lang});
        prop.setCurrentWindow('where')
    }

    return ( 
        <div className="lang-container">
            <button className="lang" data-lang='ar' 
                onClick={(e)=>{
                    changeLang(e.target.getAttribute('data-lang'))
                }}
            >عربي</button>
            <button className="lang" data-lang='en' 
                onClick={(e)=>{
                    changeLang(e.target.getAttribute('data-lang'))
                }}
            >English</button>
        </div>
     );
}
 
export default SelectLang;