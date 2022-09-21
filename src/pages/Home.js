import React from 'react';

export default function Home() {
  return (
    <div className="center">
      <br></br>
      <div style={styles.wlcm}>Welcome</div>
    </div>
  );
}

const styles = {
  wlcm: {
    color: 'whitesmoke',
    fontSize: '76px',
    fontWeight: 'bold',
    textShadow: '4px 4px grey',
  },
};
