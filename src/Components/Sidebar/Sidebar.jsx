import React, {useState} from 'react'
import {IoReorderThreeOutline} from "react-icons/io5"
import {menu} from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../../Components/Post/CreatePostModal'
import { useDisclosure } from '@chakra-ui/react'



const Sidebar = () => {
  const [activeTab,setActiveTab] = useState();
  const navigate=useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleTabClick = (title) => {   
    setActiveTab(title);
    if (title==="Profile"){
      navigate("/username")
    }else if(title==="Home"){
      navigate("/")
    }else if(title==="Create"){
      onOpen();
    }
  };

  return (
    <div className='sticky top-0 h-[100vh]'> 
      <div className='flex flex-col justify-between first-letter h-full px-10'>
        <div>
          <div className='pt-10'>
            <img className='w-40 ' src="https://i.imgur.com/zqpwkLQ.png" alt=""/>
          </div>
          <div className='mt-10'>
            {menu.map((item)=>(
              <div onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab===item.title? item.activeIcon: item.icon}
                <p className={`${activeTab===item.title? "font-bold": "font-semibold"}`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer pb-10">
        <IoReorderThreeOutline className='text-2xl'/>
        <p className='ml-5'>More</p>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen}/>
    </div>
  )
}

export default Sidebar
