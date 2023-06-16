import { AbstractEntity } from "./abstract.entity"

export class Configuracao extends AbstractEntity{
    valorHora! : number
    valorMinutoMulta! : number
    inicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : Date
    tempoDeDesconto! : Date
    gerarDesconto! : boolean
    vagasMoto! : number
    vagasCarro! : number
    vagasVan! : number
        
}