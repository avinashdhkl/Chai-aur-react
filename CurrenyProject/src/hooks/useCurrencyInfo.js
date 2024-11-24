import { useEffect, useState } from "react"
function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        let url = `https://v6.exchangerate-api.com/v6/b8b76842d3d80c91000e28a4/latest/${currency}`
        fetch(url)
            .then((resp) => resp.json())
            .then((res) => setData(res["conversion_rates"]))
            // console.log("data",data)

    }, [currency])
   
    return data;
}

export default useCurrencyInfo