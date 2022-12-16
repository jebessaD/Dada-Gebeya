
import { useGlobalContext } from "../hooks/context";

export default function Modal({setShowModal}) {
  const {darkMode}=useGlobalContext()
  return (
    <>
       <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
       <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
     
       <div className="fixed inset-0 z-10 overflow-y-auto">
         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
           <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
             <div className= {`${darkMode?"bg-neutral-900 text-white":"bg-white"}  px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
               <div className="sm:flex sm:items-start">
                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                 </div>
                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                   <h3 className="text-lg font-medium leading-6 " id="modal-title">Ooooops!</h3>
                   <div className="mt-2">
                     <p className="text-sm ">Payment system is not integrated yet!</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
               <button onClick={()=>setShowModal(false)} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">OK</button>
               {/* <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button> */}
             </div>
           </div>
         </div>
       </div>
     </div>
     

     
    </>
  );
}