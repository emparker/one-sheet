import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <main className="h-screen bg-greens bg-cover bg-left bg-no-repeat xl:bg-center overflow-hidden">
      <section className="font-sans text-white m-8">
        <h1 className="font-semibold text-4xl ml-20 mt-20 mb-24">
          How Can We Help?
        </h1>
        <form
          method="POST"
          action=""
          className="h-full grid grid-cols-2 gap-8 justify-items-center mt-8 ml-8"
        >
          <feildset className="flex flex-col space-y-6 gap-x-4 w-96">
            <div className="grid grid-cols-2 gap-x-4">
              <label className="text-right leading-loose">first name:</label>
              <input
                className="p-1"
                type="text"
                name="firstName"
                placeholder="something"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <label className="text-right leading-loose">last name:</label>
              <input
                className="p-1"
                type="text"
                name="lastName"
                placeholder="something"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <label className="text-right leading-loose">email:</label>
              <input
                className="p-1"
                type="text"
                name="email"
                placeholder="something"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <label className="text-right leading-loose">contact:</label>
              <input
                className="p-1"
                type="text"
                name="contact"
                placeholder="something"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <label className="text-right leading-loose">company:</label>
              <input
                className="p-1"
                type="text"
                name="company"
                placeholder="something"
              />
            </div>
            <feildset className="grid grid-cols-2 gap-x-4 min-h-[226px] leading-loose">
              <legend className="text-right">
                what services will your project require?:
              </legend>
              <div className="flex flex-col self-end">
                <div>
                  <input
                    className=""
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>branding</label>
                </div>
                <div>
                  <input
                    className="p-1"
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>design</label>
                </div>
                <div>
                  <input
                    className="p-1"
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>website</label>
                </div>
                <div>
                  <input
                    className="p-1"
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>saas app</label>
                </div>
                <div>
                  <input
                    className="p-1"
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>seo</label>
                </div>
                <div>
                  <input
                    className="p-1"
                    type="checkbox"
                    name="serviceRequirements"
                    placeholder="something"
                  />
                  <label className='pl-1'>marketing / strategy</label>
                </div>
              </div>
            </feildset>
            <feildset className="grid grid-cols-2 gap-x-4 min-h-[180px] leading-loose">
              <label className="text-right ">
                would you like to mention anything else?:
              </label>
              <textarea
                className="self-end p-1"
                type="textfeild"
                name="textContent"
                placeholder="write something"
                rows={4}
                cols={40}
              />
            </feildset>
          </feildset>
          <div className="col-start-1 justify-self-end md:col-start-2 md:self-end md:justify-self-start">
            <button
              className=" bg-white text-black focus:ring-1 focus:ring-black-200 rounded-md text-sm px-5 py-1.5"
              type="submit"
            >
              send it
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
