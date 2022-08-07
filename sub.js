if (!window.isKhacloudPage) { // true  or  undefined
  setInterval(() => {
    if(window.khacloudVar_location != window.location.href){
      window.khacloudVar_location = window.location.href;
      var data = {
        name: window.name,
        title: window.document.title,
        location: window.location.href,
      };
      if((window.name || "").includes("khacloudvars-window")){
        chrome.runtime.sendMessage({sendBack:true, data });
      }
    }
  }, 500);
  
}