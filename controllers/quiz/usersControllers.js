import User from '../../models/quiz/userModel.js';

export async function seedUsers(req, res) {
    try{
        await Users.deleteMany({});

        const users = await Users.create(
            {username: 'John', email: 'john.m@gmail.com' },
            {username: 'Mike', email: 'mike.s@gmail.com' },
            {username: 'Tom', email: 'tom.a@gmail.com' },
            {username: 'Moiz', email: 'moiz.z@gmail.com' },
            {username: 'Mo', email: 'mo.smith@gmail.com' },
            {username: 'Bert', email: 'bert.w@gmail.com' },
            {username: 'Joel', email: 'joel.s@gmail.com' },
            {username: 'Al', email: 'alert.s@gmail.com' },
            {username: 'Paul', email: 'paul.t@gmail.com' },
            {username: 'Samir', email: 'samir.k@gmail.com' },

        );
 console.log(users);

        res.status(201).json(users)
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function getUsers(req, res) {
    try{
        const users = await Users.find({});
        res.status(200).json(users);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
    
}


async function createUser(req, res) {
    try{
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json(user);
    }catch(error) {
        console.error(error);
        res.status(400).json({error: error.message});
    }   
}

export {
    getUsers,
    createUser
}
