import axios from 'axios'
function findByPin(pincode, date) {
   axios({
    method: "get",
    url: `https://aqueous-ravine-73981.herokuapp.com/https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`,
    headers: {
      accept: "application/json",
      "Accept-Language": "en_US",
    },
  })
    .then(function (response) {
      if (response.data.sessions !== undefined) {
        return {
          status: true,
          result: response.data.sessions,
        };
      } else {
        throw "e";
      }
    })
    .catch(function (error) {
      return {
        status: false,
        message: "Sorry that's an error",
      };
    });
}

var ans = findByPin("515001","31-08-2021");
console.log(ans);
