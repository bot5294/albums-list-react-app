import React from 'react';

export default function Album(props) {
  return <div style={styles.card}>{props.item.title}</div>;
}

const styles = {
  card: {
    padding: '10px',
    width: '20em',
    borderTop: '4px solid black',
    borderLeft: '4px solid black',
    borderRadius: '0 0 20px 0',
    textShadow: '2px 2px black',
    textAlign: 'center',
    color: 'whitesmoke', //'rgb(82, 17, 57)',
    margin: '10px',
    backgroundColor: 'rgb(110, 115, 156)',
  },
};
