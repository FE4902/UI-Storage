import Card from "@/components/Card";
import Hero from "@/components/Hero";

import db from "../db/db.json";

export default function Home() {
    return (
        <>
            <Hero
                title="Components"
                desc="자바스크립트, 리액트를 활용한 컴포넌트 저장소입니다."
            />
            <main>
                <div className="border-t border-black">
                    <div className="flex flex-col md:flex-row-reverse">
                        <h3 className="px-6 py-4 text-xl uppercase border-b border-black md:flex-row-reverse md:border-b-0 md:writing-mode-tb">
                            Recent Components
                        </h3>
                        <ul className="ui-grid">
                            {db.component.map((v, i) => {
                                return (
                                    <Card
                                        key={i}
                                        title={v.title}
                                        href={v.href}
                                        techList={v.techList}
                                        desc={v.desc}
                                    ></Card>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex justify-end px-4 py-6">
                        <a href="" className="text-lg">
                            More Components&nbsp;&nbsp;➔
                        </a>
                    </div>
                </div>
                <div className="border-t border-black">
                    <div className="flex flex-col md:flex-row-reverse">
                        <h3 className="px-6 py-4 text-xl uppercase border-b border-black md:flex-row-reverse md:border-b-0 md:writing-mode-tb">
                            Recent Canvas
                        </h3>
                        {/* <ul className="ui-grid">
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                            <Card
                                href="/"
                                title="asd"
                                desc="sdas"
                                techList={["asd"]}
                            ></Card>
                        </ul> */}
                    </div>
                    <div className="flex justify-end px-4 py-6">
                        <a href="" className="text-lg">
                            More Canvas&nbsp;&nbsp;➔
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
