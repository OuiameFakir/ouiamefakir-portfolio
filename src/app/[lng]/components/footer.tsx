import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            {/* Phone */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="tel:+212699099123"
              role="button"
            >
              <i className="fas fa-phone"></i>
            </a>

            {/* Email */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto:ouiamefakir@gmail.com"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* LinkedIn */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/ouiame-el-fakir/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* GitHub */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href=" https://github.com/OuiameFakir"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © <span className="text-warning"> O</span>EF All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
