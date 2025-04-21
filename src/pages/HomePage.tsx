import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Ace Your Next Interview</h1>
              <p className="text-xl mb-8 opacity-90">
                Practice with thousands of interview questions across technical, aptitude, and HR domains.
              </p>
              <div className="space-x-4">
                <Link 
                  to="/signup" 
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/login" 
                  className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="People in interview"
                className="rounded-lg shadow-xl max-h-96 object-cover ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose InterviewPrep?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to give you the edge in your job interviews with comprehensive preparation materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive</h3>
              <p className="text-gray-600">
                Access thousands of questions across multiple domains and difficulty levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert-Curated</h3>
              <p className="text-gray-600">
                All questions are carefully selected by industry professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Join a community of job seekers and share interview experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our users report 40% higher interview success rates after using our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to ace your next interview?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of successful job seekers who have used InterviewPrep to land their dream jobs.
          </p>
          <Link 
            to="/signup" 
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;