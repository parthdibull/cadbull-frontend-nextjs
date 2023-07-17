// ******************* HamBurger *******************

const HamBurger = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#20325A" width={30} height={30}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

// ******************* Search *******************
const Search = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5B5B5B " width={20} height={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

// ******************* Eye *******************
const Eye = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10">
    <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M14.909,9.12A8.353,8.353,0,0,0,7.5,4.5,8.354,8.354,0,0,0,.091,9.12a.842.842,0,0,0,0,.76A8.353,8.353,0,0,0,7.5,14.5a8.354,8.354,0,0,0,7.409-4.62A.842.842,0,0,0,14.909,9.12ZM7.5,13.25A3.75,3.75,0,1,1,11.25,9.5,3.75,3.75,0,0,1,7.5,13.25ZM7.5,7a2.482,2.482,0,0,0-.659.1A1.246,1.246,0,0,1,5.1,8.841,2.494,2.494,0,1,0,7.5,7Z" transform="translate(0 -4.5)" fill="#5b5b5b" />
  </svg>


// ******************* User *******************
const User = () => <svg xmlns="http://www.w3.org/2000/svg" width="18.894" height="21.068" viewBox="0 0 18.894 21.068">
  <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-5.25 -3.75)">
    <path id="Path_1" data-name="Path 1" d="M23.394,29.023V26.848A4.348,4.348,0,0,0,19.045,22.5h-8.7A4.348,4.348,0,0,0,6,26.848v2.174" transform="translate(0 -4.955)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
    <path id="Path_2" data-name="Path 2" d="M20.7,8.848A4.348,4.348,0,1,1,16.348,4.5,4.348,4.348,0,0,1,20.7,8.848Z" transform="translate(-1.652)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
  </g>
</svg>

// ******************* WhiteArrow *******************
const WhiteArrowLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="6.752" height="11.808" viewBox="0 0 6.752 11.808">
  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M13.282,12.1,17.75,7.633a.84.84,0,0,0,0-1.192.851.851,0,0,0-1.2,0L11.492,11.5a.842.842,0,0,0-.025,1.164l5.084,5.094a.844.844,0,0,0,1.2-1.192Z" transform="translate(-11.246 -6.196)" fill="#fff" />
</svg>

// ******************* WhiteArrowRight *******************
const WhiteArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="6.751" height="11.808" viewBox="0 0 6.751 11.808">
  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.963,12.1,11.494,7.633a.84.84,0,0,1,0-1.192.851.851,0,0,1,1.2,0L17.752,11.5a.842.842,0,0,1,.025,1.164l-5.084,5.094a.844.844,0,1,1-1.2-1.192Z" transform="translate(-11.246 -6.196)" fill="#fff" />
</svg>



const Icons = {
  HamBurger,
  Search,
  Eye,
  User,
  WhiteArrowLeft,
  WhiteArrowRight
}


export default Icons