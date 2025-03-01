import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import { Fragment } from 'react';

function NewMeetUpPage() {

    const router = useRouter();

    async function addMeetupHandlder(enteredMeetUpData) {

        //console.log(enteredMeetUpData);

        const response = await fetch('/api/new-meetup ', {
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        router.push('/');
    }
    return (
    <Fragment>
        <Head>
            <title>Add a new React Meetups</title>
            <meta name="description" content="Add your own meetup and create an amazing networking opportunity"/>
        </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandlder}/>
    </Fragment>);



}

export default NewMeetUpPage;