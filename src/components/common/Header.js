import Link from "next/link";
import Icons from "../Icons";
import logo from "@/assets/images/logo.png";


const links = [
  {
    url: "", title: "HOME", active: true
  },
  {
    url: "", title: "CATEGORIES", active: false
  },
  {
    url: "", title: "UPLOAD", active: false
  },
  {
    url: "", title: "FILE", active: false
  },
  {
    url: "", title: "PRICING", active: false
  },
  {
    url: "", title: "HOUSE", active: false
  },
  {
    url: "", title: "PLAN", active: false
  },
  {
    url: "", title: "ABOUT US", active: false
  },
  {
    url: "", title: "CONTACT US", active: false
  }
]

const Header = () => {
  return (
    <header className="py-1">
      <div className="container">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <Link href="/"><img src={logo.src} alt="logo" className="logo" /></Link>
            <button className="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><Icons.HamBurger /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mt-3 mt-xl-0 me-auto mb-2 mb-lg-0 mx-auto d-flex gap-lg-4 gap-3">
                {
                  links.map((link, index) => {
                    return (
                      <li className="" key={index}>
                        <Link className={`${link.active ? 'active' : ''}`} aria-current="page" href={link.url}>{link.title}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <Link href={''} className="btn btn-secondary">LOGIN</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;