import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  // constuctor() {
  //   super();
  //   this.gotToStore = this.gotToStore.bind(this);
  // }
  gotToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab text from box
    console.log(this.storeInput.value);
    // second transition from / to / store/:storeId
  }
  render() {
    /* cannot put comment at the top level of what is returned */
    return (
      <form className="store-selector" onSubmit={(e) => this.gotToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}



export default StorePicker;
