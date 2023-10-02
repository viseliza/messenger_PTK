import time 

class HomePage:
    def __init__(self):
        pass
    # Парсинг расписания в виде таблицы на главную страницу сайта
    def getSchedule(self):
        start = time.time() ## точка отсчета времени


        ##код программы


        end = time.time() - start ## собственно время работы программы
        print(end) ## вывод времени

    # Парсинг замен и вывод в виде таблицы на главную страницу сайта
    def getReplacement(self):
        pass