

import PropertyPricingCard from '../propertyPricingCard/propertyPricingCard';

function pricingCard({ price, time, positionCard }) {

    return (
        <div className={
            `px-4 bg-white  relative ${positionCard === "middle" ?
                "col-span-3" : "col-span-2"} ${positionCard === "middle" ? "row-start-1" : "row-start-2"}
                  ${positionCard === "middle" ? "row-end-4" : "row-end-3"} 
                  ${positionCard === "middle" ?
                "rounded-lg" : positionCard === "left" ? "rounded-lg lg:rounded-r-none" : "rounded-lg lg:rounded-l-none"}
                  ${positionCard === "middle" ? "ring-2 ring-indigo-500 z-10" : ""} `
        } >

            {
                positionCard === "middle" ?
                    <div className='flex justify-center '>
                        <span className='rounded-full bg-indigo-400 px-4 text-white absolute -top-3'>
                            محبوب ترین
                        </span>

                    </div> : null
            }

            <div className="flex items-center justify-center flex-col py-5 space-y-5 border-b-2 border-gray-100">
                <span className="text-lg">
                    پلن شروع
                </span>
                <div className="flex items-center">
                    <span className="lg:text-4xl text-2xl font-bold ml-2">{price}</span>
                    <span className="ml-2 lg:text-2xl text-xl">هزار تومان</span>
                    <span className="text-gray-500 lg:text-2xl text-xl">/ {time}</span>
                </div>
            </div >
            <div className="bg-gray-50 rounded-b-lg">
                <ul className="space-y-3  p-5">
                    {
                        positionCard === "middle" ? [{}, {}, {}, {}, {}].map((item, index) => <PropertyPricingCard key={index} />)
                            : [{}, {}, {}].map((item, index) => <PropertyPricingCard key={index} />)
                    }

                </ul>
                <div className="flex justify-center">
                    <a href="#" className="m-5 w-full p-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 transition-all">خرید پلن</a>
                </div>

            </div>
        </div>

    );
}

export default pricingCard;
