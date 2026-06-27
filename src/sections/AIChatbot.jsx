import { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { GoXCircle } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { chatbotTree } from "../data/Chatbot/chatbotTree";
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
          <div className="fixed flex flex-row items-center top-1/2 right-0 bg-white py-8 z-[9999] rounded-xl">
             <h2 onClick={()=>setOpen(!open)}><SlArrowLeft size={20}/></h2>
             <h2 className="rotate-270 font-mono">Ask Que?</h2>
          </div>
          :<div className="fixed h-[40%] w-[40%] w-16 bg-white right-4 top-8 flex flex-col rounded-2xl">
            <div className="flex flex-row items-center justify-center bg-sky-100 font-mono">
              <h1>AI Assistant</h1>
              <GoXCircle onClick={()=>setOpen(!open)} className="absolute right-1"/>
            </div>
            <div className="flex flex-row flex-wrap overflow-y-auto scrollbar-thin">
               {chat.map((e)=>(
                e.sender==='ai'?
                <div key={e.id} className="flex items-center justify-start">
                <div className="w-[80%] border border-gray-200 shadow-sm bg-gray-100 rounded-xl text-xs p-2 m-2">
                <h3 className="font-semibold">{e.title}</h3>
                 <p className="text-gray-700">{e.message}</p>
                 <div>
                  <ul>
                    {e.options.map((opn,idx)=>(
                      <li onClick={()=>handleReply(opn)} key={idx} className="border border-gray-200 my-1 p- hover:underline transition-all duration-300" >{opn.label} </li>
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