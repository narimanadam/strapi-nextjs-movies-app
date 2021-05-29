import React, { useMemo } from "react";
import { markdown } from "markdown";
import { ArticleItem } from "@movies-app/components";

const BlogItemPage = ({ article }) => {
  const parsedBody = useMemo(() => markdown.toHTML(article.body), [article]);

  return (
    <div className="container mx-auto mt-8">
      <ArticleItem
        title={article.title}
        author={article.author}
        date={article.date}
        body={parsedBody}
      />
    </div>
  );
};

export default BlogItemPage;

BlogItemPage.getInitialProps = async (context) => {
  const { API_URL } = process.env;

  const { id } = context.query;
  const res = await fetch(`${API_URL}/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
