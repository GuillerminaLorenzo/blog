import Link from "next/link";
import Image from "next/image";

import PostItemStyle from "./post-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={PostItemStyle.post}>
      <Link>
        <div className={PostItemStyle.image}>
          <Image scr={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={PostItemStyle.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
