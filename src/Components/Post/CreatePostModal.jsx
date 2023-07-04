import { ModalOverlay, ModalContent,  ModalBody, Modal, Button}  from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreatePostModal.css';
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'

const CreatePostModal = ({onClose, isOpen}) => {
    const[isDragOver,setIsDragOver] = useState(false);
    const[file,setFile] = useState();
    const[caption,setCaption] = useState("");

    const handleDrop= (event)=>{
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        // alert(droppedFile.type);
        if(droppedFile.type.startsWith("image/")||droppedFile.type.startsWith("video/")){
            setFile(droppedFile);
        }else{
            setFile(null);
            alert("Please select a image or a video");
        }
    }
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true);
    }
    
    const handleDragLeave=()=>{
        setIsDragOver(false);
    }

    const handleOnChange=(e)=>{
        const file=e.target.files[0];
        if(file && (file.type.startsWith("image/")||file.type.startsWith("video/"))){
            setFile(file);
        }else{
            setFile(null);
            alert("Please select a image or a video");
        }
    }

    const handelCaptionChange=(e)=>{
        setCaption(e.target.value);
    }

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay/>
        <ModalContent>
            <div className='flex justify-between py-1 px-10 items-center'>
                <p>Create New Post</p>
                <Button className='outline-none border-0' variant={"ghost"} size="sm" colorScheme={"blue"}>
                    Share
                </Button>
            </div>
            <hr/>
            <ModalBody>
            <div className='h-[70vh] justify-between pb-5 flex'>
                <div className='w-[50%] flex flex-col justify-center'>
                    {!file && 
                    <div className='drag-drop h-full' onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} setIsDragOver={isDragOver}>
                        <div>
                            <FaPhotoVideo className="text-3xl"/>
                            <p>Drag Photo or Video Here</p>
                        </div>
                        <label htmlFor='file-upload' className='custom-file-upload'>Select From Computer</label>
                        <input type="file" id="file-upload" accept='image/*,video/*' onChange={handleOnChange}/>
                    </div>}

                    {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt=''/>} 

                    
                </div>
                <div className='w-[1px] border h-full'>
                </div>
                <div className='w-[50%]'>
                    <div className='flex items-center px-2'>
                        <img className='w-7 h-7 rounded-full' src='https://cdn.pixabay.com/photo/2023/06/24/14/21/flamingo-8085305_1280.jpg' alt=''/>
                        <p className='font-semibold ml-4'>Username</p>
                    </div>
                    <div className='px-4'>
                        <textarea placeholder='Write a caption' className='captionInput focus:ring-0' name="caption" rows="8" onChange={handelCaptionChange}></textarea>
                    </div>
                    <div className='flex justify-between px-2'>
                        <GrEmoji/>
                        <p className = "opacity-70">{caption?.length}/2,200</p>
                    </div>
                    <hr/>
                    <div className='py-2 flex justify-between items-center'>
                        <input className="locationInput" type="text" placeholder="Location" name="location" />
                        <GoLocation/>
                    </div>
                    <hr/>

                </div>
            </div>
            </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModal
