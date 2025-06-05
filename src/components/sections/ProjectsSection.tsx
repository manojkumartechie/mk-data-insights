
import { motion } from "framer-motion";
import { Project3DCard } from "@/components/Project3DCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "StockSage AI",
      description: "Developed a predictive stock analytics platform using Python, Pandas, Scikit-learn, and TensorFlow. Implemented ARIMA and LSTM models for time series forecasting with real-time data APIs and interactive Tableau dashboards for risk assessment.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "ARIMA/LSTM", "Tableau", "APIs", "VaR/Monte Carlo"],
      github: "https://github.com/manojkumartechie/StockSageAI"
    },
    {
      title: "BankGuard Analytics", 
      description: "Engineered a real-time fraud detection system using Python, SQL, and Scikit-learn. Designed ETL pipelines with Kafka for streaming data ingestion and created Power BI dashboards for transaction alerts and customer segmentation.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Python", "SQL", "Scikit-learn", "Kafka", "Power BI", "ETL", "Fraud Detection", "Customer Segmentation"],
      github: "https://github.com/manojkumartechie/BankGuardAnalytics"
    },
    {
      title: "CreditScore Pro",
      description: "Built a comprehensive credit risk model leveraging Python, Pandas, Scikit-learn, and XGBoost. Automated data pipelines with Airflow, stored data on AWS S3, and generated risk scores with regulatory compliance reports.", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "AWS S3", "Airflow", "Risk Scoring", "Compliance"],
      github: "https://github.com/manojkumartechie/CreditScorePro"
    },
    {
      title: "PortfolioOptimizer AI",
      description: "Designed an intelligent portfolio management tool using Python, PyPortfolioOpt, and Spark. Deployed on AWS EC2 for scalability with Markowitz optimization, portfolio rebalancing, backtesting, and Tableau visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "PyPortfolioOpt", "Apache Spark", "AWS EC2", "Tableau", "Markowitz", "Backtesting", "Portfolio Management"],
      github: "https://github.com/manojkumartechie/PortfolioOptimizerAI"
    },
    {
      title: "FinRisk Monitor",
      description: "Developed a comprehensive real-time financial analytics platform using Spark, Kafka, MongoDB, and Python. Enabled advanced anomaly detection, trend visualization, and automated risk alerts through interactive Power BI dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Apache Spark", "Kafka", "MongoDB", "Python", "Scikit-learn", "TensorFlow", "Power BI", "Anomaly Detection"],
      github: "https://github.com/manojkumartechie/FinRiskMonitor"
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      id="projects"
      className="py-12 sm:py-16 lg:py-20 mobile-padding bg-background/80 transition-colors duration-500 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced dynamic background with better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [0, 2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="mobile-heading font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Project Experience
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-8 sm:mb-12 lg:mb-16 mobile-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Data Analyst (Project-Based) • Self-Initiated Projects (2021 – Present)
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="w-full max-w-md h-full"
              variants={projectVariants}
              whileHover={{
                scale: 1.03,
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              <Project3DCard
                {...project}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
