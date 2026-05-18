import { Link } from "react-router-dom";
import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <>
      <main className=" w-full h-screen bg-abt-pattern bg-cover bg-center font-jose">
        <div className="lg:w-1/3 w-11/12 mx-auto">
          <div className="flex justify-center items-center h-screen ">
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="/aura-logo.jpeg"
                  alt="shuga"
                  className="h-[100px] w-[100px] rounded-full"
                />
              </div>
              <div className=" text-white">
                <p className="my-4 text-center font-semibold text-lg">
                  Prisca Aura & Wears
                </p>
                <p className="text-base text-center">
                  Shop our latest collections and connect with us through the
                  links below.
                </p>
              </div>
              <div className="flex justify-center items-center  text-white">
                <ul className="flex gap-5 items-center mt-5">
                  <li>
                    <Link
                      to="https://www.instagram.com/priscaaura.wears?igsh=MTFwcWwwdWNjZzA3Zw%3D%3D&utm_source=qr"
                      className="text-base bg-[#d2e0ef] font-normal"
                    >
                      <FaInstagram className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.tiktok.com/@priscaaura.wears?_r=1&_t=ZS-96SdQNz8K0K"
                      className="text-base font-normal"
                    >
                      <FaTiktok className="text-3xl " />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://wa.me/2348135624147"
                      className="text-base font-normal"
                    >
                      <FaWhatsapp className="text-3xl" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <Link
                  to="https://www.instagram.com/priscaaura.wears?igsh=MTFwcWwwdWNjZzA3Zw%3D%3D&utm_source=qr"
                  className="rounded-[30px]  bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  Instagram
                </Link>
                <Link
                  to="https://www.tiktok.com/@priscaaura.wears?_r=1&_t=ZS-96SdQNz8K0K"
                  className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  Tiktok
                </Link>
                <Link
                  to="https://chat.whatsapp.com/Lo2y1o2AJ3O9KQV0nffh5i?mode=gi_t"
                  className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  WhatsApp Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
