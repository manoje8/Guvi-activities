function TextContent(param){
    console.log(param);
    return (
        <div>
            <h3>{param.title}</h3>
             <p className="lead mb-0">{param.sub}</p>
        </div>
    )
}

export default TextContent;