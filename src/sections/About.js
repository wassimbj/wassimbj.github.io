import React, { Component } from 'react'

export default class About extends Component {

    render() {
        
        const myAge = 19;

        return (
            <section className='about' id='about'>
                <div className='container mx-auto px-3'>
                    <div className='grid md:grid-cols-2 gap-12'>
                        <div className='aboutMe'>
                            <h3 className='tinyTitle mb-3'> About me ? </h3>
                            <p>
                                Hey there, as you already know my name is wassim. im {myAge}-years-old software developer.
                                im so passionate about software engineering. and i love to drink coffee ☕
                            </p>
                        </div>

                        <div className='findMe'>
                            <h3 className='tinyTitle mb-3'> I can build anything with </h3>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Nodejs </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Express.js </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Javascript </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Go </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> APIs </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> React.js </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> MySQL </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> GraphQL </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Docker </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> MongoDB </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> PostgreSql </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Redis </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Git </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Ajax </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> JQuery </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> Css </span>
                            <span className="skill cursor-hover:bg-black hover:text-white"> HTML </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
