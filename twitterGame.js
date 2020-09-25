// //Using javascript twit library 
// // const Twit = require('twit')
// // const notifier = require('node-notifier'); 
// // const open = require ('open'); 


// // var T = new Twit({
// //     consumer_key:         'SVnH5kwyE4vo0FNqdTyN5cX7R',
// //     consumer_secret:      'c89yXlUoFbflqLSiU2a1HeQ6xgBIOJ9eyeorxSlhXlG63R2IQk',
// //     access_token:         '2946524476-MLZeturDGkn4Xft4Y04kLbxXvfm06Iafy62lAOz',
// //     access_token_secret:  'A94XnYN3Q9E2Mpkr5T4jIvJizL8IrtD3P8JTHDChV1JEZ',

// //   }); 
// const fetch = require("node-fetch");
// const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=100";
// fetch(url, {
//   method: "GET",
//   headers: {
//     "consumer_key": "IZA8QlbDsgrT2YghH8QOuEfCE", 
//     "consumer_secret": "cFzakar8olvJZwKryzt3FyjtVnwHYl3wbHoG6dbhtt1E5NYlap",
//     "access_token": "2946524476-FkSBi5kntFcQI6lO4DDg7benuzy1VPtNrdi8Agc", 
//     "access_token_secret": "hdubkgbSAiCkxmJY016lHENI5zHfJeWYYhgc4VGmHbQ0X"
//   }
// }).then(resp => resp.json())
// .then(function(data) {
//   console.log(data)});

//Fetch tweets 
const fetch = require("node-fetch");
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk&count=100";
fetch(url, {
    method: "GET",
    headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAAW1HwEAAAAA%2BGd6bdh%2BAiU6HBDlWFUmIUOPBvI%3D7iy7pn9lrprF3agYNSda3mrDernlJ5MlOUV4WwNCq5ToUJVIdg"    }
}).then(resp => resp.json())
    .then(function (data) {
        console.log(data)
    });