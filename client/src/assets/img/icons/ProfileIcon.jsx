/* eslint-disable react/prop-types */
const ProfileIcon = ({ color = "#0F172A", size = 16, style }) => {
  return (
    <div className={`flex items-center ${style}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 20.75C1.5 19.2913 2.07946 17.8924 3.11091 16.8609C4.14236 15.8295 5.54131 15.25 7 15.25H18C19.4587 15.25 20.8576 15.8295 21.8891 16.8609C22.9205 17.8924 23.5 19.2913 23.5 20.75C23.5 21.4793 23.2103 22.1788 22.6945 22.6945C22.1788 23.2103 21.4793 23.5 20.75 23.5H4.25C3.52065 23.5 2.82118 23.2103 2.30546 22.6945C1.78973 22.1788 1.5 21.4793 1.5 20.75Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 9.75C14.7782 9.75 16.625 7.90317 16.625 5.625C16.625 3.34683 14.7782 1.5 12.5 1.5C10.2218 1.5 8.375 3.34683 8.375 5.625C8.375 7.90317 10.2218 9.75 12.5 9.75Z"
          stroke={color}
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
};

export default ProfileIcon;
