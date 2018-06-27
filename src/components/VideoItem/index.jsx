import React from 'react';
import PropTypes from 'prop-types';

function VideoItem(props) {
  if (props.video) {
    return (
      <div className="video-detail col-md-8">
        <iframe
          title={props.video.snippet.title}
          src={`http://youtube.com/embed/${props.video.id.videoId}`}
        />
      </div>
    );
  }
  return '';
}

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
