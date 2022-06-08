import { css } from '@emotion/css/macro';

export const index = (url: string) => css`
  height: 100%;
  width: 100%;
  padding: 60px 10px 10px;
  background: url("${url}");
  background-repeat:no-repeat; 
  background-size:100% 100%;
  -moz-background-size:100% 100%;
`;
