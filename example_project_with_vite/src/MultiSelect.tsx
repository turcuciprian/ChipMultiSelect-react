// write basic hooks react component named MultiSelect

import { useState } from 'react'

interface MultiSelectProps {
    title: string
    optionsList: string[]
    className?: string
    onItemChange?: (index:number) => void
}
const ChipMultiSelect = ({ title, optionsList, className, onItemChange }: MultiSelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickedItem = (indexClicked: number) => {
        console.log('clicked', indexClicked)
        onItemChange(indexClicked)
    }
    return (
        // center vertically and horizontally
        <>
            <div className={isOpen ? "dropdown-open" : "dropdown"} onClick={() => setIsOpen(!isOpen)}>
                <label tabIndex={0} className="btn m-1">{title}</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {optionsList.map((option: string, index: number) => (
                        <li key={`${title}_multiSelectKey_${index}`} onClick={() => onClickedItem(index)}>
                            <a>{option}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ChipMultiSelect
// 