const $ = require('jquery');
const request = require('request');
const store = require('store')
const axios = require('axios')

var response, token = "020b06060a090b28";
async function isConnectedToITS() {
  console.log('isConnectedToITS');
  return (await axios.get('http://172.16.2.51')).status === 200
}
async function isMagicTokenAccessible() {
  console.log('ismagicTokenAccessible()');
  if(await isConnectedToITS()){
    response = (await axios.get('http://157.240.13.35')).request;
    return response.responseURL.substr(7, response.responseURL.indexOf('16.1')) === '172.16.1.11';
  }else { return false; }
}

async function sendConnectionRequest() {
  if(await isMagicTokenAccessible()){
    request.get('http://216.58.221.36/', function (err, res, html) {
      var options = { method: 'POST',
        url: 'http://172.16.1.11:1000/',
        headers:
          {   'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' },
        form:
          { magic: res.req.path.substr(res.req.path.indexOf('?')+ 1),
            username: 'b216008',
            password: '*******',
            '4Tredir': 'testing' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      });
    })

  }else troubleShootProblem();
}

function troubleShootProblem() {
  console.log('troubleShootFunction')
}
var connect = function (data) {
  sendConnectionRequest()
};
var logout = function () {
  if(token){
    axios.get('http://172.16.1.11:1000/logout?' + token);
    console.log("userLogged out");
  }else{
    console.log("NotLoggedIn")
  }
};

$('#connect').click(function () {
  connect()
})
$('#logout').click(function () {
  logout();
})
