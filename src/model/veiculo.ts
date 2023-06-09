import { AbstractEntity } from "./abstract.entity"
import { Cor } from "./cor"
import { Modelo } from "./modelo"
import { TipoVeiculo } from "./tipo.veiculo"

export class Veiculo extends AbstractEntity {

    placa! : string
    modelo! : Modelo
    cor! : Cor
    tipoVeiculo! : TipoVeiculo
    ano! : number
}