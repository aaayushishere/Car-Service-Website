import { MdOutlineStarPurple500 } from "react-icons/md"
import { RiStarHalfLine } from "react-icons/ri"

const items = [
    {
      name: "Sophia Martinez",
      title: "Lead designer, Avalon",
      image:
        "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
      body: "The whole idea of getting your car washed at your own convenient location is awesome. Not only do they use fantastic products, they wear a smile on their face the entire time your car is being washed, detailed, dried, and taken care of. I had my wheels polished with tire shine and the interior vacuuming was a bonus I didn't expect! The washers look after your vehicle as if it's heir own. All the best.",
    },
    {
      name: "Caroline Lee",
      title: "Senior Graphic Designer, Echo",
      image:
        "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
      body: "Auto Aid is truly amazing, especially for first-time users. My car was stuck in the mud for almost two days. Then, a friend of mine referred me to this app. Sreejith, the consulting manager, followed up to understand the situation and ensured there was a mechanic within a 10 km radius to come and help. I recommend all KL people to try it.",
    },
    {
      name: "Tyler Otwell",
      title: "Car Owner",
      image:
        "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
      body: "This Website is very useful. You can find repair technicians nearby and book appointments easily. I requested a scooter repair and the mechanic came to my home to provide service. This innovative app is very helpful. They also provide roadside breakdown support.",
    },
    {
      name: "Jake Harris",
      title: "Thompson Creative",
      image:
        "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
      body: "When I approached Auto Aid, their staff swiftly linked me to a nearby workshop. I would like to express my contentment with the ultimate result and extend my sincere gratitude to Auto Aid for their unwavering support throughout the entirety of the process. I highly recommend them.",
    },
    
    
  ]
  
  export default function Page() {
    return (
      <div className="relative flex h-[70vh] mt-20  items-center">
        <div className="relative flex max-w-[200vw] overflow-x-hidden py-5">
          <div className="flex w-max animate-marquee [--duration:infinite] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-[350px] rounded-xl o flex mr-20 w-[500px] bg-[#E1CD8C]  ">
                <div className="left bg-[#215277] rounded-l-xl h-[100%] relative w-[30%] " />
                    <img
                      src={item.image}
                      className="h-[100px] absolute rounded-full ml-24 border-4 border-white mt-3 w-[100px] "
                    />
                   <div className="right">

                   <h1 className="text-[#215277] text-xl font-medium mt-10 ml-24">
                      {item.name}
                    </h1>
                    <h1 className="flex gap-1 px-24">
                    <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><RiStarHalfLine />
                    </h1>
                    <h1 className=" text-sm font-semibold mt-1 ml-24">
                      Car Owner
                    </h1>
                    <p className="text-[15px] font-medium  text-gray-500 mt-2 w-[300px] ml-10">
 {item.body}
                    </p>
                   </div>
  

                
                
              </div>
            ))}
            
          </div>
        </div>
      </div>
    )
  }
  