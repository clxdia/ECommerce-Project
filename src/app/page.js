"use client";

import "../styles/globals.css";

// import DealOfTheDay from "../ui/DealOfTheDay";
import SwiperMB from "../ui/SwiperMB";
import SwiperComponent from "../ui/Swiper";
import NewArrivals from "../ui/NewArrivals";
import Categories from "../ui/Categories";
// import Banner from "../ui/Banner";
// import Categories from "../ui/Categories";
// import Articles from "../ui/Articles";

export default function Home() {
  return (
    <div>
      <main>
        <SwiperComponent />
        <SwiperMB />

        <NewArrivals />

        {/* <section>
        <DealOfTheDay />
      </section> */}
        <Categories />
        {/* <Banner /> */}
        <Articles />
      </main>
    </div>
  );
}
