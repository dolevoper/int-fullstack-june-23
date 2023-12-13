import express from "express";

const app = express();

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// });

app.set('view engine', 'ejs');

app.use(express.static('pablic'));

// app.get('/',(req,res)=>{
//     console.log('here')
//     // res.json({"massege:":"error1"});
//     // res.send('HI my name');
//     res.render('index.ejs',{text: "world"});

// });
// app.get('/users/new', (req, res)=>{
//     res.send('users new form')
// });

// // app.get('/users', (req, res)=>{
// //     res.send('user list')
// // });


// app.post('/', (req, res)=>{
//     res.send('Creat new user')
// });

// app.get('/:id', (req, res)=>{
   
    
//     res.send(`Get user by id : ${req.params.id}` );
// });
// app.put('/ :id', (req, res)=>{
    
//     res.send(`update user by id : ${req.params.id}` );
// });
// app.delete('/ :id', (req, res)=>{
    
//     res.send(`delete user by id : ${req.params.id}` );
// });

// const users =[{name: 'Tom'} , {name: 'Itai'}];
// app.param('id',(req, res, next, id )=>{
//     console.log(users[id]);
//     next()
// });

app.listen(3000)
