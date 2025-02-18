import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import SkillsSection from "@components/sections/Skills";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";

const Home = (props) => {
  return (
    <Layouts fullWidth>
      <HeroOneSection />
      <AboutSection />
      <SkillsSection />
      <LatestPostsSection posts={props.posts} />
      <CallToActionSection />
    </Layouts>
  );
};
export default Home;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}