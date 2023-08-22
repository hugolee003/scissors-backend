import mongoose from 'mongoose';
import config from "config"


const db = async() =>{
    const dbUrl = config.get("dbUri") as string

    try {
        await mongoose.connect(dbUrl).then(() =>{
            console.log('Conected to MongoDB')
        })
    } catch (error) {
        console.error(error, "Disconnected from MongoDB" )
    }
}

export default db