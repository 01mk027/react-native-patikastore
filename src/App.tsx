/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ProductCard from './components/product';

import product_data from './product_data.json';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const renderProducts = ({item}) => <ProductCard product={item}/>

function App(): React.JSX.Element {
  const numColumnss = 2;
  const gap = 5;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={product_data}
        numColumns={2}
        contentContainerStyle={{margin:0}}
        ListHeaderComponent={
          <View>
          <Text style={styles.mainCaption}>PATIKASTORE</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          
        />
        </View>
        }
        renderItem={renderProducts}
        numColumns={numColumnss}
        contentContainerStyle={{gap}}
        columnWrapperStyle={{gap}}
        
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{
  margin: 5
 },
 mainCaption:{
  color: 'violet',
  fontWeight: 'bold',
  fontSize: 32
 },
 input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius: 10
},
});

export default App;
