import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

import s from './AllPosts.module.css';


function AllPosts(props) {
	let postElement = props.posts.map( p => <Post message={p.message}  like={p.likesCount}/>)
	return (
		<div className={s.allPosts}>
				<CreatePost />
				{ postElement }
		</div>
	)
}

export default AllPosts