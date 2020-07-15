/*
  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify,
  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict'

const axios = require('axios')
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial'

/* getWeather:
     Takes a zip code and queries the OpenWeatherMap API for the current weather. 
     It returns a text-formatted response.
*/

const getWeather = async function (zipCode) {

  try {
    // Get weather for the zip code provided
    const response = await axios({
      url: `${weatherURL}&zip=${zipCode}&APPID=${process.env.APIkey}`,
      method: 'get',
      port: 443,
      responseType: JSON
    })

    // Build natural response
    const weather = `Weather in ${response.data.name}: ${response.data.weather[0].description}, currently ${parseInt(response.data.main.temp)} degrees with a low of ${parseInt(response.data.main.temp_min)} and a high of ${parseInt(response.data.main.temp_max)}.`
    console.log('getWeather response: ', weather)
    return weather

  } catch (err) {
    console.error('getWeather error: ', err)
    return 'Sorry, there was a problem with the weather service.'
  }
}

module.exports = { getWeather }
