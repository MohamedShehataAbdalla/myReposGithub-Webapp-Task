
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

}).catch((rej) => console.log(rej));
