//username is unique for every user and used as key to look up data.
  
const users = {
    "kamlesh": {id:1, username: 'kamlesh', password: '123'},
    "john": {id:2, username: 'john', password: '123'},
    "jane": {id:3, username: 'jane', password: '123'}
}

const userDetails = {
    "kamlesh": {id:1, username: 'kamlesh', first_name: 'Kamlesh', last_name: 'Jha'},
    "john": {id:2, username: 'john', first_name: 'John', last_name: 'Doe'},
    "jane": {id:3, username: 'jane', first_name: 'Jane', last_name: 'Doe'}
}

 let _loggedInUsers = [];
  function setLoggedUser (username) {
      _loggedInUsers.push(username);
  }

  function removeLoggedInUser (username) {
      const index = _loggedInUsers.indexOf(username);
      _loggedInUsers.splice(index, 1);
  }

module.exports = {
    users: users,
    userDetails: userDetails,
    setLoggedUser: setLoggedUser,
    removeLoggedInUser: removeLoggedInUser

}    