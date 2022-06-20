import axios from "axios"

// https://disease.sh/v3/covid-19/historical/pakistan?lastdays=30
const chartApi=async(Country)=>{
    if(Country==''){
        const {data}=await axios("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
        return data
    }
    else{
        const {data}=await axios(`https://disease.sh/v3/covid-19/historical/${Country}?lastdays=30`)
        return data
    }
}
export default chartApi