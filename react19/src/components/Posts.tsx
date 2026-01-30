// generate a lot of posts 
const posts = Array.from({length: 100000}, (_, index) => `Post ${index + 1}` )

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post}>
            {post}
        </div>
      ))}
    </div>
  )
}

export default Posts
