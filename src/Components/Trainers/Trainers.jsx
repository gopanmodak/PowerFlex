import React from "react";
import TrainersData from "../../Pages/TrainerData.jsx";

const tData = [
  {
    id: 1,
    name: "John Carter",
    position: "Strength & Conditioning Coach",
    image: "https://i.ibb.co.com/tpMJFVGs/trainer-1.png",
  },

  
  {
    id: 2,
    name: "Emily Watson",
    position: "Certified Fitness Trainer",
    image: "https://i.ibb.co.com/cKHNNfx3/trainer-2.png",
 
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Personal Trainer",
    image: "https://i.ibb.co.com/Y75Q5JS2/trainer-3.png",

  },
  {
    id: 4,
    name: "Sophia Khan",
    position: "Yoga & Cardio Instructor",
    image: "https://i.ibb.co.com/kg1R8XVm/trainer-4.png",  
  
  },
  {
    id: 5,
    name: "David Miller",
    position: "Bodybuilding Coach",
    image: "https://i.ibb.co.com/4wPZ9n2w/trainer-5.png",  
  },
  {
    id: 6,
    name: "Ayesha Shaman",
    position: "Women's Fitness Trainer",
    image: "https://i.ibb.co.com/S4BzM2Fr/trainer-8.png",
  
  },
  {
    id: 7,
    name: "Ryan Lopez",
    position: "CrossFit Coach",
    image: "https://i.ibb.co.com/JR2hhHh9/trainer-7.png",
  
  },
  {
    id: 8,
    name: "Ahsan Mahout",
    position: "Functional Training Specialist",
        image: "https://i.ibb.co.com/Y4Dgtq6D/trainer-6.png",

  
  },
];

const Trainers = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10 text-gray-800 ">
        Certified Trainers
      </h1>

      <div className="grid grid-cols-4 gap-2.5 container mx-auto ">
        
        {tData.map((data, index) => (
          <TrainersData key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
