import {Header} from '../components/header';
import aboutImage from '../assets/headersabout.jpg'
import aboutImage1 from '../assets/about-image1.jpg';
import aboutImage2 from '../assets/about-image2.jpg';
import aboutImage3 from '../assets/about-image3.jpg';
import aboutImage4 from '../assets/about-image4.jpg';

export const About = () => {
  return (
    <div>
      <Header    
        className=' h-[70vh] '
        backgroundImage={aboutImage}     
        title="ABOUT"
        subtitle={<></>}
        buttonText="SHOP"
         
      />
      <main >
        <div className='py-20 px-50 text-left'>

          <h1 className="text-3xl text-[#002d5a] ffont-thin mb-6">Founders</h1>
          <p className="mb-4 text-sm">
            Melula is a Children Fashion brand from Copenhagen, Denmark.<br />
            The Danish design duo Louise Møllermark and Søren Hougesen joined
            forces in 2015 focusing on simple and beautiful design aesthetics. Melula is a direct product of this collaboration.
          </p>

          <h1 className='text-3xl text-[#002d5a] font-thin mb-6'>Mission</h1>
          <p className='mb-6' text-sm>
            We love kids, kids are fun just as they are - active, creative and playful.<br />
            Melula was founded because we couldn’t find children’s
            shoes with both childlike and playful look in combination with a feel of the simplicity of Scandinavian design.
          </p>

          <h1 className='text-3xl text-[#002d5a] font-thin mb-6'>Melula Shoes</h1>
          <p className='mb-6 text-sm'>
            Shapes and Colors are one of the fundamentals in Melula.<br />
             We derive our inspiration from the creative processes of children and how they express
            themselves while playing. Melula have created a classic stylish shoe that are playful, fun and has a unique colourful approach to design.
            Melula shoes are aiming for a unisex approach, unless our patterns guides in a clear direction.
            
          </p>
          <p>
            The shoes is a transition shoe that both can be used for when your little ones needs to look stylish, but also just for everyday use.
            We are continually developing new prints and styles, so that Melula can continue to be a brand that dictates trends instead of following them.
          </p>

          <h1 className='text-3xl text-[#002d5a] font-thin mb-6'>Materials</h1>
          <p className='mb-6 text-sm'>
            Quality and comfort are extremely important while creating a shoe for children. That’s why we chose a soft material, which is suitable for the foot.
            The material and the inner construction stabilizes the ankle but also make it flexible enough to bend, which is important for movability as well as Our
            shoes are made out of strong and durable fabrics. They are easy to clean and breathable for the foot.
          </p>

          <h1 className='text-3xl text-[#002d5a] font-thin mb-6'>Transparent and Fair production</h1>
          <p className='mb-6 text-sm'>
            We chose to focus heavily on the design and the production as the most important ingredients in the development of the collection. The production of
            our shoes is an important factor. We cooperate only with manufacturers that have full transparency and works within sound ethical guidelines,
            fair working conditions and the compliance with environmental standards.
          </p>
          <p className='mb-6 text-sm'>
            Our main shoe manufacture comes from a historical line of shoemakers with their main focus on the creation and development of children’s footwear.'
            A mid- high range productline that is distinguished by its exclusivity and quality of materials. Based in mainland of Portugal
          </p>

          <h1 className='text-3xl text-[#002d5a] font-thin mb-6'>Suppliers</h1>
          <p className='mb-6 text-sm'>
            All Melulas suppliers are based in the southern part of Europe mainly Italy, Spain and Portugal, where there is a long historie of producing materials
            of the highest quality, ensuring longlivity and a high standard. All of our textiles comes from Portugal, all leather materials are supllied by our
            Italian and Spanish based suppliers.
          </p>

        </div>
        <div className='flex flex-wrap justify-center gap-10 px-4 py-34'>
          <img src={aboutImage1} alt="About Image 1" className="max-h-[300px] w-[400px] object-cover" />
          <img src={aboutImage2} alt="About Image 2" className="max-h-[300px] w-[400px] object-cover" />
          <img src={aboutImage3} alt="About Image 3" className="max-h-[300px] w-[400px] object-cover" />
          <img src={aboutImage4} alt="About Image 4" className="max-h-[300px] w-[400px] object-cover" />
        </div>
        
      
      </main>
    </div>
  );
}