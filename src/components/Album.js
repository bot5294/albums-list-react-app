import React from 'react';
import { API_URLS } from '../utils';

export default function Album(props) {
  const handleDeleteAlbum = (id) => {
    try {
      // get constnat url and add '/id' to it
      fetch(API_URLS.albums() + `/${id}`, {
        method: 'DELETE',
      }).then(() => alert(`Album with id = ${id} deleted successfully`));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAlbum = (id) => {
    try {
      // get the new title via prompt
      let newTitle = prompt('enter new title');
      //   generate url by adding '/id' to it
      fetch(API_URLS.albums() + `/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle }),
      })
        .then((res) => res.json())
        .then((data) =>
          alert(`Album title successfully updated to ${data.title}`)
        );
    } catch (error) {
      console.log(error);
    }
  };
  const item = props.item;
  return (
    <div style={styles.card}>
      <div>{item.title}</div>
      <div>
        <span
          style={styles.edit}
          onClick={() => handleUpdateAlbum(`${item.id}`)}
        >
          ✏️{' '}
        </span>
        <br />
        <span
          style={styles.delete}
          onClick={() => handleDeleteAlbum(`${item.id}`)}
        >
          {' '}
          x
        </span>
      </div>
    </div>
  );
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
    color: 'whitesmoke',
    margin: '10px',
    backgroundColor: 'rgb(110, 115, 156)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  delete: {
    color: 'red',
    display: 'inline',
    fontSize: '25px',
    cursor: 'default',
  },
  edit: {
    cursor: 'default',
  },
};
