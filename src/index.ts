import  Express, { Router }  from "express"
import routes from "./routes/routes"
import connectToMongoDB from './config/database/databaseconfig'
import { savePerson } from "./test/testes2"





connectToMongoDB()
const app = Express()

app.use(routes)


savePerson()


app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})





export default app