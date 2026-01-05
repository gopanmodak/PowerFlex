import React, { useEffect, useState } from "react";
import FacilitiesData from "../../Pages/FacilitiesData";

const Facilities = () => {
     const [data,setData]=useState([]);
     useEffect(()=>{
  fetch('../../../public/DataForFacilities.JSON')
  .then(response=>response.json())
  .then(data=>setData(data))

     },[])
  
     return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10 text-gray-800">
        Top Facilities
      </h1>
      <div className="grid grid-cols-4 gap-5 container mx-auto ">
         
         {data.map((fData,index) => (
          <FacilitiesData fData={fData} key={index} />
        ))}

      </div>
    </div>
  );
};

export default Facilities;
