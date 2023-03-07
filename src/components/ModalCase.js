import React from 'react';

function ModalCase ({ setIsOpen, film }) {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: "block", top: "35%" }}>
                <div className="modal-content">
                    <h4>Introduce of Video</h4>
                    <p><iframe width="100%" height="400px" src={film.clip}
                        title={film.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowFullScreen
                    ></iframe></p>
                </div>
                <div className="model-footer">
                    <a className="model-close red-text" style={{marginBottom:"20px"}}>Close</a>
                </div>
            </div>
        </div>
    )    
}

export default ModalCase;