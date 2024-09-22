declare module 'react-native-checkbox' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    interface CheckBoxProps {
      value: boolean;
      onValueChange?: (value: boolean) => void;
      style?: StyleProp<ViewStyle>;
      disabled?: boolean;
      tintColors?: { true: string, false: string };
    }
  
    export default class CheckBox extends Component<CheckBoxProps> {}
  }
  