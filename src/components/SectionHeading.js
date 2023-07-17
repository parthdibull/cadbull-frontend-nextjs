import HeadingImage from "@/assets/images/heading-image.png"
const SectionHeading = ({ subHeading, mainHeading, mainHeadingBold, alignment }) => {

  return (
    <div className={`position-relative d-inline-flex main-heading-wrapper ${alignment}`}>
      <div className="heading-image-wrapper"> <img src={HeadingImage.src} alt="headingImage" className="img-fluid d-lg-none" /></div>
      <div>
        <h6 className="d-inline-block mb-3">{subHeading}</h6>
        <h3>{mainHeading} <span>{mainHeadingBold}</span></h3>
      </div>
    </div>
  );
}

export default SectionHeading;