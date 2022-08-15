// import React from "react";
// import { Container } from "semantic-ui-react";
// // import Header from "../components/Header";

// export default function LayoutBasic(props) {
//   const { children } = props;

//   return (
//     <>
//       <h1>Header</h1>
//       <Container className="layout-basic">{children}</Container>
//     </>
//   );
// }

import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../components/Header";

export default function LayoutBasic(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Container className="layout-basic">{children}</Container>
    </>
  );
}