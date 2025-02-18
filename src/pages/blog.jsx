import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "@library/posts";

const Blog2 = ( { posts, totalPosts, currentPage } ) => {
  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={"Blog"} breadTitle={"Blog"} align={"center"} />

      {/* blog */}
      <section>
          <div className="row justify-content-between align-items-center">
              <PaginatedBlog
                items={posts}
              />

              <Pagination
                currentPage={currentPage}
                totalItems={totalPosts}
                perPage={PER_PAGE}
                renderPageLink={(page) => `/blog/page/${page}`}
              />
          </div>
      </section>
      {/* blog end */}

      <CallToActionSection />

    </Layouts>
  );
};
export default Blog2;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData( PER_PAGE, 1 );

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1
    }
  }
}