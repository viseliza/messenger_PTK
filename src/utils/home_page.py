# to check program execution time
import time 
# get now date
import datetime
# to parsing sites
from bs4 import BeautifulSoup
import requests
import locale

class HomePage:
    locale.setlocale(locale.LC_TIME, 'ru_RU')
    # Парсинг расписания в виде таблицы на главную страницу сайта
    def getSchedule(self):
        start = time.time() ## точка отсчета времени

        url = 'https://portal.novsu.ru/univer/timetable/spo/i.1473214//?id=1473211'
        
        end = time.time() - start ## собственно время работы программы
        print(end) ## вывод времени

    # Парсинг замен и вывод в виде таблицы на главную страницу сайта
    def getReplacement(self):
        pass

    def getURL(self, url):
        result = ""
        res = requests.get( url )
        soup = BeautifulSoup( res.text, 'html.parser' )
        table = soup.find( 'table', class_ = 'viewtablewhite' )
        a_all = table.find_all( 'a', href = True )

        for a in a_all:
            if (self.isNow( a.text ) ):
                result = a['href']

        if ( result == url ): return "На сегодня замен нет"
        else: return result if "https://portal.novsu.ru/file/" in result else self.getURL( result )

    def isNow( self, date ):
        months = ['январь' , 'февраль' , 'март' , 'апрель' , 'май' , 'июнь' , 'июль' , 'август' , 'сентябрь' , 'октябрь' , 'ноябрь' , 'декабрь']
        return True if ( date == datetime.datetime.now().strftime("%d.%m.%Y") or f'{months[int(datetime.datetime.now().strftime("%m")) - 1]} {datetime.date.today().year}' == date.lower()) else False

HomePage().getSchedule()