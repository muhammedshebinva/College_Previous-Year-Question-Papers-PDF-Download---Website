var express = require('express');
var router = express.Router();
const session = require('express-session');
const { render } = require('../app');

var fileHelpers=require('../helpers/file-helpers');
const userHelpers=require('../helpers/user-helpers')

const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  fileHelpers.getAllFiles().then((files)=>{
    res.render('user/view-files',{files,user})
  })
});
router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    res.render('user/login',{"loginErr":req.session.loginErr})
    req.session.loginErr=false
  }
})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{

    req.session.loggedIn=true
    req.session.user=response
    res.redirect('/')
  })
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      req.session.loginErr="Invalid Username or Password"
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

//new
router.get('/selectCourse/:Year', function(req, res, next) {
  let user=req.session.user
  fileHelpers.getAllFiles().then((files)=>{
    res.render('user/selectCourse',{files,user})
  })
})

//*new
router.get('/sem-select/:id',verifyLogin,async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/sem-select',{file,user:true,user})
})

router.get('/download/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/download',{file,user})
})
router.get('/downloadSem2/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/downloadSem2',{file,user})
})
router.get('/downloadSem3/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/downloadSem3',{file,user})
})
router.get('/downloadSem4/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/downloadSem4',{file,user})
})
router.get('/downloadSem5/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/downloadSem5',{file,user})
})
router.get('/downloadSem6/:id',async(req,res)=>{
  let file=await fileHelpers.getFileDetails(req.params.id)
  let user=req.session.user
  res.render('user/downloadSem6',{file,user})
})







module.exports = router;
