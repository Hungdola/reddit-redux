import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/apiRequests'
import Input from '../InputFields/Input'
import './edit.css'
import images from '../../assets/images'

const EditPage = (props) => {
    const {setIsEdit} = props
    const avaUrl = [
        images.img1,
        images.img2,
        images.img3,
        images.img4,
        images.img5,
        images.img6,
    ]

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)

    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [theme, setTheme] = useState(user.theme)
    const [url, setUrl] = useState(user.avaUrl)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEdit(false)

        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme
        }
        updateUser(updatedUser, dispatch)
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className='close'>SAVE</button>
                    <div className="edit-profile">
                        Edit Profile
                    </div>
                    <div className="input-container">

                    <Input label="Display Name" data={user.name} setData={setName}></Input>                     
                    <Input label='Age' data={user.age} setData={setAge}></Input>                     
                    <Input inputType="textarea" classStyle="input-about" label='About' data={user.about} setData={setAbout}></Input>

                    <label>Profile picture</label>
                    <div className="input-image-container">
                        {avaUrl.map((url) => {
                            return (
                                <>
                                    <img 
                                        onClick={(e) => {
                                            setUrl(e.target.src)
                                        }}
                                        src={url} className='input-image' alt=''></img>
                                </>
                            )
                        })}
                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input type="color" className='theme-color' onChange={(e) =>{
                            setTheme(e.target.value)
                        }}/>
                    </div>
                    </div>
                </section>
        </form>
        </div>
    )
}

export default EditPage