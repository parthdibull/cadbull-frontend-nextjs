import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { Fragment } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'
import Icons from '@/components/Icons';
import img from "@/assets/icons/drawing-type-1.png"




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



      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className='d-flex w-100'>
                <SectionHeading subHeading={"FIND LATEST"} mainHeading={"Cadbull"} mainHeadingBold={"Categories"} />
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
