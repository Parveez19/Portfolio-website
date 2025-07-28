// pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import ScrollSection from '../components/ScrollSection';

export default function About() {
  return (
    <>
    <ScrollSection>
      <Head>
        <title>About Me | Parveez</title>
        <meta name="description" content="About Parveez - Full-Stack Developer skilled in Next.js, React, and Node.js." />
      </Head>

      <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 text-white">
        <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <Image
              src="/parveez-profile.jpg" 
              alt="Parveez"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-black">About Me</h1>
            <p className="text-gray-400 mb-4">
              Hi! I'm <span className="text-indigo-400 font-semibold">Parveez</span>, a passionate Full-Stack Web Developer based in Bangalore. I enjoy building responsive, scalable web applications using modern technologies.
            </p>
            <p className="text-gray-500 mb-4">
              I specialize in JavaScript, React, Next.js, Node.js, and MongoDB. I also have experience working with Express.js, REST APIs, and MySQL. I love solving real-world problems and turning ideas into elegant, user-friendly digital solutions.
            </p>
            <p className="text-gray-500">
             I enjoy working on side projects like <strong>Prestige Dream Decor</strong>, a web platform I designed and built for an interior design company.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Next.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'MySQL',
              'Tailwind CSS',
              'Git/GitHub',
              'REST APIs',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
      </ScrollSection>
    </>
  );
}
