import mail from '../../assets/img/mail.svg'

function Footer() {

  return (
    <footer className="footer">
      <hr />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginRight: "3vw" }}>
        <a href="mailto:guillaume.milleret@gmail.com">
          <svg width="132.26" height="101.68" viewBox="0 0 34.993 26.903" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#000" stroke-width="7.501">
              <path transform="matrix(.19997 0 0 .19997 -3.224 -8.475)" d="m19.871 46.129h167.48v127.03h-167.48z" />
              <path transform="matrix(.19997 0 0 .19997 -3.224 -8.475)"
                d="m20.226 46.306c50.865 72.789 105.52 85.947 166.77 0m-167.13 127.03 69.37-69.371" />
              <path transform="matrix(.19997 0 0 .19997 -3.224 -8.475)" d="m186.91 172.9-69.37-69.37" />
            </g>
          </svg>        
          </a>
        <p>06.08.48.83.02</p>
      </div>
    </footer>
  );
}

export default Footer;