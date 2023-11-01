import Link from 'next/link'

const HomePage = async () => {
  return (
    <div>
      <h1>Hello, my name is Darko.</h1>
      <p>I am a software engineer from Skopje, Macedonia.</p>
      <h2>Background</h2>
      <p>
        Previously, I was a graduate student in the{' '}
        <Link href="https://mscs.uic.edu/">
          Department of Mathematics, Statistics, and Computer Science
        </Link>{' '}
        at the{' '}
        <Link href="https://www.uic.edu">
          University of Illinois at Chicago
        </Link>
        , where I completed my PhD in December 2019.
      </p>
      I am interested in all aspects of software engineering, but I am
      especially passionate about applications driven by machine learning. You
      can check out some of my recent projects on my{' '}
      <Link href="/projects">portfolio page</Link> or my{' '}
      <Link href="https://github.com/dtrifuno">Github profile</Link>.
      <h2>Tools</h2>
      <p>
        I mostly code in <strong>Python</strong>, <strong>Rust</strong> and{' '}
        <strong>JavaScript/TypeScript</strong> with <strong>React</strong>.
      </p>
      <p>
        For machine learning and data science work, I am most familiar with{' '}
        <strong>scikit-learn</strong> and <strong>PyTorch</strong>, but I also
        have some experience with Bayesian methods with <strong>PyMC</strong>.
      </p>
      <h2>Opportunities</h2>
      <p>
        I am currently looking to transition to a full-time position (English
        language, remote or Europe-based). If you have a job opening for which
        you think I might be a good match, please feel free to{' '}
        <Link href="mailto:dtrifuno@gmail.com">email me</Link>.
      </p>
    </div>
  )
}

export default HomePage
