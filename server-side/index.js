
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const d = new Date();
const month = d.getMonth()


app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended:false
}))



app.get('/', (req,res) => {

    res.render('index.ejs', {
      post:posts,
      date: d
   })

  
  })

  app.get('/post', (req,res) => {
    res.render('modify.ejs', {
      heading:'write post',
      submit: 'Upload post'
    })
  })
  

  app.get('/edit/:id', (req,res) => {
    const id = parseInt(req.params.id)

    const findPost = posts.find((post) => post.id === id)

    res.render('modify2.ejs', {
      heading:'Edit post',
      submit: 'Update post',
      post: findPost
    })
  })


app.post('/posts', (req,res) => {
    
    const newObj = {
     id: posts.length + 1,
     title: req.body.title,
     content: req.body.content,
     author: req.body.author
    
    }
 
    posts.push(newObj)
 
    
    res.redirect('/')
  })

  


app.post("/posts/:id", (req,res) => {

  
    const id = req.params.id

  const findPost = posts.find((post) => post.id == id)
  

  findPost.title = req.body.title || findPost.title 

  findPost.content  =  req.body.content ||findPost.content

  findPost.author = req.body.author || findPost.author
 
  res.redirect('/')

  
  
  
})

app.get("/posts/delete/:id", (req,res) => {
    const id = req.params.id

    const findPost = posts.findIndex((post) => post.id == id)
  
    posts.splice(findPost,1)
  
    res.redirect('/')

})



app.listen(port, (req,res) => {
  console.log(`server is listening on ${port}`)
})


const posts = [
  {
    id: 1,
    title: 'blogger jae',
    content: 'Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert.',
    author: 'suswan six'
  },{
    id: 2,
    title: 'Into my life',
    content: 'hello woelkskksk.',
    author: 'suswan zero'
  },{
    id: 3,
    title: 'blogger jade',
    content: 'Set in a post-apocalyptic world where the remains of humanity live behindwalls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert.',
    author: 'Maobu six'
  },
]