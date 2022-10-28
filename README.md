# Twitter Download Button

Adds a download button to twitter posts.

![demo](https://github.com/DeeFrancois/twitter-download-button/blob/main/DocumentationImages/demo.gif)

This is a Chrome Extension that implements [Native Messaging](https://developer.chrome.com/docs/apps/nativeMessaging/). Native Messaging allows the extension to communicate with a local Python program operating as a live host. 

The download urls are scraped with Javascript and sent as a package to the Python script where it is then processed and input into yt-dlp/wget for downloading. 
When the downloads are finished, the Python program is able to communicate back to the extension which triggers the success notification.

## Motivation

Laziness.. Didn't want to have to keep using the terminal to download stuff with yt-dlp. Also, it was the perfect opportunity to figure out Native Messaging (Extension-to-Local Program communication), something
that I imagine will help me automate a bunch of other tasks.

## External Dependencies:
- yt-dlp https://github.com/yt-dlp/yt-dlp#installation
- wget https://www.gnu.org/software/wget/

## Native Messaging Setup 

Native Messaging requires a bit of extra setup as explained [here](https://developer.chrome.com/docs/apps/nativeMessaging/). 
The host program (Host.py) must be "registered", which is done by first editing the included manifest file to match your system. Only the **path** and the **chrome-extension** fields need to be modified (will also need the **name** field for the next step):

Host/host-manifest.json:
```
  {
    "name": "com.my_company.my_application",
    "description": "My Application",
    "path": [YOUR PATH TO Host.py],
    "type": "stdio",
    "allowed_origins": [
      "chrome-extension://[YOUR EXTENSION ID HERE]"
    ]
  }
```
You can find the extension id in extension's Details tab after you import it. *This may not actually need to be modified, I'm just not sure if the IDs are unique.*

Next, you need to create a Registry Key. You can do this by creating a new text file with the following (modified to match your machine):
```
Windows Registry Editor Version 5.00
[HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts\com.my_company.my_application]
@="C:\\path\\to\\host-manifest.json"
```
Then just save that as a .reg file and run it

## Viewing download logs

Host.py's stdin/stdout are set to Binary mode for communication so the typical console activity that you'd see from yt-dlp and wget are instead piped into stderr. 
The stderr activity is written to the browser's error logs so if you want to view it you'll need to run Chrome with logging enabled. This can be done by navigating to the Chrome binary and using cmd to run it with the following args:
```
C:\Program Files\Google\Chrome\Application\chrome.exe --enable-logging --v=1
```

Licensed under the [MIT License](LICENSE).
