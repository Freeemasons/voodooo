import React, {Component} from "react";
import Post from "./Post";

// export default ({posts}) => {
//   if (!posts.length) {
//     return <button>постов нет</button>
//   }
//   return (
//     posts.map(post => < Post post={post} key={post}/>)
//   )
// }

class PostsSynchron extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this)
  }

  state = {
    currencies: [
      {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',

      }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',

      }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',

      }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
      }
    ]
  }


  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let currencies = this.state.currencies.filter(function (el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      currencies: currencies
    });
  }


  render(){


    const postShow = this.state.currencies.map(el=> {
      return (
        <div key={el.id}>
          <ul className="ul-bg">
            <li  >
              {el.phoneNumber}
            </li>
            <li >
              {el.name}
            </li>
          </ul>
        </div>
      );
    })

    return (
      <div>
        <input type="text" placeholder="Search..."  onChange={this.handleSearch} />
        {postShow}
      </div>

    )
  }


}

export default PostsSynchron;
