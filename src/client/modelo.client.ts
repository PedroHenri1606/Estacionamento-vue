import { Modelo } from "@/model/modelo";
import axios ,{AxiosInstance} from "axios";

export class ModeloClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5033/api/modelo',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Modelo> {
        try{
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

        
    public async listarTodos(): Promise<Modelo[]>{
        try{
            return (await this.axiosClient.get<Modelo[]>(`/listar`)).data
        
        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: Modelo) : Promise<string>{
        try{
            return (await this.axiosClient.post('', modelo))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, modelo: Modelo): Promise<string>{
        try{
            return (await this.axiosClient.put(`/editar?id=${id}`, modelo)).data
        
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(modelo: Modelo): Promise<string>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${modelo.id}`, modelo)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async ativar(modelo: Modelo): Promise<string>{
        try{
            return (await this.axiosClient.put(`/ativar?id=${modelo.id}`, modelo)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new ModeloClient();