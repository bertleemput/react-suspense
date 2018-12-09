import * as React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: fr fr fr;

  > div {
    grid-row: 1;
    background-color: gray;
  }
`;

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <Grid>
        <div>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Donec ac sem dapibus, euismod ante eget, posuere nibh.</li>
          <li>Quisque eu sapien malesuada, tincidunt ligula et, dictum sapien.</li>
          <li>Mauris dignissim lorem quis lorem posuere, vel egestas lectus sollicitudin.</li>
          <li>Duis eget est at dui suscipit pellentesque eu ac nibh.</li>
          <li>Vivamus imperdiet tortor non dictum aliquet.</li>
          <li>Vivamus nec urna varius, vestibulum ipsum sed, gravida purus.</li>
          <li>Suspendisse lobortis diam at est euismod, id iaculis risus ullamcorper.</li>
          <li>Nullam posuere nisi maximus accumsan posuere.</li>
          <li>Nullam in lorem ullamcorper, faucibus dolor quis, tempus libero.</li>
          <li>Mauris suscipit sem nec est condimentum, at interdum augue cursus.</li>
        </div>
        <div>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Donec ac sem dapibus, euismod ante eget, posuere nibh.</li>
          <li>Quisque eu sapien malesuada, tincidunt ligula et, dictum sapien.</li>
          <li>Mauris dignissim lorem quis lorem posuere, vel egestas lectus sollicitudin.</li>
          <li>Duis eget est at dui suscipit pellentesque eu ac nibh.</li>
          <li>Vivamus imperdiet tortor non dictum aliquet.</li>
          <li>Vivamus nec urna varius, vestibulum ipsum sed, gravida purus.</li>
          <li>Suspendisse lobortis diam at est euismod, id iaculis risus ullamcorper.</li>
          <li>Nullam posuere nisi maximus accumsan posuere.</li>
          <li>Nullam in lorem ullamcorper, faucibus dolor quis, tempus libero.</li>
          <li>Mauris suscipit sem nec est condimentum, at interdum augue cursus.</li>
        </div>
        <div>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Donec ac sem dapibus, euismod ante eget, posuere nibh.</li>
          <li>Quisque eu sapien malesuada, tincidunt ligula et, dictum sapien.</li>
          <li>Mauris dignissim lorem quis lorem posuere, vel egestas lectus sollicitudin.</li>
          <li>Duis eget est at dui suscipit pellentesque eu ac nibh.</li>
          <li>Vivamus imperdiet tortor non dictum aliquet.</li>
          <li>Vivamus nec urna varius, vestibulum ipsum sed, gravida purus.</li>
          <li>Suspendisse lobortis diam at est euismod, id iaculis risus ullamcorper.</li>
          <li>Nullam posuere nisi maximus accumsan posuere.</li>
          <li>Nullam in lorem ullamcorper, faucibus dolor quis, tempus libero.</li>
          <li>Mauris suscipit sem nec est condimentum, at interdum augue cursus.</li>
        </div>
      </Grid>
    </>
  );
}

export default AboutPage;
