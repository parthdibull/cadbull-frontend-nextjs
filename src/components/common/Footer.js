import logo from "@/assets/images/logo-footer.png";
import icon from "@/assets/icons/icon.png";
import arrow from "@/assets/icons/arrow.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-auto pt-4 pt-sm-5">
      <hr className="border-top-footer opacity-100 d-none d-lg-block" />
      <div className="container">
        <div className="footer-upper-wrapper">
          <div className="row d-lg-block d-none">
            <div className="col-md-12">
              <div className="logo-wrapper text-center">
                <img src={logo.src} alt="logo" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row mt-md-4 gy-4">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div>
                <h4 className="text-white mb-4">Get In Touch</h4>
                <ul className="list-unstyled d-flex gap-2 gap-md-4 flex-column">
                  <li>
                    <div className="d-flex align-items-start gap-2">
                      <img src={icon.src} alt="" />
                      <p className="text-white">403, Fortune Business Hub, Beside science city, Science City Road Sola, Ahmedabad, Gujarat 380060</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2 flex-column flex-xl-row">
                    <div className="d-flex align-items-center gap-2">
                      <img src={icon.src} alt="" />
                      <p className="text-white">+91 989 874 8697</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img src={icon.src} alt="" />
                      <p className="text-white">support@cadbull.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="text-start text-md-center">
                <img src={logo.src} alt="logo" className="img-fluid mb-3 d-block d-lg-none mx-md-auto" />
                <h4 className="text-white mb-md-4 d-none d-lg-block opacity-0">info</h4>
                <p className="text-white mb-3 mb-md-4">Cadbull is an exclusive forum that connects the creative community of innovative Auto cad designers, firms and organizations.</p>
                <ul className="list-unstyled d-flex gap-2 justify-content-md-center">
                  <li>
                    <a href=""> <img src={icon.src} alt="" /></a>
                  </li>
                  <li>
                    <a href=""> <img src={icon.src} alt="" /></a>
                  </li>
                  <li>
                    <a href=""> <img src={icon.src} alt="" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 col-xl-4">
              <div>
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="d-flex gap-5 justify-content-lg-between flex-lg-column gap-lg-2 gap-xl-5 flex-xl-row">
                  <ul className="list-unstyled d-flex flex-column gap-2 justify-content-center mb-0">
                    <li>
                      <Link href=""> <img src={arrow.src} alt="" /> <span>3d Drawing</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>CAD Architecture</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>CAD Landscape</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>CAD Machinery</span></Link>
                    </li>
                  </ul>
                  <ul className="list-unstyled flex-column d-flex gap-2 justify-content-center mb-0">
                    <li>
                      <Link href=""> <img src={arrow.src} alt="" /> <span> CAD Detail</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>  DWG Blocks</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>Electrical CAD</span></Link>
                    </li>
                    <li>
                      <Link href="">
                        <img src={arrow.src} alt="" />
                        <span>Furniture Blocks</span></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-top-footer opacity-100" />
      <div className="container">
        <div className="footer-lower-wrapper text-center">
          <div className="d-flex align-items-center gap-2 gap-md-3 flex-column-reverse flex-md-row pb-3 justify-content-md-center">
            <p className="text-white">&copy; 2022 <span className="text-danger">CADBULL</span> | All Rights Reserved.</p>
            <ul className="list-unstyled d-flex align-items-center gap-3 gap-md-4 mb-0 justify-content-center ">
              <li>
                <Link href="">Term & Conditionss</Link>
              </li>
              <li className="text-white">|</li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
              <li className="text-white">|</li>
              <li>
                <Link href="">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;