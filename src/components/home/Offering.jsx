import React from "react";
import Carousel from "./Carousel";

const Offering = () => {
    return (
        <div className="bg-[#D0D7DF]">
            <div className="container">
                <div className="text-center pt-10 font-medium text-4xl">
                    <span className="text-[#373737]">What We Are</span> <span className="text-[#D7AC70]">Offering</span>
                </div>

                <div className="pb-10">
                    <Carousel/>
                </div>

                <div className="flex justify-end">
                    <button className="#000000">See all</button>
                </div>
            </div>
        </div>
    );
};

export default Offering;
