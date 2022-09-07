import pic from '../../resources/video.png'
import { 
    ImgWrapper,
 } from './elements'
export const ImgBox = () => {
    return  <ImgWrapper>
                <img src={pic} alt="" />
            </ImgWrapper>
}