interface Props {
  id: string
  title: string
  description: string
  request: Request[]
}

interface Request {
  title: string
  method: string[]
  requirements: string[]
  url: string
  resolve: string
}

export const RoutesAPI = ({ id, description, request, title }: Props) => {
  return (
    <section
      id={id}
      className="max-w-6xl mx-auto xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-12 text-zinc-900 py-12"
    >
      <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
        <h2 className="text-5xl -tracking-wide font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
        <p className="mt-6 leading-7 text-zinc-900 dark:text-zinc-100">{description}</p>
      </div>
      <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3">
        {request.map((item, i) => (
          <div key={i} className="my-4 first:mt-0 last:mb-0">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
            <div className="w-full grid grid-cols-5 my-2">
              <div className="flex items-center justify-start text-sm">
                <span className="text-zinc-900 dark:text-zinc-100">Method:</span>
              </div>
              <div className="flex col-span-4">
                {item.method.map((method, i) => (
                  <span
                    key={i}
                    className="first:ml-0 mx-1 last:mr-0 py-1 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full grid grid-cols-5 my-2 text-sm">
              <div className="flex items-start justify-start">
                <span className="text-zinc-900 dark:text-zinc-100">Requisites:</span>
              </div>
              <div className="flex col-span-4">
                <ul className="flex flex-col">
                  {item.requirements.map((requirement, i) => (
                    <li className="list-decimal list-inside  text-zinc-900 dark:text-zinc-100" key={i}>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full grid grid-cols-5 my-2 text-sm">
              <div className="flex items-center justify-start">
                <span className=" text-zinc-900 dark:text-zinc-100">Query URL:</span>
              </div>
              <div className="flex col-span-4">
                <p className="text-sm w-full border-2 border-zinc-200 dark:border-zinc-700 py-1.5 px-3 rounded-md bg-zinc-100 dark:bg-zinc-800  text-zinc-900 dark:text-zinc-100">
                  {item.url}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-5 my-2 text-sm">
              <div className="flex items-start justify-start">
                <span className=" text-zinc-900 dark:text-zinc-100">Resolve:</span>
              </div>
              <div className="flex col-span-4">
                <p className="flex flex-col  text-zinc-900 dark:text-zinc-100">{item.resolve}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

