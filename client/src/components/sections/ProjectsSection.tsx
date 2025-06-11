import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Filter, Search } from "lucide-react";

interface Project {
  title: string;
  description: string;
  financialDomains: string[];
  technologies: string[];
  userFriendlyDesign: string;
  predictiveAnalytics: string;
  techCategory: string;
  github?: string;
  liveDemo?: string;
}

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Synthia - Synthetic Financial Data & Scenario Generator",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data (transaction histories, market behavior, credit profiles). Financial institutions can use this data to train and validate machine learning models without exposing sensitive customer information.",
      financialDomains: ["Investment", "Banking", "Credit/Debit", "Trading"],
      technologies: ["Generative Adversarial Networks (GANs)", "Large Language Models (LLMs)", "Cloud Computing"],
      userFriendlyDesign: "An intuitive web interface allows risk analysts and data scientists to define parameters (data volume, volatility, correlation) and generate datasets or simulate scenarios with a few clicks.",
      predictiveAnalytics: "Moves beyond historical back-testing by generating plausible future market conditions, enabling predictive and more robust risk management.",
      techCategory: "Generative AI",
      github: "https://github.com/manojkumartechie/synthia-ai",
      liveDemo: "https://synthia-demo.com"
    },
    {
      title: "QuantumLeap - Predictive & Explainable Credit Scoring",
      description: "A credit scoring model that moves beyond traditional metrics by incorporating alternative data sources (e.g., rent payments, utility bills, real-time spending habits). Uses advanced machine learning and Explainable AI (XAI) to provide highly accurate risk scores.",
      financialDomains: ["Credit/Debit", "Banking"],
      technologies: ["Machine Learning (XGBoost)", "XAI (SHAP, LIME)", "Big Data", "Python"],
      userFriendlyDesign: "Applicants receive a simple, interactive report explaining their score and offering personalized, actionable steps to improve it, fostering financial literacy and transparency.",
      predictiveAnalytics: "Predicts the probability of default with greater accuracy than legacy systems, enabling lenders to extend credit to previously underserved populations safely.",
      techCategory: "Data Science",
      github: "https://github.com/manojkumartechie/quantumleap-credit",
      liveDemo: "https://quantumleap-demo.com"
    },
    {
      title: "Cerberus - Multi-Layered Transaction Fraud Detection",
      description: "A real-time fraud detection engine that analyzes credit, debit, and trading transactions simultaneously. Uses a combination of supervised and unsupervised machine learning models to detect known fraud patterns and identify new, emerging fraudulent behaviors.",
      financialDomains: ["Credit/Debit", "Banking", "Trading"],
      technologies: ["Graph Neural Networks", "Autoencoders", "Real-time Data Streaming (Kafka)", "Python"],
      userFriendlyDesign: "When a transaction is flagged, a clear alert is sent to the user's mobile app with simple 'Yes, this was me' or 'No, secure my account' options.",
      predictiveAnalytics: "Predicts the likelihood of a transaction being fraudulent in milliseconds, allowing for intervention before funds are irrevocably lost.",
      techCategory: "Data Science",
      github: "https://github.com/manojkumartechie/cerberus-fraud",
      liveDemo: "https://cerberus-demo.com"
    },
    {
      title: "Prism - Integrated Personal Finance Dashboard",
      description: "A comprehensive dashboard that provides a 360-degree view of a user's financial life. Aggregates data from all accounts (banking, credit cards, investments, loans) and enriches it with real-time analysis and predictive insights.",
      financialDomains: ["Spending Management", "Investment", "Banking", "Credit/Debit"],
      technologies: ["Data Aggregation APIs (Plaid)", "Real-time Analytics", "Data Visualization (D3.js)", "React"],
      userFriendlyDesign: "Highly visual and intuitive, using charts, graphs, and personalized 'insights' cards to make complex financial data easy to understand and act upon.",
      predictiveAnalytics: "Forecasts future cash flow, predicts upcoming bills, and projects investment growth to help users make proactive financial decisions.",
      techCategory: "Data Analysis",
      github: "https://github.com/manojkumartechie/prism-dashboard",
      liveDemo: "https://prism-demo.com"
    },
    {
      title: "Optimus - Reinforcement Learning Portfolio Optimization",
      description: "A portfolio management system that uses reinforcement learning (RL) to dynamically adjust asset allocations. Unlike traditional models that optimize for a single point in time, Optimus learns from real-time market data to develop adaptive trading policies.",
      financialDomains: ["Investment", "Share Market/Trading"],
      technologies: ["Reinforcement Learning (Deep Q-Networks)", "Time-Series Analysis", "Cloud Computing", "Python"],
      userFriendlyDesign: "A dashboard visualizes the RL agent's decisions, portfolio performance against benchmarks, and key market signals driving its actions, providing transparency for advisors and investors.",
      predictiveAnalytics: "The RL model inherently makes predictive decisions by learning to anticipate market rewards and risks based on current states, moving beyond static forecasting.",
      techCategory: "Data Science",
      github: "https://github.com/manojkumartechie/optimus-portfolio",
      liveDemo: "https://optimus-demo.com"
    },
    {
      title: "Pulse - Real-Time Market Sentiment Analysis",
      description: "A real-time data analysis platform that continuously ingests and analyzes news articles, social media posts, and regulatory filings to gauge sentiment towards specific stocks, sectors, and markets using advanced NLP.",
      financialDomains: ["Share Market/Trading", "Investment"],
      technologies: ["NLP", "Real-time Data Ingestion", "Stream Processing (Apache Flink)", "Python"],
      userFriendlyDesign: "A 'market pulse' dashboard displays sentiment scores, trending topics, and sentiment volatility over time. Users can set alerts for significant shifts in sentiment for portfolio assets.",
      predictiveAnalytics: "Uses sentiment shifts as a leading indicator to predict short-term price movements and volatility spikes.",
      techCategory: "Data Analysis",
      github: "https://github.com/manojkumartechie/pulse-sentiment",
      liveDemo: "https://pulse-demo.com"
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedTechCategories, setSelectedTechCategories] = useState<string[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Get unique categories and domains
  const techCategories = Array.from(new Set(projects.map(p => p.techCategory)));
  const allDomains = Array.from(new Set(projects.flatMap(p => p.financialDomains)));

  // Filter projects based on selections
  useEffect(() => {
    let filtered = projects;

    if (selectedTechCategories.length > 0) {
      filtered = filtered.filter(p => selectedTechCategories.includes(p.techCategory));
    }

    if (selectedDomains.length > 0) {
      filtered = filtered.filter(p => 
        p.financialDomains.some(domain => selectedDomains.includes(domain))
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedTechCategories, selectedDomains, searchTerm]);

  const toggleFilter = (category: string, type: 'tech' | 'domain') => {
    if (type === 'tech') {
      setSelectedTechCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    } else {
      setSelectedDomains(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    }
  };

  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-900 text-slate-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white tracking-tight">
            Revolutionizing Finance
          </h2>
          <p className="mt-4 text-lg text-slate-400 dark:text-slate-400 max-w-3xl mx-auto">
            An interactive explorer for advanced project ideas and strategic insights in the financial technology sector.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-md border border-white/15 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 p-6 rounded-xl bg-slate-800/50 backdrop-blur-md border border-white/15">
          <div className="mb-6">
            <h3 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter by Technology Domain:
            </h3>
            <div className="flex flex-wrap gap-2">
              {techCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedTechCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(category, 'tech')}
                  className={`transition-all duration-300 ${
                    selectedTechCategories.includes(category)
                      ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                      : 'bg-transparent text-slate-300 border-slate-600 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-200 mb-3">Filter by Financial Domain:</h3>
            <div className="flex flex-wrap gap-2">
              {allDomains.map((domain) => (
                <Button
                  key={domain}
                  variant={selectedDomains.includes(domain) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(domain, 'domain')}
                  className={`transition-all duration-300 ${
                    selectedDomains.includes(domain)
                      ? 'bg-green-600 text-white border-green-600 hover:bg-green-700'
                      : 'bg-transparent text-slate-300 border-slate-600 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  {domain}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-slate-800/50 backdrop-blur-md border border-white/15 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className="ml-2 bg-blue-600/20 text-blue-400 border-blue-600/30"
                      >
                        {project.techCategory}
                      </Badge>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Financial Domains */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-400 mb-2">Financial Domains:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.financialDomains.map((domain) => (
                        <Badge 
                          key={domain} 
                          variant="outline" 
                          className="text-xs bg-green-600/10 text-green-400 border-green-600/30"
                        >
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs bg-purple-600/10 text-purple-400 border-purple-600/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedCard === project.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-slate-700">
                      <div className="mb-3">
                        <p className="text-xs font-medium text-slate-400 mb-1">User-Friendly Design:</p>
                        <p className="text-xs text-slate-300">{project.userFriendlyDesign}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-medium text-slate-400 mb-1">Predictive Analytics:</p>
                        <p className="text-xs text-slate-300">{project.predictiveAnalytics}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCard(expandedCard === project.title ? null : project.title)}
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-600/10"
                    >
                      {expandedCard === project.title ? 'Show Less' : 'Learn More'}
                    </Button>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-slate-400 hover:text-white hover:bg-slate-700"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-slate-400 hover:text-white hover:bg-slate-700"
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedTechCategories([]);
                setSelectedDomains([]);
                setSearchTerm("");
              }}
              className="mt-4 bg-transparent text-slate-300 border-slate-600 hover:bg-slate-700"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};