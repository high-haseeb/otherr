export default function HomePage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden font-sans bg-foreground select-none">
            <Navbar />
            <div className="text-2xl md:text-[calc(100vw/4)] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full overflow-hidden px-0 text-black">OTHERR</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[49%] mix-blend-difference backdrop-invert bg-background overflow-hidden">
                <div className="relative h-full">
                    <div className="text-2xl md:text-[calc(100vw/4)] font-bold absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white max-w-full overflow-hidden px-0">OTHERR</div>
                </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-28 bg-white">
                <div className="w-ful h-full flex text-black items-center font-mono text-base md:text-2xl uppercase px-20">
                    <div>Otherr - Non human consciousness research lab</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" className="fill-primary mx-auto">
                        <path d="M320-200v-560l440 280-440 280Z"/>
                    </svg>
                    <div className="ml-auto text-primary">Enter transmission is live</div>
                </div>
            </div>

        </div>
  );
}

const Navbar = () => {
    return(
        <div className="fixed top-0 left-0 w-full p-8 flex gap-10 font-mono items-center">
            <div className="bg-primary rounded-full w-10 h-10" id="logo" />
            <div className="flex flex-col text-background">
                <div>OTHER RADIO</div>
                <div>LISTEN 24/7</div>
            </div>
            <div className="w-10 h-10 bg-background text-foreground rounded-full ml-auto self-end text-2xl font-semibold flex items-center justify-center font-sans">i</div>
        </div>
    )
}
