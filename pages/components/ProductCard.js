import Image from "next/image";
import Link from "next/link";


const ProductCard = ({name, route, image, earning, banner})=>{
    return(
      <>

        <section onClick={()=>{location.assign(route)}} class="rounded-3xl shadow">
              
                 
                    <div class="lg:order-first">
                      <div class="flex flex-col">
                        <div class="p-8 rounded-3xl backdrop-blur-3xl bg-black/5 ring-1 ring-white/10">
                          <div class="flex justify-between">
                            <div class="flex items-center gap-3">
                            {image && (
                              <Image
                                  src={image}
                                  width={45}
                                  height={45}
                                  alt="Image"
                                  className="rounded-xl"
                              />
                            )}
                              {/* <p class="font-semibold">
                                {name}
                              </p> */}
                            </div>
                            <p>
                              <span class="text-sm font-medium border text bg-white text-neutral-800 rounded-full px-2 py-0.5">
                              🦄 Visit App</span>
                            </p>
                          </div>
                          <p className="font-normal text-sm pt-4">
                                {name}
                              </p>
                          <div className="mt-2">
                          <span className="text-xs border px-2 py-1 rounded-full bg-white text-neutral-800 text-left font-medium">
                          Making ~ {earning}
                          </span>
                          </div>
                          <img
                            className="rounded-xl mt-12"
                            src={banner}
                          />
                          
                        </div>
                      </div>
                    </div>
              </section>
      </>
    )
}
export default ProductCard;