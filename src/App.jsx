import { useEffect, useRef } from "react"
import banana from "./assets/banana.png"

export default function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let scrollPos = 0
    let speed = 1
    let animationId

    const animate = () => {
      scrollPos += speed
      el.scrollLeft = scrollPos

      if (scrollPos >= el.scrollWidth - el.clientWidth) {
        scrollPos = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">

      {/* Header */}
      <div className="p-3 bg-gray-800 rounded-xl">
        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-[5px]">

          <h1 className="text-xl font-bold">
            Title
          </h1>

          <div className="flex gap-2">
            <button className="bg-gray-900 px-3 py-2 rounded-[5px] font-bold transition-all duration-300 hover:scale-105">
              Button 1
            </button>

            <button className="bg-gray-900 px-3 py-2 rounded-[5px] font-bold transition-all duration-300 hover:scale-105">
              Button 2
            </button>
          </div>

        </div>
      </div>

      {/* Main Card */}
      <div className="bg-gray-800 p-6 rounded-2xl m-5 flex flex-col items-center">

        <h2 className="text-5xl font-bold">Carousel</h2>

        <p className="text-xl font-semibold text-gray-300">
          A spinning carousel
        </p>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden mt-6 w-full"
        >
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
          <img src={banana} className="w-72 h-48 object-cover rounded-xl flex-shrink-0" />
        </div>

      </div>

      <div className="bg-gray-800 p-6 rounded-2xl m-5 flex flex-col items-center">
        <h2 className="text-5xl font-bold">Static Image</h2>
        <p className="text-xl font-semibold text-gray-300">
          Or a static image
        </p>
        <img src={banana} className="w-72 object-cover rounded-xl"></img>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl m-5 flex flex-col items-center m-5">
        <h2 className="text-5xl font-bold mb-2">Or a hero</h2>
        <p className="text-1xl font-extrabold text-white text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate accusantium inventore quasi velit incidunt ab impedit minima alias, ex molestias. Modi ipsa enim vel sapiente explicabo rem. Necessitatibus, quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius odio doloribus saepe ea consectetur distinctio, ad possimus placeat dicta, incidunt voluptate accusantium sed repellat tempore culpa esse id. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium, cumque fuga ducimus, facilis mollitia sed sunt nulla soluta repudiandae qui, ab temporibus quo placeat nemo eius. Illum, eaque voluptate! (Customizable)</p>


        <div className="flex">
          <button className="bg-gray-900 font-bold rounded-[5px] p-2 m-3 hover:scale-105 cursor-pointer transition-all duration-300 active:scale-95">Button 1</button>
          <button className="bg-gray-900 font-bold rounded-[5px] p-2 m-3 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer">Button 2</button>
        </div>
      </div>



    </div>
  )
}
