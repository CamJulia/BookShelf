import React from 'react';

class ButtonAdd extends React.Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
    )
  }
}

export default ButtonAdd;