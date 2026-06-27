import { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { GoXCircle } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { chatbotTree } from "../data/Chatbot/chatbotTree";
import { useMemo } from "react";
import { LuBotMessageSquare } from "react-icons/lu";
export default function AIChatbot(){
    const [open,setOpen]=useState(false);
    const [node,setNode]=useState(chatbotTree.home);
    const [chat,setChat]=useState([]);
    const [count,setCount]=useState(0);
    const bottomRef=useRef(null);
    useEffect(()=>{
     setChat([
      {
        id:0,
        sender: "ai",
        title: node.title,
        message: node.message,
        options: node.options,
      },
     ]);
    }, []);
    useEffect(()=>{
      bottomRef.current?.scrollIntoView({
        behavior:"smooth",
      });
    },[chat]);
  const lastAiId = useMemo(() => {
  return [...chat]
    .reverse()
    .find((msg) => msg.sender === "ai")?.id;
}, [chat]);
    const handleReply = (opn) => {
  const nextNode = chatbotTree[opn.next];
  setChat((prev) => [
    ...prev,
    // User message
    {
      id: count + 1,
      sender: "user",
      title: "",
      message: opn.next,
      options: [],
    },

    // AI message
    {
      id: count + 2,
      sender: "ai",
      title: nextNode.title,
      message: nextNode.message,
      options: nextNode.options,
    },
  ]);

  setCount((prev) => prev + 2);

  setNode(nextNode);
};
    return(
        <>
        {!open?
          // <div onClick={()=>setOpen(!open)} className="fixed flex flex-col items-center top-1/2 right-0 bg-white py-8 z-[9999] rounded-full">
          //    {/* <h2 onClick={()=>setOpen(!open)}><SlArrowLeft size={20}/></h2> */}
          //    <h2 className="font-mono p-2">Ask Que?</h2>
          // </div>
          <div onClick={()=>setOpen(true)} className="fixed bottom-6 right-6  flex  items-center  gap-3
    bg-gradient-to-r
    from-sky-600
    to-blue-700
    px-5
    py-3
    rounded-full
    shadow-2xl
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
    z-[9999]
    "><LuBotMessageSquare size={28} className="text-white"/>

<span className="text-white font-semibold">
Ask AI
</span>

</div>
          :<div className="fixed h-[60%] w-[70%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gradient-to-r from-sky-300 via-sky-200 to-blue-100 rounded-2xl overflow-hidden flex flex-col ">
            <div className="flex flex-row items-center justify-center bg-gradient-to-r from-sky-600 to-blue-700 text-white  font-mono">
              <h1>AI Assistant</h1>
              <GoXCircle onClick={()=>setOpen(!open)} className="absolute right-1"/>
            </div>
            <div className="flex flex-row flex-wrap overflow-y-auto scrollbar-thin">
               {chat.map((e)=>(
                e.sender==='ai'?
                <div key={e.id} className="flex items-center justify-start">
                <div className="w-[80%] border border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm border border-white/50 text-slate-800 rounded-xl text-xs p-2 m-2">
                <h3 className="font-semibold">{e.title}</h3>
                 <p className="text-gray-700">{e.message}</p>
                 <div>
                  <ul>
                    {e.options.map((opn,idx)=>(
                      <li onClick={()=>{ if(e.id===lastAiId){handleReply(opn)}}} key={idx}  className={`border border-gray-200 my-1 p-2 rounded-lg transition ${e.id === lastAiId ? "cursor-pointer hover:bg-sky-100": "pointer-events-none opacity-50"}`}>{opn.label} </li>
                    ))}
                  </ul>
                 </div>
                </div>
                </div>
                :<div className="flex w-full text-center justify-end" key={e.id}>
                  <div className="w-[80%] border border-gray-200 shadow-sm bg-gray-100 rounded-xl text-xs p-2 m-2">
                    {e.message}
                  </div>
                </div>
               ))}
               <div ref={bottomRef}></div>
            </div>
            {/* <div className="absolute bottom-1 px-2 py-1 w-full bg-gray-100 flex justify-center items-center">
             <form className="flex flex-row w-full items-center justify-center gap-2" onSubmit={handleSubmit}>
              <input value={message}  type="text" className=" w-[80%] border p-1 rounded-xl text-sm" placeholder="Ask me "/>
              <IoSend size={25}/>
             </form>
            </div> */}
          </div>
        }
       </>
    );
}