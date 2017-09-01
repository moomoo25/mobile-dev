import React,{Component} from 'react';
import { StyleSheet, Text, View,ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BookDetail from './BookDetail';
const data=[{title:'java',author:'sdesa',book_image:'https:\/\/s1.nyt.com\/du\/books\/images\/9780399181207.jpg'},
      {title:'weewee',author:'saawaddeeee',book_image:'https:\/\/s1.nyt.com\/du\/books\/images\/9780399181207.jpg'}];
    let book=[{}]
export default class BookList extends Component {
    
  constructor(props){
    super(props)
    let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2})
    this.state={dataSource:ds.cloneWithRows(data)}
  }
  componentWillMount  (){
    console.log('componentWillMount running... state: ', this.state);
    
    fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
          .then((response) => response.json())
          .then((responseJSON) => {
            book = responseJSON.results.books;
            console.log('reponseJSON: ', responseJSON);
    
            this.setState(
              {
                dataSource:this.state.dataSource.cloneWithRows(book)
                }
              );
          })
          .catch((error) => {
            console.warn(error);
          });
  }
  _renderRow(rowdata){
    return <BookDetail {...rowdata}/>;
  }

  render() {
    return (
      <View style={styles.container}>
        
      <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
