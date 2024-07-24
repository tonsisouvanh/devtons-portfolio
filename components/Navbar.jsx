import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky z-[99] top-0 backdrop-blur-sm bg-black/50">
      <div className="tcontainer ">
        <div className="flex items-center justify-between">
          {/* <h1 className="text-xl font-bold">DEVTONS.</h1> */}
          <Link
            href="/"
            className={`flex items-center whitespace-nowrap text-xl`}
          >
            <FaLaptopCode className="text-primary text-3xl mr-1" />
            DEVTONS.
          </Link>
          <nav>
            <ul className="hidden lg:inline-flex items-center gap-10">
              <Link href={"#about"}>
                <li>About Me</li>
              </Link>
              <Link href={"#projects"}>
                <li>Projects</li>
              </Link>
              {/* <li>Reviews</li> */}
              {/* <li>Contact</li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
