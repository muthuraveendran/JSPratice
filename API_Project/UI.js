class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
        <div  class="profile-container">
            <img   src=${user.avatar_url}>
            <a href="${user.html_url}" target="_blank">View Profile</a>
            <span style="display:block; color:green ">Dispay Public repos ${user.public_repos}</span>
            <span style="display:block; color:green ">Dispay Public Gists ${user.public_gists}</span>
            <span style="display:block; color:green ">Dispay Public Following ${user.following}</span>
            <span style="display:block; color:green ">Dispay Public Following ${user.followers}</span>

            <br> <br>

            <ul>
              <li>Company:${user.company}</li>
              <li>Website?Blog:${user.blog}</li>
              <li>Loations:${user.location}</li>
              <li>Member Since:${user.created_at}</li>
            <ul>

        <div>
          <h3>Latest Repos</h3>
        </div>


        </div>
        `
    }

    showRepos(repos) {
        console.log("<<<<<<<<<<<<<repos>>>>>>>>>>>>>>></repos>",repos);
        let output= '';
        repos.forEach((repo)=> {
            output += `<p><span>${repo.html_url}<br> </span><span>${repo.name}</span></p>
            <p><span>${repo.stargazers_count}</p>
            <p><span>${repo.watchers}</p>
            <p><span>${repo.forms_count}</p>
            `
        });
        /* Output Repos */
        document.getElementById('repos').innerHTML=output;

    }

    /* Show AlertMessage */
    showAlert(message) {
        /* clear the remaining alert */
        clearAlert();
        /* Create div */
        const div = document.createElement('div');
        /* Add a ClassName */
        div.className="alert-message";
        /* Append Message */
        div.appendChild(document.createTextNode(message));

        /* Get Parent */
        const container = document.querySelector('.searchContainer');
         /* Get Search */
         const search = document.querySelector('.lead');
         /* Insert Alert */
         container.insertBefore(div,search);

         /* Timeout in 3 sec */

         setTimeout(() => {
            this.clearAlert();
         },3000)

        
    }

    /* Clear alert */
        clearAlert() {
            const currentAlert = document.querySelector('.alert-message');
            if(currentAlert){
                currentAlert.remove();
            }
        }

        /* Clear Profile */
    clearProfile() {
        this.profile.innerHTML = ``;
    }

}