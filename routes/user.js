var express = require('express');
var router = express.Router();
var fileHelpers=require('../helpers/file-helpers');
const userHelpers=require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  fileHelpers.getAllFiles().then((files)=>{
    res.render('user/view-files',{files,user})
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response);
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
      req.session.loginErr="Invalid user name or password"
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
