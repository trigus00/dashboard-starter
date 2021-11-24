
// -------------------------Start Crypto Function -------------------------------

var axios = require('axios');



async function crypto(coin) {
    var config = {
        method: 'get',
        url: `http://api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=${coin}`,
        headers: {
          "X-CoinAPI-Key" : '302645aa-3d10-4796-9fa5-2d685126aee0'
         }
      };
      
    axios(config).then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

crypto
}
 // -------------------------End Crypto Function -------------------------------
crypto('Bitcoin')
