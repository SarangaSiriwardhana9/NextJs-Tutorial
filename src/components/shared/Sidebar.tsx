
'use client'
export default function Sidebar() {
    return (
      <div className=" w-[300px] flex flex-col min-w-[300px] border-r min-h-screen p-4 ">
      <div> User part</div>
      <div className="grow bg-slate-500">Menu part</div>
      <div> Settings part</div>
      
      </div>
    )
    }