import React, { Component, Children, PropTypes } from 'react';

export default class extends Component {
    props: {
        shouldUpdate: boolean,
        render: Function,
    };

    static propTypes = {
        shouldUpdate: PropTypes.bool.isRequired,
        render: PropTypes.func.isRequired,
    };

    shouldComponentUpdate(nextProps: { shouldUpdate: boolean }): boolean {
        return nextProps.shouldUpdate;
    }

    render(): React.Element<any> {
        return this.props.render();
    }

}
