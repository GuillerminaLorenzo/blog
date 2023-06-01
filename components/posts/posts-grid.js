import PostItem from "./post-item";
import PostGridStyle from "./post-item.module.css";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={PostGridStyle.grid}>
      {posts.map((post) => {
        <PostItem />;
      })}
    </ul>
  );
}
