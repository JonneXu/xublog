var sqlMap = {
  // 用户
  user: {
   // add: 'insert into user(id, name, age) values (0, ?, ?)',
    addArt: 'insert into articles(id, title, content, time) values (0, ?, ?, ?)',
    showArt: 'select *from articles',
    artDetail: 'select *from articles where id=?',
    delArt: 'delete from articles  where id=?'
  },
  log: {
    logUp: 'insert into users(id, name, password) values (0, ?, ?)',
    logCheck: 'select *from users where name=?'
  }
}

module.exports = sqlMap
