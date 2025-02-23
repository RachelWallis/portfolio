import Layouts from "@layouts/Layouts";
import { getAllProjectsIds, getProjectData, getRelatedProjects } from "@/src/lib/case-studies";
import RelatedProjectsSection from "@/src/components/sections/RelatedCaseStudies";

const ProjectDetail = ({ data, related }) => {
  const postData = data;

  return (
    <Layouts fullWidth>

      {/* ---------- HERO SECTION ---------- */}
      {postData.hero?.enabled && (
        <section className="project-hero mil-portfolio-section">
          <img
            src={postData.hero.image}
            alt={postData.hero.alt || "Project hero"}
            className="project-hero__image"
          />
        </section>
      )}

      {/* ---------- PROJECT OVERVIEW ---------- */}
      <section className="mil-banner-sm mil-center mil-portfolio-section overview">
        <div className="mil-banner-title">
        <ul className="mil-puplication-details mil-up mil-mb-60">
                  {postData.details.map((item, key) => (
                  <li key={`project-details-item-${key}`}>
                    {item.label != "$category" &&
                    <>
                      <span className="mil-upper mil-dark">{item.label} </span>
                      &nbsp;&nbsp;
                      <span className="mil-upper">{item.value}</span>
                    </>
                    }
                    {item.label == "$category" &&
                    <>
                      <span className="mil-upper mil-accent">{postData.category}</span>
                    </>
                    }
                  </li>
                  ))}
              </ul>
        </div>
        <h1 className="mil-h1-sm mil-up mil-mb-60">{postData.title}</h1>
        </section>

      {/* ---------- INTRODUCTION ---------- */}
      {postData.intro?.enabled && (
        <section className="mil-p-0-30 mil-portfolio-section intro">
          <h4>Introduction</h4>
          <div dangerouslySetInnerHTML={{ __html: postData.intro.content }} />
        </section>
      )}

      {/* ---------- CHALLENGE ---------- */}
      {postData.challenge?.enabled && (
      <section className="mil-p-0-30 mil-portfolio-section challenge">
          <h4>{postData.challenge.heading || "Challenge"}</h4>
          <div dangerouslySetInnerHTML={{ __html: postData.challenge.content }} />
        </section>
      )}

      {/* ---------- SOLUTION ---------- */}
      {postData.solution?.enabled && (
      <section className="mil-p-0-30 mil-portfolio-section solution">
          <h4>{postData.solution.heading || "Solution"}</h4>
          <div dangerouslySetInnerHTML={{ __html: postData.solution.content }} />
        </section>
      )}

      {/* ---------- PROCESS WITH IMAGE ---------- */}
      {postData.process?.enabled && (
      <section className="mil-p-0-30 mil-portfolio-section process section-w-img">
          <div className="project-section__content">
            <h4>{postData.process.heading || "Process"}</h4>
            <div dangerouslySetInnerHTML={{ __html: postData.process.content }} />
          </div>
          {postData.img1?.image && (
            <div className="project-section__image">
              <img
                src={postData.img1.image}
                alt={postData.img1.alt || "Process visual"}
                className="responsive-img"
              />
            </div>
          )}
        </section>
      )}

      {/* ---------- IMPACT ---------- */}
      {postData.impact?.enabled && (
        <section className="mil-p-0-30 mil-portfolio-section impact">
          <h4>{postData.impact.heading || "Impact"}</h4>
          <div dangerouslySetInnerHTML={{ __html: postData.impact.content }} />
        </section>
      )}

      {/* ---------- OKRs ---------- */}
      {postData.okrs?.enabled && (
        <section className="mil-p-0-30 mil-portfolio-section okrs">
          <div className="project-section__content">
            <h4>{postData.okrs.heading || "OKRS"}</h4>
            <div dangerouslySetInnerHTML={{ __html: postData.okrs.content }} />
          </div>
        </section>
      )}


  {/* ---------- IMAGE GALLERY ---------- */}
  {postData.gallery?.enabled && (
    <section className="mil-portfolio-section project-gallery">
      <h4>Gallery</h4>
      <div className="project-gallery__grid">
        {postData.gallery.items.map((item, key) => (
          <figure key={`gallery-${key}`} className="project-gallery__item">
            <img
              src={item.image}
              alt={item.alt}
              className="responsive-img"
            />
            {item.caption && <figcaption className="project-gallery__caption">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )}

      {/* ---------- RELATED PROJECTS ---------- */}
      <RelatedProjectsSection items={related} />

    </Layouts>
  );
};

export default ProjectDetail;

// ---------- STATIC PATHS & PROPS ----------

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  const relatedPosts = await getRelatedProjects(params.id);

  return {
    props: {
      data: postData,
      related: relatedPosts,
    },
  };
}