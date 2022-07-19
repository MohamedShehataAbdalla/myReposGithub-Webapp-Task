
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
//  let url =  "https://api.github.com/users/MohamedShehataAbdalla";

const getInfoData = (apiLink) => {
    return new Promise((resolve, reject) => {
        
            /**
             * ==================================================
             * Git My Information from my Accout in Github.com 
             * ==================================================
             */

            let myRequestInfo = new XMLHttpRequest();
            myRequestInfo.onload = function (){
            
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
            
            myRequestInfo.open("GET", apiLink);
            myRequestInfo.send();

    });
} 


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
} 




// getInfoData(url).then((result) => {
//     // result.length = 10;
//     return result;
// })
// .then((result) => {
//     // createInfoElement(result.name, result.login, result.bio, result.avatar_url, result.html_url);
//     console.log(result);


//     // let profile = document.createElement("div");
//     // profile.classList.add('profile');

//     // let name = document.createElement("p");
//     // name.classList.add('name');
//     // let nameText = document.createTextNode(result.name);
//     // name.appendChild(nameText);

//     // let username = document.createElement("p");
//     // username.classList.add('username');
//     // let usernameText = document.createTextNode(result.login);
//     // username.appendChild(usernameText);

//     // let bio = document.createElement("p");
//     // bio.classList.add('bio');
//     // let bioText = document.createTextNode(result.bio);
//     // bio.appendChild(bioText);

//     // let avatar = document.createElement("img");
//     // avatar.src = result.avatar_url;
//     // avatar.alt = result.login;
//     // avatar.width = "120";
//     // avatar.height = "120";

//     // let profilelink = document.createElement("a");
//     // profilelink.classList.add('link');
//     // profilelink.href = result.html_url;
//     // let profilelinkText = document.createTextNode(result.html_url);
//     // profilelink.appendChild(profilelinkText);
    
//     // profile.appendChild(avatar);
//     // profile.appendChild(name);
//     // profile.appendChild(username);
//     // profile.appendChild(bio);
//     // profile.appendChild(profilelink);
//     // document.body.appendChild(profile);

    

// }).catch((rej) => console.log(rej));




getRepoData(url).then((result) => {
    result.length = 10;
    return result;
})
.then((result) => {
    // createReposElement = (result.length, result.name, result.language, result.size, result.description, result.html_url );
    console.log(result);

}).catch((rej) => console.log(rej));





/**
     * ==================================================
     * Create Info Section Element
     * function createInfoElement
     * @param dName => set name pserson string
     * @param dLogin => set username string
     * @param dBio => set bio string
     * @param dAvatar => set Avatar link
     * @param dProfile_url => set profile Link
     * @return View in Document Page
     * 
     * ==================================================
 */


const  createInfoElement = (dName, dLogin, dBio, dAvatar, dProfile_url  ) => {

    let profile = document.createElement("div");
    profile.classList.add('profile');

    let name = document.createElement("p");
    name.classList.add('name');
    let nameText = document.createTextNode(dName);
    name.appendChild(nameText);

    let username = document.createElement("p");
    username.classList.add('username');
    let usernameText = document.createTextNode(dLogin);
    username.appendChild(usernameText);

    let bio = document.createElement("p");
    bio.classList.add('bio');
    let bioText = document.createTextNode(dBio);
    bio.appendChild(bioText);

    let avatar = document.createElement("img");
    avatar.src = dAvatar;
    avatar.alt = dLogin;
    avatar.width = "120";
    avatar.height = "120";

    let profilelink = document.createElement("a");
    profilelink.classList.add('link');
    profilelink.href = dProfile_url;
    let profilelinkText = document.createTextNode(dProfile_url);
    profilelink.appendChild(profilelinkText);
    
    profile.appendChild(avatar);
    profile.appendChild(name);
    profile.appendChild(username);
    profile.appendChild(bio);
    profile.appendChild(profilelink);
    document.body.appendChild(profile);
} 


/**
     * ==================================================
     * Create Info Section Element
     * function createInfoElement
     * @param Rcount => set length of Repos
     * @param DName => set name Repo string
     * @param dLanguage => set Language string
     * @param dSize => set size number
     * @param dDescription => set Description string
     * @param dLink_url => set Repo Link
     * @return View in Document Page
     * 
     * ==================================================
 */
let  createReposElement = (Rcount , DName, dLanguage, dSize, dDescription, dLink_url ) => {

        for(let i = 0; i < Rcount; i++)
         {
            let section = document.createElement("section");
            let div = document.createElement("div");
            div.classList.add('item');
            
            let reponame = document.createElement("h2");
            reponame.classList.add('repo-name');
            let reponameText = document.createTextNode(DName);
            reponame.appendChild(reponameText);

            let lang = document.createElement("p");
            lang.classList.add('lang');
            let langText = document.createTextNode(dLanguage);
            lang.appendChild(langText);

            let size = document.createElement("p");
            size.classList.add('size');
            let sizeText = document.createTextNode(dSize);
            size.appendChild(sizeText);

            let details = document.createElement("p");
            details.classList.add('details');
            let detailsText = document.createTextNode(dDescription);
            details.appendChild(detailsText);

            let link = document.createElement("a");
            link.classList.add('link');
            let linkText = document.createTextNode(dLink_url);
            link.href = dLink_url;
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
























/**
             * ==================================================
             * Git My Information from my Accout in Github.com 
             * ==================================================
             */

//  let myRequestInfo = new XMLHttpRequest();
//  myRequestInfo.onreadystatechange = function (){
 
//      if(this.readyState == 4 && this.status == 200) {
         
//          let jsData = JSON.parse(this.responseText);
 
//          let profile = document.createElement("div");
//          profile.classList.add('profile');
 
//          let name = document.createElement("p");
//          name.classList.add('name');
//          let nameText = document.createTextNode(jsData.name);
//          name.appendChild(nameText);
 
//          let username = document.createElement("p");
//          username.classList.add('username');
//          let usernameText = document.createTextNode(jsData.login);
//          username.appendChild(usernameText);
 
//          let bio = document.createElement("p");
//          bio.classList.add('bio');
//          let bioText = document.createTextNode(jsData.bio);
//          bio.appendChild(bioText);
 
//          let avatar = document.createElement("img");
//          avatar.src = jsData.avatar_url;
//          avatar.alt = jsData.login;
//          avatar.width = "120";
//          avatar.height = "120";
 
//          let profilelink = document.createElement("a");
//          profilelink.classList.add('link');
//          profilelink.href = jsData.html_url;
//          let profilelinkText = document.createTextNode(jsData.html_url);
//          profilelink.appendChild(profilelinkText);
         
//          profile.appendChild(avatar);
//          profile.appendChild(name);
//          profile.appendChild(username);
//          profile.appendChild(bio);
//          profile.appendChild(profilelink);
//          document.body.appendChild(profile);
//      }
//  }
 
 /**
  * ==================================================
  * Git All Public Repos from my Accout in Github.com
  * ==================================================
  */
 
 
//  let myRequestRepos = new XMLHttpRequest();
//  myRequestRepos.onreadystatechange = function (){
 
//      if(this.readyState == 4 && this.status == 200) {
         
//          let jsData = JSON.parse(this.responseText);
//          for(let i = 0; i < jsData.length; i++)
//          {
//                  let section = document.createElement("section");
//                  let div = document.createElement("div");
//                  div.classList.add('item');
                 
//                  let reponame = document.createElement("h2");
//                  reponame.classList.add('repo-name');
//                  let reponameText = document.createTextNode(jsData[i].name);
//                  reponame.appendChild(reponameText);
 
//                  let lang = document.createElement("p");
//                  lang.classList.add('lang');
//                  let langText = document.createTextNode(jsData[i].language);
//                  lang.appendChild(langText);
 
//                  let size = document.createElement("p");
//                  size.classList.add('size');
//                  let sizeText = document.createTextNode(jsData[i].size);
//                  size.appendChild(sizeText);
 
//                  let details = document.createElement("p");
//                  details.classList.add('details');
//                  let detailsText = document.createTextNode(jsData[i].description);
//                  details.appendChild(detailsText);
 
//                  let link = document.createElement("a");
//                  link.classList.add('link');
//                  let linkText = document.createTextNode(jsData[i].html_url);
//                  link.href = jsData[i].html_url;
//                  link.appendChild(linkText);
                 
//                  div.appendChild(reponame);
//                  div.appendChild(lang);
//                  div.appendChild(size);
//                  div.appendChild(details);
//                  div.appendChild(link);
//                  section.appendChild(div);
//                  document.body.appendChild(section);
//          }
//      }
//  }


