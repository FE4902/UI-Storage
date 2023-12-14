import React from "react";

type HeroProps = {
    title?: string;
    desc?: string;
};

const Hero = (props: HeroProps) => {
    return (
        <div className="flex items-center px-4 py-12 bg-slate-50">
            <dl className="flex flex-col max-w-xl gap-2 p-6 m-2 bg-white border-2 border-black shadow-[.25em_.25em_var(--shadow-block-shadow-color)]">
                <dt className="text-2xl italic">{props.title}</dt>
                <dd className="text-lg">{props.desc}</dd>
            </dl>
        </div>
    );
};

export default Hero;
