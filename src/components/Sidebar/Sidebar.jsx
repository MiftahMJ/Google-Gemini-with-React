import React, { useContext, useState } from 'react'
import './Sidebar.css'
import menu_icon from "../../assets/menu_icon.png";
import plus_icon from "../../assets/plus_icon.png";
import message_icon from "../../assets/message_icon.png";
import question_icon from "../../assets/question_icon.png";
import setting_icon from "../../assets/setting_icon.png";
import history_icon from "../../assets/history_icon.png";
import { Context } from '../../context/context';
// import bulb_icon from './bulb_icon.png'
// import compass_icon from './compass_icon.png'
// import gallery_icon from './gallery_icon.png'
// import mic_icon from './mic_icon.png'
// import user_icon from './user_icon.png'
// import youtube_icon from './youtube_icon.png'
// import message_icon from './message_icon.png'
// import code_icon from './code_icon.png'
// import send_icon from './send_icon.png'

const Sidebar = () => {
 const [extended,setExtended]=useState(false)
 const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)

 const loadPrompt=async(prompt)=>{
  setRecentPrompt(prompt)
  await onSent(prompt)
 }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
              <img src={assets.plus_icon} alt="" />
             {extended?<p>New Chat</p>:null} 
            </div>
            {extended?<div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}....</p>
                </div>
                )
              })}
              
            </div>:null}
            
        </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img  src={assets.question_icon} alt="" />
      {extended? <p>Help</p>:null}   
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
    {extended?     <p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
      {extended?    <p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}
export default Sidebar
export const assets = {
  menu_icon,
  plus_icon,
   message_icon,
  question_icon,
  setting_icon,
  history_icon
  // bulb_icon,
  // compass_icon,
  // gallery_icon,
  // mic_icon,
  // user_icon,
  // youtube_icon,
  // message_icon,
  // code_icon,
  // send_icon,
};

