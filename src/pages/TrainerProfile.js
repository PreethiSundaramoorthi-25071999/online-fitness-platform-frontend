
// 4
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const trainers = [
  { "id": "3", "name": "Emma White", "qualifications": ["Certified Yoga Instructor", "Nutrition Specialist"], "expertise": ["Yoga", "Meditation"], "rating": 4.9, "reviews": 25, "profilePic": "https://images.squarespace-cdn.com/content/v1/590beb9b893fc0ef1a3523e3/1658676352637-1K6JK547ZU2L928STUKM/Maria-21-Edit.jpg"},
  { "id": "4", "name": "David Green", "qualifications": ["Certified Personal Trainer", "Kettlebell Specialist"], "expertise": ["Strength Training", "Functional Fitness"], "rating": 4.7, "reviews": 18, "profilePic": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  { "id": "5", "name": "Laura Black", "qualifications": ["Certified Pilates Instructor"], "expertise": ["Pilates", "Rehabilitation"], "rating": 4.8, "reviews": 20, "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvh7Ok0Qi4gF2_UsSp6uAUx3NqAVbrKwQ&s" },
  { "id": "6", "name": "Mike Brown", "qualifications": ["Group Fitness Instructor"], "expertise": ["HIIT", "Cardio"], "rating": 4.6, "reviews": 15, "profilePic": "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg" },
  { "id": "7", "name": "Sophie Adams", "qualifications": ["Zumba Certified"], "expertise": ["Dance Fitness", "Zumba"], "rating": 4.5, "reviews": 30, "profilePic": "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA=" },
  { "id": "8", "name": "Chris Lee", "qualifications": ["Certified Kickboxing Trainer"], "expertise": ["Kickboxing", "Self-defense"], "rating": 4.7, "reviews": 22, "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlwOf5j0fRPn0dJ8wHh__bhzvsdXj20VJTQ&s" },
  { "id": "9", "name": "Anna King", "qualifications": ["Aqua Fitness Instructor"], "expertise": ["Aqua Aerobics"], "rating": 4.9, "reviews": 10, "profilePic": "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg" },
  { "id": "10", "name": "Tommy Hall", "qualifications": ["Strength Training Coach"], "expertise": ["Body Pump", "Weightlifting"], "rating": 4.6, "reviews": 16, "profilePic": "https://imgcdn.stablediffusionweb.com/2024/4/21/dbc4f2c5-1ace-42b7-a474-5e93208a7b18.jpg" },
  { "id": "11", "name": "Rachel Taylor", "qualifications": ["Meditation Coach"], "expertise": ["Meditation", "Wellness"], "rating": 4.8, "reviews": 12, "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s" },
  { "id": "12", "name": "Kevin Harris", "qualifications": ["Personal Trainer"], "expertise": ["Endurance Training"], "rating": 4.5, "reviews": 14, "profilePic": "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" }
];

function TrainerList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Trainers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src={trainer.profilePic}
              alt={trainer.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{trainer.name}</h2>
            <p className="text-gray-600 text-sm mb-2">
              <i className="fas fa-star text-yellow-500"></i> Rating: {trainer.rating} ({trainer.reviews} reviews)
            </p>
            <p className="text-gray-600 text-sm mb-2">Expertise: {trainer.expertise.join(", ")}</p>
            <ul className="text-gray-500 text-sm list-disc pl-5">
              {trainer.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerList;
