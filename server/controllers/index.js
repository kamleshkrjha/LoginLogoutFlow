const express = require('express');
const router = express.Router();
const mock = require('../mock-data');

//redirect request to correct services
/* GET api listing. */
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        errorMessage: null
    });
})
router.post('/users/authenticate', (req, res) => {
    const mockUsers = mock.users;
    let username = req.body.username;
    let password = req.body.password;
    let user = mockUsers[username];
    setTimeout(() => {
        if(user) {
            if (user.password === password){
                mock.setLoggedUser(username);
                res.status(200).json({
                    success: true,
                    errorMessage: null,
                    data: mock.userDetails[username]
                    });
            } else {
                res.status(200).json({
                    success: false,
                    errorMessage: 'Incorrect Password'
                    }) 
            }
        } else {
            res.status(200).json({
                success: false,
                errorMessage: 'This user is not registered'
                })
        }
    }, 3000);
});

router.get('/users/logout/:username', (req, res) => {
    setTimeout(() => {
        mock.removeLoggedInUser(req.params.username);
    res.status(200).json({
        success: true,
        errorMessage: null});
    }, 2000)
})


module.exports = router;