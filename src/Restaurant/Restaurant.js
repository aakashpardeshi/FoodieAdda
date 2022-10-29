
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Menu from "./Menu/Menu";
const Restaurant = () => {
  return (
    <div>
      <PhotoGallery restobject={Restaurants} />
      <Menu restobject={Restaurants.menu} />
    </div>
  )
}

const Restaurants =
{
  restName: "Barbeque Nation",
  restId: 1000,
  restImages: ["https://media-cdn.tripadvisor.com/media/photo-s/11/81/fe/5b/barbeque-nation.jpg",
    "https://img4.nbstatic.in/tr:w-500/5fc9d95fc4d55d000b264161.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1a/a5/30/bd/images-largejpg.jpg"
  ],
  address: "Hiranandani, Thane",
  phoneNo: "9892653287",
  startTime: 11,
  endTime: 12,
  categories: ["Veg", "Non Veg", "Chinese"],
  menu: [
    {
      name: "Chicken Burger",
      price: 100,
      image: "https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock3-400x400.jpg",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Non Veg"
    },
    {
      name: "Cheese Pizza",
      price: 150,
      image: "https://biggies.in/admin/uploads/img_p/product_image1638879061.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, obcaecati!",
      category: "Veg"
    },
    {
      name: "Chicken Fried Rice",
      price: 110,
      image: "https://b.zmtcdn.com/data/dish_photos/a58/60804d83bb8ae12ce12e5b859788ca58.png",
      description: "lorem15",
      category: "Chinese"
    }
  ]
}


export default Restaurant;