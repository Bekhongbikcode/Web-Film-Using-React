import React from "react";
import { Carousel } from "react-materialize";

function New() {
    return (
            <Carousel
                carouselId="Carousel-58"
                images={[
                    'asserts/images/antman.jpg',
                    'asserts/images/avatar2.jpg',
                    'asserts/images/avenger.jpg',
                    'asserts/images/blackadam.jpg',
                    'asserts/images/conan.jpg',
                    'asserts/images/deadpool.jpg',
                    'asserts/images/dra.jpg',
                    'asserts/images/minion.jpg',
                    'asserts/images/spiderman.jpg',
                    'asserts/images/train.jpg',
                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
            />
    )
}

export default New;