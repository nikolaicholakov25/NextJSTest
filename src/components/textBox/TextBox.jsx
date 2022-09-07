import { 
    FlexTextBox, 
    ImgBox, 
    FontAwesomeIcon,
    TextArea,
    Paragraph,
    H2Link,
    BlackA
 } from "./elements";

export const TextBox = ({title,text,id,icon,width}) => {
    return (
            <FlexTextBox id={id} width={width}>
                <ImgBox>
                    <FontAwesomeIcon className={icon} />
                </ImgBox>
                <TextArea>
                    <H2Link>
                        <BlackA href="/">{title}</BlackA>
                    </H2Link>
                    <Paragraph>{text}</Paragraph>
                </TextArea>
            </FlexTextBox>
    )
}