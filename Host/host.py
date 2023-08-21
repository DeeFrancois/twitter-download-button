# 
from asyncio.subprocess import PIPE
from cgi import test
import struct
import sys
import os
import wget
import logging
import json
import subprocess
import glob
import gt_caps
import threading
# On Windows, the default I/O mode is O_TEXT. Set this to O_BINARY
# to avoid unwanted modifications of the input/output streams.
# logging.basicConfig(level=logging.DEBUG)
# logging.debug('This will get logged')
# cd 'C:\Program Files\Google\Chrome\Application' chrome.exe --enable-logging --v=1

if sys.platform == "win32":
  import msvcrt
  msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
  msvcrt.setmode(sys.stdout.fileno(), os.O_BINARY)

# Thread that reads messages from the webapp.

def gt_captions_handler(jsn):
  global captions_open
  global gt_captions
  captions_open=0
  gt_captions = gt_caps.GTCaptions()
  if(captions_open == 0):
    captions_open=1
    t1 = threading.Thread(target=gt_captions.create_window)
    t1.start()
  gt_captions.set_msg(jsn[1],jsn[2])

def downloader(text):
  curr_path = os.getcwd()
  jsn=list(json.loads(text))
  count = 0
  curr_id = jsn[1]
  # print(jsn[0],file=sys.stderr)
  if (jsn[0] == 'captions'):
    gt_captions_handler(jsn)
    print(text,file=sys.stderr)
    # print(jsn,file=sys.stderr)
    return
  if (jsn[0] == 'open'):
    print('startfile',file=sys.stderr)
    os.startfile('downloads')
    return
  if (jsn[0]=='rename'):
    print('rename_last_download',file=sys.stderr)
    list_of_files = glob.glob('downloads/*') # * means all if need specific format then *.csv
    latest_file = max(list_of_files, key=os.path.getmtime)
    os.startfile(latest_file)
    print(latest_file,file=sys.stderr)
    return
  if(jsn[0]=='recents'):
    list_of_files = glob.glob('downloads/*')
    list_of_files.sort(key=os.path.getctime)
    # print(list_of_files)
    filenames = [x.split('\\')[1] for x in reversed(list_of_files)]
    msg_string = f'{{"msg": "recents","value":"{filenames[:20]}"}}'
    send_message(msg_string)
    return
  if (jsn[0]=='archive'):
    print("ARCHIVING: ",jsn[1],file=sys.stderr)
    f = open("archive.txt", "a")
    f.write(jsn[1]+'\n')
    f.close()
    return
  
  for i in jsn[0]:
    f = open("archive.txt", "a")
    f.write(i[0]+'\n')
    f.close()

    # print(i,sys.stderr)
    if('jpg' in i[0] or 'webp' in i[0]):
      count+=1
      large_link=i[0].split('name=')[0]+'name=large'
      wget.download(large_link,'downloads/'+i[1]+'_'+str(count)+'.jpg')
      # with open('log.txt','w') as f:
      #   subprocess.run(["wget","-O","downloads/{}.jpg".format(i[1]),large_link],stdout=f,stderr=f)
    else:
      count+=1
      with open('log.txt','a') as f:
        print(i[0],file=sys.stderr)
        id=i[0].split('/')[-1]
        uploader=i[0].split('/')[3]
        output='downloads/{}_{}.mp4'.format(uploader,id)
        # subprocess.run(["yt-dlp"," {}".format(i[0]),"--no-mtime","-o",r"downloads/%(uploader_id)s_%(id)s.%(ext)s"],stdout=sys.stderr)
        subprocess.run(["yt-dlp"," {}".format(i[0]),"--cookies-from-browser", "firefox", "--no-mtime","-o",output],stdout=f)
        if(os.path.isfile(output)):
          print("DOWNLOAD SUCCESSFUL?",file=sys.stderr)
        else:
          print("DOWNLOAD UNSUCCESSFUL",file=sys.stderr)
          return
  # send_message('{"msg": "Download Complete!"}')
  msg_string = f'{{"msg": "{count}","button_id":"{curr_id}"}}'

  send_message(msg_string)

  msg_string = f'{{"msg": "size","value":"{get_folder_size()}"}}'
  send_message(msg_string)
  # wget.download(text[0],text[1]+'.jpg')
  # os.system("start cmd /c python downloader.py")
  # subprocess.Popen(["python.exe", "downloader.py"])
  # sys.exit(0)  
def get_folder_size():
  size=0
  for path, dirs, files in os.walk('downloads/'):
    for f in files:
        fp = os.path.join(path, f)
        size += os.path.getsize(fp)
  return (size/1000000)

def read_thread_func():
  while True:
    # Read the message length (first 4 bytes).
    text_length_bytes = sys.stdin.buffer.read(4)
    
    if not text_length_bytes:
      sys.exit(0)
    
    # Unpack message length as 4 byte integer.
    if (sys.byteorder == 'big'):
      text_length = int.from_bytes(text_length_bytes, byteorder='big')
    else:
      text_length = int.from_bytes(text_length_bytes, byteorder='little')
    
    # Read the text (JSON object) of the message.
    text = sys.stdin.read(text_length)
    # test = text.decode('utf-8')
    # testr = json.loads(test)
    # print(testr)
    
    #   print(text)
    # logging.debug(text)
    if (os.path.exists('./data')):
      with open('./data', 'w') as f:
        f.write(text)
        f.close()
        downloader(text)
    else:
      with open('./data', 'x') as f:
        f.write(text)
        f.close()
        downloader(text)
    # os.system('downloader.py')
    
    

# Helper function that sends a message to the webapp.
def send_message(message):
  # Write message size.
  sys.stdout.buffer.write(struct.pack('=I', len(message.encode("utf-8"))))
  
  # Write the message itself.
  sys.stdout.buffer.write(struct.pack(str(len(message.encode("utf-8")))+"s", message.encode("utf-8")))
  sys.stdout.flush()

def index():
#   send_message('{"msg": "Hello World!"}')
  read_thread_func()

if __name__ == '__main__':
  index()