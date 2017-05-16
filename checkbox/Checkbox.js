import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Image, Text} from 'react-native';

import checkmark from './img/checkmark.png';


class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.isChecked
        }
    }

    onPress = () => {
        const {actionCallback} = this.props;
        const {isChecked} = this.state;

        this.setState(() => {return {isChecked: !isChecked}});
        if (actionCallback && actionCallback instanceof Function) actionCallback(!isChecked);
    }

    renderImg = () => {
        const {isChecked} = this.state;
        const {imageStyles} = this.props;

        const tick = this.props.img ? this.props.img : checkmark;
        const imageStyleApplied = new Object.assign({}, styles.image, imageStyles);

        if (isChecked) return <Image source={tick} style={imageStyleApplied} />

        return null;
    }

    renderLabel() {
        const {label} = this.props;

        if (!label) return null;

        return (
            <View>
                <Text></Text>
            </View>
        )
    }

    render() {
        const {isChecked} = this.state;
        const {unselectedStyle, selectedStyle} = this.props;

        const unselectedStyleApplied = new Object.assign({}, styles.unselected, unselectedStyle);
        const selectedStyleApplied = new Object.assign({}, styles.selected, selectedStyle);

        let mainStyle = [unselectedStyleApplied];
        if (isChecked) mainStyle.push(selectedStyleApplied);

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={[styles.baseStyle, mainStyle]}>
                    {this.renderImg()}
                </View>
                { this.renderLabel()}
            </TouchableWithoutFeedback>
        )
    }
}

const styles ={
    baseStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
    unselected: {
        width: 20,
        height: 20,
        borderColor: '#939598',
        borderWidth: 2,
        backgroundColor: "#ddd",
        borderRadius: 3,
    },
    selected: {
        backgroundColor: "#fff",
        borderColor: '#B9E2A6',
        width: 20,
        height: 20,
    },
    image: {
        backgroundColor: "transparent",
        resizeMode: "contain",
        width: 10,
        height: 10,
    }
};

Checkbox.propTypes = {
    isChecked: React.PropTypes.bool,
    imageStyles: React.PropTypes.object,
    img: React.PropTypes.string,
    unselectedStyle: React.PropTypes.object,
    selectedStyle: React.PropTypes.object,
};

Checkbox.defaultProps = {
    isChecked: false,
    unselectedStyle: {},
    selectedStyle: {}
};

export default Checkbox;
