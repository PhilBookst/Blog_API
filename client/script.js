const postDiv = document.querySelector('.posts');

function appendPosts(post) {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="author">${post.author}</div>
  <div class="title">${post.title}</div>
  <div class="body">${post.body}</div>
  `;
  postDiv.appendChild(div);
}

fetch('http://localhost:5000/PhilBookst/posts/')
  .then(response => response.json())
  .then(posts => {
    posts.map(post => {
      const { username } = post.author;
      post.author = username;
      appendPosts(post);
      return post;
    })
  });



