import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../../Card/Cards';

function ItemsTab(props) {

  function getCategories(p) {
    var categoryList = p.menu.map(item => item.category);
    var arr = [];
    for (var i = 0; i < categoryList.length; i++) {
      if (!arr.includes(categoryList[i])) {
        arr.push(categoryList[i]);
      }
    }
    return  arr.map((v, index) => ( 
          <Tab key={index} eventKey={index} title={v}>
            <Cards menu={props.menu} category={v} />
          </Tab>
        ));
  }

  return (
    <Tabs style={{ marginLeft: '5%', marginRight: '5%', marginTop: "5%" }}
      variant='pills'
      defaultActiveKey="0"
      id="justify-tab-example"
      className="mb-3"
      justify={true}
    >
      {
       getCategories(props)
      }
    </Tabs>
  );
}

export default ItemsTab;