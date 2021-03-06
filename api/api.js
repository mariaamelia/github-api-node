

const  axios = require('axios');
const api = {
    baseUrl: "https://api.github.com",
}

const messageError = "Ops: User not found";


module.exports = app=>{
    
    //get users by name
    app.get('/api/users', (req, res)=>
    {    
            axios.get(api.baseUrl+"/search/users?q="+req.query.since+"&page=1&callback=getlink")
            .then( (res2)=> {
                console.log(res2)
                res.status(200).json(res2.data);
            })
            .catch(function(error){
                console.log(error);
                res.status(400).json(messageError);
            })
    })

    //get details user
    app.get('/api/users/:username/details', (req, res)=>
    {
        axios.get(api.baseUrl+`/users/`+ req.params.username )
        .then( (resAxio)=> {
            res.status(200).json(resAxio.data);
        }) 
        .catch(function(error){
            console.log(error);
            res.status(400).json(messageError);
        })
        ;
    })    

    app.get('/api/users/:username/repos', (req, res)=>
    {
        axios.get(api.baseUrl+`/users/`+ req.params.username +"/repos")
        .then( (resAxio)=> {
            res.status(200).json(resAxio.data);
        }) 
        .catch(function(error){
            res.status(400).json(messageError);
        });
    })        
}
