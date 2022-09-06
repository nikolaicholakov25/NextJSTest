import { TextBox } from "../../components/textBox/index"

export const RightHandSection = () => {

    const text1 = <p>Complete <span>brief writting or simple guidance</span> on what to include, we got you covered.</p>

    const text2 = <p>In-Depth agency search covering; <span>criteria matching,</span> door knocking and due-diligence vetting.</p>

    const text3 = <p>Comprehensive <span>pitch management</span>, including comms, diary, managment and pitch hosting.</p>


    return (
        <div className="rightSection">
                <TextBox id='box1' icon='fa-solid fa-clipboard' title='Brief' text={text1}/>
                <TextBox id='box2' icon='fa-solid fa-magnifying-glass' title='Search' text={text2}/>
                <TextBox id='box3' icon='fa-solid fa-people-group' title='Pitch' text={text3}/>
        </div>
    )
}