
import {test} from "../utils/fixtures";
import{expect} from "@playwright/test";

let authToken:string;

test.beforeAll("Get Token", async({api})=>{
    const tokenResponse =  await api
    .path("/users/login")
    .body({"user":{"email":"pwapiuser@test.com","password":"Welcome"}})
    .postRequest(200)

     authToken='Token '+tokenResponse.user.token;
    
})


test('First Test',async({api})=>{
   
   const response= await  api

    .path("articles")
    .params({limit:"10",offset:"0"})
    .getRequest(200)

    console.log(response)

})

test('Get Test Tags',async({api})=>{
    const response=await  api
    .path("tags")
    .getRequest(200)    
    expect(response.tags[0]).toEqual('Test')
    //expect(response.tags[1]).toBeLessThanOrEqual(10)
})

test('Create and Delete Article',async({api})=>{
    const createArticleResponse=await api 
    .path("/articles")
    .headers({Authorization:authToken})
    .body({
        "article":{
            "title":"Test Two Test",
            "description":"Test Description",
            "body":"Test Body",
            "tagList":[]
        }

    })
    .postRequest(201)
    expect(createArticleResponse.article.title).toEqual("Test TWO Test")
    const slugId=createArticleResponse.article.slug;

    const articleResponse=await api
    .path("/articles")
    .headers({Authorization:authToken})
    .params({limit:"10",offset:"0"})
    .getRequest(200)
    expect(articleResponse.articles[0].title).toEqual("Test TWO Test") 

    await api
    .path("/articles/" + slugId)
    .headers({Authorization:authToken})
    .deleteRequest(204)
    


})