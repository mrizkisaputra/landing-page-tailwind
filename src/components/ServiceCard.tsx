import {FC} from "react";
import ServiceCardProps from "../props/ServiceCardProps.tsx";

const ServiceCard: FC<ServiceCardProps> = (props) => {
    return (
        <div className="box-1 bg-sky-300 p-4 rounded-lg shadow">
            <i className="ri-number-1 ri-3x text-white"/>
            <h1 className="text-white text-xl mt-6 mb-2">{props.serviceTitle}</h1>
            <p className="text-white text-base/loose">{props.serviceDescription}</p>
        </div>
    )
}

export default ServiceCard;