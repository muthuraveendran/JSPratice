


/* Accessing without class */
const github = new GitHub;

/* Intialize UI */
const ui = new UI;

/* Search input */
const searchUser = document.querySelector('#searchUser');

/* search user  eventListener */
searchUser.addEventListener('keyup', (e) => {
    /* Get User Input */
    const userText = e.target.value;
    if(userText != '') {
        /* Make http call */
        github.getUser(userText).then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found' ){
                /* show alert */
                ui.showAlert("User not found");
            } else {
                /* show profile */
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        })

    } else {
        /* Clear profile */
        ui.clearProfile();
    }
})