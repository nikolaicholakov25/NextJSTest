export const TextBox = ({title,text,id,icon}) => {
    console.log(icon);
    return (
        <div className="textBox" id={id}>
            <div className="imgBox"><i className={icon}></i></div>
            <div className="textArea">
                <h2><a id="title" href="/">{title}</a></h2>
                <p>{text}</p>
            </div>
        </div>
    )
}