class UI {
    constructor() {
        this.post = document.querySelector("#posts");
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.forState = "add";
    }


    showPosts(posts) {
       let output ="";
       posts.forEach(post => {
           output +=`
           <div class="card mb-3">
           <div class="card-body">
                <h4 class="card-title" data-name="title">${post.title}</h4>
                <p class="card-text" data-name="body">${post.body}</p>
                <a href="#" class="edit card-link" data-link="update" data-id=${post.id}>
                <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id=${post.id}>
                <i class="fa fa-remove"></i>
                </a>
                </div>
                </div>
           `
       });
       this.post.innerHTML = output;
    }

    showAlert(message , className) {
        // this.clearAlert();

        // /* Create div */
        // const div = document.createElement('div');
        // /* Add Classes */
        // div.className = className;
        // /* Add text */
        // div.appendChild(document.createTextNode(message));
        // /* Get Parent */
        // const container = document.querySelector('postsContainer');
        // /* Get Posts */
        // const posts = document.querySelector('#posts');
        // /* Insert alert div */
        // container.insertBefore(div, posts);

        // /* Timeout */
        // setTimeout(()=>{
        //     this.clearAlert()
        // },3000);

    }

    clearAlert() {
        // const currentAlert = document.querySelector('.alert');
        // if(currentAlert) {
        //     currentAlert.remove();
        // }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    /* Fill form to Edit */
    fillForm(data) {
        console.log(data);
        console.log(data.title);
        console.log(data.body);

        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;
        this.changeFormState('edit');
    }


/* Clear ID hidden value */
        clearIdInput() {
            this.idInput.value = "";
        }




        /* Change the form state */
         changeFormState(type) {
            if(type === 'edit') {
                this.postSubmit.textContent = "Update Post";
                this.postSubmit.className = "post-submit btn btn-warning btn-block";

                /* Create Cancel button */
                const button = document.createElement('button');
                button.className = "post-cancel btn btn-light btn-block";
                button.appendChild(document.createTextNode('Cancel Edit'));

                /* Get Parent */
                const cardForm = document.querySelector('.card-form');
                /* Get element toinsert before */
                const formEnd = document.querySelector('.form-end');
                /* Insert cancel button */
                cardForm.insertBefore(button,formEnd);
                
            }
            else {
                this.postSubmit.textContent = "Post It";
                this.postSubmit.className = "post-submit btn btn-primary btn-block";
                /* Remove the Cancel button if its there */
                if(document.querySelector('.post-cancel')) {
                    document.querySelector('.post-cancel').remove();
                }
                /* Clear ID from Hidden Field */
                this.clearIdInput();
                /* Clear Text Fields */
                this.clearFields();

            }
        }

    }
















export const ui = new UI();