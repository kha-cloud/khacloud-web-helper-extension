var isKhacloudPage = true;
chrome.runtime.onMessage.addListener(function(data) {
    // document.getElementById('url').value = data;
    // console.log('Message from iframe: '+data.id);
    // console.log(data);
    // console.log(window.$nuxt_bus);
    // if(!window.$nuxt_bus) console.log(window);
    // window.$nuxt_bus.$emit("khacloud-iframe-detector", data);
    window.postMessage({ type: "KHACLOUD_PAGE", ...data}, "*");
});

const myURLs = ['khacloud.xyz'];

