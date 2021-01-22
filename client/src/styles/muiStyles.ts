import { makeStyles } from '@material-ui/core/styles';

export const useBodyStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100vW',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vH',
      backgroundColor: '#00968810',
    },
  }),
  { index: 1 }
);

export const useTableStyles = makeStyles(
  (theme) => ({
    table: {
      '& thead th': {
        fontWeight: '600',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.light,
      },
    },
    clickableCell: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main + '15',
        cursor: 'pointer',
      },
    },
    scrollableTable: {
      '& thead th': {
        fontWeight: '600',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.light,
      },
      overflowY: 'auto',
      maxHeight: '350px',
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      paddingBottom: 20,
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(1.5),
      right: theme.spacing(1.5),
      zIndex: 1000,
    },
  }),
  { index: 1 }
);

export const useFormStyles = makeStyles(
  (theme) => ({
    submitBtn: {
      marginTop: '1.5em',
      height: '3.2em',
    },
    avatar: {
      color: theme.palette.primary.main,
      backgroundColor: '#d3d3d3',
    },
    fieldMargin: {
      marginTop: '1.5em',
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.8em',
    },
    radioGroupLabel: {
      marginRight: '1.5em',
    },
    formControlWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: 'auto',
      },
    },
  }),
  { index: 1 }
);

export const useMainPageStyles = makeStyles(
  (theme) => ({
    root: {
      padding: '1em 0',
      [theme.breakpoints.down('xs')]: {
        padding: '0.5em 0.5em',
      },
    },
    headerPaper: {
      padding: '0.8em 1.5em',
      marginBottom: '1em',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '0.3em 0.5em',
        marginBottom: '0.5em',
      },
    },
    headerIcon: {
      fontSize: '4.5em',
      marginRight: '0.2em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '3em',
        marginRight: '0.3em',
      },
    },
    projectsPaper: {
      padding: '1.5em',
      minHeight: 'calc(100vH - 248px)',
      marginBottom: '0.2em',
      [theme.breakpoints.down('xs')]: {
        padding: '0.7em 0.3em',
        minHeight: 'calc(100vH - 168px)',
        marginBottom: '0.1em',
      },
    },
    projectsListTable: {
      marginTop: '1.5em',
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
      },
    },
    detailsHeader: {
      padding: '1.2em 1.5em',
      marginBottom: '1em',
    },
    flexHeader: {
      display: 'flex',
      alignItems: 'center',
    },
    btnsWrapper: {
      margin: '1em 0',
      [theme.breakpoints.down('xs')]: {
        margin: '0.4em 0',
      },
    },
    iconButton: {
      backgroundColor: theme.palette.primary.main + '30',
      padding: '0.4em',
    },
    membersWrapper: {
      marginTop: '1em',
    },
    flexInput: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bugsPaper: {
      padding: '1.5em',
      marginBottom: '0.2em',
      minHeight: 'calc(100vH - 382px)',
    },
    notesPaper: {
      padding: '1.5em',
      marginBottom: '0.2em',
      minHeight: 'calc(100vH - 436px)',
    },
    notesWrapper: {
      margin: '1.5em 0',
    },
    singleNote: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '0.3em',
      marginTop: '0.8em',
    },
    avatar: {
      width: theme.spacing(4.8),
      height: theme.spacing(4.8),
      marginRight: '0.4em',
      marginTop: '0.3em',
      color: theme.palette.primary.main,
      backgroundColor: '#d3d3d3',
    },
    noteBody: {
      marginTop: '0.2em',
    },
    notesBtnWrapper: {
      margin: '0.5em 0',
    },
    iconText: {
      verticalAlign: 'middle',
      display: 'inline-flex',
    },
    iconCounters: {
      display: 'flex',
      width: '100px',
      justifyContent: 'space-between',
    },
    listItemWrapper: {
      padding: '0.4em 0.3em',
    },
    flexedWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
  { index: 1 }
);

export const useActionCardStyles = makeStyles(
  (theme) => ({
    inputs: {
      display: 'flex',
      minWidth: '100%',
      justifyContent: 'space-between',
      marginBottom: '1.5em',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '0.7em',
      },
    },
    searchBarWrapper: {
      width: '70%',
      [theme.breakpoints.down('xs')]: {
        width: '55%',
      },
    },
    sortBarWrapper: {
      width: '25%',
      [theme.breakpoints.down('xs')]: {
        width: '42%',
      },
    },
  }),
  { index: 1 }
);

export const useNavStyles = makeStyles(
  (theme) => ({
    container: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    logoWrapper: {
      marginRight: '1em',
      display: 'flex',
      alignItems: 'center',
    },
    logoBtn: {
      textTransform: 'none',
      fontSize: '1.2em',
      padding: '0.1em',
      marginRight: '0.3em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1em',
        marginLeft: '0.6em',
      },
    },
    svgImage: {
      width: '35px',
      marginRight: '5px',
      [theme.breakpoints.down('xs')]: {
        width: '30px',
      },
    },
    rightBtnWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    lastBtn: {
      marginLeft: '1em',
    },
    threeDotsBtn: {
      padding: '0.35em',
    },
    menuIcon: {
      marginRight: '8px',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: theme.spacing(4.1),
      height: theme.spacing(4.1),
      marginRight: '0.4em',
      color: theme.palette.primary.main,
      backgroundColor: '#d3d3d3',
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
      },
    },
    btnsWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    userBtnMob: {
      padding: '0.1em',
    },
  }),
  { index: 1 }
);

export const useAuthPageStyles = makeStyles(
  (theme) => ({
    root: {
      padding: '1.5em 3em',
      width: '320px',
      margin: 'auto',
      marginTop: '8%',
      [theme.breakpoints.down('xs')]: {
        width: 'auto',
        margin: '0.5em 0.5em',
        padding: '1em',
      },
    },
    form: {
      marginTop: '3em',
    },
    inputField: {
      marginBottom: '1.5em',
    },
    submitButton: {
      marginTop: '0.5em',
      height: '3.1em',
      fontSize: '1em',
      fontWeight: 500,
    },
    titleLogo: {
      display: 'block',
      width: '7em',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '6em',
      },
    },
    footerText: {
      marginTop: '1em',
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
    },
  }),
  { index: 1 }
);
