import React, { useState } from 'react';
import { Search, ArrowRight, Loader2, CheckCircle2, MapPin, Clock, Building2, Star, ExternalLink, Mail } from 'lucide-react';

const BusinessFinder = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showPromptAnalysis, setShowPromptAnalysis] = useState(false);

  const samplePrompt = "I need companies that specialize in implementing object detection systems for retail stores in California. My budget is around $50,000-100,000. I specifically need real-time customer tracking and heat mapping capabilities. Preferably companies with experience in shopping malls and department stores.";

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setShowPromptAnalysis(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BF</span>
            </div>
            <h1 className="text-xl font-semibold">Business Finder AI</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Find Your Ideal Business Solution</h2>
          <p className="text-gray-600 mb-8">Be specific about your needs, location, budget, and requirements</p>

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <textarea
                placeholder="Describe your business needs in detail..."
                className="w-full p-3 pl-12 pr-4 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                value={prompt || samplePrompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                style={{ overflow: "hidden" }}
              />
              <button
                type="submit"
                className="absolute right-2 bottom-2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 flex items-center space-x-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Find Solutions</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Example Prompts Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Example Prompts:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "I need a company to develop a mobile app for online food delivery within a $20,000 budget.",
                "Looking for a marketing agency with expertise in healthcare in New York.",
                "Seeking consultants for implementing cloud infrastructure for a mid-sized company.",
                "Need a design firm specializing in modern office spaces under $50,000."
              ].map((example, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition"
                  onClick={() => setPrompt(example)}
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {showPromptAnalysis && (
          <div className="max-w-3xl mx-auto mb-8 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Understanding Your Requirements</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Core Service Need</h4>
                  <p className="text-gray-600">Object detection systems implementation for retail</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">California, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="text-purple-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Industry Focus</h4>
                  <p className="text-gray-600">Retail (Shopping malls & department stores)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-orange-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Specific Features</h4>
                  <ul className="text-gray-600 list-disc ml-4">
                    <li>Real-time customer tracking</li>
                    <li>Heat mapping capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3">
                    <h4 className="text-xl font-semibold">RetailVision AI</h4>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>San Francisco, California</span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Best Match</span>
              </div>

              <div className="mt-4 space-x-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">Object Detection</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">Retail Analytics</span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">Heat Mapping</span>
              </div>

              <div className="mt-4">
                <p className="text-gray-600">Specializing in retail analytics and customer tracking solutions. Perfect match for your requirements with extensive experience in mall implementations.</p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Implemented solutions in 50+ shopping malls across California</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Real-time tracking with 99.9% accuracy</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-green-500 mt-1" />
                    <span className="text-gray-600">Advanced heat mapping with customizable analytics</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Mail size={16} />
                    <span>Request Quote</span>
                  </button>
                  <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessFinder;
