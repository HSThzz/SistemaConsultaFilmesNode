class Filmes{
    
    id?: number
    original_title?: string
    overview?: string
    release_date?: string
    status?: string

    constructor(id?: number, original_title?: string, overview?: string, release_date?: string, status?: string){
        this.id = id 
        this.original_title = original_title
        this.overview = overview
        this.release_date = release_date
    }

    getId(){
        return this.id
    }

    getOriginalTitle(){
        return this.original_title
    }
    getOverview(){
        return this.overview
    }
    getReleaseDate(){
        return this.release_date
    }
    getStatus(){
        return this.status
    }

    setId(id: number){
        this.id = id
    }
    setOriginalTitle(original_title: string){
        this.original_title = original_title
    }
    setOverview(overview: string){
        this.overview = overview
    }
    setReleaseDate(release_date: string){
        this.release_date = release_date
    }
    setStatus(status: string){
        this.status = status
    }
}
export default Filmes