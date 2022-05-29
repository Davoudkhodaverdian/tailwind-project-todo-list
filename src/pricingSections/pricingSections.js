
import './pricingSections.css';
import PricingCard from "./pricingCard/pricingCard"

function pricingSections() {
    return (

        <div className='container ' dir="rtl" >
            <div className='max-w-7xl mx-auto mt-16'>
                <div className=' rounded-lg  overflow-hidden '>
                    <div className=' p-4 bg-gray-900'>
                        <div className='text-center'> 
                            <p className="text-white text-3xl lg:text-5xl m-5">هیچ وقت تسلیم نشو</p>
                            <p className="text-white max-w-3xl mx-5 lg:mx-auto" >
                                خودباوری تأثیر به سزایی در رسیدن هرچه زودتر به موفقیت دارد.
                                چون این اعتماد و ایمان به
                                خود،فرد را وادار می‌کند که باورهای محدود کننده خودش را کنار بگذارد و کاری را که دوست دارد
                                انجام دهد. خودباوری در اصل حس اعتمادی را که قبلاً درباره آن صحبت کردیم را بالاتر از گذشته
                                می‌برد و باعث می‌شود که یک فرد نسبت به کالا یا محصولی که تولید می‌کند، ایمان داشته باشد.
                                یعنی اعتقاد دارد که این بهترین کاری است که تا با الآن ارائه داده و همین باور خیلی ساده
                                در خود، باعث می‌شود نتایج فروش شما به شدت تغییر کند. اکثر مردم دنبال تضمین هستند
                                و خودباوری داشتن عاملی است که باعث می‌شود ما بتوانیم آن کالا یا محصول خود را ضمانت کنیم.
                            </p>
                        </div>
                        <div className='lg:grid lg:grid-cols-7 my-8 space-y-10 lg:space-y-0'>
                            {
                                [{ id: 1, price: 200, time: "ماهانه", positionCard: "right" }, { id: 3, price: 500, time: "سه ماهه", positionCard: "middle" },
                                { id: 2, price: 300, time: "دو ماهه", positionCard: "left" }]
                                    .map(item => <PricingCard key={item.id} price={item.price} time={item.time} positionCard={item.positionCard} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default pricingSections;
