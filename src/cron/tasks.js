import unirest from "unirest";
import * as cheerio from 'cheerio';
import * as fs from 'fs';

// export class Tasks {
//     static async insertGroups() {
//         let url = "https://portal.novsu.ru/univer/timetable/spo/";
//         const response = await unirest.get( url );
//         const $ = cheerio.load( response.body ),
//             col = $( '.block_content.content:first' );
        
//         col.find( 'tr' ).each(( _, row ) => {
//             $( row ).find( 'td' ).find( 'a' ).each( async ( _, cell ) => {
//                 console.log( $( cell ).text(), `https://portal.novsu.ru${$( cell ).attr( 'href' )}`);
//             })
//         })   
//     }
// }

async function insertGroups() {
    let url = "https://portal.novsu.ru/univer/timetable/spo/";
    const response = await unirest.get( url );
    const $ = cheerio.load( response.body ),
        col = $( '.block_content.content:first' );
    col.find( 'tr' ).each(( _, row ) => {
        $( row ).find( 'td' ).find( 'a' ).each( async ( _, cell ) => {
            console.log( $( cell ).text(), `https://portal.novsu.ru${$( cell ).attr( 'href' )}`);
        })
    })   
}
insertGroups()

/* OUTPUT
3781 https://portal.novsu.ru/npe/files/_timetable/ptk/3993 3921 3781 3782.xls?rnd=415781
3782 https://portal.novsu.ru/npe/files/_timetable/ptk/3993 3921 3781 3782.xls?rnd=327141
3791 https://portal.novsu.ru/npe/files/_timetable/ptk/3791 3792 3913 3996.xls?rnd=609871
3792 https://portal.novsu.ru/npe/files/_timetable/ptk/3791 3792 3913 3996.xls?rnd=962246
3911 https://portal.novsu.ru/npe/files/_timetable/ptk/0911 3911 3912 3995.xls?rnd=460988
3912 https://portal.novsu.ru/npe/files/_timetable/ptk/0911 3911 3912 3995.xls?rnd=210518
3913 https://portal.novsu.ru/npe/files/_timetable/ptk/3791 3792 3913 3996.xls?rnd=491059
3914 https://portal.novsu.ru/npe/files/_timetable/ptk/3994 3955 3983 3914.xls?rnd=327186
3921 https://portal.novsu.ru/npe/files/_timetable/ptk/3993 3921 3781 3782.xls?rnd=564613
3951 https://portal.novsu.ru/npe/files/_timetable/ptk/3951 3952 3953 3954.xls?rnd=712728
3952 https://portal.novsu.ru/npe/files/_timetable/ptk/3951 3952 3953 3954.xls?rnd=47261
3953 https://portal.novsu.ru/npe/files/_timetable/ptk/3951 3952 3953 3954.xls?rnd=226249
3954 https://portal.novsu.ru/npe/files/_timetable/ptk/3951 3952 3953 3954.xls?rnd=765045
3955 https://portal.novsu.ru/npe/files/_timetable/ptk/3994 3955 3983 3914.xls?rnd=763471
3981 https://portal.novsu.ru/npe/files/_timetable/ptk/3981 3982 3991 3992.xls?rnd=712555
3982 https://portal.novsu.ru/npe/files/_timetable/ptk/3981 3982 3991 3992.xls?rnd=125973
3983 https://portal.novsu.ru/npe/files/_timetable/ptk/3994 3955 3983 3914.xls?rnd=893768
3991 https://portal.novsu.ru/npe/files/_timetable/ptk/3981 3982 3991 3992.xls?rnd=948024
3992 https://portal.novsu.ru/npe/files/_timetable/ptk/3981 3982 3991 3992.xls?rnd=40287
3993 https://portal.novsu.ru/npe/files/_timetable/ptk/3993 3921 3781 3782.xls?rnd=609196
3994 https://portal.novsu.ru/npe/files/_timetable/ptk/3994 3955 3983 3914.xls?rnd=705148
3995 https://portal.novsu.ru/npe/files/_timetable/ptk/0911 3911 3912 3995.xls?rnd=355297
3996 https://portal.novsu.ru/npe/files/_timetable/ptk/3791 3792 3913 3996.xls?rnd=103171
2781 https://portal.novsu.ru/npe/files/_timetable/ptk/2792 2782 2781 2951.xls?rnd=226107
2782 https://portal.novsu.ru/npe/files/_timetable/ptk/2792 2782 2781 2951.xls?rnd=913031
2791 https://portal.novsu.ru/npe/files/_timetable/ptk/2995 2996 2921 2791.xls?rnd=189807
2792 https://portal.novsu.ru/npe/files/_timetable/ptk/2792 2782 2781 2951.xls?rnd=223350
2911 https://portal.novsu.ru/npe/files/_timetable/ptk/2952 2953 2911 2912.xls?rnd=125168
2912 https://portal.novsu.ru/npe/files/_timetable/ptk/2952 2953 2911 2912.xls?rnd=765981
2913 https://portal.novsu.ru/npe/files/_timetable/ptk/2981 2982 2983 2913.xls?rnd=280889
2921 https://portal.novsu.ru/npe/files/_timetable/ptk/2995 2996 2921 2791.xls?rnd=110372
2951 https://portal.novsu.ru/npe/files/_timetable/ptk/2792 2782 2781 2951.xls?rnd=181761
2952 https://portal.novsu.ru/npe/files/_timetable/ptk/2952 2953 2911 2912.xls?rnd=608030
2953 https://portal.novsu.ru/npe/files/_timetable/ptk/2952 2953 2911 2912.xls?rnd=720242
2981 https://portal.novsu.ru/npe/files/_timetable/ptk/2981 2982 2983 2913.xls?rnd=144007
2982 https://portal.novsu.ru/npe/files/_timetable/ptk/2981 2982 2983 2913.xls?rnd=69017
2983 https://portal.novsu.ru/npe/files/_timetable/ptk/2981 2982 2983 2913.xls?rnd=930760
2991 https://portal.novsu.ru/npe/files/_timetable/ptk/2991 2992 2993 2994.xls?rnd=635066
2992 https://portal.novsu.ru/npe/files/_timetable/ptk/2991 2992 2993 2994.xls?rnd=396202
2993 https://portal.novsu.ru/npe/files/_timetable/ptk/2991 2992 2993 2994.xls?rnd=495373
2994 https://portal.novsu.ru/npe/files/_timetable/ptk/2991 2992 2993 2994.xls?rnd=347793
2995 https://portal.novsu.ru/npe/files/_timetable/ptk/2995 2996 2921 2791.xls?rnd=443463
2996 https://portal.novsu.ru/npe/files/_timetable/ptk/2995 2996 2921 2791.xls?rnd=721622
1791 https://portal.novsu.ru/npe/files/_timetable/ptk/1791 1921 1951 1952.xls?rnd=112838
1792 https://portal.novsu.ru/npe/files/_timetable/ptk/1994 1792 0931 0941.xls?rnd=206934
1911 https://portal.novsu.ru/npe/files/_timetable/ptk/1911 1981 1991 1992.xls?rnd=434176
1921 https://portal.novsu.ru/npe/files/_timetable/ptk/1791 1921 1951 1952.xls?rnd=238810
1951 https://portal.novsu.ru/npe/files/_timetable/ptk/1791 1921 1951 1952.xls?rnd=100701
1952 https://portal.novsu.ru/npe/files/_timetable/ptk/1791 1921 1951 1952.xls?rnd=382200
1981 https://portal.novsu.ru/npe/files/_timetable/ptk/1911 1981 1991 1992.xls?rnd=279096
1991 https://portal.novsu.ru/npe/files/_timetable/ptk/1911 1981 1991 1992.xls?rnd=709896
1992 https://portal.novsu.ru/npe/files/_timetable/ptk/1911 1981 1991 1992.xls?rnd=87347
1994 https://portal.novsu.ru/npe/files/_timetable/ptk/1994 1792 0931 0941.xls?rnd=634393
0901 https://portal.novsu.ru/npe/files/_timetable/ptk/0901 0902 0951 0952.xls?rnd=813067
0902 https://portal.novsu.ru/npe/files/_timetable/ptk/0901 0902 0951 0952.xls?rnd=313454
0911 https://portal.novsu.ru/npe/files/_timetable/ptk/0911 3911 3912 3995.xls?rnd=547423
0931 https://portal.novsu.ru/npe/files/_timetable/ptk/1994 1792 0931 0941.xls?rnd=2874
0941 https://portal.novsu.ru/npe/files/_timetable/ptk/1994 1792 0931 0941.xls?rnd=536803
0951 https://portal.novsu.ru/npe/files/_timetable/ptk/0901 0902 0951 0952.xls?rnd=672590
0952 https://portal.novsu.ru/npe/files/_timetable/ptk/0901 0902 0951 0952.xls?rnd=768854
*/