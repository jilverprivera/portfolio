import Link from 'next/link'

export const SelfDescriptionSection = () => {
  return (
    <section className="max-w-screen-2xl w-11/12 mx-auto md:block lg:flex items-start justify-center gap-8 py-32 " id="experience">
      <div className="w-3/6 h-[100vh] bg-neutral-300 rounded-md"></div>
      <div className="w-3/6 sticky top-16 left-0 space-y-8 md:mb-8">
        <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-400 mb-12">A few words about me, who am I?</h2>
        <div className="text-2xl text-neutral-300 leading-snug space-y-4">
          <dd>I&apos;m a maker and software developer + electronics engineer, based in Bucaramanga, Colombia.</dd>
          <dd>
            I have a strong belief in the philosophy of constant learning and the ability to adapt to emerging technologies in order to keep
            progressing, because for me, the essence of life lies in creating and sharing ideas in a relaxed but impactful way.
          </dd>
          <dd>When I&apos;m not developing, I enjoy creating posts that talk about software development, productivity, or electronics (robotics).</dd>
        </div>
      </div>
    </section>
  )
}

