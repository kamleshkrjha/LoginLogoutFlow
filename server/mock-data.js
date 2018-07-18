//username is unique for every user and used as key to look up data.
  
const users = {
    "kamlesh": {id:1, username: 'kamlesh', password: '123'},
    "ramesh": {id:2, username: 'ramesh', password: '123'},
    "suresh": {id:3, username: 'suresh', password: '123'},
    "mahesh": {id:4, username: 'mahesh', password: '123'}
}

const userDetails = {
    "kamlesh": {id:1, username: 'kamlesh', first_name: 'Kamlesh', last_name: 'Jha'},
    "ramesh": {id:2, username: 'ramesh', first_name: 'Ramesh', last_name: 'Jha'},
    "suresh": {id:3, username: 'suresh', first_name: 'Suresh', last_name: 'Jha'},
    "mahesh": {id:4, username: 'mahesh', first_name: 'Mahesh', last_name: 'Jha'}
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