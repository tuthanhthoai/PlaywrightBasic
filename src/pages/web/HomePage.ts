import { Page } from "@playwright/test";
import { GeneralPage } from "./GeneralPage";

export class HomePage extends GeneralPage{

    constructor(page: Page){
        super(page);
    }

}