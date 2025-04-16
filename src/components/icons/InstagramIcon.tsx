interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> { }

function InstagramIcon(props: IconProps) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0H0v24h24V0zm-8.64 4H8.64A4.64 4.64 0 004 8.64v6.72C4 17.92 6.08 20 8.64 20h6.72A4.64 4.64 0 0020 15.36V8.64C20 6.08 17.92 4 15.36 4zM6.444 6.444A2.88 2.88 0 018.48 5.6h7.04a2.878 2.878 0 012.88 2.88v7.04a2.88 2.88 0 01-2.88 2.88H8.48a2.878 2.878 0 01-2.88-2.88V8.48c0-.764.303-1.496.844-2.036zm10.463.649a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zm-2.079 2.079a4 4 0 10-5.656 5.656 4 4 0 005.656-5.656zm-4.525 1.13a2.4 2.4 0 113.394 3.396 2.4 2.4 0 01-3.394-3.395z"

            />
        </svg>
    )
}

export default InstagramIcon
