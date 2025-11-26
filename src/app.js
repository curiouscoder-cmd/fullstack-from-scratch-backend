import { PrismaClient } from "@prisma/client/extension";
import express from "express"
const prisma = new PrismaClient();
const router = express.Router();
const port = 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')})



app.post('/addgenre',async (req,res)=>{
    await prisma.genre.create({
        data: {
            name: req.body.name,
        },
    })
})

app.get('/findGenre',async (req,res)=>{
    const genre = await prisma.genre.findMany(
        {where :
           { name: req.body.name}
        }
    )
    res.send(genre)
})


app.listen(port, () => {
        console.log(`server is running on ${port}`)})

export default prisma;