import { Marca } from "@/model/marca";
import axios ,{AxiosInstance} from "axios";

export class MarcaClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5033/api/marca',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async buscaPorId(id : number): Promise<Marca> {
        try{
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

        
    public async listarTodos(): Promise<Marca[]>{
        try{
            return (await this.axiosClient.get<Marca[]>(`/listar`)).data
        
        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', marca)).data

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, marca: Marca): Promise<string>{
        try{
            return (await this.axiosClient.put(`/editar?id=${id}`, marca)).data
        
        } catch (error: any) {  
            return Promise.reject(error.response)
        }
    }

    public async desativar(marca: Marca): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${marca.id}`, marca)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async ativar(marca: Marca): Promise<void>{
        try{
            return (await this.axiosClient.put(`/ativar?id=${marca.id}`, marca)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<void>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new MarcaClient();