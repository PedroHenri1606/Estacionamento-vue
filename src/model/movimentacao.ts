import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Movimentacao {

    veiculo! : Veiculo
    condutor! : Condutor
    entrada! : Date
    saida! : Date
    tempo! : Date
    tempoDesconto! : Date
    tempoMulta! : Date
    valorDesconto! : number
    valorMulta! : number
    valorTotal! : number
    valorHora! : number
    valorHoraMulta! : number
}