import {useEffect,useMemo,useRef,useState} from "react";
import {LuBotMessageSquare} from "react-icons/lu";
import {GoX} from "react-icons/go";
import {FaRobot,FaCheckCircle} from "react-icons/fa";
import {IoSend} from "react-icons/io5";
import {chatbotTree} from "../data/Chatbot/chatbotTree";

export default function AIChatbot(){
const [open,setOpen]=useState(false);
const [node]=useState(chatbotTree.home);
const [chat,setChat]=useState([]);
const bottomRef=useRef(null);

useEffect(()=>{
setChat([{id:0,sender:"ai",title:node.title,message:node.message,options:node.options}]);
},[]);

useEffect(()=>bottomRef.current?.scrollIntoView({behavior:"smooth"}),[chat]);

const lastAiId=useMemo(()=>[...chat].reverse().find(x=>x.sender==="ai")?.id,[chat]);

const handleReply=(opn)=>{
const next=chatbotTree[opn.next];
setChat(prev=>[
...prev,
{id:Date.now(),sender:"user",message:opn.label},
{id:Date.now()+1,sender:"ai",title:next.title,message:next.message,options:next.options}
]);
};

return<>
{!open?
<button onClick={()=>setOpen(true)} className="fixed bottom-6 left-4 md:left-6 z-[999] group">
<div className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping"/>
<div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-2xl flex items-center justify-center text-white group-hover:scale-110 transition">
<LuBotMessageSquare size={30}/>
</div>
</button>
:
<div className="fixed z-[999] bottom-4 right-4 w-[420px] max-w-[96vw] h-[700px] max-h-[92vh] rounded-[30px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,.35)] flex flex-col">

<div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-full bg-white/20 flex items-center justify-center text-white">
<FaRobot/>
</div>
<div>
<h2 className="font-bold text-white">DOCFLY AI</h2>
<p className="text-xs text-cyan-200 flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-400"/>Online</p>
</div>
</div>
<button onClick={()=>setOpen(false)} className="text-white text-2xl"><GoX/></button>
</div>

<div className="flex-1 overflow-y-auto bg-slate-50 p-5 space-y-6 scrollbar-thin scrollbar-thumb-cyan-400">

<div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white">
<h3 className="font-bold text-xl">👋 Welcome</h3>
<p className="mt-2 text-cyan-50">Ask about MBBS fees, countries, universities, visa and admission process.</p>
</div>

{chat.map(msg=>msg.sender==="ai"?
<div key={msg.id} className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center"><FaRobot/></div>
<div className="max-w-[80%]">
<div className="rounded-3xl rounded-tl-md bg-white p-5 shadow">
<h4 className="font-bold text-slate-800">{msg.title}</h4>
<p className="mt-2 text-slate-600">{msg.message}</p>
</div>
{msg.options?.length>0&&(
<div className="mt-3 flex flex-wrap gap-2">
{msg.options.map((o,i)=>(
<button key={i} disabled={msg.id!==lastAiId} onClick={()=>handleReply(o)}
className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm hover:bg-cyan-500 hover:text-white transition disabled:opacity-40">
{o.label}
</button>
))}
</div>)}
</div>
</div>
:
<div key={msg.id} className="flex justify-end">
<div className="max-w-[75%] rounded-3xl rounded-tr-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 shadow">
{msg.message}
</div>
</div>
)}
<div ref={bottomRef}/>
</div>

<div className="border-t bg-white p-4">
<div className="flex items-center rounded-full border border-slate-200 px-4 py-3">
<input disabled placeholder="Choose an option above..." className="flex-1 outline-none text-slate-500"/>
<button className="text-cyan-600"><IoSend size={22}/></button>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<FaCheckCircle className="text-green-500"/>
Official Docfly Assistant
</div>
</div>

</div>}
</>;
}
