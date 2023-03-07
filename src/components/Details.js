import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Films } from "../listmovie/ListOfFilm";
import { Icon } from "react-materialize"
import ModalCase from "./ModalCase";

function Detail() {
    const filmId = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const detailFilm = Films.find(
        (takeidmovie) => {
            return (
                takeidmovie.id == filmId.id
            )
        }
    )
    return (
        <div className="container">
            <div className="card">
                <h3 className="title-h3">{detailFilm.name}</h3>
                <img src={`../${detailFilm.img}`} />

                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                    <Icon>ondemand_video</Icon>
                </a>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={detailFilm} />}

                <p>{readMore ? detailFilm.info : `${detailFilm.info.substring(0, 20)}....`}
                    <a className="hideNot" onClick={() => { (setReadMore(!readMore)) }}>{readMore ? 'Show Less' : 'Show More'}</a>
                </p>

            </div>
        </div>
    )
}

export default Detail;