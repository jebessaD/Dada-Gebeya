import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import icon5 from "./images/icon5.png"
import icon6 from "./images/icon6.png"
import image1 from "./images/photo1.jpg"

const About = () => {
  return (
    <div >
      <div className="grid md:grid-cols-2 gap-5 mx-16 my-9">
        <div className="col-span-2 bg-white text-center p-6">
          <h1 className="text-5xl my-5">Who are we?</h1>
          <h2 className="text-lg  font-semibold">Learn more about us</h2>
          <div className="h-0.5 my-2 bg-green-500 w-10 mx-auto"></div>
        </div>

      <div className="bg-about-photo bg-fixed h-36 flex col-span-2 my-8 mb-12">
            <h1 className="text-center m-auto text-4xl font-bold text-white">The more that you read, the more things you will know !</h1>
      </div>

        <div className="col-span-1 bg-white rounded-md py-5 px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full px-5" src={icon2} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
            <h1 className="font-bold py-2">OUR SHOP</h1>
          Dada gebeya is a market that houses all types of materials in one location. Laptops, fragrances, skin care, smartphones, home decoration, and groceries are all available online.
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-md py-5  px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full p-5" src={icon1} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
          <h1 className="font-bold py-2">SAVE YOUR TIME</h1>
          Save your time !  We give whatever you want online and get it delivered to wherever you are.
  Use our website to save time.
                  </div>
        </div>

        <div className="col-span-1 bg-white rounded-md py-5  px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full p-5" src={icon3} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
          <h1 className="font-bold py-2">REFUND</h1>
          If you are unhappy with our product, please contact us as soon as possible and we will return your money. We are confident that our customers are always satisfied with our services.        </div>
        </div>

        <div className="col-span-1 bg-white rounded-md py-5  px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full p-5" src={icon4} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
          <h1 className="font-bold py-2">USER FRIENDLY</h1>
          If you require our assistance, we are available at all times.
  We are confident that our website is user-friendly, however,if you require assistance, please let us know.        </div>
        </div>

        <div className="col-span-1 bg-white rounded-md py-5  px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full p-5" src={icon5} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
          <h1 className="font-bold py-2">DISCOUNT</h1>
          As an extra-special thank you for being a loyal customer, here's $50 on us. Use it toward any of your favorite products.
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-md py-5  px-6 flex items-center">
          <img className="basis-1/4 w-1 rounded-t-full p-5" src={icon6} alt="icon1" />
          <div className="basis-3/4 text-gray-700">
          <h1 className="font-bold py-2">DELIVERY</h1>
          The thing you want, where you want it. The best market in the town and the fastest delivery guys eagerly waiting to serve you! All with a click of a buton.
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
