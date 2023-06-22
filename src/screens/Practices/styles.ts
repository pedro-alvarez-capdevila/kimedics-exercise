import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    maxHeight: '100vh',
    overflow: 'scroll',
    padding: '0 20px'
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: "15px",
  },
  itemContainer: {
    display: "flex",
    alignItems: 'center',
    maxWidth: "400px",
    [ `@media (max-width: 500px)` ]: {
			maxWidth: "350px"
		},
    [ `@media (max-width: 350px)` ]: {
			maxWidth: "300px"
		},
  },
  checkboxInput: {
    borderColor: 'green'
  },
  nameText: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  searchBar: {
    width: '400px',
    marginBottom: '30px',
    marginTop: '30px',
    [ `@media (max-width: 500px)` ]: {
    width: '350px',
		},
    [ `@media (max-width: 350px)` ]: {
    width: '300px',
		},
  }
}));