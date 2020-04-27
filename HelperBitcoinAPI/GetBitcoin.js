import Axios from "axios"


const GetBitcoin = () => {
  return Axios.get("https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-01-01&end=2020-03-10")
    .then(response => {
      return response.data.bpi

    })
  .catch(err =>{console.log("fail fetching data from coindesk API");
  })
}

export default GetBitcoin