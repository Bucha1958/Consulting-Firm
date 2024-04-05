import React from "react";
import heroImage from "../../assets/heroImage/Ellipse 6.png";
import clock from "../../assets/heroImage/emojione-monotone_alarm-clock.png";
import person from "../../assets/heroImage/carbon_user-avatar-filled.png";
import runner from "../../assets/heroImage/bx_run.png";

const HeroSection = () => {
    return (
        <>
            <div className="container lg:grid lg:grid-cols-2 gap-10 items-center mt-16">
                <div className="grid gap-5">
                    <div className="w-[32.5rem] grid gap-5">
                        <div
                            className="lg:text-4xl md:text-3xl text-2xl md:w-auto w-80 capitalize leading-10 font-semibold">
                            <span className="text-[#143561]">Financial Services, </span> <span
                            className="text-[#D7AC70]">Tax Management</span> <span
                            className="text-[#143561]">and Other Regulatory</span> <span
                            className="text-[#D7AC70]">Compliance</span> <br/> <span
                            className="text-[#143561]">are our expertise.</span>
                        </div>
                        <p className="text-[#373737] w-[34rem] font-normal md:w-auto w-80">
                            Our expert corporate training consultants have a breadth of experience in the financial
                            industry.
                            They have provided financial services training and valuable solutions to a variety of
                            financial
                            industries such as consumer and commercial banking, mortgage and lending, wealth management,
                            and
                            insurance to name a few.
                        </p>
                    </div>

                    <div className="">
                        <input type="email" placeholder="Your company email" name="email"
                               className="border border-[#C0C5CB] text-gray-600 focus:outline-none md:px-3 md:py-2 px-2 py-1 md:w-auto w-60  rounded-l-md"/>
                        <button
                            className="bg-[#143561] text-[#FFFFFF] md:px-3 md:py-2 px-1 py-1  rounded-r-md font-normal">
                            Get started
                        </button>
                    </div>
                </div>
                <div className="lg:w-[43.75rem] object-cover lg:mt-auto mt-10">
                    <img src={heroImage} alt=""/>
                </div>
            </div>

            {/* Hero Cards */}
            <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 my-10">
                <div className="flex gap-3">
                    <div className="">
                        <img src={clock} className="bg-[#D0D7DF] rounded-full lg:p-3 p-5" width={45} alt=""/>
                    </div>
                    <div className="grid gap-2">
                        <h1 className="font-bold">ON TIME SERVICE </h1>
                        <p className="lg:w-[15.125rem] lg:-mt-4 font-light text-sm">
                            The 3hree Consulting highest priority is to attract and invest in the absolute best talent
                            so that we can, as a collective team, add significant value for our clients in a timely
                            manner.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="">
                        <img src={person} className="bg-[#D0D7DF] rounded-full lg:p-3 p-5" width={45} alt=""/>
                    </div>
                    <div className="grid gap-2">
                        <h1 className="font-bold">PROFESSIONAL TEAM</h1>
                        <p className="lg:w-[15.125rem] font-light text-sm">
                            Our expert corporate training consultants have a breadth of experience in the financial
                            industry. They have provided financial services training and valuable solutions to a variety
                            of financial industries
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="">
                        <img src={runner} className="bg-[#D0D7DF] rounded-full lg:p-3 p-5" width={45} alt=""/>
                    </div>
                    <div className="grid gap-2">
                        <h1 className="font-bold">FASTEST SOLUTION</h1>
                        <p className="lg:w-[15.125rem] font-light text-sm">
                            Our team approach includes strategic planning and creative collaboration results in greater
                            effectiveness and efficiencies, allowing our clients to benefit from everyone's unique
                            talents.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
