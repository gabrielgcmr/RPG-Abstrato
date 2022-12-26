import {Request,Response } from "express"
import Character, { ICharacter } from "../Models/character";
//------------------------------------------------------------------------------------//
//========================|Pegar todos os Personagens do banco|===========================================//
const getAllPerson = (req:Request, res:Response) => {
    Character.find({}, (err:Error,data:ICharacter) => {
        if(err) {                                                                   //aprovado!
            return res.json({Error:err});
        }
        return res.json(data)
    })
};
//------------------------------------------------------------------------------------//
//========================|Criar um novo personagem|===========================================//
const newPerson = (req:Request,res:Response) => {
Character.findOne({nome: req.body.nome }, (err:Error, data:ICharacter) => {
        if(!data) {
            const newPerson = new Character(req.body)                                  //aprovado!
            newPerson.save((err,data) => {
                if(err) return res.json({Error: err});
                return res.json(Character)
            })
        } else {
            if(err) return res.json(`Algo deu errado tente novamente ${err}`)
            return res.json({message:"Personagem já existe."})
        }
})
};
//------------------------------------------------------------------------------------//
//========================|!DELETAR TODOS OS PERSONAGENS!|===========================================//
const deleteAllPerson = (req:Request, res:Response) => {
    Character.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});                    //aprovado!
        }
        return res.json({message: "Complete delete successful"});
    })
};
//------------------------------------------------------------------------------------//
//========================|Pegar uma pesonagem pelo nome|===========================================//
const getOnePerson = (req:Request, res:Response) => {
    let nome = req.params.nome; 

    Character.findOne({nome:nome}, (err:Error, data:ICharacter) => {             //aprovado!
    if(err || !data) {
        return res.json({message: "Personagem não existe."});
    }
    else {
    return res.json(data)
    } 
    });
};
//------------------------------------------------------------------------------------//
//========================|Deleta um personagem pelo nome|===========================================//
const deleteOnePerson = (req:Request, res:Response) => {
    const nome = req.params.nome

     Character.deleteOne({nome:nome}, (err:Error, data:ICharacter) => {

    if(!data) {
        return res.status(400).json({message: "Esse personagem não existe"});
    }
   
    else if (err) {
        return res.json(`Alguma dedu errado, tente novamente. ${err}`);
    }
    else {
        return res.json({message: "Personagem deletado com sucesso"});
    }
    });
};


//------------------------------------------------------------------------------------//
export default {getAllPerson, newPerson,deleteAllPerson,getOnePerson,deleteOnePerson} 