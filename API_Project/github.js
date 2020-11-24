// import axios from 'axios';
 class GitHub {
    constructor() {
        this.clientId = "a6c63612fb7806162b25";
        this.clientSecret = "63e691c0e55d7d6a6b6026dc16deca8ef928c90c";
        this.repos_count = 5;
        this.repos_sort ="created: asc"
    }

    async getUser(user) {
        const profileUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        
        const profile = await  profileUser.json();
        const repos = await  repoResponse.json();


            //    const profileUser =   await axios.get('https://jsonplaceholder.typicode.com/todos');
            // const profile = await JSON.stringify(profileUser);

            // const profileUser =   await fetch('https://jsonplaceholder.typicode.com/todos');
            // const profile = await  profileUser.json();
        return {
            profile,
            repos
        }
    }

    


}

// module.exports = GitHub;