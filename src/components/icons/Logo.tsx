interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> { }

function Logo(props: IconProps) {
  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M194.56 0C228.492 0 256 27.508 256 61.44v133.12c0 33.932-27.508 61.44-61.44 61.44H61.44C27.508 256 0 228.492 0 194.56V61.44C0 27.508 27.508 0 61.44 0h133.12zM58.947 66.56C52.35 66.56 47 71.91 47 78.508v91.756l38.429 19.176v-81.23h24.162v47.787h39.805V108.21h21.865v81.23l38.659-19.176V78.508c0-6.599-5.349-11.947-11.947-11.947H58.947z"
      />
    </svg>
  );
}

export default Logo;
