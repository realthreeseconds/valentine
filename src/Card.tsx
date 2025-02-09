import {JSX, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import stamp from "./assets/stamp.png";
import kiss from "./assets/kiss.gif";

function Card(): JSX.Element {
    const [exitCard, setExitCard] = useState(false);
    const [mainCardExiting, setMainCardExiting] = useState(false);
    const [isYesClicked, setIsYesClicked] = useState(false);
    const [yesButtons, setYesButtons] = useState<number[]>([]); // Store the added YES buttons

    const handleClick = () => {
        setTimeout(() => {
            setExitCard(true);
        }, 0);

        setTimeout(() => {
            setMainCardExiting(true);
        }, 0);
    };

    const handleYesClick = () => {
        setIsYesClicked(true);
    }

    const handleNoClick = () => {
            setYesButtons((prev) => [...prev, prev.length]);

    };


    return (
        <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center p-4 overflow-hidden w-full">
            <AnimatePresence>
                {exitCard && (
                    <motion.div
                        className="absolute w-[300px] md:w-[500px] aspect-[1/1.4] bg-[#FFB6C1] rounded-lg shadow-lg md:py-16 md:px-12 flex flex-col gap-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            transform: 'translateX(-50%) translateY(-50%)',
                        }}
                    >
                        {!isYesClicked ? (
                            <motion.div
                                className="space-y-4 p-4"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.9}}
                                transition={{duration: 0.5}}
                            >
                                <h1 className="text-[#E74C3C] text-4xl md:text-6xl font-extrabold"
                                    style={{lineHeight: 1.2}}>
                                    Will you
                                    <br/>
                                    be my
                                    <br/>
                                    valentine?
                                </h1>

                                <div className="flex flex-col items-center space-y-4 flex-1">
                                    <button onClick={handleYesClick}
                                        className="bg-[#E74C3C] text-white px-4 md:px-8 py-2 md:py-3 rounded-lg text-lg md:text-xl font-bold hover:bg-[#D64434] transition-colors">
                                        YES!
                                    </button>
                                    <div>
                                        <button onClick={handleNoClick}
                                            className="text-[#E74C3C] text-xs md:text-sm rounded-lg px-3 md:px-4 py-1.5 md:py-2 bg-white">
                                            no
                                        </button>
                                    </div>
                                </div>

                                {yesButtons.length != 0 && (
                                    <>
                                        {yesButtons.map((_, index) => (
                                            <motion.button
                                                onClick={handleYesClick}
                                                key={index}
                                                className="absolute hover:bg-[#D64434] bg-[#E74C3C] text-white font-bold text-xs md:text-sm rounded-lg px-3 md:px-4 py-1.5 md:py-2"
                                                style={{
                                                    top: `${Math.random() * 70 + 20}%`, // Random vertical position
                                                    left: `${Math.random() * 70 + 20}%`, // Random horizontal position
                                                }}
                                            >
                                                YES!
                                            </motion.button>
                                        ))}
                                            </>
                                        )}
                                    </motion.div>

                                ) : (
                                    <motion.div
                                    className="flex flex-col items-center justify-center space-y-4 flex-1"
                                    initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.9}}
                                transition={{duration: 2, ease: "easeIn"}}
                            >
                                <div className="flex flex-col items-center justify-center gap-8 p-8">
                                    <div className="bg-white p-4 rounded-lg shadow-lg w-fit"
                                         style={{transform: 'rotate(-3deg)'}}>
                                        <div className="md:w-64 md:h-64 w-32 h-32 mb-4">
                                            <img src={kiss} alt="kiss" className="w-full h-full object-cover rounded"/>
                                        </div>
                                    </div>
                                    <h1 className="text-[#E74C3C] text-4xl md:text-6xl font-extrabold"
                                        style={{lineHeight: 1.2}}>Yay! 🎉</h1>
                                    <p className="text-lg text-[#E74C3C]">Ich liebe dich! ❤️</p>
                                </div>
                            </motion.div>
                        )}

                    </motion.div>
                )}

                {!mainCardExiting && !exitCard && (
                    <motion.div
                        className="relative w-full max-w-2xl mx-auto"
                        initial={{opacity: 0, y: -50, scale: 0.95}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{
                            y: 600,
                            opacity: 0,
                            transition: {
                                duration: 1,
                                delay: 1,
                            },
                        }}
                        style={{perspective: 1000}}
                    >
                        <div
                            className="absolute left-1/2 top-1/2 w-full max-w-[700px] aspect-[1.4/1] bg-[#E74C3C] rounded-lg shadow-lg p-6 flex items-center justify-center cursor-pointer"
                            style={{
                                transform: 'translateX(-50%) translateY(-50%)',
                            }}
                            onClick={handleClick}
                        >
                            <div className="absolute top-4 right-4 md:size-24 size-16">
                                <img src={stamp} alt="" />
                            </div>
                            <span className="text-white text-3cl md:text-5xl" style={{ fontFamily: 'Caveat', fontWeight: 700 }}>
                For You
              </span>
                        </div>
                    </motion.div>
                )}

                {mainCardExiting && (
                    <motion.div
                        className="relative w-full max-w-2xl mx-auto"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: 600 }}
                        transition={{ duration: 1 }}
                    >
                        <div
                            className="absolute left-1/2 top-1/2 w-full max-w-[700px] aspect-[1.4/1] bg-[#E74C3C] rounded-lg shadow-lg p-6 flex items-center justify-center"
                            style={{
                                transform: "translateX(-50%) translateY(-50%)",
                            }}
                        >
                            <div className="absolute top-4 right-4 md:size-24 size-16">
                                <img src={stamp} alt="" />
                            </div>
                            <span className="text-white text-3cl md:text-5xl" style={{ fontFamily: "Caveat Variable", fontWeight: 700 }}>
                For You
              </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Card;
