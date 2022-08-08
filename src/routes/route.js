const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

//============================================================================================================================
//problem-1

router.get('/No movie exists with this id’

',function(req,res){
    let Movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(Movies)
})

//Problem-2

router.get('/movies/:indexNumber',function(req,res){
    let movie=['Tarzan', 'Raid', 'Lord of the rings', 'Batman begins','Ms.Dhoni']
    
        let showmMovie
        if(req.params.indexNumber<movie.length){
            showmMovie=movie[req.params.indexNumber]
        }else{
            showmMovie="use a valid movie index"
        }
    
    res.send(showmMovie)

})


//Problem 3


router.get('/films',function(req,res){
    const films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       res.send(films)
       
})

//problem 5
router.get('/films/:filmId',function(req,res){
    const films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       let film

       if(req.params.filmId<=films.length&&req.params.filmId!=0){
        for(i=0;i<films.length;i++){
            if(req.params.filmId==films[i].id){
                film=films[i]
                break
            }
            
            else{
                film="No movie exists with this id "
            }
        }
       }
res.send(film)
       
})




//========================================================================================================================
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;