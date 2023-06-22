import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { removeItem } from "../utils/CartSlice";


export const Data = (props) => {

  console.log({props})

  const fakeprice = 251;

  return (
    <div>
      <img className="w-full h-24" src={IMG_CDN_URL + props?.imageId} 

      onError={(event)=>{
        event.target.src ="https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg"
      }}
       />
      <div className="w-full text-xs ">
      <h2 className="font-bold text-sm my-1 max-sm:text">{props?.name}</h2>

      <h3 
      className="text-[11px] m-1">
      ₹ {props?.defaultPrice ? + props?.defaultPrice/100 : fakeprice}</h3>

      <h4 
      className="m-1 text-[11px]">
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
    <div 
    className="w-52 h-72 border m-2 p-3 shadow-2xl hover:border-[#a3a1a1] hover:shadow-none hover:border max-sm:w-[200px] max-sm:h-auto">
    <Data {...props} />
    <div className="flex justify-evenly flex-col">
    <button 
    className="shadow-lg text-[#60b246] border border-[#60b246] p-1  w-full m-1 hover:bg-[#60b246] hover:text-white" onClick={()=> handleAdd(props)}>Add </button>
    <button 
    className="shadow-lg text-red-600 border border-red-600 p-1  w-full m-1 hover:bg-red-600 hover:text-white" onClick={()=> handleRemove(props)}>Remove </button>
    </div>
    </div>
  )
}



