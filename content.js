var button_count = 0;
window.initial_config = {childList:true, subtree:true,}
var last_url=location.href;
var add_nav=1;
var callback = function(mutationsList, observer){
    
    //console.log("Debug - Waiting for Video");
    for (const mutation of mutationsList){
        
        // console.log(mutation.target.parentNode);
        if(mutation.addedNodes.length==1){
            // console.log(mutation.addedNodes[0]);
            if(mutation.addedNodes[0].dataset && mutation.addedNodes[0].dataset.testid){

                if(mutation.addedNodes[0].dataset.testid=='cellInnerDiv'){
                    add_button(mutation.addedNodes[0]);
                    if(add_nav){
                        add_nav=0;
                        var open_folder_button = document.createElement('div');
                        open_folder_button.innerHTML='<div aria-expanded="false" aria-haspopup="menu" aria-label="inject-nav" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1habvwh r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu" data-testid="AppTabBar_More_Menu"><div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg"><div class="css-1dbjc4n"></div><div dir="auto" class="css-901oao css-1hf3ou5 r-1nao33i r-37j5jr r-adyw6z r-16dba41 r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Download Folder</span></div></div></div>';
                        document.querySelector('.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu').append(open_folder_button);
                        open_folder_button.onclick=function(){
                            chrome.runtime.sendMessage({
                                "message":"open-folder",
                                "value": 'now',
                                });
                        };
                    }
                    // console.log(mutation.addedNodes[0]);
                }
            }
        }
                            
    }
}
// <div class="css-1dbjc4n r-zl2h9q"><div class="css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep"><div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l"><div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l" id="id__26y4v0i3hpzj" data-testid="User-Names"><div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="/LightBoxExpo" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"><div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs"><div dir="auto" class="css-901oao r-1awozwy r-1nao33i r-6koalj r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">LightBox Expo</span></span></div><div dir="auto" class="css-901oao r-1nao33i r-xoduu5 r-18u37iz r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"></div></div></a></div></div><div class="css-1dbjc4n r-18u37iz r-1wbh5a2 r-13hce6t"><div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="/LightBoxExpo" role="link" tabindex="-1" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"><div dir="ltr" class="css-901oao css-1hf3ou5 r-1bwzh9t r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">@LightBoxExpo</span></div></a></div><div dir="auto" aria-hidden="true" class="css-901oao r-1bwzh9t r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-s1qlax r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">·</span></div><div class="css-1dbjc4n r-18u37iz r-1q142lx"><a href="/LightBoxExpo/status/1578046348204691456" dir="auto" aria-label="Oct 6" role="link" class="css-4rbku5 css-18t94o4 css-901oao r-1bwzh9t r-1loqt21 r-xoduu5 r-1q142lx r-1w6e6rj r-37j5jr r-a023e6 r-16dba41 r-9aw3ui r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0"><time datetime="2022-10-06T15:35:42.000Z">Oct 6</time></a></div></div></div></div></div></div><div class="css-1dbjc4n r-1joea0r"><div class="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz"><div class="css-1dbjc4n"><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-expanded="false" aria-haspopup="menu" aria-label="More" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret"><div dir="ltr" class="css-901oao r-1awozwy r-1bwzh9t r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div></div></div></div></div></div></div></div></div>

window.initial_observer = new MutationObserver(callback);
window.initial_observer.observe(document.documentElement,window.initial_config);
// /html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/section/div
// window.initial_observer = new MutationObserver(callback);
// window.initial_observer.observe(document.documentElement,window.initial_config);
function add_button(elem){
    // console.log(elem);
    // const bar = elem.querySelector('.css-1dbjc4n.r-eqz5dr.r-1pi2tsx.r-13qz1uu');
    // if(bar===null){
    //     var elem = document.querySelector('[data-testid=cellInnerDiv]');
    //     console.log(elem);
    //     const bar = elem.querySelector('.css-1dbjc4n.r-18u37iz.r-15zivkp');
    // }
   
    // console.log(bar);
    let bar;
    try{
        bar = elem.querySelector('[data-testid=reply]').parentElement.parentElement.parentElement;
    }
    catch(e){
        return;
    // console.log(bar);
    }
    // console.log(bar);
    var button = document.createElement('div');
    // button.innerHTML='<div class="css-1dbjc4n r-obd0qt r-18u37iz r-1w6e6rj r-1h0z5md r-dnmrzs"><button class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-6gpygo r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr" data-testid="editProfileButton" style="border-color: rgb(83, 100, 113);"><div dir="auto" class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0" style="color: rgb(239, 243, 244);"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Download</span></span></div></button></div>';
    
    button.innerHTML='<div class="css-1dbjc4n r-obd0qt r-18u37iz r-1w6e6rj r-1h0z5md r-dnmrzs"><a id="myhref" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-6gpygo r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr" data-testid="editProfileButton" style="border-color: rgb(83, 100, 113);"><div dir="auto" class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0" style="color: rgb(239, 243, 244);"><span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Download</span></span></div></a></div>'
    button.firstChild.id='my_button_'+button_count;
    button_count+=1;
    bar.firstChild.appendChild(button);
    var links = [];
    // const urls = elem.querySelectorAll('.css-1dbjc4n.r-1adg3ll.r-1udh08x')[1].querySelectorAll('a');
    const urls = elem.querySelectorAll('img');
    
    // console.log(urls);
    // urls.forEach(function(e){
    //     // if(elem.querySelector('[data-testid=videoPlayer]')){
    //     //     if(e.href.includes('status/')){
    //     //         links.push(e.href);
    //     //         return;
    //     //     }
    //     // }
    //     if (e.href.includes('/photo')){
    //         links.push(e.href);
    //     }
    // });

    // elem.querySelector('#myhref').href=links[0];
    // elem.querySelector('#myhref').setAtribute('download','test.jpg');
    // console.log(links);

    button.onclick=function(e){
        // elem.firstChild.firstChild.style['background-color']='pink';
        // console.log(elem);
        var  links=[];
        let video_flag = elem.querySelector('[data-testid=videoPlayer]');
        // console.log(this.firstChild.id);
        let current_id = this.firstChild.id;
        // console.log(current_id);
        if(video_flag!==null){
            // console.log("No Video");
            // console.log("VIDEOVIDEO");
            Array.from(elem.querySelectorAll('a')).every(function(e){
                if (e.href.includes('status/')){
                    links.push([e.href,'']);
                    return false;
                }
                else{
                    return true;
                }
            });
        }
        elem.querySelectorAll('[href*=\\/photo\\/]').forEach(function(e){
            // console.log(e);
            let title=e.href.split('.com/')[1].split('/')[0];
            
            // let end_title=title+'_'+e.querySelector('img').src.split('media/')[1].split('?format')[0];
            // let end_title=title+'_'+e.querySelector('img').src.split('media/')[1].split('?format')[0];
            let end_title=title+'_'+e.href.split('/status/')[1].split('/photo/')[0];
            // console.log("SRC: "+e.querySelector('img').src);
            links.push([e.querySelector('img').src,end_title]);
            // console.log('PUSHING: ',e.querySelector('img').src, end_title);

        });
        chrome.runtime.sendMessage({
        "message":"postmessage",
        "value": links,
        "button_id":current_id
        });
        download_started(current_id);
        
            
    }

}

function download_started(button_id){
    let button = document.querySelector(`#${button_id}`).firstChild; 
    button.style['background-color']='rgb(239, 243, 244)';
    // button.firstChild.firstChild.firstChild.innerText='..';
    // button.firstChild.style['filter']='blur(1px)';

    

}
function download_complete(button_id){
    let button = document.querySelector(`#${button_id}`).firstChild; 
    // button.style['background-color']='#003300';
    // button.firstChild.style['filter']='blur(0px)';
    button.style['background-color']='';
    // setTimeout(function(){
    //     button.style['background-color']='';
    //     // button.firstChild.firstChild.firstChild.innerText='Download';
    // },1000);

}
chrome.runtime.onMessage.addListener( //Listens for messages sent from background script (Preferences Controller)
    function (request, sendRespone, sendResponse){
        // return;
        if(request.message=='downloaded'){
            let file_count = request.value.msg;
            var button = document.createElement('div');
            button.innerHTML=`<div class="css-1dbjc4n r-1awozwy" id="my-notification-container"><div role="status" class="css-1dbjc4n r-6dt33c r-1kw4oii r-d3hbe1 r-eafdt9 r-1b8bd59 r-6czh2s"><div style="background-color:green" aria-label="New Tweets are available. Push period to go to the beginning of your timeline and view them" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-l5o3uw r-sdzlij r-1uusn97 r-1777fci r-1r5su4o r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg" id="my-notification" style="background-color:grey" ><div class="css-1dbjc4n r-18u37iz r-oyd9sg"><div dir="auto" class="css-901oao css-1hf3ou5 r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"><span dir="ltr" class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-1udh08x r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Downloaded ${file_count} File(s)</span></span></span></div></div></div></div></div>`;
            let bar = document.getElementsByClassName('css-1dbjc4n r-633pao r-u8s1d r-dkhcqf r-axxi2z r-18jm5s1 r-13qz1uu r-1wyyakw')[0]
            bar.append(button);
            // console.log("Download complete");
            setTimeout(function(){
                // console.log("Removing button");
                button.remove();
            },1500);
            // console.log(request.elem);
            download_complete(request.value.button_id);
            // request.elem.style.backgroundColor = 'pink'
            // request.elem.firstChild.firstChild.style['background-color']='pink';
            // STOPPED WORKIGN, just opened in new tab instead of downloaded
        //     console.log("DOWNLOAD LINKS:");
        //     console.log(request.value[0]);
        //     var link = document.createElement('a');
        //     link.href = request.value[0];
        //     link.download = request.value[1]+'.jpg';
        //     console.log("title: ",link.download);
        //   document.body.appendChild(link);
        //   link.click();
        //   document.body.removeChild(link);
        }
    
    });
// var port = chrome.runtime.connectNative('devdeefrancois.twitterbutton');
//             port.onMessage.addListener(function(msg) {
//                 console.log("Received" + msg);
//             });
//             port.onDisconnect.addListener(function() {
//                 console.log("Disconnected");
//             });
//             port.postMessage({ text: "Hello, my_application" });


