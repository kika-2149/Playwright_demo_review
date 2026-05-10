import {test as base} from '@playwright/test';
import { RequestHandler } from './request-handler';

type MyFixtures={api:RequestHandler}

export const test = base.extend<MyFixtures>({
    api:async({request}, use)=>{   
        const baseURL="https://conduit-api.bondaracademy.com/api/";
        const requestHandler=new RequestHandler(request,baseURL);
        await use(requestHandler)

    }
})