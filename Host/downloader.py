# import os
# print("OKAY")
# if (os.path.exists('data')):
#       with open('./data', 'r') as f:
#         print(f.readline())
# else:
#     print("Nope")
    # do whatever the script does
import os
def main():
    if(os.path.exists('./data')):
        with open('./data','r') as f:
            print("BLAH")
            contents = f.readline()
            print(contents)
            f.close()
    else:
        print("HEREEWE")
# main(arg)
main()