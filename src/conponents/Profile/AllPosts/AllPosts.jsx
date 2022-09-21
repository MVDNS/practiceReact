import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

import s from './AllPosts.module.css';

let posts = [
	{id: 1, message: 'this is first post', likesCount: 1},
	{id: 1, message: 'this is second post', likesCount: 5},
	{id: 1, message: 'this is third post', likesCount: 8},
]

let postElement = posts.map( p => <Post message={p.message}  like={p.likesCount}/>)

function AllPosts() {
	return (
		<div className={s.allPosts}>
				<CreatePost />
				{ postElement }
		</div>
	)
}

export default AllPosts