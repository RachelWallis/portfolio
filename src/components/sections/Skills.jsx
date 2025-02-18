import Data from "@data/sections/skills.json";

const SkillsSection = () => {
  return (
    <>
        <div className="mil-section-title mil-up">
            <div className="mil-divider"></div>
            <h3>{Data.title}</h3>
        </div>

        {/* skills */}
        <section className="mil-p-90-30">
            <div className="row justify-content-between align-items-center">
                {Data.items.map((item, key) => (
                <div key={`skills-item-${key}`} className="col-lg-4">
                    <div className="mil-icon-box mil-center mil-mb-60">
                        <div className="mil-skill-icon mil-up">
                            <img src={item.icon} alt={item.title} className="mil-mb-30" />
                        </div>
                        <h5 className="mil-up mil-mb-30">{item.title}</h5>
                        <p className="mil-up mil-mb-30">{item.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
        {/* skills end */}
    </>
  );
};

export default SkillsSection;