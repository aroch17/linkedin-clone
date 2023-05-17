import React, { useEffect, useState } from 'react'
import './styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'
import { db } from '../firebase'
import { collection, onSnapshot, serverTimestamp, addDoc, orderBy, query } from 'firebase/firestore';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser)

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'posts2'), orderBy('timestamp', 'desc'))
        // the onsnapshot function executes everytime there is a change in the database
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    data: doc.data(),
                }
            }))
        })
    }, [])

    const addPost = (event) => {
        event.preventDefault()
        addDoc(collection(db, 'posts2'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.profilePic,
            timestamp: serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={addPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article ' color='#7fc15e' />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map((post) => {
                    return <Post key={post.id}
                        name={post.data.name}
                        description={post.data.description}
                        message={post.data.message}
                        photoUrl={post.data.photoUrl} />
                })}
            </FlipMove>
            {/* flip move is used to animate the creation of posts */}
        </div>
    )
}

export default Feed