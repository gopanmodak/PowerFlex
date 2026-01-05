import React from 'react'
import PackageData from './../../Pages/PackageData';


const packagesData = [
  {
    id: 1,
    name: "Starter Package",
    title: "Perfect for Beginners",
    duration: "1 Month",
    price: "$25",
    features: [
      "Gym access (regular hours)",
      "Cardio & strength equipment",
      "Basic trainer support"
    ]
  },
  {
    id: 2,
    name: "Standard Package",
    title: "Most Popular",
    duration: "3 Months",
    price: "$65",
    features: [
      "Full gym access",
      "Group workout sessions",
      "Workout guidance"
    ]
  },
  {
    id: 3,
    name: "Fitness Plus Package",
    title: "Balanced Training",
    duration: "3 Months",
    price: "$80",
    features: [
      "Cardio, strength & functional training",
      "Locker & shower facilities",
      "Trainer assistance"
    ]
  },
  {
    id: 4,
    name: "Premium Package",
    title: "For Serious Fitness Goals",
    duration: "6 Months",
    price: "$140",
    features: [
      "Unlimited gym access",
      "Personal trainer support",
      "Customized workout plan"
    ]
  },
  {
    id: 5,
    name: "Weight Loss Package",
    title: "Fat Burn Program",
    duration: "2 Months",
    price: "$90",
    features: [
      "Fat burn workout plan",
      "Diet & nutrition guidance",
      "Progress tracking"
    ]
  },
  {
    id: 6,
    name: "Personal Training Package",
    title: "One-on-One Coaching",
    duration: "Custom",
    price: "Contact Us",
    features: [
      "Dedicated personal trainer",
      "Goal-based training plan",
      "Flexible schedule"
    ]
  }
];



const Packages = () => {
  return (
    <div>
       <h1 className="text-center text-4xl font-bold my-5 text-gray-800">Our Packages</h1>
     
     <div className="grid grid-cols-3 gap-5 container mx-auto">
      {packagesData.map((pData,index)=>(<PackageData pData={pData} key={index}/>))}
     </div>

    </div>
  )
}

export default Packages