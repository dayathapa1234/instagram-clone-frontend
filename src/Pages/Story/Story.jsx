import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
    const story = [
        {
            image:"https://cdn.pixabay.com/photo/2023/05/23/10/45/girl-8012460_1280.jpg"
        },{     
            image:"https://cdn.pixabay.com/photo/2021/08/12/13/39/woman-6540891_1280.jpg"
        },{     
            image:"https://cdn.pixabay.com/photo/2021/08/30/09/49/woman-6585406_960_720.jpg"
        },{     
            image:"https://cdn.pixabay.com/photo/2021/09/04/12/34/woman-6597678_960_720.jpg"
        }
    ]
  return (
    <div>
      <StoryViewer stories={story}/>
    </div>
  )
}

export default Story
