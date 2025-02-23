import Layouts from "@layouts/Layouts";
import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import RelatedPostsSection from "@components/sections/RelatedPosts";
import SubscribeSection from "@components/sections/Subscribe";

const PostsDetail = (props) => {
  const postData = props.data;

  return (
    <Layouts fullWidth={postData.fullWidth} rightPanelBackground={postData.image}>
      {/* banner */}
      <section className="mil-banner-sm mil-center">
        <div className="mil-banner-top mil-up" />
        <div className="mil-banner-title">
          <ul className="mil-puplication-details mil-up mil-mb-60">
            <li className="mil-puplication-author">
              <img src={postData.author.avatar} alt={postData.author.name} />
              <span className="mil-upper mil-dark">{postData.author.name}</span>
            </li>
            <li>
              <span className="mil-upper mil-dark">Date:</span>&nbsp;&nbsp;
              <span className="mil-upper"><Date dateString={postData.date} /></span>
            </li>
            <li className="mil-upper mil-accent">{postData.category}</li>
          </ul>
          <h1 className="mil-h1-sm mil-up mil-mb-60">{postData.title}</h1>
        </div>
      </section>
      {/* banner end */}

      {/* publication */}
      <section className="mil-p-0-60">
        {postData.sections?.map((section, index) => (
          <div key={`section-${index}`} className="mil-section mil-up mil-mb-60">
            <div className="mil-text mil-mb-30" dangerouslySetInnerHTML={{ __html: section.content }} />
            
            {section.image && (
              <figure style={{ textAlign: "center", margin: "20px 0" }}>
                <img src={section.image.src} alt={section.image.alt} style={{ width: "100%", height: "auto" }} />
                {section.image.caption && (
                  <figcaption style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#555", marginTop: "8px" }}>
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        ))}

        {postData.additional?.enabled === 1 && (
          <div className="mil-text mil-up" dangerouslySetInnerHTML={{ __html: postData.additional.content }} />
        )}
      </section>
      {/* publication end */}

      <RelatedPostsSection items={props.related} />
      <SubscribeSection />
    </Layouts>
  );
};

export default PostsDetail;

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const relatedPosts = await getRelatedPosts(params.id);

  return { props: { data: postData, related: relatedPosts } };
}