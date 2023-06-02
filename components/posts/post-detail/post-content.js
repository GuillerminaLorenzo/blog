import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import PostContentStyle from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={PostContentStyle.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
