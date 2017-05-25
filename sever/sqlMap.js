var sqlMap = {
  // 用户
  user: {
   // add: 'insert into user(id, name, age) values (0, ?, ?)',
    addart: 'insert into articles(id, title, content) values (0, ?, ?)',
    showart: 'select *from articles'
  }
}

module.exports = sqlMap
