interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> { }

function LinkedinIcon(props: IconProps) {
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
        d="M0 1.719C0 .769.789 0 1.762 0h20.476C23.21 0 24 .77 24 1.719v20.562c0 .95-.789 1.719-1.762 1.719H1.762C.79 24 0 23.23 0 22.281V1.719zm7.415 18.372V9.253H3.813v10.838h3.602zm-1.8-12.318c1.255 0 2.037-.831 2.037-1.872-.023-1.063-.78-1.872-2.014-1.872-1.232 0-2.038.81-2.038 1.872 0 1.041.781 1.872 1.99 1.872h.024zm7.361 12.318v-6.053c0-.324.024-.648.12-.879.26-.646.852-1.317 1.848-1.317 1.304 0 1.824.993 1.824 2.451v5.798h3.602v-6.216c0-3.33-1.776-4.878-4.146-4.878-1.911 0-2.768 1.05-3.248 1.79v.037h-.024l.024-.037V9.252h-3.6c.046 1.018 0 10.838 0 10.838h3.6z"
      />
    </svg>
  );
}

export default LinkedinIcon;
