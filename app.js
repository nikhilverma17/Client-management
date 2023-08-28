const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
const Submission = require('./submission');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post('/submit', async (req, res) => {
    const newSubmission = new Submission(req.body);
  
    try {
      await newSubmission.save();
      res.status(200).json({ message: 'Data submitted successfully.' });
    } catch (error) {
      console.error('Insertion error:', error.message);
      res.status(500).json({ error: 'Failed to submit data.' });
    }
  });
  app.get('/submissions', async (req, res) => {
    try {
      const submissions = await Submission.find();
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Query error:', error.message);
      res.status(500).json({ error: 'Failed to fetch data.' });
    }
  });

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

  

app.listen(8000,()=>{
    console.log("port connected");
})

