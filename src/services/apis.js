import axios from "axios"
import { API_URL } from "./const"


export const fetchExchangeRate = async (CURRENCY) => {
   let res =  await axios.get(API_URL+CURRENCY) ;
   console.log(res)
   return res ;
}