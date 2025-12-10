import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Prestige Dream Decor',
    description: 'A furniture and interior design portfolio website with admin product management.',
    image: '/pdd.jpeg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://www.prestigedreamdecor.in',
    githubUrl: 'https://github.com/ddprestige/backend-pdd/',
  },
  {
    title: 'Dev Hire',
    description: 'A complete job posting and application portal built for final year project.',
    image: '/jobportal.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://devhire-portal.vercel.app/',
    githubUrl: 'https://github.com/Parveez19/Job-portal',
  },
  
   {
    title: 'Customer Churn Prediction using Machine Learning',
    description: 'A machine learning model that predicts whether a customer is likely to leave a service based on their usage patterns and account details. The project includes data cleaning, feature engineering, training an XGBoost model, and deploying a simple Streamlit app that allows users to input customer details and get an instant churn risk prediction. ',
    image: '/churn.jpg',
    technologies: ['Python', 'XGBoost', 'SHAP', 'Streamlit'],
    liveUrl: 'https://customer-churn-prediction-3.streamlit.app/',
    githubUrl: 'https://github.com/Parveez19/Customer-Churn-Prediction',
  },
  {
    title: 'Distracted Driver Alert System',
    description: 'Final year deep learning project that detects distracted driving behavior using a ResNet-50 model. Trained on a labeled image dataset to classify actions such as texting, talking, or hands off the wheel.',
    image: '/distracted.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'ResNet-50'],
    liveUrl: '',
    githubUrl: 'https://github.com/Parveez19/',
  },
 

  
];

export default function ProjectsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </section>
  );
}
