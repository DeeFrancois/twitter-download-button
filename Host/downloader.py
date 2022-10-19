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
            print("CONTENTS: ",contents)
            f.close()
        
        jsn=list(json.loads(contents))
        print("JSON: ",jsn)
        # print(jsn[0])
        for i in jsn:
            # print(i[0])
            print(type(i))
            print(i)
            if('jpg' in i[0]):
                wget.download(i[0],'downloads/'+i[1]+'.jpg')
            else:
                subprocess.run(["yt-dlp", " {}".format(i[0])])


        # sys.exit(0)
            # subprocess.run(["wget", '-o','{}'.format(i[1]),"{}".format(i[0])])

        # print(jsn)
        # print(jsn[0])
        # for i in contents:
        #     print(i)

        # print("HEREEWE")
# main(arg)
main()