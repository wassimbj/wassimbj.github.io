import React from "react"
import WorkCard from "../components/WorkCard"
import shoopImg from '../images/shoop.png'
import nodecommImg from '../images/nodecomm.png'
import sooalImg from '../images/sooal.png'
import chatrImg from '../images/chatr.png'
import soomaImg from '../images/sooma.png'

export default function Work() {
  return (
    <section id="work">
      <div className="container mx-auto px-3">
        <h3 className="tinyTitle mb-16"> Selected work </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-5 lg:pr-20 md:pr-5">
            <WorkCard
              img={shoopImg}
              links={{
                github: "https://github.com/wassimbj/shoop",
                preview: "http://shoop.rf.gd",
              }}
              tags={["PHP", "Paypal", "Stripe", "MySQL", "AJAX", "eCommerce"]}
              marginB="mb-10"
            />

            <WorkCard
              img={nodecommImg}
              links={{
                github: "https://github.com/wassimbj/nodecomm",
                preview: "https://nodecomm.herokuapp.com/shop",
              }}
              marginB="mb-10"
              tags={[
                "Nodejs",
                "Express.js",
                "eCommerce",
                "AJAX",
                "Braintree API",
                "MongoDB",
              ]}
            />

            <WorkCard
              img={sooalImg}
              links={{
                preview: "https://sooal.herokuapp.com",
              }}
              tags={[
                "Nodejs",
                "Express.js",
                "Platform",
                "AJAX",
                "Points & Badges",
                "Real-time",
                "Socket.io",
                "MySQL",
                "Vanilla JS",
                "TailwindCss",
                "Ask & Answer",
                "Facebook & Google OAuth",
              ]}
            />
          </div>

          <div className="mb-5 lg:pl-20 md:pl-5 topOffset">
            <WorkCard
              img={soomaImg}
              links={{
                github: "https://github.com/wassimbj/sooma-landing-page",
                preview: "https://sooma.netlify.com",
              }}
              tags={["HTMl", "Css", "Landing page", "JQuery", "Animation"]}
              marginB="mb-10"
            />
            <WorkCard
              img={chatrImg}
              links={{
                github: "https://github.com/wassimbj/chatr",
                preview: "https://chatr-demo.netlify.com",
              }}
              tags={[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Redis",
                "Socket.io",
                "React.js",
                "Context-API",
                "Real-Time",
                "Facebook OAuth",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
