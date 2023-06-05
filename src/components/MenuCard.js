import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { removeItem } from "../utils/CartSlice";


export const Data = (props) => {

  console.log({props})

  return (
    <div>
      <img className="w-full h-20" src={IMG_CDN_URL + props?.imageId} 

      onError={(event)=>{
        event.target.src ="https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg"
      }}
       />
      <div className="w-full text-xs ">
      <h2 className="font-bold text-sm my-1 max-sm:text">{props?.name}</h2>

      <h3 
      className="text-[15px] m-1">
      ₹ {props?.defaultPrice ? + props?.defaultPrice/100 :'251'}</h3>

      <h4 
      className="m-1">
        {props?.itemAttribute?.vegClassifier}</h4>


      {console.log("Menu.card.info:",props?.defaultPrice )}
      </div>
      {/*  */}
    </div>
  );
};


export const MenuCard=(props)=>{

  const dispatch = useDispatch();

  const handleAdd=(props)=>{
    dispatch(addItem(props))
  }

  const handleRemove=(props)=>{
    dispatch(removeItem(props))
  }

  return(
    <div className="w-40 h-min-[300px] m-2 p-3 shadow-2xl hover:border-[#a3a1a1] hover:shadow-none hover:border max-sm:w-[200px] max-sm:h-64">
    <Data {...props} />
    <div className="flex justify-evenly flex-col">
    <button className="bg-blue-950 text-white p-1  w-full m-1" onClick={()=> handleAdd(props)}>Add </button>
    <button className="bg-blue-950 text-white p-1  w-full m-1" onClick={()=> handleRemove(props)}>Remove </button>
    </div>
    </div>
  )
}



