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

app.get('./users', (req, res) =>{
    res.json({
        success: true,
        message: 'Successfully got users. NICE!',
        users: mockUserData
    })
})

app.listen(8000, () =>{
    console.log("server is listening bro!")
})

