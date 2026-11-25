import React from 'react'

const Home = () => {

  const cardCars = [
    {
      id: 1,
      img: '/images/image_1.png',
      paragraf: 'PORSCHE  /  SPORTS',
      titleL: '911 Carrera',
      price: "$145,000"
    }, {
      id: 2,
      img: '/images/image_2.png',
      paragraf: 'MERCEDES-BENZ  /  COUPE',
      titleL: 'AMG GT',
      price: "$180,000"
    }, {
      id: 3,
      img: '/images/image_3.png',
      paragraf: 'BMW  /  PERFORMANCE',
      titleL: 'M4 Competition',
      price: "$95,000"
    }
  ]

  const card = [
    {
      id: "01",
      name: "Exceptional Selection",
      title: "A carefully curated collection chosen for design, performance and provenance.",

    }, {
      id: "02",
      name: "Trusted Expertise ",
      title: "Personal guidance from first conversation to the moment you take the wheel.",

    }, {
      id: "03",
      name: "Seamless Ownership",
      title: "A considered experience with clarity, care and attention to every detail.",

    },
  ]

  return (
    <>
      <section className="h-[600px] w-full bg-[url('/images/image.png')] bg-cover bg-center bg-no-repeat flex text-white px-20 ">
        <div className='w-110 text-start pt-36'>
          <div className='space-y-5 '>
            <p className='text-[12px] text-[#C7A879]'>THE ART OF THE DRIVE  /  EST. 2014</p>
            <h1 className='text-6xl font-["Times_New_Roman"] tracking-[5px]'>BEYOND THE </h1>
            <h1 className='text-6xl font-["Times_New_Roman"] tracking-[5px]'>ORDINARY.</h1>
          </div>
          <div className='pt-8 w-100'>
            <p className='text-[gray]'>A considered collection of exceptional automobiles.
              Curated for those who appreciate the drive.</p>

            <div className='py-3 flex gap-3'>
              <button className='bg-[#C7A879] text-[12px] text-black px-3 py-4 rounded-md'>EXPLORE COLLECTION</button>
              <button className='border-2 rounded-md border-[#C7A879] px-3'>OUR STORY</button>
            </div>
            <p className='flex items-center text-[gray] text-[13px] gap-3 pt-3'>
              <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="1" fill="#C7A879" />
              </svg>
              DISCOVER A DIFFERENT CLASS OF AUTOMOTIVE</p>
          </div>
        </div>
      </section>
      <section className='flex justify-around items-center text-[gray] bg-[#111315] py-7 border-y-2 border-[#393B3D]'>
        <p>PORSCHE</p>
        <p>MERCEDES-BENZ</p>
        <p>BMW</p>
        <p>RANGE ROVER</p>
        <p>AUDI</p>
      </section>
      <section className='p-20 bg-[#08090A] text-white'>
        <div className='flex justify-between items-end'>
          <div>
            <p className='text-[13px] pb-3 text-[#C7A879]'>CURATED FOR YOU</p>
            <h1 className='font-["Times_New_Roman"] tracking-[3px] text-3xl'>THE COLLECTION</h1>
          </div>
          <div className='w-90 text-[gray]'>
            <p>Explore a hand-selected range of performance,
              luxury and design-led automobiles.</p>
          </div>
        </div>
        <div className='flex justify-between py-10'>
          {
            cardCars.map((el) => {
              return (
                <div key={el.id} className='rounded-lg overflow-hidden border-2 border-[#2A2D2F] pb-3 bg-[#111315]'>
                  <img src={el.img} alt="" className='w-85' />
                  <div className='px-5'>
                    <p className='text-[#C7A879] text-[12px] py-3 font-[500]'>{el.paragraf} <span className='text-[gray] text-[10px] font-[400]'> AVAILABLE NOW</span> </p>
                    <p className='font-["Times_New_Roman"] text-xl'>{el.titleL}</p>
                    <p className='text-[11px] text-[gray] py-2'>STARTING FROM</p>
                    <div className='flex gap-1'>
                      <h1 className='text-2xl font-bold'>$145,000</h1>
                      <p className='flex items-center text-[12px] gap-1'>
                        VIEW DETAILS
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.979987 7.74197L0.0559874 6.80397L5.64199 1.23197H-1.26362e-05V-3.09944e-05H7.20999L7.75599 0.545969V7.76997H6.52399V2.19797L0.979987 7.74197Z" fill="#C7A879" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='text-white px-25 p-20 bg-[#111315] flex justify-between items-center'>
        <div>
          <img src={'/images/image_4.png'} alt="" className='w-140' />
        </div>
        <div className='w-100 space-y-4'>
          <p className='text-[#C7A879] text-[14px]'>THE VELOCITY DIFFERENCE</p>
          <h1 className='text-5xl font-["Times_New_Roman"] tracking-wide'>MORE THAN</h1>
          <h1 className='text-5xl font-["Times_New_Roman"] tracking-wide'>A MOTOR CAR.</h1>
          <p className='text-[12px] text-[gray]'>We believe the right automobile is more than a way to travel. It is a reflection of character, craftsmanship and the moments that move you.</p>
          <button className='text-[12px] border-2 border-[#C7A879] rounded-lg px-3 py-3'>DISCOVER OUR STORY</button>
        </div>
      </section>
      <section className='p-20 bg-[#08090A] text-white'>
        <p className='text-[#C7A879]' >THE PROMISE</p> <br />
        <h1 className='text-4xl font-["Times_New_Roman"]'>A MORE PERSONAL WAY TO DRIVE.</h1>
        <div className='flex justify-between py-8 gap-5'>
          {
            card.map((el) => {
              return (
                <div key={el.id} className='rounded-lg bg-[#111315] p-4 space-y-4'>
                  <p className='text-[#C7A879]'>{el.id}</p>
                  <h1 className='font-["Times_New_Roman"] text-2xl'>{el.name}</h1>
                  <p className='text-[15px] text-[gray]'>{el.title}</p>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='flex justify-between px-20 py-15 text-white items-center bg-[#171513] border-y-2  border-[#2A2D2F]'>
        <div>
          <p className='text-[#C7A879] text-sm' >YOUR NEXT CHAPTER STARTS HERE</p> <br />
          <h1 className='text-4xl font-["Times_New_Roman"] tracking-[5px]'>FIND YOUR DRIVE.</h1>

        </div>
        <button className='bg-[#C7A879] text-[12px] text-black px-3 py-4 rounded-md'>VIEW THE COLLECTION</button>
      </section>
    </>
  )
}

export default Home