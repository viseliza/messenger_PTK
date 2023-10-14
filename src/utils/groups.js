import unirest from "unirest";
import * as cheerio from 'cheerio';

const group = "1992"
const response = await unirest.get( `https://portal.novsu.ru/search/groups/r.2500.p.search.g.${group}` );
const $ = cheerio.load(response.body),
    col = $('.block_content.content:first');

col.find('tr').each((_, row) => {
    $(row).find('td').find('a').each(async (_, cell) => {
        // Добавление в бд
        // ФИО студента в группе
        let full_name = $(cell).text()
        // Логин от novsu.ru
        let user_st = $(cell).attr('href').replace("/person/", "")
        // 1. console.log(`FIO : ${full_name}\nLogin: ${user_st}\n`)
    })
}) 

/* OUTPUT
1.
FIO : Богданов Матвей Владимирович
Login: 251268

FIO : Бурля Эдуард Юрьевич
Login: 250727
...
FIO : Федоров Леонид Юрьевич
Login: 250746

FIO : Чистяков Андрей Евгеньевич
Login: 250716
*/