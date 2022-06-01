import { injectGlobal } from '@emotion/css/macro';

injectGlobal`
:root {
  --red: #e54d42;
  --orange: #f37b1d;
  --yellow: #fbbd08;
  --olive: #8dc63f;
  --green: #39b54a;
  --cyan: #1cbbb4;
  --blue: #0081ff;
  --purple: #6739b6;
  --mauve: #9c26b0;
  --pink: #e03997;
  --brown: #a5673f;
  --grey: #8799a3;
  --black: #333333;
  --darkGray: #666666;
  --gray: #aaaaaa;
  --ghostWhite: #f1f1f1;
  --white: #ffffff;
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body,
#root,
.container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
`;
