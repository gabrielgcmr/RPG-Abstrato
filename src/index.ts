import  Express, { Router }  from "express"
import routes from "./routes/routes"
import connectToMongoDB from './config/database/databaseconfig'
import cors from 'cors'

const app = Express()
connectToMongoDB()
app.use(Express.json()) // Pedido pra q o express aceite "Json"
app.use(routes)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST")
    app.use(cors())
    next()
})

app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})

export default app
