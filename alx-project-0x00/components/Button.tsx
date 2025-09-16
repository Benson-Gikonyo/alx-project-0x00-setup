import { text } from "stream/consumers"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <div>
            <button className="small large medium rounded-full rounded-md rounded-sm">{title}</button>
        </div>
       
    )
}

export default Button