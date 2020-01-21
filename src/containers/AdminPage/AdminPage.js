import React, {Component, Fragment} from 'react';
import Navigation from "../../components/UI/Navigation/Navigation";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

class AdminPage extends Component {
  render() {
    return (
        <Fragment>
          <Navigation/>
          <Container maxWidth='md'>
              <Grid container item xs={12} justify="space-between" direction="row">
                <Grid item xs={6}>
                  <Typography>
                    MENU
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                      variant="contained" color="secondary"
                      component={NavLink} to="/add"
                  >ADD NEW ITEM
                  </Button>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
          </Container>
        </Fragment>
    );
  }
}

export default AdminPage;