import { css } from '@emotion/react';
import FadeLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

function Loader() {
  return (
    <FadeLoader color={'#4aabf0fd'} loading={true} css={override} size={150} />
  );
}

export default Loader;
