import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriceMe,handleSurpriceMe}) => {
  return (
    <div >
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-grey-900'>
          {labelName}
        </label>
        {isSurpriceMe && (
          <button type='button' 
          onClick={handleSurpriceMe}
          className="font-semibold 
          text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
              Surprise me
          </button>
        )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    </div>
  )
}

export default FormField
