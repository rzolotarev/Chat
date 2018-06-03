export class ContentItem {
    id: number;
    author: string;    
    isMine: boolean;
    type: string;
    data: any;    

    constructor(author: string, type: string = 'message', 
                data: any = null, isMine: boolean = false) {
        this.author = author;        
        this.type = type;
        this.data = data;
        this.isMine = isMine;        
    }
}