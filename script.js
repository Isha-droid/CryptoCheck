document.addEventListener("DOMContentLoaded", function() {
    var btc = document.getElementById("bitcoin");
    var ethereum = document.getElementById("ethereum");
    var dogecoin = document.getElementById("dogecoin");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function(response) {
        // Check if the response has the expected structure
        if (response.bitcoin && response.ethereum && response.dogecoin) {
            // Update the innerHTML of the elements
            btc.innerHTML = response.bitcoin.usd;
            ethereum.innerHTML =  response.ethereum.usd;
            dogecoin.innerHTML = response.dogecoin.usd;
        } else {
            console.error("Unexpected response format:", response);
        }
    });
});
