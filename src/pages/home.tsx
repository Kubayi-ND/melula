import {Header} from '../components/header';
import homeImage1 from '../assets/home-image1.jpg';
import homeImage2 from '../assets/home-image2.jpg';
import homeImage3 from '../assets/home-image3.jpg';
import homeImage4 from '../assets/home-image4.jpg';
import homeImage5 from '../assets/home-image5.jpg';
import homeImage6 from '../assets/home-image6.jpg';
import homeImage7 from '../assets/home-image7.jpg';
import homeImage8 from '../assets/home-image8.jpg';
import homeImage9 from '../assets/home-image9.jpg';
import homeImage10 from '../assets/home-image10.jpg';
import homeImage11 from '../assets/home-gif1.gif';
import homeStory from '../assets/home-stories.png';
import storyLine from '../assets/story-line.jpg';
import homeSocialImage1 from '../assets/home-social-image1.jpeg';
import homeSocialImage2 from '../assets/home-social-image2.jpeg';


export const Home = () => {
  return (
    <div>
      <Header 
        className='h-[80vh] md:h-[64vh] lg:h-[80vh] text-wrap bg-cover bg-center'
        title="FOR COLOURFUL"
        subtitle={<><span> STEPS IN</span><span>&nbsp;LIFE</span></>}
        buttonText="VISIT OUR SHOP"
        buttonLink="shop"
      />
      <main >
        <div className='md:flex'>
              <img src={homeImage1} alt="Hero" className="w-full h-[300px] lg:h-auto md:w-[50%] lg:min-h-[300px] lg:max-h-[750px] object-cover"  />
              <img src={homeImage2} alt="Hero 2" className="w-full h-[300px] lg:h-auto md:w-[50%] lg:min-h-[300px] lg:max-h-[750px] object-cover" />
        </div>

        <div className='w-full h-auto lg:h-[70vh] flex flex-col justify-center bg-[#002d5a] text-white py-20 px-4 md:px-55  text-left  '>
            <h2 className='text-3xl pb-8'>Melula Kids shoes</h2>
            <p className='text-3xl pb-8'>Melula a Copenhagen based kids fashion brand. Colourful, playfull and gender neutral. Designed in Denmark, produced in Portugal.</p>
          <a href='about' className='text-[#3dffc2] underline border-l border-gray-400 pl-4 hover:opacity-75'> Read our story.</a>
        </div>
        
        <div className='md:flex h-auto  min-h-[500px] md:max-h-[100vh]'>
          <div className='w-[100%]'>
            <img src={homeImage3} alt="Home Image 3" className="w-full h-full min-h-[250px] object-cover" />
          </div>
          <div className='flex flex-col justify-between w-full md:w-[50%]'>
            <img src={homeImage4} alt="Home Image 4" className="w-full h-auto min-h-[250px] object-cover" />
            <img src={homeImage5} alt="Home Image 5" className="w-full h-auto min-h-[250px] object-cover" />
          </div>
        </div>

        <div className='md:flex h-auto  min-h-[500px] md:max-h-[100vh]'>
          <div className='flex flex-col justify-between w-[100%] md:w-[50%]'>
            <img src={homeImage6} alt="Home Image 6" className="w-full h-auto min-h-[250px] object-cover" />
            <img src={homeImage7} alt="Home Image 5" className="w-full h-auto min-h-[250px] object-cover" />
          </div>
          <div className='w-[100%]'>
            <img src={homeImage8} alt="Home Image 3" className="w-full h-full min-h-[250px] object-cover" />
          </div>
        </div>

        <div className='md:flex h-auto  min-h-[500px] md:max-h-[100vh]'>
          <div className='w-[100%]'>
            <img src={homeImage9} alt="Home Image 3" className="w-full h-full min-h-[250px] object-cover " />
          </div>
          <div className='flex flex-col justify-between  w-[100%] md:w-[50%]'>
            <img src={homeImage10} alt="Home Image 4" className="w-full h-auto min-h-[250px] object-cover" />
            <img src={homeImage11} alt="Home Image 5" className="w-full h-auto min-h-[250px]  object-cover" />
          </div>
        </div>

        <div className='py-20'>
          <h2 className='text-3xl text-[#002d5a] p-12'>They talk about us</h2>
          <img src={homeStory} alt="Home Story" className="w-[85%] h-36 m-auto object-contain" />
          <hr className='h-4 mx-[15%] my-[4%] border-gray-300'/>
          
        </div>

        <div className='w-full md:flex  justify-center items-center  md:px-[5%] py-[4] gap-2 mb-40' >
          <div className='md:w-[50%] p-4'>
            <div className='lg:flex'>
              <h2 className='text-3xl text-[#002d5a] text-left'>Follow us on Instagram &nbsp;</h2>
              <h2 className='text-3xl text-[#002d5a] text-left'> <a href='#'>@melula_copenhagen</a><hr className='w-[90%]  lg:w-[100%] mb-6 border-gray-300' /></h2>
            </div>
            <div className='flex gap-2'>
              <a href='https://www.instagram.com/p/Bd7AfU7nc1Z/' target='_blank'>
                <img src={homeSocialImage1} alt="Social Image 1" className="w-full h-auto" />
              
              </a>
              <a href='https://www.instagram.com/p/BcM-z4fHudE/' target='_blank'>
                <img src={homeSocialImage2} alt="Social Image 2" className="w-full h-auto" />
              </a>
            </div>
          </div>
          <div  className='md:w-[50%] p-9'>
            <form className='flex flex-col justify-centre gap-6'>
              <label className='text-3xl'>Subscribe</label>
              <p>Sign up with your email address to receive news and updates.</p>
              <div className='flex flex-col justify-center items-center lg:flex-row mx-auto gap-2'>
                <input type="email" placeholder="Email Address" className='border border-gray-300 rounded h-12 p-2 w-61 mt-2' />
                <button type="submit" className='bg-[#1ff4bf] text-white px-4 py-2 rounded h-14 mt-2 w-34 '>SIGN UP</button>
              </div>
     
              <p className='text-gray-500 text-xs'>We respect your privacy.</p>
            </form>
          </div>
        </div>
        

      </main>
    </div>
  );
}