// background.js

let port = chrome.runtime.connectNative("devdeefrancois.twitterbutton");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log(response);
});

/*
On a click on the browser action, send the app a message.
*/
// chrome.browserAction.onClicked.addListener(() => {
//   console.log("Sending:  ping");
//   port.postMessage("ping");
// });
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message=="postmessage"){
      // console.log('RECIEVED: ',request.value);
      let links = request.value;
      links.forEach(function(e){
        // console.log("E: ",e[0]);
        // console.log("Download Title: ",e[1]);
        if (e[0].includes('twimg')){

          // console.log(e);
          let fixed_link=e[0].split('?format')[0]+'.jpg';
          // console.log("FIXED LINK: ",fixed_link);
          // https://pbs.twimg.com/media/FeU4x8VXkBcPYBT?format=jpg&name=900x900
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //Pass message onto Content.js
                      chrome.tabs.sendMessage(tabs[0].id, {
                        "message":"download",
                        "value":([fixed_link,e[1]])});
          });
          // var link = document.createElement('a');
          // link.href = e;
          // link.download = 'Download.jpg';
          // document.body.appendChild(link);
          // link.click();
          port.postMessage(request.value);
          // document.body.removeChild(link);
        }
        else{
          port.postMessage(request.value);
          // console.log("NON IMAGE: ",e);
        }
      });
      // port.postMessage(request.value);
    }
  }
);
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
        
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //Pass message onto Content.js
//           chrome.tabs.sendMessage(tabs[0].id, {
//             "message":"update_on_off",
//             "value":request.value});
//         });

//       }

// });
