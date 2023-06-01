import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import PostContentStyle from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={PostContentStyle.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
