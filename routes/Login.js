/* GET home page. */
var express = require('express');
var router  = express.Router();
var mongodb = require('mongodb');
router.get('/',function(req,res)
{
	console.log('In Login file in route folder');
  res.render('/public/views/main/main');
});

module.exports = router;