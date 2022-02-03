var express = require('express');
var router = express.Router();
var Movie = require('./Model/moviedatas')
//to fetch movies
router.get('/movie',async(req,res)=>{
    const imovie = await Movie.find()
    res.send(imovie)
})

//post

router.post("/movie",async(req,res)=>{  
    const im = new Movie({
        name:req.body.name, 
        rating:req.body.rating
    })

    await im.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "message":msg
            })
        }
    })

    //update 

    router.patch('/movie/:id',async (req,res)=>{
        const imov = await Movie.findOne({_id:req.params.id})
        imov.name = req.body.name
        imov.rating = req.body.rating
        await imov.save((err,msg)=>{
            if(err){
                res.status(500).json({
                    error:err
                })
            }
            else{
                res.status(200).json({
                    msg:msg
                })
            }
        })
    })

    //Delete

    router.delete("/movie/:id",async(req,res)=>{
        await Movie.deleteOne({_id:req.params.id},(err,msg)=>{
            if(err){
                res.status(500).json({
                    error:err
                })
            }
            else{
                res.status(200).json({
                    msg:msg
                })
            }
    
        })
    })
    
}); 

module.exports = router
