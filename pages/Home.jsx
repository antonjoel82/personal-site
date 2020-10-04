import React from 'react';

const Home = () => {
  return (
    <div>
      <TestText>Testing</TestText>
      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>Let's bounce.</Animated>
    </div>
  );
};

export default Home;
