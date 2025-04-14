interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> { }

function Logo(props: IconProps) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={48} height={48} rx={11.52} fill="#18181B" />
            <path
                d="M8.812 14.72a2.24 2.24 0 012.24-2.24H37.12a2.24 2.24 0 012.24 2.24v17.204L32.11 35.52V20.29h-4.1v8.96h-7.463v-8.96h-4.53v15.23l-7.206-3.596V14.72z"
                fill="#F4F4F5"
            />
        </svg>
    )
}

export default Logo
