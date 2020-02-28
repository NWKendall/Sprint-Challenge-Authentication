const db = require('../database/dbConfig');

module.exports = {
  getUsers,
  getUser,
  getUserById,
  registerUser
}

function getUsers(){
  return db('users');
}

function getUser(filter){
  return db('users')
    .select('username', 'password', 'id')
    .where(filter)
}

function getUserById(id){
  return db('users')
  .select('id', 'username')
  .where({ id })
  .first();
}

function registerUser(user){
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return getUserById(id)
    })
}