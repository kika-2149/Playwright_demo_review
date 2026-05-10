import {  APIRequestContext } from "playwright";
import { expect } from "playwright/test";
export class RequestHandler{

    private request: APIRequestContext;
    private baseURL:string='';
    private defaultBaseURL:string;
    private apiPath:string='';
    private queryParams:Record<string,string>={}
    private apiHeaders:Record<string,string>={}
    private apiBody:Object={}

    constructor(request: APIRequestContext,apiBaseUrl:string){
        this.request = request;
        this.defaultBaseURL=apiBaseUrl;
    }
    url(url:string){
        this.baseURL=url;
        return this
    }
    path(path:string){
        this.apiPath=path;
        return this
        
    }
    params(params:Record<string,string>){
        this.queryParams=params;
        return this

    }
    headers(headers:Record<string,string>){
        this.apiHeaders=headers;
        console.log(this.apiHeaders)
        return this
        
    }
    body(body:Object){

        this.apiBody=body;
        return this;
    }

    // Post Request 
    async postRequest(statusCode:number){
        const url=this.getURL();
        const response=await this.request.post(url, {
            headers:this.apiHeaders,
            data:this.apiBody
        })
        expect(response.status()).toBe(statusCode)
        const responseJSON=await response.json()

        return responseJSON;

    }
    // Put Request 
    async putRequest(statusCode:number){
        const url=this.getURL();
        const response=await this.request.put(url, {
            headers:this.apiHeaders,
            data:this.apiBody   
        })
        expect(response.status()).toBe(statusCode)
        const responseJSON=await response.json();

        return responseJSON;

    }
    //Delete Request
    async deleteRequest(statusCode:number){
        const url=this.getURL();
        const response=await this.request.delete(url,{
            headers:this.apiHeaders        })
        expect(response.status()).toBe(statusCode)

       
    }

    // Get Request 
   async  getRequest(statusCode:number){
        const url= this.getURL();
        const reponse= await this.request.get(url,{
            headers:this.apiHeaders
        } )
        const responseJSON=await reponse.json()
        // to get the tstaus code 
        expect(reponse.status()).toBe(statusCode);
        return responseJSON;
    }
    // Get URL
    getURL(){
        // URL is built in javascript to handle query parameters and other URL components.
        //  It takes the base URL and appends the API path, then iterates over the query 
        // parameters and appends them to the URL's search parameters.
        //  Finally, it returns the complete URL as a string.
        const url=new URL(this.apiPath,this.baseURL || this.defaultBaseURL);
        
        for(const[key,value] of Object.entries(this.queryParams)){
            url.searchParams.append(key,value)
        }
        return url.toString();
    }
}