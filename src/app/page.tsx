import React from 'react'
import Gallery from '../app/components/gallery'
import { TourCardDetails } from './components/details/TourCardDetails'
import TourCard from './components/TourCard'


const page = () => {
  return (
    <div>page
      <Gallery/>
      <div>
      <div className='mx-[5%] p-4'>
        <div className="font-bold max-md:py-0 ">
          <h2 className=" text-5xl">
          Best Package For 2024
          </h2>
        </div>

        <div className="pt-10 grid grid-cols-2  lg:grid-cols-4  gap-2 lg:gap-6 lg:mx-[5%] max-md:py-5">
          {TourCardDetails.map((product: any) => {
            return (
              <div className="" key={product.id}>
                <TourCard data={product} />
              </div>
            );
          })}
        </div>

       
      </div>
      </div>
    </div>
  )
}

export default page