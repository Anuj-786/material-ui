import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 30,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    overflow: "auto"
  }
};
export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = " Please select the exercise"
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem button>
                      <ListItemText
                        key={id}
                        primary={title}
                        onClick={() => onSelect(id)}
                      />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography key={id} variant="display1">
          {title}
        </Typography>
        <Typography key={id} variant="subheading" style={{ marginTop: 10 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
