import { TextBox } from "../../components/textBox/TextBox"

export const RightHandSection = () => {

    const text1 = <p>Complete <span>brief writting or simple guidance</span> on what to include, we got you covered.</p>


    return (
        <div className="rightSection">
                <TextBox id='box1' title='Brief' text={text1}/>
                <TextBox id='box2' title='Brief' text={text1}/>
                <TextBox id='box3' title='Brief' text={text1}/>
        </div>
    )
}