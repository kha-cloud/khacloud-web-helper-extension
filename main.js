var isTop = true;
chrome.runtime.onMessage.addListener(function(details) {
    document.getElementById('url').value = details;
    console.log('Message from frame: ');
    console.log( details);

});