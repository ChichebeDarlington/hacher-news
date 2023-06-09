import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, nbPages, removeStory } = useGlobalContext();
  return (
    <section className="stories">
      {hits.map((story) => {
        console.log(story);
        const { objectID, title, num_comments, story_url, points, author } =
          story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <div>
              <a
                href={story_url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
