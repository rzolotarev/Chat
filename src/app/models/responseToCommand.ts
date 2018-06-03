export class ResponseToCommand {    
    contentItemId: string = '';
    value: string = '';

    constructor(contentItemId: string, value: string) {
        this.contentItemId = contentItemId;
        this.value = value;
    }
}