import HeadingImage from "@/assets/images/heading-image.png"
const SectionHeading = ({ subHeading, mainHeading, mainHeadingBold, alignment }) => {

  return (
    <div className={`position-relative d-inline-block ${alignment}`}>
      <h6 className="d-inline-block mb-2">{subHeading}</h6>
      <div className="heading-image-wrapper"> <img src={HeadingImage.src} alt="headingImage" className="img-fluid" /></div>
      <h3>{mainHeading} <span>{mainHeadingBold}</span></h3>
    </div>
  );
}

export default SectionHeading;