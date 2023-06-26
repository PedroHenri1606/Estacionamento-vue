import axios, {AxiosInstance} from "axios";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Veiculo } from "@/model/veiculo";

export class VeiculoClient {   // Client é como se fosse a controller - ela se conecta com a API do IntelliJ

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5033/api/veiculo',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Veiculo> {
        try{
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

    
    public async listarTodos(): Promise<Veiculo[]>{
        try{
            return (await this.axiosClient.get<Veiculo[]>(`/listar`)).data
        
        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: Veiculo) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', veiculo))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (veiculo: Veiculo): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar/${veiculo.id}`, veiculo)).data
        
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(veiculo: Veiculo): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar/${veiculo.id}`, veiculo)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(veiculo: Veiculo): Promise<void>{
        try{
            return (await this.axiosClient.delete(`/deletar/${veiculo.id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new VeiculoClient();