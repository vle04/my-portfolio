type ToolTabProps = {
    text: string | "error";
}

export default function ToolTab({ text }: ToolTabProps) {
    return (
        <div className="border-[3px] border-gray-300 rounded w-fit px-2 hover:bg-gray-200">
            {text}
        </div>
    )
}