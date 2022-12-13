import Personagem from '../Models/Personagem'
import { EspadaLonga,Machado } from '../repositorios/RespositorioDeArmas/Armas'

const Emilly = new Personagem ({
    nomeDoJogador:'Emilly',
    nome:'Emy',
    raca:'humano',
    classe:'barbaro',
    nivel:1,
    experiencia:0,
    forca:15,
    destreza:16,
    constituicao:14,
    inteligencia: 6,
    sabedoria: 5,
    carisma:10,
    arma:Machado}) 
 
export async function savePerson(){
    try{
       await Emilly.save()
       console.log('Salvo com sucesso!')
    }catch(err){console.log(err)}
    }
    