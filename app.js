import express from 'express'
import dotenv from 'dotenv/config'

const port = process.env.PORT || 80

const app = express()

app.get('/',(req,res)=>{
    res.send('App Started')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})