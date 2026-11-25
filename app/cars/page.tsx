const Cars = () => {

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
    }, {
      id: 4,
      img: '/images/image_1.png',
      paragraf: 'PORSCHE  /  SPORTS',
      titleL: '911 Carrera',
      price: "$145,000"
    }, {
      id: 5,
      img: '/images/image_2.png',
      paragraf: 'MERCEDES-BENZ  /  COUPE',
      titleL: 'AMG GT',
      price: "$180,000"
    }, {
      id: 6,
      img: '/images/image_3.png',
      paragraf: 'BMW  /  PERFORMANCE',
      titleL: 'M4 Competition',
      price: "$95,000"
    }
  ]


  return (
    <>
      <section className="h-[400px] w-full bg-[url('/images/Generated.png')] bg-cover bg-center bg-no-repeat text-white px-20 ">

        <div className='pt-28'>
          <p className='text-[12px] text-[#C7A879]'>THE VELOCITY EDIT</p>
          <h1 className='text-6xl font-["Times_New_Roman"] tracking-[5px] pt-2'>OUR COLLECTION. </h1>
          <p className='text-[16px] pt-3 tracking-wide'>Distinctive automobiles. Considered in every detail.</p>
        </div>
      </section>
      <section className='p-20 bg-[#08090A] text-white'>
        <div>
          <p className='text-[13px] pb-3 text-[#C7A879] tracking-wide'>CURATED FOR YOU</p>
          <h1 className='font-["Times_New_Roman"] tracking-[3px] text-5xl'>THE COLLECTION</h1>
        </div>
        <div>
          <div className='py-5 flex gap-6'>
            <button className='bg-[#C7A879] text-[12px] text-black px-3 py-5 rounded-md'>ALL VEHICLES</button>
            <button className='border-2 rounded-md border-[#2A2D2F] px-3 text-[gray] bg-[#111315]'>SPORTS</button>
            <button className='border-2 rounded-md border-[#2A2D2F] px-3 text-[gray] bg-[#111315]'> SUV </button>
            <button className='border-2 rounded-md border-[#2A2D2F] px-3 text-[gray] bg-[#111315]'>SEDAN</button>
            <button className='border-2 rounded-md border-[#2A2D2F] px-3 text-[gray] bg-[#111315]'>ELECTRIC</button>
          </div>
        </div>

        <div className='flex justify-between py-10 flex-wrap gap-6'>
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
      <section className='flex justify-between px-20 py-15 text-white items-center bg-[#171513] border-y-2  border-[#2A2D2F]'>
        <div>
          <p className='text-[#C7A879] text-sm' >A PERSONAL APPROACH</p> <br />
          <h1 className='text-4xl font-["Times_New_Roman"] tracking-[5px]'>Looking for something exceptional?</h1>

        </div>
        <button className='border-[#C7A879] border-2 text-[12px] px-3 py-4 rounded-md'>VIEW THE COLLECTION</button>
      </section>
    </>
  )
}

export default Cars