if(localStorage.getItem('access_token') === undefined) localStorage.removeItem('access_token');
const callbackURL = 'https://suiiyush.github.io/GraphQLFetchTest/index.html';
let access_token;
let params = new URLSearchParams(document.location.search);

if(params.get("code") || localStorage.getItem('access_token')){
    if(!localStorage.getItem('access_token')) {
        let params = new URLSearchParams(document.location.search);
        let code = params.get("code");
        const getAccessToken = 'https://auth.atlassian.com/oauth/token';
        const CLIENT_ID = 'HVy47ZY8PgWcRQRLs5VC8RwdqvuFRRbW';
        const CLIENT_SECRET = 'ATOANSa7-e1CoVp38sYHhrjVFaW_uUXVXhgmX8lkRIA1vz9LZ_3v1Cz13JaNJN98wF6501C9FC0C';
        const CALLBACK_URL = callbackURL;
        fetch(getAccessToken, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "grant_type": "authorization_code",
                "client_id": `${CLIENT_ID}`,
                "client_secret": `${CLIENT_SECRET}`,
                "code": `${code}`,
                "redirect_uri": `${CALLBACK_URL}`,
            }),
        }).then(response => response.json())
          .then(response => {access_token = response.access_token; localStorage.setItem('access_token', access_token);});
    } else {
        access_token = localStorage.getItem('access_token');
    }

    const atlassian = document.getElementById('atlassian');
    atlassian.innerHTML = '';

    const textareaAtlassian = document.createElement('textarea');
    textareaAtlassian.setAttribute('id', 'textareaAtlassian');
    textareaAtlassian.setAttribute('placeholder', 'query example { tenantContexts(hostNames:["sprinklr.atlassian.net"]) {cloudId}}');
    atlassian.appendChild(textareaAtlassian);

    const buttonAtlassian = document.createElement('button');
    const textNode = document.createTextNode('Fetch');
    buttonAtlassian.addEventListener('click', fetchAtlassian);
    buttonAtlassian.setAttribute('id', 'buttonAtlassian');
    buttonAtlassian.appendChild(textNode);
    atlassian.appendChild(buttonAtlassian);
}

const authenticateAtlassian  = document.getElementById('authenticateAtlassian') || undefined;
const buttonGitLab = document.getElementById('buttonGitLab');

if(authenticateAtlassian) authenticateAtlassian.addEventListener('click', OAuthenticateAtlassian);
buttonGitLab.addEventListener('click', fetchGitlab);

function fetchGitlab() {
    const urlGitLab = 'https://prod-gitlab.sprinklr.com/api/graphql';
    const token = document.getElementById('inputGitLab').value;
    const query = document.getElementById('textareaGitLab').value || document.getElementById('textareaGitLab').placeholder;

    fetch(urlGitLab, {
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

function fetchAtlassian() {
    const urlAtlassian = 'https://api.atlassian.com/graphql';
    const token = localStorage.getItem('access_token');
    const textarea = document.getElementById('textareaAtlassian') || undefined;

    if(!textarea) return;

    const query = textarea.value || textarea.placeholder;

    fetch(urlAtlassian, {
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

function OAuthenticateAtlassian() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    const STATE = generateString(15);
    window.location.href = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=HVy47ZY8PgWcRQRLs5VC8RwdqvuFRRbW&scope=read%3Ame%20read%3Aaccount&redirect_uri=https%3A%2F%2Fsuiiyush.github.io%2FGraphQLFetchTest%2Findex.html&state=${STATE}&response_type=code&prompt=consent`; 
}
