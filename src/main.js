
/**
 * ==================================================
 * Github API
 * Git My Information and Repos from my Accout in Github.com 
 * using Promise
 * 
 * https://api.github.com/users/MohamedShehataAbdalla
 * https://api.github.com/users/MohamedShehataAbdalla/repos 
 * ==================================================
 */

 let url =  "https://cors-anywhere.herokuapp.com/https://api.github.com/users/MohamedShehataAbdalla";

const getRepoData = (apiLink) => {
    return new Promise((resolve, reject) => {
        
            /**
             * ==================================================
             * Git All Public Repos from my Accout in Github.com
             * ==================================================
             */
            
            
            let myRequestRepos = new XMLHttpRequest();
            myRequestRepos.onload = function (){
            
                if(this.readyState == 4 && this.status == 200) {
                    
                    resolve(JSON.parse(this.responseText));
                    
                } else {
                    reject(Error("No Data Found"));
                }
            };
            
            /**
             * ==================================================
             * send Requestes to  Github.com
             * ==================================================
             */
                        
            myRequestRepos.open("GET", apiLink+"/repos");
            myRequestRepos.send();

    });
};




getRepoData(url).then((result) => {
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

}).catch((rej) => console.log(rej));


// const getInfoData = (apiLink) => {
//     return new Promise((resolve, reject) => {
        
//             /**
//              * ==================================================
//              * Git My Information from my Accout in Github.com 
//              * ==================================================
//              */

//             let myRequestInfo = new XMLHttpRequest();
//             myRequestInfo.onload = function (){
            
//                 if(this.readyState == 4 && this.status == 200) {
                    
//                     resolve(JSON.parse(this.responseText));
            
//                 } else {
//                     reject(Error("No Data Found"));
//                 }
//             };
            
//             /**
//              * ==================================================
//              * send Requestes to  Github.com
//              * ==================================================
//              */
            
//             myRequestInfo.open("GET", apiLink);
//             myRequestInfo.send();

//     });
// };




// getInfoData(url).then((result) => {
//     result.length = 1;
//     return result;
// })
// .then((result) => {
//     console.log(result);


//     let profile = document.createElement("div");
//     profile.classList.add('profile');

//     let name = document.createElement("p");
//     name.classList.add('name');
//     let nameText = document.createTextNode(result.name);
//     name.appendChild(nameText);

//     let username = document.createElement("p");
//     username.classList.add('username');
//     let usernameText = document.createTextNode(result.login);
//     username.appendChild(usernameText);

//     let bio = document.createElement("p");
//     bio.classList.add('bio');
//     let bioText = document.createTextNode(result.bio);
//     bio.appendChild(bioText);

//     let avatar = document.createElement("img");
//     avatar.src = result.avatar_url;
//     avatar.alt = result.login;
//     avatar.width = "120";
//     avatar.height = "120";

//     let profilelink = document.createElement("a");
//     profilelink.classList.add('link');
//     profilelink.href = result.html_url;
//     let profilelinkText = document.createTextNode(result.html_url);
//     profilelink.appendChild(profilelinkText);
    
//     profile.appendChild(avatar);
//     profile.appendChild(name);
//     profile.appendChild(username);
//     profile.appendChild(bio);
//     profile.appendChild(profilelink);
//     document.body.appendChild(profile);

// }).catch((rej) => console.log(rej));












