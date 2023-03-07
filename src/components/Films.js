import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Films } from "../listmovie/ListOfFilm";
import { Link } from "react-router-dom";
import { Container, Slider, Caption, Slide } from "react-materialize";

function Film() {
    const [movie, setMovie] = useState([]);
    return (
        <div>
            <div className="slider-show">

                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 450,
                        indicators: true,
                        interval: 2000
                    }}
                >
                    <Slide image={<img alt="" src="asserts/images/5352_2.jpg" />}>
                        <Caption placement="center">
                            <h3>
                                Welcome to my movies
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Enjoy the moment and have fun!!!
                            </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="asserts/images/IT2.jpg" />}>
                        <Caption placement="left">
                            <h3>
                                Update new movie all weeks
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                more video and movie details
                            </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="asserts/images/3.jpg" />}>
                        <Caption placement="right">
                            <h3>
                                Take popcorn and enjoy the movie
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Choose the Movie you like and enjoy it
                            </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="asserts/images/phim_ma_kinh_di_hay_nhat_the_gioi_The_Conjuring_8cdc829d68.jpg"/>}>
                        <Caption placement="center">
                            <h3>
                                Have Fun and Have Enjoy
                            </h3>
                            <h5 className="light grey-text text-lighten-3">
                                Make your moment is beautiful
                            </h5>
                        </Caption>
                    </Slide>
                </Slider>
            </div>
            <Container>
                <div className="row">
                    {Films.map(
                        (film) => {
                            return (
                                <div className="column" key={film.id} class="col s4">
                                    <div className="card" style={{ marginBottom: "20%" }} >
                                        <img src={film.img} style={{ width: "100%", height: "400px" }} alt='' />
                                        <h6>{film.name}</h6>
                                        <p className="title"></p>
                                        {/* <p><button onClick={() => { setMovie(film) }}><a href="#popup1">Detail</a></button></p> */}
                                        <Link to={`detail/${film.id}`}>
                                            <p className="infor"><button style={{ cursor: "pointer",color:"red" }}>Information</button></p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    )}
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <img src={movie.img} />
                            <h5>{movie.name}</h5>
                            <a className="close" href="#">&times;</a>
                            <p>{movie.info}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Film;