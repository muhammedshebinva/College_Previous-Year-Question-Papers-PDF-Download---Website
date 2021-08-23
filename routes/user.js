var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let ugPrograms=[
    {
      name:"BA English"
    },
    {
      name:"BSc Mathematics"
    },
    {
      name:"BCA"
    },
    {
      name:"BSc Computer Science"
    }
  ]
  let files=[
    {
      name:"M Com"
    },
    {
      name:"MSc Computer Science"
    },
    {
      name:"MA English"
    }
    
  ]
  res.render('index', { ugPrograms,files,admin:false });
});

module.exports = router;
