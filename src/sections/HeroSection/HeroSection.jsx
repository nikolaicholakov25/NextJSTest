import {ImgComponent} from '../../collections/imgComponent/index'
import { RightHandSection } from '../../collections/rightHandSection/index'
export const HeroSection  = () => {


    return (
        <div className="heroWrapper">
            <div className="heading">
                <h1>Managed agency selection</h1>
                <h4>Strengthen your onboarding process</h4>

                <div className="centerWrapper">
                <ImgComponent />
                <RightHandSection />
                </div>
            </div>
        </div>
    )
}