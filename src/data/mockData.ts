// Mock Question Data
export interface Question {
  id: string;
  category: 'aptitude' | 'logical' | 'hr' | 'coding';
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const categories = [
  { 
    id: 'aptitude', 
    name: 'Aptitude', 
    description: 'Mathematical and analytical problem-solving questions',
    icon: 'Calculator'
  },
  { 
    id: 'logical', 
    name: 'Logical Reasoning', 
    description: 'Pattern recognition and logical deduction questions',
    icon: 'BrainCircuit'
  },
  { 
    id: 'hr', 
    name: 'HR Questions', 
    description: 'Behavioral and situational interview questions',
    icon: 'Users'
  },
  { 
    id: 'coding', 
    name: 'Coding', 
    description: 'Programming challenges and algorithm questions',
    icon: 'Code2'
  }
];

export const questions: Question[] = [
  // Existing Aptitude Questions
  {
    id: '1',
    category: 'aptitude',
    question: 'If a train travels at 60 kmph, how long will it take to cover a distance of 300 km?',
    answer: '5 hours. Using the formula Time = Distance / Speed, we get 300 / 60 = 5 hours.',
    difficulty: 'easy'
  },
  {
    id: '2',
    category: 'aptitude',
    question: 'A shopkeeper marks an item 20% above the cost price and offers a discount of 10%. What is his profit percentage?',
    answer: '8%. If cost price is 100, marked price becomes 120, and after 10% discount selling price is 108, resulting in 8% profit.',
    difficulty: 'medium'
  },
  // New Aptitude Questions
  {
    id: '9',
    category: 'aptitude',
    question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
    answer: '3:2. Let the speeds be 3x and 2x. Using relative speed concepts and solving the equations, we get this ratio.',
    difficulty: 'hard'
  },
  {
    id: '10',
    category: 'aptitude',
    question: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
    answer: 'Rs. 698. Using SI = (P × R × T)/100 and solving the equations: 815 = P + 3r and 854 = P + 4r, we get P = 698.',
    difficulty: 'medium'
  },
  {
    id: '11',
    category: 'aptitude',
    question: 'The average of first 50 natural numbers is:',
    answer: '25.5. Sum of first n natural numbers = n(n+1)/2. Therefore, average = [50(51)]/[2(50)] = 25.5',
    difficulty: 'easy'
  },
  {
    id: '12',
    category: 'aptitude',
    question: 'If 6 men can do a piece of work in 12 days, in how many days can 8 men do the same work?',
    answer: '9 days. Using M1D1 = M2D2 principle: 6 × 12 = 8 × D2, solving for D2 gives us 9 days.',
    difficulty: 'medium'
  },
  // Existing Logical Questions
  {
    id: '3',
    category: 'logical',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    answer: '42. The pattern is adding consecutive integers starting from 4: 2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42.',
    difficulty: 'medium'
  },
  {
    id: '4',
    category: 'logical',
    question: 'If all Flinks are Blinks, and some Blinks are Clinks, then?',
    answer: 'Some Flinks might be Clinks. We cannot definitively say all Flinks are Clinks or that no Flinks are Clinks.',
    difficulty: 'hard'
  },
  // Existing HR Questions
  {
    id: '5',
    category: 'hr',
    question: 'Tell me about a time when you faced a conflict with a colleague and how you resolved it.',
    answer: 'This question evaluates conflict resolution skills. A good response demonstrates your ability to collaborate, compromise, and maintain professional relationships despite differences.',
    difficulty: 'medium'
  },
  {
    id: '6',
    category: 'hr',
    question: 'Where do you see yourself in five years?',
    answer: 'This question assesses your career ambitions and alignment with the company. A good answer shows clear career goals, enthusiasm for growth within the organization, and realistic expectations.',
    difficulty: 'easy'
  },
  // Existing Coding Questions
  {
    id: '7',
    category: 'coding',
    question: 'Write a function to check if a string is a palindrome.',
    answer: "```javascript\nfunction isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}\n```\nThis function removes non-alphanumeric characters, converts to lowercase, then checks if the string reads the same forward and backward.",
    difficulty: 'easy'
  },
  {
    id: '8',
    category: 'coding',
    question: 'Describe the time complexity of quicksort in best, average, and worst cases.',
    answer: 'Best case: O(n log n) - when the pivot divides the array into roughly equal halves.\nAverage case: O(n log n) - expected performance across all possible inputs.\nWorst case: O(n²) - occurs when the pivot is always the smallest or largest element (already sorted array).',
    difficulty: 'hard'
  },
  // New Coding Questions
  {
    id: '13',
    category: 'coding',
    question: 'Implement a function to find the first non-repeating character in a string.',
    answer: "```javascript\nfunction firstNonRepeatingChar(str) {\n  const charCount = new Map();\n  \n  // Count character frequencies\n  for (const char of str) {\n    charCount.set(char, (charCount.get(char) || 0) + 1);\n  }\n  \n  // Find first character with count 1\n  for (const char of str) {\n    if (charCount.get(char) === 1) {\n      return char;\n    }\n  }\n  \n  return null;\n}\n```\nThis solution has O(n) time complexity and O(1) space complexity since the character set is fixed.",
    difficulty: 'medium'
  },
  {
    id: '14',
    category: 'coding',
    question: 'Write a function to detect if two strings are anagrams.',
    answer: "```javascript\nfunction areAnagrams(str1, str2) {\n  if (str1.length !== str2.length) return false;\n  \n  const charCount = new Map();\n  \n  // Count characters in first string\n  for (const char of str1) {\n    charCount.set(char, (charCount.get(char) || 0) + 1);\n  }\n  \n  // Decrement counts for second string\n  for (const char of str2) {\n    if (!charCount.has(char)) return false;\n    charCount.set(char, charCount.get(char) - 1);\n    if (charCount.get(char) === 0) charCount.delete(char);\n  }\n  \n  return charCount.size === 0;\n}\n```\nThis solution has O(n) time complexity where n is the length of the input strings.",
    difficulty: 'medium'
  },
  {
    id: '15',
    category: 'coding',
    question: 'Implement a function to find all pairs in an array that sum to a target value.',
    answer: "```javascript\nfunction findPairs(arr, target) {\n  const pairs = [];\n  const seen = new Set();\n  \n  for (const num of arr) {\n    const complement = target - num;\n    if (seen.has(complement)) {\n      pairs.push([complement, num]);\n    }\n    seen.add(num);\n  }\n  \n  return pairs;\n}\n```\nThis solution uses a Set for O(1) lookups and has O(n) time complexity where n is the array length.",
    difficulty: 'medium'
  },
  {
    id: '16',
    category: 'coding',
    question: 'Implement a basic LRU (Least Recently Used) cache with a given capacity.',
    answer: "```javascript\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    \n    // Update access order\n    const value = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, value);\n    return value;\n  }\n\n  put(key, value) {\n    if (this.cache.has(key)) {\n      this.cache.delete(key);\n    } else if (this.cache.size >= this.capacity) {\n      // Remove least recently used item (first item)\n      const firstKey = this.cache.keys().next().value;\n      this.cache.delete(firstKey);\n    }\n    this.cache.set(key, value);\n  }\n}\n```\nThis implementation uses a Map to maintain insertion order and provides O(1) time complexity for both get and put operations.",
    difficulty: 'hard'
  },
  // Python-specific Questions
  {
    id: '17',
    category: 'coding',
    question: 'Explain Python list comprehensions and provide an example.',
    answer: "List comprehensions provide a concise way to create lists in Python. They consist of brackets containing an expression followed by a for clause, then zero or more for or if clauses.\n\n```python\n# Example 1: Create a list of squares\nsquares = [x**2 for x in range(10)]\n\n# Example 2: Filter even numbers and square them\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\n\n# Example 3: Create a matrix\nmatrix = [[i+j for j in range(3)] for i in range(3)]\n```\n\nList comprehensions are often more readable and faster than equivalent for loops.",
    difficulty: 'medium'
  },
  {
    id: '18',
    category: 'coding',
    question: 'What are Python decorators and how do they work?',
    answer: "Decorators are a way to modify or enhance functions or classes without directly changing their source code. They use the @syntax and are implemented as functions that take another function as an argument.\n\n```python\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end-start} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return 'Done'\n```\n\nCommon uses include logging, timing functions, adding authentication, and caching.",
    difficulty: 'hard'
  },
  // Java-specific Questions
  {
    id: '19',
    category: 'coding',
    question: 'Explain the difference between ArrayList and LinkedList in Java.',
    answer: "Key differences between ArrayList and LinkedList:\n\n1. Internal Structure:\n- ArrayList: Uses dynamic array\n- LinkedList: Uses doubly linked list\n\n2. Performance:\n```java\n// ArrayList\n- get(index): O(1)\n- add/remove at end: O(1) amortized\n- add/remove at specific index: O(n)\n\n// LinkedList\n- get(index): O(n)\n- add/remove at ends: O(1)\n- add/remove at specific index: O(n)\n```\n\n3. Memory:\n- ArrayList: Less memory overhead\n- LinkedList: More memory (stores prev/next references)\n\nUse ArrayList for:\n- Random access\n- Mostly reading operations\n\nUse LinkedList for:\n- Frequent insertions/deletions\n- No random access needed",
    difficulty: 'medium'
  },
  {
    id: '20',
    category: 'coding',
    question: 'What is the Java Memory Model and how does Garbage Collection work?',
    answer: "Java Memory Model (JMM) and Garbage Collection:\n\n1. Memory Areas:\n```java\n- Heap: Objects and arrays\n- Stack: Method frames and local variables\n- Method Area: Class metadata, static variables\n```\n\n2. Garbage Collection Process:\n- Mark: Identify live objects\n- Sweep: Remove dead objects\n- Compact: Defragment memory\n\n3. Generations:\n```java\nYoung Generation:\n- Eden Space (new objects)\n- Survivor Spaces (S0, S1)\n\nOld Generation:\n- Long-lived objects\n- Objects promoted from Young Gen\n```\n\n4. GC Types:\n- Serial GC\n- Parallel GC\n- CMS (Concurrent Mark Sweep)\n- G1 GC (Garbage First)\n\nBest Practices:\n- Minimize object creation\n- Use appropriate collection sizes\n- Consider weak references for caches",
    difficulty: 'hard'
  },
  // JavaScript-specific Questions
  {
    id: '21',
    category: 'coding',
    question: 'Explain the event loop in JavaScript and how async/await works.',
    answer: "JavaScript Event Loop and async/await:\n\n1. Event Loop Components:\n```javascript\n- Call Stack: Executes synchronous code\n- Task Queue: Holds callbacks (setTimeout, events)\n- Microtask Queue: Promises, process.nextTick\n- Web APIs: setTimeout, fetch, DOM events\n```\n\n2. async/await Example:\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\n// Under the hood, transforms into:\nfunction fetchData() {\n  return new Promise((resolve, reject) => {\n    fetch('api/data')\n      .then(response => response.json())\n      .then(data => resolve(data))\n      .catch(error => reject(error));\n  });\n}\n```\n\n3. Key Concepts:\n- async functions always return Promises\n- await pauses execution until Promise resolves\n- Error handling using try/catch\n- Microtasks have priority over regular tasks",
    difficulty: 'hard'
  },
  {
    id: '22',
    category: 'coding',
    question: 'What are JavaScript closures and how are they useful?',
    answer: "Closures in JavaScript:\n\n1. Definition:\nA closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.\n\n2. Example:\n```javascript\nfunction createCounter() {\n  let count = 0;\n  \n  return {\n    increment() {\n      return ++count;\n    },\n    decrement() {\n      return --count;\n    },\n    getCount() {\n      return count;\n    }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.decrement(); // 1\n```\n\n3. Common Use Cases:\n- Data privacy (private variables)\n- Function factories\n- Partial application\n- Memoization\n\n4. Memory Considerations:\n- Closures keep references to outer variables\n- Can lead to memory leaks if not managed properly\n- Clear references when no longer needed",
    difficulty: 'medium'
  }
];

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter(q => q.category === category);
}

export function getAllQuestions(): Question[] {
  return [...questions];
}

export function addQuestion(question: Omit<Question, 'id'>): Question {
  const newQuestion = {
    ...question,
    id: Math.random().toString(36).substring(2, 9)
  };
  questions.push(newQuestion);
  return newQuestion;
}