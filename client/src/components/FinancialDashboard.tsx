import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Filter, TrendingUp, BarChart3, Users, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  financialDomains: string[];
  technologies: string[];
  userFriendlyDesign: string;
  predictiveAnalytics: string;
  techCategory: string;
}

interface Solution {
  title: string;
  description: string;
  technologies: string[];
}

export const FinancialDashboard = () => {
  const [activeSection, setActiveSection] = useState('explorer');
  const [activeTechFilter, setActiveTechFilter] = useState('All');
  const [activeDomainFilter, setActiveDomainFilter] = useState('All');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Synthia - Synthetic Financial Data & Scenario Generator",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data (transaction histories, market behavior, credit profiles). Financial institutions can use this data to train and validate machine learning models without exposing sensitive customer information.",
      financialDomains: ["Investment", "Banking", "Credit/Debit", "Trading"],
      technologies: ["Generative Adversarial Networks (GANs)", "Large Language Models (LLMs)", "Cloud Computing"],
      userFriendlyDesign: "An intuitive web interface allows risk analysts and data scientists to define parameters (data volume, volatility, correlation) and generate datasets or simulate scenarios with a few clicks.",
      predictiveAnalytics: "Moves beyond historical back-testing by generating plausible future market conditions, enabling predictive and more robust risk management.",
      techCategory: "Generative AI"
    },
    {
      title: "Athena - Automated Investment Strategy & Report Generation",
      description: "An AI-powered system that analyzes a user's financial goals, risk tolerance, and existing portfolio to generate bespoke, diversified investment strategies. Athena uses generative AI to draft detailed investment proposals, quarterly performance reports, and market commentary.",
      financialDomains: ["Investment", "Share Market/Trading"],
      technologies: ["Generative AI (LLMs like GPT-4)", "Reinforcement Learning", "Big Data Analytics"],
      userFriendlyDesign: "A conversational AI interface for end-users to set goals, and a separate portal for human advisors to review, approve, and customize the AI-generated strategies.",
      predictiveAnalytics: "Predicts optimal asset allocation based on forecasted market trends and simulates long-term portfolio growth under various economic conditions.",
      techCategory: "Generative AI"
    },
    {
      title: "QuantumLeap - Predictive & Explainable Credit Scoring",
      description: "A credit scoring model that moves beyond traditional metrics by incorporating alternative data sources (e.g., rent payments, utility bills, real-time spending habits). It uses advanced machine learning and Explainable AI (XAI) to provide highly accurate risk scores.",
      financialDomains: ["Credit/Debit", "Banking"],
      technologies: ["Machine Learning (Ensemble Models like XGBoost)", "XAI (SHAP, LIME)", "Big Data"],
      userFriendlyDesign: "Applicants receive a simple, interactive report explaining their score and offering personalized, actionable steps to improve it, fostering financial literacy.",
      predictiveAnalytics: "Predicts the probability of default with greater accuracy than legacy systems, enabling lenders to extend credit to previously underserved populations safely.",
      techCategory: "Data Science"
    },
    {
      title: "Optimus - Reinforcement Learning-Based Portfolio Optimization",
      description: "A portfolio management system that uses reinforcement learning (RL) to dynamically adjust asset allocations. Unlike traditional models that optimize for a single point in time, Optimus learns from real-time market data.",
      financialDomains: ["Investment", "Share Market/Trading"],
      technologies: ["Reinforcement Learning (Deep Q-Networks)", "Time-Series Analysis", "Cloud Computing"],
      userFriendlyDesign: "A dashboard visualizes the RL agent's decisions, the portfolio's performance against benchmarks, and the key market signals driving its actions.",
      predictiveAnalytics: "The RL model inherently makes predictive decisions by learning to anticipate market rewards and risks based on current states.",
      techCategory: "Data Science"
    },
    {
      title: "Prism - Integrated Personal Finance Dashboard",
      description: "A comprehensive dashboard that provides a 360-degree view of a user's financial life. It aggregates data from all accounts (banking, credit cards, investments, loans) and enriches it with real-time analysis.",
      financialDomains: ["Spending Management", "Investment", "Banking", "Credit/Debit"],
      technologies: ["Data Aggregation APIs (Plaid)", "Real-time Analytics Databases", "Data Visualization (D3.js)"],
      userFriendlyDesign: "Highly visual and intuitive, using charts, graphs, and personalized 'insights' cards to make complex financial data easy to understand and act upon.",
      predictiveAnalytics: "Forecasts future cash flow, predicts upcoming bills, and projects investment growth to help users make proactive financial decisions.",
      techCategory: "Data Analysis"
    },
    {
      title: "Flash - High-Frequency Trading (HFT) Data Analysis",
      description: "An analytics platform designed to process and analyze massive volumes of high-frequency trading data (Level 2/3 market data). It allows quantitative analysts to research market microstructure and back-test HFT strategies.",
      financialDomains: ["Trading", "Share Market/Trading"],
      technologies: ["High-Performance Computing", "Time-Series Databases (Kx)", "Real-time Visualization"],
      userFriendlyDesign: "Pre-built analytical tools and visualizations, such as order flow heatmaps and market impact models, that accelerate the research process.",
      predictiveAnalytics: "Identifies predictive patterns in the order book that precede micro-price movements, forming the basis for latency-sensitive trading algorithms.",
      techCategory: "Data Analysis"
    }
  ];

  const solutions: Solution[] = [
    {
      title: "Quantum Financial Advisor - The End-to-End AI Wealth Platform",
      description: "A unified platform for financial institutions that fully automates the wealth management lifecycle. It starts by using Data Analysis and Big Data tools to aggregate a client's full financial picture.",
      technologies: ["Generative AI", "Data Science", "Data Analysis", "Big Data", "Cloud Computing", "Business Analysis"]
    },
    {
      title: "Cognitive Core Banking - The Predictive, Self-Driving Bank",
      description: "A next-generation core banking system that re-imagines banking operations. It uses a Cloud Computing foundation for scalability and resilience.",
      technologies: ["Cloud Computing", "Big Data", "Data Analysis", "Data Science", "Generative AI", "Business Analysis"]
    }
  ];

  const trends = [
    "Generative AI will move from analysis to creation, designing novel trading algorithms that humans would not conceive of.",
    "The future of banking is a 'segment of one,' where every product and communication is dynamically tailored to the individual's real-time context.",
    "AI will automate over 80% of routine compliance tasks, shifting the focus of human compliance officers to strategic risk management.",
    "Cloud computing allows small fintechs to access the same scale and power as incumbent giants, accelerating the pace of innovation.",
    "The 'bionic advisor' who leverages AI for analysis and report generation will outperform traditional advisors by a significant margin."
  ];

  const allTechCategories = ['All', ...Array.from(new Set(projects.map(p => p.techCategory)))];
  const allFinancialDomains = ['All', ...Array.from(new Set(projects.flatMap(p => p.financialDomains)))];

  // Animated particles effect
  useEffect(() => {
    if (!particlesRef.current) return;

    const particles = Array.from({ length: 50 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-blue-400/30 rounded-full';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animation = 'float 10s infinite linear';
      return particle;
    });

    particles.forEach(particle => particlesRef.current?.appendChild(particle));

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  const filteredProjects = projects.filter(p => {
    const techMatch = activeTechFilter === 'All' || p.techCategory === activeTechFilter;
    const domainMatch = activeDomainFilter === 'All' || p.financialDomains.includes(activeDomainFilter);
    return techMatch && domainMatch;
  });

  const FilterButton = ({ 
    label, 
    isActive, 
    onClick 
  }: { 
    label: string; 
    isActive: boolean; 
    onClick: () => void; 
  }) => (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`
        transition-all duration-300 backdrop-blur-sm border-white/20
        ${isActive 
          ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25' 
          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
        }
      `}
    >
      {label}
    </Button>
  );

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const isExpanded = expandedCard === index;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <Card 
          className="
            backdrop-blur-xl bg-slate-800/50 border-white/10 hover:border-blue-500/50 
            transition-all duration-300 cursor-pointer overflow-hidden
            hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1
          "
          onClick={() => setExpandedCard(isExpanded ? null : index)}
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-white text-lg leading-tight group-hover:text-blue-300 transition-colors">
                {project.title}
              </CardTitle>
              <ChevronDown 
                className={`
                  w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-2
                  ${isExpanded ? 'rotate-180' : ''}
                `} 
              />
            </div>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit">
              {project.techCategory}
            </Badge>
          </CardHeader>
          
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <CardContent className="pt-0 space-y-4 text-sm">
              <p className="text-slate-300 leading-relaxed">{project.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Financial Domains:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.financialDomains.map(domain => (
                      <Badge key={domain} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Key Technologies:</h4>
                  <p className="text-slate-300">{project.technologies.join(', ')}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">User Experience:</h4>
                  <p className="text-slate-300">{project.userFriendlyDesign}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Predictive Analytics:</h4>
                  <p className="text-slate-300">{project.predictiveAnalytics}</p>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Animated background particles */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none" />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900 pointer-events-none" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionizing Finance
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            An interactive explorer for advanced project ideas and strategic insights in the financial technology sector.
          </p>
        </motion.header>

        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 border-b border-slate-700/50"
        >
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
            {[
              { id: 'explorer', label: 'Project Explorer', icon: Filter },
              { id: 'visualizations', label: 'Visualizations', icon: BarChart3 },
              { id: 'solutions', label: 'Integrated Solutions', icon: Zap },
              { id: 'trends', label: 'Future Trends', icon: TrendingUp }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`
                  flex items-center gap-2 font-medium py-3 px-4 border-b-2 transition-all duration-300
                  ${activeSection === id
                    ? 'text-white border-blue-500 bg-blue-500/10'
                    : 'text-slate-400 border-transparent hover:text-white hover:border-blue-500/50'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* Project Explorer Section */}
        {activeSection === 'explorer' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Project Explorer</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Discover innovative project ideas. Use the filters below to explore specific technologies or financial domains.
              </p>
            </div>

            {/* Filters */}
            <Card className="backdrop-blur-xl bg-slate-800/30 border-white/10 p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter by Technology Domain:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTechCategories.map(category => (
                      <FilterButton
                        key={category}
                        label={category}
                        isActive={activeTechFilter === category}
                        onClick={() => setActiveTechFilter(category)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-200 mb-3">Filter by Financial Domain:</h3>
                  <div className="flex flex-wrap gap-2">
                    {allFinancialDomains.map(domain => (
                      <FilterButton
                        key={domain}
                        label={domain}
                        isActive={activeDomainFilter === domain}
                        onClick={() => setActiveDomainFilter(domain)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="backdrop-blur-xl bg-slate-800/30 border-white/10 border rounded-xl p-8">
                    <p className="text-slate-500 text-lg">No projects match the selected filters.</p>
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Solutions Section */}
        {activeSection === 'solutions' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Integrated Multi-Technology Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Capstone projects demonstrating how multiple technologies unite to create powerful, end-to-end platforms.
              </p>
            </div>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="backdrop-blur-xl bg-slate-800/50 border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-300 leading-relaxed">{solution.description}</p>
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map(tech => (
                            <Badge key={tech} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Trends Section */}
        {activeSection === 'trends' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Future Trends & Insights</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Key trends and opportunities shaping the future of finance and technology innovation.
              </p>
            </div>

            <Card className="backdrop-blur-xl bg-slate-800/30 border-white/10 p-8">
              <div className="space-y-6">
                {trends.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-slate-700/30 border border-slate-600/30"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{trend}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>
        )}

        {/* Placeholder for Visualizations Section */}
        {activeSection === 'visualizations' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Data Visualizations</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Interactive charts and insights from the financial innovation landscape.
              </p>
            </div>
            
            <Card className="backdrop-blur-xl bg-slate-800/30 border-white/10 p-8">
              <div className="text-center py-16">
                <BarChart3 className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Advanced visualizations coming soon</p>
              </div>
            </Card>
          </motion.section>
        )}
      </div>
    </div>
  );
};