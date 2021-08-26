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
    let pdf=req.files.Pdf
    pdf.mv('./public/file-pdf/'+id+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    
  })
})

module.exports = router;
