import requests
from bs4 import BeautifulSoup as soup
import pickle
query = ['adventure', 'education', 'predict', 'international', 'scholarship']
#query = ['prepare']
word_dict = {}

for q in query:
    url = 'https://www.etymonline.com/search?q=' + q
    response = requests.get(url) # 使用 GET 送出 request
    if response.status_code == 200: # 「200 OK」代表請求成功被處理
        text = response.text # 把 response 內容取出
        #print(text)
        html = soup(text, "html.parser")
        title_content = html.find_all('a')[1]
        #print(title_content)
        URL = title_content['href']
        URL = "https://www.etymonline.com" + URL
        #print(URL)
        title_content_seg = str(title_content).split('>')
        title = (title_content_seg[1])[:-7]
        #print(title)
        title_part = ((title_content_seg[3]).split('<'))[0]
        #print(title_part)
        title = title + " " + title_part
        #print(title)
        foreigns = []
        obj = html.find('object') # 找出 html 裡第一個出現的obj
        #print(obj)
        paragraph = obj.find_all('span', class_="foreign")
        #print(paragraph)
        for p in paragraph:
            p = p.get_text()
            foreigns.append(p)
        #print(foreigns)
        paragraph = obj.find_all('span', class_="crossreference")
        #print(paragraph)
        references = []
        for p in paragraph:
            p = p.get_text()
            references.append(p)
        #print(references)
        text = ""
        paragraph = obj.find('section', class_="word__defination--2q7ZH undefined")
        text += paragraph.get_text()
        #print(text)

        word_dict[q] = {'url': URL, 'title': title, 'foreigns': foreigns, 'references': references, 'text': text}
        #print('======================================')
    else:
        print('Failed', response.status_code)

with open('word_dict', 'wb') as fp:
    pickle.dump(word_dict, fp)

with open ('word_dict', 'rb') as fp:
    word_dict = pickle.load(fp)
    for word, word_contents in word_dict.items():
        print(word)
        print(word_contents)
        #for content_name, content in word_contents.items():
            #print(content_name)
            #print(content)
        print('=======================================')