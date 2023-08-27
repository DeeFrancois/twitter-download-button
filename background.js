// background.js

let port = chrome.runtime.connectNative("devdeefrancois.twitterbutton");
var download_queue = [];
/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  // console.log("IN MSG");
  // console.log(response);
  if (response.msg=='recents'){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //Pass message onto Content.js
      chrome.tabs.sendMessage(tabs[0].id, {
        "message":"recent-downloads-package",
        "value":response.value});
    });
  } else if(response.msg=='size'){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //Pass message onto Content.js
      chrome.tabs.sendMessage(tabs[0].id, {
        "message":"update-size",
        "value":response.value});
    });
  }
  else{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //Pass message onto Content.js
    chrome.tabs.sendMessage(tabs[0].id, {
      "message":"downloaded",
      "value":response});
  });
  }

});

/*
On a click on the browser action, send the app a message.
*/
// chrome.browserAction.onClicked.addListener(() => {
//   console.log("Sending:  ping");
//   port.postMessage("ping");
// });
function contextmenucallback(event){
  console.log("CONTEXT MENU HERE RERERE HEHRERE",event)
  if(event.menuItemId === 'my-contextmenu-entry'){
    console.log("OKAY")
    link = event.pageUrl
    button_id="notavailable"
    port.postMessage(['global_ytdlp',link]);
  }
}
chrome.contextMenus.onClicked.addListener(contextmenucallback);

chrome.contextMenus.create(
  {title: 'ytdlp',id: 'my-contextmenu-entry'}
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message=="postmessage"){
      console.log(request.value); // [Link,calculated_filename]
      port.postMessage([request.value,request.button_id]);
      // let links = request.value;
      // console.log(links);
      
    }
    if(request.message=="open-folder"){
      port.postMessage(['open','now']);
      // let links = request.value;
      // console.log(links);
      
    }
    if(request.message=="rename-latest"){
      port.postMessage(['rename','now']);
    }

    if(request.message=='archive-link'){
      port.postMessage(['archive',request.value]);
    }

    if(request.message=='request-downloads'){
      port.postMessage(['recents',request.value]);
    }
    if(request.message=='captions'){
      port.postMessage(['captions',request.untranslated,request.translated]);
    }
    
  });
  // "https://pbs.twimg.com/media/FdWT_3NXkAITVvk?format=jpg&name=360x360"

      // port.postMessage(request.value);
    
  

// chrome.runtime.onInstalled.addListener(function(details){
//   if(details.reason == "install"){
//     chrome.tabs.create({ url: chrome.runtime.getURL("tutorial.html") });
//   }
 
// });

// chrome.storage.sync.get('font_multiplier',function(data){
//   if(data.font_multiplier!=null){
//     console.log("Preferences: Font_multiplier found: ");
//     console.log(data.font_multiplier);
//   }
//   else{
//     console.log("No Font Multiplier stored");
//     chrome.storage.sync.set({'font_multiplier':1});
//   }
// });

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "update_on_off" ) 
//       {

//         console.log("Background.js recieved message from SLIDER to update on_off to " + request.value);
//         chrome.storage.sync.set({'on_off':request.value});           //Store into local variables
        

//       }

// });
