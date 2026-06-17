import { useEffect, useRef } from "react"
import banana from "./assets/banana.png"

export default function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let scrollPos = 0
    let speed = 0.6
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
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Header */}
      <div className="p-3 bg-gray-800">
        <h1 className="text-xl font-bold bg-gray-700 p-3 rounded-[5px]">
          Title
        </h1>
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



    </div>
  )
}
