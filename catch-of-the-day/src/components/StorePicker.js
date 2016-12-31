import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  gotToStore() {
    console.log('You Changed the URL');
    // first grab text from box
    // second transition from / to / store/:storeId
  }
  render() {
    /* cannot put comment at the top level of what is returned */
    return (
      <form className="store-selector" onSubmit={this.gotToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
