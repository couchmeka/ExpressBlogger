const express = require('express');
const router = express.Router();

const blogs = [

      {
        title: "This is my story",
        message: "Life may be difficult but when it is difficult it is in the process of change",
        isRecommended: true,
        createdAt: new Date(),
        lastModified: new Date()
      }, 
      {
        title: "Where we go from here",
        message: " Never give up hope because no matter what life does it is not stagnant. Its not if things will change. Its when.",
        createdAt: new Date(),
        lastModified: new Date()
      }
    
    ];





/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        sucess: true, 
        route: "blogs", 
        message:"welcome to the blogs page"});

});

router.get('/all', (req, res) => {
    

    const allblogs = blogs.map((eachblog) =>{
    
          return eachblog
      })
        
        res.json({
    
            success: true,
            allMovies: allblogs
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

module.exports = router;