import { Router } from "express"

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
  })

routes.post('/personagem',(req,res)=>{
  
})


export default routes