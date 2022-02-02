import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Breadcrumbs, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { useParams, useHistory } from "react-router-dom";
import Wisimage from '../../assets/westmead.jpeg'
import StaticDialog from './staticDialog'
import Issuance from './issuance'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DropzoneArea } from 'material-ui-dropzone'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch,useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > .fa': {
            margin: theme.spacing(2)
        }
    },
    root2: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },


    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
export default function StudentOTP({warning}) {
    const classes = useStyles();
    const History = useHistory()
    const [refreshs, setrefreshs] = React.useState(false);
    const [studentID, setstudentID] = React.useState('');
    const [emailAddress, setemailAddress] = React.useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const Dispatch = useDispatch();

    const ApplyFor = useSelector(state => state.reqDocsReducer.appliedFor)
    const Selected_tor = useSelector(state => state.reqDocsReducer.tor_type)
    const Selected_Cert = useSelector(state => state.reqDocsReducer.cert_type)
    const CertifiedFiles = useSelector(state => state.reqDocsReducer.certifiedCopy)

    const username_ = useSelector(state => state.reqDocsReducer.username)
    const password_ = useSelector(state => state.reqDocsReducer.password)

    const onChangeusername = (event) => {
        Dispatch({
            type:'passusername',
            applyusername:event.target.value,
          })
    };
    const onChangepassword = (event) => {
        Dispatch({
            type:'passpassword',
            applypassword:event.target.value,
        })
    };


    useEffect(()=>{
    },[])
    return (
        <Grid container spacing={1} >
            <Grid item xs={12} md={12} >
                <center>
                    <TextField
                        size="large"
                        style={{ width: '90%' }}
                        id="outlined-helperText"
                        label="Student No."
                        onChange={onChangeusername}
                        defaultValue={username_}
                        variant="outlined" />
                </center>
            </Grid>
            <Grid item xs={12} md={12}>
                <center>
                    <TextField
                        size="large"
                        style={{ width: '90%', }}
                        id="outlined-helperText"
                        label="Email address"
                        onChange={onChangepassword}
                        defaultValue={password_}
                        variant="outlined" />
                </center>
            </Grid>
        </Grid>
    );
}