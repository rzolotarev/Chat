import { Message } from "src/app/models/message";
import { ADD_MESSAGE, REMOVE_MESSAGE, ADD_COMMAND } from './actions/actions';

//TODO: I use IAppState. Of course on the beginig level I can avoid using redux, 
//but when the chat getting larger and I will use a lot of views which are independent of each other and have access to the same data, 
//redux will be great helper to keep the views in sync.
//Also It would be easy to add new feature for instance chatSoundsEnabled: false to a store and keep this value in one place.
export interface IChatState {
    messages: Array<Message>;
    currentMessage: Message;
    author: string;
}

export const INIT_STATE : IChatState = {
    messages: [],
    currentMessage: null,
    author: "Roman"
};

export function rootReducer(state: IChatState, action) : IChatState {
    switch(action.type) {
        case ADD_MESSAGE: 
            action.message.id = state.messages.length + 1;
            return Object.assign({}, state, {
                messages: state.messages.concat(Object.assign({}, action.message))
            });
        case REMOVE_MESSAGE: 
            return Object.assign({}, state, {
                messages: state.messages.filter(m => m.id != action.id)
            });
        case ADD_COMMAND: 
            action.message.id = state.messages.length + 1;
            return Object.assign({}, state, {
                messages: state.messages.concat(Object.assign({}, action.message))
            });        
    }
    return state;
}