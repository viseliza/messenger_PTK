# to check program execution time
import time 
# get now date
import datetime
# to parsing sites
from bs4 import BeautifulSoup
import requests
# to parse docx files
import docx
# to download files
from wget import download
import os

class HomePage:
    # Парсинг расписания в виде таблицы на главную страницу сайта
    def getSchedule(self):
        pass


    # Парсинг замен и вывод в виде таблицы на главную страницу сайта
    def getReplacement(self):
        start = time.time() ## точка отсчета времени

        url = 'https://portal.novsu.ru/univer/timetable/spo/i.1473214//?id=1473211'
        path = f'doc/{datetime.datetime.now().strftime("%d.%m.%Y")}'

        get_url = self.getURL(url)
        download(self.getURL(url), path) if get_url else print("На сегодня замен нет")
    
        # os.system(f"npm run schedule {group}")
        end = time.time() - start ## собственно время работы программы
        print(end) ## вывод времени
        


    def getURL(self, url):
        result = ''
        res = requests.get( url )
        soup = BeautifulSoup( res.text, 'html.parser' )
        table = soup.find( 'table', class_ = 'viewtablewhite' )
        a_all = table.find_all( 'a', href = True )

        for a in a_all:
            if (self.isNow( a.text ) ):
                result = a[ 'href' ]
        if ( result == '' ): return False
        else: return result if "https://portal.novsu.ru/file/" in result else self.getURL( result )


    def isNow( self, date ):
        months = ['январь' , 'февраль' , 'март' , 'апрель' , 'май' , 'июнь' , 'июль' , 'август' , 'сентябрь' , 'октябрь' , 'ноябрь' , 'декабрь']
        return True if ( date == datetime.datetime.now().strftime("%d.%m.%Y") or f'{months[int(datetime.datetime.now().strftime("%m")) - 1]} {datetime.date.today().year}' == date.lower()) else False

# HomePage().getReplacement()