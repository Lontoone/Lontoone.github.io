import os
import subprocess
subprocess.run(["python","test.py"], cwd="D:\MyGit\Lontoone.github.io\data").stdout
subprocess.run(["git","add","."], cwd="D:\MyGit\Lontoone.github.io")
subprocess.run(["git","commit","-m","baha data Update"], cwd="D:\MyGit\Lontoone.github.io")
subprocess.run(["git","push"], cwd="D:\MyGit\Lontoone.github.io")

'''subprocess.run(["pause"])'''
