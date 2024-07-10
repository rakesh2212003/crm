import React, { useState } from 'react'

const Input = ({type,id,name,label,isRequired,stateValue,stateFunction}) => {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className='relative w-full flex justify-start items-center border border-borderColor py-2 rounded-lg'>
            <label
                htmlFor={id}
                className={`absolute transition-all duration-300 text-xs left-2 pointer-events-none
                    ${isFocus || stateValue !== "" ? '-translate-y-7 -translate-x-1' : 'translate-y-0'}
                `}
            >
                {label}
                {isRequired && (
                    <span className='text-red-500'>*</span>
                )}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={stateValue}
                onChange={(e) => stateFunction(e.target.value)}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                className='w-full bg-transparent px-2'
            />
        </div>
    )
}

export default Input