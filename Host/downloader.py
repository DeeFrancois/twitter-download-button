# import os
# print("OKAY")
# if (os.path.exists('data')):
#       with open('./data', 'r') as f:
#         print(f.readline())
# else:
#     print("Nope")
    # do whatever the script does
import os
import subprocess
import json
import sys
import wget
def main():
    if(os.path.exists('./data')):
        with open('./data','r') as f:
            # print("BLAH")
            contents = f.readline()
            # print(contents)
            f.close()
        
        jsn=json.loads(contents)
        # print(jsn[0])
        for i in jsn:
            wget.download(i[0],i[1]+'.jpg')
        sys.exit(0)
            # subprocess.run(["wget", '-o','{}'.format(i[1]),"{}".format(i[0])])
            # subprocess.run(["yt-dlp", "{}".format(i)])

        # print(jsn)
        # print(jsn[0])
        # for i in contents:
        #     print(i)

    else:
        print("HEREEWE")
# main(arg)
main()