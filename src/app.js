import { PrismaClient } from "@prisma/client";
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
    res.send('genre added')
})

app.get('/findGenrebyId/:id',async (req,res)=>{
    const genre = await prisma.genre.findUnique(
        {where :
           { id: req.body.id}
        }
    )
    res.send(genre)
})

app.put('/updateGenrebyId',async (req,res)=>{
    await prisma.genre.update({
        where: {
            id: req.body.id
        },
        data: {
            name: req.body.name,
        },
    })
})

app.delete('/deleteGenrebyId',async (req,res)=>{
    await prisma.genre.delete({
        where: {
            id: req.body.id
        },
    })
    res.send('genre deleted')
})

app.listen(port, () => {
        console.log(`server is running on ${port}`)})

export default prisma;