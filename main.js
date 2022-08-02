var isKhacloudPage = true;
chrome.runtime.onMessage.addListener(function(data) {
    // document.getElementById('url').value = data;
    console.log('Message from iframe: '+data.id);
    console.log(data);
    if(window.khacloudIframeDetector) window.khacloudIframeDetector(data);
});