

const express = require('express');
const api = express();
const PORT = 3001;

api.get('/api', (req, res) => {
    res.send('Hello, Taytenacious');

});

api.listen(PORT, () => {
    console.log(`Server is running on http://localhost${ PORT }`)
})

api.get('api/stories', (req,res) => {
    res.json({stories: []});
})

app.post('api/signup', (req, res) => {
    

   
    res.json({ message: 'Sign up successful!' });
});

