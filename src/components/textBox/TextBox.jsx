export const TextBox = ({title,text,id}) => {
    return (
        <div className="textBox" id={id}>
            <div className="imgBox"></div>
            <div className="textArea">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}