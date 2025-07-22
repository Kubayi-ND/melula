import {Header} from '../components/header';

export const About = () => {
  return (
    <div>
      <Header         
      title="ABOUT"
        subtitle={<></>}
        buttonText="VISIT OUR SHOP"
        showButton={false} // Explicitly hide the button
      />
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-4">Melula is a Copenhagen-based kids' fashion brand that focuses on colorful, playful, and gender-neutral designs. Our shoes are crafted with care in Portugal, ensuring the highest quality and comfort for your little ones.</p>
      </main>
    </div>
  );
}