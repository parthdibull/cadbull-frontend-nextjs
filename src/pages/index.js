import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { Fragment } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import Icons from '@/components/Icons';
import BIM1 from "@/assets/icons/BIM1.png";
import BIM2 from "@/assets/icons/BIM2.png";
import BIM3 from "@/assets/icons/BIM3.png";
import BIM4 from "@/assets/icons/BIM4.png";
import BIM5 from "@/assets/icons/BIM5.png";
import drawing1 from "@/assets/images/drawing-image.png";
import premium from "@/assets/icons/premium.png";
import save from "@/assets/icons/save.png";
import heart from "@/assets/icons/heart.png";


const drawings = [
  { img: BIM1, type: "DWG", description: "CAD BLOCKS" },
  { img: BIM2, type: "BIM", description: "BIM OBJECTS" },
  { img: BIM3, type: "SKP", description: "3D MODELS" },
  { img: BIM4, type: "MAX", description: "3D MODELS" },
  { img: BIM5, type: "3DS", description: "3D STUDIO MAX" }
]
const projects = [
  {
    id: 1,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  },
  {
    id: 2,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  },
  {
    id: 3,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  },
  {
    id: 4,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  },
  {
    id: 5,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  },
  {
    id: 6,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369
  }
]


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Cadbull</title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>

      {/* Hero section  */}
      <section className='hero py-3 py-md-5'>
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-md-12">
              <div className='text-center mb-md-5 mb-3'>
                <h1 className='mb-3'>World Largest 2d <br /><span>CAD Library.</span></h1>
                <p className='mb-3 mb-md-5'><span className='text-danger'>254195+</span> Free & Premium CADFiles</p>
                <Link href="" className="btn btn-primary">VIEW PROJECTS</Link>
              </div>
              {/* Form  */}
              <form className='mx-auto mb-md-5'>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <Icons.Search />
                  </span>
                  <input type="text" className="form-control  border-start-0 border-end-0 rounded-end-0 ps-0" placeholder="For e.g. House Design" aria-label="For e.g. House Design" />
                  <span className="input-group-text p-0" id="basic-addon2">
                    <button type='submit' className='btn btn-secondary rounded-start-0'>SEARCH</button>
                  </span>
                </div>
              </form>
              {/* Drawing Type  */}
              <div className='drawing-type-wrapper p-2 p-md-3 rounded row row-cols-5 gx-0'>
                {
                  drawings.map((drawing, index) => {
                    return (
                      <div className='col'>
                        <div div key={index} className='d-flex align-items-center gap-md-2' >
                          <img src={drawing.img.src} alt="icon" className='img-fluid d-none d-md-block' />
                          <div>
                            <h6 className='mb-1'>{drawing.type}</h6>
                            <p>{drawing.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Project of the Day  */}
      <section className='py-md-5 py-3'>
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-md-12">
              <div className='d-flex justify-content-between align-items-md-center flex-column flex-md-row gap-5'>
                <div>
                  <SectionHeading subHeading={"DISCOVER"} mainHeading={"Project of the day"} mainHeadingBold={"Cadbull"} alignment="" />
                </div>
                <div className='w-100'>
                  <div className='d-flex gap-3 justify-content-end flex-column flex-md-row'>
                    <form>
                      <div className="input-group">
                        <span className="input-group-text bg-white" id="basic-addon1">
                          <Icons.Search />
                        </span>
                        <input type="text" className="form-control  border-start-0 border-end-0 rounded-end-0 ps-0" placeholder="For e.g. House Design" aria-label="For e.g. House Design" />
                        <span className="input-group-text p-0" id="basic-addon2">
                          <button type='submit' className='btn btn-secondary rounded-start-0'>SEARCH</button>
                        </span>
                      </div>
                    </form>
                    {/* Sort by : DWG */}
                    <div className="d-flex">
                      <span className="input-group-text bg-white border-end-0 rounded-end-0" id="basic-addon1">
                        Sort by :
                      </span>
                      <select className="form-select border-start-0  rounded-start-0" aria-label=".form-select-sm example">
                        <option selected>DWG</option>
                        <option value="1">BIM</option>
                        <option value="2">SKP</option>
                        <option value="3">MAX</option>
                        <option value="3">3DS</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {
              projects.map((project) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={project.id}>
                    <div className='project-day-card h-100'>
                      <div className='project-day-card-image mb-3 position-relative'>
                        <img src={project.image.src} alt="" className='w-100 img-fluid' />
                        <div className='action-buttons-wrapper position-absolute bottom-0 end-0 d-inline-flex flex-column gap-1 pe-2 pb-2'>
                          <button className='border-0 bg-transparent p-0 shadow-none d-in'><img src={heart.src} className='border-0' alt="icon" /></button>
                          <button className='border-0 bg-transparent p-0 shadow-none'><img src={save.src} className='border-0' alt='icon' /></button>
                        </div>
                      </div>
                      <div className='project-day-card-description d-flex justify-content-between'>
                        <p className='ps-2'>{project.title}</p>
                        <div>
                          <span className='badge bg-secondary text-white'>{project.type}</span>
                          <div className='d-flex gap-1 mt-2 align-items-center'>
                            <span><Icons.Eye /></span>
                            <span>{project.views}</span>
                          </div>
                        </div>
                      </div>
                      <div className='text-end mt-2'>
                        <img src={premium.src} alt="icon" className='img-fluid' />
                      </div>
                      <div className='project-day-card-link'>
                        <p className='pe-2'>MORE DETAILS</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* Pagination  */}
          <div className="row mt-4 mt-md-5">
            <div className="col-md-12">
              <div className='text-center'>
                <nav aria-label="Page navigation justify-content-center">
                  {/* small screens  */}
                  <ul className="pagination gap-3 shadow-none d-md-none">
                    <li className="page-item">
                      <Link className="page-link text-white d-inline-flex gap-2" href="" aria-label="Previous">
                        <span aria-hidden="true"><Icons.WhiteArrowLeft /></span>
                        <span>Previous</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link text-white d-inline-flex gap-2" href="" aria-label="Next">
                        <span>Next</span>
                        <span aria-hidden="true"><Icons.WhiteArrowRight /></span>
                      </Link>
                    </li>
                  </ul>
                  {/* large screens  */}
                  <ul className="pagination d-none d-md-inline-flex">
                    <li className="page-item">
                      <Link className="page-link" href="" aria-label="Previous">
                        <span aria-hidden="true"><Icons.WhiteArrowLeft /></span>
                      </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" href="">1</Link></li>
                    <li className="page-item"><Link className="page-link active" href="">2</Link></li>
                    <li className="page-item"><Link className="page-link" href="">3</Link></li>
                    <li className="page-item"><Link className="page-link" href="">4</Link></li>
                    <li className="page-item"><Link className="page-link" href="">5</Link></li>
                    <li className="page-item"><Link className="page-link" href="">6</Link></li>
                    <li className="page-item"><Link className="page-link" href="">7</Link></li>
                    <li className="page-item"><Link className="page-link" href="">8</Link></li>
                    <li className="page-item"><Link className="page-link" href="">9</Link></li>
                    <li className="page-item"><Link className="page-link" href="">10</Link></li>
                    <li className="page-item">
                      <Link className="page-link" href="" aria-label="Next">
                        <span aria-hidden="true"><Icons.WhiteArrowRight /></span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
