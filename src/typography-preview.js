import React from 'react';
import './styles/style.scss'

function Typography() {
  return (
    <div className="App" style={{
        display: 'grid',
        margin: '15px'
    }}>
        <span id="heading-01">Hello</span>
        <span id="heading-02">Hello</span>
        <span id="heading-03">Hello</span>
        <span id="heading-04">Hello</span>
        <span id="heading-05">Hello </span>
        <span id="heading-06">Hello </span>
        <hr />
        <span id="subtitle-01">Subtitle 1</span>
        <span id="subtitle-02">Subtitle 2</span>
        <hr />
        <span id="body-01">Body 1</span>
        <span id="body-02">Body 2</span>
        <hr />
        <span id="button">Button Text</span>
        <hr />
        <span id="caption">Caption</span>
        <hr />
        <span id="overline">Overline</span>
      </div>

  );
}

export default Typography;
