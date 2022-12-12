import { Monstro } from "../../ModelsTs/ModeloDeMonstros"
import { EspadaLonga,Mordida } from "../RespositorioDeArmas/Armas"

// Monstros--------------------------------------------------------------- 
export var Esqueleto = new Monstro('esqueleto', 10,14,15,6,8,5,EspadaLonga )
export var AranhaGigante = new Monstro('aranha gigante', 14,16,12,2,11,4,Mordida)
export var Lobo = new Monstro('lobo atroz',15,12,12,5,5,3,Mordida)
//-----------------------------------------------------------------------------