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
    <div>
        <Link to = "/Cobaya">
            <figure>
                <Cobaya/>
                <figcaption>Cobaya1</figcaption>
            </figure>
        </Link>
        <Link to = "/Conejillodeindias">
            <figure>
                <Conejillodeindias/>
                <figcaption>Cobaya2</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuisbebes">
            <figure>
                <Cuisbebes/>
                <figcaption>Cobaya3</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuiss">
            <figure>
                <Cuiss/>
                <figcaption>Cobaya4</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuy">
            <figure>
                <Cuy/>
                <figcaption>Cobaya5</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuycafe">
            <figure>
                <Cuycafe/>
                <figcaption>Cobaya6</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuychiquito">
            <figure>
                <Cuychiquito/>
                <figcaption>Cobaya7</figcaption>
            </figure>
        </Link>
        <Link to = "/Ima8">
            <figure>
                <Ima8/>
                <figcaption>Cobaya8</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuyos">
            <figure>
                <Cuyos/>
                <figcaption>Cobaya9</figcaption>
            </figure>
        </Link>
        <Link to = "/Cuytierno">
            <figure>
                <Cuytierno/>
                <figcaption>Cobaya10</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation