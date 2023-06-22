import { createStyles } from "@mantine/core";

export const useStyles = createStyles( (_, {isOpen}: {isOpen: boolean}) => ( {
  container: {
    display: 'flex'
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 15px",
    height: '50px'
  },
  logo: {
    fontSize: '30px'
  },
  sidebar: {
    background: "#506ee5",
    color: "#fff",
    height: "100vh",
    width: isOpen ? "200px" : "50px",
    transition: "all 0.5s",
  },
  link: {
    display: "flex",
    color: "#fff",
    padding: "10px 15px",
    gap: "15px",
    transition: "all 0.5s",
    textDecoration: 'none'
  },
  childrenLink: {
    padding: "10px 10px 10px 55px",
  },
  itemText: {
    fontSize: '20px',
    display: isOpen ? "block" : "none"
  },
  subItemText: {
    fontSize: '13px',
    display: isOpen ? "block" : "none"
  },
  activeLink: {
    fontSize: '20px'
  },
  main: {
    width: isOpen ? 'calc(100vw - 200px)' : 'calc(100vw - 50px)'
  },
  itemLinkIcon: {
    fontSize: '20px'
  }
} ) );
