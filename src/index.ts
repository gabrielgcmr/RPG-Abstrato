import  Express, { Router }  from "express"
import routes from "./routes/routes"
import connectToMongoDB from './database/databaseconfig'





connectToMongoDB()
const app = Express()

app.use(routes)

app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})




export default app