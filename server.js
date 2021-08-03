const express = require ('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mockUserData = [
    {
        name: 'David'
    },
    {
        name: 'Victoria'
    }
]



app.get('/users', (req, res) =>
    res.json({
        success: true,
        message: 'Successfully got users. NICE!',
        users: mockUserData
    }))



app.get('/users/:id', (req, res)  =>{
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user bro!',
        user: req.params.id
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'billyTheProstitute';
    const mockPassword = 'superSecret';

    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'nice baby you get it! 🎉',
            token: 'encripted token goes here'
        })
    }else{
        res.json({
            success: false,
            message: `try againn 🤦‍♂️`
        })
    }
})

app.listen(8000, () => console.log("server is listening bro!"))

