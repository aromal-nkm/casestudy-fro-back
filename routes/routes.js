const express=require('express')
const router=express.Router()
const employee=require('../model/employeeData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

// GET OPERATION
// router.get('/get',async (req,res)=>{
//     try{
// const data=await employee.find();
// res.send(data);
//     }catch(error){
//         res.status(404).send('data not found')
//     }
// })
router.get('/employees', async (req, res) => {
    const employees = await employee.find();
    res.render("homepage",{employees});
});




//POST OP
router.post('/post',async (req,res)=>{
    try{
       var item=req.body;
       const data1=new employee(item)
       const saveddata=await data1.save();
       res.status(200).send('post sucessfully')
    } catch (error){
        res.status(404).send('post  unsucessfully')
    }


})
// put op
router.put('/put/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employee.findByIdAndUpdate(id,req.body)
        res.status(200).send('updated')
    } catch (error) {
        res.status(200).send('updated unsuccessfully')
    }
}) 
// delete
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employee.findByIdAndDelete(id)
        res.status(200).send('deleted')
    } catch (error) {
        res.status(200).send('deleted unsuccessfully')
    }
}) 
















module.exports=router