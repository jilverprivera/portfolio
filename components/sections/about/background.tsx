import React from 'react'

export const Background = () => {
  return (
    <section className="max-w-screen-xl w-11/12 py-32 mx-auto grid grid-cols-12 gap-16">
      <div className="col-span-2">
        <h1 className="uppercase text-secondary font-bold">Background</h1>
      </div>
      <div className="max-w-5xl text-2xl leading-relaxed space-y-4 col-span-10">
        <p>
          Currently I&apos;m Software engineer at{' '}
          <span className="font-bold">MarketXM</span> building B2B products with
          some awesome people.
        </p>

        <p>
          I graduated from the{' '}
          <span className="font-bold">
            Universidad de Investigación y Desarrollo
          </span>{' '}
          after completing 5 years studying Electronic Engineering which allowed
          me to participate and represent my university and my country in
          robotics competitions.
        </p>
        <p>
          As a software engineer, I always like to try to link engineering,
          design and long-term scalability. My goal is to always create
          applications that are efficient and at the same time deliver engaging
          and seamless user experiences.
        </p>
        <p>
          When I&apos;m not in front of a screen, I&apos;m probably exercising,
          reading a book, watching a series, walking my dogs or crossing another
          item off my bucket list.
        </p>
      </div>
    </section>
  )
}

