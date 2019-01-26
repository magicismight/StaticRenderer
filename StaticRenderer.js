import { Component, PropTypes } from 'react';

export default class extends Component {

    static propTypes = {
        shouldUpdate: PropTypes.bool.isRequired,
        render: PropTypes.func.isRequired,
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        return this.props.render();
    }

}
