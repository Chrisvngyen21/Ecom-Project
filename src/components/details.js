import React, { Component } from "react";

class Details extends Component {
  render() {
    const { className, title, links, onClick } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details-title">{title}</div>
        <div className="details-links">
          {links.map((link, id) => {
            return (
              <a key={link.id} onClick={link.onClick} className="details-link">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Details;