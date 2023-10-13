import { Link } from 'react-scroll'
import { ImdxObjectives } from 'interfaces'

export const MDXObjectivesCOmponent = ({ description, objectives }: ImdxObjectives) => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto grid grid-cols-4 gap-8 py-16 text-neutral-300">
      <dl className="space-y-4">
        <h3 className="uppercase text-4xl font-semibold">Challenges</h3>
        <dd className="text-xl">{description}</dd>
      </dl>
      {objectives.map((_, index) => (
        <dl key={index} className="bg-neutral-800 rounded-md">
          <Link className="hover:cursor-pointer" to={_.section} spy={true} smooth={true} offset={0} duration={1000}>
            <div className="flex flex-col items-center justify-center px-4 py-12 space-y-8">
              <dd className="w-full text-right text-3xl font-bold">{_.number}</dd>
              <dd className="text-xl">{_.description}</dd>
            </div>
          </Link>
        </dl>
      ))}
    </div>
  )
}

