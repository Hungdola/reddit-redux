import React from 'react'
import '../Edit/edit.css'
import '../Posts/post.css'

const Input = (props) => {
    const {data, setData, label, inputType, classStyle} = props
  return (
    <>
        <label>{label}</label>
        {inputType === "textarea" ? (
            <textarea type="text" placeholder={data} className={classStyle} onChange={(e) => {
                setData(e.target.value)
            }}></textarea>
        ) : (
            <input type="text" placeholder={data} onChange={(e) => {
                setData(e.target.value)
           }}/>
        )}
        
    </>
  )
}

export default Input