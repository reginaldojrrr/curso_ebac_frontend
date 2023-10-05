document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const repositoriesElement = document.getElementById('repositories');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    const request = 'https://api.github.com/users/reginaldojrrr';

    fetch(request)
    .then(function(answer) {
        return answer.json();
    })
    .then(function(json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        repositoriesElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
})