const data = [
    {
        name:"Joe",
        age:30,
        gender:'male',
        lookingfor:'female',
        location:'Banglore',
        image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Jhon",
        age:25,
        gender:'male',
        lookingfor:'female',
        location:'chennai',
        image:"https://randomuser.me/api/portraits/men/76.jpg"
    },
     {
        name:"Milton",
        age:44,
        gender:'male',
        lookingfor:'female',
        location:'Banglore',
        image:"https://randomuser.me/api/portraits/men/77.jpg"
    }
];

const profiles = profileIterator(data);

/* Next Event */
document.querySelector('.nextBtn').addEventListener('click',nextProfile);



/* callFunction() */

function callFunction() {
//   data.forEach( currentProfile => {

//     document.querySelector('.image-display').innerHTML = `
//     <img src='${currentProfile[0].image}'>
//     `

//      document.querySelector('.profile-display').innerHTML = `<ul>
//     <li>Name:${currentProfile[0].name}</li>
//     <li>Age:${currentProfile[0].age}</li>
//     <li>Location:${currentProfile[0].location}</li>
//     <li>gender:${currentProfile[0].gender}</li>
//     <li>LookingFor:${currentProfile[0].lookingfor}</li>
//     </ul>`;
// })
}



/* nextProfile display */
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
    document.querySelector('.image-display').innerHTML = `
    <img src='${currentProfile.image}'>
    `

    document.querySelector('.profile-display').innerHTML = `
        <ul>
        <li>Name:${currentProfile.name}</li>
        <li>Age:${currentProfile.age}</li>
        <li>Location:${currentProfile.location}</li>
        <li>gender:${currentProfile.gender}</li>
        <li>LookingFor:${currentProfile.lookingfor}</li>
        </ul>`;
    } else {
        /* No more profiles */
        window.location.reload();
    }   

}

/* Profile Iterator */

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next : function() {
            console.log(">>>>>>>>>>>>>IndexValue >>>>>>>>>>>>>>>",nextIndex);
            return nextIndex < profiles.length ?
            {value : profiles[nextIndex++],done: false} :
            {done: true}
        }
    }
}