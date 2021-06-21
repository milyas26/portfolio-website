import Image from 'next/image'
import profile from '../public/images/profil.jpg'
import whatsapp from '../public/images/whatsapp.png'
import instagram from '../public/images/instagram.png'
import github from '../public/images/github.png'
import linkedin from '../public/images/linkedin.png'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="containers">
        <div className="row kanan">
          <div className="col-md-6">
            <div className="image">
              <Image src={profile} alt="profile" />
            </div>
            <div className="nama">
              <h1 className="nama__profile">MUHAMMAD ILYAS</h1>
              <h3 className="pekerjaan">FULLSTACK DEVELOPER</h3>
              <h4 className="location mt-2">Location : South Tangerang</h4>
            </div>
            <div className="summary">
              <h2>SUMMARY</h2>
              <p>
                I am a Fullstack Developer, an ambitious problem solver with a
                passion for web development especially frontend development
                using Next Js (React Js). Creative developer dedicated to
                developing and optimizing interactive, user-friendly, and
                feature rich websites.
              </p>
              <p>
                I enjoy being challenged and engaging with projects that require
                me to work outside my comfort and knowledge set, as continuing
                to learn new languages and development techniques.
              </p>
            </div>
            <div className="skill">
              <h2>PERSONAL SKILLS</h2>
              <table width="100%">
                <thead>
                  <th colSpan="4">FRONTEND</th>
                </thead>
                <tbody>
                  <tr>
                    <td>NextJs</td>
                    <td>ReactJs</td>
                    <td>React Native</td>
                    <td>Bootstrap</td>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>SASS</td>
                    <td>CSS</td>
                    <td>Javascript</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table width="100%">
                <thead>
                  <th colSpan="4">BACKEND</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Laravel</td>
                    <td>ExpressJs</td>
                    <td>NodeJs</td>
                    <td>Firebase</td>
                  </tr>
                  <tr>
                    <td>MySQL</td>
                    <td>MongoDB</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table width="100%">
                <thead>
                  <th colSpan="4">VERSION CONTROL & DEPLOYMENT</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Github</td>
                    <td>Gitlab</td>
                    <td>Netlify</td>
                    <td>Heroku</td>
                  </tr>
                  <tr>
                    <td>Github Pages</td>
                    <td>Vercel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contact">
              <h2>REACH ME AT</h2>
              <b>Phone Number</b>
              <p>+62 822 6961 6558</p>
              <strong>Email Address</strong>
              <p>muhammadilyassaya@gmail.com</p>
            </div>

            <div className="social">
              <h2>SOCIAL MEDIA</h2>
              <table width="100%">
                <thead>
                  <th>Whatsapp</th>
                  <th>Instagram</th>
                  <th>Github</th>
                  <th>LinkedIn</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center py-3 px-3">
                      <a
                        href="https://api.whatsapp.com/send?phone=+6282269616558&text=Ada%20yang%20bisa%20saya%20bantu?"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          width={50}
                          height={50}
                          alt="image"
                          className="image_icon"
                          // src="/images/web.png"
                          src={whatsapp}
                        />
                      </a>
                    </td>

                    <td className="text-center py-3 px-3">
                      <a
                        href="https://www.instagram.com/26mill_/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          width={50}
                          height={50}
                          alt="image"
                          className="image_icon"
                          // src="/images/instagram.png"
                          src={instagram}
                        />
                      </a>
                    </td>
                    <td className="text-center py-3 px-3">
                      <a
                        href="https://github.com/milyas26"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          width={50}
                          height={50}
                          alt="image"
                          className="image_icon"
                          // src="/images/github.png"
                          src={github}
                        />
                      </a>
                    </td>
                    <td className="text-center py-3 px-3">
                      <a
                        href="https://www.linkedin.com/in/muhilyas/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          width={50}
                          height={50}
                          alt="image"
                          className="image_icon"
                          // src="/images/linkedin.png"
                          src={linkedin}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="academic">
              <h2>ACADEMIC HISTORY</h2>

              <div className="training">
                <h3>TRAINING</h3>
                <div className="bootcamp">
                  <h4>BOOTCAMP DUMBWAYS INDONESIA</h4>
                  <i>November 2020 - December 2020</i>
                  <ul>
                    <li>
                      Learning how to build frontend websites using React Js
                    </li>
                    <li>Build RESTfull API using Express Js</li>
                    <li>Learning Mobile Development using React Native</li>
                    <li>
                      Build 2 dinamic websites and 1 mobile app for real case
                      projects
                    </li>
                  </ul>
                </div>
              </div>

              <div className="courses">
                <h3>COURSES</h3>
                <div className="fullstack_javascript">
                  <h4>
                    FULLSTACK JAVASCRIPT DEVELOPER & FULLSTACK REACT NATIVE
                    DEVELOPER | BuildWith Angga
                  </h4>
                  <em>September 2020 - December 2020</em>
                  <ul>
                    <li>
                      Learning about UI/UX Design, Wireframing, Moodboard, and
                      Visual Design for mobile and web application.
                    </li>
                    <li>
                      Build real project 'Staycation Website' using MERN Stack
                      and other technologies
                    </li>
                    <li>
                      Build My Doctor App, an app for consultation with personal
                      doctor online. Using React Native, Firebase for realtime
                      chat, and other technologies.
                    </li>
                  </ul>
                </div>

                <div className="web_development">
                  <h4>THE COMPLETE 2020 WEB DEVELOPMENT | Udemy</h4>
                  <i>April 2020 - June 2020</i>
                  <ul>
                    <li>
                      Learning HTML, CSS, Javascript, Bootstrap, and React Js
                      for frontend
                    </li>
                    <li>
                      Build RESTfull API using Express Js and SQL Database
                      MongoDB with Mongoose
                    </li>
                    <li>Learning Authentication and Security for website</li>
                    <li>Learn about Version Control using Github</li>
                  </ul>
                </div>
              </div>

              <div className="formal_education">
                <h3>FORMAL EDUCATION</h3>
                <div className="siber_asia">
                  <h4>ASIAN CYBER UNIVERSITY | Teknik Informatika</h4>
                  <em>March 2021 - March 2024</em>
                </div>
                <div className="sma">
                  <h4>SMAN 02 MUKOMUKO | Ilmu Pengetahuan Alam</h4>
                  <i>April 2014 - April 2017</i>
                </div>
              </div>
            </div>
            <div className="experiences">
              <h2>WORK EXPERIENCES</h2>
              <div className="dvoretsky">
                <h4>DVORETSKY GROUP | Fullstack Developer</h4>
                <i>Software House | February 2021 - Now</i>
                <ul>
                  <li>
                    Build feature rich website using Laravel, frontend framework
                    using Bootstrap, MySQL for database management, and other
                    technologies.
                  </li>
                  <li>
                    Build Frontend website from Figma design into interactive
                    website application using Next Js (React Js Framework),
                    state management using Redux, form validation using Yup, and
                    other technologies.
                  </li>
                  <li>
                    Build Rest API using Laravel and Integration API for
                    Frontend from backend.
                  </li>
                </ul>
              </div>
              <div className="freelance">
                <h4>FIVERR | Freelance Web Developer</h4>
                <i>January 2020 - October 2020</i>
                <ul>
                  <li>
                    Build static website like company profile, portfolio
                    websites and landing page using HTML, CSS, Javascript and
                    Bootstrap
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
