const express = require('express');
const router = express.Router();

const { validateBlogs } = require("../validation/blogs");

//instantiate connection to db
const dbo = require('../db/conn')

//instantiate mongodb 
const { db } = require('../mongo');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const blogs = await db()
  .collection('sample_blogs')
  .find({})
  .limit(5)
  .toArray(function(err, result){
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    }); 

    res.json({
      sucess:true,
      blogs: blogs
    });

    
}); 


/* GET users listing. */



router.get('/all', async function(req, res, next) {

  const blogsAll = await db()
  .collection('sample_blogs')
  .find({})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: blogsAll
    });

});



router.get('/get-one', async function (req, res, next) {
  

  const title = req.query.title
 
  const queryFind = await db()
  .collection('sample_blogs')
  .find({title: title})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: queryFind
    });
});

    
   






router.get('/single-blog/:titleToGet', async function (req, res, next) {
    
 const titleToGet = req.params.titleToGet
    
  const queryFind = await db()
  .collection('sample_blogs')
  .find({title: titleToGet})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });

    res.json({
      sucess: true,
      blogs: queryFind
    });
          
 })



router.delete('/delete/:titleToDelete', async function (req,res, next) {
      
  const blogToDelete = req.params.titleToDelete
          
  const queryFind = await db()
  .collection('sample_blogs')
  .deleteOne({title: blogToDelete})
  .limit(5)
  .toArray(function (err, result) {
      if (err) {
      res.status(400).send('Error fetching listings!');
               } else {
                res.json(result);
              }
            });
        
            res.json({
              sucess: true,
              blogs: queryFind
            });
          })





router.post("/create-one", async function (req, res, next) {

            //try block, for validation code
           
          
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
          
              const queryFind = await db()
              .collection('sample_blogs')
              .insertOne(blogData, function (err, result) {
                if (err) {
                  res.status(400).send('Error inserting blog!');
                } else {
                  console.log(`Added a blog with id ${result.insertedId}`);
                  res.status(204).send("Added blog");
                }
              });

              res.json({
                sucess: true,
                blogs: queryFind
              });
          });






  

module.exports = router;