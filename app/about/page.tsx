
const About = () => {

  const card = [
    {
      id: "01",
      name: "Integrity",
      title: "A carefully curated collection chosen for design, performance and provenance.",

    }, {
      id: "02",
      name: "Craftsmanship",
      title: "Personal guidance from first conversation to the moment you take the wheel.",

    }, {
      id: "03",
      name: "People First",
      title: "A considered experience with clarity, care and attention to every detail.",

    },
  ]

  return (
    <>
      <section className="h-[600px] w-full bg-[url('/images/Generated.png')] bg-cover bg-center bg-no-repeat text-white px-20 ">

        <div className='pt-28 space-y-6'>
          <p className='text-[12px] text-[#C7A879]'>A DIFFERENT KIND OF AUTOMOTIVE HOUSE</p>
          <h1 className='text-6xl font-["Times_New_Roman"] tracking-[5px] pt-2'>DEFINED BY</h1>
          <h1 className='text-6xl font-["Times_New_Roman"] tracking-[5px] pt-2'>THE DRIVE.</h1>
          <p className='text-[16px] pt-3 tracking-wide'>We bring exceptional automobiles and exceptional people together.</p>
        </div>
      </section>
      <section className="bg-[#08090A] p-20">
        <div className='text-white px-25 p-15 bg-[#111315] flex justify-between items-center rounded-2xl'>
          <div className='w-100 space-y-4'>
            <p className='text-[#C7A879] text-[14px]'>OUR STORY</p>
            <h1 className='text-4xl font-["Times_New_Roman"] tracking-wide'>BUILT AROUND</h1>
            <h1 className='text-4xl font-["Times_New_Roman"] tracking-wide'>WHAT MOVES YOU.</h1>
            <p className='text-[12px] text-[gray]'>Velocity began with a simple belief: finding the right car should feel as special as driving it. Today, we bring together a carefully selected range of remarkable vehicles with a personal, thoughtful experience.</p>
            <p className='text-[#C7A879] text-[14px]'>Every detail matters. Every journey is personal.</p>
          </div>
          <div>
            <img src={'/images/image_4.png'} alt="" className='w-120' />
          </div>
        </div>
      </section>

      <section className="p-20 bg-[#08090A] text-white  flex gap-5">
        <div className="p-5 rounded-lg bg-[#191C1F] w-140">
          <p className="text-[#C7A879] text-sm">01 / OUR MISSION</p>
          <h1 className='text-2xl font-["Times_New_Roman"] pt-3 tracking-[4px]' >MAKE EVERY</h1>
          <h1 className='text-2xl font-["Times_New_Roman"] tracking-[4px]'>MILE MATTER.</h1>
          <p className="text-[14px] text-[gray] pt-3">To make the journey of discovering and owning an exceptional automobile feel effortless, informed and inspiring.</p>
        </div>
        <div className="p-5 rounded-lg bg-[#191C1F] w-140">
          <p className="text-[#C7A879] text-sm">02 / OUR VISION</p>
          <h1 className='text-2xl font-["Times_New_Roman"] pt-3 tracking-[4px]' >RAISE THE</h1>
          <h1 className='text-2xl font-["Times_New_Roman"] tracking-[4px]'>STANDARD.</h1>
          <p className="text-[14px] text-[gray] pt-3">To be the most trusted name in curated automotive experiences, known for integrity, taste and lasting relationships.</p>
        </div>
      </section>

      <section className='p-20 bg-[#08090A] text-white'>
        <p className='text-[#C7A879]' >WHAT GUIDES US</p> <br />
        <h1 className='text-4xl font-["Times_New_Roman"]'>THE VALUES BEHIND VELOCITY.</h1>
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
      <section className='flex justify-around items-center text-[gray] bg-[#111315] py-7 border-y-2 border-[#393B3D]'>
        <p className="flex flex-col">
          <span className='text-4xl font-["Times_New_Roman"] py-2 text-[#C7A879]'>
            12+
          </span>
          YEARS OF EXPERIENCE
        </p>
        <p className="flex flex-col">
          <span className='text-4xl font-["Times_New_Roman"] py-2 text-[#C7A879]'>
            500+
          </span>
          HAPPY CLIENTS
        </p>
        <p className="flex flex-col">
          <span className='text-4xl font-["Times_New_Roman"] py-2 text-[#C7A879]'>
            150+
          </span>
          VEHICLES CURATED
        </p>
        <p className="flex flex-col">
          <span className='text-4xl font-["Times_New_Roman"] py-2 text-[#C7A879]'>
            18
          </span>
          PREMIUM BRANDS
        </p>
      </section>
      <section className='flex justify-between px-20 py-15 text-white items-center bg-[#171513] border-y-2  border-[#2A2D2F]'>
        <div>
          <p className='text-[#C7A879] text-sm' >START A CONVERSATION</p> <br />
          <h1 className='text-4xl font-["Times_New_Roman"] tracking-[5px]'>Your next great drive begins here.</h1>

        </div>
        <button className='bg-[#C7A879] text-[12px] text-black px-3 py-4 rounded-md'>GET IN TOUCH</button>
      </section>
    </>
  )
}

export default About