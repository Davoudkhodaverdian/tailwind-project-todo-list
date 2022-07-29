import NextTasksImage from './../../images/undraw_next_tasks_re_5eyy.svg'


function HeroSection() {

    return (

        <div>
            <div className="md:flex flex-row justify-around">
                <div className="p-5">
                    <div className="p-1 m-2">این پروژه برای مدیرت کاربران میباشد.</div>
                    <div className="p-1 m-2">برای مشاهده پروفایل و داشبورد ابتدا باید وارد سایت شوید.</div>
                    <div className="p-1 m-2">هنگامی که شما ثبت نام میکنید وارد سایت میشوید و به لیست کاربران اضافه میشوید</div>
                    <div className="p-1 m-2">برای مشاهده لیست کاربران وارد بعد از وارد شدن به سایت، وارد داشبورد شوید و وارد پنل مدیریت شوید</div>
                    <div className="p-1 m-2">در پنل مدیریت میتوانید اطلاعات خود خود را کامل تر کنید</div>
                    <div className="p-1 m-2">اگر در پنل مدیریت، خودتان را از لیست حذف کنید، از سایت خارج میشوید، چون با اکانت خودتان که حذف شده است وارد شدید</div>
                    <div className="p-1 m-2">در پروفایل خود میتوانید اطلاعات مربوط به ثبت نام خود خود مانند نام کاربری و ایمیل را ویرایش کنید</div>
                </div>
                <div className="p-5 flex justify-center">
                    <img src={NextTasksImage} className="max-w-md"/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
