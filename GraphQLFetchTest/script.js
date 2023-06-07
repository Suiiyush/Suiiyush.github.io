const urlGitLab = 'https://prod-gitlab.sprinklr.com/api/graphql';
const urlAtlassian = 'https://sprinklr.atlassian.net/gateway/api/graphql';

const inputGitLab = document.getElementById('inputGitLab');
const buttonGitLab = document.getElementById('buttonGitLab');
const textareaGitLab = document.getElementById('textareaGitLab');

const inputAtlassian = document.getElementById('inputAtlassian');
const buttonAtlassian = document.getElementById('buttonAtlassian')
const textareaAtlassian = document.getElementById('textareaAtlassian');

function runQuery(input, textarea, url) {

    const token = input.value;
    const query = textarea.value || textarea.placeholder;

    fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: query
      }),
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

buttonGitLab.addEventListener('click', () => runQuery(inputGitLab, textareaGitLab, urlGitLab));
buttonAtlassian.addEventListener('click', () => runQuery(inputAtlassian, textareaAtlassian, urlAtlassian));