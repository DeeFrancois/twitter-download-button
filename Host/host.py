# 
import struct
import sys
import os

# On Windows, the default I/O mode is O_TEXT. Set this to O_BINARY
# to avoid unwanted modifications of the input/output streams.
if sys.platform == "win32":
  import msvcrt
  msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
  msvcrt.setmode(sys.stdout.fileno(), os.O_BINARY)

# Thread that reads messages from the webapp.
def recieved():
  os.system("start cmd /c python downloader.py")
  # subprocess.Popen(["python.exe", "downloader.py"])
  # sys.exit(0)  

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
    #   print(text)
    if (os.path.exists('./data')):
      with open('./data', 'w') as f:
        f.write(text)
        f.close()
    else:
      with open('./data', 'x') as f:
        f.write(text)
        f.close()
    # os.system('downloader.py')
    recieved()
    

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