import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import { Footer } from 'react-materialize'

function FooterPage() {

    return (
        <div>
            <Footer
                className="example"
                copyrights="&#169; 2023 Copyright Text"
            >
                <div class="row">
                    <h5 className="white-text" class="col s12">
                        Welcome!!!
                    </h5>
                    <p className="grey-text text-lighten-4" class="col s12">
                        Thanks for visiting my website!!!
                    </p>
                </div>
            </Footer>
        </div>
    )
}

export default FooterPage;