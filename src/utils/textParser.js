export default function StrongTextParser({text}) {

    const strongText = text.split("**");

    return <>
        {strongText.map((text, i) => {
            if(i%2==0){
                if(text.indexOf('](#') !== -1){
                    let text0 = text.split('](#');
                    console.log(text0)
                    return <>
                        {text0[0].split('[')[0]}
                        <strong><a href={"#"+text0[1].split(')')[0]}>{text0[0].split('[')[1]}</a></strong>
                        {text0[1].split(')')[1]}
                    </>
                }else if(text.indexOf('](') !== -1){
                    let text0 = text.replaceAll('[','').replaceAll(')','').split('](');
                    console.log(text0)
                    return <a href={text0[1]} target="_blank">{text0[0]}</a> 
                }else{
                    return <>{text}</>;
                }
            }else{
                if(text.indexOf('](#') !== -1){
                    let text0 = text.split('](#');
                    console.log(text0)
                    return <strong>
                        {text0[0].split('[')[0]}
                        <a href={"#"+text0[1].split(')')[0]}>{text0[0].split('[')[1]}</a>
                        {text0[1].split(')')[1]}
                    </strong>
                }else if(text.indexOf('](') !== -1){
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
