import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, SortAsc, SortDesc } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import { Question, getQuestionsByCategory, categories } from '../data/mockData';

const QuestionsPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const categoryInfo = categories.find(c => c.id === category);

  useEffect(() => {
    if (category) {
      const fetchedQuestions = getQuestionsByCategory(category);
      setQuestions(fetchedQuestions);
      setFilteredQuestions(fetchedQuestions);
    }
  }, [category]);

  useEffect(() => {
    let result = [...questions];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
             q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      result = result.filter(q => q.difficulty === difficultyFilter);
    }
    
    // Apply sorting
    result = result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.question.localeCompare(b.question);
      } else {
        return b.question.localeCompare(a.question);
      }
    });
    
    setFilteredQuestions(result);
  }, [questions, searchTerm, difficultyFilter, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(current => (current === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Link to="/dashboard" className="mr-4 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          {categoryInfo?.name || 'Questions'}
        </h1>
      </div>

      {/* Filters */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Difficulty filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Sort button */}
          <button
            onClick={toggleSortOrder}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <span>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
            {sortOrder === 'asc' ? (
              <SortAsc className="h-5 w-5 text-gray-500" />
            ) : (
              <SortDesc className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-600">
        <span>Showing {filteredQuestions.length} of {questions.length} questions</span>
      </div>

      {/* Question cards */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-600">
              No questions found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;