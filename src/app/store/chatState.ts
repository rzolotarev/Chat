import { Message } from "src/app/models/message";
import { ADD_MESSAGE, REMOVE_MESSAGE, ADD_COMMAND, AUTHENTICATE } from '../store/actions';

//TODO: I use IAppState. Of course on the beginig level I can avoid using redux, 
//but when the chat getting larger and I will use a lot of views which are independent of each other and have access to the same data, 
//redux will be a great helper to keep the views in sync.
//Also It would be easy to add new feature for instance chatSoundsEnabled: false to a store and keep this value in one place.
export interface IChatState {    
    currentMessage: Message;
    author: string;
    isAuthenticated: boolean;
}

export const INIT_STATE : IChatState = {    
    currentMessage: null,
    author: '',
    isAuthenticated: false
};

export function rootReducer(state: IChatState, action) : IChatState {
    switch(action.type) {        
        case ADD_MESSAGE:
        return Object.assign({}, state, { currentMessage: Object.assign({}, action.message)});
        case ADD_COMMAND:             
            return Object.assign({}, state, { currentMessage: Object.assign({}, action.message)});
        case AUTHENTICATE: 
            return Object.assign({}, state, { author: action.author, isAuthenticated: true });       
    }
    return state;
}