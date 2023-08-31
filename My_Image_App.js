class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
    };
  }

  handleFavourite = () => {
    this.setState((prevState) => ({
      isFavourite: !prevState.isFavourite,
    }));
  };

  handleDelete = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this image?');
    if (shouldDelete) {
      console.log('Image deleted.');
    }
  };

  render() {
    const { imageUrl, title, source, location } = this.props.image;
    const { isFavourite } = this.state;

    return (
      <div className={`image-card ${isFavourite ? 'favourite' : ''}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>Source: {source}</p>
        <button onClick={this.handleFavourite}>
          {isFavourite ? 'Marked as Favourite' : 'Favourite'}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          imageUrl:
            'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xzscwkcrservgzrxnmau',
          title: 'Aug X Labs Logo (red n white)',
          source: 'https://www.crunchbase.com/organization/aug-x-labs',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccijj1pxYFK87Nu7TRYCaMFmuTjdwC3bfWw&usqp=CAU',
          title: 'Aug X Labs Logo (purple n white)',
          source: 'https://pitchbook.com/profiles/company/512531-47#signals'
        },
      ],
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    return (
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="dark-mode-switch">
          <label>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={this.toggleDarkMode}
            />
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </label>
        </div>
        <header>
          <h1>My Image App</h1>
        </header>
        <div className="image-list">
          {this.state.images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
