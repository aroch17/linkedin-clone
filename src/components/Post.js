import { Avatar } from '@mui/material'
import ThumbsUpSharpIcon from '@mui/icons-material/ThumbUpSharp'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './styles/Post.css'

// the forward ref is used to forward the reference of the object
// that needs to be animated
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
                <div className="post__info">
                    <h2>{name} </h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbsUpSharpIcon} title='Like' color='grey' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='grey' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='grey' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='grey' />
            </div>
        </div>
    )
})

export default Post