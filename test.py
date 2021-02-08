import bs4
import urllib.request as req
from flask import Flask, render_template, request, jsonify

"""
app = Flask(__name__)

@app.route("/")
def home():
    print ("HIHIHI")
    return 

app.run()
"""

import sys  
def myPY():

    url = "https://m.gamer.com.tw/ajax/MB_homeCreation_2k14.php?owner=news2000tw"

    request = req.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'
    })

    with req.urlopen(request) as response:
        data = response.read().decode("utf-8")

    # 解析HTML
    root = bs4.BeautifulSoup(data, "html.parser")
    titles = root.find_all("div", class_="home_list")
    for title in titles:
        # if title.a != None:
        print(title)

    # print("OK")
    return "OK"

myPY()