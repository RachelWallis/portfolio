import Data from "@data/sections/about.json";

const AboutSection = () => {
    return (
        <>
            {/* about */}
            <section id="about" className="mil-p-0-90">
                <div className="mil-oval-frame-2 mil-mb-90">
                    <img src={Data.avatar.image} alt={Data.avatar.alt} />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mil-center">
                            <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="mil-quote mil-up mil-mb-30"><i className="fas fa-quote-left" /></div>
                            <p className="mil-up mil-mb-30">{Data.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;