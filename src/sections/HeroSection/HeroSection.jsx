import {ImgComponent} from '../../collections/imgComponent/index'
import { RightHandSection } from '../../collections/rightHandSection/index'
import { Header,CenterBox,HeroBox} from './elements'
export const HeroSection  = () => {


    return (
        <HeroBox>
            <Header />
                <CenterBox>
                    <ImgComponent />
                    <RightHandSection />
                </CenterBox>
        </HeroBox>
    )
}