import axios, {AxiosInstance} from "axios";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Movimentacao } from "@/model/movimentacao";

export class MovimentacaoClient {   // Client é como se fosse a controller - ela se conecta com a API do IntelliJ

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhot:8080/api/movimentacao',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Movimentacao> {
        try{
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', movimentacao))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (movimentacao: Movimentacao): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar?id=${movimentacao.id}`, movimentacao)).data
        
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(movimentacao: Movimentacao): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${movimentacao.id}`, movimentacao)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}