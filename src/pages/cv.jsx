import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const CV = () => {
  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={"Rachel Wallis CV"} />

      {/* Profile Section */}
      <section>
        <div className="mil-section-title mil-up mil-left mil-mb-90">
          <div className="mil-divider"></div>
          <h3>Profile</h3>
        </div>
        <p>
          I am a Product Designer with extensive experience in end-to-end product design, primarily in B2B SaaS products. My expertise lies in delivering intuitive, scalable designs using Figma and building efficient, reusable Design Systems that align with both user and business goals.
        </p>
        <p>
          Over the years, I have designed customer-facing platforms and back-office solutions, focusing on user-centric experiences that drive engagement and improve usability. My metrics-driven approach ensures measurable improvements in user satisfaction and business outcomes.
        </p>
      </section>

      {/* Work Experience Section */}
      <section>
        <div className="mil-section-title mil-up mil-left mil-mb-90">
          <div className="mil-divider"></div>
          <h3>Work Experience</h3>
        </div>

        <div className="mil-timeline mil-mb-90">
          <div className="mil-timeline-track"></div>
          <ul>
            <li className="mil-up">
              <h4>Co-Owner - DotStudio.uk</h4>
              <div className="mil-text-sm">07/2024 - Present</div>
              <p>Freelance design system/website designer.</p>
            </li>
            <li className="mil-up">
              <h4>Senior UX Product Designer - Checkatrade.com</h4>
              <div className="mil-text-sm">03/2024 - 07/2024</div>
              <p>Led UI design for B2B Partnerships, managed UX redesigns, and improved user satisfaction by 20% through various design initiatives.</p>
            </li>
            <li className="mil-up">
              <h4>Senior Product Designer - Feefo</h4>
              <div className="mil-text-sm">06/2022 - 03/2024</div>
              <p>Streamlined UI design processes, introduced user-testing methodologies, and led cross-functional teams to enhance user engagement.</p>
            </li>
            <li className="mil-up">
              <h4>Product Designer - Feefo</h4>
              <div className="mil-text-sm">12/2021 - 06/2022</div>
              <p>Redesigned B2C platform, boosting page views by 9% and collaborating with cross-functional teams for high-quality designs.</p>
            </li>
            <li className="mil-up">
              <h4>UX Lead - Zupa</h4>
              <div className="mil-text-sm">03/2020 - 12/2021</div>
              <p>Implemented a UX research framework, reducing user friction by 15% and increasing System Usability Score by 12 points.</p>
            </li>
            <li className="mil-up">
              <h4>Senior UX Engineer - Warp Technology</h4>
              <div className="mil-text-sm">08/2019 - 03/2020</div>
              <p>Promoted accessible design practices, improving usability by 30%, and led the development of front-end design systems.</p>
            </li>
            <li className="mil-up">
              <h4>Media Development Manager - Babcock International</h4>
              <div className="mil-text-sm">10/2018 - 08/2019</div>
              <p>Developed a UX research framework and design system, improving collaboration and reducing design-related development time.</p>
            </li>
            <li className="mil-up">
              <h4>UX/UI Manager - Maru Group</h4>
              <div className="mil-text-sm">07/2008 - 10/2018</div>
              <p>Led design teams, created user-friendly interfaces for B2B/B2C platforms, and developed data visualization tools for stakeholders.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="mil-section-title mil-up mil-left mil-mb-90">
          <div className="mil-divider"></div>
          <h3>Skills</h3>
        </div>
        <p><strong>Design:</strong> UI Design, UX Design, Figma, Design Systems, Design Tokens</p>
        <p><strong>UX:</strong> Wireframing, Usability Testing, Prototyping, Workshops, User Journeys, Card Sorting</p>
        <p><strong>Dev:</strong> HTML, SCSS, Jira, Git</p>
        <p><strong>Agile:</strong> Agile Methodologies</p>
      </section>

      {/* Strengths Section */}
      <section>
        <div className="mil-section-title mil-up mil-left mil-mb-90">
          <div className="mil-divider"></div>
          <h3>Strengths</h3>
        </div>
        <p>Creative, Analytical, Collaborative, User-Focused, Detail-Oriented, Excellent Communicator, Metric Focused, Strategic Thinker.</p>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </Layouts>
  );
};

export default CV;