import React from 'react';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">InterviewPrep</span>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left text-base text-gray-400">
            &copy; {new Date().getFullYear()} InterviewPrep. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white mx-3">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-3">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-3">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;