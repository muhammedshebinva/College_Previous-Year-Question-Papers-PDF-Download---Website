var express = require('express');
var router = express.Router();
var fileHelpers=require('../helpers/file-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  fileHelpers.getAllFiles().then((files)=>{
    res.render('admin/view-files',{admin:true,files})
  })
  
});
router.get('/add-file',function(req,res){
  res.render('admin/add-file')
})
router.post('/add-file',(req,res)=>{
 
  fileHelpers.addFile(req.body,(id)=>{
    let pdf_sem1=req.files.Pdf_sem1
    let pdf_sem2=req.files.Pdf_sem2
    let pdf_sem3=req.files.Pdf_sem3
    let pdf_sem4=req.files.Pdf_sem4
    let pdf_sem5=req.files.Pdf_sem5
    let pdf_sem6=req.files.Pdf_sem6
    
    pdf_sem1.mv('./public/file-pdf/'+id+'sem1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    pdf_sem2.mv('./public/file-pdf/'+id+'sem2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    pdf_sem3.mv('./public/file-pdf/'+id+'sem3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    pdf_sem4.mv('./public/file-pdf/'+id+'sem4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    pdf_sem5.mv('./public/file-pdf/'+id+'sem5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    pdf_sem6.mv('./public/file-pdf/'+id+'sem6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    
  })
})

module.exports = router;
