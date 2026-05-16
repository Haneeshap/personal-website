import React from 'react'
import { 
  Brain, Database, Cloud, Code, Shield, Cpu, 
  Mail, Linkedin, Github, ChevronRight,
  Sparkles, Target, Briefcase, GraduationCap
} from 'lucide-react'

function App() {
  const skills = {
    ai_llm: {
      icon: Brain,
      title: 'AI / LLM Engineering',
      items: ['LangChain', 'RAG', 'OpenAI API', 'Anthropic API', 'LlamaIndex', 'Prompt Engineering', 'FastAPI']
    },
    data: {
      icon: Database,
      title: 'Data Engineering',
      items: ['Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Spark', 'Kafka', 'SQL', 'Delta Lake']
    },
    ml: {
      icon: Cpu,
      title: 'Machine Learning',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'MLflow', 'SageMaker', 'Vertex AI']
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      items: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'CI/CD', 'ArgoCD', 'Helm']
    },
    backend: {
      icon: Code,
      title: 'Backend Engineering',
      items: ['FastAPI', 'Python', 'SQLAlchemy', 'REST APIs', 'OAuth/JWT', 'React']
    },
    security: {
      icon: Shield,
      title: 'AI Security',
      items: ['AI Guardrails', 'Adversarial ML', 'OWASP LLM', 'Red Teaming']
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gradient">HP</span>
          <div className="flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-primary-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span className="text-primary-600 font-medium">AI/LLM Engineer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Haneesha P</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Building the future with AI, data engineering, and cloud infrastructure. 
              Combining deep technical expertise with business acumen from my MBA track.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm an AI/LLM Engineer with a comprehensive skill set spanning data engineering, 
                machine learning, cloud infrastructure, and backend development. What sets me apart 
                is my unique combination of deep technical expertise with business acumen from my MBA track.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I specialize in building LLM-powered applications, designing data pipelines, and deploying 
                ML systems at scale. My background enables me to bridge the gap between technical implementation 
                and business strategy, making me uniquely qualified for roles like AI Solutions Consultant 
                and Technical Product Manager.
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>MBA Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>Results-Driven</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-green-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary-600" />
                Career Focus
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span className="text-gray-700">AI/LLM-powered product development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span className="text-gray-700">Enterprise data pipeline architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span className="text-gray-700">ML system deployment and MLOps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span className="text-gray-700">AI strategy and solutions consulting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive skill set across AI, data, cloud, and backend engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, { icon: Icon, title, items }]) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm open to opportunities in AI/LLM engineering, data engineering, and related roles. 
            Let's discuss how I can contribute to your team.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:contact@haneesha.com" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com/in/haneesha" target="_blank" rel="noopener noreferrer" className="bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/haneesha" target="_blank" rel="noopener noreferrer" className="bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Haneesha P. Built with React, TailwindCSS, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
