
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, BarChart3, Database, FileText, Code, PieChart, Settings, TestTube } from "lucide-react";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Data Analyst", "Business Intelligence Expert", "Machine Learning Engineer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  const interests = [
    { icon: BarChart3, title: "Data Visualization", color: "text-yellow-500" },
    { icon: Database, title: "Data Modeling", color: "text-blue-500" },
    { icon: FileText, title: "Statistical Analysis", color: "text-pink-500" },
    { icon: Code, title: "Data Mining", color: "text-green-500" },
    { icon: TestTube, title: "A/B Testing", color: "text-red-500" },
    { icon: PieChart, title: "Business Intelligence", color: "text-cyan-500" },
    { icon: Settings, title: "Data Governance", color: "text-amber-500" },
  ];

  const skills = {
    "Programming & Databases": [
      "Python", "R", "C++", "Java", "SQL", "Oracle PL/SQL", "MongoDB", "XML"
    ],
    "Data Analysis & Machine Learning": [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"
    ],
    "Data Visualization & BI": [
      "Tableau", "Power BI", "Excel/VBA", "Matplotlib", "Seaborn"
    ],
    "Big Data & Cloud": [
      "Apache Spark", "Hadoop", "AWS S3/EC2", "Kafka"
    ],
    "DevOps & Tools": [
      "GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow"
    ]
  };

  const projects = [
    {
      title: "StockSage AI",
      description: "Predictive analytics platform for stock market forecasting",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "ARIMA/LSTM", "Tableau", "APIs", "VaR/Monte Carlo"],
      github: "https://github.com/manojkumartechie/StockSageAI"
    },
    {
      title: "BankGuard Analytics", 
      description: "Real-time fraud detection & customer analytics for banking",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Python", "SQL", "Scikit-learn", "Kafka", "Power BI", "ETL", "Churn/Segmentation"],
      github: "https://github.com/manojkumartechie/BankGuardAnalytics"
    },
    {
      title: "CreditScore Pro",
      description: "Credit risk assessment & loan default prediction model", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "AWS S3", "Airflow", "Risk Scoring"],
      github: "https://github.com/manojkumartechie/CreditScorePro"
    },
    {
      title: "PortfolioOptimizer AI",
      description: "Intelligent portfolio management platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "PyPortfolioOpt", "Apache Spark", "AWS EC2", "Tableau", "Markowitz", "Backtesting"],
      github: "https://github.com/manojkumartechie/PortfolioOptimizerAI"
    },
    {
      title: "FinRisk Monitor",
      description: "Real-time financial analytics & risk management dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Apache Spark", "Kafka", "MongoDB", "Python", "Scikit-learn", "TensorFlow", "Power BI"],
      github: "https://github.com/manojkumartechie/FinRiskMonitor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
            alt="Manoj Kumar K" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Manoj Kumar K
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">
            I'm a <span className="text-green-400 font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Resourceful and analytical Data Analyst with expertise in transforming complex data into actionable insights that drive business decisions.
          </p>
          <div className="flex justify-center space-x-6">
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="https://www.linkedin.com/in/manojkumartechie/" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="https://github.com/manojkumartechie" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing" target="_blank">
                <ExternalLink className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                alt="Manoj Kumar K" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Experienced in identifying and resolving complex data challenges, delivering actionable insights, and supporting data-driven decision-making. Strong communicator and collaborative team player with proven abilities in Problem Solving, Teamwork, Communication, Time Management, and Continuous Learning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span><strong>Birthday:</strong> 02 April 2004</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span><strong>Phone:</strong> +91 7826807488</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span><strong>City:</strong> Dindigul, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span><strong>Email:</strong> manojkumar9384@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <interest.icon className={`h-12 w-12 mx-auto mb-4 ${interest.color}`} />
                  <h3 className="font-semibold text-gray-900">{interest.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills</h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Project Experience</h2>
          <p className="text-center text-gray-600 mb-16">Self-Initiated Projects (2025 – Present)</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>manojkumar9384@outlook.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>+91 7826807488</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <ExternalLink className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                <CardTitle>Social Profiles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center space-x-4">
                  <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <a href="https://www.linkedin.com/in/manojkumartechie/" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <a href="https://github.com/manojkumartechie" target="_blank">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
