export const declareEvents = (doApi) => {
    let id_input = document.querySelector("#id_input");
  
    id_input.addEventListener("keydown",(e) => {
      if(e.key == "Enter"){
        doApi(id_input.value);
      }
    })

    // let USA=document.querySelector("#id_usa")
    // USA.addEventListener("click",()=>{
    //   doApi(USA.innerHTML)
    // })

    // let ISA=document.querySelector("#id_isr")
    // ISA.addEventListener("click",()=>{
    //   doApi(ISA.innerHTML)
    // })

    // let UK=document.querySelector("#id_uk")
    // UK.addEventListener("click",()=>{
    //   doApi(UK.innerHTML)
    // })

    // let FRA=document.querySelector("#id_fra")
    // FRA.addEventListener("click",()=>{
    //   doApi(FRA.innerHTML)
    // })

    // let THA=document.querySelector("#id_tha")
    // THA.addEventListener("click",()=>{
    //   doApi(THA.innerHTML)
    // })


  }