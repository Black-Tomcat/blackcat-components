import React from "react";
import { View, Text } from "react-native";


export default class BText extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <Text>
                {children}
            </Text>
        )
    }
}