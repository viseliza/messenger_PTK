import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();
 
export const connectDb = async() => {
    try {
        const client = new pg.Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.PORT
        })
 
        await client.connect()
        const res = await client.query('select * from home_page_user;')
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()