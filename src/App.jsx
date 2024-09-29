import { AiFillAlipayCircle } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDoc } from "firebase/firestore";
const App = () => {

  const [contacts,setContacts]=useState([]);

  useEffect(()=>{
    const getContacts = async () =>{
      

      try{
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map(docs)=>doc.data(());
        console.log(contactsLists);
      }catch (error){
        console.log(error);
      }
    }
  });
  return (
    <div className="max-w-[370px] px-4">
      <Navbar />
      <div className=" flex-grow relative flex items-center">
        <FiSearch className="text-3xl text-white absolute" />
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-transparent border-white rounded-md border h-10 flex-grow text-white pl-9 "
          />
        </div>
       
          <AiFillAlipayCircle className="text-5xl text-white cursor-pointer" />
       
      </div>
    </div>
  );
};

export default App;
