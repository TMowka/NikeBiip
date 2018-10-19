export default theme => ({
  layout: {
    color: theme.palette.primary.light
  },
  title: {
    color: theme.palette.primary.contrastText
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  }
});