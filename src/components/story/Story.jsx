import './Story.css'

export default function Story({imageUrl, imageSize, text}) {

    return (
        <>
            <a>
                <img src={imageUrl} width={imageSize} height={imageSize} className={'storyImage'} alt={"story image"}/>
                <p>{text}</p>
            </a>
        </>
    );
}