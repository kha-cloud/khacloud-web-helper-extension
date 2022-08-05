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





// // // Drops X-Frame-Options and Content-Security-Policy HTTP response headers, allowing all pages to be iframed

// const HEADERS_TO_STRIP_LOWERCASE = [
//   'content-security-policy',
//   'x-frame-options',
// ];

// chrome.webRequest.onHeadersReceived.addListener(
//   details => ({
//     responseHeaders: details.responseHeaders.filter(header =>
//         !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
//   }),
//   {
//     urls: ['<all_urls>']
//   },
//   ['blocking', 'responseHeaders', 'extraHeaders']
// );
