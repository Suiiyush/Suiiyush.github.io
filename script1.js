let token;
const url = 'https://prod-gitlab.sprinklr.com/api/graphql';

const input = document.getElementById('input');
const button = document.getElementById('button');

function runQuery() {

    const token = input.value;

    fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: 'query {currentUser {name}}'}),
    })
    .then(response => response.json())
    .then(data => {
        // Process the response data
        console.log(data.data);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
}
button.addEventListener('click', runQuery);