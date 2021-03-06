const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');

var express = require('express')
var cors = require('cors')
var app = express()

const {API_BASE_URL} = require('./config');

export const fetchUserProfile = (userid) => dispatch => {
    fetch(`${API_BASE_URL}/users/${userId}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(userProfile => {
        dispatch(fetchUserProfileSuccess(userProfile));
    }).catch(err => dispatch(fetchUserProfileError(err)));
};

var corsOptions = {
  origin: 'http:localhost:8000/cookbooks',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);
 app.get('/api/*', (req, res) => {
   res.json({ok: true});
 });

 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

 module.exports = {app};