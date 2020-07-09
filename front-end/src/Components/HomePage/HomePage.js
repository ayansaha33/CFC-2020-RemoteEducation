import React from "react";
import Carousel from "./Carous";
import Jumbo from "./Jumbo";

// app.listen(process.env.PORT || 3000, function () {
//   console.log(
//     "Express server listening on port %d in %s mode",
//     this.address().port,
//     app.settings.env
//   );
// });

function HomePage() {
  return (
    <React.Fragment>
      <Carousel />
      <Jumbo />
    </React.Fragment>
  );
}

export default HomePage;
