import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex !important',
        flexDirection: 'row !important',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: '30px 0',
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)'
    },
    image: {
        marginLeft: '15px',
    },
}));


export { useStyles, theme };