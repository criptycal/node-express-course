const express = require ('express');
const app = express();

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

app.listen(8000, () => console.log("server is listening bro!"))

app.get('/users/:id', (req, res)  =>{
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user bro!',
        user: req.params.id
    })
})

