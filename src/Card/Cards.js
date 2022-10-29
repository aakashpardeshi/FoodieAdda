import Row from 'react-bootstrap/Row';
import MenuCard from './MenuCard'
function Cards(props) {
    return (
        <>
            <Row xs={2} md={5} className="g-4" style={{ marginLeft: '5%', marginRight: '5%', marginBottom: "5%" }}>
                {
                    props.menu.filter(item => (item.category === props.category)).map((v, idx) => (
                        <MenuCard key={idx} name={v.name} img={v.img} price={v.price}></MenuCard>
                    ))

                    
                }
            </Row>
        </>

    );
}

export default Cards;