const User = require("../Models/UsersData");

exports.userSignUp = (req,res) => {
    const { firstName, lastName, email, password, number} = req.body;

    const user = new User({ 
        firstname : firstName,
        lastname : lastName,
        email : email,
        password : password,
        contact : number,        
    })

    user.save()
    .then(response => {
        res.status(200).json({message : "User Registed Sucessfully", user: response})
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.userLogin =(req,res) => {
    const { email, password} = req.body;

    User.find({email: email, password: password})
    .then( response => {
        if (response.length > 0) {
            res.status(200).json({message : "User Located", isAuthenticated : true, user: response })
        }
        else {
            res.status(200).json({message : "User Not Located", isAuthenticated : false, user: response })
        }
    })
    .catch(err => {
        res.status(500).json({ error : err})
    })
}