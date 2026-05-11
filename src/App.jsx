import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ExternalLink, Skateboard, Code, Gamepad2, GraduationCap, Award, Send, Heart, Sparkles, Zap, Target } from 'lucide-react';

const projects = [
  { 
    title: 'Gestor de Tareas', 
    description: 'Aplicación web para organizar y gestionar tareas diarias con interfaz intuitiva.', 
    tags: ['HTML', 'CSS', 'JavaScript'], 
    icon: <Target size={48} />,
    color: 'from-emerald-500/20 to-teal-500/20',
    link: '#'
  },
  { 
    title: 'Calculadora IMC', 
    description: 'Herramienta para calcular el índice de masa corporal con diseño moderno.', 
    tags: ['React', 'Tailwind'], 
    icon: <Zap size={48} />,
    color: 'from-amber-500/20 to-orange-500/20',
    link: '#'
  },
  { 
    title: 'API de Usuarios', 
    description: 'Backend básico con operaciones CRUD para gestión de usuarios.', 
    tags: ['Node.js', 'Express', 'MongoDB'], 
    icon: <Code size={48} />,
    color: 'from-violet-500/20 to-purple-500/20',
    link: '#'
  },
  { 
    title: 'Portfolio Personal', 
    description: 'Este mismo portfolio que estás viendo. Diseñado desde cero con React y Tailwind.', 
    tags: ['React', 'Tailwind', 'Vite'], 
    icon: <Sparkles size={48} />,
    color: 'from-pink-500/20 to-rose-500/20',
    link: '#'
  },
];

const skills = {
  languages: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  frameworks: ['React', 'Tailwind CSS', 'Vite', 'Next.js'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker'],
};

const education = [
  { 
    title: 'CFGS Desarrollo de Aplicaciones Web', 
    institution: 'Instituto Los Boscos',
    year: '2024 - En curso',
    status: 'Estudiando actualmente'
  },
  { 
    title: 'Certificación de JavaScript', 
    institution: 'freeCodeCamp',
    year: '2024',
    status: 'Completada'
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            className="text-xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Oscar Ubiera
          </motion.span>
          <div className="flex gap-6">
            {['Sobre mí', 'Proyectos', 'Habilidades', 'Educación', 'Contacto'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace('í', 'i').replace(' ', '-')}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-400 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="w-40 h-40 mx-auto mb-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-indigo-500/30"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Skateboard size={64} className="text-indigo-400" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hola, soy{' '}
            <span className="gradient-text">Oscar Ubiera</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Desarrollador Web en formación < GraduationCap className="inline-block ml-2" size={24} />
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm flex items-center gap-2">
              <Skateboard size={16} /> Amante del Skate
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center gap-2">
              <Code size={16} /> Apasionado por el código
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm flex items-center gap-2">
              <Gamepad2 size={16} /> Gamer en mis ratos libres
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Estudiando en Los Boscos, aprendiendo cada día nuevas tecnologías 
            para cumplir mi objetivo: dedicarme profesionalmente a la programación. 
            Cuando no estoy programando, probablemente me encuentres en una rampa de skate 🛹
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:oscar.ubiera@email.com" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-gray-500 text-sm mb-4">Tecnologías que manejo</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js'].map((tech, i) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="proyectos" className="min-h-screen py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-gray-400 text-lg">Proyectos que he creado mientras aprendo</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/10 group"
              >
                <div className={`h-56 bg-gradient-to-br ${project.color} rounded-2xl mb-6 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/link"
                >
                  Ver proyecto 
                  <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="min-h-screen py-24 px-6 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-gray-400 text-lg">Tecnologías y herramientas que domino</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lenguajes', icon: <Code size={32} />, items: skills.languages },
              { title: 'Frameworks', icon: <Sparkles size={32} />, items: skills.frameworks },
              { title: 'Backend', icon: <Zap size={32} />, items: skills.backend },
              { title: 'Herramientas', icon: <Gamepad2 size={32} />, items: skills.tools },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="educacion" className="min-h-screen py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Educación</span> y Certificaciones
            </h2>
            <p className="text-gray-400 text-lg">Mi camino de aprendizaje</p>
          </motion.div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full" />
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-indigo-500/20 rounded-xl">
                    <GraduationCap size={32} className="text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                    <p className="text-indigo-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30">
              <Award className="text-indigo-400" size={24} />
              <span className="text-lg">Siempre aprendiendo algo nuevo</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="min-h-screen py-24 px-6 flex items-center bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quieres <span className="gradient-text">contactarme</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades, colaboraciones o simplemente charlar sobre tecnología y skate 🛹
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:oscar.ubiera@email.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
              >
                <Send size={20} />
                Envíame un correo
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:oscar.ubiera@email.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/10 bg-black/30">
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-4">
          <span>Hecho con</span>
          <Heart size={16} className="text-red-500 fill-current" />
          <span>y mucho café ☕</span>
        </div>
        <p className="text-gray-600 text-sm">
          © 2024 Oscar Ubiera. Todos los derechos reservados.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Skateboard size={20} className="text-indigo-500" />
          <span className="text-gray-500 text-sm">Estudiando y shredding</span>
        </div>
      </footer>
    </div>
  );
}

export default App;