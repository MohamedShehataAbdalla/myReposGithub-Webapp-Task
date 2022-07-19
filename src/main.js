
/**
 * ==================================================
 * Github API
 * Git My Information and Repos from my Accout in Github.com 
 * using Feach
 * 
 * https://api.github.com/users/MohamedShehataAbdalla
 * https://api.github.com/users/MohamedShehataAbdalla/repos 
 * ==================================================
 */

let url =  "https://cors-anywhere.herokuapp.com/https://api.github.com/users/MohamedShehataAbdalla/repos";

fetch(url).then((result) => {
    let myData = result.json();
    return myData;
})
.then((result) => {
    result.length = 10;
    return result;
})
.then((result) => {
    console.log(result);
    let section = document.createElement("section");
    for(let i = 0; i < result.length; i++) 
    {
        let div = document.createElement("div");
        div.classList.add('item');
        
        let reponame = document.createElement("h2");
        reponame.classList.add('repo-name');
        let reponameText = document.createTextNode(result[i].name);
        reponame.appendChild(reponameText);
    
        let lang = document.createElement("p");
        lang.classList.add('lang');
        let langText = document.createTextNode(result[i].language);
        lang.appendChild(langText);
    
        let size = document.createElement("p");
        size.classList.add('size');
        let sizeText = document.createTextNode(result[i].size);
        size.appendChild(sizeText);
    
        let details = document.createElement("p");
        details.classList.add('details');
        let detailsText = document.createTextNode(result[i].description);
        details.appendChild(detailsText);
    
        let link = document.createElement("a");
        link.classList.add('link');
        let linkText = document.createTextNode(result[i].html_url);
        link.href = result[i].html_url;
        link.appendChild(linkText);
        
        div.appendChild(reponame);
        div.appendChild(lang);
        div.appendChild(size);
        div.appendChild(details);
        div.appendChild(link);
        section.appendChild(div);
    }
    document.body.appendChild(section);
});