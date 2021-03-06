import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"

const styles = theme => ({
  paper: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
})

class AdvisingMeetings extends Component {
  render() {
    const classes = this.props.classes
    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Meet Type</TableCell>
              <TableCell numeric>Start / End Time</TableCell>
              <TableCell numeric>Start / End Date</TableCell>
              <TableCell numeric>Days</TableCell>
              <TableCell numeric>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.meetings.map(meet => {
              return (
                <TableRow key={meet.crn + Math.random()}>
                  <TableCell compact>
                    {meet.courseType}
                  </TableCell>
                  <TableCell numeric>
                    {meet.startTime + "-" + meet.endTime}
                  </TableCell>
                  <TableCell numeric>
                    {meet.startMonth +
                      "/" +
                      meet.startDay +
                      "/" +
                      meet.startYear +
                      "-" +
                      meet.endMonth +
                      "/" +
                      meet.endDay +
                      "/" +
                      meet.endYear}
                  </TableCell>
                  <TableCell numeric>
                    {meet.meetDays}
                  </TableCell>
                  <TableCell numeric>
                    {meet.buildingRoom}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

AdvisingMeetings.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { name: "AdvisingMeetings" })(
  AdvisingMeetings
)
