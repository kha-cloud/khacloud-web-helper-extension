//let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
});
chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.sendBack) {
    chrome.tabs.sendMessage(sender.tab.id, message.data);
  }
});

// myURLs contains the websites where you want your content script to run
const myURLs = ['khacloud.xyz'];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.status == 'complete') {
    if (myURLs.some(url => tab.url.includes(url))) {
      console.error('heeeeloooooooo')

      chrome.declarativeNetRequest.updateDynamicRules(
        {
          removeRuleIds: [1] ,
          addRules: [{
            "id": 1,
            "priority": 1,
            "action": {
              "type": "modifyHeaders",
              "responseHeaders": [
                { "header": "x-frame-options", "operation": "remove" },
                { "header": "content-security-policy", "operation": "remove" },
                { "header": "X-Frame-Options", "operation": "remove" },
                { "header": "Content-Security-Policy", "operation": "remove" }
              ]
            },
            "condition": { "urlFilter": "*", "resourceTypes": ["sub_frame"] }
          }
          ],
        },
      )
    }

    else {
      chrome.declarativeNetRequest.updateDynamicRules(
        { removeRuleIds: [1] },
      );
    }


  }
  /*
    else
  
      chrome.declarativeNetRequest.updateDynamicRules(
        { removeRuleIds: [1] },
      )
  */
});