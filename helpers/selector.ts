import {Page,Locator} from "@playwright/test"



export class Selector {
readonly page:Page;

    constructor(page:Page){
        this.page=page;
        

    }
    //---------------------------------------------------
    //id selector
    id(id:string):Locator{
        return this.page.locator(`#${id}`)
    }
    //------------------------------------------------------------
    // class name selector
    class(name:string):Locator{
        return this.page.locator(`.${name}`)
    }
    //-----------------------------------------------------------
    //data test id selector 
    getByTestId(name:string):Locator{
        return this.page.getByTestId(name)
    }
    //---------------------------------------------
    getByPlaceholder(text:string):Locator{
        return this.page.getByPlaceholder(text)
    }
    // to get By Label
    getByLabel(text:string):Locator{
        return this.page.getByLabel(text)
    }
    // to get by Role 
    //---------------------------------------------------------------------------------------------
    getByRole(role:string,options?:{name:string}):Locator{
        return this.page.getByRole(role as any ,options)

    }
    // get by title 
    getByTitle(text: string): Locator {
    return this.page.getByTitle(text);
  }

  //-------------------------------------
  //locator
    locator(selector: string): Locator {
    return this.page.locator(selector);
  }
  //----------------------------g
  //getBy Attribute 
    getByAttribute(attribute: string, value: string): Locator {
    return this.page.locator(`[${attribute}="${value}"]`);
  }
// using getByText locator 
  getByText(text:string){
    return this.page.getByText(text)
  }




}
    