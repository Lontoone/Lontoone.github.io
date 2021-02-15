import bs4
from bs4 import BeautifulSoup
import urllib.request as req
import json
import sys
import json
from enum import Enum
import datetime
import re  # regex


class eArticleType(Enum):  # 文章類型
    game = 'GAME'  # FOR GameJolt
    painting = 'PAINTING'
    blog = 'BLOG'


class ArticleData():

    title_text = ""  # 文章標題
    thumbnail_url = ""  # 文章縮圖
    article_url = ""  # 文章原文連結
    like = 0  # gp數量
    upload_date = datetime.datetime.now  # 文章上傳時間
    article_type = eArticleType.game
    
    def ToDict(self):
        return dict(
            title_text=self.title_text,
            thumbnail_url=self.thumbnail_url,
            article_url=self.article_url,
            like=self.like,
            #upload_date=str( self.upload_date), #!會造成轉型失敗
            article_type=self.article_type.value,
        )

def GetHTMLContent(url):
    request = req.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'
    })

    with req.urlopen(request) as response:
        data = response.read().decode("utf-8")

    # 解析HTML
    root = bs4.BeautifulSoup(data, "html.parser")
    return root

#取得巴哈創作小屋資料並寫成json檔案
def GetGamerBlogData():

    gamer_datas = []

    maxPage = GetGamerMaxPage()

    # loop把創作頁資料撈出
    for i in range(1, maxPage+1):
    #for i in range(1, 2):  # ? FOR TEST
        print(i)

        # 後面接&page=2   #小屋創作url
        url = "https://m.gamer.com.tw/ajax/MB_homeCreation_2k14.php?owner=news2000tw" + \
            "&page="+str(i)

        root = GetHTMLContent(url)
        titles = root.find_all("div", class_="home_list")  # 標籤組

        # 單頁的每個創作欄位物件
        for title in titles:
            gamer_data = ArticleData()  # 物件

            soup = BeautifulSoup(str(title), features="html.parser")

            # type:
            # _type_text = str(re.search(r"<span>(?P<type>\w*)</span>", str(title)).group("type")) #regex做法
            _type_text = soup.find("span").text  # 日誌、畫圖....
            gamer_data.article_type = Gamer_check_article_type(_type_text)

            # 文章標題
            # _title_text = re.search(r"<p>(?P<c>.*)</p>", str(title)).group("c")  #regex做法
            _title_text = soup.find('a').text
            gamer_data.title_text = _title_text

            # 文章URL
            # _article_url = re.search(r"<href=(?P<c>.*)", str(title)).group("c")
            gamer_data.article_url = 'https://home.gamer.com.tw/' + \
                soup.find('a')['href']

            # 文章縮圖 URL
            gamer_data.thumbnail_url = soup.find("img")['src']

            #print("type "+str(_type_text))
            #print("title "+str(_title_text))
            #print("文章 url " + gamer_data.article_url)
            #print("img src "+str(gamer_data.thumbnail_url))
            
            print(gamer_data.ToDict())

            gamer_datas.append(gamer_data)

    # 存成json文件
    
    with open('bahamuteArticleData.json', 'w') as outfile:
        json.dump( [ob.ToDict() for ob in gamer_datas],outfile)
    
    
    #print(out)
    return "OK"


def GetGamerMaxPage():  # 回傳巴哈創作頁面最大頁數
    url = "https://home.gamer.com.tw/creation.php?owner=news2000tw"

    root = GetHTMLContent(url)
    titles = root.find_all("p", class_="BH-pagebtnA")
    context = ""
    for title in titles:
        print(title)
        context += str(title)

    regex = re.compile(r"(?P<maxpage>\d*)</a></p>")
    maxPage = regex.search(context)
    print("match group "+maxPage.group("maxpage"))

    return int(maxPage.group("maxpage"))


def Gamer_check_article_type(input):
    if(input == "日誌"):
        return eArticleType.blog
    if(input == "漫畫" or "插畫"):
        return eArticleType.painting


print(GetGamerBlogData())
# print(GetGamerMaxPage())

# TODO: 改成執行py建立連結檔案，再用js讀本地檔案，靠push上git做更新
