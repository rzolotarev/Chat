import { Message } from "src/app/models/message";
import { ADD_MESSAGE, LOGOUT, ADD_COMMAND, LOGIN, RESPONSE_TO_COMMAND, REMOVE_ITEM } from '../store/actions';
import { ContentItem } from "../models/contentItem";

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
                                      data: action.value,
                                      author: state.author                                    
                                }),
                                ...state.contentItems.slice(index + 1)
                              ]
            });    
        case REMOVE_ITEM:               
            return Object.assign({}, state, {
                        contentItems: state.contentItems.filter(ci => ci.id != action.id)
                });    
        case LOGIN: 
            return Object.assign({}, state, { author: action.author, isAuthenticated: true });       
        case LOGOUT: 
            return Object.assign({}, state, { author: '', isAuthenticated: false }); 
    }
    return state;
}