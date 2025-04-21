import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, AlertCircle } from 'lucide-react';
import { Question, addQuestion, getAllQuestions } from '../data/mockData';

interface QuestionFormData {
  category: 'aptitude' | 'logical' | 'hr' | 'coding';
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const AdminPage: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [questions, setQuestions] = useState(getAllQuestions());
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuestionFormData>();

  const onSubmit = (data: QuestionFormData) => {
    const newQuestion = addQuestion(data);
    setSuccessMessage('Question added successfully!');
    setQuestions([...questions, newQuestion]);
    reset();
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Question</h2>
            
            {successMessage && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>{successMessage}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  {...register('category', { required: 'Category is required' })}
                  className={`block w-full px-3 py-2 border ${
                    errors.category ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="">Select a category</option>
                  <option value="aptitude">Aptitude</option>
                  <option value="logical">Logical Reasoning</option>
                  <option value="hr">HR Questions</option>
                  <option value="coding">Coding</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  {...register('difficulty', { required: 'Difficulty is required' })}
                  className={`block w-full px-3 py-2 border ${
                    errors.difficulty ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                >
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                {errors.difficulty && (
                  <p className="mt-1 text-sm text-red-600">{errors.difficulty.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <textarea
                  id="question"
                  rows={4}
                  {...register('question', { 
                    required: 'Question is required',
                    minLength: { value: 10, message: 'Question must be at least 10 characters long' } 
                  })}
                  className={`block w-full px-3 py-2 border ${
                    errors.question ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter the interview question"
                ></textarea>
                {errors.question && (
                  <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
                  Answer
                </label>
                <textarea
                  id="answer"
                  rows={6}
                  {...register('answer', { 
                    required: 'Answer is required',
                    minLength: { value: 20, message: 'Answer must be at least 20 characters long' } 
                  })}
                  className={`block w-full px-3 py-2 border ${
                    errors.answer ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter the model answer"
                ></textarea>
                {errors.answer && (
                  <p className="mt-1 text-sm text-red-600">{errors.answer.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Question
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Added Questions</h2>
            
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Question
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {questions.slice(-5).reverse().map((question) => (
                    <tr key={question.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                        {question.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                        {question.difficulty}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">
                        {question.question}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing last {Math.min(5, questions.length)} of {questions.length} questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;