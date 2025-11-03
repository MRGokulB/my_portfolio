import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const { certifications } = portfolioData;

  const CertificationCard = ({ cert, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="h-full flex flex-col">
          {/* Certificate Logo */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-dark-300">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                {cert.title}
              </h3>
              <p className="text-accent-blue text-sm font-medium">{cert.issuer}</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-4 flex-1">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={16} />
              <span>Issued: {cert.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Award size={16} />
              <span className="text-xs">ID: {cert.credentialId}</span>
            </div>
          </div>

          {/* View Certificate Button */}
          <Button
            variant="secondary"
            size="sm"
            href={cert.url}
            target="_blank"
            icon={<ExternalLink size={16} />}
            className="w-full"
          >
            View Certificate
          </Button>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and completed courses
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {certifications.length}
                </div>
                <div className="text-gray-400 text-sm">Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400 text-sm">Learning Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-400 text-sm">Avg. Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  <Award className="inline" size={32} />
                </div>
                <div className="text-gray-400 text-sm">Top Performer</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Committed to continuous learning and professional development
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Certifications;