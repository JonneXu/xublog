var sqlMap = {
  // 用户
  user: {
   // add: 'insert into user(id, name, age) values (0, ?, ?)',
    addArt: 'INSERT INTO ARTICLES(ID, TITLE, CONTENT, TIME) VALUES (0, ?, ?, ?)',
    showArt: 'SELECT *FROM ARTICLES',
    artDetail: 'SELECT *FROM ARTICLES WHERE ID=?',
    delArt: 'DELETE FROM ARTICLES WHERE ID=?'
  },
  log: {
    logUp: 'INSERT INTO USERS(ID, NAME, PASSWORD) VALUES (0, ?, ?)',
    logCheck: 'SELECT *FROM USERS WHERE NAME=?'
  }
}

module.exports = sqlMap
