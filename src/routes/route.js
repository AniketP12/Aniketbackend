const express = require('express');
const router = express.Router();///test-you
const logger = require("logger");
const lodash= require('lodash')
//importing a custom module
//const xyz = require('../logger')
//importing external package
//const underscore = require('underscore')
const abc=require('../logger/logger')
const def=require('../util/helper')
const ghi=require('../validator/formatter')

// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
//     //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
    // res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
// });no
router.get('/test-you',function(req,res){
    console.log('calling my function',abc.myfunction())
    console.log('current information',def.TIME())
    console.log('Trim upeer and lower caes',ghi.tr())
    const array=["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"]
    console.log(lodash.chunk(array,4))
    const array2=[1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(array2))
 const p=[1,2,3,4,5]
 const q=[2,3,4,5,6]
 const r=[4,5,6,7,8]
 const s=[9,8,6,4,3]
 const t=[0,7,4,5,3]
 console.log(lodash.union(p,q,r,s,t))

 let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],
 ["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(pairs))
  

 res.send('My second api!')
})
module.exports = router;


