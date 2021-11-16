import React, { memo } from 'react'

const About: React.FC = memo(
  () => {
    return (
      <main className="main">
        <h1 className="py-6 text-4xl text-center">About</h1>
        <section className="text-xl px-10 md:px-32 lg:px-48">
          <section className="mb-4">
            <p className="leading-16 mb-2">
              Hi, I'm{' '}
              <a
                className="hover:text-gray-400 text-gray-600"
                href="https://ryota-murakami.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Ryota Murakami
              </a>
              . Tokyo, Japan, age30.
            </p>
            <p className="leading-16 mb-1">
              Here is just a my website of parsonal Github Organization.{' '}
            </p>
            <p className="leading-16 mb-1">
              There are two reasons why I personally own a Github Organization.
            </p>
          </section>
          <section className="mb-4">
            <p className="leading-16 mb-2">
              At first I was looking for some English words to use in the NPM
              scoped name, such as "@foo/mylib".
            </p>
            <p className="leading-16 mb-2">
              Secondly, I wanted to have a separate account for the cluttered
              fork repository, an extension of Helloworld that is trying
              something new, and a repository that is being developed as OSS
              with a clear concept.
            </p>
          </section>

          <p className="leading-16 mb-2">
            Code is fun, relationsip of OSS comunity is so much fun, one more
            thing, I'd like to put down some principle to make world more better.
          </p>

          <ul className="mt-8 list-disc space-y-4 pl-4">
            <li>
              It is one of the options to revolt against the ridiculous and
              absurd. Like a nightmare, like a disappointment in life.
            </li>
            <li>It is the hope that might have saved what I had lost.</li>
            <li>
              This is the only things I could absolutely crazy about it! 😈
            </li>
          </ul>
        </section>
      </main>
    )
  },
  () => true
)
About.displayName = 'About'

export default About
