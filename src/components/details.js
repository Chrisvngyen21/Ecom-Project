import React, { Component } from "react";

class Details extends Component {
  render() {
    const { title, links, onClick } = this.props;
    return (
      <div className="details">
        <div className="details-title">{title}</div>
        <div className="details-links">
          {links.map((link, id) => {
            return (
              <a key={id} onClick={link.onClick} className="details-link">
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
