export class PageRequest{

    filter! : string
    currentPage! : number
    pageSize! : number

    sortField! : string
    direction! : string
    
    construtor(){
        this.filter = ''
        this.currentPage = 0
        this.pageSize = 10
        this.direction = 'asc'
    }

    public isSortable(): boolean{
        return this.sortField !== undefined && this.direction !== undefined
    }
}