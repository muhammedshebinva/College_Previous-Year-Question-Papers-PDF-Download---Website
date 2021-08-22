var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let pgPrograms=[
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
  res.render('index', { pgPrograms,admin:false });
});

module.exports = router;
