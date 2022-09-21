import { React, useEffect } from 'react';
import { API_URLS } from '../utils';
function AddListItem(props) {
  // get hook from props
  const [album, setAlbum] = props.props;

  const getById = (id) => {
    // getById func is a shorthand func
    return document.getElementById(id);
  };
  const AddAlbum = (uid, aid, title) => {
    try {
      // using POST method add new album
      fetch(API_URLS.albums(), {
        method: 'POST',
        body: JSON.stringify({
          id: aid,
          title: title,
          userId: uid,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // add new album to the array
          setAlbum([...album, json]);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFormSubmit = (e) => {
    // prevent the form's default behaviour
    e.preventDefault();
    // extract ids
    let uid = getById('uid').value;
    let aid = getById('aid').value;
    let title = getById('_title').value;
    if (uid && aid && title) {
      // if inputs are not undefined
      AddAlbum(uid, aid, title);
    }
  };
  return (
    <div>
      <div>
        <h3 className="center">Add New Album</h3>
        <form style={styles.form}>
          <label>
            {' '}
            User Id : <input name="uid" id="uid" />
          </label>
          <br />
          <label>
            {' '}
            Album Id : <input name="aid" id="aid" />
          </label>
          <br />
          <label>
            {' '}
            Title : <input name="title" id="_title" />
          </label>
          <br />
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>
            Add
          </button>
        </form>
      </div>
      {/* update Album */}
      <hr />
      <h3 className="center">Newly Added Albums :</h3>
      <div style={styles.list}>
        <table>
          <thead>
            <th> Album Title </th>
            <th> User Id </th>
            <th> Album Id </th>
          </thead>
          <tbody>
            {album &&
              album.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  form: {
    border: '2px solid black',
    width: '16em',
    textAlign: 'center',
    margin: '0 auto',
    padding: '5px',
    boxShadow: '4px 4px white',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default AddListItem;
