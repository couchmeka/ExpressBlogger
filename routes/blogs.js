const express = require('express');
const router = express.Router();

const { validateBlogs } = require("../validation/blogs");

const blogList = []

const blogs = [

    
        {
              title: "dicta",
          text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
          author: "Darren Abbott",
          category: ["Lorem", "sit", "amet"],
          createdAt: "2022-03-22T10:36:37.176Z",
          lastModified: "2022-03-22T10:36:37.176Z",
        },
        {
              title: "ducimus",
          text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
          author: "Luke Rogahn PhD",
          category: ["Lorem", "ipsum"],
          createdAt: "2022-03-22T15:16:56.285Z",
          lastModified: "2022-03-22T15:16:56.285Z",
        },
        {
              title: "quod",
          text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
          author: "Maryann Schneider",
          category: ["Lorem", "ipsum", "dolor", "sit", "amet"],
          createdAt: "2022-03-21T20:09:32.298Z",
          lastModified: "2022-03-21T20:09:32.298Z",
        },
        {
              title: "ut",
          text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
          author: "Dr. Lorenzo Anderson",
          category: ["ipsum", "dolor", "sit", "amet"],
          createdAt: "2022-03-21T23:07:53.447Z",
          lastModified: "2022-03-21T23:07:53.447Z",
        },
        {
              title: "id",
          text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
          author: "Bobbie Dach",
          category: ["amet"],
          createdAt: "2022-03-22T15:14:39.819Z",
          lastModified: "2022-03-22T15:14:39.819Z",
        },
      ]
    
    





/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        sucess: true, 
        route: "blogs", 
        message:"welcome to the blogs page"});

});

router.get('/all', (req, res) => {
  
  const title = req.query.title
  const text = req.query.text
  const author = req.query.author
  const category = req.query.category
  
  let queryResponse = []
  
  const allblogs = blogs.map((eachblog) =>{
    
    if(eachblog.title === title) {
     queryResponse.push(eachblog)

     }

     if(eachblog.text === text){

      queryResponse.push(eachblog)
     }
     if(eachblog.author === author){

      queryResponse.push(eachblog)
     }
     if(eachblog.category === category){

      queryResponse.push(eachblog)
     }

    
      })


        res.json({
    
            success: true,
            allMovies: queryResponse
        })
      
 })






      router.get('/single-blog/:titleToGet', (req, res) => {
    
        const titleToGet = req.params.titleToGet
    
        
          const singleBlog = blogs.find((singleblog)=>{
        
               return singleblog.title === titleToGet
          })
           
            res.json({
        
                success: true,
                singleBlog: singleBlog
                
            })
          
          })



          router.delete('/delete/:titleToDelete', (req,res) => {
      
          const blogToDelete = req.params.titleToDelete
          
          const indexOFBlog = blogs.findIndex((singleBlog)=>{
          
            console.log(singleBlog)
          return singleBlog.title === blogToDelete
          
          })
    
          blogs.splice(indexOFBlog, 1)
    
          res.json({
            success: true,
            blogs: blogs
          })
          })





          router.post("/create-one", (req, res) => {

            //try block, for validation code
            try {
          
              // anticipate fields of our post request /create-one
              // parse out request data to local variables
              const title = req.body.title;
              const text = req.body.text;
              const author = req.body.author;
              const category = req.body.category;
              
          
              //create userData object fields
              const blogData = {
                title: title,
                text: text,
                author: author,
                category: category,
                createdAt: new Date(),
                lastModified: new Date(),
              };
          
              
              //pass user data object to our validate function
              const blogDataCheck = validateBlogs(blogData);
          
              if (blogDataCheck.isValid === false) {
                throw Error(blogDataCheck.message)
                // res.json({
                //   success: false,
                //   message: userDataCheck.message,
                // });
                // return;
              }
          
              blogs.push(blogData);
          
              console.log("blogs ", blogList);
          
              res.json({
                success: true,
              });
            } catch (e) {
              // In the catch block, we always want to do 2 things: console.log the error and respond with an error object
              console.log(e);
              res.json({
                success: false,
                error: String(e)
              });
            }
          });






          router.put('/update-one/:blogTitle', (req, res)=>{

            const blogToFind = req.params.blogTitle
            
            
            const originalBlog = blogs.find((blog)=>{

              return blog.title === blogToFind
            })
    
            const blogIndex = blogs.findIndex((blog)=>{

              return blog.title === blogToFind
            })
          
            if (!originalBlog) {
              res.json({
                success: false,
                message: "Could not find blog"
              })
              return
            }
          
            const updatedBlog = {}
    
            if (req.body.title !== undefined){
                updatedBlog.title = req.body.title
              } else {
                updatedBlog.title = originalBlog.title
              }
            
              if (req.body.text !== undefined){
                updatedBlog.text = req.body.text
              } else {
                updatedBlog.text = originalBlog.text
              }
            
              if (req.body.author !== undefined){
                updatedBlog.author = req.body.author
              } else {
                updatedBlog.author = originalBlog.author
              }
              if (req.body.category !== undefined){
                updatedBlog.category = req.body.category
              } else {
                updatedBlog.category = originalBlog.category
              }
          
              updatedBlog.createdAt = new Date
              updatedBlog.lastModified = new Date

          try {

            const blogDataCheck = validateBlogs(updatedBlog);
          
            if (blogDataCheck.isValid === false) {
              throw Error(blogDataCheck.message)
              // res.json({
              //   success: false,
              //   message: userDataCheck.message,
              // });
              // return;
          }

        } catch (e) {
          // In the catch block, we always want to do 2 things: console.log the error and respond with an error object
          console.log(e);
          res.json({
            success: false,
            error: String(e)
          });
        }
            blogs[blogIndex] = updatedBlog

            console.log(blogs)
            res.json({
              success: true,
              updatedBlog: updatedBlog,
              blogs: blogs
              
            })
          })

module.exports = router;