import React from "react";
import twitter from "../images/twitter.png";
import stackoverflow from "../images/stackoverflow.png";
import ecommerce from "../images/ecommerce.png";
function Project() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">My Full Stack Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white h-full rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={twitter} alt="Project" />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  TWITTER-The Social Networking App
                </h3>
                <p className="text-gray-500">
                  Twitter is a popular social networking site where users can
                  share short messages called tweets with a maximum length of
                  280 characters. Users can follow other users to see their
                  tweets and engage with them through likes, retweets, and
                  replies. Twitter is also widely used for news, entertainment,
                  and marketing purposes.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white h-full rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={stackoverflow} alt="Project" />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Stack Overflow-Code Sharing Platform
                </h3>
                <p className="text-gray-500">
                  Stack Overflow is a popular online platform where programmers
                  can ask and answer technical questions related to software
                  development. Users can search for existing questions and
                  solutions or post new questions to the community. The platform
                  also features a reputation system that rewards users for their
                  contributions and encourages them to provide high-quality
                  answers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-10">
            <div className="bg-white h-full rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={ecommerce} alt="Project" />
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  Ecommerce-Retail Shopping Website
                </h3>
                <p className="text-gray-500">
                  Ecommerce is a type of website that allows businesses to sell
                  products or services online directly to customers. Customers
                  can browse the products or services, add them to their
                  shopping cart, and complete the purchase through a secure
                  checkout process. Ecommerce websites often offer various
                  payment methods and shipping options, as well as customer
                  support and tracking features for orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
