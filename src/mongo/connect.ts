import * as mongoose from 'mongoose';


async function connectToMongo(uri: string) {
    mongoose.connect(uri, (err: any) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Succesfully Connected to MongoDB")
        }
    })

}
export { connectToMongo };