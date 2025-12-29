import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative py-32 bg-transparent">
      <div className="container-custom px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400">Professional credentials and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:border-accent-green/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-white p-2">
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white truncate">{cert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Award size={16} />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  href={cert.url}
                  target="_blank"
                  icon={<ExternalLink size={16} />}
                  className="w-full justify-center"
                >
                  View Credential
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;