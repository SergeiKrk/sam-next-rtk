import Link from "next/link";
import { getSortedPostsData, getAllPostIds } from "../../lib/posts";

export default function SamogonPage({ allPostsData }) {
  return (
    <div>
      <h2>Blog Markdown</h2>
      <ul>
        {allPostsData.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/samogon/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
