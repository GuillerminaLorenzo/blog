import PostsGrid from "../posts/posts-grid";
import FeaturedPostsStyle from "./featured-posts.module.css";

export default function FeaturedPosts(props) {
  return (
    <section className={FeaturedPostsStyle.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
