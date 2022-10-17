// background.js



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
