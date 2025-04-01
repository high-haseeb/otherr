"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
    const [playing, setPlaying] = useState(false);
    const [text, setText] = useState<string[]>([]);

    const commonWords = [
        "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
        "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
        "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
        "or", "an", "will", "my", "one", "all", "would", "there", "their",
        "what", "so", "up", "out", "if", "about", "who", "get", "which", "go",
        "me", "when", "make", "can", "like", "time", "no", "just", "him",
        "know", "take", "people", "into", "year", "your", "good", "some",
        "could", "them", "see", "other", "than", "then", "now", "look", "only",
        "come", "its", "over", "think", "also", "back", "after", "use", "two",
        "how", "our", "work", "first", "well", "way", "even", "new", "want",
        "because", "any", "these", "give", "day", "most", "us"
    ];
    const commonNouns = [
        "time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand",
        "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government",
        "company", "number", "group", "problem", "fact", "night", "water", "room", "mother", "area",
        "money", "story", "month", "lot", "right", "study", "book", "word", "business", "issue",
        "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game",
        "line", "end", "member", "law", "car", "city", "community", "name", "president", "team",
        "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level",
        "office", "door", "health", "person", "art", "war", "history", "party", "result", "change",
        "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"
    ];

    const commonVerbs = [
        "be", "have", "do", "say", "go", "can", "get", "make", "know", "think",
        "take", "see", "come", "want", "look", "use", "find", "give", "tell", "work",
        "call", "try", "ask", "need", "feel", "become", "leave", "put", "mean", "keep",
        "let", "begin", "seem", "help", "talk", "turn", "start", "show", "hear", "play",
        "run", "move", "like", "live", "believe", "hold", "bring", "happen", "write", "provide",
        "sit", "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change",
        "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow", "add",
        "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider", "appear",
        "buy", "wait", "serve", "die", "send", "expect", "build", "stay", "fall", "cut",
        "reach", "kill", "remain"
    ];

    const data = [
        ...commonNouns,
        ...commonVerbs,
        ...commonWords,
    ];

    let lastFrameTime = 0;
    const targetFPS = 20;
    const interval = 1000 / targetFPS;
    const textLength = 180;

    useEffect(() => {
        const updateText = (currentTime: number) => {
            if (!lastFrameTime) {
                lastFrameTime = currentTime;
            }

            const elapsedTime = currentTime - lastFrameTime;

            if (elapsedTime >= interval) {
                const new_text = data[Math.round(Math.random()*data.length - 1)];
                setText(s => s.concat(new_text).slice(s.length > textLength ? s.length - textLength : 0));
                lastFrameTime = currentTime;
            }
            requestAnimationFrame(updateText);
        }
        requestAnimationFrame(updateText);
    }, []);

    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden font-sans bg-foreground select-none">
            <Navbar />
            <div 
                className="text-2xl md:text-[calc(100vw/4)] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full overflow-hidden px-0 text-black transition-all"
                style={{
                    top: playing ? "4rem" : "50%",
                    fontSize: playing ? "4rem" : "25vw",
                }}
            >
                OTHERR
            </div>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[49%] mix-blend-difference backdrop-invert bg-background overflow-hidden transition-all p-28" 
                style={{
                    height: playing ? "79%" : "49%",
                    top: playing ? "20%" : "50%",
                }}
            > 
                <div
                    className="text-white transition-opacity w-lg text-justify text-lg uppercase"
                    style={{
                        opacity: playing ? "100" : "0",
                    }}
                >
                    {text.join("    ")}
                </div>
            </div>

            <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-28 bg-white transition-all"
                style={{
                    top: playing ? "20%" : "50%",
                    height: playing ? "4rem" : "7rem",
                }}
            >
                <div className="w-ful h-full flex text-black items-center font-mono text-base md:text-2xl uppercase px-20">
                    <div>Otherr - Non human consciousness research lab</div>
                    <button onClick={() => setPlaying(s => !s)} className="mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" className="fill-primary">
                            { 
                                playing ?  
                                    <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/> :
                                    <path d="M320-200v-560l440 280-440 280Z"/> 
                            }
                        </svg>
                    </button>
                    <div className="ml-auto text-primary">Enter transmission is live</div>
                </div>
            </div>

        </div>
  );
}

const Navbar = () => {
    const [showInfo, setShowInfo] = useState(false);

    return(
        <div className="fixed top-0 left-0 w-full p-8 flex gap-10 font-mono items-center">
            <div className="bg-primary rounded-full w-10 h-10" id="logo" />
            <div className="flex flex-col text-background">
                <div>OTHER RADIO</div>
                <div>LISTEN 24/7</div>
            </div>
            <div 
                onClick={() => setShowInfo(s => !s)}
                className="w-10 h-10 bg-background text-foreground rounded-full ml-auto self-end text-2xl font-semibold flex items-center justify-center font-sans"
            >
                i</div>
            <div
                className="absolute right-8 top-10 bg-background transition-all rounded-full -z-10"
                style={{
                    width: showInfo ? "10rem" : "2.5rem",
                    height: showInfo ? "10rem" : "2.5rem",
                }}
            ></div>
        </div>
    )
}
