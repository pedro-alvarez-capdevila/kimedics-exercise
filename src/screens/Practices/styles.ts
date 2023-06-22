import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  container: {
    height: '100%',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: "15px"
  },
  itemContainer: {
    display: "flex",
    alignItems: 'center',
    maxWidth: 250
  },
  checkboxInput: {
    borderColor: 'green'
  },
  nameText: {
    marginLeft: '10px',
    marginRight: '10px'
  }
}));