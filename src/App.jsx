import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const projects = [
  { title: 'E-commerce App', description: 'Tienda online completa con React y Node.js', tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Task Manager', description: 'Aplicación de gestión de tareas en tiempo real', tags: ['Vue.js', 'Firebase', 'Tailwind'] },
  { title: 'Portfolio Dashboard', description: 'Panel de administración con analytics', tags: ['Next.js', 'TypeScript', 'Prisma'] },
];

const skills = [
  { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'] },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold gradient-text">Portfolio</span>
          <div className="flex gap-6">
            {['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-400 transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section id="sobre-mí" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="gradient-text">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Desarrollador Full Stack apasionado por crear experiencias digitales únicas
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="proyectos" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  Ver proyecto <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="min-h-screen py-20 px-6 flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¿Quieres <span className="gradient-text">contactarme</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones
          </p>
          <a
            href="mailto:tu@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Envíame un correo
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t border-white/10">
        <p>© 2024 Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;