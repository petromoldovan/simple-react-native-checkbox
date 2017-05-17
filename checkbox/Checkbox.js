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
    };

    renderImg = () => {
        const {isChecked} = this.state;
        const {imageStyle, externalImgUrl, internalImgPath} = this.props;

        const tick = internalImgPath ? internalImgPath : checkmark;
        const imageStyleApplied = new Object.assign({}, styles.imageStyleBase, imageStyle);

        if (externalImgUrl && isChecked) return  <Image source={{uri: externalImgUrl}} style={imageStyleApplied} />;
        if (isChecked) return <Image source={tick} style={imageStyleApplied} />;

        return null;
    }

    renderLabel() {
        const {label, labelStyle} = this.props;

        if (!label) return null;

        const labelStyleApplied = new Object.assign({}, styles.labelStyleBase, labelStyle);

        return (
            <View>
                <Text style={labelStyleApplied}>{label}</Text>
            </View>
        )
    }

    render() {
        const {isChecked} = this.state;
        const {unselectedStyle, selectedStyle, containerStyle} = this.props;

        const unselectedStyleApplied = new Object.assign({}, styles.unselectedStyleBase, unselectedStyle);
        const selectedStyleApplied = new Object.assign({}, styles.selectedStyleBase, selectedStyle);
        const containerStyleApplied = new Object.assign({}, styles.containerBaseStyle, containerStyle);

        let mainStyle = [unselectedStyleApplied];
        if (isChecked) mainStyle.push(selectedStyleApplied);

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View  style={containerStyleApplied}>
                    <View style={[styles.checkboxStyleBase, mainStyle]}>
                        {this.renderImg()}
                    </View>
                    { this.renderLabel()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles ={
    containerBaseStyle: {
        flexDirection: 'row',
    },
    labelStyleBase: {
      fontSize: 14
    },
    checkboxStyleBase: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    unselectedStyleBase: {
        width: 20,
        height: 20,
        borderColor: '#939598',
        borderWidth: 2,
        backgroundColor: "#ddd",
        borderRadius: 3,
    },
    selectedStyleBase: {
        backgroundColor: "#fff",
        borderColor: '#B9E2A6',
        width: 20,
        height: 20,
    },
    imageStyleBase: {
        backgroundColor: "transparent",
        resizeMode: "contain",
        width: 10,
        height: 10,
    }
};

Checkbox.propTypes = {
    isChecked: React.PropTypes.bool,
    imageStyle: React.PropTypes.object,
    internalImgPath: React.PropTypes.string,
    externalImgUrl: React.PropTypes.string,
    unselectedStyle: React.PropTypes.object,
    selectedStyle: React.PropTypes.object,
    containerStyle: React.PropTypes.object,
    label: React.PropTypes.string,
    labelStyle: React.PropTypes.object,
};

Checkbox.defaultProps = {
    isChecked: false,
    unselectedStyle: {},
    selectedStyle: {}
};

export default Checkbox;
