import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BrainCircuit, Users, Code2, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  questionCount?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description, icon, questionCount = 0 }) => {
  const renderIcon = () => {
    switch(icon) {
      case 'Calculator': return <Calculator className="h-8 w-8 text-blue-600" />;
      case 'BrainCircuit': return <BrainCircuit className="h-8 w-8 text-purple-600" />;
      case 'Users': return <Users className="h-8 w-8 text-green-600" />;
      case 'Code2': return <Code2 className="h-8 w-8 text-red-600" />;
      default: return <Calculator className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <Link 
      to={`/questions/${id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-gray-100">
            {renderIcon()}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <span className="text-sm text-gray-500">{questionCount} Questions</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-end">
          <span className="inline-flex items-center text-blue-600 text-sm font-medium">
            Practice Now <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;