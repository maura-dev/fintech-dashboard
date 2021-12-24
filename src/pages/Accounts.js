import React from "react";
import { Avatar, Button, IconButton, MenuItem, Paper, Typography } from "@material-ui/core";
import { useStyles } from "../styles";
import SelectInput from "../components/SelectInput";
import Input from "../components/Input";
import { KeyboardArrowDown, Notifications } from "@material-ui/icons";

const Accounts = () => {
  const classes = useStyles()
  return (
    <div className={classes.inputSection}>
      <Paper className={classes.mainCont} elevation={0}>
        <Typography variant="h5" className={classes.mainTitle}>
          Create New Payment
        </Typography>
        <Paper className={classes.formSection} elevation={0}>
          <div className={classes.inputSection}>
            <SelectInput label="Select bank">
              <MenuItem value="Acesss">Acess Bank</MenuItem>
              <MenuItem value="UBA">UBA</MenuItem>
              <MenuItem value="Fidelity">Fidelity</MenuItem> 
            </SelectInput>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Input label="Account number"/>
          </div>
          <Input label="Account name"/>

          <Input label="Amount"/>

          <Button variant="contained" className={classes.primaryBtn} fullWidth>
              Create
            </Button>
          
        </Paper>
      </Paper>

      <Paper elevation={0} className={classes.aside}>
        <div className={classes.inputSection}>
          <IconButton className={classes.iconBtn}>
            <Notifications/>
          </IconButton>
          <Avatar sx={{width:56, height:56}}>MC</Avatar>
          <div>
            <Typography variant="p" className={classes.avatarName}>Michelle Cameson</Typography>
            <Typography variant="p" className={classes.userName}>@michy</Typography>
          </div>
          <KeyboardArrowDown/>
        </div>

        <div className={classes.walletBal}>
          <Typography variant="p" className={classes.wallet}>Wallet balance</Typography>
          <Typography variant="p" className={classes.bal}>$30,782.90</Typography>
        </div>

        <div className={classes.inputSection}>
          <Button variant="contained" className={classes.secondaryGreenBtn} fullWidth>
              Deposit
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Button variant="contained" className={classes.secondaryGhostBtn} fullWidth>
            Withdraw
          </Button>

        </div>

      </Paper>
    </div>
  );
};

export default Accounts;