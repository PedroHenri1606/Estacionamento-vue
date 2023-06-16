import { Marca } from "@/model/marca";
import axios ,{AxiosInstance} from "axios";

export class MarcaClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhot:8080/api/marca',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Marca> {
        try{
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', marca))

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (marca: Marca): Promise<void>{
        try{
            return (await this.axiosClient.put(`/editar?id=${marca.id}`, marca)).data
        
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

    public async deletar(marca: Marca): Promise<void>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${marca.id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}