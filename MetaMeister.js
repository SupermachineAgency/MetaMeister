/*
A small script to automate setting meta tags.
Author: Jules Victor (https://github.com/jules-victor)


Usage:
import script: 
<script src="https://supermachineagency.github.io/MetaMeister/MetaMeister.js"></script>
<script>const metameister= new MetaMeister();</script>
Add tag to element: data-metameister="title/description"

*/ 
class MetaMeister{

    constructor(){
        this.Run()
    }

    ReplaceMetaTitle(){
        const FoundElement = document.querySelector(`#metameister-title`)
        if(FoundElement){
            window.title = FoundElement.textContent;
        }
    }

    ReplaceMetaDescription(){
        const FoundElement = document.querySelector(`#metameister-description`)
        const MetaDescriptionElement = document.querySelector('meta[name="description"]');

        //meta tag + element with text to replace description with are found on page
        if(FoundElement && MetaDescriptionElement){
            MetaDescriptionElement.setAttribute('content', FoundElement.textContent);
        } else{
            let $metaDescription = document.createElement("meta");
            $metaDescription.setAttribute("name", "description")
            $metaDescription.setAttribute("content", FoundElement.textContent)
            document.getElementsByTagName('head')[0].appendChild($metaDescription);

        }
    }

    Run(){
        this.ReplaceMetaDescription()
        this.ReplaceMetaTitle()
    }

}
export default MetaMeister;