import React, { useEffect, useState } from 'react'

async function getInstaGlass(){
    const data = await fetch("https://sunglasshut.in/ext/algolia/application/api/v1.0/collections/ray-ban-sunglasses-for-men/items")
    const json = await data.json()
    
}

