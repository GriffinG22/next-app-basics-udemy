import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/Item1">Item1</Link></li>
        <li><Link href="/news/Item2">Item2</Link></li>
      </ul>
    </Fragment>
  )
}

export default NewsPage;