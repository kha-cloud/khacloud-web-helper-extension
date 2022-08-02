var isKhacloudPage = true;
chrome.runtime.onMessage.addListener(function(data) {
    // document.getElementById('url').value = data;
    console.log('Message from iframe: '+data.id);
    console.log(data);
    console.log(window.khacloudIframeDetector);
    if(!window.khacloudIframeDetector) console.log(window);
    if(window.khacloudIframeDetector) window.$nuxt_bus.$emit("khacloud-iframe-detector", data);
    if(window.khacloudIframeDetector) window.khacloudIframeDetector(data);
});