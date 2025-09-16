import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />

            {/* Small buttons */}
            <Button title="Small Rounded-SM" className="text-sm rounded-sm" />
            <Button title="Small Rounded-MD" className="text-sm rounded-md" />
            <Button title="Small Rounded-Full" className="text-sm rounded-full" />

            {/* Medium buttons */}
            <Button title="Medium Rounded-SM" className="text-base rounded-sm" />
            <Button title="Medium Rounded-MD" className="text-base rounded-md" />
            <Button title="Medium Rounded-Full" className="text-base rounded-full" />

            {/* Large buttons */}
            <Button title="Large Rounded-SM" className="text-lg rounded-sm" />
            <Button title="Large Rounded-MD" className="text-lg rounded-md" />
            <Button title="Large Rounded-Full" className="text-lg rounded-full" />

        </div>
    )
}
export default Landing