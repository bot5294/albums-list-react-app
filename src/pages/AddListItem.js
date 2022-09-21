import { React, useEffect } from 'react';
import { API_URLS } from '../utils';
function AddListItem(props) {
  const [album, setAlbum] = props.props;

  useEffect(() => {
    // alert(album, 'added to the list');
    console.log('album = ', album);
  }, [album]);

  const getById = (id) => {
    return document.getElementById(id);
  };
  const AddAlbum = (uid, aid, title) => {
    // useEffect((setAlbum) => {
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
        console.log(json);
        setAlbum([...album, json]);
      });
    // }, []);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let uid = getById('uid').value;
    let aid = getById('aid').value;
    let title = getById('_title').value;
    if (uid && aid && title) {
      AddAlbum(uid, aid, title);
    }
  };
  return (
    <div>
      <div>
        <h1>Add to Album</h1>
        <form>
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

      <div>
        Newly Addeed Albums List
        <ol>
          {album &&
            album.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    Album title : {item.title},User Id : {item.userId},Album Id
                    : {item.id}
                  </li>
                  <br />
                </>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
export default AddListItem;
