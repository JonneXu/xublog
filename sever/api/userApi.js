var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}
//文章接口
router.post('/articles/input', (req, res) => {
  var sql = $sql.user.addart
  var params = req.body
  console.log(params)
  conn.query(sql, [params.title, params.content], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/articles/show', (req, res) => {
  var sql = $sql.user.showart
 // var params = res.body
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.json({
        error: 0,
        data: result
      })
      console.log(result)
    }
  })
})
//router.param('id', function (req, res, next, id) {
//  console.log('print id1 ' + id)
//  next()
//})
router.get('/artDetail/:id', (req, res) => {
  var sql = $sql.user.artdetail
  var id = req.params.id
  console.log(id)
  conn.query(sql, [id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.json({
        error: 0,
        data: result
      })
      console.log(result)
    }
  })
})
module.exports = router

