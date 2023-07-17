import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { Fragment } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import Icons from '@/components/Icons';
import img from "@/assets/icons/drawing-type-1.png";
import drawing1 from "@/assets/images/drawing-image.png";
import paid from "@/assets/icons/paid.png";




const drawings = [
  { img: img, type: "DWG", description: "CAD BLOCKS" },
  { img: img, type: "BIM", description: "BIM OBJECTS" },
  { img: img, type: "SKP", description: "3D MODELS" },
  { img: img, type: "MAX", description: "3D MODELS" },
  { img: img, type: "3DS", description: "3D STUDIO MAX" }
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
              <div className='text-center mb-5'>
                <h1 className='mb-3'>World Largest 2d <br /><span>CAD Library.</span></h1>
                <p className='mb-5'><span className='text-danger'>254195+</span> Free & Premium CADFiles</p>
                <Link href="" className="btn btn-primary">VIEW PROJECTS</Link>
              </div>
              {/* Form  */}
              <form className='mx-auto mb-5'>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-white" id="basic-addon1">
                    <Icons.Search />
                  </span>
                  <input type="text" class="form-control  border-start-0 border-end-0 rounded-end-0 ps-0" placeholder="For e.g. House Design" aria-label="For e.g. House Design" />
                  <span class="input-group-text p-0" id="basic-addon2">
                    <button type='submit' className='btn btn-secondary rounded-start-0'>SEARCH</button>
                  </span>
                </div>
              </form>
              {/* Drawing Type  */}
              <div className='drawing-type-wrapper p-3 rounded d-flex justify-content-evenly'>
                {
                  drawings.map((drawing, index) => {
                    return (
                      <div key={index} className='d-flex align-items-center gap-2'>
                        <img src={drawing.img.src} alt="icon" className='img-fluid' />
                        <div>
                          <h6 className='mb-1'>{drawing.type}</h6>
                          <p>{drawing.description}</p>
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
      <section className='py-5'>
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-md-12">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <SectionHeading subHeading={"DISCOVER"} mainHeading={"Project of the day"} mainHeadingBold={"Cadbull"} alignment="" />
                </div>
                <div className='w-100'>
                  <div className='d-flex gap-3 justify-content-end'>
                    <form>
                      <div class="input-group">
                        <span class="input-group-text bg-white" id="basic-addon1">
                          <Icons.Search />
                        </span>
                        <input type="text" class="form-control  border-start-0 border-end-0 rounded-end-0 ps-0" placeholder="For e.g. House Design" aria-label="For e.g. House Design" />
                        <span class="input-group-text p-0" id="basic-addon2">
                          <button type='submit' className='btn btn-secondary rounded-start-0'>SEARCH</button>
                        </span>
                      </div>
                    </form>
                    {/* Sort by : DWG */}
                    <div class="d-flex">
                      <span class="input-group-text bg-white border-end-0 rounded-end-0" id="basic-addon1">
                        Sort by :
                      </span>
                      <select class="form-select border-start-0  rounded-start-0" aria-label=".form-select-sm example">
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

          <div className="row">
            <div className="col-md-4">
              <div className='project-day-card'>
                <div className='project-day-card-image mb-3'>
                  <img src={drawing1.src} alt="" className='w-100 img-fluid' />
                </div>
                <div className='project-day-card-description d-flex justify-content-between'>
                  <p className='ps-2'>Ground Floor Bathroom Details And Dimension Autocad Fil</p>
                  <div>
                    <span className='badge bg-secondary text-white'>DWG</span>
                    <div className='d-flex gap-1 mt-1 align-items-center'>
                      <span><Icons.Eye /></span>
                      <span>369</span>
                    </div>
                  </div>
                </div>
                <div className='text-end mt-2'>
                  <img src={paid.src} alt="icon" className='img-fluid' />
                </div>
                <div className='project-day-card-link'>
                  <p>MORE DETAILS</p>
                </div>
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
