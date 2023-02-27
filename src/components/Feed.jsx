import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeedNav from "./FeedNav";
import FeedPost from "./FeedPost";
import FeedSideBar from "./FeedSideBar";
import MobileCreatePost from "./MobileCreatePost";
import Spinner from "./Spinner";

const Feed = ({ joined, handleIsJoined, isLoggin, setIsLoggin }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { category } = useParams();

  const fetchData = async () => {
    const res = await fetch(
      "https://ahmed-abohmaid.github.io/ATG-Task/utils/data.json"
    );
    const data = await res.json();
    setIsLoading(true);

    return data;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="fixed bottom-[12px] right-[12px] z-30 sm:hidden">
        <MobileCreatePost isLoggin={isLoggin} setIsLoggin={setIsLoggin}/>
      </div>
      {isLoading && <Spinner message="We are adding new ideas to your feed!" />}
      <div className="container pt-10 mx-auto max-w-full">
        <FeedNav
          joined={joined}
          handleIsJoined={handleIsJoined}
          posts={posts}
        />
      </div>
      <div className="container pt-5 mx-auto max-w-full">
        <div className="grid grid-cols-7 gap-5">
          <div className="md:col-span-4 col-span-7">
            {posts
              .filter((post) => (category ? post.type === category : post))
              .map((post) => (
                <FeedPost key={post.id} post={post} />
              ))}
          </div>
          <div className="hidden md:block col-span-3 ml-auto">
            <FeedSideBar joined={joined} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
