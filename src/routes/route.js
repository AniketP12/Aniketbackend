const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//problem no 1
router.get('/movies',function(req,res){
    let movies=['rang de basanti','the shining','lord of the rings','batman begins']
    console.log("the list of movies",movies)
    res.send('list of movies'+movies)
})

//problem no 2
router.get('/movies/:indexnumber',function(req,res){
const movie$arr = ["Rang de basanti", "the shining",'lord of the rings','batman begins']
const index=req.params.indexnumber
console.group('print movie using index ==>',movie$arr)
res.send('movie name by index :'+ movie$arr[index])

})
//problem no 3
router.get('/movies3/:indexNumber',function(req,res){
    const movies3=["Rang de basanti", "the shining",'lord of the rings','batman begins']
    const index2=req.params.indexNumber
    if(index2 >=movies3.length){
        res.send("enter valid index no")
    }
    else{
        res.send(movies3[index2])
    }
})

//problem no 4

router.get('/film1',function(req,res){
    console.log("films are",req.params)
   let film1 =[ {
    "id": 1,
    "name": 'The Shining'
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   
    res.send(film1)
   // res.send('list of movies'+film1)


   
})
 module.exports = router;

 //problem no 5

 router.get('/films/:filmid', function (req, res) {                               
    let obj2 = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name":"Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
      let q=req.params.filmid
      if(q > obj2.length  ||  q==0){                                                  
      res.send("No movie exists with this id")
      }else{
     let q=req.params.filmid-1 
      res.send(obj2[q]) 
    }
});