//let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
 // chrome.storage.sync.set({ color });
 // console.log('Default background color set to %cgreen', `color: ${color}`);
});
chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.sendBack) {
      chrome.tabs.sendMessage(sender.tab.id, message.data);
  }
});
