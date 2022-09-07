import { TextBox } from "./elements"
import { BoldSpan, RightHandWrapper } from "./elements"

export const RightHandSection = () => {

    const text1 = <p>Complete <BoldSpan>brief writting or simple guidance</BoldSpan> on what to include, we got you covered.</p>

    const text2 = <p>In-Depth agency search covering; <BoldSpan>criteria matching,</BoldSpan> door knocking and due-diligence vetting.</p>

    const text3 = <p>Comprehensive <BoldSpan>pitch management</BoldSpan>, including comms, diary, managment and pitch hosting.</p>


    return (
        <RightHandWrapper>
                <TextBox width={'90%'} id='box1' icon='fa-solid fa-clipboard' title='Brief' text={text1}/>
                <TextBox width={'95%'} id='box2' icon='fa-solid fa-magnifying-glass' title='Search' text={text2}/>
                <TextBox width={'100%'} id='box3' icon='fa-solid fa-people-group' title='Pitch' text={text3}/>
        </RightHandWrapper>
    )
}