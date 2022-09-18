import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

import s from './AllPosts.module.css';


function AllPosts() {
	return (
		<div className={s.allPosts}>
				<CreatePost />
				<Post message = 'this is one post' like='12'/>
				<Post message = 'this is two post' like='5'/>
		</div>
	)
}

export default AllPosts