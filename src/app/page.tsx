
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <main  >
      <div className="container fluide" >
          <h1 className="">
            Make anything possible with
            <span className="text-danger fw-bold">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="">
            <Link href="/my-skills" className="btn btn-dark text-light m-2">
              Learn More
            </Link>
            <Link
              href="/my-projects"
              className="btn btn-dark text-light m-2"
            >
              <div className="" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="btn btn-dark text-light m-2"
            >
              <div className="" />
              Contact me
            </Link>
          </div>
        </div>
    </main>
  )
}

// style={{background:"url(/bg.avif)" }} className="w-100"