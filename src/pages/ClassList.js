
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ClassCard from '../components/ClassCard';

// const ClassList = () => {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/classes');
//         setClasses(data);
//       } catch (error) {
//         console.error('Error fetching classes:', error);
//       }
//     };
    
//     fetchClasses();
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Available Fitness Classes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {classes.map((fitnessClass) => (
//           <ClassCard key={fitnessClass._id} fitnessClass={fitnessClass} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClassList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassCard from '../components/ClassCard';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/classes');
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    
    fetchClasses();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">This is list of classes page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((fitnessClass) => (
          <ClassCard key={fitnessClass._id} fitnessClass={fitnessClass} />
        ))}
      </div>
    </div>
  );
};

export default ClassList;