
const selector_arr = document.querySelectorAll("select");
for(let  box of  selector_arr){
    for( curr_code in  countryList){
        new_option = document.createElement("option");
        new_option.innerText = curr_code ;
        new_option.value =  curr_code ;
        if(box.name==="country_1st" && curr_code==="USD"){
            new_option.selected = "selected";
        }
        else if(box.name==="country_1st" && curr_code==="INR"){
            new_option.selected = "selected";
        }
        box.append(new_option);
    }
    box.addEventListener("change",(evt)=>{                       
      updateflag(evt.target);
    });    
} 

 const updateflag = (element)=>{
    key  =  element.value;
    country_code = countryList[key];
    new_src = "https://flagsapi.com/"+ country_code +"/flat/64.png";
    img = element.parentElement.querySelector("img");
    img.src = new_src ;

 }

const fromCurr = document.querySelector(".select_container_1 select");
const toCurr = document.querySelector(".select_container_2 select");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
btn.addEventListener("click",(ele)=>{
  ele.preventDefault();
  get_exchange_rate();
});
async function get_exchange_rate(){
  let amt = document.querySelector("input");
  let amtVal = amt.value ;
  if(amtVal==""||amtVal<"0"){
    amtVal = 1;
    amtVal = "1";
  }
  const BASE_URL = "https://v6.exchangerate-api.com/v6/1025c3f3c2ec22ff8222adb5/latest"
  const URL = `${BASE_URL}/${fromCurr.value}`;
  fetch(URL).then(response => response.json()).then(result =>{
    let exchangeRate = result.conversion_rates[toCurr.value];
    let totalExchangeRate = (amtVal * exchangeRate).toFixed(2);
    console.log(totalExchangeRate);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value}`;
  })
}
window.addEventListener("click",(evt)=>{
  ele.preventDefault();
  get_exchange_rate();
})

