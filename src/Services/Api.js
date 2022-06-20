import axios from 'axios'
export const Api=async(Country)=>{
    if (Country==='') {
        const fetch=await (await axios(`https://disease.sh/v3/covid-19/all`)).data
        return fetch
        
    } else {
        const fetch=await (await axios(`https://disease.sh/v3/covid-19/countries/${Country}`)).data
        return fetch
    }
}