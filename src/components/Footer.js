import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      {/* Top bar */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Dapatkan koneksi dengan kami di jaringan sosial:</span>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center">
          {/* Facebook */}
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
            </svg>
          </a>

          {/* Google */}
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02..." />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5..." />
            </svg>
          </a>

          {/* GitHub */}
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12..." />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25..." />
              </svg>
              Areta Informatics College
            </h6>
            <p>
              Metode belajar dengan 90% Praktek 10% Teori terbukti menghantarkan mahasiswa/i kami dapat bersaing di dunia kerja dan bisnis baik dibidang IT maupun dibidang Digital Marketing.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Programs</h6>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Teknik Informatika</a></p>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Sistem Informasi</a></p>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Bisnis Digital</a></p>
            <p><a href="#!" className="text-neutral-600 dark:text-neutral-200">Training</a></p>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful Links</h6>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Pricing</a></p>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Settings</a></p>
            <p className="mb-4"><a href="#!" className="text-neutral-600 dark:text-neutral-200">Orders</a></p>
            <p><a href="#!" className="text-neutral-600 dark:text-neutral-200">Help</a></p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69..." />
              </svg>
              Dasana xenter Blok CD 68 Tangerang
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15..." />
              </svg>
              admin@aretacollege.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 4.5a3 3 0 013-3h1.372..." />
              </svg>
              +62 852 1950 7377
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-black p-6 text-center text-white">
        <span>© 2013-2024 Copyright: </span>
        <a className="font-semibold text-white" href="https://aretacollege.com/">
          Areta Informatics College
        </a>
      </div>
    </footer>
  );
};

export default Footer;
