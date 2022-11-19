import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";

//used to display a list of events in a chronological order

//props:
//position in timeline to place the label(left, right, alternate)
//change dot color by color prop

const MuiTimeline = () => {
  return <Timeline>
    <TimelineItem>
        <TimelineOppositeContent color='success.main'> 09.30am</TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color='secondary'></TimelineDot>
            <TimelineConnector>

            </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>
            City A
        </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color='info.main'> 09.30am</TimelineOppositeContent>

        <TimelineSeparator>
            <TimelineDot color='success' variant='outlined'></TimelineDot>
            <TimelineConnector>

            </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>
            City B
        </TimelineContent>

    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
            City C
        </TimelineContent>
    </TimelineItem>
  </Timeline>;
};

export default MuiTimeline;
