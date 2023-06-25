import { Modelo } from "@/model/modelo";
import axios ,{AxiosInstance} from "axios";

export class ModeloClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5032/api/modelo',
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

    public async cadastrar(modelo: Modelo) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', modelo))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (modelo: Modelo): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar?id=${modelo.id}`, modelo)).data
        
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async desativar(modelo: Modelo): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${modelo.id}`, modelo)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(modelo: Modelo): Promise<void>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${modelo.id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new ModeloClient();