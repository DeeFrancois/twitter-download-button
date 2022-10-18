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
def main():
    if(os.path.exists('./data')):
        with open('./data','r') as f:
            print("BLAH")
            contents = f.readline()
            # print(contents)
            f.close()
        
        jsn=json.loads(contents)
        print(jsn)
        for i in jsn:
            # subprocess.run(["yt-dlp", "{}".format(i)])

        # print(jsn)
        # print(jsn[0])
        # for i in contents:
        #     print(i)

    else:
        print("HEREEWE")
# main(arg)
main()