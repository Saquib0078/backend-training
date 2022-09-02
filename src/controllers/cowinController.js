let axios = require("axios");
const { query } = require("express");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)

        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let apiKey = req.query.appid

        const object = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        }

        let Weather = await axios(object)
        let data = Weather.data
        console.log(data)
        res.send(data)
    }
    catch (err) {
        res.send(err.message)

    }
}

let SortCities = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let CityObj = []
        for (i = 0; i = cities.length; i++) {
            let obj = { city: cities[i] }

            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${((cities[i]))}&appid=7896f4348c4a34bcb980693efd8488ae`)
            obj.temp = resp.data.main.temp
            CityObj.push(obj)
            let SortedCities = CityObj.sort(function (a, b) { return a.temp - b.temp })
            res.status(200).send({ status: true, data: SortedCities })

        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}

const MemeShare=async function(res,res){

try {
    let options={
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=&${text1}&username=${user}&password=${password}`
    }
    let result = await axios(options)
    res.send({data:result.data})

} catch(error) {
    res.send({status:false,error:"server error"})

}
      
}


module.exports.getWeather = getWeather
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.SortCities = SortCities
module.exports.MemeShare = MemeShare

