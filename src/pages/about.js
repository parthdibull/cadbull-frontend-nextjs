import MainLayout from "@/layouts/MainLayout";

const About = () => {
  return ( 
    <div>About</div>
   );
}

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

 
export default About;