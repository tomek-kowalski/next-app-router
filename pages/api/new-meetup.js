import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const {title,image, address, description} = data;    

        
        const client = await MongoClient.connect('mongodb+srv://tomast:WiuxYLJZ6cb81Be@cluster0.xm89n.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

        const db = client.db();
        
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: "Meetup inserted!"});// i have mesage inserted and nothing was inserted in to database
    }
}

export default handler;