import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props) {

    return (
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse a huge list of highly active React meetups"/>
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>
    );

    
}

/* export async function getServerSideProps(context) {

        const req = context.req;
        const res = context.rec;
        //fetch data in API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    };
} */

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://tomast:WiuxYLJZ6cb81Be@cluster0.xm89n.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup=>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
}

export default HomePage;