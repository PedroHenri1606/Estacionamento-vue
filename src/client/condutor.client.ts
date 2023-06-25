import axios, {AxiosInstance} from "axios";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Condutor } from "@/model/condutor";

export class CondutorClient {   // Client é como se fosse a controller - ela se conecta com a API do IntelliJ

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5032/api/condutor',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Condutor> {
        try{
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

    public async listarTodos(): Promise<Condutor[]>{
        try{
            return (await this.axiosClient.get<Condutor[]>(`/listar`)).data
        
        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Condutor) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', condutor))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, condutor: Condutor): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar/${id}`, condutor)).data
        
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(condutor: Condutor): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar/${condutor.id}`, condutor)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(condutor: Condutor): Promise<void>{
        try{
            return (await this.axiosClient.delete(`/deletar/${condutor.id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }   
}

export default new  CondutorClient();