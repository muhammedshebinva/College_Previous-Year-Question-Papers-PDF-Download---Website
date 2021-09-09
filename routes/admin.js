var express = require('express');
var router = express.Router();
const session = require('express-session');

const { render, response } = require('../app');
var fileHelpers=require('../helpers/file-helpers');
var adminHelpers=require('../helpers/admin-helpers')

const verifyAdminLogin=(req,res,next)=>{
  if(req.session.loggedin){
    next()
  }else{
    res.redirect('/admin/adminLogin')
  }
}
/* GET users listing. */



router.get('/', function(req, res, next) {
  let admindata=req.session.admin
  console.log(admindata);
  fileHelpers.getAllFiles().then((files)=>{
    res.render('admin/view-files',{files,admin:true,admindata})
  })
  
});

///////////////////////

router.get('/admin-page',function(req,res){
  fileHelpers.getAllFiles().then((files)=>{
    res.render('admin/admin-page',{admin})
  })
})
////////////////////////

///******login signup*******/////

router.get('/adminLogin',(req,res)=>{
  let admindata=req.session.admin
  if(req.session.loggedin){
    res.redirect('/admin')
  }else{

    res.render('admin/adminLogin',{"loginErr":req.session.loginErr,admin:true,admindata})
    loginErr=false
  }
  
})

router.get('/adminSignup',verifyAdminLogin,(req,res)=>{
  res.render('admin/adminSignup',{admin:true,admindata})
})
router.post('/adminSignup',(req,res)=>{
  adminHelpers.doadminSignup(req.body).then((response)=>{
    console.log(response);
  })
})
router.post('/adminLogin',(req,res)=>{
  adminHelpers.doadminLogin(req.body).then((response)=>{
    if(response.loginStatus){
      req.session.loggedin=true
      req.session.admin=response.admin
      res.redirect('/admin')
    }else{
      req.session.loginErr="Invalid username or Password"
      res.redirect('/admin/adminLogin',{admin:true})
    }
  })
})
router.get('/adminLogout',(req,res)=>{
  req.session.destroy()
  res.redirect("/admin")
})
//*******/login signup********//

//************user Details page */////
router.get('/userDetails',(req,res)=>{
  let admindata=req.session.admin
  res.render('admin/userDetails',{admin:true,admindata})
  
})
//************/user Details page *////


router.get('/add-file',verifyAdminLogin,function(req,res){
  let admindata=req.session.admin
  res.render('admin/add-file',{admin:true,admindata})
})
router.post('/add-file',(req,res)=>{
 
  fileHelpers.addFile(req.body,(id)=>{
    let pdf_sub1=req.files.Pdf_sub1
    let pdf_sub2=req.files.Pdf_sub2
    let pdf_sub3=req.files.Pdf_sub3
    let pdf_sub4=req.files.Pdf_sub4
    let pdf_sub5=req.files.Pdf_sub5
    let pdf_sub6=req.files.Pdf_sub6

    let sem1pdf_sub1=req.files.Sem1Pdf_sub1
    let sem1pdf_sub2=req.files.Sem1Pdf_sub2
    let sem1pdf_sub3=req.files.Sem1Pdf_sub3
    let sem1pdf_sub4=req.files.Sem1Pdf_sub4
    let sem1pdf_sub5=req.files.Sem1Pdf_sub5
    let sem1pdf_sub6=req.files.Sem1Pdf_sub6

    let sem2pdf_sub1=req.files.Sem2Pdf_sub1
    let sem2pdf_sub2=req.files.Sem2Pdf_sub2
    let sem2pdf_sub3=req.files.Sem2Pdf_sub3
    let sem2pdf_sub4=req.files.Sem2Pdf_sub4
    let sem2pdf_sub5=req.files.Sem2Pdf_sub5
    let sem2pdf_sub6=req.files.Sem2Pdf_sub6

    let sem3pdf_sub1=req.files.Sem3Pdf_sub1
    let sem3pdf_sub2=req.files.Sem3Pdf_sub2
    let sem3pdf_sub3=req.files.Sem3Pdf_sub3
    let sem3pdf_sub4=req.files.Sem3Pdf_sub4
    let sem3pdf_sub5=req.files.Sem3Pdf_sub5
    let sem3pdf_sub6=req.files.Sem3Pdf_sub6

    let sem4pdf_sub1=req.files.Sem4Pdf_sub1
    let sem4pdf_sub2=req.files.Sem4Pdf_sub2
    let sem4pdf_sub3=req.files.Sem4Pdf_sub3
    let sem4pdf_sub4=req.files.Sem4Pdf_sub4
    let sem4pdf_sub5=req.files.Sem4Pdf_sub5
    let sem4pdf_sub6=req.files.Sem4Pdf_sub6

    let sem5pdf_sub1=req.files.Sem5Pdf_sub1
    let sem5pdf_sub2=req.files.Sem5Pdf_sub2
    let sem5pdf_sub3=req.files.Sem5Pdf_sub3
    let sem5pdf_sub4=req.files.Sem5Pdf_sub4
    let sem5pdf_sub5=req.files.Sem5Pdf_sub5
    let sem5pdf_sub6=req.files.Sem5Pdf_sub6

    let sem6pdf_sub1=req.files.Sem6Pdf_sub1
    let sem6pdf_sub2=req.files.Sem6Pdf_sub2
    let sem6pdf_sub3=req.files.Sem6Pdf_sub3
    let sem6pdf_sub4=req.files.Sem6Pdf_sub4
    let sem6pdf_sub5=req.files.Sem6Pdf_sub5
    let sem6pdf_sub6=req.files.Sem6Pdf_sub6

    //sem1
    sem1pdf_sub1.mv('./public/file-pdf/'+id+'sem1sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem1pdf_sub2.mv('./public/file-pdf/'+id+'sem1sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem1pdf_sub3.mv('./public/file-pdf/'+id+'sem1sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem1pdf_sub4.mv('./public/file-pdf/'+id+'sem1sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem1pdf_sub5.mv('./public/file-pdf/'+id+'sem1sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem1pdf_sub6.mv('./public/file-pdf/'+id+'sem1sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })


    //sem2
    sem2pdf_sub1.mv('./public/file-pdf/'+id+'sem2sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem2pdf_sub2.mv('./public/file-pdf/'+id+'sem2sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem2pdf_sub3.mv('./public/file-pdf/'+id+'sem2sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem2pdf_sub4.mv('./public/file-pdf/'+id+'sem2sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem2pdf_sub5.mv('./public/file-pdf/'+id+'sem2sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem2pdf_sub6.mv('./public/file-pdf/'+id+'sem2sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    //sem3

    sem3pdf_sub1.mv('./public/file-pdf/'+id+'sem3sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem3pdf_sub2.mv('./public/file-pdf/'+id+'sem3sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem3pdf_sub3.mv('./public/file-pdf/'+id+'sem3sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem3pdf_sub4.mv('./public/file-pdf/'+id+'sem3sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem3pdf_sub5.mv('./public/file-pdf/'+id+'sem3sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem3pdf_sub6.mv('./public/file-pdf/'+id+'sem3sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })

    //sem4
    sem4pdf_sub1.mv('./public/file-pdf/'+id+'sem4sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem4pdf_sub2.mv('./public/file-pdf/'+id+'sem4sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem4pdf_sub3.mv('./public/file-pdf/'+id+'sem4sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem4pdf_sub4.mv('./public/file-pdf/'+id+'sem4sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem4pdf_sub5.mv('./public/file-pdf/'+id+'sem4sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem4pdf_sub6.mv('./public/file-pdf/'+id+'sem4sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })

    //sem 5
    sem5pdf_sub1.mv('./public/file-pdf/'+id+'sem5sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem5pdf_sub2.mv('./public/file-pdf/'+id+'sem5sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem5pdf_sub3.mv('./public/file-pdf/'+id+'sem5sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem5pdf_sub4.mv('./public/file-pdf/'+id+'sem5sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem5pdf_sub5.mv('./public/file-pdf/'+id+'sem5sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem5pdf_sub6.mv('./public/file-pdf/'+id+'sem5sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    //sem 6
    sem6pdf_sub1.mv('./public/file-pdf/'+id+'sem6sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem6pdf_sub2.mv('./public/file-pdf/'+id+'sem6sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem6pdf_sub3.mv('./public/file-pdf/'+id+'sem6sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem6pdf_sub4.mv('./public/file-pdf/'+id+'sem6sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem6pdf_sub5.mv('./public/file-pdf/'+id+'sem6sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    sem6pdf_sub6.mv('./public/file-pdf/'+id+'sem6sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    
    
    
  })
})

router.get('/delete-file/:id',verifyAdminLogin,(req,res)=>{
  let fileId=req.params.id
  
  fileHelpers.deleteFile(fileId).then((response)=>{
    res.redirect('/admin/')
  })
})
router.get('/edit-file/:id',verifyAdminLogin,async (req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let admindata=req.session.admin
  console.log(file);
  res.render('admin/edit-file',{file,admin:true,admindata})
})
router.post('/edit-file/:id',(req,res)=>{
  let id=req.params.id
  fileHelpers.updateFile(req.params.id,req.body).then(()=>{
    res.redirect('/admin')
    if(req.files.Pdf_sem1){
      let pdf_sem1=req.files.Pdf_sem1
      pdf_sem1.mv('./public/file-pdf/'+id+'sem1'+'.pdf')
    }
    if(req.files.Pdf_sem2){
      let pdf_sem2=req.files.Pdf_sem2
      pdf_sem2.mv('./public/file-pdf/'+id+'sem2'+'.pdf')
    }
    if(req.files.Pdf_sem3){
      let pdf_sem3=req.files.Pdf_sem3
      pdf_sem3.mv('./public/file-pdf/'+id+'sem3'+'.pdf')
    }
    if(req.files.Pdf_sem4){
      let pdf_sem4=req.files.Pdf_sem4
      pdf_sem4.mv('./public/file-pdf/'+id+'sem4'+'.pdf')
    }
    if(req.files.Pdf_sem5){
      let pdf_sem5=req.files.Pdf_sem5
      pdf_sem5.mv('./public/file-pdf/'+id+'sem5'+'.pdf')
    }
    if(req.files.Pdf_sem6){
      let pdf_sem6=req.files.Pdf_sem6
      pdf_sem6.mv('./public/file-pdf/'+id+'sem6'+'.pdf')
    }
  })
})


module.exports = router;
