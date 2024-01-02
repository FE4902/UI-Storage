import React from "react";
import Image from "next/image";

type CardProps = {
    href: string;
    img?: string;
    title: string;
    techList: string;
    desc: string;
};

const Card = (props: CardProps) => {
    const { href, img, title, techList, desc } = props;

    return (
        <li className="ui-card">
            <a
                href={href}
                className="flex flex-col h-full gap-4 p-6 transition-all bg-white border border-black border-l-transparent border-t-transparent"
            >
                <figure className="bg-slate-50 aspect-[4/3]">
                    {img && <Image src={img} alt="image" />}
                </figure>
                <h4 className="text-xl">{title}</h4>
                <ul className="flex gap-2">
                    <li className="px-2 py-1 leading-none bg-slate-100">
                        {techList}
                    </li>
                    {/* {techList.map((v, i) => {
                        return (
                            <li
                                key={i}
                                className="px-2 py-1 leading-none bg-slate-100"
                            >
                                {v}
                            </li>
                        );
                    })} */}
                </ul>
                <p>{desc}</p>
            </a>
        </li>
    );
};

export default Card;
