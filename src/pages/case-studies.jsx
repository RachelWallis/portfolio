import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@/src/lib/case-studies";

import Link from "next/link";

const CaseStudies = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={"Case Studies"} breadTitle={"Case Studies"} align={"center"} />

      <ProjectsMasonry projects={props.projects} masonry />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default CaseStudies

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}