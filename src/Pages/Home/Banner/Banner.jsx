import { useEffect, useState } from "react";
import banner from "../../../assets/banner1.jpg";
import profile from "../../../assets/edit3.jpeg";
import { motion } from "framer-motion";
import { IoBookOutline, IoEye } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import lurking from "../../../assets/lurking.jpg";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //https://drive.google.com/file/d/1nESC9sA3vCql0HoKwxsVlymvBvw_Nd7r/view?usp=sharing
  // const googleDrivePDFLink = 'https://drive.google.com/uc?export=download&id=1nESC9sA3vCql0HoKwxsVlymvBvw_Nd7r';
  // const handleDownload = () => {
  //     const directDownloadLink = googleDrivePDFLink.replace('open', 'uc');
  //     const downloadAnchor = document.createElement('a');
  //     downloadAnchor.href = directDownloadLink;
  //     downloadAnchor.download = 'task2.pdf';
  //     downloadAnchor.click();
  // };

  const words = ["Developer", "Programmer", "Designer"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  const handleCVClick = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you a Hirer?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, I am 🥰!",
        cancelButtonText: "No, I'm not! 😓",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire({
              title: "Do you really have intention for hiring?",
              text: "Or, you are just stalking randomly 🙄 ?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Yes, I wanna hire 🥰!",
              cancelButtonText: "No 😓",
              reverseButtons: true,
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                const { value: email } = await Swal.fire({
                  title: "Input email address",
                  input: "email",
                  inputLabel: "Your email address",
                  inputPlaceholder: "Enter your email address",
                });
                if (email) {
                  //
                  Swal.fire({
                    title: "Here's my CV",
                    html: `
                    <a href="https://drive.google.com/file/d/13y0E_ZFAjBXFGcAksnQmJN_FEdCqkdG5/view?usp=drive_link"
     target="_blank"
     rel="noopener noreferrer"
     style="text-decoration: underline; font-weight: 600; color: blue;">
      link
  </a>
`,
                  });
                }
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  imageUrl: lurking,
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          //not hirer
          swalWithBootstrapButtons
            .fire({
              title: "Then why you need my CV 🧐?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Just wanna see your skills! 🥰",
              cancelButtonText: "To see if you're more skilled than me 😏",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Submit your Github username",
                  input: "text",
                  inputAttributes: {
                    autocapitalize: "off",
                  },
                  showCancelButton: true,
                  confirmButtonText: "Look up",
                  showLoaderOnConfirm: true,
                  preConfirm: async (login) => {
                    try {
                      const githubUrl = `
                        https://api.github.com/users/${login}
                      `;
                      const response = await fetch(githubUrl);
                      if (!response.ok) {
                        return Swal.showValidationMessage(`
                          Enter a valid Github account! 🙂
                        `);
                      }
                      return response.json();
                    } catch (error) {
                      Swal.showValidationMessage(`
                        Request failed: ${error}
                      `);
                    }
                  },
                  allowOutsideClick: () => !Swal.isLoading(),
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Here's my CV",
                      html: `
                      <a href="https://drive.google.com/file/d/1XAQ6ZQheVEiPAjF6t_Jti2Uf58iPvVZK/view?usp=drive_link"
       target="_blank"
       rel="noopener noreferrer"
       style="text-decoration: underline; font-weight: 600; color: blue;">
        link
    </a>
  `,
                    });
                  }
                });
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  icon: "warning",
                  title: "Oops...",
                  text: "You are a Narcissist! 🤧",
                  showConfirmButton: false,
                  footer:
                    '<a  href="https://psychcentral.com/disorders/narcissistic-personality-disorder/narcissism-cure" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 600; color: blue;">Why do I have this issue?</a>',
                });
              }
            });
        }
      });
  };

  return (
    <div
      className="hero min-h-screen"
      id="banner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="inset-0 z-10 flex flex-col-reverse md:flex-row items-center justify-evenly ">
          <div data-aos="flip-left" className="md:w-1/2">
            <h2 className="text-center md:text-left text-lg md:text-3xl lg:text-5xl text-white font-extrabold uppercase">
              Hi, I am Galib!
            </h2>
            <h2 className="text-center md:text-left text-md md:text-3xl mt-1 text-white font-extrabold uppercase">
              I&apos;m a{" "}
              <motion.span
                className="text-cyan-400"
                key={words[index]}
                initial={{ opacity: 0, y: "-50px" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "50px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {words[index]}
              </motion.span>
            </h2>
            <p className="text-center md:text-left text-white mt-5 text-lg">
              I am a dedicated Full Stack Developer and Backend Enthusiast with
              a strong focus on building efficient, scalable web applications. I
              enjoy solving complex technical challenges and have experience
              developing both frontend and backend systems.
            </p>
            <div className="flex flex-col md:flex-row mt-6 mb-5 md:mb-0 items-center md:items-start gap-4">
              <button
                onClick={handleCVClick}
                className="btn btn-md md:btn-md btn-accent btn-outline md:mb-0 uppercase"
              >
                View CV
                <IoEye className="text-xl" />
              </button>
              <a
                href="https://galib-blog.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn text-fuchsia-500 btn-outline uppercase">
                  My blog
                  <IoBookOutline className="text-xl" />
                </button>
              </a>
            </div>
          </div>
          <div data-aos="flip-right">
            <div
              className="mt-16 w-48 md:w-72 p-2 mb-6 md:mb-0 md:mt-0 rounded-3xl border-y-8 border-cyan-600 tooltip"
              data-tip="Hey! Watcha doin' ?"
            >
              <Tilt>
                <img className="w-full rounded-3xl" src={profile} />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
