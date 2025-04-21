import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { Question } from '../data/mockData';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const getDifficultyColor = () => {
    switch(question.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-4">
      <div className="p-5">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor()} mr-2`}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </span>
              <button 
                onClick={toggleBookmark}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                {isBookmarked ? 
                  <BookmarkCheck className="h-5 w-5 text-blue-600" /> : 
                  <BookmarkPlus className="h-5 w-5" />
                }
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{question.question}</h3>
          </div>
          <button 
            onClick={toggleExpand}
            className="ml-4 self-start text-gray-400 hover:text-blue-600 transition-colors"
          >
            {isExpanded ? 
              <ChevronUp className="h-6 w-6" /> : 
              <ChevronDown className="h-6 w-6" />
            }
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Answer:</h4>
            <div className="text-gray-600 whitespace-pre-line">{question.answer}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;