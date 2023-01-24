// write basic hooks react component named MultiSelect

import { useState } from 'react'

interface MultiSelectProps {
    title: string
    optionsList: string[]
    className?: string
    onItemChange?: (index: number) => void
}
const ChipMultiSelect = ({ title, optionsList, className, onItemChange }: MultiSelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickedItem = (indexClicked: number) => {
        console.log('clicked', indexClicked)
        if (onItemChange)
            onItemChange(indexClicked)
    }
    return (
        // center vertically and horizontally
        <>

            {/* <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {optionsList.map((option: string, index: number) => (
                    <li key={`${title}_multiSelectKey_${index}`} onClick={() => onClickedItem(index)}>
                        <a>{option}</a>
                    </li>
                ))}
            </ul> */}
            <div className="relative inline-block text-left">
                <div>
                    <span className="rounded-md shadow-sm">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                            Select an option
                            <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </span>
                </div>
                <div className={`${isOpen ? "" : 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}>
                    <div className="rounded-md bg-white shadow-xs">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Option 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChipMultiSelect
// 