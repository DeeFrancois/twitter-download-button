document.addEventListener('DOMContentLoaded',function(){
    if (window.location.pathname === "/update.html"){ // to stop popup js from running when update.html is opened and causing errors 
        return;
    }
    window.addEventListener('click',function(e){
        if(e.target.href!==undefined){
          chrome.tabs.create({url:e.target.href});
        }
      });
   

}, false);