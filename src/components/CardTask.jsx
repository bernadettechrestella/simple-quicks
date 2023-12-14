import React, { useState } from 'react'
import threeDots from '../assets/icons/threeDots.svg'
import arrowDown from '../assets/icons/arrowDown.svg'
import arrowUp from '../assets/icons/arrowUp.svg'
import clock from '../assets/icons/clock.svg'
import pencil from '../assets/icons/pencil.svg'
import { useGetTask } from '../hooks/useGetTask'

const CardTask = () => {
  const {task} = useGetTask();

  const [openItems, setOpenItems] = useState([]);

  const handleClickToggleOpen = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  console.log(task)

  return (
    <div className='bg-white mb-[13px] rounded-[8px] w-[734px] h-[737px] px-[32px] py-[24px]'>
      <div className='mb-[22px] flex justify-between h-[40px]'>
        <div className="relative inline-block text-left w-[118px]">
          <button type="button" class="inline-flex justify-center w-full rounded-[5px] border border-primaryGray px-4 py-2 font-bold text-primaryDarkGray">
            My Task
            <img src={arrowDown} alt="" className='ml-[12px] my-auto w-[10px]'/>
          </button>

          <div class="hidden absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Personal Errands</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Urgent To-Do</a>
            </div>
          </div>
        </div>
        <button className='bg-primaryBlue text-white rounded-[5px] px-[16px]'>New Task</button>
      </div>

      <div className='overflow-auto h-[620px]'>
        
        {task && task.map((item) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div key={item.id}>
              <div className='flex mb-[16px] w-full'>
              <label class="inline-flex items-center flex-grow">
                <input type="checkbox" class="form-checkbox text-primaryGray checked:bg-primaryGray h-[18px] w-[18px]"/>
                <span class="ml-[22px] font-bold mr-[56px] text-base/3">{item.todo}</span>
              </label>
              <div className='flex justify-end right-0 my-auto'>
                <p className='mr-[20px] text-sm text-indicatorRed'>2 Days Left</p>
                <p className='mr-[10px] text-sm'>12/06/2021</p>

                {isOpen ?
                  <img src={arrowUp} alt="" className='mr-[15px] cursor-pointer' onClick={() => handleClickToggleOpen(item.id)}/>
                  :
                  <img src={arrowDown} alt="" className='mr-[15px] cursor-pointer' onClick={() => handleClickToggleOpen(item.id)}/>
                }

                <img src={threeDots} alt="" className='h-[14px] w-[16px] mr-[25px] cursor-pointer'/>
              </div>
              </div>

              {isOpen ?
                <>
                  <div className='flex ml-[38px] gap-[12px] mb-[13px]'>
                    <img src={clock} alt="" />
                    <input type="date" name="" id="" className='border-[1px] border-primaryGray rounded-[5px] px-[10px] h-[40px] text-primaryDarkGray'/>
                  </div>
                  <div className='flex ml-[38px] gap-[14px] mb-[22px]'>
                    <img src={pencil} alt="" className='align-top'/>
                    <p className='mr-[70px] text-base/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias dolorum natus neque error deleniti repellat vitae ipsa corrupti maiores.</p>
                  </div>
                </>
              : ''}

              <fieldset className="border-t border-primaryGray mb-[22px]"></fieldset>
            </div>
          )
          })
        }

      </div>
    </div>
  )
}

export default CardTask