var express = require('express');
var router = express.Router();
const session = require('express-session');

const { render, response } = require('../app');
var fileHelpers=require('../helpers/file-helpers');
var adminHelpers=require('../helpers/admin-helpers');
var userHelpers=require('../helpers/user-helpers');

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
  res.render('admin/admin-page')
  
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
  let admindata=req.session.admin
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
      res.redirect('/admin/adminLogin')
    }
  })
})
router.get('/adminLogout',(req,res)=>{
  req.session.destroy()
  res.redirect("/admin")
})
//*******/login signup********//

//************user Details page */////

router.get('/userDetails',async (req,res)=>{
  let Selected_Course_Users=await userHelpers.getUsersOfSelected_C(req.query.name)
  let admindata=req.session.admin
  let S_Course=req.query.name
  console.log(Selected_Course_Users);
  res.render('admin/userDetails',{Selected_Course_Users,admin:true,admindata,S_Course})
})

router.get('/Select_C_to_View_User/',(req,res,next)=>{
  let admindata=req.session.admin

  // let Selected_Course=req.query.name
  // console.log(Selected_Course)

  userHelpers.getAllUsers().then((users)=>{
    res.render('admin/Select_C_to_View_User',{users,admin:true,admindata})
  })
  
  
})
//************/user Details page *////
//Admin Details page


router.get('/Admin_Details',(req,res,next)=>{
  let admindata=req.session.admin
  adminHelpers.getAllAdmins().then((admins)=>{
    res.render('admin/Admin_Details',{admins,admin:true,admindata})
  })
})
//****Admin Details */

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

     // year2
     let Year2sem1pdf_sub1=req.files.Year2Sem1Pdf_sub1 
     let Year2sem1pdf_sub2=req.files.Year2Sem1Pdf_sub2
     let Year2sem1pdf_sub3=req.files.Year2Sem1Pdf_sub3
     let Year2sem1pdf_sub4=req.files.Year2Sem1Pdf_sub4
     let Year2sem1pdf_sub5=req.files.Year2Sem1Pdf_sub5
     let Year2sem1pdf_sub6=req.files.Year2Sem1Pdf_sub6
 
     let Year2sem2pdf_sub1=req.files.Year2Sem2Pdf_sub1
     let Year2sem2pdf_sub2=req.files.Year2Sem2Pdf_sub2
     let Year2sem2pdf_sub3=req.files.Year2Sem2Pdf_sub3
     let Year2sem2pdf_sub4=req.files.Year2Sem2Pdf_sub4
     let Year2sem2pdf_sub5=req.files.Year2Sem2Pdf_sub5
     let Year2sem2pdf_sub6=req.files.Year2Sem2Pdf_sub6
 
     let Year2sem3pdf_sub1=req.files.Year2Sem3Pdf_sub1
     let Year2sem3pdf_sub2=req.files.Year2Sem3Pdf_sub2
     let Year2sem3pdf_sub3=req.files.Year2Sem3Pdf_sub3
     let Year2sem3pdf_sub4=req.files.Year2Sem3Pdf_sub4
     let Year2sem3pdf_sub5=req.files.Year2Sem3Pdf_sub5
     let Year2sem3pdf_sub6=req.files.Year2Sem3Pdf_sub6
 
     let Year2sem4pdf_sub1=req.files.Year2Sem4Pdf_sub1
     let Year2sem4pdf_sub2=req.files.Year2Sem4Pdf_sub2
     let Year2sem4pdf_sub3=req.files.Year2Sem4Pdf_sub3
     let Year2sem4pdf_sub4=req.files.Year2Sem4Pdf_sub4
     let Year2sem4pdf_sub5=req.files.Year2Sem4Pdf_sub5
     let Year2sem4pdf_sub6=req.files.Year2Sem4Pdf_sub6
 
     let Year2sem5pdf_sub1=req.files.Year2Sem5Pdf_sub1
     let Year2sem5pdf_sub2=req.files.Year2Sem5Pdf_sub2
     let Year2sem5pdf_sub3=req.files.Year2Sem5Pdf_sub3
     let Year2sem5pdf_sub4=req.files.Year2Sem5Pdf_sub4
     let Year2sem5pdf_sub5=req.files.Year2Sem5Pdf_sub5
     let Year2sem5pdf_sub6=req.files.Year2Sem5Pdf_sub6
 
     let Year2sem6pdf_sub1=req.files.Year2Sem6Pdf_sub1
     let Year2sem6pdf_sub2=req.files.Year2Sem6Pdf_sub2
     let Year2sem6pdf_sub3=req.files.Year2Sem6Pdf_sub3
     let Year2sem6pdf_sub4=req.files.Year2Sem6Pdf_sub4
     let Year2sem6pdf_sub5=req.files.Year2Sem6Pdf_sub5
     let Year2sem6pdf_sub6=req.files.Year2Sem6Pdf_sub6

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

    // year2
   

    //sem1
    Year2sem1pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem1sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem1pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem1sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem1pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem1sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem1pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem1sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem1pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem1sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem1pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem1sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })


    //sem2
    Year2sem2pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem2sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem2pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem2sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem2pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem2sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem2pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem2sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem2pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem2sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem2pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem2sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    //sem3

    Year2sem3pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem3sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem3pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem3sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem3pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem3sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem3pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem3sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem3pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem3sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem3pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem3sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })

    //sem4
    Year2sem4pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem4sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem4pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem4sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem4pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem4sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem4pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem4sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem4pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem4sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem4pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem4sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })

    //sem 5
    Year2sem5pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem5sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem5pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem5sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem5pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem5sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem5pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem5sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem5pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem5sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem5pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem5sub6'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    //sem 6
    Year2sem6pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem6sub1'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem6pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem6sub2'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem6pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem6sub3'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem6pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem6sub4'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem6pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem6sub5'+'.pdf',(err)=>{
      if(!err){
        res.render("admin/add-file")
      }else{
        console.log(err);
      }
    })
    Year2sem6pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem6sub6'+'.pdf',(err)=>{
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

    // sem-1
    if(req.files.Sem1Pdf_sub1){
      let sem1pdf_sub1=req.files.Sem1Pdf_sub1
      sem1pdf_sub1.mv('./public/file-pdf/'+id+'sem1sub1'+'.pdf')
    }
    if(req.files.Sem1Pdf_sub2){
      let sem1pdf_sub2=req.files.Sem1Pdf_sub2
      sem1pdf_sub2.mv('./public/file-pdf/'+id+'sem1sub2'+'.pdf')
    }
    if(req.files.Sem1Pdf_sub3){
      let sem1pdf_sub3=req.files.Sem1Pdf_sub3
      sem1pdf_sub3.mv('./public/file-pdf/'+id+'sem1sub3'+'.pdf')
    }
    if(req.files.Sem1Pdf_sub4){
      let sem1pdf_sub4=req.files.Sem1Pdf_sub4
      sem1pdf_sub4.mv('./public/file-pdf/'+id+'sem1sub4'+'.pdf')
    }
    if(req.files.Sem1Pdf_sub5){
      let sem1pdf_sub5=req.files.Sem1Pdf_sub5
      sem1pdf_sub5.mv('./public/file-pdf/'+id+'sem1sub5'+'.pdf')
    }
    if(req.files.Sem1Pdf_sub6){
      let sem1pdf_sub6=req.files.Sem1Pdf_sub6
      sem1pdf_sub6.mv('./public/file-pdf/'+id+'sem1sub6'+'.pdf')
    }

    // sem-2
    if(req.files.Sem2Pdf_sub1){
      let sem2pdf_sub1=req.files.Sem2Pdf_sub1
      sem2pdf_sub1.mv('./public/file-pdf/'+id+'sem2sub1'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub2){
      let sem2pdf_sub2=req.files.Sem2Pdf_sub2
      sem2pdf_sub2.mv('./public/file-pdf/'+id+'sem2sub2'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub3){
      let sem2pdf_sub3=req.files.Sem2Pdf_sub3
      sem2pdf_sub3.mv('./public/file-pdf/'+id+'sem2sub3'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub4){
      let sem2pdf_sub4=req.files.Sem2Pdf_sub4
      sem2pdf_sub4.mv('./public/file-pdf/'+id+'sem2sub4'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub5){
      let sem2pdf_sub5=req.files.Sem2Pdf_sub5
      sem2pdf_sub5.mv('./public/file-pdf/'+id+'sem2sub5'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub6){
      let sem2pdf_sub6=req.files.Sem2Pdf_sub6
      sem2pdf_sub6.mv('./public/file-pdf/'+id+'sem2sub6'+'.pdf')
    }

    // sem-3
    if(req.files.Sem3Pdf_sub1){
      let sem3pdf_sub1=req.files.Sem3Pdf_sub1
      sem3pdf_sub1.mv('./public/file-pdf/'+id+'sem3sub1'+'.pdf')
    }
    if(req.files.Sem3Pdf_sub2){
      let sem3pdf_sub2=req.files.Sem3Pdf_sub2
      sem3pdf_sub2.mv('./public/file-pdf/'+id+'sem3sub2'+'.pdf')
    }
    if(req.files.Sem3Pdf_sub3){
      let sem3pdf_sub3=req.files.Sem3Pdf_sub3
      sem3pdf_sub3.mv('./public/file-pdf/'+id+'sem3sub3'+'.pdf')
    }
    if(req.files.Sem3Pdf_sub4){
      let sem3pdf_sub4=req.files.Sem3Pdf_sub4
      sem3pdf_sub4.mv('./public/file-pdf/'+id+'sem3sub4'+'.pdf')
    }
    if(req.files.Sem3Pdf_sub5){
      let sem3pdf_sub5=req.files.Sem3Pdf_sub5
      sem3pdf_sub5.mv('./public/file-pdf/'+id+'sem3sub5'+'.pdf')
    }
    if(req.files.Sem3Pdf_sub6){
      let sem3pdf_sub6=req.files.Sem3Pdf_sub6
      sem3pdf_sub6.mv('./public/file-pdf/'+id+'sem3sub6'+'.pdf')
    }

    // sem-4
    if(req.files.Sem4Pdf_sub1){
      let sem4pdf_sub1=req.files.Sem4Pdf_sub1
      sem4pdf_sub1.mv('./public/file-pdf/'+id+'sem4sub1'+'.pdf')
    }
    if(req.files.Sem4Pdf_sub4){
      let sem4pdf_sub2=req.files.Sem4Pdf_sub2
      sem4pdf_sub2.mv('./public/file-pdf/'+id+'sem4sub2'+'.pdf')
    }
    if(req.files.Sem4Pdf_sub3){
      let sem4pdf_sub3=req.files.Sem4Pdf_sub3
      sem4pdf_sub3.mv('./public/file-pdf/'+id+'sem4sub3'+'.pdf')
    }
    if(req.files.Sem4Pdf_sub4){
      let sem4pdf_sub4=req.files.Sem4Pdf_sub4
      sem4pdf_sub4.mv('./public/file-pdf/'+id+'sem4sub4'+'.pdf')
    }
    if(req.files.Sem4Pdf_sub5){
      let sem4pdf_sub5=req.files.Sem4Pdf_sub5
      sem4pdf_sub5.mv('./public/file-pdf/'+id+'sem4sub5'+'.pdf')
    }
    if(req.files.Sem4Pdf_sub6){
      let sem4pdf_sub6=req.files.Sem4Pdf_sub6
      sem4pdf_sub6.mv('./public/file-pdf/'+id+'sem4sub6'+'.pdf')
    }

    // sem-5
    if(req.files.Sem5Pdf_sub1){
      let sem5pdf_sub1=req.files.Sem5Pdf_sub1
      sem5pdf_sub1.mv('./public/file-pdf/'+id+'sem5sub1'+'.pdf')
    }
    if(req.files.Sem5Pdf_sub2){
      let sem5pdf_sub2=req.files.Sem5Pdf_sub2
      sem5pdf_sub2.mv('./public/file-pdf/'+id+'sem5sub2'+'.pdf')
    }
    if(req.files.Sem5Pdf_sub3){
      let sem5pdf_sub3=req.files.Sem5Pdf_sub3
      sem5pdf_sub3.mv('./public/file-pdf/'+id+'sem5sub3'+'.pdf')
    }
    if(req.files.Sem5Pdf_sub4){
      let sem5pdf_sub4=req.files.Sem5Pdf_sub4
      sem5pdf_sub4.mv('./public/file-pdf/'+id+'sem5sub4'+'.pdf')
    }
    if(req.files.Sem5Pdf_sub5){
      let sem5pdf_sub5=req.files.Sem5Pdf_sub5
      sem5pdf_sub5.mv('./public/file-pdf/'+id+'sem5sub5'+'.pdf')
    }
    if(req.files.Sem5Pdf_sub6){
      let sem5pdf_sub6=req.files.Sem5Pdf_sub6
      sem5pdf_sub6.mv('./public/file-pdf/'+id+'sem5sub6'+'.pdf')
    }

    // sem-6
    if(req.files.Sem6Pdf_sub1){
      let sem6pdf_sub1=req.files.Sem6Pdf_sub1
      sem6pdf_sub1.mv('./public/file-pdf/'+id+'sem6sub1'+'.pdf')
    }
    if(req.files.Sem6Pdf_sub2){
      let sem6pdf_sub2=req.files.Sem6Pdf_sub2
      sem6pdf_sub2.mv('./public/file-pdf/'+id+'sem6sub2'+'.pdf')
    }
    if(req.files.Sem2Pdf_sub3){
      let sem2pdf_sub3=req.files.Sem2Pdf_sub3
      sem2pdf_sub3.mv('./public/file-pdf/'+id+'sem2sub3'+'.pdf')
    }
    if(req.files.Sem6Pdf_sub4){
      let sem6pdf_sub4=req.files.Sem6Pdf_sub4
      sem6pdf_sub4.mv('./public/file-pdf/'+id+'sem6sub4'+'.pdf')
    }
    if(req.files.Sem6Pdf_sub5){
      let sem6pdf_sub5=req.files.Sem6Pdf_sub5
      sem6pdf_sub5.mv('./public/file-pdf/'+id+'sem6sub5'+'.pdf')
    }
    if(req.files.Sem6Pdf_sub6){
      let sem6pdf_sub6=req.files.Sem6Pdf_sub6
      sem6pdf_sub6.mv('./public/file-pdf/'+id+'sem6sub6'+'.pdf')
    }
//Year 2
    // sem-1
    if(req.files.Year2Sem1Pdf_sub1){
      let Year2sem1pdf_sub1=req.files.Year2Sem1Pdf_sub1
      Year2sem1pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem1sub1'+'.pdf')
    }
    if(req.files.Year2Sem1Pdf_sub2){
      let Year2sem1pdf_sub2=req.files.Year2Sem1Pdf_sub2
      Year2sem1pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem1sub2'+'.pdf')
    }
    if(req.files.Year2Sem1Pdf_sub3){
      let Year2sem1pdf_sub3=req.files.Year2Sem1Pdf_sub3
      Year2sem1pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem1sub3'+'.pdf')
    }
    if(req.files.Year2Sem1Pdf_sub4){
      let Year2sem1pdf_sub4=req.files.Year2Sem1Pdf_sub4
      Year2sem1pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem1sub4'+'.pdf')
    }
    if(req.files.Year2Sem1Pdf_sub5){
      let Year2sem1pdf_sub5=req.files.Year2Sem1Pdf_sub5
      Year2sem1pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem1sub5'+'.pdf')
    }
    if(req.files.Year2Sem1Pdf_sub6){
      let Year2sem1pdf_sub6=req.files.Year2Sem1Pdf_sub6
      Year2sem1pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem1sub6'+'.pdf')
    }

    // sem-2
    if(req.files.Year2Sem2Pdf_sub1){
      let sem2pdf_sub1=req.files.Year2Sem2Pdf_sub1
      Year2sem2pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem2sub1'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub2){
      let Year2sem2pdf_sub2=req.files.Year2Sem2Pdf_sub2
      Year2sem2pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem2sub2'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub3){
      let Year2sem2pdf_sub3=req.files.Year2Sem2Pdf_sub3
      Year2sem2pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem2sub3'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub4){
      let Year2sem2pdf_sub4=req.files.Year2Sem2Pdf_sub4
      Year2sem2pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem2sub4'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub5){
      let Year2sem2pdf_sub5=req.files.Year2Sem2Pdf_sub5
      Year2sem2pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem2sub5'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub6){
      let Year2sem2pdf_sub6=req.files.Year2Sem2Pdf_sub6
      Year2sem2pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem2sub6'+'.pdf')
    }

    // sem-3
    if(req.files.Year2Sem3Pdf_sub1){
      let Year2sem3pdf_sub1=req.files.Year2Sem3Pdf_sub1
      Year2sem3pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem3sub1'+'.pdf')
    }
    if(req.files.Year2Sem3Pdf_sub2){
      let Year2sem3pdf_sub2=req.files.Year2Sem3Pdf_sub2
      Year2sem3pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem3sub2'+'.pdf')
    }
    if(req.files.Year2Sem3Pdf_sub3){
      let Year2sem3pdf_sub3=req.files.Year2Sem3Pdf_sub3
      Year2sem3pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem3sub3'+'.pdf')
    }
    if(req.files.Year2Sem3Pdf_sub4){
      let Year2sem3pdf_sub4=req.files.Year2Sem3Pdf_sub4
      Year2sem3pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem3sub4'+'.pdf')
    }
    if(req.files.Year2Sem3Pdf_sub5){
      let Year2sem3pdf_sub5=req.files.Year2Sem3Pdf_sub5
      Year2sem3pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem3sub5'+'.pdf')
    }
    if(req.files.Year2Sem3Pdf_sub6){
      let Year2sem3pdf_sub6=req.files.Year2Sem3Pdf_sub6
      Year2sem3pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem3sub6'+'.pdf')
    }

    // sem-4
    if(req.files.Year2Sem4Pdf_sub1){
      let Year2sem4pdf_sub1=req.files.Year2Sem4Pdf_sub1
      Year2sem4pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem4sub1'+'.pdf')
    }
    if(req.files.Year2Sem4Pdf_sub4){
      let Year2sem4pdf_sub2=req.files.Year2Sem4Pdf_sub2
      Year2sem4pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem4sub2'+'.pdf')
    }
    if(req.files.Year2Sem4Pdf_sub3){
      let Year2sem4pdf_sub3=req.files.Year2Sem4Pdf_sub3
      Year2sem4pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem4sub3'+'.pdf')
    }
    if(req.files.Year2Sem4Pdf_sub4){
      let Year2sem4pdf_sub4=req.files.Year2Sem4Pdf_sub4
      Year2sem4pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem4sub4'+'.pdf')
    }
    if(req.files.Year2Sem4Pdf_sub5){
      let Year2sem4pdf_sub5=req.files.Year2Sem4Pdf_sub5
      Year2sem4pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem4sub5'+'.pdf')
    }
    if(req.files.Year2Sem4Pdf_sub6){
      let Year2sem4pdf_sub6=req.files.Year2Sem4Pdf_sub6
      Year2sem4pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem4sub6'+'.pdf')
    }

    // sem-5
    if(req.files.Year2Sem5Pdf_sub1){
      let Year2sem5pdf_sub1=req.files.Year2Sem5Pdf_sub1
      Year2sem5pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem5sub1'+'.pdf')
    }
    if(req.files.Year2Sem5Pdf_sub2){
      let Year2sem5pdf_sub2=req.files.Year2Sem5Pdf_sub2
      Year2sem5pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem5sub2'+'.pdf')
    }
    if(req.files.Year2Sem5Pdf_sub3){
      let Year2sem5pdf_sub3=req.files.Year2Sem5Pdf_sub3
      Year2sem5pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem5sub3'+'.pdf')
    }
    if(req.files.Year2Sem5Pdf_sub4){
      let Year2sem5pdf_sub4=req.files.Year2Sem5Pdf_sub4
      Year2sem5pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem5sub4'+'.pdf')
    }
    if(req.files.Year2Sem5Pdf_sub5){
      let Year2sem5pdf_sub5=req.files.Year2Sem5Pdf_sub5
      Year2sem5pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem5sub5'+'.pdf')
    }
    if(req.files.Year2Sem5Pdf_sub6){
      let Year2sem5pdf_sub6=req.files.Year2Sem5Pdf_sub6
      Year2sem5pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem5sub6'+'.pdf')
    }

    // sem-6
    if(req.files.Year2Sem6Pdf_sub1){
      let Year2sem6pdf_sub1=req.files.Year2Sem6Pdf_sub1
      Year2sem6pdf_sub1.mv('./public/file-pdf/'+id+'Year2sem6sub1'+'.pdf')
    }
    if(req.files.Year2Sem6Pdf_sub2){
      let Year2sem6pdf_sub2=req.files.Year2Sem6Pdf_sub2
      Year2sem6pdf_sub2.mv('./public/file-pdf/'+id+'Year2sem6sub2'+'.pdf')
    }
    if(req.files.Year2Sem2Pdf_sub3){
      let Year2sem2pdf_sub3=req.files.Year2Sem2Pdf_sub3
      Year2sem2pdf_sub3.mv('./public/file-pdf/'+id+'Year2sem2sub3'+'.pdf')
    }
    if(req.files.Year2Sem6Pdf_sub4){
      let Year2sem6pdf_sub4=req.files.Year2Sem6Pdf_sub4
      Year2sem6pdf_sub4.mv('./public/file-pdf/'+id+'Year2sem6sub4'+'.pdf')
    }
    if(req.files.Year2em6Pdf_sub5){
      let Year2sem6pdf_sub5=req.files.Year2Sem6Pdf_sub5
      Year2sem6pdf_sub5.mv('./public/file-pdf/'+id+'Year2sem6sub5'+'.pdf')
    }
    if(req.files.Year2Sem6Pdf_sub6){
      let Year2sem6pdf_sub6=req.files.Year2Sem6Pdf_sub6
      Year2sem6pdf_sub6.mv('./public/file-pdf/'+id+'Year2sem6sub6'+'.pdf')
    }
     
  //})
    
  })
})




module.exports = router;
