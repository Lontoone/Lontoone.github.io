import os
import subprocess
subprocess.run(["python","test.py"], cwd="D:\MyGit\Lontoone.github.io\data").stdout
subprocess.run(["git","add","."], cwd="D:\MyGit\Lontoone.github.io")
subprocess.run(["git","commit","-m","baha data Update"], cwd="D:\MyGit\Lontoone.github.io")
subprocess.run(["git","push"], cwd="D:\MyGit\Lontoone.github.io")
subprocess.run(["pause"])

'''subprocess.run(["git","push","origin","main"], cwd="D:\MyGit\Lontoone.github.io");'''


'''os.system('cd /d D:\MyGit\Lontoone.github.io\data')
os.system('python test.py')'''
'''
os.system('cd ../')
os.system('git commit -m "baha data update"')
os.system('git push origin main')
'''
