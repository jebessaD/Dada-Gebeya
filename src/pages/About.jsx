import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"
import icon5 from "../images/icon5.png"
import icon6 from "../images/icon6.png"
import image1 from "../images/photo1.jpg"
import Footer from "../components/Footer"
import {AboutCard} from "../components/CardComponent"


import { useGlobalContext } from "../hooks/context"
const aboutCardData =[
  {image:icon2, title:"DELIVERY",description:"Dada gebeya is a market that houses all types of materials in one location. Laptops, fragrances, skin care, smartphones, home decoration, and groceries are all available online.  "},
  {image:icon3, title:"REFUND",description:"If you are unhappy with our product, please contact us as soon as possible and we will return your money. We are confident that our customers are always satisfied with our services."},
  {image:icon4, title:"USER FRIENDLY",description:"If you require our assistance, we are available at all times. We are confident that our website is user-friendly, however,if you require assistance, please let us know."},
  {image:icon5, title:"DISCOUNT",description:"As an extra-special thank you for being a loyal customer, here's $50 on us. Use it toward any of your favorite products."},
  {image:icon6, title:"SAVE YOUR TIME",description:"Save your time !  We give whatever you want online and get it delivered to wherever you are. Use our website to save time."},
  {image:icon1, title:"DELIVERY",description:"The thing you want, where you want it. The best market in the town and the fastest delivery guys eagerly waiting to serve you! All with a click of a buton."}
]

const About = () => {
  const {colors,darkMode}= useGlobalContext()
  return (
    <div >


      <div className="md:grid  md:grid-cols-2 gap-5 md:mx-16 my-9">
        <div className={`${darkMode?"text-white":""} col-span-2  text-center p-3 md:p-6`}>
          <h1 className="text-5xl my-5">Who are we?</h1>
          <h2 className="text-lg  font-semibold">Learn more about us</h2>
          <div className="h-0.5 my-2 bg-green-500 w-10 mx-auto"></div>
        </div>

      <div className="bg-about-photo bg-fixed h-36 flex col-span-2 my-8 mb-12">
            <h1 className="text-center m-auto text-3xl md:text-4xl font-bold text-white">The more that you read, the more things you will know !</h1>
      </div>

      {
        aboutCardData.map((eachData)=>{
          return <AboutCard eachData={eachData} />
        })
      }
        
      </div>
      <Footer/>

    </div>
  );
};

export default About;
