import { Metadata } from 'next'
import React from 'react'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Projects',
  description: 'A list of open-source projects I have worked on recently.',
  openGraph: {
    title: 'Projects · Darko Trifunovski',
    url: '/projects/',
    description: "A list of Darko Trifunovski's recent open-source projects.",
  },
})

interface Project {
  title: string
  description: React.ReactNode
  url: string
}

const projects: Project[] = [
  {
    title: 'AyaPoker',
    description:
      'Rust library for fast poker hand evaluation with support for most popular poker variants.',
    url: 'https://github.com/dtrifuno/aya-poker',
  },
  {
    title: 'QuickPHF',
    description: (
      <>
        Rust implementation of{' '}
        <a href="https://arxiv.org/abs/2104.10402">
          PTHash minimal perfect hashing
        </a>
        . Used to generate static hash tables at compile time backed by perfect
        hash functions, which are smaller and faster than conventional hash
        tables. It is twice as fast at lookup, and more than 10 times as fast at
        constructing a perfect hash function compared to{' '}
        <a href="https://crates.io/crates/phf">phf</a>.
      </>
    ),
    url: 'https://github.com/dtrifuno/quickphf',
  },
  {
    title: 'QuickDiv',
    description: (
      <>
        Rust crate for faster division and modulo operations by a fixed divisor,
        by replacing division operations with an equivalent, but computationally
        cheaper, sequence of multiplications and bitshifts.
      </>
    ),
    url: 'https://github.com/dtrifuno/quickdiv',
  },
  {
    title: 'Ipsum',
    description: (
      <>
        Python library for generating placeholder text that resembles modern
        languages. It uses Markov chains trained on large corpora of texts to
        create output that is meaningless, but typographically resembles
        languages that designers might be targeting today.
      </>
    ),
    url: 'https://ipsum.trifunovski.me',
  },
  {
    title: 'Effect of Back-to-Back Games on NBA Player Performance',
    description: (
      <>
        The NBA season schedule requires teams to play a number of games on
        consecutive days. These games are controversial with some players
        pointing out that it is overly fatiguing and increases their risk of
        injury. The goal of this project is to use Bayesian data analysis
        methods to quantify the impact playing in a back-to-back game has on
        individual player performance.
      </>
    ),
    url: 'trifunovski.me/pdf/gsu2022.pdf',
  },
]

const ProjectsPage = (): React.ReactElement => {
  return (
    <>
      <h1>Projects</h1>
      <p>Here are some open source projects I have worked on recently:</p>
      <ul className="not-prose">
        {projects.map((project) => (
          <li key={project.url}>
            <h2 className="text-xl md:text-2xl mt-5 md:mt-8 mb-2 md:mb-3 font-semibold">
              <a href={project.url}>{project.title}</a>
            </h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProjectsPage
