import {FC} from "react";
import TextTitleAndContentProps from "../props/TextTitleAndContentProps.tsx";

const TextTitleAndContent: FC<TextTitleAndContentProps> = (props) => {
    return (
        <>
            <h1 className="text-3xl/tight lg:text-5xl/tight mb-7 font-medium font-poppins">{props.title}</h1>
            <p className="text-base/8 font-systemui mb-7">{props.content}</p>
        </>
    )
}

export default TextTitleAndContent;