var isKhacloudPage = true;
var khacloudIframeDetector = null;
chrome.runtime.onMessage.addListener(function(data) {
    // document.getElementById('url').value = data;
    console.log('Message from iframe: '+data.id);
    console.log(data);
    console.log(window.khacloudIframeDetector);
    if(!khacloudIframeDetector) console.log(window);
    if(khacloudIframeDetector) khacloudIframeDetector(data);
});