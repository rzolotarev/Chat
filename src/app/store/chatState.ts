import { Message } from "src/app/models/message";
import { ADD_MESSAGE, LOGOUT, ADD_COMMAND, LOGIN, RESPONSE_TO_COMMAND } from '../store/actions';
import { ContentItem } from "../models/contentItem";

//TODO: I use IAppState. Of course on the beginig level I can avoid using redux, 
//but when the chat getting larger and I will use a lot of views which are independent of each other and have access to the same data, 
//redux will be a great helper to keep the views in sync.
//Also It would be easy to add new feature for instance chatSoundsEnabled: false to a store and keep this value in one place.
export interface IChatState {
    contentItems: Array<ContentItem>;    
    author: string;
    isAuthenticated: boolean;
}

export const INIT_STATE : IChatState = {
    contentItems: [],        
    author: '',
    isAuthenticated: false
};

export function rootReducer(state: IChatState, action) : IChatState {
    switch(action.type) {        
        case ADD_MESSAGE:
            action.contentItem.id = state.contentItems.length + 1;
            return Object.assign({}, state, { 
                contentItems: state.contentItems.concat(Object.assign({}, action.contentItem))                
            });
        case ADD_COMMAND:             
            action.contentItem.id = state.contentItems.length + 1;
            return Object.assign({}, state, { 
                contentItems: state.contentItems.concat(Object.assign({}, action.contentItem))                
            });
        case RESPONSE_TO_COMMAND:
            let contentItem = state.contentItems.find(ci => ci.id == action.id);
            let index = state.contentItems.indexOf(contentItem);

            return Object.assign({}, state, {
                contentItems: [...state.contentItems.slice(0, index),
                                  Object.assign({}, contentItem, {
                                      type: 'responseToCommand',
                                      data: action.value                                      
                                }),
                                ...state.contentItems.slice(index + 1)
                              ]
            });            
        case LOGIN: 
            return Object.assign({}, state, { author: action.author, isAuthenticated: true });       
        case LOGOUT: 
            return Object.assign({}, state, { author: '', isAuthenticated: false }); 
    }
    return state;
}