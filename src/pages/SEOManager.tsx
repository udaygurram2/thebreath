import React, { useState } from 'react';
import { defaultSEO, SEOConfig } from '../utils/seo';

const SEOManager: React.FC = () => {
  const [seoConfig, setSeoConfig] = useState<SEOConfig>(defaultSEO);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a backend
    localStorage.setItem('seoConfig', JSON.stringify(seoConfig));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleChange = (field: keyof SEOConfig, value: string) => {
    setSeoConfig(prev => ({
      ...prev,
      [field]: field === 'keywords' ? value.split(',').map(k => k.trim()) : value
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium mb-8">SEO Configuration Manager</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Page Title
                  </label>
                  <input
                    type="text"
                    value={seoConfig.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={seoConfig.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className="form-input min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={seoConfig.keywords.join(', ')}
                    onChange={(e) => handleChange('keywords', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    OG Image URL
                  </label>
                  <input
                    type="text"
                    value={seoConfig.ogImage}
                    onChange={(e) => handleChange('ogImage', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    OG Type
                  </label>
                  <input
                    type="text"
                    value={seoConfig.ogType}
                    onChange={(e) => handleChange('ogType', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Twitter Card
                  </label>
                  <select
                    value={seoConfig.twitterCard}
                    onChange={(e) => handleChange('twitterCard', e.target.value)}
                    className="form-input"
                  >
                    <option value="summary">Summary</option>
                    <option value="summary_large_image">Summary Large Image</option>
                    <option value="app">App</option>
                    <option value="player">Player</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Save Configuration
                </button>

                {isSaved && (
                  <div className="text-green-600 text-center">
                    Configuration saved successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOManager;