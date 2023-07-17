import HeadingImage from "@/assets/images/heading-image.png"
const SectionHeading = ({ subHeading, mainHeading, mainHeadingBold }) => {

  return (
    <div className={`position-relative d-inline-flex`}>
      <div className="heading-image-wrapper"> <img src={HeadingImage.src} alt="headingImage" className="img-fluid" /></div>
      <div>
        <h6 className="d-inline-block mb-3">{subHeading}</h6>
        <h3>{mainHeading} <span>{mainHeadingBold}</span></h3>
      </div>
    </div>
  );
}

export default SectionHeading;