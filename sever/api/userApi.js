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
  var sql = $sql.user.addArt
  var params = req.body
  conn.query(sql, [params.title, params.content, params.addTime], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

router.get('/articles/show', (req, res) => {
  var sql = $sql.user.showArt
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.json({
        error: 0,
        data: result
      })
    }
  })
})

router.get('/artDetail/:id', (req, res) => {
  var sql = $sql.user.artDetail
  var id = req.params.id
  conn.query(sql, [id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.json({
        error: 0,
        data: result
      })
    }
  })
})

router.post('/artDel/:id', (req) => {
  var sql = $sql.user.delArt
  var id = req.params.id
  conn.query(sql, [id], function (err) {
    if (err) {
      console.log(err)
    }
  })
})

router.post('/log/logUp', (req, res) => {
  var sql = $sql.log.logUp
  var logCheck = $sql.log.logCheck
  var params = req.body.userData
  conn.query(logCheck, [params.username], function (err, check) {
    if (err) {
      console.log(err)
    }
    if (check[0]) {
      res.json({
        ale: '用户名已存在'
      })
    } else {
      conn.query(sql, [params.username, params.password], function (err, result) {
        if (err) {
          console.log(err)
        }
        if (result) {
          jsonWrite(res, result)
        }
      })
    }
  })
})

router.post('/log/logIn', (req, res) => {
  var sql = $sql.log.logCheck
  var params = req.body.userData
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
module.exports = router

