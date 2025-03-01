import classes from './MeetDetail.module.css'

function MeatupDetail(props) {

    return (
    <section className={classes.detail}> 
        <img 
            src={props.image} 
            alt={props.title}
        />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
    );
}

export default MeatupDetail;