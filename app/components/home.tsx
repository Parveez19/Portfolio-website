import Head from 'next/head';
import Image from 'next/image';
import Hero from './Hero';
import ScrollSection from './ScrollSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Parveez | Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Parveez, a full-stack web developer skilled in React, Node.js, and Next.js." />
      </Head>

      <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Hero />

        <section className="text-center px-6 py-12">
          {/* Social Icons */}
          <ScrollSection className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Parveez19" target="_blank" rel="noopener noreferrer">
              <Image src="/github.png" alt="GitHub" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/parveez-ahmed" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="mailto:ahmedparveez090@gmail.com">
              <Image src="/email.webp" alt="Email" width={30} height={30} />
            </a>
          </ScrollSection>

         <ScrollSection className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
  <h2 className="text-xl font-semibold mb-2 text-indigo-300">What I Do</h2>
  <p className="text-gray-300">
    I design and build end-to-end applications, develop clean backend architectures, create robust REST APIs, and turn raw ideas into functional, scalable products.
My work ranges from building dashboards and automation tools to integrating frontend designs with fast, reliable backend systems.
  </p>
</ScrollSection>
        </section>
      </main>
    </>
  );
}
