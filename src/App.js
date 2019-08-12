import React, { Component, Fragment } from 'react';
import Photo from './components/Photo'
import PhotoListItem from './components/PhotoListItem'
import Header from './components/Header'
import './App.css'
import 'bootstrap/scss/bootstrap.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const PHOTODATA = [
  {
    id: 1,
    category: 'Yes',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0067.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title A',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }, {
    id: 2,
    category: 'Maybe',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0066.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title B',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
  },
  {
    id: 3,
    category: 'No',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0065.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title C',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
  }, {
    id: 4,
    category: 'Yes',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0064.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title D',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
  }, {
    id: 5,
    category: 'Maybe',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0063.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title E',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
  }, {
    id: 6,
    category: 'No',
    imageUrl: 'https://heyjoe.io/wp-content/uploads/2019/07/Non-Union-GameStop-Callback-sizecards_page-0062.jpg',
    thumbnail: 'https://via.placeholder.com/150x100',
    title: 'Title F',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
  }
];

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedCategories: PHOTODATA,
      active: false,
      photoIndex: 0,
      isOpen: false,
      isListView: false
    }
  }

  getInitialState() {
    return {
      displayedCategories: PHOTODATA,
      active: false
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  }

  selectCategory = (element) => {
    var categoryName = element.toLowerCase();
    var displayedCategories = PHOTODATA.filter(function (el) {
      var searchValue = el.category.toLowerCase();
      return searchValue.indexOf(categoryName) !== -1;
    });

    this.setState({
      displayedCategories: displayedCategories
    });
  }

  resetFilter = (element) => {
    this.setState({
      displayedCategories: PHOTODATA
    });
  }

  openLightBox = (photoIndex) => {
    this.setState({ isOpen: true, photoIndex: photoIndex })
  }

  handleListViewChecked = () => {
    this.setState({ isListView: !this.state.isListView })
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.state.displayedCategories;
    const self = this
    var categoryToSelect = this.selectCategory;
    var getUniqueCategories = [];
    PHOTODATA.forEach(function (el) {
      if (getUniqueCategories.indexOf(el.category) === -1) getUniqueCategories.push(el.category);
    })

    return (
      <Fragment>
        <Header />
        <main role="main">
          <section className="jumbotron text-center mb-0">
            <div className="container">
              <h1 className="jumbotron-heading">Album ratings</h1>
              <p className="lead text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={this.resetFilter}> All </button>
                {
                  getUniqueCategories.map(function (el, i) {
                    var boundClick = categoryToSelect.bind(null, el);
                    return <button type="button" className="btn btn-secondary" onClick={boundClick} category={el} key={i}>{el}</button>
                  })
                }
              </div>
            </div>
          </section>
          <div className="pb-5 pt-5 bg-light">
            <div className="container">
              <div className="text-right">
                <div className="custom-control custom-switch mb-4">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleListViewChecked} />
                  <label className="custom-control-label" htmlFor="customSwitch1">List View</label>
                </div>
              </div>
              <div className="row">
                {
                  !this.state.isListView && this.state.displayedCategories.map(function (el, i) {
                    return <Photo key={el.id} imageUrl={el.thumbnail} category={el.category} title={el.title} onClick={self.openLightBox.bind(null, i)} description={el.description} />
                  })
                }
                {
                  this.state.isListView && this.state.displayedCategories.map(function (el, i) {
                    return <PhotoListItem key={el.id} imageUrl={el.thumbnail} category={el.category} title={el.title} onClick={self.openLightBox.bind(null, i)} description={el.description} />
                  })
                }
              </div>
            </div>
          </div>
        </main>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].imageUrl}
            nextSrc={images[(photoIndex + 1) % images.length].imageUrl}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].imageUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Fragment>
    );
  }
}
