const storageKey = 'cafeYorumlari';

document.getElementById('commentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const comment = document.getElementById('commentInput').value;

  const newComment = {
    name: name,
    comment: comment,
    date: new Date().toLocaleString() // Current date and time
  };

  addComment(newComment);

  saveComments();

  document.getElementById('commentForm').reset();
});

document.addEventListener('DOMContentLoaded', function () {
  loadComments();
});

function addComment(comment) {
  const commentList = document.getElementById('commentList');

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  const commentContent = `
    <p><strong>${comment.name}</strong></p>
    <p>${comment.comment}</p>
    <p class="meta">${comment.date}</p>
  `;

  commentDiv.innerHTML = commentContent;

  commentList.appendChild(commentDiv);
}

function saveComments() {
  const commentList = document.getElementById('commentList');
  const comments = commentList.innerHTML;
  localStorage.setItem(storageKey, comments);
}

function loadComments() {
  const commentList = document.getElementById('commentList');
  const comments = localStorage.getItem(storageKey);

  if (comments) {
    commentList.innerHTML = comments;
  }
}
