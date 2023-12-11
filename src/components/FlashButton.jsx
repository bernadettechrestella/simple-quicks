import React, { useState } from 'react'
import flash from '../assets/icons/flash.svg'
import inboxWhite from '../assets/icons/inboxWhite.svg'
import inboxPurple from '../assets/icons/inboxPurple.svg'
import taskOrange from '../assets/icons/taskOrange.svg'
import taskWhite from '../assets/icons/taskWhite.svg'
import CardInbox from './CardInbox'
import CardTask from './CardTask'

const FlashButton = () => {
    const [taskInboxOpen, setTaskInboxOpen] = useState(false)
    const [taskOpen, setTaskOpen] = useState(false)
    const [inboxOpen, setInboxOpen] = useState(false)

    const handleClickFlash = () => {
        setTaskInboxOpen(!taskInboxOpen)
    }

    const handleClickTaskOpen = () => {
        setTaskOpen(true)
        setInboxOpen(false)
    }

    const handleClickTaskClose = () => {
        setTaskOpen(false)
        setTaskInboxOpen(false)
    }

    const handleClickInboxOpen = () => {
        setInboxOpen(true)
        setTaskOpen(false)
    }

    const handleClickInboxClose = () => {
        setInboxOpen(false)
        setTaskInboxOpen(false)
    }

  return (
    <div className='absolute bottom-[27px] right-[34px]'>
        {inboxOpen ? <CardInbox /> : ''}
        {taskOpen ? <CardTask /> : ''}
        
        {taskInboxOpen ?
            <div className='flex gap-[26px] text-primaryLightGray justify-items-start font-lato font-bold text-[14px]'>
                {taskOpen || inboxOpen ? '' :
                    <>
                        <p className='ml-4'>Task</p>
                        <p className='ml-7'>Inbox</p>
                    </>
                }
            </div>
        : ''}

        <div className={inboxOpen || taskOpen ? 'flex gap-[16px] justify-end' : 'flex gap-[26px]'}>
            { taskInboxOpen ?
                <>
                    {taskOpen ? '' :
                        <button className='bg-primaryLightGray w-[60px] h-[60px] rounded-full flex justify-center items-center my-auto'
                        onClick={handleClickTaskOpen}>
                        <img src={taskOrange} alt="Inbox" />
                    </button>}

                    {inboxOpen ? '' :
                    <button className='bg-primaryLightGray w-[60px] h-[60px] rounded-full flex justify-center items-center my-auto'
                        onClick={handleClickInboxOpen}>
                        <img src={inboxPurple} alt="Inbox" />
                    </button>}
                </> 
            : ''}

            {inboxOpen || taskOpen ? '' : <button className='bg-primaryBlue w-[68px] h-[68px] rounded-full flex justify-center items-center'
                onClick={handleClickFlash}>
                <img src={flash} alt="flash" />
            </button>}

            {inboxOpen ?
                <div className='flex'>
                    <button className='bg-primaryDarkGray w-[68px] h-[68px] rounded-full flex justify-center items-center'
                        onClick={handleClickInboxClose}/>
                    <button className='bg-indicatorPurple w-[68px] h-[68px] rounded-full flex justify-center items-center ml-[-53px]'>
                        <img src={inboxWhite} alt="flash" />
                    </button>
                </div>
            : ''}

            {taskOpen ?
                <div className='flex'>
                    <button className='bg-primaryDarkGray w-[68px] h-[68px] rounded-full flex justify-center items-center'
                        onClick={() => {handleClickTaskClose()}}/>
                    <button className='bg-indicatorOrange w-[68px] h-[68px] rounded-full flex justify-center items-center ml-[-53px]'>
                        <img src={taskWhite} alt="flash" />
                    </button>
                </div> 
            : ''}
        </div>
    </div>
  )
}

export default FlashButton