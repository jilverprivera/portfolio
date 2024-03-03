import { EXPERIENCE } from 'utils/resources/experience'

export const Experience = () => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto">
      <div className="w-3/4 grid grid-cols-6 py-12">
        <div>
          <h1 className="font-light text-lg text-neutral-700">Experience</h1>
        </div>
        <div className=" text-lg leading-relaxed space-y-8 col-span-5">
          {EXPERIENCE.map((el, i) => (
            <div key={i} className='space-y-1'>
              <div className='flex items-center justify-start gap-2 font-medium'>
                <h3 className=''>{el.company}</h3>
                <span className='text-neutral-700'>{el.position}</span>
              </div>
              <span className='text-sm'>{ el.date}</span>
              <p>
                <a href={el.url} className='underline'>{el.company}</a> is {' '}
                {el.description}
              </p>

              {/* <ul className="flex flex-wrap gap-2">
                {el.projects &&
                  el?.projects
                    // .sort((a, b) => a.localeCompare(b))
                    .map((el, i) => (
                      <li key={i} className="text-sm">
                        {el.title}
                      </li>
                    ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
