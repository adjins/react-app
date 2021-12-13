import { Component } from 'react';

class TOC extends Component {
  //반복문

  render() {
    //반복문 (return 안에서는 안됨)
    const list = [];//list를 변수로 만들어야 값이 들어감
    for (let i = 0; i < this.props.contents.length; i++) {
      list.push(<li key={this.props.contents[i].id}>
        <a href={this.props.contents[i].id + '.html'}
          onClick={(e) => {
            this.props.onChangePage(this.props.contents[i].id);
            e.preventDefault();
          }}>
          {this.props.contents[i].title}
        </a></li>); // JSX
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export { TOC };