import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { categories, getQuestionsByCategory } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [questionCounts, setQuestionCounts] = useState<Record<string, number>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Count questions by category
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      counts[category.id] = getQuestionsByCategory(category.id).length;
    });
    setQuestionCounts(counts);
  }, []);

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {user?.username}!</h1>
        <p className="text-gray-600">Choose a category below to start practicing interview questions.</p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map(category => (
          <CategoryCard 
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            icon={category.icon}
            questionCount={questionCounts[category.id] || 0}
          />
        ))}
      </div>

      <div className="mt-12">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Progress</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-center">
              You haven't completed any practice sessions yet.
              <br />
              Pick a category above to get started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;