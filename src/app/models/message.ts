export class Message {
    id: number;
    author: string;
    messageText: string;
    isMine: boolean;
    type: string;
    data: any;

    constructor(author: string, messageText: string, type: string = 'message', 
                data: any = null, isMine: boolean = false) {
        this.author = author;
        this.messageText = messageText;
        this.type = type;
        this.data = data;
        this.isMine = isMine;
    }
}