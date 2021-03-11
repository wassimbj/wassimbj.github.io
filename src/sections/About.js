import React, { Component } from "react"

export default class About extends Component {
  render() {
    const myAge = 19

    return (
      <section className="about" id="about">
        <div className="mx-auto px-2 max-w-3xl text-lg">
          <div className="text-center">
            <div className="text-gray-400">
              <p>
                Hey there 😄, my name is wassim. im {myAge}
                -years-old software developer. im so passionate about software
                engineering, im now working mostly with Javascript (node, react),
                and im in the process of learning new things like Go, Elixir and Distributed systems.🤩
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
