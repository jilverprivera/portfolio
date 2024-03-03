import { EXPERIENCE } from 'utils/resources/experience'

export const Experience = () => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto">
      <div className="w-3/4 grid grid-cols-6 py-12">
        <div>
          <h1 className="font-light text-lg text-neutral-700">Experience</h1>
        </div>
        <div className=" text-lg leading-relaxed space-y-12 col-span-5">
          {EXPERIENCE.map((el, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-start gap-2 font-medium">
                <h3 className="">{el.company}</h3>
                <span className="text-neutral-700">{el.position}</span>
              </div>
              <span className="text-sm">{el.date}</span>
              <p>
                {el.url ? (
                  <a
                    href={el.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    {el.company}
                  </a>
                ) : (
                  el.company
                )}{' '}
                {el.description}
              </p>

              <ul className="flex flex-wrap items-center justify-start gap-x-4 gap-y-1">
                <p>Keywords: </p>
                {el.stack
                  .sort((a, b) => a.localeCompare(b))
                  .map((stack, i) => (
                    <ul key={i} className="text-base">
                      {stack}
                    </ul>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

