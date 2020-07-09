import React from "react";
import { ListGroup, Col, Tab, Row } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <h1 className="text-center">Features</h1>
        <Row
          style={{
            margin: "5%",
          }}
        >
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Virtual Classroom
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Easy-to-use Interface
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Online Course Catalogs
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Screen Sharing
              </ListGroup.Item>

              <ListGroup.Item action href="#link5">
                Chat
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Test Assesment Modules
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Performance Reports
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://www.100pceffective.com/wp-content/uploads/virtualClassroom.png"
                  alt="Virtual"
                />
                <p>
                  Flexibility in teaching is one of the characteristics most
                  appreciated by students who choose to learn online. In
                  addition, it is a way to save costs and offer the added value
                  provided by the interactive and multimedia materials of
                  digital courses. Learning through virtual classrooms offers
                  greater flexibility and reach.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://i1.wp.com/blog-pantheon-prod.global.ssl.fastly.net/blog/wp-content/uploads/2019/12/Design_Build_Web_App_Code_UX_Content_Computer_Mac_Laptop.jpg?resize=625%2C391&ssl=1"
                  alt="Virtual"
                />
                <p>
                  As instructors are required to design courseware, they must be
                  comfortable in using the platform efficiently. The tool should
                  be designed in such a way that someone who does not know
                  coding must be able to use and operate it without difficulty.
                  As for students, they will appreciate a platform which allows
                  them to navigate easily and functions smoothly.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://elearningindustry.com/wp-content/uploads/2016/06/9-ways-creating-effective-online-training-strategy-employees.png"
                  alt="Virtual"
                />
                <p>
                  Ideally, with an implicit shopping basket choice, so online
                  students can rapidly buy the substance or select an eLearning
                  course with the snap of a catch. This, as well, ought to be
                  completely adaptable. For instance, you can transfer your own
                  logo, designs, text style, types, and catch styles.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://clipartart.com/images/audience-with-slideshow-free-clipart-5.jpg"
                  alt="Virtual"
                />
                <p>
                  For interactive meetings and webinars, screen sharing is
                  vital. You want to be able to share your entire screen as well
                  as individual apps on your desktop during a meeting. This
                  makes it easier for your video conference participants to
                  follow what the presenter is explaining.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link5" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://www.weblite.com.my/hubfs/blog-images/2019/december/8%20Reasons%20Why%20You%20Need%20Website%20Live%20Chat%20Now/livechat-1.jpg"
                  alt="Virtual"
                />
                <p>
                  Whether you’re broadcasting to a group of leads with a
                  marketing webinar or holding a meeting with employees, your
                  users will get more out of the experience if they can
                  interact. This is why a robust chat feature is so useful.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://pngimage.net/wp-content/uploads/2018/06/online-test-png-7.png"
                  alt="Virtual"
                />
                <p>
                  The registration and tracking of a student’s progress is
                  essential to correct the shortcomings that students present
                  immediately. The e-learning platforms must register all kinds
                  of information to present it in exhaustive reports that would
                  otherwise cost many hours of effort to the teaching staff.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7" className="text-center text-muted">
                <img
                  width="75%"
                  //   className="d-block"
                  src="https://i.gifer.com/7t65.gif"
                  alt="Virtual"
                />
                <p>
                  Performance metrics are important for evaluating how well
                  received your presentations are, which parts are the most
                  engaging, and how many people are attending your event. Look
                  for a platform with both attendance and chat reports so you
                  can get adequate feedback from your meetings and webinars.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
