import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(2),
    width: theme.spacing(16),
  },
  textControl: {
    margin: theme.spacing(2)
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [boltClass, setBoltClass] = React.useState('');
  const [boltSize, setBoltSize] = React.useState('');
  const [boltGamma, setBoltGamma] = React.useState('');
  const [openBoltGamma, setopenBoltGamma] = React.useState('');
  const [openBoltClass, setOpenBoltClass] = React.useState(false);
  const [openBoltSize, setOpenBoltSize] = React.useState(false);

  // calculate the bolt info with class, size and gamma values

  const [fub, setFub] = React.useState(0);
  const [dvalue, setDvalue] = React.useState(0);
  const [dovalue, setDovalue] = React.useState(0);
  const [asvalue, setAsvalue] = React.useState(0);
  const [evalue, setEvalue] = React.useState(0);
  const [svalue, setSvalue] = React.useState(0);

  const handleBoltClassChange = (event) => {
    setBoltClass(event.target.value);
    let boltClass = event.target.value
    switch (boltClass) {
      case (boltClass = 4.6):
        setFub(400)
        break;
      case (boltClass = 4.8):
        setFub(400)
        break;
      case (boltClass = 5.6):
        setFub(500)
        break;
      case (boltClass = 5.8):
        setFub(500)
        break;
      case (boltClass = 6.8):
        setFub(600)
        break;
      case (boltClass = 8.8):
        setFub(800)
        break;
      case (boltClass = 10.9):
        setFub(1000)
        break;
      default:
        setFub(0)
    }
  };

  const handleBoltClassClose = () => {
    setOpenBoltClass(false);
  };

  const handleBoltClassOpen = () => {
    setOpenBoltClass(true);
  };

  const handleBoltSizeChange = (event) => {
    setBoltSize(event.target.value);
    let boltSize = event.target.value
    switch (boltSize) {
      case (boltSize = "M6"):
        setEvalue(10.89);
        setSvalue(9.54);
        setAsvalue(20.10);
        setDvalue(6);
        setDovalue(7.5);
        break;
      case (boltSize = "M8"):
        setEvalue(14.20);
        setSvalue(12.57);
        setAsvalue(36.60);
        setDvalue(8);
        setDovalue(9.5);
        break;
      case (boltSize = "M10"):
        setEvalue(17.59);
        setSvalue(15.57);
        setAsvalue(58.8);
        setDvalue(10);
        setDovalue(11.5);
        break;
      case (boltSize = "M12"):
        setEvalue(19.85);
        setSvalue(17.57);
        setAsvalue(84.3);
        setDvalue(12);
        setDovalue(13.5);
        break;
      case (boltSize = "M14"):
        setEvalue(22.78);
        setSvalue(20.16);
        setAsvalue(115.0);
        setDvalue(14);
        setDovalue(16);
        break;
      case (boltSize = "M16"):
        setEvalue(26.17);
        setSvalue(23.16);
        setAsvalue(157.0);
        setDvalue(16);
        setDovalue(18);
        break;
      default:
        setFub(0)
    }
  };

  const handleBoltSizeClose = () => {
    setOpenBoltSize(false);
  };

  const handleBoltSizeOpen = () => {
    setOpenBoltSize(true);
  };

  const handleBoltGammaChange = (event) => {
    setBoltGamma(event.target.value);
  };

  const handleBoltGammaClose = () => {
    setopenBoltGamma(false);
  };

  const handleBoltGammaOpen = () => {
    setopenBoltGamma(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container wrap="nowrap" spacing={2}>

              <Grid item xs zeroMinWidth>

                <Typography variant="h6" color="primary">BOLT INFO
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">Bolt Class</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openBoltClass}
                    onClose={handleBoltClassClose}
                    onOpen={handleBoltClassOpen}
                    value={boltClass}
                    onChange={handleBoltClassChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={4.6}>4.6</MenuItem>
                    <MenuItem value={4.8}>4.8</MenuItem>
                    <MenuItem value={5.6}>5.6</MenuItem>
                    <MenuItem value={6.8}>6.8</MenuItem>
                    <MenuItem value={8.8}>8.8</MenuItem>
                    <MenuItem value={10.9}>10.9</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">Bolt Size</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openBoltSize}
                    onClose={handleBoltSizeClose}
                    onOpen={handleBoltSizeOpen}
                    value={boltSize}
                    onChange={handleBoltSizeChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="M6">M6</MenuItem>
                    <MenuItem value="M8">M8</MenuItem>
                    <MenuItem value="M10">M10</MenuItem>
                    <MenuItem value="M12">M12</MenuItem>
                    <MenuItem value="M14">M14</MenuItem>
                    <MenuItem value="M16">M16</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">Gamma (γm2)</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openBoltGamma}
                    onClose={handleBoltGammaClose}
                    onOpen={handleBoltGammaOpen}
                    value={boltGamma}
                    onChange={handleBoltGammaChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="1.00">1.00</MenuItem>
                    <MenuItem value="1.25">1.25</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
          <Typography variant="h6" color="primary">
          </Typography>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="fub"
                    defaultValue={fub}
                    value={fub}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="d"
                    defaultValue={dvalue}
                    value={dvalue}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="d0"
                    defaultValue={dovalue}
                    value={dovalue}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="As"
                    defaultValue={asvalue}
                    value={asvalue}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="e"
                    defaultValue={evalue}
                    value={evalue}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    disabled
                    id="outlined-disabled"
                    label="s"
                    defaultValue={svalue}
                    value={svalue}
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container wrap="nowrap" spacing={2}>

              <Grid item xs zeroMinWidth>

                <Typography variant="h6" color="primary">BEARING INFO
                </Typography>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          
                          id="outlined"
                          label="e1"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          
                          id="outlined"
                          label="e2"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          
                          id="outlined"
                          label="p1"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          
                          id="outlined"
                          label="p2"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          
                          id="outlined"
                          label="t"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <FormControl>
                        <TextField className={classes.textControl}
                          id="outlined"
                          label="fn"
                          defaultValue="0"
                          variant="outlined"
                          InputProps={{
                            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
          <Typography variant="h6" color="primary">FARE INFO
          </Typography>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    id="outlined-disabled"
                    label="FvEd"
                    defaultValue="0"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">kn</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <FormControl>
                  <TextField className={classes.textControl}
                    
                    id="outlined-disabled"
                    label="FtEd"
                    defaultValue="0"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">kn</InputAdornment>,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={5}>
            
          <Button size="large" variant="contained" color="primary">
  Calculate the resistance
</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
