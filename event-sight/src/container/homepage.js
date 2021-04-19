import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import EventCard from "../components/EventCard";
import Sidebar from "../components/sidebar";
import { Img } from "../assets/URLImages";
import ESSpinner from "../UI/ESSpinner";
import { connect } from "react-redux";
import * as eventActions from "../store/actions/eventActions";

const Homepage = (props) => {

  useEffect(() => {
    props.displayEvents(props.sid, props.token);
  }, []);

  let eventsrender = null;

  if (props.loading) {

    eventsrender = <ESSpinner />;

  } else {

    let allEvents = [];
    if (props.events !== null) {

      let memberEvents = props.events.member_club_events.filter((event) => {
        if (event.open_to_all === false) {
          return event;
        }
      });

      let followedEvents = props.events.followed_club_events.filter((event) => {
        if (event.open_to_all === true) {
          return event;
        }
      });

      allEvents = [...allEvents, ...memberEvents, ...followedEvents];
    }

    eventsrender =<Row lg="2" md="2" sm="1" xs="1">{
        allEvents.map((event, index) => (
          <Col key={index}>
            <EventCard id={event.id} img={Img.img} event={event}/>
          </Col>
        ))}
      </Row>;
  }
  return (
    <>
      <Sidebar />
      {eventsrender}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
    events: state.event.events,
    sid : state.user.sid,
    token : state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayEvents: (sid, token) => dispatch(eventActions.displayEvents(sid, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
