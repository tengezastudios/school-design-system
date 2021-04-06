import React from 'react';
import {Tag} from '../Tags/Tag';
import '../../styles/style.scss';
import colors from '../../styles/colors';

export default {
  title: 'Tags',
};

//tag base
export const TagBase = () => (<Tag cls="tag-base-style tag-container-interactive tag-text">
  Tag label
    <svg className="interactive-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 4L12 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Tag>);


// tag single
export const TagSingle = () => (<Tag cls="tag-container tag-text">Tag label</Tag>);

//tag interactive
export const TagInteractive = () => (<Tag cls="tag-container-interactive tag-text">
  Tag label
    <svg className="interactive-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 4L12 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Tag>);

//tag base group 
export const TagBaseGroup = () => (<div className="base-group">
<Tag cls="tag-container tag-text">Tag label</Tag>
<Tag cls="tag-container tag-text">Tag label</Tag>
<Tag cls="tag-container tag-text">Tag label</Tag>
</div>)

//tag interactive group
export const TagInteractiveGroup = () => (<div className="base-group">
<Tag cls="tag-container-interactive tag-text">
  Tag label
    <svg className="interactive-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 4L12 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Tag>
  <Tag cls="tag-container-interactive tag-text">
  Tag label
    <svg className="interactive-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 4L12 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Tag>
  <Tag cls="tag-container-interactive tag-text">
  Tag label
    <svg className="interactive-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 4L12 12" stroke={colors.$white} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </Tag>
</div>)
