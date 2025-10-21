
"use client";
import React, { useState } from 'react';
import { 
  FaClock, 
  FaUser, 
  FaLevelUpAlt, 
  FaPlay, 
  FaCheck, 
  FaStar,
  FaDownload,
  FaShare,
  FaBook,
  FaVideo,
  FaCertificate,
  FaArrowLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const IndividualCoursePage = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [enrolled, setEnrolled] = useState(false);

  // Sample course data
  const courseData = {
    id: 1,
    title: "Complete React & Next.js Masterclass",
    instructor: "Pervez Hasan",
    rating: 4.8,
    students: 1250,
    duration: "28 hours",
    level: "Intermediate",
    lastUpdated: "October 2024",
    price: "$89.99",
    originalPrice: "$149.99",
    thumbnail: "/api/placeholder/800/450",
    instructorAvatar: "/api/placeholder/100/100",
    description: "Master React and Next.js with modern practices, build real-world projects, and advance your career as a frontend developer.",
    objectives: [
      "Build scalable React applications",
      "Master Next.js and SSR",
      "State management with Redux",
      "API integration and authentication",
      "Deployment and performance optimization"
    ],
    features: [
      "28 hours on-demand video",
      "50+ coding exercises",
      "15 real-world projects",
      "Certificate of completion",
      "Lifetime access"
    ],
    curriculum: [
      {
        section: "Getting Started with React",
        lectures: 8,
        duration: "2.5 hours",
        items: [
          { title: "Introduction to React", duration: "15:30", type: "video", preview: true },
          { title: "Setting up Development Environment", duration: "20:15", type: "video" },
          { title: "JSX Fundamentals", duration: "25:45", type: "video" },
          { title: "Components and Props", duration: "30:20", type: "video" },
          { title: "Exercise: Your First Component", duration: "45:00", type: "exercise" }
        ]
      },
      {
        section: "State and Event Handling",
        lectures: 12,
        duration: "4 hours",
        items: [
          { title: "Understanding State", duration: "25:30", type: "video" },
          { title: "Event Handling in React", duration: "20:15", type: "video" },
          { title: "Controlled Components", duration: "30:45", type: "video" },
          { title: "Exercise: Interactive Components", duration: "50:00", type: "exercise" }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        student: "John Doe",
        avatar: "/api/placeholder/50/50",
        rating: 5,
        date: "2 weeks ago",
        comment: "Amazing course! The projects helped me land my first React job."
      },
      {
        id: 2,
        student: "Sarah Smith",
        avatar: "/api/placeholder/50/50",
        rating: 4,
        date: "1 month ago",
        comment: "Great content, but some sections could use more advanced examples."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/courses" className="flex items-center text-gray-600 hover:text-gray-900">
              <FaArrowLeft className="mr-2" />
              Back to Courses
            </a>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FaShare />
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                {enrolled ? 'Continue Learning' : 'Enroll Now'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold mb-4"
              >
                {courseData.title}
              </motion.h1>
              <p className="text-xl mb-6 opacity-90">{courseData.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  <span>{courseData.rating} rating</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <span>{courseData.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaLevelUpAlt className="mr-2" />
                  <span>{courseData.level}</span>
                </div>
              </div>

              <div className="flex items-center">
                <img 
                  src={courseData.instructorAvatar} 
                  alt={courseData.instructor}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Created by</p>
                  <p className="text-lg">{courseData.instructor}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="aspect-video bg-black rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src={courseData.thumbnail} 
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </button>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold">{courseData.price}</span>
                    <span className="text-lg line-through opacity-70">{courseData.originalPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                      40% OFF
                    </span>
                  </div>
                  <p className="text-sm opacity-80">Limited time offer</p>
                </div>

                <button 
                  onClick={() => setEnrolled(true)}
                  className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-lg hover:bg-yellow-300 transition-colors mb-4"
                >
                  {enrolled ? 'Continue Learning' : 'Enroll Now'}
                </button>

                <div className="text-center text-sm opacity-80">
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Tabs */}
          <div className="flex border-b mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'instructor', label: 'Instructor' },
              { id: 'reviews', label: 'Reviews' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id 
                    ? 'border-purple-600 text-purple-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseData.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courseData.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                          <FaVideo className="text-purple-600 mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  {courseData.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <h4 className="font-semibold text-lg">{section.section}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <span>{section.lectures} lectures • </span>
                          <span className="ml-1">{section.duration}</span>
                        </div>
                      </div>
                      <div className="divide-y">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              {item.type === 'video' ? (
                                <FaVideo className="text-gray-400 mr-4" />
                              ) : (
                                <FaBook className="text-gray-400 mr-4" />
                              )}
                              <div>
                                <h5 className="font-medium">{item.title}</h5>
                                {item.preview && (
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                                    Preview
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="text-sm text-gray-600">{item.duration}</span>
                              {enrolled ? (
                                <button className="text-purple-600 hover:text-purple-700">
                                  <FaPlay />
                                </button>
                              ) : (
                                <button className="text-gray-400 cursor-not-allowed">
                                  <FaPlay />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={courseData.instructorAvatar} 
                      alt={courseData.instructor}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{courseData.instructor}</h3>
                      <p className="text-gray-600 mb-4">Senior Full Stack Developer & Instructor</p>
                      <p className="text-gray-700 mb-4">
                        With over 5 years of experience in web development, I've helped thousands of students 
                        master modern web technologies and advance their careers.
                      </p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div>
                          <span className="font-semibold">4.8/5</span> Instructor Rating
                        </div>
                        <div>
                          <span className="font-semibold">12,500+</span> Students
                        </div>
                        <div>
                          <span className="font-semibold">8</span> Courses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {courseData.reviews.map(review => (
                    <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={review.avatar} 
                            alt={review.student}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h4 className="font-semibold">{review.student}</h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h4 className="font-bold text-lg mb-4">This Course Includes</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaVideo className="text-purple-600 mr-3" />
                    <span>28 hours on-demand video</span>
                  </div>
                  <div className="flex items-center">
                    <FaDownload className="text-purple-600 mr-3" />
                    <span>50 downloadable resources</span>
                  </div>
                  <div className="flex items-center">
                    <FaCertificate className="text-purple-600 mr-3" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <FaBook className="text-purple-600 mr-3" />
                    <span>15 coding exercises</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h4 className="font-bold text-lg mb-4">Training Programs</h4>
                <p className="text-gray-600 mb-4">
                  This course is part of multiple training programs
                </p>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  View Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualCoursePage;