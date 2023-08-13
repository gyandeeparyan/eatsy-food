
import { resturantList } from "../constants/constants";
import React, { useState } from 'react'

const filterCusine = () => {



const [allCusine,setAllCusine]=useState(allUniqueCusineList)

  return (
    <>
    <div>
        <button>

        </button>
        {filteredCusine.map((item)=>{
         return(
            <button onClick={()=>{
                set
            }}>
                {item}
            </button>
         )
        })} 
    </div>
    </>
  )
}

export default filterCusine