import React from 'react'
import {Link} from 'react-router-dom'
import Cobaya from './Cobaya'
import Conejillodeindias from './Conejillodeindias'
import Cuisbebes from './Cuisbebes'
import Cuiss from './Cuiss'
import Cuy from './Cuy'
import Cuycafe from './Cuycafe'
import Cuychiquito from './Cuychiquito'

import Cuyos from './Cuyos'
import Cuytierno from './Cuytierno'
import Ima8 from './Ima8'


const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to = "/Cobaya" className="links">
            <figure className="image-size">
                <Cobaya/>
                <figcaption>Cobaya1</figcaption>
            </figure >
        </Link>
        <Link to = "/Conejillodeindias" className="links">
            <figure className="image-size">
                <Conejillodeindias/>
                <figcaption>Cobaya2</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuisbebes" className="links">
            <figure className="image-size">
                <Cuisbebes/>
                <figcaption>Cobaya3</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuiss" className="links">
            <figure className="image-size">
                <Cuiss/>
                <figcaption>Cobaya4</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuy" className="links">
            <figure className="image-size">
                <Cuy/>
                <figcaption>Cobaya5</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuycafe" className="links">
            <figure className="image-size">
                <Cuycafe/>
                <figcaption>Cobaya6</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuychiquito" className="links">
            <figure className="image-size">
                <Cuychiquito/>
                <figcaption>Cobaya7</figcaption>
            </figure>
        </Link>
        <Link to = "/Ima8" className="links">
            <figure className="image-size">
                <Ima8/>
                <figcaption>Cobaya8</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuyos" className="links">
            <figure className="image-size">
                <Cuyos/>
                <figcaption>Cobaya9</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuytierno" className="links">
            <figure className="image-size">
                <Cuytierno/>
                <figcaption>Cobaya10</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation