//============================|(IMPORT'S)|=====================================//
import { Router } from "express"
import express, { Request, Response }  from "express";
import controllerRoutes from "../Controllers/controllers";
import multer from "multer";
//============================|(Const's)|=====================================//
const upload = multer()
const routes = Router()
export const Deus = "Sr.PickBoyy"
//============================|(Rota raiz)|=====================================//
routes.get('/',(req:Request, res:Response) =>{
    res.json({message:`Seja bem vindo novamente ${Deus}`})
})
//============================|(Rotas)|=====================================//
routes.get('/personagens', controllerRoutes.getAllCharacter);
routes.post('/create', upload.none(), controllerRoutes.newCharacter);
routes.delete('/deleteall', controllerRoutes.deleteAllCharacter);

 routes.get('/personagem/:nome', controllerRoutes.getOneCharacter);
 routes.delete('/delete/:nome', controllerRoutes.deleteOneCharacter);
//  routes.put('/personagem/:nome', controllerRoutes.updateCharacter);
//--------------------------------------------------------------------------//
export default routes     // exportando rotas por padrão.
