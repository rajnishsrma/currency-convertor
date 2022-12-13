import React, { useState } from 'react'
import { fetchExchangeRate } from '../services/apis';
import { currencies } from '../services/currencies'

function Section() {

    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    const changeFromHandler = (e) => {
        setFrom(e.target.value);
        // console.log(e.target.value)
    }

    const changeToHandler = (e)=>{
        setTo(e.target.value);

    }

    const changeAmountHandler = (e)=>{
        setAmount(e.target.value);
    } 
    
    const submitHandler = async (e)=>{
        e.preventDefault();
        // console.log(from, to)
       let res = await fetchExchangeRate(from);
    //console.log(res.data)
    let currencies_datas = res.data.conversion_rates;

    let converted_val = currencies_datas[to] ;

    let total_conversion_rate = converted_val * amount ;
    
    // console.log(total_conversion_rate)

    setResult(total_conversion_rate);

    }

  return (
    <div>
        
        <div class="top">
            <h1>Currency Converter</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo!</p>
        </div>
        <div class="line"></div>
        
        <div class="formElm">
            <form action="#" class="formTag">
               <input onChange={changeAmountHandler} type="number" id="amount" name="amount" placeholder="Amount" />

               <label for="contry1">From</label>
               <input list="contrys1"  id="contry1" name="contry1" onChange={changeFromHandler}/> 
               
               <datalist id="contrys1">
                {
                    currencies.map((currency, ind)=>{
                        return  <option value={currency}  />
                    })
                }
               </datalist>


               <label for="contry2">To</label>
               <input list="contrys2" type="text" id="contry2" name="contry2" onChange={changeToHandler} />
              
               <datalist id="contrys2">
              {
                currencies.map((currency, ind)=>{
                    return <option value= {currency}  />
                })
              }
               </datalist>
            </form>
        </div>

       <div class="res">
            <h3 class="text-black">Exchange rate</h3>
            <h2 class="text-black">{result}</h2>
            <button onClick={submitHandler} type="submit" class="btn1">Submit</button>
       </div>

       </div>
    
  )
}

export default Section