import { ArrowDown, ArrowDownToDot, ChevronDown } from 'lucide-react'
import React from 'react'

const MobileResultNav = () => {
  return (
    <div className='w-full flex items-center justify-center md:hidden'>
        <div className="flex items-center justify-center py-1 px-8 bg-[#D9D9D9] rounded-4xl shadow-lg">
            <ChevronDown className='text-gray-900'/>
        </div>
        
    </div>
  )
}

export default MobileResultNav