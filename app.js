const express=require("express");
const path=require("path");
const app=express();



const port=8000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

  app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res)=> {
    const yay= { }
    res.status(200).render('index.pug',yay);
    
})
app.get('/payroll', (req, res)=> {
  const yay= {  }
  res.status(200).render('payroll.pug',yay);
})
app.get('/benefits', (req, res)=> {
  const yay= {  }
  res.status(200).render('benefits.pug',yay);
})
app.get('/pricing', (req, res)=> {
  const yay= {  }
  res.status(200).render('pricing.pug',yay);
})



app.listen(port,()=>{
    console.log(`The application started succesfully on port ${port}`)
})