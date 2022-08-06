const date=new Date()


function NewDate(){
    console.log( console.log(date.toISOString().slice(0,10)))
}

function Month(){
    let month=date.getMonth()
    console.log(month)
    
}
function BatchInfo(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system")

}


module.exports.name= NewDate
module.exports.Month= Month
module.exports.Batch= BatchInfo