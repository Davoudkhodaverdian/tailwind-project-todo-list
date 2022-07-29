

import BasicLayout from "./../components/main/basicLayout";

import observable from "./../components/patterns/observable";
import HeroSection from "./../components/main/heroSection";
import Footer from "./../components/main/footer";



function Home() {

  observable.notify()
  observable.unsubscribeAll();

  return (
    <BasicLayout>

      <div className="dark:bg-slate-800 dark:text-white">
        <div className="text-center py-3">
          صفحه اصلی
        </div>
        <HeroSection />
        <Footer />
      </div>
    </BasicLayout>
  );
}

export default Home;
