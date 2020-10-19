import Users from '../Schemas/Users';

interface UserData{
    name:string,
    phone:number,
    chatId:number
}
async function addUserToDB(obj:UserData) {
    let newUser = new Users(obj)
    const result:any = await newUser.save()
    return result;
}

export {addUserToDB}