import React, { Component, PropTypes } from 'react'

function drawImage(props) {
  const {ctx, x, y, width, height, src} = props;
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, x, y, width, height);
  }
  img.src = src;
}

class Screenshot extends Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.workingss.getContext('2d');
    for (var i = 0; i < this.props.images.length; i++) {
      var imageobj = this.props.images[i];
      var x = this.refs.workingss.width() / 8 * imageobj.col;
      var y = this.refs.workingss.height() / 8 * imageobj.row;
      var width = this.refs.workingss.width() / 8;
      var height = this.refs.workingss.height() / 8;
      var src = "data:image/png;base64," + imageobj.imagestream;
      drawImage({ctx, x, y, width, height, src});
    }

    const myctx = this.refs.myss.getContext('2d');
    myctx.drawImage(this.refs.workingss, 0, 0);
  }

  render() {
    const { images } = this.props
    return (
      <div>
        <canvas ref="workingss" width={500} height={300}></canvas>
        <canvas ref="myss" width={500} height={300} ></canvas>
      </div>
    )
  }
}

Screenshot.propTypes = {
  images: PropTypes.array.isRequired
}

export default Screenshot
