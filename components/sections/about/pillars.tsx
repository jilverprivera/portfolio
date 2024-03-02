import React from 'react'

export const Pillars = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto grid grid-cols-12 gap-16 py-32">
      <div className="col-span-2">
        <h1 className="uppercase text-secondary font-bold">Pillars</h1>
      </div>
      <div className="w-full col-span-10 grid grid-cols-4 gap-4">
        <div className="w-full aspect-square border border-black"></div>
        <div className="w-full aspect-square border border-black"></div>
        <div className="w-full aspect-square border border-black"></div>
        <div className="w-full aspect-square border col-start-2 row-start-2 border-black"></div>
        <div className="w-full aspect-square border col-start-3 row-start-2 border-black"></div>
        <div className="w-full aspect-square border col-start-4 row-start-2 border-black"></div>
      </div>
    </div>
  )
}

