/*
A small script to automate setting meta tags.
Author: Jules Victor (https://github.com/jules-victor)
Usage: data-metameister="title/description"
*/ 
class MetaMeister{

    constructor(){
        run();
    }

    ReplaceMetaTitle(){
        const FoundElement = document.querySelector(`[data-metameister="title"]`)
        if(FoundElement){
            window.title = FoundElement.textContent;
        }
    }

    ReplaceMetaDescription(){
        const FoundElement = document.querySelector(`[data-metameister="description"]`)
        const MetaDescriptionElement = document.querySelector('meta[name="description"]');
        let $metaDescription = document.createElement("meta");

        //if no meta tag is on the page yet
        if(MetaDescriptionElement){
            document.getElementsByTagName("head")[0].appendChild($metaDescription);
        }

        //meta tag + element with text to replace description with are found on page
        if(FoundElement && MetaDescriptionElement){
            $metaDescription.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

        }
    }

    run(){
        this.ReplaceMetaTitle();
        this.ReplaceMetaDescription();
    }

}