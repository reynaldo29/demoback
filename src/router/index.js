import { PeopleRouter } from "../components";

const listRoutes = [["/api",PeopleRouter]];

export const routes = (app) =>{
    listRoutes.forEach(([path,controller])=>{
        app.use(path,controller);
    });
}