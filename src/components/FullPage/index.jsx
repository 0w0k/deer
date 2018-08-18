import { Component } from "react";
import styles from "./styles.less";
class FullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { pages } = this.props;
    return (
      <div className={styles.page}>
        <div className={styles.inner}>
          {
            pages.map((item, i) => {
              return (
                <div className={styles.block} key={i}>
                  { item }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default FullPage;