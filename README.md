## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

P.S. don't forget run npm i

##Description

Every message is a component. Base component 'app-command' is responsible for dynamically creating a new component. It takes a type of item (map, date, message...), read a component type from command-mapping-service and show it. If there is a need for a new command type, at first, you have to create a new component where all business logic and layout are put, secondly, add a new mapping record to command-mapping-service.

This app uses redux approach. Of course on the beginig level we can avoid using redux, but when the chat will be getting larger, we will use a lot of views which are independent of each other and have access to the same data, 
redux will be a great helper to keep the views in sync. It would be easy to add new feature for instance chatSoundsEnabled: false to a store and keep this value in one place.
All items are stored in a chatState. If you want to change application state you have to add logic to rootReducer in chatState.
