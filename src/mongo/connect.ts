import * as mongoose from 'mongoose';


 async function connectToMongo (uri:string) {
    mongoose.connect(uri, (err:any)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log("Succesfully Connected to MingoDB")
        }
    })
    
}

//const uri: string = "mongodb+srv://visher:chatbot@cluster0.mxirp.mongodb.net/testdb?retryWrites=true&w=majority";

// export const TestSchema = new mongoose.Schema({
//     phoneNumber:{type:Number, required: true}
// })
// const Users = mongoose.model('Book',TestSchema);
 export {connectToMongo};