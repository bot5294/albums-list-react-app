import { React, useEffect } from 'react';
import Album from '../components/Album';
import { API_URLS } from '../utils';
export default function DisplayList(props) {
  const [list, setList] = props.props;
  useEffect(() => {
    try {
      fetch(API_URLS.albums())
        .then((response) => response.json())
        .then((json) => setList(json));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 style={styles.heading}>All posts</h1>
      <div style={styles.box}>
        {list &&
          list.map((item, index) => {
            return <Album item={item} key={`album-${index}`} />;
          })}
      </div>
      {console.log('list inside display : ', list)}
    </div>
  );
}

const styles = {
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'grey',
    textShadow: '2px 2px black',
  },
};
