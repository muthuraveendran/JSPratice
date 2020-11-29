/* State  */

const PageState = function() {
    this.state = new homeState(this);

    this.init = function() {
        this.change()
    }

    this.change = function(state) {
        currentState = state;
    }
};

/* Home State */
const homeState = function() {
    document.querySelector('#heading').textContent=`Home Page`;
    document.querySelector('#content').innerHTML=`
    <p> sdfsdfsdfsdfsdfsdfdsfsdfdsfsd
    fsdfsdfsdfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdf
    sdfdsfsdfdsfdsfsdfdsfdsfdsfsfsdf</p>
    `;
}

/* About State */
const aboutState = function() {
    document.querySelector('#heading').textContent='About us';
    document.querySelector('#content').innerHTML=`
    <p> Hello About us
    Hello About us Hello About us
    Hello About us
    Hello About us</p>
    `;
}


/* Contact State */
const contactState = function() {
    document.querySelector('#heading').textContent='Contact us';
    document.querySelector('#content').innerHTML=`
    <p> Hello Contact us
    Hello Contact us Hello About us
    Hello Contact us
    Hello Contact us</p>
    `;
}


/* Intiate page state */
const page = new PageState();

/* Init the first state */
page.init();

/* UI Vars */
const home = document.querySelector('.home'),
contact = document.querySelector('.contact'),
about = document.querySelector('.about');

/* Home */
home.addEventListener('click' , (e) => {
    page.change(new homeState);
    e.preventDefault();
});

/* About */
contact.addEventListener('click' , (e) => {
    page.change(new contactState);
    e.preventDefault();
});

/* Contact */
about.addEventListener('click' , (e) => {
    page.change(new aboutState);
    e.preventDefault();
});
