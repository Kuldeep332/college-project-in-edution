import React, { useState } from "react";

const Users = () => {
    const courses = [
        { id: 1, name: "C++", level: "Beginner", description: "Learn the basics of C++ programming." },
        { id: 2, name: "Java", level: "Intermediate", description: "Enhance your Java programming skills." },
        { id: 3, name: "Python", level: "Advanced", description: "Master Python for advanced applications." },
        { id: 4, name: "HTML", level: "Beginner", description: "Understand the fundamentals of HTML." },
        { id: 5, name: "CSS", level: "Intermediate", description: "Improve your CSS for better web design." },
        { id: 6, name: "JavaScript", level: "Advanced", description: "Dive deep into JavaScript for advanced web development." },
        { id: 7, name: "UPSC Exam Preparation", level: "Advanced", description: "Prepare comprehensively for the UPSC exam." },
        { id: 8, name: "MBA", level: "Advanced", description: "Get ready for an MBA with advanced preparation." },
        { id: 9, name: "AI", level: "Advanced", description: "Get ready for an AI with advanced preparation." },
        { id: 10, name: "CSS", level: "Intermediate", description: "Improve your CSS for better web design." },
        { id: 11, name: "JavaScript", level: "Advanced", description: "Dive deep into JavaScript for advanced web development." },
        { id: 12, name: "UPSC Exam Preparation", level: "Advanced", description: "Prepare comprehensively for the UPSC exam." },
        { id: 14, name: "MBA", level: "Advanced", description: "Get ready for an MBA with advanced preparation." },
        { id: 14, name: "AI", level: "Advanced", description: "Get ready for an AI with advanced preparation." }

    ];

    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleStartExam = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div className="bg-cream-100 min-h-screen w-full overflow-x-hidden flex flex-col">
            <header className="bg-blue-600 text-white p-4 w-full">
            </header>
            <div className="flex-grow p-4 w-full overflow-x-hidden">
                <h2 className="text-3xl font-bold mb-8 text-center">Certification Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-screen-lg">
                    {courses.map(course => (
                        <div 
                            key={course.id} 
                            className="rounded-lg shadow-md p-4 flex flex-col justify-between bg-opacity-70"
                            style={{ backgroundColor: "#00483C" }}
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-white">{course.name}</h3>
                                <p className="text-sm text-gray-200 mb-2">{course.level}</p>
                                <p className="text-sm text-gray-200 mb-4">{course.description}</p>
                            </div>
                            <button 
                                onClick={() => handleStartExam(course)}
                                className="bg-blue-500 hover:bg-blue-600 mtb-10 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-auto"
                            >
                                Take Exam
                            </button>
                        </div>
                    ))}
                </div>

                {selectedCourse && (
                    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Exam Format for {selectedCourse.name}</h3>
                        <p>This is where the exam format details for {selectedCourse.name} will appear.</p>
                    </div>
                )}
  <footer className="bg-gray-900 mt-20 text-gray-300 p-8 w-full  absolute top-90 left-0">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
        <div>
            <h3 className="text-xl font-bold mb-4">KASS</h3>
            <p>We are providing high-quality courses for about ten years.</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400">Fb.</a>
                <a href="#" className="text-gray-400">Ig.</a>
                <a href="#" className="text-gray-400">Tw.</a>
                <a href="#" className="text-gray-400">Be.</a>
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
            <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Business Finance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Advanced Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Data Visualization</a></li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p>Call us directly: <span className="text-yellow-400">+91 6263478403</span> (Free)</p>
            <p>Email support: <a href="kuldeepdhakad153@.com" className="text-yellow-400">help@domain.com</a></p>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex flex-col">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-md mb-2" />
                <button type="submit" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md">Submit</button>
            </form>
        </div>
    </div>
    <div className="text-center mt-8">
        <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
    </div>
</footer>
            </div>
      

        </div>
        
    );
};

export default Users;
