import { http } from './http';
import { ui } from './ui';

/* Get posts on DOM Load */
document.addEventListener('DOMContentLoaded', getPosts);

/* Listen Posts */
document.querySelector('.post-submit').addEventListener('click', submitPost);

/* Listen to eDIT Posts */
document.querySelector('#posts').addEventListener('click', deletePost);

/* Listen to Delete Posts */
document.querySelector('#posts').addEventListener('click', editPost);

/* Listen For Cancel */
document.querySelector('.card-form').addEventListener('click', cancelEdit);

/* Get Posts */
function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((error) => console.log('error'));
}

/* Submit Post */
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  if (title === '' || body === '') {
    alert('Please fill the data !');
  } else {
    const data = {
      title,
      body,
    };
    /* Check for ID */
    if (id === '') {
      /* Create Post */
      http.post('http://localhost:3000/posts', data).then((data) => {
        ui.showAlert('Post Added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      }).catch(error => console.log(error))
    } else {
        /* Update Post */
        http.put(`http://localhost:3000/posts/${id}`, data).then((data) => {
            ui.showAlert('Post Added', 'alert alert-success');
            ui.changeFormState('add');
            getPosts();
          }).catch(error => console.log(error))

    }
  }
}

/* Edit posts */

function editPost(e) {
  if (e.target.parentElement.classList.contains('edit')) {
      console.log("<<<<<<<<<< The data HTML Element >>>>>>>>>>>>>>>>",e.target.parentElement);
      console.log("<<<<<<<<<< The data set is >>>>>>>>>>>>>>>>",e.target.parentElement.dataset.link)
      ;
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;

    const data = {
      id,
      title,
      body,
    };

    /* Fill Form with Currnt Post */
    ui.fillForm(data);
  }

  e.preventDefault();
}

/* Delete Posts */
function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure ?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          console.log('Data Revomed successfully');
          getPosts();
        })
        .catch((error) => console.log('Error Message'));
    }
  }
}

/* Cancel Edit */

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}
