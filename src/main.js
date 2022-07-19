/**
 * ==================================================
 * Github API
 * Git My Information from my Accout in Github.com 
 * 
 * https://api.github.com/users/MohamedShehataAbdalla
 * 
 * ==================================================
 */

let myRequestInfo = new XMLHttpRequest();
myRequestInfo.onreadystatechange = function (){

    if(this.readyState == 4 && this.status == 200) {
        
        let jsData = JSON.parse(this.responseText);

        let profile = document.createElement("div");
        profile.classList.add('profile');

        let name = document.createElement("p");
        name.classList.add('name');
        let nameText = document.createTextNode(jsData.name);
        name.appendChild(nameText);

        let username = document.createElement("p");
        username.classList.add('username');
        let usernameText = document.createTextNode(jsData.login);
        username.appendChild(usernameText);

        let bio = document.createElement("p");
        bio.classList.add('bio');
        let bioText = document.createTextNode(jsData.bio);
        bio.appendChild(bioText);

        let avatar = document.createElement("img");
        avatar.src = jsData.avatar_url;
        avatar.alt = jsData.login;
        avatar.width = "120";
        avatar.height = "120";

        let profilelink = document.createElement("a");
        profilelink.classList.add('link');
        profilelink.href = jsData.html_url;
        let profilelinkText = document.createTextNode(jsData.html_url);
        profilelink.appendChild(profilelinkText);
        
        profile.appendChild(avatar);
        profile.appendChild(name);
        profile.appendChild(username);
        profile.appendChild(bio);
        profile.appendChild(profilelink);
        document.body.appendChild(profile);
    }
}

/**
 * ==================================================
 *  Github API
 * Git All Public Repos from my Accout in Github.com
 * 
 * https://api.github.com/users/MohamedShehataAbdalla/repos 
 * ==================================================
 */


let myRequestRepos = new XMLHttpRequest();
myRequestRepos.onreadystatechange = function (){

    if(this.readyState == 4 && this.status == 200) {
        
        let jsData = JSON.parse(this.responseText);
        for(let i = 0; i < jsData.length; i++)
        {
                let section = document.createElement("section");
                let div = document.createElement("div");
                div.classList.add('item');
                
                let reponame = document.createElement("h2");
                reponame.classList.add('repo-name');
                let reponameText = document.createTextNode(jsData[i].name);
                reponame.appendChild(reponameText);

                let lang = document.createElement("p");
                lang.classList.add('lang');
                let langText = document.createTextNode(jsData[i].language);
                lang.appendChild(langText);

                let size = document.createElement("p");
                size.classList.add('size');
                let sizeText = document.createTextNode(jsData[i].size);
                size.appendChild(sizeText);

                let details = document.createElement("p");
                details.classList.add('details');
                let detailsText = document.createTextNode(jsData[i].description);
                details.appendChild(detailsText);

                let link = document.createElement("a");
                link.classList.add('link');
                let linkText = document.createTextNode(jsData[i].html_url);
                link.href = jsData[i].html_url;
                link.appendChild(linkText);
                
                div.appendChild(reponame);
                div.appendChild(lang);
                div.appendChild(size);
                div.appendChild(details);
                div.appendChild(link);
                section.appendChild(div);
                document.body.appendChild(section);
        }
    }
}



/**
 * ==================================================
 *  Github API
 * send Requestes to  Github.com
 * 
 * ==================================================
 */

let url = "https://cors-anywhere.herokuapp.com/https://api.github.com/users/MohamedShehataAbdalla";

myRequestRepos.open("GET", url+"/repos");
myRequestRepos.send();

myRequestInfo.open("GET", url);
myRequestInfo.send();