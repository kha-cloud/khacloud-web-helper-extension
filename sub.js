if (!window.isKhacloudPage) { // true  or  undefined
  setInterval(() => {
    if(window.khacloudVar_location != window.location.href){
      window.khacloudVar_location = window.location.href;
      var data = {
        name: window.name,
        location: window.location.href,
      };
      if((window.name || "").includes("khacloudvars-window")){
        chrome.runtime.sendMessage({sendBack:true, data });
      }
    }
  }, 1000);
}