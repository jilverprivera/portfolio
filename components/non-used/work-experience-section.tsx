import experience from 'utils/json/experience.json'

export const WorkExperienceSection = () => {
  return (
    <section className="max-w-screen-2xl w-11/12 mx-auto md:block lg:flex items-start justify-between gap-8" id="experience">
      <div className="md:relative lg:sticky top-16 left-0 space-y-4 md:mb-8">
        <span className="text-neutral-400">Experience</span>
        <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-neutral-300 mb-12">+2 years of experience</h2>
      </div>
      <div className="md:w-full lg:w-3/5">
        {experience.map((experience, index) => (
          <div key={index} className="w-full grid md:grid-cols-1 lg:grid-cols-5 md:gap-4 lg:gap-8 border-b last:border-b-0 border-neutral-600 py-8">
            <h4 className="text-base w-full text-neutral-400">{experience.date}</h4>
            <div className="md:col-span-1 lg:col-span-4 space-y-4">
              <p className="text-2xl mb-4">
                <span className="font-semibold text-xl text-neutral-200">{experience.company}</span> /
                <span className="ml-1 text-lg text-neutral-400">{experience.role}</span>
              </p>
              <div className="space-y-2">
                {experience.activities.map((activity, i) => (
                  <p key={i} className="text-base text-neutral-400 before:content-['-'] before:mr-1">
                    {activity}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 w-full">
                {experience.technologies
                  .sort((a, b) => a.localeCompare(b))
                  .map((tech, i) => (
                    <span key={i} className="px-2 py-2 border border-neutral-50/10 rounded-md text-sm bg-white/5 backdrop-blur-3xl text-neutral-400">
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

