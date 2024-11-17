import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TrainerCard from '../components/TrainerCard';
import ClassCard from '../components/ClassCard';

const TrainerProfile = () => {
  const { trainerId } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        const { data: trainerData } = await axios.get(`http://localhost:5000/api/trainers/${trainerId}`);
        setTrainer(trainerData);
        // console.log(trainerData)

        const { data: classData } = await axios.get(`http://localhost:5000/api/trainers/${trainerId}/classes`);
        setClasses(classData);
        // console.log(classData)
      } catch (error) {
        setError('Error fetching trainer details.');
      }
    };

    fetchTrainerDetails();
  }, [trainerId]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">This is trainer page</h1>
      {trainer ? (
        <>
          <TrainerCard trainer={trainer} />
          
          <h2 className="text-2xl font-bold mt-8">Classes by {trainer.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {classes.map((fitnessClass) => (
              <ClassCard key={fitnessClass._id} fitnessClass={fitnessClass} />
            ))}
          </div>
        </>
      ) : (
        <p>{error || 'Loading trainer details...'}</p>
      )}
    </div>
  );
};

export default TrainerProfile;



