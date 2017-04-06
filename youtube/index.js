// API KEY: AIzaSyD1jvekzVEvWAKztyp18MZyH_G7SfyAs-A

const express = require('express')
const app = express()
// const request = require('request')

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 12000
const API_KEY = process.env.API_KEY

// let req = Youtube.search.list({
//   key: 'AIzaSyD1jvekzVEvWAKztyp18MZyH_G7SfyAs-A',
//   part: 'snippet',
//   q: 'funny'
// })

// request('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD1jvekzVEvWAKztyp18MZyH_G7SfyAs-A&part=snippet', (err, req, body) => {
//   if (err) console.log(err)
//   else {
//     console.log(body)
//   }
// })

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
