import { Contery } from "./class_contery.js";
import { declareEvents } from "./viewEvent.js";


const init=()=>{
    doApi()
    declareEvents(doApi)
}


const doApi=async(_searchQuery)=>{
    try{

        if(_searchQuery){
      let url=  `https://restcountries.com/v3.1/name/${_searchQuery}`;
        let resp=await fetch(url)
        let data=await resp.json()
        createContery(data)
        }

        else if(!_searchQuery){
            const urlParams=new URLSearchParams(window.location.search);
            let name=urlParams.get("name");
            if(name){
            let url=`https://restcountries.com/v3.1/name/${name}`;
            let resp=await fetch(url)
            let data=await resp.json()
            createContery(data)
            }
        
            else{
               let url=`https://restcountries.com/v3.1/name/israel`
                let resp=await fetch(url)
                let data=await resp.json()
                createContery(data)
            }
        
            }}
    catch(err){
        console.log(err)
        alert("Country name unknown")

    }
}

export const createContery = (_ar) => {
    document.querySelector("#id_row").innerHTML = "";
      let contery = new Contery("#id_row",_ar[0],_ar);
      contery.render();
}




init();