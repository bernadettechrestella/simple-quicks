import React, { useEffect } from 'react'
import arrowLeft from '../assets/icons/arrowLeft.svg'
import close from '../assets/icons/close.svg'
import threeDots from '../assets/icons/threeDots.svg'
import { useGetInbox } from '../hooks/useGetInbox'

const CardMessage = (props) => {
    const {title, postID, onClose, postBody} = props;

    const {comments, getPostComments} = useGetInbox();

    const userColors = {};

    useEffect(() => {
        getPostComments(postID)
    }, [])

    console.log(comments)
    


  return (
    <div className='bg-white mb-[13px] rounded-[8px] w-[708px] h-[726px]'>
        <div className='h-[73px] border-b border-primaryGray flex gap-[15px] w-full'>
            <img src={arrowLeft} alt="arrowLeft" className='h-[24px] w-[24px] ml-[25px] my-auto cursor-pointer' onClick={onClose}/>
            <div className='flex justify-between w-full'>
                <div>
                    <p className='text-primaryBlue font-bold pt-[18px]'>{title}</p>
                    <p className='text-xs'>3 Participant</p>
                </div>
                <img src={close} alt="close" className='h-[14px] w-[14px] mr-[21px] my-auto cursor-pointer'/>
            </div>
        </div>
        <br />

        <div className='flex flex-col h-[630px]'>
        <div className='overflow-auto px-[32px] w-full flex-1'>
            <p className='text-chatPurple font-bold flex justify-end'>You</p>
            <div className='mb-[10px] flex justify-end'>
                <div className='flex gap-2'>
                    <img src={threeDots} alt="options" className='h-[24px] w-[24px]'/>
                    <div className='max-w-[518px] h-auto bg-chatSoftPurple p-2 rounded-[5px]'>
                        <p>{postBody}</p>
                        <p>19:32</p>
                    </div>
                </div>
            </div>

            {comments && comments.length > 0 ? (
                <fieldset className="border-t border-primaryDarkGray">
                <legend className="mx-auto px-4 font-bold text-base">Today, June 09 2021</legend>
            </fieldset>) : ''}

            {comments && comments.map((comment, index) => {
                const userId = comment.user.id;
                let userColor = userColors[userId];

                if (!userColor) {
                    const availableColors = ['Yellow', 'Green'];
                    const assignedColors = Object.values(userColors);
                    const unusedColors = availableColors.filter(color => !assignedColors.includes(color));
                    userColor = unusedColors[index % unusedColors.length];
                    userColors[userId] = userColor;
                }

            return (
                <div className='mb-[10px]' key={comment.id}>
                <p className={`text-chat${userColor} font-bold`}>{comment.user.username}</p>
                <div className='flex gap-2'>
                    <div className={`max-w-[518px] h-auto p-2 rounded-[5px] bg-chatSoft${userColor}`}>
                        <p>{comment.body}</p>
                        <p>19:32</p>
                    </div>
                    <img src={threeDots} alt="options" className='h-[24px] w-[24px]' />
                </div>
                </div>
            );
            })}

        </div>

        <div className='bottom-0 m-[19px]'>
            <input type="text" placeholder='Type a new message' className='w-[580px] h-[40px] border border-primaryGray mr-[13px] rounded-[5px] px-[16px]'/>
            <button className='w-[76px] h-[40px] bg-primaryBlue text-white font-bold rounded-[5px]'>Send</button>
        </div>
        </div>
    </div>
  )
}

export default CardMessage