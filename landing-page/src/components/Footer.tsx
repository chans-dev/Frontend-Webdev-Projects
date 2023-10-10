import twitterLogo from "../assets/img/twitter.png"
import linkedInLogo from "../assets/img/linkedin.png"
import instaLogo from "../assets/img/insta.png"
import githubLogo from "../assets/img/github.png"

const Footer = () => {
  return (
    <>
      <div className="min-h-[40vh] w-screen bg-[rgba(134,131,215,0.2)] rounded-3xl flex items-center text-white p-8 lg:pl-20 flex-wrap">
        <div className="h-full p-5 md:w-full lg:w-[50%]">
          <p className="text-4xl sm:text-center">Logo Company</p>
          <p className="mt-5 sm:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia quod blanditiis nihil commodi possimus suscipit quos ipsum
            quibusdam optio eos, veniam odio error, at, veritatis totam ipsa
            quam ad maiores nam quasi aperiam beatae assumenda recusandae!
            Provident modi animi doloremque laudantium quaerat velit maxime.
            Unde quasi assumenda molestiae molestias vero consequuntur ea dolore
            tenetur asperiores voluptate dolor voluptatum labore temporibus a
            magnam, vel rerum reprehenderit. Error non illum omnis ducimus
            maiores dolorum eaque voluptates nisi in officiis modi sapiente nam,
            aut ex laudantium, provident incidunt, velit et? Iusto nesciunt quod
            in voluptatum ipsum repellendus modi, est rem dicta voluptates?
          </p>
        </div>
        <div className="h-full sm:w-full lg:w-[50%] md:w-full md:p-0 p-5 flex justify-center flex-wrap">
          <div className="flex flex-col justify-center mb-10">
            {" "}
            <p className="text-2xl px-3 text-center">Connect with us!</p>
            <div className="flex gap-8 mt-5">
              <img className="h-[45px]" src={twitterLogo} alt="" />
              <img className="h-[40px]" src={linkedInLogo} alt="" />
              <img className="h-[40px]" src={instaLogo} alt="" />
              <img className="h-[40px]" src={githubLogo} alt="" />
            </div>
          </div>
          <div className="md:ml-16 px-3">
            <p className="text-2xl mt-6 mb-4">Mail us directly here!</p>
            <div className=" flex flex-col">
              <input
                type="text"
                placeholder="Mail Id"
                className="p-2 rounded-md bg-[rgba(224,209,209,0.2)]"
                id="gmail"
              />
              <input
                type="text"
                placeholder="Message"
                className="p-2 rounded-md my-3 bg-[rgba(224,209,209,0.2)]"
                id="gmail"
              />
              <input
                type="button"
                value="Submit"
                className="bg-[rgba(76,231,76,0.5)] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer