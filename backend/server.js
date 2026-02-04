import express, {json} from 'express'

const app = express()

const PORT = 5000
app.use(json)

app.listen(PORT, ()=>{
    console.log('Server is running');
    
})
