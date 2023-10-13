export type ImdxObjectives = {
  description: string
  objectives: IObjectiveProps[]
}
type IObjectiveProps = {
  number: string
  description: string
  section: string
}

export type routesNavigationProps = {
  routes: routeProps[]
}

type routeProps = {
  name: string
  section: string
}

