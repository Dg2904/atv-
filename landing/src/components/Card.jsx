export const Card = (props) => {
    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>{props.value}</p> 
            <img src={props.image} alt={props.name} width={200} height={"auto"} /> 
        </>
    )
}