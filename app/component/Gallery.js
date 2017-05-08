import React , {Component} from 'react';

class Gallery extends Component {
    render() {
       let ifNoImg = 'https://freeiconshop.com/wp-content/uploads/edd/book-flat.png';

        return (
             <div>
              {
                 this.props.items.map((item,index) => {
                     let {title,imageLinks,infoLink} = item.volumeInfo;
                     return (
                         <div key={index} className ="book">
                           <img src={imageLinks !== undefined ? imageLinks.thumbnail : ifNoImg} 
                                   alt="book-image"
                                   className = "book-img"
                           />
                           <div className="book-text">
                             {title}
                           </div>
                         </div>
                     )
                 })
              }
            </div>
         )
    }
}
export default Gallery;