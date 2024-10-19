function StrongTextParser(text) {
    const strongText = text.text.split("**");

    return <>
        {strongText.map((text, i) => {
            if(i%2==0){
                if(text.indexOf('](') !== -1){
                    let text0 = text.replaceAll('[','').replaceAll(')','').split('](');
                    console.log(text0)
                    return <a href={text0[1]} target="_blank">{text0[0]}</a> 
                }else{
                    return <>{text}</>;
                }
            }else{
                if(text.indexOf('](') !== -1){
                    let text0 = text.replaceAll('[','').replaceAll(')','').split('](');
                    console.log(text0)
                    return <strong>
                        <a href={text0[1]} target="_blank">{text0[0]}</a> 
                    </strong>
                }else{
                    return <strong>{text}</strong>
                }
            }
        })}
    </>;
};

export default StrongTextParser;