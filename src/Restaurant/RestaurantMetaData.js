

const RestaurantMetaData = (props) => {
    return (
        <div className="container">
            <h2>{props.restobject.restName}</h2>
            <p>{props.restobject.address}</p>
            <p>Time: {props.restobject.startTime} AM - {props.restobject.endTime} PM</p>
            <p>
                {
                    props.restobject.categories.map((category) => {
                        return (category + " ");
                    })
                }
            </p>
        </div>
    )
}

export default RestaurantMetaData;