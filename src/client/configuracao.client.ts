import { Configuracao } from "@/model/configuracao";
import axios, {AxiosInstance} from "axios";

export class ConfiguracaoClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5033/api/condutor',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscarPorId(id: number): Promise<Configuracao> {
        try{
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data

        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: Configuracao): Promise<void>{
        try{
            return (await this.axiosClient.post('/', configuracao))

        } catch(error : any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, configuracao: Configuracao): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar/${id}`, configuracao)).data
        
        } catch(error: any){
            return Promise.reject(error.response)  
        } 
    }
}

export default new ConfiguracaoClient();