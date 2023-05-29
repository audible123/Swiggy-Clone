//filter lagana tha bsdk rate ho to lowercase mei ( ) hoga
export function fiterData(searchText,allRestaurant){
    const result = allRestaurant.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return result;
  }

// => nhi hoga is.me amd the conditional rendering will be inside the function

// dusri wali rendering nhi aa rahi


// https://www.swiggy.com/dapi/support/issues/faq?

